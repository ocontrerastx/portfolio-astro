import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // ... other configs
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // customize your rules here
      "astro/no-set-html-directive": "error",
    },
  },
];
