import * as http from 'http';
import { IncomingHttpHeaders } from 'http';
import { i as Auth } from '../shared/better-auth.p6p7jTP0.cjs';
import '../shared/better-auth.Bi8FQwDD.cjs';
import 'zod';
import 'kysely';
import 'better-call';
import '../shared/better-auth.DwXmtNRS.cjs';
import 'jose';
import 'better-sqlite3';

declare const toNodeHandler: (auth: {
    handler: Auth["handler"];
} | Auth["handler"]) => (req: http.IncomingMessage, res: http.ServerResponse) => Promise<void>;
declare function fromNodeHeaders(nodeHeaders: IncomingHttpHeaders): Headers;

export { fromNodeHeaders, toNodeHandler };
