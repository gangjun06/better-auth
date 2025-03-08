import * as better_call from 'better-call';
import { H as HookEndpointContext } from '../shared/better-auth.B2ufZcGq.js';
import '../shared/better-auth.Bi8FQwDD.js';
import 'zod';
import 'kysely';
import '../shared/better-auth.CAcVTGfw.js';
import 'jose';
import 'better-sqlite3';

declare function toNextJsHandler(auth: {
    handler: (request: Request) => Promise<Response>;
} | ((request: Request) => Promise<Response>)): {
    GET: (request: Request) => Promise<Response>;
    POST: (request: Request) => Promise<Response>;
};
declare const nextCookies: () => {
    id: "next-cookies";
    hooks: {
        after: {
            matcher(ctx: HookEndpointContext): true;
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

export { nextCookies, toNextJsHandler };
