import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Code-bear/' : '/', // 根据环境变量动态设置 base 路径
  assetsInclude: ['**/*.svg'],
  build: {
    rollupOptions: {
      output: {
      },
    },
  },
});
