import { f as BetterAuthOptions, g as Adapter } from '../shared/better-auth.B2ufZcGq.js';
import '../shared/better-auth.Bi8FQwDD.js';
import 'zod';
import 'kysely';
import 'better-call';
import '../shared/better-auth.CAcVTGfw.js';
import 'jose';
import 'better-sqlite3';

interface AdapterTestOptions {
    getAdapter: (customOptions?: Omit<BetterAuthOptions, "database">) => Promise<Adapter>;
    skipGenerateIdTest?: boolean;
}
declare function runAdapterTest(opts: AdapterTestOptions): Promise<void>;

export { runAdapterTest };
