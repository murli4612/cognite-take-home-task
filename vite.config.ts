// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// Add this configuration
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['crypto'], // Explicitly polyfill crypto
    }),
  ],
  define: {
    global: 'globalThis', // Fix global undefined error
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
})