import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        cors: true,
        open: true,
        proxy: {
            '/api': {
                target: 'http://dev.geneplayer.io/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        outDir: '../builds/gamefi'
    }
});

