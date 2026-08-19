/**
 * Team, Principles, and Why Clients Choose PromiseMe.
 */

export type TeamMember = {
	name: string;
	role: string;
	expertise: string[];
	bio: string;
	index: string;
	signal: '01' | '02' | '03' | '04';
};

export const team: TeamMember[] = [
	{
		name: 'Vivek Tiwari',
		role: 'Founder · Lead Solutions Architect & Developer',
		expertise: ['Full-Stack Web Applications', 'Automation & Workflows', 'Custom Software Systems', 'API Integrations'],
		bio: 'Passionate about helping startups, businesses, and individuals turn complex operational ideas into high-performing, reliable digital products.',
		index: '01',
		signal: '01',
	},
];

export const principles = [
	{
		number: '01',
		title: 'Business First',
		body: 'We understand the workflow before deciding what should be built. Technology that solves a business problem — not technology for the sake of technology.',
	},
	{
		number: '02',
		title: 'Custom-Built',
		body: 'Designed around your specific requirements — not a generic system or rigid predefined template. Every feature serves your business goals.',
	},
	{
		number: '03',
		title: 'Transparent',
		body: 'Requirements, scope, progress, and changes communicated clearly throughout. No technical jargon, no surprises.',
	},
	{
		number: '04',
		title: 'Scalable',
		body: 'Built with future improvements and growing requirements in mind so your software expands effortlessly as your business scales.',
	},
	{
		number: '05',
		title: 'User Focused',
		body: 'Simple, practical, and intuitive for its actual users. We reduce friction and eliminate manual headaches.',
	},
];

export const whyChooseUs = [
	{
		icon: 'target',
		title: 'Requirement-Focused',
		body: "We don't start development before understanding what the client actually needs. Your requirement becomes our development roadmap.",
	},
	{
		icon: 'handshake',
		title: 'Direct Communication',
		body: 'Clients communicate directly with the development team — no middlemen, account managers, or broken telephone lines.',
	},
	{
		icon: 'refresh',
		title: 'Flexible Development',
		body: 'Requirements can evolve as the project becomes clearer. We adapt quickly and iterate with agility.',
	},
	{
		icon: 'growth',
		title: 'Built for Growth',
		body: 'Solutions can be extended with new features and integrations as the business expands.',
	},
	{
		icon: 'puzzle',
		title: 'Complete Solution',
		body: 'From initial planning, development, and integrations to deployment and post-launch improvements — one team for your digital requirements.',
	},
	{
		icon: 'lightbulb',
		title: 'Practical Thinking',
		body: 'We reduce manual work, simplify processes, and improve efficiency — not just add features for the sake of features.',
	},
];

export const culture = [
	{
		title: 'Direct Builder Access',
		text: 'You work directly with the architect building your solution. Direct communication ensures high-velocity progress without bureaucratic delay.',
	},
	{
		title: 'Practical Delivery',
		text: 'We focus on tangible results: working web software, automated scripts, and tested pipelines delivered in short, reliable sprint cycles.',
	},
	{
		title: 'Transparent Collaboration',
		text: 'You have full visibility into every phase — architecture blueprints, live demo staging links, and documented deliverables.',
	},
	{
		title: 'Client Ownership',
		text: 'You own 100% of your source code, database, and infrastructure credentials from day one. No vendor lock-in.',
	},
] as const;