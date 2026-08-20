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
			<Button href="https://docs.mftik.com/" variant="ghost" size="sm" class="font-mono text-xs tracking-wide text-muted-foreground">
				Docs
			</Button>
			<Button href="#contact" variant="ghost" size="sm" class="font-mono text-xs tracking-wide text-muted-foreground">
				Request demo
			</Button>
			<Button href="#contact" variant="outline" size="sm" class="font-mono text-xs tracking-wide">
				Support
			</Button>
			<a
				href="https://github.com/lynxlinkage/mftik"
				target="_blank"
				rel="noreferrer"
				aria-label="MFTIK on GitHub"
				class="inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
			>
				<svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M12 2C6.477 2 2 6.584 2 12.217c0 4.51 2.865 8.332 6.839 9.68.5.094.682-.22.682-.488 0-.241-.009-.88-.014-1.726-2.782.616-3.369-1.37-3.369-1.37-.454-1.177-1.11-1.49-1.11-1.49-.908-.635.069-.622.069-.622 1.004.072 1.532 1.053 1.532 1.053.892 1.56 2.341 1.11 2.91.849.091-.66.35-1.11.636-1.366-2.22-.258-4.555-1.136-4.555-5.056 0-1.117.39-2.03 1.03-2.746-.103-.259-.447-1.3.098-2.71 0 0 .84-.274 2.75 1.048A9.37 9.37 0 0 1 12 6.844c.85.004 1.705.117 2.504.343 1.909-1.322 2.747-1.048 2.747-1.048.547 1.41.203 2.451.1 2.71.64.716 1.028 1.629 1.028 2.746 0 3.93-2.339 4.795-4.566 5.048.359.316.679.94.679 1.896 0 1.368-.012 2.471-.012 2.807 0 .271.18.588.688.487C19.138 20.545 22 16.727 22 12.217 22 6.584 17.523 2 12 2Z"
					/>
				</svg>
			</a>
		</nav>
	</div>
</header>
