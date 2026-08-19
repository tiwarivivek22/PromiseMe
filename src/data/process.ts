/**
 * The five delivery phases for PromiseMe: "From Requirement to Reality"
 * Clear communication at every stage means fewer surprises and better results.
 */

export type ProcessStep = {
	number: string;
	title: string;
	lines: string;
	intro: string;
	body: string;
	detail: string[];
	output: string;
	theme: 'understand' | 'plan' | 'design-build' | 'test-refine' | 'deploy-support';
};

export const process: ProcessStep[] = [
	{
		number: '01',
		title: 'Understand',
		lines: 'Listen & analyze requirement',
		intro: 'We understand the workflow before deciding what should be built.',
		body: "We don't start development before understanding what the client actually needs. We analyze the existing operational bottlenecks, interview stakeholders, and clearly define the business problem that needs solving.",
		detail: [
			'Understand actual workflow & requirements',
			'Identify manual bottlenecks & data pain points',
			'Evaluate business goals and technical feasibility',
			'Formulate a crystal-clear requirement definition',
		],
		output: 'Documented requirement & workflow scope',
		theme: 'understand',
	},
	{
		number: '02',
		title: 'Plan',
		lines: 'Architecture & technical roadmap',
		intro: 'Requirements, scope, progress, and changes communicated clearly.',
		body: 'We design the solution roadmap, database architecture, third-party integration points, and milestone deliverables. Everything is structured so you know exactly what will be built and when.',
		detail: [
			'System architecture & data model design',
			'Third-party API & integration mapping',
			'Milestone scheduling & sprint deliverables',
			'Clear scope and transparent timeline breakdown',
		],
		output: 'Detailed project blueprint & development roadmap',
		theme: 'plan',
	},
	{
		number: '03',
		title: 'Design & Build',
		lines: 'Agile development & UI crafting',
		intro: 'Custom-built around your specific requirements — not a generic system.',
		body: 'We craft responsive, modern user interfaces and build robust backend systems iteratively. Regular demos and sprint reviews allow you to test features as they are created.',
		detail: [
			'Modern, responsive UI/UX implementation',
			'Clean, maintainable, modular codebase',
			'API integrations & workflow automation scripting',
			'Weekly progress updates & tangible feature builds',
		],
		output: 'Functional software in staging environment',
		theme: 'design-build',
	},
	{
		number: '04',
		title: 'Test & Refine',
		lines: 'Quality assurance & edge-case testing',
		intro: 'Simple, practical, and dependable for its actual users.',
		body: 'We stress-test workflows, validate cross-device responsiveness, test API error scenarios, and refine ergonomics based on real user feedback before anything goes live.',
		detail: [
			'End-to-end functionality & workflow testing',
			'Responsive testing across devices & screen sizes',
			'Security, permissions, and edge-case validation',
			'User feedback loops and fine-tuning',
		],
		output: 'Polished, battle-tested production build',
		theme: 'test-refine',
	},
	{
		number: '05',
		title: 'Deploy & Support',
		lines: 'Launch & continuous evolution',
		intro: 'Built with future improvements and growing requirements in mind.',
		body: 'We manage the production launch, DNS configuration, and cloud provisioning. Post-launch, we provide ongoing support, monitoring, and feature expansions as your business grows.',
		detail: [
			'Seamless production deployment & SSL setup',
			'Admin walkthrough, documentation & handover',
			'Live system monitoring & health checks',
			'Ongoing improvements & feature extensions',
		],
		output: 'Live working product + ongoing support',
		theme: 'deploy-support',
	},
];

export const processOrder = ['understand', 'plan', 'design-build', 'test-refine', 'deploy-support'] as const;

export const methodology = [
	{
		title: 'Requirement-Focused',
		text: "We don't start development before understanding what the client actually needs. Your requirement becomes our development roadmap.",
	},
	{
		title: 'Direct Communication',
		text: 'Clients communicate directly with the development team — no middlemen, no account-handler game, no lost context.',
	},
	{
		title: 'Flexible & Built for Growth',
		text: 'Requirements can evolve as the project becomes clearer, and solutions can be extended with new features as the business grows.',
	},
];

export const toolsAndTech = [
	{
		group: 'Web & Frontend',
		items: ['Astro', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / Modern CSS'],
	},
	{
		group: 'Backend & APIs',
		items: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Webhooks'],
	},
	{
		group: 'Databases & Storage',
		items: ['PostgreSQL', 'SQLite', 'MongoDB', 'Redis', 'Prisma / Drizzle ORM'],
	},
	{
		group: 'Automation & Scraping',
		items: ['Python Scripting', 'Puppeteer / Playwright', 'n8n', 'Zapier / Make', 'Cron Schedulers'],
	},
	{
		group: 'Cloud & Deployment',
		items: ['Vercel', 'Cloudflare', 'AWS / DigitalOcean', 'Docker', 'GitHub Actions CI/CD'],
	},
];