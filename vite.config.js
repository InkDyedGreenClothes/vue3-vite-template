import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

const resolve = function (dir) {
  return path.resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"]
    })
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
      pages: resolve("src/pages"),
      comps: resolve("src/components"),
      plugins: resolve("src/plugins"),
      styles: resolve("src/styles"),
      utils: resolve("src/utils"),
      apis: resolve("src/apis"),
      dirs: resolve("src/directives"),
      assets: resolve("src/assets")
    }
  },
  server: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    https: false,
    proxy: {
      "/api": {
        target: "http://ndrc.dev.alarmtech.com.cn/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  build: {
    outDir: "blog"
  }
});
