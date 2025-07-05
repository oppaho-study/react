import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
    },
  },
  build: {
    polyfillModulePreload: true,
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    rollupOptions: {
      // input: {},
      output: {
        entryFileNames: 'js/[name]min.js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  server: {
    host: 'localhost',
    port: 9000,
    open: false,
    cors: true,
  },
});
