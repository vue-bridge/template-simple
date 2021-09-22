import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@vue-bridge/runtime": require.resolve("@vue-bridge/runtime"),
    },
  },
  build: {
    lib: {
      entry: "../src/main.js",
      name: "Vue2ExampleLib",
      formats: ["es", "cjs"],
    },
    minify: false,
    rollupOptions: {
      external: [
        "vue",
        "vue-demi",
        "@vue/composition-api",
        "@vue-bridge/runtime",
      ],
    },
  },
});
