import { defineConfig } from 'vite';
// import postcss from "./postcss.config.js";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3001,
    },
    preview: {
        host: true,
        port: 3001,
    },
    // define: {
    //   "process.env": process.env,
    // },
    css: {},
    plugins: [react()],
    resolve: {
        alias: {
            '@/': '/src/',
        },
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
