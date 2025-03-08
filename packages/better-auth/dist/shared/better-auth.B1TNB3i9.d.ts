import { L as LiteralString, d as LiteralUnion, D as DeepPartial, U as UnionToIntersection, S as StripEmptyObjects, O as OmitId, P as PrettifyDeep, b as Prettify, E as Expand } from './better-auth.Bi8FQwDD.js';
import * as zod from 'zod';
import { ZodSchema, z } from 'zod';
import { Migration, PostgresPool, MysqlPool, Dialect, Kysely } from 'kysely';
import * as better_call from 'better-call';
import { EndpointContext, InputContext, CookieOptions, Endpoint, Middleware } from 'better-call';
import { a as OAuthProvider, S as SocialProviders, b as SocialProviderList } from './better-auth.elCBLSn-.js';
import { Database } from 'better-sqlite3';

declare const createInternalAdapter: (adapter: Adapter, ctx: {
    options: BetterAuthOptions;
    hooks: Exclude<BetterAuthOptions["databaseHooks"], undefined>[];
    generateId: AuthContext["generateId"];
}) => {
    createOAuthUser: (user: Omit<User, "id" | "createdAt" | "updatedAt"> & Partial<User>, account: Omit<Account, "userId" | "id" | "createdAt" | "updatedAt"> & Partial<Account>, context?: GenericEndpointContext) => Promise<{
        user: any;
        account: any;
    }>;
    createUser: <T>(user: Omit<User, "id" | "createdAt" | "updatedAt" | "emailVerified"> & Partial<User> & Record<string, any>, context?: GenericEndpointContext) => Promise<T & {
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        image?: string | null | undefined;
    }>;
    createAccount: <T>(account: Omit<Account, "id" | "createdAt" | "updatedAt"> & Partial<Account> & Record<string, any>, context?: GenericEndpointContext) => Promise<T & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        userId: string;
        password?: string | null | undefined;
        scope?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    }>;
    listSessions: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    }[]>;
    listUsers: (limit?: number, offset?: number, sortBy?: {
        field: string;
        direction: "asc" | "desc";
    }, where?: Where[]) => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        image?: string | null | undefined;
    }[]>;
    countTotalUsers: () => Promise<number>;
    deleteUser: (userId: string) => Promise<void>;
    createSession: (userId: string, request: Request | Headers | undefined, dontRememberMe?: boolean, override?: Partial<Session> & Record<string, any>, context?: GenericEndpointContext, overrideAll?: boolean) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    }>;
    findSession: (token: string) => Promise<{
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null>;
    findSessions: (sessionTokens: string[]) => Promise<{
        session: Session;
        user: User;
    }[]>;
    updateSession: (sessionToken: string, session: Partial<Session> & Record<string, any>, context?: GenericEndpointContext) => Promise<any>;
    deleteSession: (token: string) => Promise<void>;
    deleteAccounts: (userId: string) => Promise<void>;
    deleteAccount: (providerId: string, userId: string) => Promise<void>;
    deleteSessions: (userIdOrSessionTokens: string | string[]) => Promise<void>;
    findOAuthUser: (email: string, accountId: string, providerId: string) => Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        };
        accounts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            providerId: string;
            accountId: string;
            userId: string;
            password?: string | null | undefined;
            scope?: string | null | undefined;
            accessToken?: string | null | undefined;
            refreshToken?: string | null | undefined;
            idToken?: string | null | undefined;
            accessTokenExpiresAt?: Date | null | undefined;
            refreshTokenExpiresAt?: Date | null | undefined;
        }[];
    } | null>;
    findUserByEmail: (email: string, options?: {
        includeAccounts: boolean;
    }) => Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        };
        accounts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            providerId: string;
            accountId: string;
            userId: string;
            password?: string | null | undefined;
            scope?: string | null | undefined;
            accessToken?: string | null | undefined;
            refreshToken?: string | null | undefined;
            idToken?: string | null | undefined;
            accessTokenExpiresAt?: Date | null | undefined;
            refreshTokenExpiresAt?: Date | null | undefined;
        }[];
    } | null>;
    findUserById: (userId: string) => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        image?: string | null | undefined;
    } | null>;
    linkAccount: (account: Omit<Account, "id" | "createdAt" | "updatedAt"> & Partial<Account>, context?: GenericEndpointContext) => Promise<any>;
    updateUser: (userId: string, data: Partial<User> & Record<string, any>, context?: GenericEndpointContext) => Promise<any>;
    updateUserByEmail: (email: string, data: Partial<User & Record<string, any>>, context?: GenericEndpointContext) => Promise<any>;
    updatePassword: (userId: string, password: string, context?: GenericEndpointContext) => Promise<void>;
    findAccounts: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        userId: string;
        password?: string | null | undefined;
        scope?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    }[]>;
    findAccount: (accountId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        userId: string;
        password?: string | null | undefined;
        scope?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    } | null>;
    findAccountByUserId: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        userId: string;
        password?: string | null | undefined;
        scope?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    }[]>;
    updateAccount: (accountId: string, data: Partial<Account>, context?: GenericEndpointContext) => Promise<any>;
    createVerificationValue: (data: Omit<Verification, "createdAt" | "id" | "updatedAt"> & Partial<Verification>, context?: GenericEndpointContext) => Promise<{
        id: string;
        value: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date;
        identifier: string;
        nonce?: string | null | undefined;
    }>;
    findVerificationValue: (identifier: string) => Promise<{
        id: string;
        value: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date;
        identifier: string;
        nonce?: string | null | undefined;
    } | null>;
    deleteVerificationValue: (id: string) => Promise<void>;
    deleteVerificationByIdentifier: (identifier: string) => Promise<void>;
    updateVerificationValue: (id: string, data: Partial<Verification>, context?: GenericEndpointContext) => Promise<any>;
};
type InternalAdapter = ReturnType<typeof createInternalAdapter>;

type FieldType = "string" | "number" | "boolean" | "date" | `${"string" | "number"}[]` | Array<LiteralString>;
type Primitive = string | number | boolean | Date | null | undefined | string[] | number[];
type FieldAttributeConfig<T extends FieldType = FieldType> = {
    /**
     * If the field should be required on a new record.
     * @default false
     */
    required?: boolean;
    /**
     * If the value should be returned on a response body.
     * @default true
     */
    returned?: boolean;
    /**
     * If a value should be provided when creating a new record.
     * @default true
     */
    input?: boolean;
    /**
     * Default value for the field
     *
     * Note: This will not create a default value on the database level. It will only
     * be used when creating a new record.
     */
    defaultValue?: Primitive | (() => Primitive);
    /**
     * transform the value before storing it.
     */
    transform?: {
        input?: (value: Primitive) => Primitive | Promise<Primitive>;
        output?: (value: Primitive) => Primitive | Promise<Primitive>;
    };
    /**
     * Reference to another model.
     */
    references?: {
        /**
         * The model to reference.
         */
        model: string;
        /**
         * The field on the referenced model.
         */
        field: string;
        /**
         * The action to perform when the reference is deleted.
         * @default "cascade"
         */
        onDelete?: "no action" | "restrict" | "cascade" | "set null" | "set default";
    };
    unique?: boolean;
    /**
     * If the field should be a bigint on the database instead of integer.
     */
    bigint?: boolean;
    /**
     * A zod schema to validate the value.
     */
    validator?: {
        input?: ZodSchema;
        output?: ZodSchema;
    };
    /**
     * The name of the field on the database.
     */
    fieldName?: string;
    /**
     * If the field should be sortable.
     *
     * applicable only for `text` type.
     * It's useful to mark fields varchar instead of text.
     */
    sortable?: boolean;
};
type FieldAttribute<T extends FieldType = FieldType> = {
    type: T;
} & FieldAttributeConfig<T>;
declare const createFieldAttribute: <T extends FieldType, C extends Omit<FieldAttributeConfig<T>, "type">>(type: T, config?: C) => {
    bigint?: boolean;
    input?: boolean;
    returned?: boolean;
    required?: boolean;
    fieldName?: string;
    references?: {
        /**
         * The model to reference.
         */
        model: string;
        /**
         * The field on the referenced model.
         */
        field: string;
        /**
         * The action to perform when the reference is deleted.
         * @default "cascade"
         */
        onDelete?: "no action" | "restrict" | "cascade" | "set null" | "set default";
    };
    sortable?: boolean;
    unique?: boolean;
    defaultValue?: Primitive | (() => Primitive);
    transform?: {
        input?: (value: Primitive) => Primitive | Promise<Primitive>;
        output?: (value: Primitive) => Primitive | Promise<Primitive>;
    };
    validator?: {
        input?: ZodSchema;
        output?: ZodSchema;
    };
    type: T;
};
type InferValueType<T extends FieldType> = T extends "string" ? string : T extends "number" ? number : T extends "boolean" ? boolean : T extends "date" ? Date : T extends `${infer T}[]` ? T extends "string" ? string[] : number[] : T extends Array<any> ? T[number] : never;
type InferFieldsOutput<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? Field[key]["defaultValue"] extends boolean | string | number | Date ? key : never : key]: InferFieldOutput<Field[key]>;
} & {
    [key in Key as Field[key]["returned"] extends false ? never : key]?: InferFieldOutput<Field[key]> | null;
} : {};
type InferFieldsInput<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? never : Field[key]["defaultValue"] extends string | number | boolean | Date ? never : Field[key]["input"] extends false ? never : key]: InferFieldInput<Field[key]>;
} & {
    [key in Key as Field[key]["input"] extends false ? never : key]?: InferFieldInput<Field[key]> | undefined | null;
} : {};
/**
 * For client will add "?" on optional fields
 */
type InferFieldsInputClient<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? never : Field[key]["defaultValue"] extends string | number | boolean | Date ? never : Field[key]["input"] extends false ? never : key]: InferFieldInput<Field[key]>;
} & {
    [key in Key as Field[key]["input"] extends false ? never : Field[key]["required"] extends false ? key : never]?: InferFieldInput<Field[key]> | undefined | null;
} : {};
type InferFieldOutput<T extends FieldAttribute> = T["returned"] extends false ? never : T["required"] extends false ? InferValueType<T["type"]> | undefined | null : InferValueType<T["type"]>;
type InferFieldInput<T extends FieldAttribute> = InferValueType<T["type"]>;
type PluginFieldAttribute = Omit<FieldAttribute, "transform" | "defaultValue" | "hashValue">;
type InferFieldsFromPlugins<Options extends BetterAuthOptions, Key extends string, Format extends "output" | "input" = "output"> = Options["plugins"] extends Array<infer T> ? T extends {
    schema: {
        [key in Key]: {
            fields: infer Field;
        };
    };
} ? Format extends "output" ? InferFieldsOutput<Field> : InferFieldsInput<Field> : {} : {};
type InferFieldsFromOptions<Options extends BetterAuthOptions, Key extends "session" | "user", Format extends "output" | "input" = "output"> = Options[Key] extends {
    additionalFields: infer Field;
} ? Format extends "output" ? InferFieldsOutput<Field> : InferFieldsInput<Field> : {};

type BetterAuthDbSchema = Record<string, {
    /**
     * The name of the table in the database
     */
    modelName: string;
    /**
     * The fields of the table
     */
    fields: Record<string, FieldAttribute>;
    /**
     * Whether to disable migrations for this table
     * @default false
     */
    disableMigrations?: boolean;
    /**
     * The order of the table
     */
    order?: number;
}>;
declare const getAuthTables: (options: BetterAuthOptions) => BetterAuthDbSchema;

type KyselyDatabaseType = "postgres" | "mysql" | "sqlite" | "mssql";

declare const accountSchema: z.ZodObject<{
    id: z.ZodString;
    providerId: z.ZodString;
    accountId: z.ZodString;
    userId: z.ZodString;
    accessToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    refreshToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /**
     * Access token expires at
     */
    accessTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    /**
     * Refresh token expires at
     */
    refreshTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    /**
     * The scopes that the user has authorized
     */
    scope: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /**
     * Password is only stored in the credential provider
     */
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    accountId: string;
    userId: string;
    password?: string | null | undefined;
    scope?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
}, {
    id: string;
    providerId: string;
    accountId: string;
    userId: string;
    password?: string | null | undefined;
    scope?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
}>;
declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodEffects<z.ZodString, string, string>;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodString;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
}, {
    id: string;
    name: string;
    email: string;
    image?: string | null | undefined;
    emailVerified?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
declare const sessionSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    token: z.ZodString;
    ipAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userAgent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}, {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}>;
declare const verificationSchema: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    expiresAt: z.ZodDate;
    identifier: z.ZodString;
    nonce: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    value: string;
    createdAt: Date;
    updatedAt: Date;
    expiresAt: Date;
    identifier: string;
    nonce?: string | null | undefined;
}, {
    id: string;
    value: string;
    expiresAt: Date;
    identifier: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    nonce?: string | null | undefined;
}>;
declare function parseOutputData<T extends Record<string, any>>(data: T, schema: {
    fields: Record<string, FieldAttribute>;
}): T;
declare function getAllFields(options: BetterAuthOptions, table: string): Record<string, FieldAttribute>;
declare function parseUserOutput(options: BetterAuthOptions, user: User): {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
};
declare function parseAccountOutput(options: BetterAuthOptions, account: Account): {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    accountId: string;
    userId: string;
    password?: string | null | undefined;
    scope?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
};
declare function parseSessionOutput(options: BetterAuthOptions, session: Session): {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
};
declare function parseInputData<T extends Record<string, any>>(data: T, schema: {
    fields: Record<string, FieldAttribute>;
    action?: "create" | "update";
}): Partial<T>;
declare function parseUserInput(options: BetterAuthOptions, user?: Record<string, any>, action?: "create" | "update"): Partial<Record<string, any>>;
declare function parseAdditionalUserInput(options: BetterAuthOptions, user?: Record<string, any>): Partial<Record<string, any>>;
declare function parseAccountInput(options: BetterAuthOptions, account: Partial<Account>): Partial<Partial<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    accountId: string;
    userId: string;
    password?: string | null | undefined;
    scope?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
}>>;
declare function parseSessionInput(options: BetterAuthOptions, session: Partial<Session>): Partial<Partial<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}>>;
declare function mergeSchema<S extends AuthPluginSchema>(schema: S, newSchema?: {
    [K in keyof S]?: {
        modelName?: string;
        fields?: {
            [P: string]: string;
        };
    };
}): S;

type HookEndpointContext = EndpointContext<string, any> & Omit<InputContext<string, any>, "method"> & {
    context: AuthContext & {
        returned?: unknown;
        responseHeaders?: Headers;
    };
    headers?: Headers;
};
type GenericEndpointContext = EndpointContext<string, any> & {
    context: AuthContext;
};

interface CookieAttributes {
    value: string;
    "max-age"?: number;
    expires?: Date;
    domain?: string;
    path?: string;
    secure?: boolean;
    httponly?: boolean;
    samesite?: "strict" | "lax" | "none";
    [key: string]: any;
}
declare function parseSetCookieHeader(setCookie: string): Map<string, CookieAttributes>;
declare function setCookieToHeader(headers: Headers): (context: {
    response: Response;
}) => void;

declare function createCookieGetter(options: BetterAuthOptions): (cookieName: string, overrideAttributes?: Partial<CookieOptions>) => {
    name: string;
    attributes: CookieOptions;
};
declare function getCookies(options: BetterAuthOptions): {
    sessionToken: {
        name: string;
        options: CookieOptions;
    };
    /**
     * This cookie is used to store the session data in the cookie
     * This is useful for when you want to cache the session in the cookie
     */
    sessionData: {
        name: string;
        options: CookieOptions;
    };
    dontRememberToken: {
        name: string;
        options: CookieOptions;
    };
};
type BetterAuthCookies = ReturnType<typeof getCookies>;
declare function setCookieCache(ctx: GenericEndpointContext, session: {
    session: Session & Record<string, any>;
    user: User;
}): Promise<void>;
declare function setSessionCookie(ctx: GenericEndpointContext, session: {
    session: Session & Record<string, any>;
    user: User;
}, dontRememberMe?: boolean, overrides?: Partial<CookieOptions>): Promise<void>;
declare function deleteSessionCookie(ctx: GenericEndpointContext, skipDontRememberMe?: boolean): void;
declare function parseCookies(cookieHeader: string): Map<string, string>;
type EligibleCookies = (string & {}) | (keyof BetterAuthCookies & {});
declare const getSessionCookie: (request: Request | Headers, config?: {
    cookiePrefix?: string;
    cookieName?: string;
}) => string | null;
declare const getCookieCache: <Session extends {
    session: Session & Record<string, any>;
    user: User & Record<string, any>;
}>(request: Request | Headers, config?: {
    cookiePrefix?: string;
    cookieName?: string;
}) => Session | null;

type LogLevel = "info" | "success" | "warn" | "error" | "debug";
declare const levels: readonly ["info", "success", "warn", "error", "debug"];
declare function shouldPublishLog(currentLogLevel: LogLevel, logLevel: LogLevel): boolean;
interface Logger {
    disabled?: boolean;
    level?: Exclude<LogLevel, "success">;
    log?: (level: Exclude<LogLevel, "success">, message: string, ...args: any[]) => void;
}
type LogHandlerParams = Parameters<NonNullable<Logger["log"]>> extends [
    LogLevel,
    ...infer Rest
] ? Rest : never;
declare const createLogger: (options?: Logger) => Record<LogLevel, (...params: LogHandlerParams) => void>;
declare const logger: Record<LogLevel, (message: string, ...args: any[]) => void>;

declare function checkPassword(userId: string, c: GenericEndpointContext): Promise<boolean>;

declare const init: (options: BetterAuthOptions) => Promise<AuthContext>;
type AuthContext = {
    options: BetterAuthOptions;
    appName: string;
    baseURL: string;
    trustedOrigins: string[];
    /**
     * New session that will be set after the request
     * meaning: there is a `set-cookie` header that will set
     * the session cookie. This is the fetched session. And it's set
     * by `setNewSession` method.
     */
    newSession: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null;
    session: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null;
    setNewSession: (session: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null) => void;
    socialProviders: OAuthProvider[];
    authCookies: BetterAuthCookies;
    logger: ReturnType<typeof createLogger>;
    rateLimit: {
        enabled: boolean;
        window: number;
        max: number;
        storage: "memory" | "database" | "secondary-storage";
    } & BetterAuthOptions["rateLimit"];
    adapter: Adapter;
    internalAdapter: ReturnType<typeof createInternalAdapter>;
    createAuthCookie: ReturnType<typeof createCookieGetter>;
    secret: string;
    sessionConfig: {
        updateAge: number;
        expiresIn: number;
        freshAge: number;
    };
    generateId: (options: {
        model: LiteralUnion<Models, string>;
        size?: number;
    }) => string;
    secondaryStorage: SecondaryStorage | undefined;
    password: {
        hash: (password: string) => Promise<string>;
        verify: (data: {
            password: string;
            hash: string;
        }) => Promise<boolean>;
        config: {
            minPasswordLength: number;
            maxPasswordLength: number;
        };
        checkPassword: typeof checkPassword;
    };
    tables: ReturnType<typeof getAuthTables>;
    runMigrations: () => Promise<void>;
};

declare const optionsMiddleware: <InputCtx extends {
    body?: any;
    query?: Record<string, any> | undefined;
    request?: Request | undefined;
    headers?: Headers | undefined;
    asResponse?: boolean | undefined;
    returnHeaders?: boolean | undefined;
    use?: better_call.Middleware[] | undefined;
}>(inputContext: InputCtx) => Promise<AuthContext>;
declare const createAuthMiddleware: {
    <Options extends better_call.MiddlewareOptions, R>(options: Options, handler: (ctx: better_call.MiddlewareContext<Options, AuthContext & {
        returned?: unknown;
        responseHeaders?: Headers;
    }>) => Promise<R>): (inputContext: ({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_3 ? { [K_1 in keyof T_3 as {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] extends never ? never : undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] ? never : K_1]: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1]; } : never) & ({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_4 ? { [K_2 in keyof T_4 as undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] ? K_2 : never]?: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] | undefined; } : never) extends infer T ? { [K in keyof T]: (({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_1 ? { [K_1 in keyof T_1 as {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] extends never ? never : undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] ? never : K_1]: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1]; } : never) & ({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_2 ? { [K_2 in keyof T_2 as undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] ? K_2 : never]?: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] | undefined; } : never))[K]; } : never) => Promise<R>;
    <Options extends better_call.MiddlewareOptions, R_1>(handler: (ctx: better_call.MiddlewareContext<Options, AuthContext & {
        returned?: unknown;
        responseHeaders?: Headers;
    }>) => Promise<R_1>): (inputContext: ({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_3 ? { [K_1 in keyof T_3 as {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] extends never ? never : undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] ? never : K_1]: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1]; } : never) & ({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_4 ? { [K_2 in keyof T_4 as undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] ? K_2 : never]?: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] | undefined; } : never) extends infer T ? { [K in keyof T]: (({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_1 ? { [K_1 in keyof T_1 as {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] extends never ? never : undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1] ? never : K_1]: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_1]; } : never) & ({
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    } extends infer T_2 ? { [K_2 in keyof T_2 as undefined extends {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] ? K_2 : never]?: {
        body: better_call.InferBody<Options>;
        query: better_call.InferQuery<Options>;
        request: better_call.InferRequest<Options>;
        headers: better_call.InferHeaders<Options>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
    }[K_2] | undefined; } : never))[K]; } : never) => Promise<R_1>;
};
declare const createAuthEndpoint: <Path extends string, Opts extends better_call.EndpointOptions, R>(path: Path, options: Opts, handler: (ctx: better_call.EndpointContext<Path, Opts, AuthContext>) => Promise<R>) => {
    <C extends better_call.HasRequiredKeys<({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T ? { [K_1 in keyof T as {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1] extends never ? never : undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1] ? never : K_1]: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1]; } : never) & ({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_1 ? { [K_2 in keyof T_1 as undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2] ? K_2 : never]?: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2] | undefined; } : never) extends infer T_2 ? { [K in keyof T_2]: (({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_3 ? { [K_1_1 in keyof T_3 as {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1] extends never ? never : undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1] ? never : K_1_1]: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1]; } : never) & ({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_4 ? { [K_2_1 in keyof T_4 as undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_1] ? K_2_1 : never]?: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_5 ? { [K_1_2 in keyof T_5 as {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2] extends never ? never : undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2] ? never : K_1_2]: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2]; } : never) & ({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_6 ? { [K_2_2 in keyof T_6 as undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_2] ? K_2_2 : never]?: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_7 ? { [K_1_3 in keyof T_7 as {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3] extends never ? never : undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3] ? never : K_1_3]: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3]; } : never) & ({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_8 ? { [K_2_3 in keyof T_8 as undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_3] ? K_2_3 : never]?: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_9 ? { [K_1_4 in keyof T_9 as {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4] extends never ? never : undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4] ? never : K_1_4]: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4]; } : never) & ({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_10 ? { [K_2_4 in keyof T_10 as undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_4] ? K_2_4 : never]?: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_11 ? { [K_1_5 in keyof T_11 as {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5] extends never ? never : undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5] ? never : K_1_5]: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5]; } : never) & ({
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_12 ? { [K_2_5 in keyof T_12 as undefined extends {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_5] ? K_2_5 : never]?: {
        body: better_call.InferBodyInput<Opts & {
            use: any[];
        }>;
        method: better_call.InferInputMethod<Opts & {
            use: any[];
        }>;
        query: better_call.InferQueryInput<Opts & {
            use: any[];
        }>;
        params: better_call.InferParam<Path>;
        request: better_call.InferRequest<Opts & {
            use: any[];
        }>;
        headers: better_call.InferHeadersInput<Opts & {
            use: any[];
        }>;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: R;
    } : R>;
    options: Opts & {
        use: any[];
    };
    path: Path;
};
type AuthEndpoint = ReturnType<typeof createAuthEndpoint>;
type AuthMiddleware = ReturnType<typeof createAuthMiddleware>;

type AuthPluginSchema = {
    [table in string]: {
        fields: {
            [field in string]: FieldAttribute;
        };
        disableMigration?: boolean;
        modelName?: string;
    };
};
type BetterAuthPlugin = {
    id: LiteralString;
    /**
     * The init function is called when the plugin is initialized.
     * You can return a new context or modify the existing context.
     */
    init?: (ctx: AuthContext) => {
        context?: DeepPartial<Omit<AuthContext, "options">>;
        options?: Partial<BetterAuthOptions>;
    } | void;
    endpoints?: {
        [key: string]: Endpoint;
    };
    middlewares?: {
        path: string;
        middleware: Endpoint;
    }[];
    onRequest?: (request: Request, ctx: AuthContext) => Promise<{
        response: Response;
    } | {
        request: Request;
    } | void>;
    onResponse?: (response: Response, ctx: AuthContext) => Promise<{
        response: Response;
    } | void>;
    hooks?: {
        before?: {
            matcher: (context: HookEndpointContext) => boolean;
            handler: AuthMiddleware;
        }[];
        after?: {
            matcher: (context: HookEndpointContext) => boolean;
            handler: AuthMiddleware;
        }[];
    };
    /**
     * Schema the plugin needs
     *
     * This will also be used to migrate the database. If the fields are dynamic from the plugins
     * configuration each time the configuration is changed a new migration will be created.
     *
     * NOTE: If you want to create migrations manually using
     * migrations option or any other way you
     * can disable migration per table basis.
     *
     * @example
     * ```ts
     * schema: {
     * 	user: {
     * 		fields: {
     * 			email: {
     * 				 type: "string",
     * 			},
     * 			emailVerified: {
     * 				type: "boolean",
     * 				defaultValue: false,
     * 			},
     * 		},
     * 	}
     * } as AuthPluginSchema
     * ```
     */
    schema?: AuthPluginSchema;
    /**
     * The migrations of the plugin. If you define schema that will automatically create
     * migrations for you.
     *
     * ⚠️ Only uses this if you dont't want to use the schema option and you disabled migrations for
     * the tables.
     */
    migrations?: Record<string, Migration>;
    /**
     * The options of the plugin
     */
    options?: Record<string, any>;
    /**
     * types to be inferred
     */
    $Infer?: Record<string, any>;
    /**
     * The rate limit rules to apply to specific paths.
     */
    rateLimit?: {
        window: number;
        max: number;
        pathMatcher: (path: string) => boolean;
    }[];
    /**
     * The error codes returned by the plugin
     */
    $ERROR_CODES?: Record<string, string>;
};
type InferOptionSchema<S extends AuthPluginSchema> = S extends Record<string, {
    fields: infer Fields;
}> ? {
    [K in keyof S]?: {
        modelName?: string;
        fields: {
            [P in keyof Fields]?: string;
        };
    };
} : never;
type InferPluginErrorCodes<O extends BetterAuthOptions> = O["plugins"] extends Array<infer P> ? UnionToIntersection<P extends BetterAuthPlugin ? P["$ERROR_CODES"] extends Record<string, any> ? P["$ERROR_CODES"] : {} : {}> : {};

/**
 * Adapter where clause
 */
type Where = {
    operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "contains" | "starts_with" | "ends_with";
    value: string | number | boolean | string[] | number[] | Date | null;
    field: string;
    connector?: "AND" | "OR";
};
/**
 * Adapter Interface
 */
type Adapter = {
    id: string;
    create: <T extends Record<string, any>, R = T>(data: {
        model: string;
        data: T;
        select?: string[];
    }) => Promise<R>;
    findOne: <T>(data: {
        model: string;
        where: Where[];
        select?: string[];
    }) => Promise<T | null>;
    findMany: <T>(data: {
        model: string;
        where?: Where[];
        limit?: number;
        sortBy?: {
            field: string;
            direction: "asc" | "desc";
        };
        offset?: number;
    }) => Promise<T[]>;
    count: (data: {
        model: string;
        where?: Where[];
    }) => Promise<number>;
    /**
     * ⚠︎ Update may not return the updated data
     * if multiple where clauses are provided
     */
    update: <T>(data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }) => Promise<T | null>;
    updateMany: (data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }) => Promise<number>;
    delete: <T>(data: {
        model: string;
        where: Where[];
    }) => Promise<void>;
    deleteMany: (data: {
        model: string;
        where: Where[];
    }) => Promise<number>;
    /**
     *
     * @param options
     * @param file - file path if provided by the user
     */
    createSchema?: (options: BetterAuthOptions, file?: string) => Promise<AdapterSchemaCreation>;
    options?: Record<string, any>;
};
type AdapterSchemaCreation = {
    /**
     * Code to be inserted into the file
     */
    code: string;
    /**
     * Path to the file, including the file name and extension.
     * Relative paths are supported, with the current working directory of the developer's project as the base.
     */
    path: string;
    /**
     * Append the file if it already exists.
     * Note: This will not apply if `overwrite` is set to true.
     */
    append?: boolean;
    /**
     * Overwrite the file if it already exists
     */
    overwrite?: boolean;
};
interface AdapterInstance {
    (options: BetterAuthOptions): Adapter;
}
interface SecondaryStorage {
    /**
     *
     * @param key - Key to get
     * @returns - Value of the key
     */
    get: (key: string) => Promise<string | null> | string | null;
    set: (
    /**
     * Key to store
     */
    key: string, 
    /**
     * Value to store
     */
    value: string, 
    /**
     * Time to live in seconds
     */
    ttl?: number) => Promise<void | null | string> | void;
    /**
     *
     * @param key - Key to delete
     */
    delete: (key: string) => Promise<void | null | string> | void;
}

type Models = "user" | "account" | "session" | "verification" | "rate-limit" | "organization" | "member" | "invitation" | "jwks" | "passkey" | "two-factor";
type AdditionalUserFieldsInput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "user", "input"> & InferFieldsFromOptions<Options, "user", "input">;
type AdditionalUserFieldsOutput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "user"> & InferFieldsFromOptions<Options, "user">;
type AdditionalSessionFieldsInput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "session", "input"> & InferFieldsFromOptions<Options, "session", "input">;
type AdditionalSessionFieldsOutput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "session"> & InferFieldsFromOptions<Options, "session">;
type InferUser<O extends BetterAuthOptions | Auth> = UnionToIntersection<StripEmptyObjects<User & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
type InferSession<O extends BetterAuthOptions | Auth> = UnionToIntersection<StripEmptyObjects<Session & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
type InferPluginTypes<O extends BetterAuthOptions> = O["plugins"] extends Array<infer P> ? UnionToIntersection<P extends BetterAuthPlugin ? P["$Infer"] extends Record<string, any> ? P["$Infer"] : {} : {}> : {};
interface RateLimit {
    /**
     * The key to use for rate limiting
     */
    key: string;
    /**
     * The number of requests made
     */
    count: number;
    /**
     * The last request time in milliseconds
     */
    lastRequest: number;
}
type User = z.infer<typeof userSchema>;
type Account = z.infer<typeof accountSchema>;
type Session = z.infer<typeof sessionSchema>;
type Verification = z.infer<typeof verificationSchema>;

type BetterAuthOptions = {
    /**
     * The name of the application
     *
     * process.env.APP_NAME
     *
     * @default "Better Auth"
     */
    appName?: string;
    /**
     * Base URL for the better auth. This is typically the
     * root URL where your application server is hosted.
     * If not explicitly set,
     * the system will check the following environment variable:
     *
     * process.env.BETTER_AUTH_URL
     *
     * If not set it will throw an error.
     */
    baseURL?: string;
    /**
     * Base path for the better auth. This is typically
     * the path where the
     * better auth routes are mounted.
     *
     * @default "/api/auth"
     */
    basePath?: string;
    /**
     * The secret to use for encryption,
     * signing and hashing.
     *
     * By default better auth will look for
     * the following environment variables:
     * process.env.BETTER_AUTH_SECRET,
     * process.env.AUTH_SECRET
     * If none of these environment
     * variables are set,
     * it will default to
     * "better-auth-secret-123456789".
     *
     * on production if it's not set
     * it will throw an error.
     *
     * you can generate a good secret
     * using the following command:
     * @example
     * ```bash
     * openssl rand -base64 32
     * ```
     */
    secret?: string;
    /**
     * Database configuration
     */
    database?: PostgresPool | MysqlPool | Database | Dialect | AdapterInstance | {
        dialect: Dialect;
        type: KyselyDatabaseType;
        /**
         * casing for table names
         *
         * @default "camel"
         */
        casing?: "snake" | "camel";
    } | {
        /**
         * Kysely instance
         */
        db: Kysely<any>;
        /**
         * Database type between postgres, mysql and sqlite
         */
        type: KyselyDatabaseType;
        /**
         * casing for table names
         *
         * @default "camel"
         */
        casing?: "snake" | "camel";
    };
    /**
     * Secondary storage configuration
     *
     * This is used to store session and rate limit data.
     */
    secondaryStorage?: SecondaryStorage;
    /**
     * Email verification configuration
     */
    emailVerification?: {
        /**
         * Send a verification email
         * @param data the data object
         * @param request the request object
         */
        sendVerificationEmail?: (
        /**
         * @param user the user to send the
         * verification email to
         * @param url the url to send the verification email to
         * it contains the token as well
         * @param token the token to send the verification email to
         */
        data: {
            user: User;
            url: string;
            token: string;
        }, 
        /**
         * The request object
         */
        request?: Request) => Promise<void>;
        /**
         * Send a verification email automatically
         * after sign up
         *
         * @default false
         */
        sendOnSignUp?: boolean;
        /**
         * Auto signin the user after they verify their email
         */
        autoSignInAfterVerification?: boolean;
        /**
         * Number of seconds the verification token is
         * valid for.
         * @default 3600 seconds (1 hour)
         */
        expiresIn?: number;
    };
    /**
     * Email and password authentication
     */
    emailAndPassword?: {
        /**
         * Enable email and password authentication
         *
         * @default false
         */
        enabled: boolean;
        /**
         * Disable email and password sign up
         *
         * @default false
         */
        disableSignUp?: boolean;
        /**
         * Require email verification before a session
         * can be created for the user.
         *
         * if the user is not verified, the user will not be able to sign in
         * and on sign in attempts, the user will be prompted to verify their email.
         */
        requireEmailVerification?: boolean;
        /**
         * The maximum length of the password.
         *
         * @default 128
         */
        maxPasswordLength?: number;
        /**
         * The minimum length of the password.
         *
         * @default 8
         */
        minPasswordLength?: number;
        /**
         * send reset password
         */
        sendResetPassword?: (
        /**
         * @param user the user to send the
         * reset password email to
         * @param url the url to send the reset password email to
         * @param token the token to send to the user (could be used instead of sending the url
         * if you need to redirect the user to custom route)
         */
        data: {
            user: User;
            url: string;
            token: string;
        }, 
        /**
         * The request object
         */
        request?: Request) => Promise<void>;
        /**
         * Number of seconds the reset password token is
         * valid for.
         * @default 1 hour (60 * 60)
         */
        resetPasswordTokenExpiresIn?: number;
        /**
         * Password hashing and verification
         *
         * By default Scrypt is used for password hashing and
         * verification. You can provide your own hashing and
         * verification function. if you want to use a
         * different algorithm.
         */
        password?: {
            hash?: (password: string) => Promise<string>;
            verify?: (data: {
                hash: string;
                password: string;
            }) => Promise<boolean>;
        };
        /**
         * Automatically sign in the user after sign up
         */
        autoSignIn?: boolean;
    };
    /**
     * list of social providers
     */
    socialProviders?: SocialProviders;
    /**
     * List of Better Auth plugins
     */
    plugins?: BetterAuthPlugin[];
    /**
     * User configuration
     */
    user?: {
        /**
         * The model name for the user. Defaults to "user".
         */
        modelName?: string;
        /**
         * Map fields
         *
         * @example
         * ```ts
         * {
         *  userId: "user_id"
         * }
         * ```
         */
        fields?: Partial<Record<keyof OmitId<User>, string>>;
        /**
         * Additional fields for the session
         */
        additionalFields?: {
            [key: string]: FieldAttribute;
        };
        /**
         * Changing email configuration
         */
        changeEmail?: {
            /**
             * Enable changing email
             * @default false
             */
            enabled: boolean;
            /**
             * Send a verification email when the user changes their email.
             * @param data the data object
             * @param request the request object
             */
            sendChangeEmailVerification?: (data: {
                user: User;
                newEmail: string;
                url: string;
                token: string;
            }, request?: Request) => Promise<void>;
        };
        /**
         * User deletion configuration
         */
        deleteUser?: {
            /**
             * Enable user deletion
             */
            enabled?: boolean;
            /**
             * Send a verification email when the user deletes their account.
             *
             * if this is not set, the user will be deleted immediately.
             * @param data the data object
             * @param request the request object
             */
            sendDeleteAccountVerification?: (data: {
                user: User;
                url: string;
                token: string;
            }, request?: Request) => Promise<void>;
            /**
             * A function that is called before a user is deleted.
             *
             * to interrupt with error you can throw `APIError`
             */
            beforeDelete?: (user: User, request?: Request) => Promise<void>;
            /**
             * A function that is called after a user is deleted.
             *
             * This is useful for cleaning up user data
             */
            afterDelete?: (user: User, request?: Request) => Promise<void>;
        };
    };
    session?: {
        /**
         * The model name for the session.
         *
         * @default "session"
         */
        modelName?: string;
        /**
         * Map fields
         *
         * @example
         * ```ts
         * {
         *  userId: "user_id"
         * }
         */
        fields?: Partial<Record<keyof OmitId<Session>, string>>;
        /**
         * Expiration time for the session token. The value
         * should be in seconds.
         * @default 7 days (60 * 60 * 24 * 7)
         */
        expiresIn?: number;
        /**
         * How often the session should be refreshed. The value
         * should be in seconds.
         * If set 0 the session will be refreshed every time it is used.
         * @default 1 day (60 * 60 * 24)
         */
        updateAge?: number;
        /**
         * Additional fields for the session
         */
        additionalFields?: {
            [key: string]: FieldAttribute;
        };
        /**
         * By default if secondary storage is provided
         * the session is stored in the secondary storage.
         *
         * Set this to true to store the session in the database
         * as well.
         *
         * Reads are always done from the secondary storage.
         *
         * @default false
         */
        storeSessionInDatabase?: boolean;
        /**
         * By default, sessions are deleted from the database when secondary storage
         * is provided when session is revoked.
         *
         * Set this to true to preserve session records in the database,
         * even if they are deleted from the secondary storage.
         *
         * @default false
         */
        preserveSessionInDatabase?: boolean;
        /**
         * Enable caching session in cookie
         */
        cookieCache?: {
            /**
             * max age of the cookie
             * @default 5 minutes (5 * 60)
             */
            maxAge?: number;
            /**
             * Enable caching session in cookie
             * @default false
             */
            enabled?: boolean;
        };
        /**
         * The age of the session to consider it fresh.
         *
         * This is used to check if the session is fresh
         * for sensitive operations. (e.g. deleting an account)
         *
         * If the session is not fresh, the user should be prompted
         * to sign in again.
         *
         * If set to 0, the session will be considered fresh every time. (⚠︎ not recommended)
         *
         * @default 5 minutes (5 * 60)
         */
        freshAge?: number;
    };
    account?: {
        modelName?: string;
        fields?: Partial<Record<keyof OmitId<Account>, string>>;
        accountLinking?: {
            /**
             * Enable account linking
             *
             * @default true
             */
            enabled?: boolean;
            /**
             * List of trusted providers
             */
            trustedProviders?: Array<LiteralUnion<SocialProviderList[number] | "email-password", string>>;
            /**
             * If enabled (true), this will allow users to manually linking accounts with different email addresses than the main user.
             *
             * @default false
             *
             * ⚠️ Warning: enabling this might lead to account takeovers, so proceed with caution.
             */
            allowDifferentEmails?: boolean;
        };
    };
    /**
     * Verification configuration
     */
    verification?: {
        /**
         * Change the modelName of the verification table
         */
        modelName?: string;
        /**
         * Map verification fields
         */
        fields?: Partial<Record<keyof OmitId<Verification>, string>>;
        /**
         * disable cleaning up expired values when a verification value is
         * fetched
         */
        disableCleanup?: boolean;
    };
    /**
     * List of trusted origins.
     */
    trustedOrigins?: string[] | ((request: Request) => string[]);
    /**
     * Rate limiting configuration
     */
    rateLimit?: {
        /**
         * By default, rate limiting is only
         * enabled on production.
         */
        enabled?: boolean;
        /**
         * Default window to use for rate limiting. The value
         * should be in seconds.
         *
         * @default 10 seconds
         */
        window?: number;
        /**
         * The default maximum number of requests allowed within the window.
         *
         * @default 100 requests
         */
        max?: number;
        /**
         * Custom rate limit rules to apply to
         * specific paths.
         */
        customRules?: {
            [key: string]: {
                /**
                 * The window to use for the custom rule.
                 */
                window: number;
                /**
                 * The maximum number of requests allowed within the window.
                 */
                max: number;
            } | ((request: Request) => {
                window: number;
                max: number;
            } | Promise<{
                window: number;
                max: number;
            }>);
        };
        /**
         * Storage configuration
         *
         * By default, rate limiting is stored in memory. If you passed a
         * secondary storage, rate limiting will be stored in the secondary
         * storage.
         *
         * @default "memory"
         */
        storage?: "memory" | "database" | "secondary-storage";
        /**
         * If database is used as storage, the name of the table to
         * use for rate limiting.
         *
         * @default "rateLimit"
         */
        modelName?: string;
        /**
         * Custom field names for the rate limit table
         */
        fields?: Record<keyof RateLimit, string>;
        /**
         * custom storage configuration.
         *
         * NOTE: If custom storage is used storage
         * is ignored
         */
        customStorage?: {
            get: (key: string) => Promise<RateLimit | undefined>;
            set: (key: string, value: RateLimit) => Promise<void>;
        };
    };
    /**
     * Advanced options
     */
    advanced?: {
        /**
         * Ip address configuration
         */
        ipAddress?: {
            /**
             * List of headers to use for ip address
             *
             * Ip address is used for rate limiting and session tracking
             *
             * @example ["x-client-ip", "x-forwarded-for"]
             *
             * @default
             * @link https://github.com/better-auth/better-auth/blob/main/packages/better-auth/src/utils/get-request-ip.ts#L8
             */
            ipAddressHeaders?: string[];
            /**
             * Disable ip tracking
             *
             * ⚠︎ This is a security risk and it may expose your application to abuse
             */
            disableIpTracking?: boolean;
        };
        /**
         * Use secure cookies
         *
         * @default false
         */
        useSecureCookies?: boolean;
        /**
         * Disable trusted origins check
         *
         * ⚠︎ This is a security risk and it may expose your application to CSRF attacks
         */
        disableCSRFCheck?: boolean;
        /**
         * Configure cookies to be cross subdomains
         */
        crossSubDomainCookies?: {
            /**
             * Enable cross subdomain cookies
             */
            enabled: boolean;
            /**
             * Additional cookies to be shared across subdomains
             */
            additionalCookies?: string[];
            /**
             * The domain to use for the cookies
             *
             * By default, the domain will be the root
             * domain from the base URL.
             */
            domain?: string;
        };
        cookies?: {
            [key: string]: {
                name?: string;
                attributes?: CookieOptions;
            };
        };
        defaultCookieAttributes?: CookieOptions;
        /**
         * Prefix for cookies. If a cookie name is provided
         * in cookies config, this will be overridden.
         *
         * @default
         * ```txt
         * "appName" -> which defaults to "better-auth"
         * ```
         */
        cookiePrefix?: string;
        /**
         * Custom generateId function.
         *
         * If not provided, random ids will be generated.
         * If set to false, the database's auto generated id will be used.
         */
        generateId?: ((options: {
            model: LiteralUnion<Models, string>;
            size?: number;
        }) => string) | false;
    };
    logger?: Logger;
    /**
     * allows you to define custom hooks that can be
     * executed during lifecycle of core database
     * operations.
     */
    databaseHooks?: {
        /**
         * User hooks
         */
        user?: {
            create?: {
                /**
                 * Hook that is called before a user is created.
                 * if the hook returns false, the user will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (user: User, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<User> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a user is created.
                 */
                after?: (user: User, context?: GenericEndpointContext) => Promise<void>;
            };
            update?: {
                /**
                 * Hook that is called before a user is updated.
                 * if the hook returns false, the user will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (user: Partial<User>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<User & Record<string, any>>;
                }>;
                /**
                 * Hook that is called after a user is updated.
                 */
                after?: (user: User, context?: GenericEndpointContext) => Promise<void>;
            };
        };
        /**
         * Session Hook
         */
        session?: {
            create?: {
                /**
                 * Hook that is called before a session is updated.
                 * if the hook returns false, the session will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (session: Session, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Session> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a session is updated.
                 */
                after?: (session: Session, context?: GenericEndpointContext) => Promise<void>;
            };
            /**
             * Update hook
             */
            update?: {
                /**
                 * Hook that is called before a user is updated.
                 * if the hook returns false, the session will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (session: Partial<Session>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Session & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a session is updated.
                 */
                after?: (session: Session, context?: GenericEndpointContext) => Promise<void>;
            };
        };
        /**
         * Account Hook
         */
        account?: {
            create?: {
                /**
                 * Hook that is called before a account is created.
                 * If the hook returns false, the account will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (account: Account, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Account> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a account is created.
                 */
                after?: (account: Account, context?: GenericEndpointContext) => Promise<void>;
            };
            /**
             * Update hook
             */
            update?: {
                /**
                 * Hook that is called before a account is update.
                 * If the hook returns false, the user will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (account: Partial<Account>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Account & Record<string, any>>;
                }>;
                /**
                 * Hook that is called after a account is updated.
                 */
                after?: (account: Account, context?: GenericEndpointContext) => Promise<void>;
            };
        };
        /**
         * Verification Hook
         */
        verification?: {
            create?: {
                /**
                 * Hook that is called before a verification is created.
                 * if the hook returns false, the verification will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (verification: Verification, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Verification> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a verification is created.
                 */
                after?: (verification: Verification, context?: GenericEndpointContext) => Promise<void>;
            };
            update?: {
                /**
                 * Hook that is called before a verification is updated.
                 * if the hook returns false, the verification will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (verification: Partial<Verification>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Verification & Record<string, any>>;
                }>;
                /**
                 * Hook that is called after a verification is updated.
                 */
                after?: (verification: Verification, context?: GenericEndpointContext) => Promise<void>;
            };
        };
    };
    /**
     * API error handling
     */
    onAPIError?: {
        /**
         * Throw an error on API error
         *
         * @default false
         */
        throw?: boolean;
        /**
         * Custom error handler
         *
         * @param error
         * @param ctx - Auth context
         */
        onError?: (error: unknown, ctx: AuthContext) => void | Promise<void>;
        /**
         * The url to redirect to on error
         *
         * When errorURL is provided, the error will be added to the url as a query parameter
         * and the user will be redirected to the errorURL.
         *
         * @default - "/api/auth/error"
         */
        errorURL?: string;
    };
    /**
     * Hooks
     */
    hooks?: {
        /**
         * Before a request is processed
         */
        before?: AuthMiddleware;
        /**
         * After a request is processed
         */
        after?: AuthMiddleware;
    };
    /**
     * Disabled paths
     *
     * Paths you want to disable.
     */
    disabledPaths?: string[];
};

type FilteredAPI<API> = Omit<API, API extends {
    [key in infer K]: Endpoint;
} ? K extends string ? K extends "getSession" ? K : API[K]["options"]["metadata"] extends {
    isAction: false;
} ? K : never : never : never>;
type FilterActions<API> = Omit<API, API extends {
    [key in infer K]: Endpoint;
} ? K extends string ? API[K]["options"]["metadata"] extends {
    isAction: false;
} ? K : never : never : never>;
type InferSessionAPI<API> = API extends {
    [key: string]: infer E;
} ? UnionToIntersection<E extends Endpoint ? E["path"] extends "/get-session" ? {
    getSession: <R extends boolean>(context: {
        headers: Headers;
        query?: {
            disableCookieCache?: boolean;
        };
        asResponse?: R;
    }) => false extends R ? Promise<PrettifyDeep<Awaited<ReturnType<E>>>> & {
        options: E["options"];
        path: E["path"];
    } : Promise<Response>;
} : never : never> : never;
type InferAPI<API> = InferSessionAPI<API> & FilteredAPI<API>;

declare const signInSocial: {
    <C extends [{
        body: {
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
            scopes?: string[] | undefined;
            idToken?: {
                token: string;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                expiresAt?: number | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            errorCallbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            redirect: boolean;
            token: string;
            url: undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            url: string;
            redirect: boolean;
        };
    } : {
        redirect: boolean;
        token: string;
        url: undefined;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } | {
        url: string;
        redirect: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * Callback URL to redirect to after the user
             * has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * callback url to redirect if the user is newly registered.
             *
             * useful if you have different routes for existing users and new users
             */
            newUserCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * Callback url to redirect to if an error happens
             *
             * If it's initiated from the client sdk this defaults to
             * the current url.
             */
            errorCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use`
             */
            provider: z.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
            /**
             * Disable automatic redirection to the provider
             *
             * This is useful if you want to handle the redirection
             * yourself like in a popup or a different tab.
             */
            disableRedirect: z.ZodOptional<z.ZodBoolean>;
            /**
             * ID token from the provider
             *
             * This is used to sign in the user
             * if the user is already signed in with the
             * provider in the frontend.
             *
             * Only applicable if the provider supports
             * it. Currently only `apple` and `google` is
             * supported out of the box.
             */
            idToken: z.ZodOptional<z.ZodObject<{
                /**
                 * ID token from the provider
                 */
                token: z.ZodString;
                /**
                 * The nonce used to generate the token
                 */
                nonce: z.ZodOptional<z.ZodString>;
                /**
                 * Access token from the provider
                 */
                accessToken: z.ZodOptional<z.ZodString>;
                /**
                 * Refresh token from the provider
                 */
                refreshToken: z.ZodOptional<z.ZodString>;
                /**
                 * Expiry date of the token
                 */
                expiresAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                token: string;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                expiresAt?: number | undefined;
                nonce?: string | undefined;
            }, {
                token: string;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                expiresAt?: number | undefined;
                nonce?: string | undefined;
            }>>;
            scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            /**
             * Explicitly request sign-up
             *
             * Should be used to allow sign up when
             * disableImplicitSignUp for this provider is
             * true
             */
            requestSignUp: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
            scopes?: string[] | undefined;
            idToken?: {
                token: string;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                expiresAt?: number | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            errorCallbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        }, {
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
            scopes?: string[] | undefined;
            idToken?: {
                token: string;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                expiresAt?: number | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            errorCallbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        session: {
                                            type: string;
                                        };
                                        user: {
                                            type: string;
                                        };
                                        url: {
                                            type: string;
                                        };
                                        redirect: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-in/social";
};
declare const signInEmail: {
    <C extends [{
        body: {
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            redirect: boolean;
            token: string;
            url: string | undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        };
    } : {
        redirect: boolean;
        token: string;
        url: string | undefined;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * Email of the user
             */
            email: z.ZodString;
            /**
             * Password of the user
             */
            password: z.ZodString;
            /**
             * Callback URL to use as a redirect for email
             * verification and for possible redirects
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * If this is false, the session will not be remembered
             * @default true
             */
            rememberMe: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        }, {
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                        };
                                        url: {
                                            type: string;
                                        };
                                        redirect: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-in/email";
};

declare const callbackOAuth: {
    <C extends [{
        method: "GET" | "POST";
        params: {
            id: string;
        };
        body?: {
            state?: string | undefined;
            code?: string | undefined;
            device_id?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
        } | undefined;
        query?: {
            state?: string | undefined;
            code?: string | undefined;
            device_id?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
        } | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: void;
    } : void>;
    options: {
        method: ("GET" | "POST")[];
        body: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            device_id: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            state?: string | undefined;
            code?: string | undefined;
            device_id?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
        }, {
            state?: string | undefined;
            code?: string | undefined;
            device_id?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
        }>>;
        query: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            device_id: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            state?: string | undefined;
            code?: string | undefined;
            device_id?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
        }, {
            state?: string | undefined;
            code?: string | undefined;
            device_id?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
        }>>;
        metadata: {
            isAction: false;
        };
    } & {
        use: any[];
    };
    path: "/callback/:id";
};

declare const getSession: <Option extends BetterAuthOptions>() => {
    <C extends [{
        headers: HeadersInit;
        body?: undefined;
        method?: "GET" | undefined;
        query?: {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        } | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            session: UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
            user: UnionToIntersection<StripEmptyObjects<{
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
        } | null;
    } : {
        session: UnionToIntersection<StripEmptyObjects<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            expiresAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
        user: UnionToIntersection<StripEmptyObjects<{
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
    } | null>;
    options: {
        method: "GET";
        query: z.ZodOptional<z.ZodObject<{
            /**
             * If cookie cache is enabled, it will disable the cache
             * and fetch the session from the database
             */
            disableCookieCache: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>>;
            disableRefresh: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>;
        }, "strip", z.ZodTypeAny, {
            disableCookieCache?: boolean | undefined;
            disableRefresh?: boolean | undefined;
        }, {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        }>>;
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        session: {
                                            type: string;
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                                userId: {
                                                    type: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        user: {
                                            type: string;
                                            $ref: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/get-session";
};
declare const getSessionFromCtx: <U extends Record<string, any> = Record<string, any>, S extends Record<string, any> = Record<string, any>>(ctx: GenericEndpointContext, config?: {
    disableCookieCache?: boolean;
    disableRefresh?: boolean;
}) => Promise<{
    session: S & Session;
    user: U & User;
} | null>;
declare const sessionMiddleware: (inputContext: {
    body?: any;
    query?: Record<string, any> | undefined;
    request?: Request | undefined;
    headers?: Headers | undefined;
    asResponse?: boolean | undefined;
    returnHeaders?: boolean | undefined;
    use?: better_call.Middleware[] | undefined;
}) => Promise<{
    session: {
        session: Record<string, any> & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            expiresAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        };
        user: Record<string, any> & {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        };
    };
}>;
declare const requestOnlySessionMiddleware: (inputContext: {
    body?: any;
    query?: Record<string, any> | undefined;
    request?: Request | undefined;
    headers?: Headers | undefined;
    asResponse?: boolean | undefined;
    returnHeaders?: boolean | undefined;
    use?: better_call.Middleware[] | undefined;
}) => Promise<{
    session: {
        session: Record<string, any> & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            expiresAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        };
        user: Record<string, any> & {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        };
    } | null;
}>;
declare const freshSessionMiddleware: (inputContext: {
    body?: any;
    query?: Record<string, any> | undefined;
    request?: Request | undefined;
    headers?: Headers | undefined;
    asResponse?: boolean | undefined;
    returnHeaders?: boolean | undefined;
    use?: better_call.Middleware[] | undefined;
}) => Promise<{
    session: {
        session: Record<string, any> & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            expiresAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        };
        user: Record<string, any> & {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        };
    };
}>;
/**
 * user active sessions list
 */
declare const listSessions: <Option extends BetterAuthOptions>() => {
    <C extends [{
        headers: HeadersInit;
        body?: undefined;
        method?: "GET" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: Prettify<UnionToIntersection<StripEmptyObjects<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            expiresAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[];
    } : Prettify<UnionToIntersection<StripEmptyObjects<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
    options: {
        method: "GET";
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array";
                                    items: {
                                        type: string;
                                        properties: {
                                            token: {
                                                type: string;
                                            };
                                            userId: {
                                                type: string;
                                            };
                                            expiresAt: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/list-sessions";
};
/**
 * revoke a single session
 */
declare const revokeSession: {
    <C extends [{
        body: {
            token: string;
        };
        headers: HeadersInit;
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    token: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/revoke-session";
};
/**
 * revoke all user sessions
 */
declare const revokeSessions: {
    <C extends [{
        headers: HeadersInit;
        body?: undefined;
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/revoke-sessions";
};
declare const revokeOtherSessions: {
    <C extends [{
        headers: HeadersInit;
        body?: undefined;
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        requireHeaders: true;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/revoke-other-sessions";
};

declare const signOut: {
    <C extends [{
        headers: HeadersInit;
        body?: undefined;
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            success: boolean;
        };
    } : {
        success: boolean;
    }>;
    options: {
        method: "POST";
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        success: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-out";
};

declare const forgetPassword: {
    <C extends [{
        body: {
            email: string;
            redirectTo?: string | undefined;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The email address of the user to send a password reset email to.
             */
            email: z.ZodString;
            /**
             * The URL to redirect the user to reset their password.
             * If the token isn't valid or expired, it'll be redirected with a query parameter `?
             * error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
             * token=VALID_TOKEN
             */
            redirectTo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            redirectTo?: string | undefined;
        }, {
            email: string;
            redirectTo?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/forget-password";
};
declare const forgetPasswordCallback: {
    <C extends [{
        query: {
            callbackURL: string;
        };
        params: {
            token: string;
        };
        body?: undefined;
        method?: "GET" | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: never;
    } : never>;
    options: {
        method: "GET";
        query: z.ZodObject<{
            callbackURL: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            callbackURL: string;
        }, {
            callbackURL: string;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<void>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/reset-password/:token";
};
declare const resetPassword: {
    <C extends [{
        body: {
            newPassword: string;
            token?: string | undefined;
        };
        method?: "POST" | undefined;
        query?: {
            token?: string | undefined;
        } | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
        }, {
            token?: string | undefined;
        }>>;
        body: z.ZodObject<{
            newPassword: z.ZodString;
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            token?: string | undefined;
        }, {
            newPassword: string;
            token?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/reset-password";
};

declare function createEmailVerificationToken(secret: string, email: string, 
/**
 * The email to update from
 */
updateTo?: string, 
/**
 * The time in seconds for the token to expire
 */
expiresIn?: number): Promise<string>;
/**
 * A function to send a verification email to the user
 */
declare function sendVerificationEmailFn(ctx: GenericEndpointContext, user: User): Promise<void>;
declare const sendVerificationEmail: {
    <C extends [{
        body: {
            email: string;
            callbackURL?: string | undefined;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            email: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            callbackURL?: string | undefined;
        }, {
            email: string;
            callbackURL?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/send-verification-email";
};
declare const verifyEmail: {
    <C extends [{
        query: {
            token: string;
            callbackURL?: string | undefined;
        };
        body?: undefined;
        method?: "GET" | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: void | {
            status: boolean;
            user: {
                id: any;
                email: any;
                name: any;
                image: any;
                emailVerified: any;
                createdAt: any;
                updatedAt: any;
            };
        } | {
            status: boolean;
            user: null;
        };
    } : void | {
        status: boolean;
        user: {
            id: any;
            email: any;
            name: any;
            image: any;
            emailVerified: any;
            createdAt: any;
            updatedAt: any;
        };
    } | {
        status: boolean;
        user: null;
    }>;
    options: {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<void>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                        };
                                        status: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/verify-email";
};

declare const updateUser: <O extends BetterAuthOptions>() => {
    <C extends better_call.HasRequiredKeys<({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T ? { [K_1 in keyof T as {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1] extends never ? never : undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1] ? never : K_1]: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1]; } : never) & ({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_1 ? { [K_2 in keyof T_1 as undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2] ? K_2 : never]?: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2] | undefined; } : never) extends infer T_2 ? { [K in keyof T_2]: (({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_3 ? { [K_1_1 in keyof T_3 as {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1] extends never ? never : undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1] ? never : K_1_1]: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1]; } : never) & ({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_4 ? { [K_2_1 in keyof T_4 as undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_1] ? K_2_1 : never]?: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_5 ? { [K_1_2 in keyof T_5 as {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2] extends never ? never : undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2] ? never : K_1_2]: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2]; } : never) & ({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_6 ? { [K_2_2 in keyof T_6 as undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_2] ? K_2_2 : never]?: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_7 ? { [K_1_3 in keyof T_7 as {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3] extends never ? never : undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3] ? never : K_1_3]: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3]; } : never) & ({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_8 ? { [K_2_3 in keyof T_8 as undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_3] ? K_2_3 : never]?: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_9 ? { [K_1_4 in keyof T_9 as {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4] extends never ? never : undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4] ? never : K_1_4]: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4]; } : never) & ({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_10 ? { [K_2_4 in keyof T_10 as undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_4] ? K_2_4 : never]?: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_11 ? { [K_1_5 in keyof T_11 as {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5] extends never ? never : undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5] ? never : K_1_5]: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5]; } : never) & ({
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_12 ? { [K_2_5 in keyof T_12 as undefined extends {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_5] ? K_2_5 : never]?: {
        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
            name?: string;
            image?: string | null;
        }>>;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            $Infer: {
                body: Partial<Prettify<AdditionalUserFieldsInput<O> & {
                    name?: string;
                    image?: string | null;
                }>>;
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/update-user";
};
declare const changePassword: {
    <C extends [{
        body: {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            token: string | null;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        };
    } : {
        token: string | null;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
            /**
             * The current password of the user
             */
            currentPassword: z.ZodString;
            /**
             * revoke all sessions that are not the
             * current one logged in by the user
             */
            revokeOtherSessions: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            description: string;
                                            $ref: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/change-password";
};
declare const setPassword: {
    <C extends [{
        body: {
            newPassword: string;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
        }, {
            newPassword: string;
        }>;
        metadata: {
            SERVER_ONLY: true;
        };
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    } & {
        use: any[];
    };
    path: "/set-password";
};
declare const deleteUser: {
    <C extends [{
        body: {
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            success: boolean;
            message: string;
        };
    } : {
        success: boolean;
        message: string;
    }>;
    options: {
        method: "POST";
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        body: z.ZodObject<{
            /**
             * The callback URL to redirect to after the user is deleted
             * this is only used on delete user callback
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * The password of the user. If the password isn't provided, session freshness
             * will be checked.
             */
            password: z.ZodOptional<z.ZodString>;
            /**
             * The token to delete the user. If the token is provided, the user will be deleted
             */
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
        }, {
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/delete-user";
};
declare const deleteUserCallback: {
    <C extends [{
        query: {
            token: string;
            callbackURL?: string | undefined;
        };
        body?: undefined;
        method?: "GET" | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            success: boolean;
            message: string;
        };
    } : {
        success: boolean;
        message: string;
    }>;
    options: {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<void>)[];
    } & {
        use: any[];
    };
    path: "/delete-user/callback";
};
declare const changeEmail: {
    <C extends [{
        body: {
            newEmail: string;
            callbackURL?: string | undefined;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            newEmail: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newEmail: string;
            callbackURL?: string | undefined;
        }, {
            newEmail: string;
            callbackURL?: string | undefined;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                        };
                                        status: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/change-email";
};

declare const error: {
    <C extends [({
        body?: undefined;
        method?: "GET" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    } | undefined)?]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: Response;
    } : Response>;
    options: {
        method: "GET";
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "text/html": {
                                schema: {
                                    type: "string";
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    } & {
        use: any[];
    };
    path: "/error";
};

declare const ok: {
    <C extends [({
        body?: undefined;
        method?: "GET" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    } | undefined)?]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            ok: boolean;
        };
    } : {
        ok: boolean;
    }>;
    options: {
        method: "GET";
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        ok: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    } & {
        use: any[];
    };
    path: "/ok";
};

declare const signUpEmail: <O extends BetterAuthOptions>() => {
    <C extends better_call.HasRequiredKeys<({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T ? { [K_1 in keyof T as {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1] extends never ? never : undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1] ? never : K_1]: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1]; } : never) & ({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_1 ? { [K_2 in keyof T_1 as undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2] ? K_2 : never]?: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2] | undefined; } : never) extends infer T_2 ? { [K in keyof T_2]: (({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_3 ? { [K_1_1 in keyof T_3 as {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1] extends never ? never : undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1] ? never : K_1_1]: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_1]; } : never) & ({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_4 ? { [K_2_1 in keyof T_4 as undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_1] ? K_2_1 : never]?: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_5 ? { [K_1_2 in keyof T_5 as {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2] extends never ? never : undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2] ? never : K_1_2]: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_2]; } : never) & ({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_6 ? { [K_2_2 in keyof T_6 as undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_2] ? K_2_2 : never]?: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_7 ? { [K_1_3 in keyof T_7 as {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3] extends never ? never : undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3] ? never : K_1_3]: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_3]; } : never) & ({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_8 ? { [K_2_3 in keyof T_8 as undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_3] ? K_2_3 : never]?: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_9 ? { [K_1_4 in keyof T_9 as {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4] extends never ? never : undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4] ? never : K_1_4]: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_4]; } : never) & ({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_10 ? { [K_2_4 in keyof T_10 as undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_4] ? K_2_4 : never]?: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_11 ? { [K_1_5 in keyof T_11 as {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5] extends never ? never : undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5] ? never : K_1_5]: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_1_5]; } : never) & ({
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } extends infer T_12 ? { [K_2_5 in keyof T_12 as undefined extends {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_5] ? K_2_5 : never]?: {
        body: {
            name: string;
            email: string;
            password: string;
        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
        method: "POST" | undefined;
        query: Record<string, any> | undefined;
        params: Record<string, any> | undefined;
        request: Request | undefined;
        headers: HeadersInit | undefined;
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            token: null;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            token: string;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        };
    } : {
        token: null;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } | {
        token: string;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    options: {
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        metadata: {
            $Infer: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & AdditionalUserFieldsInput<O>;
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        id: {
                                            type: string;
                                            description: string;
                                        };
                                        email: {
                                            type: string;
                                            description: string;
                                        };
                                        name: {
                                            type: string;
                                            description: string;
                                        };
                                        image: {
                                            type: string;
                                            description: string;
                                        };
                                        emailVerified: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-up/email";
};

declare const listUserAccounts: {
    <C extends [({
        body?: undefined;
        method?: "GET" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    } | undefined)?]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            id: string;
            provider: string;
            createdAt: Date;
            updatedAt: Date;
            accountId: string;
            scopes: string[];
        }[];
    } : {
        id: string;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
        accountId: string;
        scopes: string[];
    }[]>;
    options: {
        method: "GET";
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array";
                                    items: {
                                        type: string;
                                        properties: {
                                            id: {
                                                type: string;
                                            };
                                            provider: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/list-accounts";
};
declare const linkSocialAccount: {
    <C extends [{
        body: {
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
            callbackURL?: string | undefined;
        };
        headers: HeadersInit;
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            url: string;
            redirect: boolean;
        };
    } : {
        url: string;
        redirect: boolean;
    }>;
    options: {
        method: "POST";
        requireHeaders: true;
        body: z.ZodObject<{
            /**
             * Callback URL to redirect to after the user has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use`
             */
            provider: z.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
        }, "strip", z.ZodTypeAny, {
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
            callbackURL?: string | undefined;
        }, {
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
            callbackURL?: string | undefined;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        redirect: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/link-social";
};
declare const unlinkAccount: {
    <C extends [{
        body: {
            providerId: string;
        };
        method?: "POST" | undefined;
        query?: Record<string, any> | undefined;
        params?: Record<string, any> | undefined;
        request?: Request | undefined;
        headers?: HeadersInit | undefined;
        asResponse?: boolean | undefined;
        returnHeaders?: boolean | undefined;
        use?: better_call.Middleware[] | undefined;
        path?: string | undefined;
    }]>(...inputCtx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : C extends [{
        returnHeaders: true;
    }] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            providerId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            providerId: string;
        }, {
            providerId: string;
        }>;
        use: ((inputContext: {
            body?: any;
            query?: Record<string, any> | undefined;
            request?: Request | undefined;
            headers?: Headers | undefined;
            asResponse?: boolean | undefined;
            returnHeaders?: boolean | undefined;
            use?: better_call.Middleware[] | undefined;
        }) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    } & {
        use: any[];
    };
    path: "/unlink-account";
};

/**
 * A middleware to validate callbackURL and origin against
 * trustedOrigins.
 */
declare const originCheckMiddleware: (inputContext: {
    body?: any;
    query?: Record<string, any> | undefined;
    request?: Request | undefined;
    headers?: Headers | undefined;
    asResponse?: boolean | undefined;
    returnHeaders?: boolean | undefined;
    use?: better_call.Middleware[] | undefined;
}) => Promise<void>;
declare const originCheck: (getValue: (ctx: GenericEndpointContext) => string | string[]) => (inputContext: {
    body?: any;
    query?: Record<string, any> | undefined;
    request?: Request | undefined;
    headers?: Headers | undefined;
    asResponse?: boolean | undefined;
    returnHeaders?: boolean | undefined;
    use?: better_call.Middleware[] | undefined;
}) => Promise<void>;

declare function getEndpoints<C extends AuthContext, Option extends BetterAuthOptions>(ctx: Promise<C> | C, options: Option): {
    api: {
        ok: {
            <C_1 extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <C_1 extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <C_1 extends [{
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                token: string;
                url: undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }>>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <C_1 extends [{
                method: "GET" | "POST";
                params: {
                    id: string;
                };
                body?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
                query?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "GET" | undefined;
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    session: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                    user: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
                } | null;
            } : {
                session: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>>;
                    disableRefresh: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <C_1 extends better_call.HasRequiredKeys<({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T ? { [K_1 in keyof T as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] ? never : K_1]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_1 ? { [K_2 in keyof T_1 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] ? K_2 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] | undefined; } : never) extends infer T_2 ? { [K in keyof T_2]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_3 ? { [K_1_1 in keyof T_3 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] ? never : K_1_1]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_4 ? { [K_2_1 in keyof T_4 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] ? K_2_1 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_5 ? { [K_1_2 in keyof T_5 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] ? never : K_1_2]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_6 ? { [K_2_2 in keyof T_6 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] ? K_2_2 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_7 ? { [K_1_3 in keyof T_7 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] ? never : K_1_3]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_8 ? { [K_2_3 in keyof T_8 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] ? K_2_3 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_9 ? { [K_1_4 in keyof T_9 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] ? never : K_1_4]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_10 ? { [K_2_4 in keyof T_10 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] ? K_2_4 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_11 ? { [K_1_5 in keyof T_11 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] ? never : K_1_5]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_12 ? { [K_2_5 in keyof T_12 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] ? K_2_5 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    token: null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                token: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <C_1 extends [{
                body: {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                redirect: boolean;
                token: string;
                url: string | undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <C_1 extends [{
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <C_1 extends [{
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: {
                    token?: string | undefined;
                } | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <C_1 extends [{
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
                body?: undefined;
                method?: "GET" | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: void | {
                    status: boolean;
                    user: {
                        id: any;
                        email: any;
                        name: any;
                        image: any;
                        emailVerified: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                } | {
                    status: boolean;
                    user: null;
                };
            } : void | {
                status: boolean;
                user: {
                    id: any;
                    email: any;
                    name: any;
                    image: any;
                    emailVerified: any;
                    createdAt: any;
                    updatedAt: any;
                };
            } | {
                status: boolean;
                user: null;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <C_1 extends [{
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <C_1 extends [{
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <C_1 extends [{
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    token: string | null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    description: string;
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <C_1 extends [{
                body: {
                    newPassword: string;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <C_1 extends better_call.HasRequiredKeys<({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T ? { [K_1 in keyof T as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] ? never : K_1]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_1 ? { [K_2 in keyof T_1 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] ? K_2 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] | undefined; } : never) extends infer T_2 ? { [K in keyof T_2]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_3 ? { [K_1_1 in keyof T_3 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] ? never : K_1_1]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_4 ? { [K_2_1 in keyof T_4 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] ? K_2_1 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_5 ? { [K_1_2 in keyof T_5 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] ? never : K_1_2]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_6 ? { [K_2_2 in keyof T_6 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] ? K_2_2 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_7 ? { [K_1_3 in keyof T_7 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] ? never : K_1_3]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_8 ? { [K_2_3 in keyof T_8 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] ? K_2_3 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_9 ? { [K_1_4 in keyof T_9 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] ? never : K_1_4]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_10 ? { [K_2_4 in keyof T_10 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] ? K_2_4 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_11 ? { [K_1_5 in keyof T_11 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] ? never : K_1_5]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_12 ? { [K_2_5 in keyof T_12 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] ? K_2_5 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                            name?: string;
                            image?: string | null;
                        }>>;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <C_1 extends [{
                body: {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <C_1 extends [{
                query: {
                    callbackURL: string;
                };
                params: {
                    token: string;
                };
                body?: undefined;
                method?: "GET" | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: Prettify<UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[];
            } : Prettify<UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
            options: {
                method: "GET";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <C_1 extends [{
                body: {
                    token: string;
                };
                headers: HeadersInit;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <C_1 extends [{
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                };
                headers: HeadersInit;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    url: string;
                    redirect: boolean;
                };
            } : {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <C_1 extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <C_1 extends [{
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
                body?: undefined;
                method?: "GET" | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<void>)[];
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <C_1 extends [{
                body: {
                    providerId: string;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                }, {
                    providerId: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
    } & UnionToIntersection<Option["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>;
    middlewares: {
        path: string;
        middleware: any;
    }[];
};
declare const router: <C extends AuthContext, Option extends BetterAuthOptions>(ctx: C, options: Option) => {
    handler: (request: Request) => Promise<Response>;
    endpoints: {
        ok: {
            <C_1 extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <C_1 extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <C_1 extends [{
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                token: string;
                url: undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }>>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <C_1 extends [{
                method: "GET" | "POST";
                params: {
                    id: string;
                };
                body?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
                query?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "GET" | undefined;
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    session: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                    user: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
                } | null;
            } : {
                session: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>>;
                    disableRefresh: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <C_1 extends better_call.HasRequiredKeys<({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T ? { [K_1 in keyof T as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] ? never : K_1]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_1 ? { [K_2 in keyof T_1 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] ? K_2 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] | undefined; } : never) extends infer T_2 ? { [K in keyof T_2]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_3 ? { [K_1_1 in keyof T_3 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] ? never : K_1_1]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_4 ? { [K_2_1 in keyof T_4 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] ? K_2_1 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_5 ? { [K_1_2 in keyof T_5 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] ? never : K_1_2]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_6 ? { [K_2_2 in keyof T_6 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] ? K_2_2 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_7 ? { [K_1_3 in keyof T_7 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] ? never : K_1_3]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_8 ? { [K_2_3 in keyof T_8 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] ? K_2_3 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_9 ? { [K_1_4 in keyof T_9 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] ? never : K_1_4]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_10 ? { [K_2_4 in keyof T_10 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] ? K_2_4 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_11 ? { [K_1_5 in keyof T_11 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] ? never : K_1_5]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_12 ? { [K_2_5 in keyof T_12 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] ? K_2_5 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    token: null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                token: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <C_1 extends [{
                body: {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                redirect: boolean;
                token: string;
                url: string | undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <C_1 extends [{
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <C_1 extends [{
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: {
                    token?: string | undefined;
                } | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <C_1 extends [{
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
                body?: undefined;
                method?: "GET" | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: void | {
                    status: boolean;
                    user: {
                        id: any;
                        email: any;
                        name: any;
                        image: any;
                        emailVerified: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                } | {
                    status: boolean;
                    user: null;
                };
            } : void | {
                status: boolean;
                user: {
                    id: any;
                    email: any;
                    name: any;
                    image: any;
                    emailVerified: any;
                    createdAt: any;
                    updatedAt: any;
                };
            } | {
                status: boolean;
                user: null;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <C_1 extends [{
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <C_1 extends [{
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <C_1 extends [{
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    token: string | null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    description: string;
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <C_1 extends [{
                body: {
                    newPassword: string;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <C_1 extends better_call.HasRequiredKeys<({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T ? { [K_1 in keyof T as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1] ? never : K_1]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_1 ? { [K_2 in keyof T_1 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] ? K_2 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2] | undefined; } : never) extends infer T_2 ? { [K in keyof T_2]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_3 ? { [K_1_1 in keyof T_3 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1] ? never : K_1_1]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_1]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_4 ? { [K_2_1 in keyof T_4 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] ? K_2_1 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_5 ? { [K_1_2 in keyof T_5 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2] ? never : K_1_2]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_2]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_6 ? { [K_2_2 in keyof T_6 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] ? K_2_2 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_7 ? { [K_1_3 in keyof T_7 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3] ? never : K_1_3]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_3]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_8 ? { [K_2_3 in keyof T_8 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] ? K_2_3 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_9 ? { [K_1_4 in keyof T_9 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4] ? never : K_1_4]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_4]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_10 ? { [K_2_4 in keyof T_10 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] ? K_2_4 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_11 ? { [K_1_5 in keyof T_11 as {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5] ? never : K_1_5]: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_1_5]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } extends infer T_12 ? { [K_2_5 in keyof T_12 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] ? K_2_5 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<Prettify<InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input"> & {
                            name?: string;
                            image?: string | null;
                        }>>;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <C_1 extends [{
                body: {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <C_1 extends [{
                query: {
                    callbackURL: string;
                };
                params: {
                    token: string;
                };
                body?: undefined;
                method?: "GET" | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: Prettify<UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[];
            } : Prettify<UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
            options: {
                method: "GET";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <C_1 extends [{
                body: {
                    token: string;
                };
                headers: HeadersInit;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <C_1 extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <C_1 extends [{
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                };
                headers: HeadersInit;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    url: string;
                    redirect: boolean;
                };
            } : {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <C_1 extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <C_1 extends [{
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
                body?: undefined;
                method?: "GET" | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<void>)[];
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <C_1 extends [{
                body: {
                    providerId: string;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : C_1 extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                }, {
                    providerId: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
    } & UnionToIntersection<Option["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>;
};

declare const BASE_ERROR_CODES: {
    USER_NOT_FOUND: string;
    FAILED_TO_CREATE_USER: string;
    FAILED_TO_CREATE_SESSION: string;
    FAILED_TO_UPDATE_USER: string;
    FAILED_TO_GET_SESSION: string;
    INVALID_PASSWORD: string;
    INVALID_EMAIL: string;
    INVALID_EMAIL_OR_PASSWORD: string;
    SOCIAL_ACCOUNT_ALREADY_LINKED: string;
    PROVIDER_NOT_FOUND: string;
    INVALID_TOKEN: string;
    ID_TOKEN_NOT_SUPPORTED: string;
    FAILED_TO_GET_USER_INFO: string;
    USER_EMAIL_NOT_FOUND: string;
    EMAIL_NOT_VERIFIED: string;
    PASSWORD_TOO_SHORT: string;
    PASSWORD_TOO_LONG: string;
    USER_ALREADY_EXISTS: string;
    EMAIL_CAN_NOT_BE_UPDATED: string;
    CREDENTIAL_ACCOUNT_NOT_FOUND: string;
    SESSION_EXPIRED: string;
    FAILED_TO_UNLINK_LAST_ACCOUNT: string;
    ACCOUNT_NOT_FOUND: string;
};

type WithJsDoc<T, D> = Expand<T & D>;
declare const betterAuth: <O extends BetterAuthOptions>(options: O) => {
    handler: (request: Request) => Promise<Response>;
    api: InferAPI<{
        ok: {
            <C extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <C extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <C extends [{
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                token: string;
                url: undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }>>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    scopes?: string[] | undefined;
                    idToken?: {
                        token: string;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <C extends [{
                method: "GET" | "POST";
                params: {
                    id: string;
                };
                body?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
                query?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <C extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "GET" | undefined;
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    session: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
                    user: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined;
                    } & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
                } | null;
            } : {
                session: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>>;
                    disableRefresh: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <C extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <C extends better_call.HasRequiredKeys<({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_1 ? { [K_1 in keyof T_1 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1] ? never : K_1]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_2 ? { [K_2 in keyof T_2 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2] ? K_2 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2] | undefined; } : never) extends infer T_3 ? { [K in keyof T_3]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_4 ? { [K_1_1 in keyof T_4 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_1] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_1] ? never : K_1_1]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_1]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_5 ? { [K_2_1 in keyof T_5 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_1] ? K_2_1 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_6 ? { [K_1_2 in keyof T_6 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_2] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_2] ? never : K_1_2]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_2]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_7 ? { [K_2_2 in keyof T_7 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_2] ? K_2_2 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_8 ? { [K_1_3 in keyof T_8 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_3] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_3] ? never : K_1_3]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_3]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_9 ? { [K_2_3 in keyof T_9 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_3] ? K_2_3 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_10 ? { [K_1_4 in keyof T_10 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_4] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_4] ? never : K_1_4]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_4]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_11 ? { [K_2_4 in keyof T_11 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_4] ? K_2_4 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_12 ? { [K_1_5 in keyof T_12 as {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_5] extends never ? never : undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_5] ? never : K_1_5]: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_5]; } : never) & ({
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_13 ? { [K_2_5 in keyof T_13 as undefined extends {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_5] ? K_2_5 : never]?: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    token: null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                token: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <C extends [{
                body: {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                redirect: boolean;
                token: string;
                url: string | undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <C extends [{
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <C extends [{
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: {
                    token?: string | undefined;
                } | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <C extends [{
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
                body?: undefined;
                method?: "GET" | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: void | {
                    status: boolean;
                    user: {
                        id: any;
                        email: any;
                        name: any;
                        image: any;
                        emailVerified: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                } | {
                    status: boolean;
                    user: null;
                };
            } : void | {
                status: boolean;
                user: {
                    id: any;
                    email: any;
                    name: any;
                    image: any;
                    emailVerified: any;
                    createdAt: any;
                    updatedAt: any;
                };
            } | {
                status: boolean;
                user: null;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <C extends [{
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <C extends [{
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <C extends [{
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    token: string | null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    description: string;
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <C extends [{
                body: {
                    newPassword: string;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <C extends better_call.HasRequiredKeys<({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_1 ? { [K_1 in keyof T_1 as {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1] ? never : K_1]: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_2 ? { [K_2 in keyof T_2 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2] ? K_2 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2] | undefined; } : never) extends infer T_3 ? { [K in keyof T_3]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_4 ? { [K_1_1 in keyof T_4 as {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_1] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_1] ? never : K_1_1]: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_1]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_5 ? { [K_2_1 in keyof T_5 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_1] ? K_2_1 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_1] | undefined; } : never))[K]; } : never> extends true ? [({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_6 ? { [K_1_2 in keyof T_6 as {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_2] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_2] ? never : K_1_2]: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_2]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_7 ? { [K_2_2 in keyof T_7 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_2] ? K_2_2 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_2] | undefined; } : never) extends infer T_5_1 ? { [K_3 in keyof T_5_1]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_8 ? { [K_1_3 in keyof T_8 as {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_3] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_3] ? never : K_1_3]: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_3]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_9 ? { [K_2_3 in keyof T_9 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_3] ? K_2_3 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_3] | undefined; } : never))[K_3]; } : never] : [((({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_10 ? { [K_1_4 in keyof T_10 as {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_4] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_4] ? never : K_1_4]: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_4]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_11 ? { [K_2_4 in keyof T_11 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_4] ? K_2_4 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_4] | undefined; } : never) extends infer T_10_1 ? { [K_4 in keyof T_10_1]: (({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_12 ? { [K_1_5 in keyof T_12 as {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_5] extends never ? never : undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_5] ? never : K_1_5]: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_1_5]; } : never) & ({
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } extends infer T_13 ? { [K_2_5 in keyof T_13 as undefined extends {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_5] ? K_2_5 : never]?: {
                body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                    name?: string;
                    image?: string | null;
                }>>;
                method: "POST" | undefined;
                query: Record<string, any> | undefined;
                params: Record<string, any> | undefined;
                request: Request | undefined;
                headers: HeadersInit | undefined;
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            }[K_2_5] | undefined; } : never))[K_4]; } : never) | undefined)?]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<Prettify<InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input"> & {
                            name?: string;
                            image?: string | null;
                        }>>;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <C extends [{
                body: {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <C extends [{
                query: {
                    callbackURL: string;
                };
                params: {
                    token: string;
                };
                body?: undefined;
                method?: "GET" | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <C extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: Prettify<UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>>[];
            } : Prettify<UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>>[]>;
            options: {
                method: "GET";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <C extends [{
                body: {
                    token: string;
                };
                headers: HeadersInit;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <C extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <C extends [{
                headers: HeadersInit;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <C extends [{
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                };
                headers: HeadersInit;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    url: string;
                    redirect: boolean;
                };
            } : {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "kakao" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk";
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <C extends [({
                body?: undefined;
                method?: "GET" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            } | undefined)?]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <C extends [{
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
                body?: undefined;
                method?: "GET" | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<void>)[];
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <C extends [{
                body: {
                    providerId: string;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: HeadersInit | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                }, {
                    providerId: string;
                }>;
                use: ((inputContext: {
                    body?: any;
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
    } & UnionToIntersection<O["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>>;
    options: O;
    $context: Promise<AuthContext>;
    $Infer: {
        Session: {
            session: PrettifyDeep<InferSession<O>>;
            user: PrettifyDeep<InferUser<O>>;
        };
    } & InferPluginTypes<O>;
    $ERROR_CODES: InferPluginErrorCodes<O> & typeof BASE_ERROR_CODES;
};
type Auth = {
    handler: (request: Request) => Promise<Response>;
    api: FilterActions<ReturnType<typeof router>["endpoints"]>;
    options: BetterAuthOptions;
    $ERROR_CODES: typeof BASE_ERROR_CODES;
    $context: Promise<AuthContext>;
};

export { createFieldAttribute as $, type AuthPluginSchema as A, type BetterAuthPlugin as B, type InferSessionAPI as C, type InferAPI as D, levels as E, type FilteredAPI as F, type GenericEndpointContext as G, type HookEndpointContext as H, type InferOptionSchema as I, shouldPublishLog as J, type KyselyDatabaseType as K, type LogLevel as L, type Models as M, type Logger as N, type LogHandlerParams as O, createLogger as P, logger as Q, type RateLimit as R, type Session as S, type FieldAttribute as T, type User as U, type Verification as V, type Where as W, type FieldType as X, createInternalAdapter as Y, type InternalAdapter as Z, type FieldAttributeConfig as _, type InferPluginErrorCodes as a, changeEmail as a$, type InferValueType as a0, type InferFieldsOutput as a1, type InferFieldsInput as a2, type InferFieldsInputClient as a3, type PluginFieldAttribute as a4, type InferFieldsFromPlugins as a5, type InferFieldsFromOptions as a6, type BetterAuthDbSchema as a7, getAuthTables as a8, accountSchema as a9, getEndpoints as aA, router as aB, signInSocial as aC, signInEmail as aD, callbackOAuth as aE, getSession as aF, getSessionFromCtx as aG, sessionMiddleware as aH, requestOnlySessionMiddleware as aI, freshSessionMiddleware as aJ, listSessions as aK, revokeSession as aL, revokeSessions as aM, revokeOtherSessions as aN, signOut as aO, forgetPassword as aP, forgetPasswordCallback as aQ, resetPassword as aR, createEmailVerificationToken as aS, sendVerificationEmailFn as aT, sendVerificationEmail as aU, verifyEmail as aV, updateUser as aW, changePassword as aX, setPassword as aY, deleteUser as aZ, deleteUserCallback as a_, userSchema as aa, sessionSchema as ab, verificationSchema as ac, parseOutputData as ad, getAllFields as ae, parseUserOutput as af, parseAccountOutput as ag, parseSessionOutput as ah, parseInputData as ai, parseUserInput as aj, parseAdditionalUserInput as ak, parseAccountInput as al, parseSessionInput as am, mergeSchema as an, createCookieGetter as ao, getCookies as ap, type BetterAuthCookies as aq, setCookieCache as ar, setSessionCookie as as, deleteSessionCookie as at, parseCookies as au, type EligibleCookies as av, getSessionCookie as aw, getCookieCache as ax, parseSetCookieHeader as ay, setCookieToHeader as az, createAuthEndpoint as b, error as b0, ok as b1, signUpEmail as b2, listUserAccounts as b3, linkSocialAccount as b4, unlinkAccount as b5, originCheckMiddleware as b6, originCheck as b7, createAuthMiddleware as c, type AuthEndpoint as d, type AuthMiddleware as e, type BetterAuthOptions as f, type Adapter as g, BASE_ERROR_CODES as h, type Auth as i, type InferUser as j, type InferSession as k, type AuthContext as l, type WithJsDoc as m, betterAuth as n, optionsMiddleware as o, type AdditionalUserFieldsInput as p, type AdditionalUserFieldsOutput as q, type AdditionalSessionFieldsInput as r, type AdditionalSessionFieldsOutput as s, type InferPluginTypes as t, type Account as u, init as v, type AdapterSchemaCreation as w, type AdapterInstance as x, type SecondaryStorage as y, type FilterActions as z };
