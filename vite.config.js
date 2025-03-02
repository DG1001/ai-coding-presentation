import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true
  },
  optimizeDeps: {
    include: ['reveal.js']
  }
});
