// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://omundy.github.io',
	base: '/dig345-devlog',
	integrations: [
		starlight({
			title: 'DevLog',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/omundy/dig345-devlog' }],
			editLink: { baseUrl: 'https://omundy.github.io/dig345-devlog' },
			sidebar: [
				{ label: 'Schedule', autogenerate: { directory: 'schedule' }, },
			],
			customCss: [
				'./src/styles/custom.css', // relative path to custom CSS file
			],
		}),
	],
});
