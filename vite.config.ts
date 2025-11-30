import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/site/',   // 👈 OBRIGATÓRIO para GitHub Pages no repo "site"
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
