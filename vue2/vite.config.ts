/// <reference types="vitest" />
import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { vueBridge } from "@vue-bridge/vite-plugin";
import { buildConfig } from "../vite.config.shared";
/**
 * @type {import('vite').UserConfig}
 */

const libraryGlobalName = "ExampleLibrary";

export default defineConfig({
  plugins: [
    vue(),
    vueBridge({
      vueVersion: "2",
      localizeDeps: true,
    }),
  ],
  resolve: {
    alias: {
      "@vue-bridge/runtime": "@vue-bridge/runtime/vue2",
    },
  },
  build: buildConfig({
    name: libraryGlobalName,
    version: "vue2",
  }),
  test: {
    environment: "jsdom",
  },
});
