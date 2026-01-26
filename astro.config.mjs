// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Astro config docs https://astro.build/config
export default defineConfig({
	// required to publish on GH Pages
	site: 'https://omundy.github.io',
	base: '/dig345-devlog',
	integrations: [
		// Startlight-specific config
		starlight({
			title: 'Owen\'s DevLog',
			social: [{
				icon: 'github', label: 'GitHub', href: 'https://github.com/omundy/dig345-devlog'
			}],
			sidebar: [
				{ label: 'Schedule', autogenerate: { directory: 'schedule' }, },
			],
			customCss: [
				'./src/styles/custom.css', // relative path to custom CSS file
			],
		}),
	],
});
