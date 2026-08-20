<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<header
	class="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
		<a href="/" class="font-mono text-sm font-medium tracking-[0.18em] text-foreground">
			MFTIK
		</a>
		<nav class="flex flex-wrap items-center gap-1 sm:gap-2">
			<Button href="#pricing" variant="ghost" size="sm" class="font-mono text-xs tracking-wide text-muted-foreground">
				Pricing
			</Button>
			<Button href="#contact" variant="ghost" size="sm" class="font-mono text-xs tracking-wide text-muted-foreground">
				Request demo
			</Button>
			<Button href="#contact" variant="outline" size="sm" class="font-mono text-xs tracking-wide">
				Support
			</Button>
		</nav>
	</div>
</header>
