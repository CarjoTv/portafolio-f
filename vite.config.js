import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
        input:{
            main: resolve(__dirname,'index.html'),
            about: resolve(__dirname,'pages/about.html'),
        }
    },
    copyPublicDir: true,
    assetsDir: 'assets'
  },
  publicDir: 'public'
})