export { u as Account, g as Adapter, x as AdapterInstance, w as AdapterSchemaCreation, r as AdditionalSessionFieldsInput, s as AdditionalSessionFieldsOutput, p as AdditionalUserFieldsInput, q as AdditionalUserFieldsOutput, i as Auth, l as AuthContext, A as AuthPluginSchema, f as BetterAuthOptions, B as BetterAuthPlugin, z as FilterActions, F as FilteredAPI, G as GenericEndpointContext, H as HookEndpointContext, D as InferAPI, I as InferOptionSchema, a as InferPluginErrorCodes, t as InferPluginTypes, k as InferSession, C as InferSessionAPI, j as InferUser, O as LogHandlerParams, L as LogLevel, N as Logger, M as Models, R as RateLimit, y as SecondaryStorage, S as Session, U as User, V as Verification, W as Where, m as WithJsDoc, n as betterAuth, P as createLogger, v as init, E as levels, Q as logger, J as shouldPublishLog } from './shared/better-auth.Bs9qn-uA.cjs';
export { AtomListener, BetterAuthClientPlugin, ClientOptions, InferActions, InferAdditionalFromClient, InferClientAPI, InferErrorCodes, InferPluginsFromClient, InferSessionFromClient, InferUserFromClient, IsSignal, Store } from './types/index.cjs';
export { H as HIDE_METADATA } from './shared/better-auth.DEHJp1rk.cjs';
export { g as generateState, p as parseState } from './shared/better-auth.DfPIDQ9F.cjs';
export * from 'better-call';
export * from 'zod';
export { D as DeepPartial, E as Expand, H as HasRequiredKeys, a as LiteralNumber, L as LiteralString, d as LiteralUnion, O as OmitId, c as PreserveJSDoc, b as Prettify, P as PrettifyDeep, R as RequiredKeysOf, S as StripEmptyObjects, U as UnionToIntersection, W as WithoutEmpty } from './shared/better-auth.Bi8FQwDD.cjs';
import 'kysely';
import './shared/better-auth.Kb3qC2Bx.cjs';
import 'jose';
import 'better-sqlite3';
import '@better-fetch/fetch';
import 'nanostores';

declare function capitalizeFirstLetter(str: string): string;

declare const generateId: (size?: number) => string;

declare class BetterAuthError extends Error {
    constructor(message: string, cause?: string);
}
declare class MissingDependencyError extends BetterAuthError {
    constructor(pkgName: string);
}

export { BetterAuthError, MissingDependencyError, capitalizeFirstLetter, generateId };
