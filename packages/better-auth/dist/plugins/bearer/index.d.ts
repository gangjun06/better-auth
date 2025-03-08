import * as better_call from 'better-call';
import { H as HookEndpointContext } from '../../shared/better-auth.B2ufZcGq.js';
import '../../shared/better-auth.Bi8FQwDD.js';
import 'zod';
import 'kysely';
import '../../shared/better-auth.CAcVTGfw.js';
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
