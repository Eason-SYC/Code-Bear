import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Code-Bear/', // Set base path to '/Code-Bear/' for GitHub Pages deployment
  assetsInclude: ['**/*.svg'],
  build: {
    rollupOptions: {
      output: {
      },
    },
  },
});
