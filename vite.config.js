import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for production hosting
export default defineConfig({
plugins: [react()],
base: '/',   // ensures assets load correctly when hosted on domain root
})
