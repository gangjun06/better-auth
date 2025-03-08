import * as http from 'http';
import { IncomingHttpHeaders } from 'http';
import { i as Auth } from '../shared/better-auth.DisdHfy3.mjs';
import '../shared/better-auth.Bi8FQwDD.mjs';
import 'zod';
import 'kysely';
import 'better-call';
import '../shared/better-auth.BxaQRd7S.mjs';
import 'jose';
import 'better-sqlite3';

declare const toNodeHandler: (auth: {
    handler: Auth["handler"];
} | Auth["handler"]) => (req: http.IncomingMessage, res: http.ServerResponse) => Promise<void>;
declare function fromNodeHeaders(nodeHeaders: IncomingHttpHeaders): Headers;

export { fromNodeHeaders, toNodeHandler };
