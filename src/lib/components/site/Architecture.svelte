<section class="mx-auto max-w-6xl px-5 py-16 md:py-24" data-arch-loop>
	<div
		data-arch-board
		class="arch-board relative overflow-hidden border border-border/70 bg-card/20"
	>
		<div class="pointer-events-none absolute inset-0 grid-overlay opacity-50" aria-hidden="true"></div>
		<div class="pointer-events-none absolute inset-0 arch-board-glow" aria-hidden="true"></div>

		<div class="relative grid gap-10 p-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-8 md:p-10 lg:p-12">
			<div class="flex flex-col justify-center" data-arch-copy>
				<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Architecture</p>
				<h2 class="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
					Publish into the host
				</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
					Develop remotely, publish through the API Layer, and run Strategy against Market Domain and
					Trading Domain — TradeOps on one stack.
				</p>
			</div>

			<div
				class="arch-diagram relative"
				role="img"
				aria-label="User publishes through API Layer into Strategy, which connects to Market Domain and Trading Domain"
			>
				<svg
					class="pointer-events-none absolute inset-0 h-full w-full"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					fill="none"
					aria-hidden="true"
				>
					<!-- User → API → Strategy (publish) -->
					<path
						data-arch-publish
						class="arch-path-publish"
						d="M14 50 H36 H52"
						vector-effect="non-scaling-stroke"
						stroke="oklch(0.78 0.08 75 / 0.5)"
						stroke-width="1.5"
					/>
					<!-- Strategy → Market -->
					<path
						data-arch-link
						class="arch-path-link"
						d="M62 50 C72 50 78 22 88 22"
						vector-effect="non-scaling-stroke"
						stroke="oklch(0.65 0.05 230 / 0.5)"
						stroke-width="1.35"
					/>
					<!-- Strategy → Trading -->
					<path
						data-arch-link
						class="arch-path-link"
						d="M62 50 C72 50 78 78 88 78"
						vector-effect="non-scaling-stroke"
						stroke="oklch(0.65 0.05 230 / 0.5)"
						stroke-width="1.35"
					/>
					<path
						data-arch-trace
						class="arch-path-trace"
						d="M14 50 H52"
						vector-effect="non-scaling-stroke"
						stroke="oklch(0.82 0.09 75)"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>

				<div class="relative grid grid-cols-[0.9fr_1fr_1fr_1.1fr] grid-rows-[1fr_auto_1fr] gap-x-2 gap-y-4 py-2 sm:gap-x-3">
					<!-- row spacer -->
					<div class="col-span-4 row-start-1 min-h-10 sm:min-h-14"></div>

					<div class="col-start-1 row-start-2 flex items-center justify-center" data-arch-node-wrap>
						<div data-arch-node class="arch-node w-full max-w-[7.5rem]">
							<span class="arch-node-label">User</span>
							<span class="arch-node-hint">remote</span>
						</div>
					</div>

					<div class="col-start-2 row-start-2 flex flex-col items-center justify-center gap-2">
						<p
							class="arch-publish-label font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary"
						>
							publish
						</p>
						<div data-arch-node class="arch-node arch-node-gateway w-full max-w-[8.25rem]">
							<span class="arch-node-label">API Layer</span>
							<span class="arch-node-hint">gateway</span>
						</div>
					</div>

					<div class="col-start-3 row-start-2 flex items-center justify-center">
						<div data-arch-node class="arch-node arch-node-core w-full max-w-[8.25rem]">
							<span class="arch-node-label">Strategy</span>
							<span class="arch-node-hint">runtime</span>
						</div>
					</div>

					<div class="col-start-4 row-start-1 flex items-end justify-center pb-1">
						<div data-arch-node class="arch-node w-full max-w-[9rem]">
							<span class="arch-node-label">Market Domain</span>
							<span class="arch-node-hint">market data</span>
						</div>
					</div>

					<div class="col-start-4 row-start-3 flex items-start justify-center pt-1">
						<div data-arch-node class="arch-node w-full max-w-[9rem]">
							<span class="arch-node-label">Trading Domain</span>
							<span class="arch-node-hint">execution</span>
						</div>
					</div>

					<div class="col-span-4 row-start-3 min-h-10 sm:min-h-14"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.arch-board-glow {
		background:
			radial-gradient(ellipse 45% 50% at 72% 50%, oklch(0.45 0.04 230 / 0.18), transparent 70%),
			radial-gradient(ellipse 35% 40% at 28% 55%, oklch(0.5 0.06 75 / 0.1), transparent 65%);
	}

	.arch-node {
		border: 1px solid color-mix(in oklab, var(--border) 90%, transparent);
		background: color-mix(in oklab, var(--background) 82%, transparent);
		padding: 0.7rem 0.75rem;
		backdrop-filter: blur(6px);
		transition:
			border-color 0.25s ease,
			box-shadow 0.25s ease,
			transform 0.25s ease;
		box-shadow: 0 0 0 1px color-mix(in oklab, var(--foreground) 3%, transparent);
	}

	.arch-node:hover {
		border-color: color-mix(in oklab, var(--primary) 45%, var(--border));
		box-shadow:
			0 0 0 1px color-mix(in oklab, var(--primary) 28%, transparent),
			0 0 28px color-mix(in oklab, var(--primary) 12%, transparent);
		transform: translateY(-2px);
	}

	.arch-node-core {
		border-color: color-mix(in oklab, var(--primary) 35%, var(--border));
		box-shadow: 0 0 24px color-mix(in oklab, var(--primary) 10%, transparent);
	}

	.arch-node-gateway {
		border-color: color-mix(in oklab, var(--steel) 40%, var(--border));
	}

	.arch-node-label {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--foreground);
		line-height: 1.25;
	}

	.arch-node-hint {
		display: block;
		margin-top: 0.25rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted-foreground);
	}

	.arch-publish-label {
		animation: arch-label-pulse 2.8s ease-in-out infinite;
	}

	.arch-path-publish,
	.arch-path-link {
		stroke-dasharray: 6 6;
	}

	.arch-path-trace {
		stroke-dasharray: 10 90;
		animation: arch-trace 2.4s linear infinite;
		filter: drop-shadow(0 0 4px oklch(0.78 0.08 75 / 0.55));
	}

	.arch-path-link {
		animation: arch-link-dash 3.2s linear infinite;
	}

	@keyframes arch-trace {
		to {
			stroke-dashoffset: -100;
		}
	}

	@keyframes arch-link-dash {
		to {
			stroke-dashoffset: -48;
		}
	}

	@keyframes arch-label-pulse {
		0%,
		100% {
			opacity: 0.55;
		}
		50% {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.arch-path-trace,
		.arch-path-link,
		.arch-publish-label {
			animation: none;
		}
	}
</style>
