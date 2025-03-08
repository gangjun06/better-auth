import { z } from 'zod';
import * as better_call from 'better-call';
import { S as Session, U as User, H as HookEndpointContext } from '../../shared/better-auth.B1TNB3i9.js';
import '../../shared/better-auth.Bi8FQwDD.js';
import 'kysely';
import '../../shared/better-auth.elCBLSn-.js';
import 'jose';
import 'better-sqlite3';

interface MultiSessionConfig {
    /**
     * The maximum number of sessions a user can have
     * at a time
     * @default 5
     */
    maximumSessions?: number;
}
declare const multiSession: (options?: MultiSessionConfig) => {
    id: "multi-session";
    endpoints: {
        listDeviceSessions: {
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
                response: {
                    session: Session;
                    user: User;
                }[];
            } : {
                session: Session;
                user: User;
            }[]>;
            options: {
                method: "GET";
                requireHeaders: true;
            } & {
                use: any[];
            };
            path: "/multi-session/list-device-sessions";
        };
        setActiveSession: {
            <C extends [{
                body: {
                    sessionToken: string;
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
                    session: Session & Record<string, any>;
                    user: User & Record<string, any>;
                };
            } : {
                session: Session & Record<string, any>;
                user: User & Record<string, any>;
            }>;
            options: {
                method: "POST";
                body: z.ZodObject<{
                    sessionToken: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    sessionToken: string;
                }, {
                    sessionToken: string;
                }>;
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
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
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
            path: "/multi-session/set-active";
        };
        revokeDeviceSession: {
            <C extends [{
                body: {
                    sessionToken: string;
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
                    sessionToken: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    sessionToken: string;
                }, {
                    sessionToken: string;
                }>;
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
            path: "/multi-session/revoke";
        };
    };
    hooks: {
        after: {
            matcher: (context: HookEndpointContext) => boolean;
            handler: (inputContext: {
                body?: any;
                query?: Record<string, any> | undefined;
                request?: Request | undefined;
                headers?: Headers | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: better_call.Middleware[] | undefined;
            }) => Promise<void>;
        }[];
    };
    $ERROR_CODES: {
        readonly INVALID_SESSION_TOKEN: "Invalid session token";
    };
};

export { multiSession };
