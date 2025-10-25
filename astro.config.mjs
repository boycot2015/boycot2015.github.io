import path from "path";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import Compress from "@playform/compress";
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Markdown 配置================
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkDirective from "remark-directive";
import { remarkNote, addClassNames } from './src/plugins/markdown.custom'
import { visualizer } from "rollup-plugin-visualizer";
// Markdown 配置================
import SITE_INFO from './src/config';
import swup from '@swup/astro';
// https://astro.build/config
export default defineConfig({
    site: SITE_INFO.Site,
    // base: './',
    build: {
        // assets: 'static',
        // outDir: 'dist',
    },
    integrations: [swup({
        theme: false,
        animationClass: "byt-animation-",
        containers: [".main-inner>.main-inner-content",'.byt-header>.main'],
        smoothScrolling: true,
        progress: true,
        cache: true,
        preload: true,
        accessibility: true,
        updateHead: true,
        updateBodyClass: false,
        globalInstance: true
    }),
    Compress({ CSS: false, Image: false, Action: { Passed: async () => true } }),
    sitemap({
        changefreq: 'weekly', priority: 0.7, lastmod: new Date(),
        // 处理末尾带 / 的 url
        serialize: (item) => ({ ...item, url: item.url.endsWith('/') ? item.url.slice(0, -1) : item.url })
    }), mdx({ extendMarkdownConfig: true })],
    markdown: {
        remarkPlugins: [remarkMath, remarkDirective, remarkNote,],
        rehypePlugins: [rehypeKatex, rehypeSlug, addClassNames],
        // syntaxHighlight: 'shiki',
        shikiConfig: {
             // github min vitesse solarized everforest
            themes: {
              light: 'everforest-light',
              dark: 'everforest-dark',
            },
          },
    },
    vite: {
        resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
        build: {
            rollupOptions: {
                output: {
                    // path names relative to `outDir`
                    entryFileNames: 'js/byt-[name]-[hash].js',
                    // chunkFileNames: 'js/chunks/[name]-[hash].js',
                    assetFileNames: 'static/byt-[name]-[hash:8][extname]',
                    manualChunks(id) {
                        if (id.includes("src/scripts")) {
                            return "scripts";
                        }
                        if (id.includes("node_modules")) {
                            // 将第三方依赖单独打包到 [name]-[hash].js 文件中
                            let pkgs =['echarts', 'aplayer', 'epubjs', 'localforage', 'sortablejs', 'xml2js', 'lodash', 'dayjs', 'astro', 'waline', 'leancloud-storage', 'vanilla-lazyload', 'jszip']
                            let index = pkgs.findIndex(name => id.includes(name));
                            if (index !== -1) {
                                return pkgs[index];
                            }
                            return "vendor";
                        }
                    }
                }
            },
        },

        plugins: [
            tailwindcss(),
            visualizer({  
                open: false, // 注意这里要设置为true，否则无效  
                gzipSize: true, // 分析图生成的文件名  
                brotliSize: true, // 收集 brotli 大小并将其显示  
                filename: "visualizer.html", // 分析图生成的文件名  
            }),
        ],
        define: {
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__Default: false
        },
    },
    server: { host: '0.0.0.0' }
});