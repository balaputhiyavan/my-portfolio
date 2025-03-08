// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: 'https://simple-portfolio.vicbox.dev/',
    integrations: [
        mdx(),
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        icon(), // ✅ Just use icon() without extra config
        sitemap()
    ],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
    experimental: {
        svg: true,
    }
});
