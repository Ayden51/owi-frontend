// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    // Your custom configs here
    {
        ignores: [".nuxt", ".nitro", ".output", "build", "node_modules"],
        rules: {
            // Allow single-word component names for UI components and pages
            "vue/multi-word-component-names": [
                "error",
                {
                    ignores: ["Button", "Card", "Dialog", "Separator", "Accordion", "index"],
                },
            ],
            // Allow missing default props for UI components
            "vue/require-default-prop": "off",
        },
    }
);
