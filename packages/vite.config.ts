import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import DefineOptions from 'unplugin-vue-define-options/rollup';

const projRoot = resolve(__dirname, '..');
const packPath = resolve(projRoot, 'packages');
const compPath = resolve(packPath, 'components');
const assetsPath = resolve(packPath, 'assets');

export default defineConfig({
  plugins: [vue(), svgLoader(), DefineOptions()],
  resolve: {
    alias: {
      '@assets': assetsPath,
    },
  },
  build: {
    cssCodeSplit: false,
    outDir: resolve(projRoot, 'dist'),
    lib: {
      entry: resolve(compPath, 'index.ts'),
      name: 'sa-ui',
      fileName: 'sa-ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
  },
});
