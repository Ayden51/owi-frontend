// @ts-expect-error This way of importing schema-org still works
import { defineOrganization } from "nuxt-schema-org/schema";
import { motionDirectives } from "./utils";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    app: {
        head: {
            link: [
                { rel: "icon", type: "image/x-icon", sizes: "48x48", href: "/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxt/test-utils",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@vueuse/motion/nuxt",
        "nuxt-easy-lightbox",
        "@vueuse/nuxt",
        "@nuxtjs/seo",
    ],

    components: {
        dirs: [
            {
                path: "./components/wedding",
                pathPrefix: false,
            },
        ],
    },

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ["/"],
        },
    },

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },

    fonts: {
        defaults: {
            subsets: ["vietnamese", "latin-ext", "latin"],
            weights: [400, 600, 700],
        },
    },

    image: {
        format: ["avif"],
        quality: 80,
    },

    site: {
        url: "https://wedding.ctpg.vn",
        name: "E-Wedding by CTPG",
        description:
            "Dịch vụ tạo website thiệp cưới online trọn gói. Kho giao diện thiệp cưới đẹp mắt, đa dạng, cá nhân hóa theo yêu cầu.",
        defaultLocale: "vi",
    },
    ogImage: {
        enabled: false,
    },
    schemaOrg: {
        identity: defineOrganization({
            // Basic Information
            name: "E-Wedding by CTPG",
            description:
                "Dịch vụ tạo website thiệp cưới online trọn gói. Kho giao diện thiệp cưới đẹp mắt, đa dạng, cá nhân hóa theo yêu cầu.",
            url: "https://wedding.ctpg.vn",
            logo: "https://wedding.ctpg.vn/logo.png",

            // Location Information
            address: {
                "@type": "PostalAddress",
                streetAddress: "72/53 Nguyễn Văn Thương, Phường 25, Quận Bình Thạnh, TP.HCM",
                addressRegion: "TP.HCM",
                postalCode: "700000",
                addressCountry: "VN",
            },

            // Contact Information
            email: "cskh@ctpg.vn",
            telephone: "(028).353.66566",
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer service",
                availableLanguage: ["Vietnamese", "English"],
                url: "https://dub.sh/StudyCare-Zalo",
            },

            // Social and External Links
            sameAs: [
                "https://ctpg.vn",
                "https://www.facebook.com/ctpg.vn",
                "https://www.tiktok.com/@ctyxaydung_congthanhphat",
            ],

            // Business Identifiers
            legalName: "Công Ty CP Tập Đoàn Xây Dựng Công Thành Phát",

            // Business Category
            "@type": ["Organization", "LocalBusiness"],
            category: "Wedding Website Services",

            // Services Offered
            makesOffer: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Thiệp cưới online",
                        description: "Tạo website thiệp cưới online, gửi thiệp mời online.",
                    },
                },
            ],

            // Target Audience
            audience: {
                "@type": "Audience",
                geographicArea: {
                    "@type": "Country",
                    name: "Vietnam",
                },
                audienceType: "Couples planning weddings",
            },
        }),
    },
    // Route-specific rules for selective indexing
    routeRules: {
        // Allow indexing for homepage and marketing pages (default behavior)
        "/": { robots: "index, follow" },

        // Block indexing for all wedding invitation pages
        "/**": { robots: false },
    },

    robots: {
        blockNonSeoBots: true,
        blockAiBots: true,

        // Define robot groups for different user agents
        groups: [
            {
                userAgent: "*",
                allow: ["/", "/images/", "/css/", "/js/", "/_nuxt/"],
                disallow: ["/*-wedding", "/admin/", "/dashboard/", "/_nuxt/builds/"],
            },
            {
                userAgent: "Googlebot",
                allow: ["/", "/images/", "/css/", "/js/", "/_nuxt/"],
                disallow: ["/*-wedding", "/admin/", "/dashboard/"],
            },
        ],

        // Sitemap reference
        sitemap: ["/sitemap.xml"],
    },

    runtimeConfig: {
        public: {
            motion: {
                // @ts-expect-error This way of importing motion directives still works
                directives: motionDirectives,
            },
        },
    },
});
