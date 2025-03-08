import { f as BetterAuthOptions } from '../shared/better-auth.Bs9qn-uA.cjs';
import '../shared/better-auth.Bi8FQwDD.cjs';
import 'zod';
import 'kysely';
import 'better-call';
import '../shared/better-auth.Kb3qC2Bx.cjs';
import 'jose';
import 'better-sqlite3';

declare const toSvelteKitHandler: (auth: {
    handler: (request: Request) => any;
    options: BetterAuthOptions;
}) => (event: {
    request: Request;
}) => any;
declare const svelteKitHandler: ({ auth, event, resolve, }: {
    auth: {
        handler: (request: Request) => any;
        options: BetterAuthOptions;
    };
    event: {
        request: Request;
        url: URL;
    };
    resolve: (event: any) => any;
}) => Promise<any>;
declare function isAuthPath(url: string, options: BetterAuthOptions): boolean;

export { isAuthPath, svelteKitHandler, toSvelteKitHandler };
