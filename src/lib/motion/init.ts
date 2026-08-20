import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let started = false;

export function initMotion(): () => void {
	if (typeof window === 'undefined' || started) {
		return () => {};
	}

	started = true;
	gsap.registerPlugin(ScrollTrigger);

	const lenis = new Lenis({
		duration: 1.05,
		smoothWheel: true,
		touchMultiplier: 1.4
	});

	lenis.on('scroll', ScrollTrigger.update);

	const ticker = (time: number) => {
		lenis.raf(time * 1000);
	};
	gsap.ticker.add(ticker);
	gsap.ticker.lagSmoothing(0);

	document.documentElement.classList.add('lenis');

	const ctx = gsap.context(() => {
		gsap.from('[data-hero-brand]', {
			y: 28,
			opacity: 0,
			duration: 0.85,
			ease: 'power3.out'
		});
		gsap.from('[data-hero-copy] > *', {
			y: 22,
			opacity: 0,
			duration: 0.7,
			stagger: 0.08,
			delay: 0.12,
			ease: 'power3.out'
		});
		gsap.from('[data-hero-visual]', {
			opacity: 0,
			scale: 1.02,
			duration: 1.1,
			delay: 0.15,
			ease: 'power2.out'
		});

		gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 85%',
					toggleActions: 'play none none reverse'
				},
				y: 36,
				opacity: 0,
				duration: 0.75,
				ease: 'power3.out'
			});
		});

		const terminal = document.querySelector('[data-terminal]');
		if (terminal) {
			gsap.from('[data-terminal-line]', {
				scrollTrigger: {
					trigger: terminal,
					start: 'top 75%',
					toggleActions: 'play none none reverse'
				},
				opacity: 0,
				x: -12,
				stagger: 0.07,
				duration: 0.45,
				ease: 'power2.out'
			});
		}

		const loop = document.querySelector('[data-arch-loop]');
		if (loop) {
			gsap.to('[data-arch-node]', {
				scrollTrigger: {
					trigger: loop,
					start: 'top 70%',
					toggleActions: 'play none none reverse'
				},
				boxShadow: '0 0 0 1px color-mix(in oklab, var(--primary) 55%, transparent)',
				duration: 0.6,
				stagger: 0.12,
				ease: 'power2.out'
			});

			gsap.to('[data-arch-pulse]', {
				scrollTrigger: {
					trigger: loop,
					start: 'top 70%',
					end: 'bottom top',
					scrub: 0.6
				},
				strokeDashoffset: 0,
				ease: 'none'
			});
		}

		gsap.utils.toArray<HTMLElement>('[data-plan]').forEach((el, i) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 88%',
					toggleActions: 'play none none reverse'
				},
				y: 28,
				opacity: 0,
				duration: 0.65,
				delay: i * 0.06,
				ease: 'power3.out'
			});
		});
	});

	return () => {
		ctx.revert();
		gsap.ticker.remove(ticker);
		lenis.destroy();
		document.documentElement.classList.remove('lenis');
		started = false;
	};
}
