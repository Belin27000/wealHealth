import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import ViteCompressionPlugin from 'vite-plugin-compression';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteCompressionPlugin({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Fichiers supérieurs à 10 Ko
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});


