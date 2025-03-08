import { betterFetch } from "@better-fetch/fetch";
import { createRemoteJWKSet, decodeJwt, jwtVerify } from "jose";
import { BetterAuthError } from "../error";
import type { OAuthProvider, ProviderOptions } from "../oauth2";
import { createAuthorizationURL, validateAuthorizationCode } from "../oauth2";
import { logger } from "../utils/logger";

export interface KakaoDefaultProfile {
	type: "default";
	id: number;
	connected_at: string;
	properties?: {
		nickname?: string;
		profile_image?: string;
		thumbnail_image?: string;
	} & Record<string, any>;
	kakao_account?: {
		profile_nickname_needs_agreement?: boolean;
		profile_image_needs_agreement?: boolean;
		profile?: {
			nickname?: string;
			thumbnail_image_url?: string;
			profile_image_url?: string;
			is_default_image?: boolean;
		};
		email_needs_agreement?: boolean;
		is_email_valid?: boolean;
		is_email_verified?: boolean;
		email?: string;
		age_range_needs_agreement?: boolean;
		age_range?: string;
		birthday_needs_agreement?: boolean;
		birthday?: string;
		gender_needs_agreement?: boolean;
		gender?: string;
	};
}

export interface KakaoOIDCProfile {
	type: "oidc";
	sub: string;
	aud: string;
	exp: number;
	iat: number;
	iss: string;
	nickname?: string;
	picture?: string;
	email?: string;
	email_verified?: boolean;
	nonce?: string;
}

export type KakaoProfile = KakaoDefaultProfile | KakaoOIDCProfile;

export interface KakaoOptions extends ProviderOptions<KakaoProfile> {
	prompt?: "login" | "none" | "consent";
	service_terms?: string;
}

export const kakao = (options: KakaoOptions) => {
	return {
		id: "kakao",
		name: "Kakao",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			if (!options.clientId || !options.clientSecret) {
				logger.error(
					"Client Id and Client Secret is required for Kakao. Make sure to provide them in the options.",
				);
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			if (!codeVerifier) {
				throw new BetterAuthError("codeVerifier is required for Kakao");
			}
			const _scopes = options.disableDefaultScope
				? []
				: ["openid", "profile_nickname", "profile_image", "account_email"];
			options.scope && _scopes.push(...options.scope);
			scopes && _scopes.push(...scopes);
			const url = await createAuthorizationURL({
				id: "kakao",
				options,
				authorizationEndpoint: "https://kauth.kakao.com/oauth/authorize",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
			});

			options.prompt && url.searchParams.set("prompt", options.prompt);
			options.service_terms &&
				url.searchParams.set("service_terms", options.service_terms);

			return url;
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://kauth.kakao.com/oauth/token",
			});
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) {
				return false;
			}

			if (options.verifyIdToken) {
				return options.verifyIdToken(token, nonce);
			}

			try {
				const { payload: jwtClaims } = await jwtVerify(
					token,
					createRemoteJWKSet(
						new URL("https://kauth.kakao.com/.well-known/jwks.json"),
					),
					{
						algorithms: ["RS256"],
						audience: options.clientId,
						issuer: "https://kauth.kakao.com",
					},
				);

				if (nonce && jwtClaims.nonce !== nonce) {
					return false;
				}

				return !!jwtClaims;
			} catch (error) {
				return false;
			}
		},
		async getUserInfo(token) {
			if (options.getUserInfo) {
				return options.getUserInfo(token);
			}

			if (token.idToken && !token.accessToken) {
				const user = {
					...decodeJwt(token.idToken),
					type: "oidc",
				} as KakaoOIDCProfile;

				const userMap = await options.mapProfileToUser?.(user);

				return {
					user: {
						id: user.sub,
						name: user.nickname,
						email: user.email,
						image: user.picture,
						emailVerified: true,
						...userMap,
					},
					data: user,
				};
			}

			const { data: response } = await betterFetch<KakaoProfile>(
				"https://kapi.kakao.com/v2/user/me",
				{
					headers: {
						Authorization: `Bearer ${token.accessToken}`,
					},
				},
			);

			if (!response) {
				return null;
			}
			const data = { ...response, type: "default" } as KakaoDefaultProfile;

			const userMap = await options.mapProfileToUser?.(data);

			return {
				user: {
					id: String(data.id),
					name:
						data.properties?.nickname || data.kakao_account?.profile?.nickname,
					email: data.kakao_account?.email,
					image:
						data.properties?.profile_image ||
						data.kakao_account?.profile?.profile_image_url,
					emailVerified: data.kakao_account?.is_email_verified === true,
					...userMap,
				},
				data,
			};
		},
	} satisfies OAuthProvider<KakaoProfile | KakaoOIDCProfile>;
};
