import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  plugins: [svgLoader(), DefineOptions()],
});
