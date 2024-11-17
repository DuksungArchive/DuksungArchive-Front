import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // 경로 자동 설정

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 경로 자동 설정
  resolve: {
    alias: {
      api: path.resolve(__dirname, "./src/api"),
      assets: path.resolve(__dirname, "./src/assets"),
      styles: path.resolve(__dirname, "./src/styles"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      utils: path.resolve(__dirname, "./src/utils"),
      svgs: path.resolve(__dirname, "./src/assets/svgs"),
      images: path.resolve(__dirname, "./src/assets/images"),
    },
  },
});
