/**
 * Service lines and digital solutions for PromiseMe.
 */

export type Service = {
	id: string;
	number: string;
	title: string;
	icon: string;
	verb: string;
	line: string;
	summary: string;
	body: string;
	included: string[];
	stack: string[];
	subsections: { heading: string; text: string }[];
	diagram: 'browser' | 'flow' | 'modules' | 'lines' | 'sync' | 'blocks';
};

export const services: Service[] = [
	{
		id: 'websites',
		number: '01',
		title: 'Websites',
		icon: 'globe',
		verb: 'Build a Website',
		line: 'Professional online presence engineered for speed, clarity and credibility.',
		summary:
			'Business & corporate websites, landing pages, portfolio websites, and SEO-ready responsive web experiences tailored to your brand.',
		body: 'A website is the front door of your business. We build modern, high-performance, and responsive websites that build credibility, generate enquiries, and convert visitors into long-term clients without the bloat of generic templates.',
		included: [
			'Business & corporate websites',
			'Landing pages & campaign microsites',
			'Portfolio websites',
			'Product & service showcase websites',
			'SEO-ready responsive architecture',
			'Fast Core Web Vitals & performance optimization',
			'Content management system (CMS) integration',
			'Analytics, forms & enquiry tracking',
		],
		stack: [
			'Astro',
			'TypeScript',
			'HTML / Modern CSS',
			'React / Svelte',
			'Tailwind CSS',
			'Headless CMS',
			'Vercel / Netlify / Cloudflare',
		],
		subsections: [
			{
				heading: 'Targeted Solutions',
				text: 'Whether you need a sleek landing page for a new product, an authority-building corporate site, or an interactive portfolio, we engineer it from ground up.',
			},
			{
				heading: 'SEO & Performance First',
				text: 'Every website comes with structured data schemas, semantic markup, ultra-fast load times, and mobile-first responsiveness.',
			},
		],
		diagram: 'browser',
	},
	{
		id: 'web-applications',
		number: '02',
		title: 'Web Applications',
		icon: 'laptop',
		verb: 'Build a Web Application',
		line: 'Stateful, powerful browser tools and portals built for actual workflows.',
		summary:
			'Custom business applications, dashboards & admin panels, customer portals, management systems, and scalable SaaS platforms.',
		body: 'When off-the-shelf tools fail to support your unique business operations, custom web applications bridge the gap. We engineer secure, intuitive web apps that streamline day-to-day operations and empower your users.',
		included: [
			'Custom business applications',
			'Dashboards & admin panels',
			'Customer & client portals',
			'Internal management systems',
			'SaaS platforms & MVPs',
			'Authentication, roles & permission matrices',
			'Database architecture & state management',
			'Interactive charts & data visualization',
		],
		stack: [
			'TypeScript',
			'React / Next.js / Svelte',
			'Node.js / Express',
			'PostgreSQL / SQLite / MongoDB',
			'Prisma / Drizzle ORM',
			'REST & GraphQL APIs',
			'Docker',
		],
		subsections: [
			{
				heading: 'Operational Focus',
				text: 'From multi-tenant SaaS to custom operational portals, we structure the logic and data to make complex workflows feel seamless.',
			},
			{
				heading: 'Scalable Architecture',
				text: 'Built with modular codebases and clean interfaces that grow cleanly as your user base and feature requirements expand.',
			},
		],
		diagram: 'blocks',
	},
	{
		id: 'automation',
		number: '03',
		title: 'Automation',
		icon: 'gear',
		verb: 'Automate Your Work',
		line: 'Eliminate repetitive manual tasks and accelerate business operations.',
		summary:
			'Repetitive task automation, data collection & processing, web automation, reporting automation, and custom workflow pipelines.',
		body: 'Manual work drains valuable team hours and introduces costly human errors. We automate repetitive tasks, synchronize disconnected platforms, and create reliable automated workflows that save time and run 24/7.',
		included: [
			'Repetitive task automation',
			'Data collection & web scraping',
			'Reporting & notification automation',
			'Workflow automation across multiple apps',
			'Document & invoice data processing',
			'Lead intake & automated CRM routing',
			'Scheduled cron jobs & event-triggered scripts',
			'Error logging & alert mechanisms',
		],
		stack: [
			'Python',
			'Node.js',
			'n8n / Zapier / Make',
			'Headless Browsers (Puppeteer / Playwright)',
			'REST APIs & Webhooks',
			'Cloud Workers & Serverless',
		],
		subsections: [
			{
				heading: 'Real Time & Cost Savings',
				text: 'We identify manual bottlenecks in your daily work and replace them with automated pipelines that execute in seconds.',
			},
			{
				heading: 'Reliability & Logging',
				text: 'Automations are equipped with structured error boundaries, fallback notifications, and logs so nothing slips through the cracks.',
			},
		],
		diagram: 'flow',
	},
	{
		id: 'custom-solutions',
		number: '04',
		title: 'Custom Solutions',
		icon: 'wrench',
		verb: 'Build Custom Software',
		line: 'Tailored software systems built strictly around your specific requirements.',
		summary:
			'API integrations, internal tools, data extraction systems, and bespoke software solutions crafted when standard packages fall short.',
		body: 'We do not sell predefined packages — we build around your actual requirement. When your business needs a unique integration, custom backend tooling, or a specialized data system, we engineer the exact software you need.',
		included: [
			'API integrations & third-party connectors',
			'Internal team tools & utilities',
			'Data extraction & transformation systems',
			'Custom software per business requirements',
			'Legacy system modernization & improvements',
			'Custom business logic & calculations',
			'Comprehensive technical documentation',
			'Continuous support and feature evolution',
		],
		stack: [
			'TypeScript',
			'Python / Node.js',
			'PostgreSQL / Redis',
			'REST / Webhooks / GraphQL',
			'Cloud Infrastructure (AWS / GCP / Cloudflare)',
			'CI/CD Pipelines',
		],
		subsections: [
			{
				heading: 'Built Around You',
				text: 'Your business workflow dictates the software design. No unnecessary bloat, no forced compromises.',
			},
			{
				heading: 'Direct Engineering',
				text: 'Work directly with the builder to iterate, refine, and deploy solutions that fit like a glove.',
			},
		],
		diagram: 'lines',
	},
	{
		id: 'business-systems',
		number: '05',
		title: 'Business Systems & ERP',
		icon: 'chart',
		verb: 'Centralize Operations',
		line: 'Centralized systems and custom dashboards to manage all operations.',
		summary:
			'Business management systems, ERP platforms, inventory/order pipelines, and centralized multi-process operational software.',
		body: 'Consolidate multiple fragmented business operations into a unified, centralized control center that provides end-to-end transparency and operational efficiency.',
		included: [
			'ERP & centralized management platforms',
			'Business management systems',
			'Product catalogs, orders & payment pipelines',
			'Inventory and customer record management',
			'Role-based staff & department access',
			'Consolidated real-time analytics',
		],
		stack: [
			'Node.js / TypeScript',
			'PostgreSQL',
			'React / Modern UI',
			'Stripe & Payment Gateways',
			'Docker',
		],
		subsections: [
			{
				heading: 'Unified Data',
				text: 'Eliminate duplicate data entry across spreadsheets and disconnected platforms.',
			},
		],
		diagram: 'modules',
	},
	{
		id: 'data-solutions',
		number: '06',
		title: 'Data & Lead Solutions',
		icon: 'trend',
		verb: 'Harness Business Data',
		line: 'Tools for collecting, organizing, processing, and managing business data.',
		summary:
			'Data pipelines, lead enrichment, extraction systems, and data synchronization across your sales and operational tools.',
		body: 'Turn raw data into actionable business assets. We build specialized tools to collect, clean, organize, and route data seamlessly into your core software.',
		included: [
			'Data extraction & web parsing',
			'Lead generation & CRM sync pipelines',
			'Data cleaning & deduplication algorithms',
			'Automated export & reporting engines',
		],
		stack: ['Python', 'Node.js', 'PostgreSQL', 'APIs & Webhooks'],
		subsections: [
			{
				heading: 'Actionable Intelligence',
				text: 'Keep your sales, operations, and leadership armed with reliable, up-to-date business data.',
			},
		],
		diagram: 'sync',
	},
];

/**
 * 8 system solution offerings from user requirement.
 */
export const businessSolutions = [
	{
		title: 'Business Websites',
		desc: 'Professional online presence designed to build credibility and generate enquiries.',
		icon: 'globe',
	},
	{
		title: 'E-Commerce Platforms',
		desc: 'Product catalogs, orders, payments, customer management, and administration.',
		icon: 'cart',
	},
	{
		title: 'Business Management Systems',
		desc: 'Custom dashboards and systems to manage internal operations and workflows.',
		icon: 'chart',
	},
	{
		title: 'ERP / Management Platforms',
		desc: 'Centralized systems for managing multiple business processes from one place.',
		icon: 'building',
	},
	{
		title: 'Customer-Facing Applications',
		desc: 'Portals and platforms where customers can interact with your business digitally.',
		icon: 'users',
	},
	{
		title: 'Automation Systems',
		desc: 'Automated workflows that reduce repetitive manual work and save time.',
		icon: 'gear',
	},
	{
		title: 'Data & Lead Solutions',
		desc: 'Tools for collecting, organizing, processing, and managing business data.',
		icon: 'trend',
	},
	{
		title: 'Custom Software',
		desc: "If your requirement doesn't fit a standard category, we build the solution around it.",
		icon: 'wrench',
	},
];