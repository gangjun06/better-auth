import { f as BetterAuthOptions, g as Adapter } from '../shared/better-auth.CkIbScAE.mjs';
import '../shared/better-auth.Bi8FQwDD.mjs';
import 'zod';
import 'kysely';
import 'better-call';
import '../shared/better-auth.Qf-z0yCp.mjs';
import 'jose';
import 'better-sqlite3';

interface AdapterTestOptions {
    getAdapter: (customOptions?: Omit<BetterAuthOptions, "database">) => Promise<Adapter>;
    skipGenerateIdTest?: boolean;
}
declare function runAdapterTest(opts: AdapterTestOptions): Promise<void>;

export { runAdapterTest };
