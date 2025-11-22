// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '🌳 Lórien',
			social: undefined,
			customCss: [
				'./src/styles/forest-theme.css',
			],
			sidebar: [],
		}),
	],
});
