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
    ],
    components: {
        dirs: [
            {
                path: "./components/wedding",
                pathPrefix: false,
            },
        ],
    },

    routeRules: {
        "/**": { swr: true },
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

    runtimeConfig: {
        public: {
            motion: {
                // @ts-expect-error This way of importing motion directives still works
                directives: motionDirectives,
            },
        },
    },
});