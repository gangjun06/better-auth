declare const Providers: {
    readonly CLOUDFLARE_TURNSTILE: "cloudflare-turnstile";
    readonly GOOGLE_RECAPTCHA: "google-recaptcha";
};

type Provider = (typeof Providers)[keyof typeof Providers];

interface CaptchaOptions {
    provider: Provider;
    secretKey: string;
    endpoints?: string[];
    siteVerifyURLOverride?: string;
}
declare const captcha: (options: CaptchaOptions) => {
    id: "captcha";
    onRequest: (request: Request) => Promise<{
        response: Response;
    } | undefined>;
};

export { type CaptchaOptions, captcha };
