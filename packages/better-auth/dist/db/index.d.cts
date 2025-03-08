import { g as Adapter, f as BetterAuthOptions, G as GenericEndpointContext, W as Where, T as FieldAttribute, X as FieldType, K as KyselyDatabaseType } from '../shared/better-auth.p6p7jTP0.cjs';
export { a7 as BetterAuthDbSchema, _ as FieldAttributeConfig, a6 as InferFieldsFromOptions, a5 as InferFieldsFromPlugins, a2 as InferFieldsInput, a3 as InferFieldsInputClient, a1 as InferFieldsOutput, a0 as InferValueType, Z as InternalAdapter, a4 as PluginFieldAttribute, a9 as accountSchema, $ as createFieldAttribute, Y as createInternalAdapter, ae as getAllFields, a8 as getAuthTables, an as mergeSchema, al as parseAccountInput, ag as parseAccountOutput, ak as parseAdditionalUserInput, ai as parseInputData, ad as parseOutputData, am as parseSessionInput, ah as parseSessionOutput, aj as parseUserInput, af as parseUserOutput, ab as sessionSchema, aa as userSchema, ac as verificationSchema } from '../shared/better-auth.p6p7jTP0.cjs';
import { z } from 'zod';
import '../shared/better-auth.Bi8FQwDD.cjs';
import 'kysely';
import 'better-call';
import '../shared/better-auth.DwXmtNRS.cjs';
import 'jose';
import 'better-sqlite3';

declare function getWithHooks(adapter: Adapter, ctx: {
    options: BetterAuthOptions;
    hooks: Exclude<BetterAuthOptions["databaseHooks"], undefined>[];
}): {
    createWithHooks: <T extends Record<string, any>>(data: T, model: "session" | "user" | "account" | "verification", customCreateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
    updateWithHooks: <T extends Record<string, any>>(data: any, where: Where[], model: "session" | "user" | "account" | "verification", customUpdateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
    updateManyWithHooks: <T extends Record<string, any>>(data: any, where: Where[], model: "session" | "user" | "account" | "verification", customUpdateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
};

declare function toZodSchema(fields: Record<string, FieldAttribute>): z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;

declare function getAdapter(options: BetterAuthOptions): Promise<Adapter>;
declare function convertToDB<T extends Record<string, any>>(fields: Record<string, FieldAttribute>, values: T): T;
declare function convertFromDB<T extends Record<string, any>>(fields: Record<string, FieldAttribute>, values: T | null): T | null;

declare function matchType(columnDataType: string, fieldType: FieldType, dbType: KyselyDatabaseType): boolean;
declare function getMigrations(config: BetterAuthOptions): Promise<{
    toBeCreated: {
        table: string;
        fields: Record<string, FieldAttribute>;
        order: number;
    }[];
    toBeAdded: {
        table: string;
        fields: Record<string, FieldAttribute>;
        order: number;
    }[];
    runMigrations: () => Promise<void>;
    compileMigrations: () => Promise<string>;
}>;

declare function getSchema(config: BetterAuthOptions): Record<string, {
    fields: Record<string, FieldAttribute>;
    order: number;
}>;

export { FieldAttribute, FieldType, convertFromDB, convertToDB, getAdapter, getMigrations, getSchema, getWithHooks, matchType, toZodSchema };
