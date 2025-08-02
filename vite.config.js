import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import sass from 'sass';

export default defineConfig({
  plugins: [
    react({
    jsxRuntime: 'automatic',
  }),
  tsconfigPaths()
],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
