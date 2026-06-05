import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/yoon-profile-site/',
  plugins: [react()],
})
