/**
 * Global interaction layer — supports the editorial design only.
 * Motion is subtle, scroll-triggered, and disabled for
 * prefers-reduced-motion users.
 */

const $ = <T extends Element = Element>(
	q: string,
	root: ParentNode | Document = document
): T | null => root.querySelector<T>(q);

const $$ = <T extends Element = Element>(
	q: string,
	root: ParentNode | Document = document
): T[] => Array.from(root.querySelectorAll<T>(q));

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ---------- reveal on scroll ---------- */
function initReveal() {
	const els = $$<HTMLElement>('[data-reveal]');
	if (reduced || !('IntersectionObserver' in window)) {
		els.forEach((el) => el.classList.add('is-inview'));
		return;
	}
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add('is-inview');
					io.unobserve(e.target);
				}
			});
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
	);
	els.forEach((el) => io.observe(el));
}

/* ---------- custom cursor ---------- */
function initCursor() {
	const dot = $<HTMLElement>('.cursor-fx');
	if (!dot || reduced || !finePointer) return;

	document.body.classList.add('has-cursor');

	let x = -100, y = -100, rx = -100, ry = -100;

	window.addEventListener('pointermove', (e) => {
		x = e.clientX;
		y = e.clientY;
	});

	const tick = () => {
		rx += (x - rx) * 0.22;
		ry += (y - ry) * 0.22;
		dot.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
		requestAnimationFrame(tick);
	};
	tick();

	const hoverables = 'a, button, [data-cursor], input, select, textarea, label';

	document.addEventListener('pointerover', (e) => {
		const t = e.target as Element | null;
		dot.classList.toggle('is-active', Boolean(t?.closest?.(hoverables)));
	});
	document.addEventListener('pointerout', (e) => {
		const t = e.target as Element | null;
		if (t?.closest?.(hoverables)) dot.classList.remove('is-active');
	});
}

/* ---------- header: dropdowns + mobile menu ---------- */
function initHeader() {
	if (finePointer) {
		$$<HTMLElement>('[data-dropdown]').forEach((item) => {
			const toggle = $<HTMLElement>('[data-drop-toggle]', item);
			const panel = $<HTMLElement>('[data-drop-panel]', item);
			if (!toggle || !panel) return;

			const open = () => {
				$$('[data-dropdown] .dropdown.is-open').forEach((p) => {
					if (p !== panel) p.classList.remove('is-open');
				});
				panel.classList.add('is-open');
			};
			const close = () => panel.classList.remove('is-open');

			let timer: number;
			item.addEventListener('pointerenter', () => {
				window.clearTimeout(timer);
				open();
			});
			item.addEventListener('pointerleave', () => {
				timer = window.setTimeout(close, 160);
			});
			panel.addEventListener('pointerenter', () => window.clearTimeout(timer));
			panel.addEventListener('pointerleave', close);
			toggle.addEventListener('focusin', open);
			item.addEventListener('focusout', (e) => {
				if (!item.contains(e.relatedTarget as Node)) close();
			});
		});
	}

	// mobile menu
	const burger = $<HTMLButtonElement>('.nav-toggle');
	const menu = $<HTMLElement>('#mobile-menu');
	if (burger && menu) {
		const close = () => {
			burger.setAttribute('aria-expanded', 'false');
			menu.classList.remove('is-open');
			menu.setAttribute('aria-hidden', 'true');
			document.body.style.overflow = '';
		};
		burger.addEventListener('click', () => {
			const isOpen = burger.getAttribute('aria-expanded') === 'true';
			if (isOpen) {
				close();
			} else {
				burger.setAttribute('aria-expanded', 'true');
				menu.classList.add('is-open');
				menu.setAttribute('aria-hidden', 'false');
				document.body.style.overflow = 'hidden';
			}
		});
		menu.addEventListener('click', (e) => {
			if ((e.target as Element).closest('a')) close();
		});
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') close();
		});
	}
}
/* ---------- interactive services list ---------- */
function initServicesList() {
	const rows = $$<HTMLElement>('.services-list .services-list__row');
	if (!rows.length) return;

	const setState = (row: HTMLElement, on: boolean) => {
		row.classList.toggle('is-active', on);
		row.setAttribute('aria-expanded', String(on));
		const preview = $<HTMLElement>('[data-svc-preview]', row);
		preview?.setAttribute('aria-hidden', String(!on));
	};

	const open = (row: HTMLElement, exclusive: boolean) => {
		if (exclusive) {
			rows.forEach((r) => {
				if (r !== row) setState(r, false);
			});
		}
		setState(row, !row.classList.contains('is-active'));
	};

	rows.forEach((row, i) => {
		row.setAttribute('tabindex', '0');
		row.setAttribute('role', 'button');
		row.setAttribute('aria-expanded', 'false');

		row.addEventListener('click', (e) => {
			if ((e.target as Element).closest('a[href]')) return;
			open(row, true);
		});
		row.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				open(row, false);
			} else if (e.key === 'ArrowDown') {
				e.preventDefault();
				rows[(i + 1) % rows.length].focus();
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				rows[(i - 1 + rows.length) % rows.length].focus();
			} else if (e.key === 'Escape') {
				setState(row, false);
			}
		});
	});

	// hover support on fine pointers (desktop)
	if (finePointer) {
		rows.forEach((row) => {
			row.addEventListener('mouseenter', () => open(row, true));
			row.addEventListener('mouseleave', () => setState(row, false));
		});
	}
}

/* ---------- process page: scroll-spy nav ---------- */
function initProcessSpy() {
	const nav = $<HTMLElement>('.process-nav');
	if (!nav) return;

	const items = $$<HTMLAnchorElement>('.process-nav a', nav);
	const sections = items
		.map((a) => $(`#${a.getAttribute('href')?.replace('#', '')}`))
		.filter((el): el is HTMLElement => Boolean(el));

	const spy = () => {
		const marker = window.scrollY + window.innerHeight * 0.4;
		let current = '';
		sections.forEach((sec) => {
			if (sec.offsetTop <= marker) current = sec.id;
		});
		items.forEach((a) => {
			a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`);
		});
	};
	window.addEventListener('scroll', spy, { passive: true });
	spy();
}

/* ---------- boot ---------- */
initReveal();
initCursor();
initHeader();
initServicesList();
initProcessSpy();