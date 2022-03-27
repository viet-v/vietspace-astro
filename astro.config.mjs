import { defineConfig } from 'astro/config';
  import react from '@astrojs/react';
// https://astro.build/config


export default /** @type {import('astro').AstroUserConfig} */ ({
  // all options are optional; these values are the defaults
  projectRoot: './',
  public: './public/',
  dist: './dist/',
  src: './src/',
  pages: './src/pages/',
  renderers: [
    '@astrojs/renderer-react'
  ],
  vite: {},
  devOptions: {
    port: 3000,
  }
});