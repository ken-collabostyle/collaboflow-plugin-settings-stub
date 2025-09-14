
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@js': path.resolve(__dirname, 'src/js'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // エントリーポイントのJavaScriptファイル名を変更
        entryFileNames: `js/settings.js`,
        // エントリーポイント以外のチャンクファイル名を変更
        chunkFileNames: `js/[name].js`,
        // CSSや画像などのアセットファイル名を変更
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
