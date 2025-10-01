import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: false
    }),
    paths: {
      base: '/json-md-doc-generator'
    },
    prerender: {
      entries: ['*'],
      handleHttpError: 'warn'
    }
  }
};

export default config;
