import * as better_call from 'better-call';
import { z } from 'zod';
import { f as BetterAuthOptions, j as InferUser, k as InferSession } from '../../shared/better-auth.DisdHfy3.mjs';
import '../../shared/better-auth.Bi8FQwDD.mjs';
import 'kysely';
import '../../shared/better-auth.BxaQRd7S.mjs';
import 'jose';
import 'better-sqlite3';

declare const customSession: <Returns extends Record<string, any>, O extends BetterAuthOptions = BetterAuthOptions>(fn: (session: {
    user: InferUser<O>;
    session: InferSession<O>;
}) => Promise<Returns>, options?: O) => {
    id: "custom-session";
    endpoints: {
        getSession: {
            <C extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                } | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: Returns | null;
            } : Returns | null>;
            options: {
                method: "GET";
                metadata: {
                    CUSTOM_SESSION: boolean;
                };
                query: z.ZodOptional<z.ZodObject<{
                    /**
                     * If cookie cache is enabled, it will disable the cache
                     * and fetch the session from the database
                     */
                    disableCookieCache: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>;
                    disableRefresh: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
            } & {
                use: any[];
            };
            path: "/get-session";
        };
    };
};

export { customSession };
