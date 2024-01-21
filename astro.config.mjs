import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import alpine from '@astrojs/alpinejs';
// import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    server: { port: 8080 },
    output: 'server',
    adapter: netlify(),
    prefetch: {
        defaultStrategy: 'viewport'
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        // alpine(),
        // svelte()
    ],
});
