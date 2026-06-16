import { defineConfig } from 'vite'

export default defineConfig({
  // vitest utilise vite pour la résolution des imports, ce config permet d'aligner @/*
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})

