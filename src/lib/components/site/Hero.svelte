<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section class="relative isolate min-h-[100svh] overflow-hidden">
	<!-- Full-bleed observatory plane -->
	<div class="absolute inset-0" data-hero-visual aria-hidden="true">
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,oklch(0.28_0.035_230_/_0.45),transparent_60%)]"></div>
		<div class="absolute inset-0 grid-overlay opacity-80"></div>
		<div class="absolute inset-0 scanlines opacity-30"></div>
		<svg class="absolute inset-x-0 bottom-0 h-[42%] w-full opacity-70" viewBox="0 0 1440 320" preserveAspectRatio="none">
			<polyline
				fill="none"
				stroke="oklch(0.72 0.09 155 / 0.7)"
				stroke-width="1.75"
				points="0,210 90,198 180,220 270,150 360,170 450,120 540,155 630,95 720,140 810,88 900,130 990,70 1080,110 1170,78 1260,100 1350,60 1440,72"
			/>
			<polyline
				fill="none"
				stroke="oklch(0.78 0.08 75 / 0.4)"
				stroke-width="1.25"
				points="0,250 120,240 240,255 360,235 480,245 600,228 720,240 840,222 960,236 1080,218 1200,230 1320,214 1440,224"
			/>
		</svg>
	</div>

	<div class="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:pb-24 md:pt-32">
		<div data-hero-copy class="max-w-2xl">
			<p
				data-hero-brand
				class="mb-6 font-mono text-5xl font-medium tracking-[0.2em] text-foreground sm:text-6xl md:text-7xl"
			>
				MFTIK
			</p>
			<p class="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-steel">
				Mid-frequency algo trading
			</p>
			<h1 class="mb-5 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
				Not only develop — TradeOps included.
			</h1>
			<p class="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
				Develop a strategy remotely, publish it to the host, and the instance runs it. Behind the API
				Layer: Strategy, Market Domain, and Trading Domain — deploy, run, observe, operate.
			</p>
			<div class="flex flex-wrap gap-3">
				<Button href="#pricing" size="lg" class="min-w-32 font-mono tracking-wide">See plans</Button>
				<Button href="#contact" variant="outline" size="lg" class="min-w-32 font-mono tracking-wide">
					Request demo
				</Button>
			</div>
		</div>
	</div>
</section>
