import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic',
  })],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
