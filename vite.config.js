import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    // GitHub Pages serves from /M-indicator-2.0/ subdirectory
    base: '/M-indicator-2.0/',
    // Build configuration
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        // Warn if chunk > 700kb
        chunkSizeWarningLimit: 700,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                upcoming: resolve(__dirname, 'upcoming.html'),
                news: resolve(__dirname, 'news.html'),
                resumedb: resolve(__dirname, 'resumedb.html'),
                ad: resolve(__dirname, 'ad.html'),
                contact: resolve(__dirname, 'contact.html'),
                terms: resolve(__dirname, 'terms.html'),
                notfound: resolve(__dirname, '404.html'),
            },
            output: {
                // Clean hashed asset names for cache-busting
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            }
        },
        // Minify for production
        minify: 'esbuild',
        // Generate source maps for debugging (optional, remove for leaner build)
        sourcemap: false,
        // CSS code splitting
        cssCodeSplit: true,
    },

    // Asset handling
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp', '**/*.mp4'],

    // Dev server config
    server: {
        port: 5173,
        open: false,
    },

    // Preview server (simulates production)
    preview: {
        port: 4173,
    },
})
