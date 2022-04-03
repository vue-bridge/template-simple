module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "@vue-bridge/eslint-config",
  ],
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["*.js", "*.ts"],
      env: {
        node: true,
      },
    },
    {
      files: ["**/*.spec.js", "**/*.spec.ts"],
      env: {
        node: true,
      },
    },
  ],
};
