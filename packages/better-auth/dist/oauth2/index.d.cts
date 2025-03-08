import { P as ProviderOptions, O as OAuth2Tokens } from '../shared/better-auth.DwXmtNRS.cjs';
export { a as OAuthProvider } from '../shared/better-auth.DwXmtNRS.cjs';
import * as jose from 'jose';
export { g as generateState, p as parseState } from '../shared/better-auth.CeybE1Oy.cjs';
import '../shared/better-auth.Bi8FQwDD.cjs';
import 'zod';
import '../shared/better-auth.p6p7jTP0.cjs';
import 'kysely';
import 'better-call';
import 'better-sqlite3';

declare function createAuthorizationURL({ id, options, authorizationEndpoint, state, codeVerifier, scopes, claims, redirectURI, duration, prompt, }: {
    id: string;
    options: ProviderOptions;
    redirectURI: string;
    authorizationEndpoint: string;
    state: string;
    codeVerifier?: string;
    scopes: string[];
    claims?: string[];
    duration?: string;
    prompt?: boolean;
}): Promise<URL>;

declare function validateAuthorizationCode({ code, codeVerifier, redirectURI, options, tokenEndpoint, authentication, deviceId, }: {
    code: string;
    redirectURI: string;
    options: ProviderOptions;
    codeVerifier?: string;
    deviceId?: string;
    tokenEndpoint: string;
    authentication?: "basic" | "post";
}): Promise<OAuth2Tokens>;
declare function validateToken(token: string, jwksEndpoint: string): Promise<jose.JWTVerifyResult<jose.JWTPayload>>;

declare function generateCodeChallenge(codeVerifier: string): Promise<string>;
declare function getOAuth2Tokens(data: Record<string, any>): OAuth2Tokens;

export { OAuth2Tokens, ProviderOptions, createAuthorizationURL, generateCodeChallenge, getOAuth2Tokens, validateAuthorizationCode, validateToken };
