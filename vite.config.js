import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // This 'define' block makes environment variables available in your client-side code.
  // Vite replaces any occurrence of 'process.env.API_KEY' in the code
  // with the actual value of the API_KEY environment variable at build time.
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
