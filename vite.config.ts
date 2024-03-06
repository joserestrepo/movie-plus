import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@firebase-utils': path.resolve(__dirname, 'src/firebase'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@adapters': path.resolve(__dirname, 'src/adapters'),
      '@service': path.resolve(__dirname, 'src/service'),
    },
  },
})
