import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No API keys are injected into the client bundle. All content is static and
// pre-written; nothing is generated at runtime, so the browser needs no secrets.
export default defineConfig({
  server: { port: 3000, host: '0.0.0.0' },
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } }
});
