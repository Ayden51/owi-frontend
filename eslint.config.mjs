// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    // Your custom configs here
    {
        ignores: [".nuxt", ".nitro", ".output", "build", "node_modules"],
    }
);
