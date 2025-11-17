import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // This makes the API_KEY available on the client-side
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
