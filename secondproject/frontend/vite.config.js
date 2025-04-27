import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/jokes': {
        target: 'https://jokes-backend-mqtr.onrender.com/',
      },
    },
  },
  plugins: [react()],
})
