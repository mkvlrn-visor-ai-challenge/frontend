/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // @ts-expect-error, because of esm
  plugins: [react()],
  root: './src',
  resolve: {
    alias: {
      '#': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
