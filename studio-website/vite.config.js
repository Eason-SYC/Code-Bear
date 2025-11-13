import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Code-Bear/' : '/', // 对应你的仓库名称
    build: {
      rollupOptions: {
        output: {
          charset: 'utf8',
        },
      },
    },
  };
});
