/**
 * Portfolio projects showcasing PromiseMe solutions across Websites, Web Apps, Automation, and Custom Software.
 */

export type Project = {
	slug: string;
	client: string;
	clientUrl?: string;
	type: string;
	sector: string;
	year: string;
	tags: string[];
	summary: string;
	challenge: string;
	solution: string;
	technologies: string[];
	results: string[];
	diagram: 'browser' | 'modules' | 'sync' | 'flow' | 'blocks' | 'lines';
	image?: string;
	featured?: boolean;
};

export const projects: Project[] = [
	{
		slug: 'featured-website',
		featured: true,
		client: 'Axiom Digital Studio',
		clientUrl: 'https://promiseme.dev',
		type: 'Website Development',
		sector: 'Digital Agency & Enterprise',
		year: '2025',
		image: '/images/work-website.jpg',
		tags: [
			'Strategy',
			'Design Systems',
			'Astro / SSR',
			'Responsive UX',
			'SEO Optimization',
		],
		summary:
			'High-conversion editorial digital presence with sub-second page loads, accessible UI systems, and structured content modeling.',
		challenge:
			'The previous corporate website was slow, difficult to update, and failed to communicate technical depth to prospective clients.',
		solution:
			'Designed and engineered a modern, ultra-fast digital experience using a zero-JS by default architecture, custom vector system diagrams, and structured Schema.org metadata.',
		technologies: [
			'Astro',
			'TypeScript',
			'Vanilla CSS',
			'Vite',
			'Cloudflare Pages',
		],
		results: [
			'100/100 Google Lighthouse score across Performance, SEO, and Accessibility.',
			'< 350ms first contentful paint globally on edge CDN.',
			'+68% increase in qualified project inquiries within 60 days.',
		],
		diagram: 'browser',
	},
	{
		slug: 'project-web-application',
		client: 'AetherFlow Platform',
		clientUrl: 'https://promiseme.dev/preview',
		type: 'Web Application',
		sector: 'SaaS & Analytics',
		year: '2025',
		image: '/images/work-web-app.jpg',
		tags: ['Web App', 'Real-Time Telemetry', 'PostgreSQL', 'Role-Based Access'],
		summary:
			'Full-stack operational intelligence platform providing real-time telemetry, custom metric dashboards, and automated client alerts.',
		challenge:
			'Internal teams were manually collating CSVs across 6 separate tools to generate weekly business intelligence reports.',
		solution:
			'Architected a unified web application with streaming data pipelines, reactive data visualizations, and automated PDF export schedules.',
		technologies: [
			'React',
			'Node.js',
			'PostgreSQL',
			'WebSockets',
			'Tailwind CSS',
		],
		results: [
			'Saved 14+ hours per week of manual data aggregation.',
			'Real-time sub-second data streaming across 10,000+ daily events.',
		],
		diagram: 'blocks',
	},
	{
		slug: 'project-automation',
		client: 'Synapse Flow Engine',
		clientUrl: 'https://promiseme.dev/preview',
		type: 'Automation & Integration',
		sector: 'E-Commerce & Logistics',
		year: '2025',
		image: '/images/work-automation.jpg',
		tags: ['Automation', 'Webhook Engine', 'API Integration', 'Error Handling'],
		summary:
			'High-reliability event-driven integration pipeline synchronizing CRM, inventory, invoices, and messaging channels.',
		challenge:
			'Order fulfillment and CRM data entry required 4 repetitive manual copy-paste steps per customer, resulting in delays and order mismatches.',
		solution:
			'Engineered automated cloud functions and webhook brokers with retry queues, duplicate detection, and instant Slack/WhatsApp alerts on anomalies.',
		technologies: [
			'Python',
			'FastAPI',
			'Redis Queues',
			'Stripe / Shopify APIs',
			'Docker',
		],
		results: [
			'100% automated order-to-invoice processing without manual intervention.',
			'Zero dropped payloads with automated fallback queue retry logic.',
		],
		diagram: 'flow',
	},
	{
		slug: 'project-business-software',
		client: 'Opulence Ops ERP',
		clientUrl: 'https://promiseme.dev/preview',
		type: 'Custom Business Software',
		sector: 'Operations & Manufacturing',
		year: '2025',
		image: '/images/work-erp.jpg',
		tags: ['ERP', 'Inventory Tracking', 'Invoicing', 'CRM'],
		summary:
			'End-to-end business operations management system unifying multi-warehouse inventory, customer invoicing, and purchase approvals.',
		challenge:
			'The business outgrew spreadsheets, leading to stock discrepancies, delayed billing, and zero central audit history.',
		solution:
			'Built a custom business operating system with role-based access control, barcode inventory tracking, automated GST/invoice generation, and live ledger reconciliation.',
		technologies: [
			'TypeScript',
			'Next.js',
			'PostgreSQL',
			'Prisma ORM',
			'Tailwind CSS',
		],
		results: [
			'Replaced 8 disparate Excel sheets with a single source of truth.',
			'Reduced invoice turnaround from 3 days to instant one-click generation.',
		],
		diagram: 'modules',
	},
];

export function featuredProject(projectsList: Project[]): Project {
	const featured = projectsList.find((p) => p.featured);
	return featured ?? projectsList[0];
}

export function nonFeatured(projectsList: Project[]): Project[] {
	return projectsList.filter((p) => !p.featured);
}