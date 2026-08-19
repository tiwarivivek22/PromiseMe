/**
 * ------------------------------------------------------------------
 * SITE CONFIG — the single place to edit brand-wide information.
 * PromiseMe — Digital Solutions Studio
 * ------------------------------------------------------------------
 */

export const site = {
	name: 'PromiseMe',
	shortName: 'PromiseMe',
	legalName: 'PromiseMe — Digital Solutions',

	// Domain used for canonical links, sitemap + robots.txt.
	domain: 'https://tiwarivivek22.github.io/PromiseMe',

	// Visible on the homepage hero and in the footer.
	tagline: 'We Build What Matters.',
	philosophy: 'THINK IT. BUILD IT. AUTOMATE IT.',
	description:
		'We help businesses, startups, and individuals transform their ideas and operational requirements into reliable digital solutions. From a simple business website to a complete web application or custom automation system, we handle the process from planning to development and deployment.',

	// Founder & Direct Contact
	founder: 'PromiseMe Team',
	email: 'connect.promiseme@gmail.com',
	phone: '+91-7654406307',
	whatsapp: '+91-7654406307',
	address: 'Global / Remote-First',
	hours: 'Mon–Sat, 9:00–19:00 (IST)',
	responseTime: 'We reply within 24 hours.',
	responseTimeBar: '24H',

	// What we can help with
	capabilities: [
		'New digital products',
		'Business process automation',
		'Custom web applications',
		'Website development',
		'Internal management tools',
		'Existing system improvements',
		'API & third-party integrations',
	],

	// Social / professional profiles
	social: {
		github: undefined as string | undefined,
		linkedin: undefined as string | undefined,
		x: undefined as string | undefined,
	},

	gtagId: undefined as string | undefined,
	mapEmbedUrl: undefined as string | undefined,
} as const;

export const launchChecklist = [
	'Brand wordmark + legal entity name',
	'Contact email, phone, WhatsApp, address, timezone',
	'Client project details',
	'Social profiles',
	'OG image asset (public/og.png)',
	'Domain + astro.config.mjs `site` value',
] as const;