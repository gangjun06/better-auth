import * as better_call from 'better-call';
import { H as HookEndpointContext } from '../../shared/better-auth.Bs9qn-uA.cjs';
import '../../shared/better-auth.Bi8FQwDD.cjs';
import 'zod';
import 'kysely';
import '../../shared/better-auth.Kb3qC2Bx.cjs';
import 'jose';
import 'better-sqlite3';

interface BearerOptions {
    /**
     * If true, only signed tokens
     * will be converted to session
     * cookies
     *
     * @default false
     */
    requireSignature?: boolean;
}
/**
 * Converts bearer token to session cookie
 */
declare const bearer: (options?: BearerOptions) => {
    id: "bearer";
    hooks: {
        before: {
            matcher(context: HookEndpointContext): boolean;
            handler: (inputContext: {
                body?: any;
                query?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: Headers | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
            }) => Promise<{
                context: {
                    headers: Headers;
                };
            } | undefined>;
        }[];
        after: {
            matcher(context: HookEndpointContext): true;
            handler: (inputContext: {
                body?: any;
                query?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: Headers | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
            }) => Promise<void>;
        }[];
    };
};

export { bearer };
