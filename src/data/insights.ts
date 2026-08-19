/**
 * Insights / blog articles. All content is placeholder until
 * real articles are written. Do not invent fake articles.
 */
export type Insight = {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	readingTime: string;
	tags: string[];
	related: string; // slug of another article or service id
	body: { type: 'p' | 'h2' | 'ul'; text?: string; items?: string[] }[];
};

export const insights: Insight[] = [
	{
		slug: 'systems-over-tools',
		title: 'Systems Over Tools',
		excerpt:
			'Why the tool you pick matters less than the workflow you design around it — and how to stop buying software that does not fit.',
		category: 'Systems Thinking',
		date: '2024-01-15',
		readingTime: '8 min',
		tags: ['Workflow', 'Architecture', 'Decision-making'],
		related: 'automation',
		body: [
			{ type: 'p', text: 'Most businesses buy tools before they understand the system. They pick a CRM, a project manager, an automation platform — and then try to make their work fit the tool. The result is a stack that looks impressive on paper and feels like friction every day.' },
			{ type: 'h2', text: 'The tool is not the system' },
			{ type: 'p', text: 'A system is the set of rules, flows and decisions that turn inputs into outcomes. The tool is just the vessel. You can run the same system in Notion, in Airtable, in a custom app, or on paper. The logic does not change — only the ergonomics do.' },
			{ type: 'p', text: 'When you buy a tool first, you inherit someone else\'s opinion about how work should happen. That opinion rarely matches your reality.' },
			{ type: 'h2', text: 'Design the system, then choose the vessel' },
			{ type: 'ul', items: [
				'Map the current workflow — every step, every exception, every handoff.',
				'Identify the decisions that cannot be automated.',
				'Define the data model: what entities exist, how they relate, what changes over time.',
				'Only then evaluate tools against that model.',
			] },
			{ type: 'p', text: 'This is why we start every engagement with discovery. The tool decision comes at the end of define, not the beginning of the conversation.' },
			{ type: 'h2', text: 'When custom is the right vessel' },
			{ type: 'p', text: 'If no existing tool maps to your system without painful workarounds, the correct decision is not to compromise — it is to build. We help you make that call honestly, with a build-or-buy analysis that lives in writing.' },
		],
	},
	{
		slug: 'automation-roi',
		title: 'Calculating the ROI of Automation',
		excerpt:
			'A practical framework for measuring whether an automation will pay for itself — before you write a single line of code.',
		category: 'Automation',
		date: '2024-02-10',
		readingTime: '6 min',
		tags: ['ROI', 'Workflow', 'Business Case'],
		related: 'automation',
		body: [
			{ type: 'p', text: 'Automation is sold as magic. The reality is arithmetic. Every automation has a cost to build, a cost to run, and a cost to maintain. The benefit is time saved, errors avoided, and capacity freed.' },
			{ type: 'h2', text: 'The baseline you need first' },
			{ type: 'p', text: 'Before you can calculate ROI, you need a measured baseline of the manual process:' },
			{ type: 'ul', items: [
				'How many times per day/week/month does the task run?',
				'How long does it take a human?',
				'What is the fully-loaded cost of that time?',
				'What is the error rate, and what does each error cost to fix?',
			] },
			{ type: 'h2', text: 'The formula' },
			{ type: 'p', text: '(Manual cost per period × periods per year) − (Build cost amortised + Run cost per year + Maintenance cost per year) = Annual net benefit.' },
			{ type: 'p', text: 'If the number is positive and the payback period fits your horizon, the automation makes sense. If not, the answer is not "build it anyway" — it is "redesign the workflow" or "do not automate".' },
			{ type: 'h2', text: 'Hidden costs that kill ROI' },
			{ type: 'ul', items: [
				'Edge cases that require human review (adds time back).',
				'API changes that break the automation (maintenance).',
				'Monitoring and alerting infrastructure.',
				'Onboarding new team members into the automated flow.',
			] },
			{ type: 'p', text: 'We include all of these in the specification. The ROI thesis is on the first slide of the proposal, not hidden at the end.' },
		],
	},
	{
		slug: 'design-in-the-browser',
		title: 'Why We Design in the Browser',
		excerpt:
			'Static mockups lie. Designing in the production stack catches edge cases early, keeps design and build aligned, and ships faster.',
		category: 'Design',
		date: '2024-03-05',
		readingTime: '7 min',
		tags: ['Prototyping', 'Design Systems', 'Process'],
		related: 'web-applications',
		body: [
			{ type: 'p', text: 'A Figma file is a promise. A running prototype in the browser is evidence. We moved our design process into the stack years ago, and we have not looked back.' },
			{ type: 'h2', text: 'What static mockups hide' },
			{ type: 'ul', items: [
				'Responsive behaviour at every breakpoint.',
				'Real data: long names, missing images, empty states, error states.',
				'Interactions: hover, focus, keyboard navigation, loading.',
				'Performance: font loading, layout shift, paint cost.',
				'Accessibility: contrast, semantics, ARIA — tested, not assumed.',
			] },
			{ type: 'h2', text: 'The workflow' },
			{ type: 'p', text: 'We design in Astro/React/Svelte components from day one. The design system tokens (colour, spacing, type scale) are defined in code, shared between design and build. There is no hand-off — the same components that are reviewed in design are the ones that ship.' },
			{ type: 'h2', text: 'Client review changes' },
			{ type: 'p', text: 'Instead of PDF annotated with red lines, clients click a staging URL. They see the real thing. Feedback is precise because the medium is honest. We iterate in the same environment we ship from.' },
			{ type: 'h2', text: 'When we still use Figma' },
			{ type: 'p', text: 'Rapid concept exploration, brand exploration, and presentation decks. The moment we are designing interfaces that will be built, we are in code.' },
		],
	},
	{
		slug: 'requirements-first',
		title: 'Requirement-First Development',
		excerpt:
			'How writing down what the system must do — before what it looks like — prevents scope creep, rework, and the "I thought you meant..." conversation.',
		category: 'Development',
		date: '2024-04-12',
		readingTime: '9 min',
		tags: ['Requirements', 'Specs', 'Process'],
		related: 'custom-solutions',
		body: [
			{ type: 'p', text: 'Every feature traces back to a documented workflow, a measured problem, a person you can name. If a requirement cannot be written, it cannot be built — and we say so early, in writing.' },
			{ type: 'h2', text: 'The cost of implicit requirements' },
			{ type: 'p', text: 'Implicit requirements are the source of almost every project overrun. "I thought the dashboard would filter by date." "I assumed the export would include archived records." "The client said they wanted it simple, so I did not build the admin panel."' },
			{ type: 'h2', text: 'Our requirement format' },
			{ type: 'p', text: 'Every requirement in our specifications follows a structure:' },
			{ type: 'ul', items: [
				'ID — unique, traceable.',
				'Source — who asked, what workflow, what pain.',
				'Statement — what the system must do, in one sentence.',
				'Acceptance criteria — how we know it is done, testable.',
				'Priority — must, should, could, wont.',
			] },
			{ type: 'h2', text: 'The spec is a living document' },
			{ type: 'p', text: 'Requirements change. That is not failure — it is learning. But every change is an explicit edit to the spec, with a reason, an impact assessment, and a client sign-off. Nothing moves by memory.' },
			{ type: 'h2', text: 'What this buys you' },
			{ type: 'ul', items: [
				'No surprise features at demo day.',
				'A shared definition of done.',
				'A spec a new engineer can read and build from.',
				'A project that can be paused and resumed without knowledge loss.',
			] },
		],
	},
	{
		slug: 'data-modelling-for-operations',
		title: 'Data Modelling for Operations, Not Reports',
		excerpt:
			'Most databases are designed for the dashboard. They should be designed for the operation — the write path is where integrity lives.',
		category: 'Business Software',
		date: '2024-05-20',
		readingTime: '10 min',
		tags: ['Data Modelling', 'PostgreSQL', 'Architecture'],
		related: 'business-software',
		body: [
			{ type: 'p', text: 'A dashboard reads. An operation writes. When you model for the dashboard, you optimise for SELECT. When you model for the operation, you optimise for INSERT, UPDATE, DELETE — and the constraints that keep the business rules true.' },
			{ type: 'h2', text: 'The write path is the contract' },
			{ type: 'p', text: 'Every write is a business event: an order placed, a shipment received, an invoice matched. The schema must make illegal states unrepresentable. Foreign keys, check constraints, unique indexes, triggers — these are not "database features", they are the encoded rules of your operation.' },
			{ type: 'h2', text: 'Common mistakes' },
			{ type: 'ul', items: [
				'Storing derived data instead of computing it (leads to drift).',
				'Soft deletes without a clear policy (leads to ghost records).',
				'Polymorphic associations without a discriminant (leads to query chaos).',
				'No audit trail on financial or compliance-relevant tables.',
			] },
			{ type: 'h2', text: 'How we model' },
			{ type: 'p', text: 'We start with the workflow, not the ER diagram. Every state transition in the workflow becomes a constraint or a transition table in the model. The read models (views, materialised views, API shapes) are derived afterwards — they are disposable, the write model is not.' },
		],
	},
];