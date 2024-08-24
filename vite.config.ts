import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'

export default defineConfig({
    plugins: [react()],
    base: '/sign-in-example',
    css: {
        postcss:{
            plugins: [
                autoprefixer,
                postcssNested,
            ]
        }
    }
})
