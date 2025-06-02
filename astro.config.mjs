// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const canonicalHost = 'plxtra.org';
export const canonicalSite = `https://${canonicalHost}`;

export const githubHost = 'plxtra.github.io';

// https://astro.build/config
export default defineConfig({
    site: canonicalSite,
	base: '/front-end-api/',

	trailingSlash: 'always',

	integrations: [
        sitemap({
            // Change sitemap URLs to use custom host supplied to GitHub.
            serialize(item) {
                const url = new URL(item.url);
                if (url.host === githubHost) {
                    url.host = canonicalHost;
                }
                item.url = url.href;
                return item;
            },
        }),
		starlight({
			title: 'Plxtra Front-end API',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/plxtra/' },
				{ icon: 'zulip', label: 'Chat groups', href: 'https://plxtra.zulipchat.com/' },
				{ icon: 'up-caret', label: 'Plxtra Home', href: 'https://plxtra.org/' },
			],
			sidebar: [
				{
					label: 'Plxtra',
					link: 'https://plxtra.org/external-api/zenith/websocket/',
				},
				{
					label: 'Introduction',
					slug: '',
				},
				{
					label: 'Getting Started',
					slug: 'getting-started',
				},
				{
					label: 'Fundamentals',
					autogenerate: { directory: 'fundamentals' },
				},
				{
					label: 'API Controllers',
					items: [
						{
							label: 'Introduction',
							slug: 'controllers',
						},
						{
							label: 'Common',
							autogenerate: { directory: 'controllers/common' },
							collapsed: true,
						},
						{
							label: 'Auth',
							autogenerate: { directory: 'controllers/auth' },
							collapsed: true,
						},
						{
							label: 'Channel',
							autogenerate: { directory: 'controllers/channel' },
							collapsed: true,
						},
						{
							label: 'Fragments',
							autogenerate: { directory: 'controllers/fragments' },
							collapsed: true,
						},
						{
							label: 'Market',
							autogenerate: { directory: 'controllers/market' },
							collapsed: true,
						},
						{
							label: 'News',
							autogenerate: { directory: 'controllers/news' },
							collapsed: true,
						},
						{
							label: 'Notify',
							autogenerate: { directory: 'controllers/notify' },
							collapsed: true,
						},
						{
							label: 'Trading',
							autogenerate: { directory: 'controllers/trading' },
							collapsed: true,
						},
						{
							label: 'Watchlist',
							autogenerate: { directory: 'controllers/watchlist' },
							collapsed: true,
						},
						{
							label: 'Zenith',
							autogenerate: { directory: 'controllers/zenith' },
							collapsed: true,
						},
					]
				},
				{
					label: 'Markets',
					autogenerate: { directory: 'markets' },
					collapsed: true,
				},
				{
					label: 'Appendices',
					autogenerate: { directory: 'appendices' },
					collapsed: true,
				},
				{
					label: 'Change History',
					slug: 'change-history',
				},
			],
		}),
        mdx(),
	],
});
