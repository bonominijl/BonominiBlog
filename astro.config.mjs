// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://bonominijl.github.io',
  base: '/BonominiBlog/', // required for GitHub Pages subpath
  
  vite: {
    plugins: [tailwindcss()],
  },
  
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  
  integrations: [sitemap(), mdx()]
});
