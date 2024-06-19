import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// https://vitejs.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegúrate de ajustar esto según el directorio de despliegue
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
