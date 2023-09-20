import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: '/Rick-Morty/',
  plugins: [solid()]
})
