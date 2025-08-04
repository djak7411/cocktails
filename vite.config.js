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
 test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      '@/api/cocktailsApiSlice': '@/api/mocks/mockCocktailsApiSlice',
    },
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      provider: 'istanbul'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
