import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000
  // },
  // preview: {
  //   port: 3000
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
      // components: `${__dirname}/src/components/`,
      // styles: `${__dirname}/src/styles/`,
      // types: `${__dirname}/src/types/`,
      // utils: `${__dirname}/src/utils/`
    }
  },
  define: {
    'process.env': process.env,
    global: 'window'
  }
})
