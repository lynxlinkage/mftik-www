<script lang="ts">
	const nodes = ['Paper', 'Deploy', 'Control', 'Paper'];
</script>

<section class="mx-auto max-w-6xl px-5 py-16 md:py-24" data-reveal data-arch-loop>
	<div class="mb-10 max-w-2xl">
		<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Architecture</p>
		<h2 class="text-2xl font-medium tracking-tight text-foreground md:text-3xl">Stable loop</h2>
		<p class="mt-3 max-w-xl text-muted-foreground">
			Paper trading, strategy deploy, and the control UI stay on the same instance — a closed loop you
			own end to end.
		</p>
	</div>

	<div class="relative border border-border/80 bg-card/30 p-6 md:p-10">
		<svg class="pointer-events-none absolute inset-6 md:inset-10" viewBox="0 0 640 160" fill="none" aria-hidden="true">
			<path
				data-arch-pulse
				d="M80 80 H560"
				stroke="oklch(0.78 0.08 75 / 0.55)"
				stroke-width="1.5"
				stroke-dasharray="560"
				stroke-dashoffset="560"
			/>
		</svg>
		<div class="relative grid gap-4 sm:grid-cols-3">
			{#each nodes.slice(0, 3) as node, i}
				<div
					data-arch-node
					class="border border-border bg-background/70 px-4 py-5 text-center transition-shadow"
				>
					<p class="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
						{String(i + 1).padStart(2, '0')}
					</p>
					<p class="mt-2 text-lg font-medium text-foreground">{node}</p>
				</div>
			{/each}
		</div>
		<p class="mt-6 text-center font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
			return → paper · no multi-tenant share
		</p>
	</div>
</section>
