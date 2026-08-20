<section class="mx-auto max-w-6xl px-5 py-16 md:py-24" data-reveal data-arch-loop>
	<div class="mb-10 max-w-2xl">
		<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Architecture</p>
		<h2 class="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
			Publish into the host
		</h2>
		<p class="mt-3 max-w-xl text-muted-foreground">
			You develop remotely and publish through the API Layer. Strategy runs on the host and talks to
			Market Domain and Trading Domain — the ops loop, not just a framework for development.
		</p>
	</div>

	<figure
		data-arch-figure
		class="overflow-hidden border border-border/80 bg-card/30"
	>
		<img
			src="/architecture-diagram.png"
			alt="User publishes a strategy through the API Layer into Strategy, which connects to Market Domain and Trading Domain"
			width="1536"
			height="1024"
			class="h-auto w-full"
			loading="lazy"
			decoding="async"
		/>
		<figcaption class="border-t border-border/70 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground md:px-6">
			User → publish → API Layer → Strategy · Market Domain · Trading Domain
		</figcaption>
	</figure>
</section>
