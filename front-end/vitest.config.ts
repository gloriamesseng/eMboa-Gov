import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
    exclude: ['src/**/*.test.{ts,tsx}'],


    reporters: ['default'],
  },
  resolve: {
    alias: {
      '@': '/src',
      // Vitest/Vite: on force la résolution depuis le dossier courant (front-end)
      '@/ui': '/src/ui',
      '@/context': '/src/context',
    },
  },
})



