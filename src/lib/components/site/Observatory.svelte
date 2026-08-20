<script lang="ts">
	const lines = [
		{ t: 'boot', m: 'mftik host — TradeOps online' },
		{ t: 'bind', m: 'remote session · strategy workspace' },
		{ t: 'pub', m: 'publish → API Layer → Strategy' },
		{ t: 'link', m: 'Market Domain · Trading Domain' },
		{ t: 'ops', m: 'deploy · run · observe · operate' }
	];
</script>

<section class="border-y border-border/60 bg-card/25" data-reveal>
	<div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
		<div class="mb-8 max-w-2xl">
			<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Observatory</p>
			<h2 class="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
				From publish to ops.
			</h2>
			<p class="mt-3 max-w-xl text-muted-foreground">
				Typical frameworks stop at develop. Here the terminal stays open through deploy, run, and
				observe — TradeOps on the same mid-frequency stack.
			</p>
		</div>

		<div
			data-terminal
			class="overflow-hidden border border-border bg-background/80 font-mono shadow-[0_0_0_1px_oklch(1_0_0_/_0.02)]"
		>
			<div class="flex items-center justify-between border-b border-border/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
				<span>mftik · session</span>
				<span class="text-signal">live</span>
			</div>
			<div class="space-y-2 px-4 py-5 text-[0.8rem] leading-relaxed text-muted-foreground sm:text-[0.85rem]">
				{#each lines as line}
					<p data-terminal-line>
						<span class="text-primary">[{line.t}]</span>
						<span class="text-foreground/90">{line.m}</span>
					</p>
				{/each}
			</div>
		</div>
	</div>
</section>
