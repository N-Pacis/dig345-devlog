// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Astro config docs https://astro.build/config
export default defineConfig({
	// required to publish on GH Pages
	site: 'https://n-pacis.github.io',
	base: '/dig345-devlog',
	integrations: [
		// Startlight-specific config
		starlight({
			title: 'Pacis\'s DevLog',
			sidebar: [
				{ label: 'Schedule', autogenerate: { directory: 'schedule' }, },
			],
		}),
	],
});
