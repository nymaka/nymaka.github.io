import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures assets (js/css/images) are looked for properly 
  // regardless of whether the site is at / or /repo-name/
  base: './', 
})