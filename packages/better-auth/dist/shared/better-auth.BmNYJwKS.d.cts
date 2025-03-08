import { G as GenericEndpointContext } from './better-auth._yqAyKjX.cjs';

declare function generateState(c: GenericEndpointContext, link?: {
    email: string;
    userId: string;
}): Promise<{
    state: string;
    codeVerifier: string;
}>;
declare function parseState(c: GenericEndpointContext): Promise<{
    codeVerifier: string;
    expiresAt: number;
    callbackURL: string;
    errorURL?: string | undefined;
    newUserURL?: string | undefined;
    link?: {
        email: string;
        userId: string;
    } | undefined;
    requestSignUp?: boolean | undefined;
}>;

export { generateState as g, parseState as p };
