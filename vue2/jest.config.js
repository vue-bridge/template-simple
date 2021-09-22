const esModules = ["lodash-es"].join("|");

const config = {
  rootDir: process.cwd(),
  roots: ["<rootDir>/../src"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // we need to tell jest which Vue2 packages to use
    "^vue$": "<rootDir>/node_modules/vue",
    "@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils",
    "vue-demi": "<rootDir>/node_modules/vue-demi",
  },
  transform: {
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    "^.+\\js$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx"],
  testMatch: ["**/__tests__/**/*.spec.[jt]s?(x)"],
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`,
    "\\.pnp\\.[^\\/]+$",
  ],
};

module.exports = config;
