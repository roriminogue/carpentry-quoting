import { defineConfig } from 'astro/config';

// Change `site` once the real domain is set up.
export default defineConfig({
  site: 'https://example.com',
  // One small page: put the CSS inside the HTML so it renders in a single request.
  build: { inlineStylesheets: 'always' },
});
