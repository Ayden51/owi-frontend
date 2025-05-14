import { motionDirectives } from "./utils";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxt/test-utils",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@vueuse/motion/nuxt",
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

    runtimeConfig: {
        public: {
            motion: {
                // @ts-expect-error This way of importing motion directives still works
                directives: motionDirectives,
            },
        },
    },
});
