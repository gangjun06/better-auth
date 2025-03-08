import { z } from 'zod';
import * as better_call from 'better-call';
import { U as User, I as InferOptionSchema, d as AuthEndpoint, S as Session, G as GenericEndpointContext, H as HookEndpointContext } from '../../shared/better-auth.B2ufZcGq.js';
import { L as LiteralString } from '../../shared/better-auth.Bi8FQwDD.js';
import * as _better_fetch_fetch from '@better-fetch/fetch';
import 'kysely';
import '../../shared/better-auth.CAcVTGfw.js';
import 'jose';
import 'better-sqlite3';

interface BackupCodeOptions {
    /**
     * The amount of backup codes to generate
     *
     * @default 10
     */
    amount?: number;
    /**
     * The length of the backup codes
     *
     * @default 10
     */
    length?: number;
    customBackupCodesGenerate?: () => string[];
}

interface OTPOptions {
    /**
     * How long the opt will be valid for in
     * minutes
     *
     * @default "3 mins"
     */
    period?: number;
    /**
     * Number of digits for the OTP code
     *
     * @default 6
     */
    digits?: number;
    /**
     * Send the otp to the user
     *
     * @param user - The user to send the otp to
     * @param otp - The otp to send
     * @param request - The request object
     * @returns void | Promise<void>
     */
    sendOTP?: (
    /**
     * The user to send the otp to
     * @type UserWithTwoFactor
     * @default UserWithTwoFactors
     */
    data: {
        user: UserWithTwoFactor;
        otp: string;
    }, 
    /**
     * The request object
     */
    request?: Request) => Promise<void> | void;
}

type TOTPOptions = {
    /**
     * Issuer
     */
    issuer?: string;
    /**
     * How many digits the otp to be
     *
     * @default 6
     */
    digits?: 6 | 8;
    /**
     * Period for otp in seconds.
     * @default 30
     */
    period?: number;
    /**
     * Backup codes configuration
     */
    backupCodes?: BackupCodeOptions;
    /**
     * Disable totp
     */
    disable?: boolean;
};

declare const schema: {
    user: {
        fields: {
            twoFactorEnabled: {
                type: "boolean";
                required: false;
                defaultValue: false;
                input: false;
            };
        };
    };
    twoFactor: {
        fields: {
            secret: {
                type: "string";
                required: true;
                returned: false;
            };
            backupCodes: {
                type: "string";
                required: true;
                returned: false;
            };
            userId: {
                type: "string";
                required: true;
                returned: false;
                references: {
                    model: string;
                    field: string;
                };
            };
        };
    };
};

interface TwoFactorOptions {
    /**
     * Application Name
     */
    issuer?: string;
    /**
     * TOTP OPtions
     */
    totpOptions?: Omit<TOTPOptions, "issuer">;
    /**
     * OTP Options
     */
    otpOptions?: OTPOptions;
    /**
     * Backup code options
     */
    backupCodeOptions?: BackupCodeOptions;
    /**
     * Skip verification on enabling two factor authentication.
     * @default false
     */
    skipVerificationOnEnable?: boolean;
    /**
     * Custom schema for the two factor plugin
     */
    schema?: InferOptionSchema<typeof schema>;
}
interface UserWithTwoFactor extends User {
    /**
     * If the user has enabled two factor authentication.
     */
    twoFactorEnabled: boolean;
}
interface TwoFactorProvider {
    id: LiteralString;
    endpoints?: Record<string, AuthEndpoint>;
}
interface TwoFactorTable {
    userId: string;
    secret: string;
    backupCodes: string;
    enabled: boolean;
}

declare const twoFactorClient: (options?: {
    /**
     * a redirect function to call if a user needs to verify
     * their two factor
     */
    onTwoFactorRedirect?: () => void | Promise<void>;
}) => {
    id: "two-factor";
    $InferServerPlugin: ReturnType<typeof twoFactor>;
    atomListeners: {
        matcher: (path: string) => boolean;
        signal: "$sessionSignal";
    }[];
    pathMethods: {
        "/two-factor/disable": "POST";
        "/two-factor/enable": "POST";
        "/two-factor/send-otp": "POST";
        "/two-factor/generate-backup-codes": "POST";
    };
    fetchPlugins: {
        id: string;
        name: string;
        hooks: {
            onSuccess(context: _better_fetch_fetch.SuccessContext<any>): Promise<void>;
        };
    }[];
};

declare const twoFactor: (options?: TwoFactorOptions) => {
    id: "two-factor";
    endpoints: {
        enableTwoFactor: {
            <C extends [{
                body: {
                    password: string;
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
                    totpURI: string;
                    backupCodes: string[];
                };
            } : {
                totpURI: string;
                backupCodes: string[];
            }>;
            options: {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                totpURI: {
                                                    type: string;
                                                    description: string;
                                                };
                                                backupCodes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
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
            path: "/two-factor/enable";
        };
        disableTwoFactor: {
            <C extends [{
                body: {
                    password: string;
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
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
                        summary: string;
                        description: string;
                        responses: {
                            200: {
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
            path: "/two-factor/disable";
        };
        verifyBackupCode: {
            <C extends [{
                body: {
                    code: string;
                    trustDevice?: boolean | undefined;
                    disableSession?: boolean | undefined;
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
                    user: UserWithTwoFactor;
                    session: {
                        session: Session & Record<string, any>;
                        user: User & Record<string, any>;
                    } & {
                        session: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: UserWithTwoFactor;
                    } & {
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
                };
            } : {
                user: UserWithTwoFactor;
                session: {
                    session: Session & Record<string, any>;
                    user: User & Record<string, any>;
                } & {
                    session: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: UserWithTwoFactor;
                } & {
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
            options: {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                    disableSession: z.ZodOptional<z.ZodBoolean>;
                    trustDevice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    trustDevice?: boolean | undefined;
                    disableSession?: boolean | undefined;
                }, {
                    code: string;
                    trustDevice?: boolean | undefined;
                    disableSession?: boolean | undefined;
                }>;
                use: ((inputContext: {
                    body: {
                        trustDevice?: boolean | undefined;
                    };
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
                    session: {
                        session: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
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
            path: "/two-factor/verify-backup-code";
        };
        generateBackupCodes: {
            <C extends [{
                body: {
                    password: string;
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
                    backupCodes: string[];
                };
            } : {
                status: boolean;
                backupCodes: string[];
            }>;
            options: {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
            path: "/two-factor/generate-backup-codes";
        };
        viewBackupCodes: {
            <C extends [{
                body: {
                    userId: string;
                };
                method?: "GET" | undefined;
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
                    backupCodes: string[];
                };
            } : {
                status: boolean;
                backupCodes: string[];
            }>;
            options: {
                method: "GET";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
            } & {
                use: any[];
            };
            path: "/two-factor/view-backup-codes";
        };
        sendTwoFactorOTP: {
            <C extends [({
                body?: {
                    trustDevice?: boolean | undefined;
                } | undefined;
                method?: "POST" | undefined;
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
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: z.ZodOptional<z.ZodObject<{
                    trustDevice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    trustDevice?: boolean | undefined;
                }, {
                    trustDevice?: boolean | undefined;
                }>>;
                use: ((inputContext: {
                    body: {
                        trustDevice?: boolean | undefined;
                    };
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
                    session: {
                        session: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
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
                        summary: string;
                        description: string;
                        responses: {
                            200: {
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
            path: "/two-factor/send-otp";
        };
        verifyTwoFactorOTP: {
            <C extends [{
                body: {
                    code: string;
                    trustDevice?: boolean | undefined;
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
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image: string | null | undefined;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string;
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image: string | null | undefined;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                    trustDevice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }>;
                use: ((inputContext: {
                    body: {
                        trustDevice?: boolean | undefined;
                    };
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
                    session: {
                        session: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
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
                        summary: string;
                        description: string;
                        responses: {
                            200: {
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
            path: "/two-factor/verify-otp";
        };
        generateTOTP: {
            <C extends [({
                body?: undefined;
                method?: "POST" | undefined;
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
                    code: string;
                };
            } : {
                code: string;
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
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                code: {
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
            path: "/totp/generate";
        };
        getTOTPURI: {
            <C extends [{
                body: {
                    password: string;
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
                    totpURI: string;
                };
            } : {
                totpURI: string;
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
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                totpURI: {
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
            path: "/two-factor/get-totp-uri";
        };
        verifyTOTP: {
            <C extends [{
                body: {
                    code: string;
                    trustDevice?: boolean | undefined;
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
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image: string | null | undefined;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string;
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image: string | null | undefined;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                    trustDevice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }>;
                use: ((inputContext: {
                    body: {
                        trustDevice?: boolean | undefined;
                    };
                    query?: Record<string, any> | undefined;
                    request?: Request | undefined;
                    headers?: Headers | undefined;
                    asResponse?: boolean | undefined;
                    returnHeaders?: boolean | undefined;
                    use?: better_call.Middleware[] | undefined;
                }) => Promise<{
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
                    session: {
                        session: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: (ctx: GenericEndpointContext) => Promise<{
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    invalid: () => Promise<never>;
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
                        summary: string;
                        description: string;
                        responses: {
                            200: {
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
            path: "/two-factor/verify-totp";
        };
    };
    options: TwoFactorOptions | undefined;
    hooks: {
        after: {
            matcher(context: HookEndpointContext): boolean;
            handler: (inputContext: {
                body?: any;
                query?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: Headers | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
            }) => Promise<{
                twoFactorRedirect: boolean;
            } | undefined>;
        }[];
    };
    schema: {
        user: {
            fields: {
                twoFactorEnabled: {
                    type: "boolean";
                    required: false;
                    defaultValue: false;
                    input: false;
                };
            };
        };
        twoFactor: {
            fields: {
                secret: {
                    type: "string";
                    required: true;
                    returned: false;
                };
                backupCodes: {
                    type: "string";
                    required: true;
                    returned: false;
                };
                userId: {
                    type: "string";
                    required: true;
                    returned: false;
                    references: {
                        model: string;
                        field: string;
                    };
                };
            };
        };
    };
    rateLimit: {
        pathMatcher(path: string): boolean;
        window: number;
        max: number;
    }[];
};

export { type TwoFactorOptions, type TwoFactorProvider, type TwoFactorTable, type UserWithTwoFactor, twoFactor, twoFactorClient };
