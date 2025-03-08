import { f as BetterAuthOptions, g as Adapter } from '../shared/better-auth.p6p7jTP0.cjs';
import '../shared/better-auth.Bi8FQwDD.cjs';
import 'zod';
import 'kysely';
import 'better-call';
import '../shared/better-auth.DwXmtNRS.cjs';
import 'jose';
import 'better-sqlite3';

interface AdapterTestOptions {
    getAdapter: (customOptions?: Omit<BetterAuthOptions, "database">) => Promise<Adapter>;
    skipGenerateIdTest?: boolean;
}
declare function runAdapterTest(opts: AdapterTestOptions): Promise<void>;

export { runAdapterTest };
