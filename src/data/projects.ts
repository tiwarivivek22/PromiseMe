/**
 * Portfolio projects. EVERY client-facing detail is a placeholder until
 * real projects are added. Client identifiers, URLs and metrics must be
 * real — nothing here may be invented.
 */

export type Project = {
	slug: string;
	client: string; // [REAL CONTENT NEEDED — client name]
	clientUrl?: string; // real external URL or leave empty
	type: string; // Website Development / Web Application / Automation / etc.
	sector: string;
	year: string;
	tags: string[];
	summary: string;
	challenge: string;
	solution: string;
	technologies: string[];
	results: string[]; // real metrics ONLY — otherwise placeholder
	diagram: 'browser' | 'modules' | 'sync' | 'flow' | 'blocks' | 'lines';
	featured?: boolean;
};

export const projects: Project[] = [
	{
		slug: 'featured-website',
		featured: true,
		client: '[REAL CONTENT NEEDED — client company name]',
		clientUrl: '[REAL CONTENT NEEDED — client website URL]',
		type: 'Website Development',
		sector: '[REAL CONTENT NEEDED — industry]',
		year: '[REAL CONTENT NEEDED — year]',
		tags: [
			'Strategy',
			'Design',
			'Development',
			'Responsive Experience',
			'Deployment',
		],
		summary:
			'Professional digital presence designed and developed for a real company.',
		challenge:
			'[REAL CONTENT NEEDED — describe the business problem the old site/workflow created: slow, unmanageable, failing to represent the company, etc.]',
		solution:
			'[REAL CONTENT NEEDED — describe the structure, design and technology decisions: editorial system, headless CMS, performance budget, content model.]',
		technologies: [
			'[REAL CONTENT NEEDED — actual stack, e.g. Astro, Tailwind, Sanity, Vercel]',
		],
		results: ['[REAL CONTENT NEEDED — real metrics only, never invented]'],
		diagram: 'browser',
	},
	{
		slug: 'project-web-application',
		client: '[REAL CONTENT NEEDED — client name]',
		clientUrl: '',
		type: 'Web Application',
		sector: '[REAL CONTENT NEEDED — sector]',
		year: '[REAL CONTENT NEEDED — year]',
		tags: ['Web App', 'Workflow', 'Data'],
		summary:
			'[REAL CONTENT NEEDED — short description of the application and the workflow it replaced.]',
		challenge:
			'[REAL CONTENT NEEDED — the manual process, the spreadsheets, the bottleneck.]',
		solution:
			'[REAL CONTENT NEEDED — architecture, key screens, roles, integrations.]',
		technologies: [
			'[REAL CONTENT NEEDED — actual stack: React, Node.js, PostgreSQL, …]',
		],
		results: ['[REAL CONTENT NEEDED — real metrics only, never invented]'],
		diagram: 'blocks',
	},
	{
		slug: 'project-automation',
		client: '[REAL CONTENT NEEDED — client name]',
		clientUrl: '',
		type: 'Automation',
		sector: '[REAL CONTENT NEEDED — sector]',
		year: '[REAL CONTENT NEEDED — year]',
		tags: ['Automation', 'Workflow', 'Integrations'],
		summary:
			'[REAL CONTENT NEEDED — short description of the automated workflow.]',
		challenge:
			'[REAL CONTENT NEEDED — the repetitive task, the human error, the hours lost.]',
		solution:
			'[REAL CONTENT NEEDED — how the automation was designed, with checkpoints and logs.]',
		technologies: [
			'[REAL CONTENT NEEDED — actual automation stack]',
		],
		results: ['[REAL CONTENT NEEDED — real metrics only, never invented]'],
		diagram: 'flow',
	},
	{
		slug: 'project-integrations',
		client: '[REAL CONTENT NEEDED — client name]',
		clientUrl: '',
		type: 'Integrations',
		sector: '[REAL CONTENT NEEDED — sector]',
		year: '[REAL CONTENT NEEDED — year]',
		tags: ['API', 'Synchronisation', 'Data'],
		summary:
			'[REAL CONTENT NEEDED — short description of the tools connected.]',
		challenge:
			'[REAL CONTENT NEEDED — three versions of the truth, daily copy-paste.]',
		solution:
			'[REAL CONTENT NEEDED — the sync topology, conflict rules, monitoring.]',
		technologies: [
			'[REAL CONTENT NEEDED — actual stack]',
		],
		results: ['[REAL CONTENT NEEDED — real metrics only, never invented]'],
		diagram: 'sync',
	},
	{
		slug: 'project-business-software',
		client: '[REAL CONTENT NEEDED — client name]',
		clientUrl: '',
		type: 'Business Software',
		sector: '[REAL CONTENT NEEDED — sector]',
		year: '[REAL CONTENT NEEDED — year]',
		tags: ['Software', 'Operations', 'Scalable'],
		summary:
			'[REAL CONTENT NEEDED — short description of the operational system.]',
		challenge:
			'[REAL CONTENT NEEDED — the core operation with no tool, run on guesswork.]',
		solution:
			'[REAL CONTENT NEEDED — the system, its modules, and how it replaced the manual baseline.]',
		technologies: [
			'[REAL CONTENT NEEDED — actual tech stack]',
		],
		results: ['[REAL CONTENT NEEDED — real metrics only, never invented]'],
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