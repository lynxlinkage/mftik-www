<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { submitContact } from '$lib/api/contact';
	import {
		SLUG_MAX_LENGTH,
		SLUG_MIN_LENGTH,
		SLUG_PATTERN,
		instanceHost,
		isReservedSlug,
		isValidSlug,
		slugify,
		slugifyInput
	} from '$lib/utils/slug';

	let slug = $state('your-name');
	let requestName = $state('');
	let requestEmail = $state('');
	let requestStatus = $state('');
	let requestBusy = $state(false);
	let slugEl = $state<HTMLInputElement | null>(null);

	const preview = $derived(instanceHost(slug));

	function setSlugValidity(el: HTMLInputElement, value: string) {
		const normalized = slugify(value);
		if (!normalized) {
			el.setCustomValidity('Enter an instance name (at least 3 characters).');
		} else if (normalized.length < SLUG_MIN_LENGTH) {
			el.setCustomValidity(`Use at least ${SLUG_MIN_LENGTH} characters.`);
		} else if (isReservedSlug(normalized)) {
			el.setCustomValidity('That name is reserved. Choose another.');
		} else if (!isValidSlug(normalized)) {
			el.setCustomValidity('Use lowercase letters, numbers, and hyphens (3–32 characters).');
		} else {
			el.setCustomValidity('');
		}
	}

	async function onRequestAccess(e: Event) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const normalized = slugify(slug);
		slug = normalized || '';
		if (slugEl) {
			slugEl.value = slug;
			setSlugValidity(slugEl, slug);
		}
		if (!isValidSlug(normalized) || !form.checkValidity()) {
			form.reportValidity();
			return;
		}

		requestBusy = true;
		requestStatus = 'Sending…';
		try {
			await submitContact({
				name: requestName.trim(),
				email: requestEmail.trim(),
				message: `Request access for ${normalized}.mftik.app (Standard — early access $100/month; list $300/month; $200 off permanent).`,
				kind: 'mftik',
				slug: normalized
			});
			requestStatus = 'Sent. We’ll write back.';
		} catch (err) {
			requestStatus = err instanceof Error ? err.message : 'Could not send';
		} finally {
			requestBusy = false;
		}
	}

	function onSlugInput(e: Event) {
		const el = e.currentTarget as HTMLInputElement;
		const next = slugifyInput(el.value);
		slug = next;
		if (el.value !== next) {
			el.value = next;
		}
		setSlugValidity(el, next);
	}

	function onSlugBlur() {
		const normalized = slugify(slug);
		slug = normalized;
		if (slugEl) {
			slugEl.value = normalized;
			setSlugValidity(slugEl, normalized);
		}
	}
</script>

<section id="pricing" class="border-t border-border/60 bg-background/40 scroll-mt-20">
	<div class="mx-auto max-w-6xl px-5 py-16 md:py-24">
		<div class="mb-10 max-w-2xl" data-reveal>
			<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Pricing</p>
			<h2 class="text-2xl font-medium tracking-tight text-foreground md:text-3xl">Plans</h2>
			<p class="mt-3 text-muted-foreground">
				Run it yourself, or take Standard and stay on strategy.
			</p>
		</div>

		<div class="grid gap-4 lg:grid-cols-3">
			<Card.Root data-plan class="flex flex-col rounded-sm border-border bg-card/60 shadow-none">
				<Card.Header>
					<Card.Title class="font-mono text-sm tracking-[0.12em] uppercase">Self-host</Card.Title>
					<p class="font-mono text-2xl text-foreground">Free</p>
					<Card.Description>
						For people starting with MFTIK, and hobbyists who can operate the stack. Same platform on
						your hardware — you keep the keys, the data, and the ops.
					</Card.Description>
				</Card.Header>
				<Card.Content class="flex-1">
					<ul class="space-y-2 text-sm text-muted-foreground">
						<li>Paper trading and strategy deploy</li>
						<li>Control UI</li>
						<li>
							<a
								class="text-primary underline-offset-4 hover:underline"
								href="https://discord.gg/WekYAb43Hj"
								target="_blank"
								rel="noreferrer"
								>Support on Discord</a
							>
							or
							<a
								class="text-primary underline-offset-4 hover:underline"
								href="https://github.com/lynxlinkage/mftik/issues"
								target="_blank"
								rel="noreferrer"
								>GitHub issues</a
							>
						</li>
					</ul>
				</Card.Content>
				<Card.Footer>
					<Button
						href="https://github.com/lynxlinkage/mftik"
						variant="outline"
						class="w-full font-mono tracking-wide"
					>
						Get the repo
					</Button>
				</Card.Footer>
			</Card.Root>

			<Card.Root
				data-plan
				class="flex flex-col rounded-sm border-primary/50 bg-card shadow-none ring-1 ring-primary/20"
			>
				<Card.Header>
					<Card.Title class="font-mono text-sm tracking-[0.12em] uppercase">Standard</Card.Title>
					<p class="font-mono text-2xl text-foreground">
						$100 <span class="text-sm text-muted-foreground">per month</span>
					</p>
					<p class="font-mono text-xs text-muted-foreground">
						USD · early access · list <span class="line-through">$300</span> · $200 off, locked in
						permanently
					</p>
					<Card.Description>
						For traders who already know MFTIK and want to focus on strategy R&amp;D. We run the
						instance and TradeOps — you don’t operate the box. Reservation request — not checkout.
					</Card.Description>
				</Card.Header>
				<Card.Content class="flex-1 space-y-3">
					<ul class="mb-4 space-y-2 text-sm text-muted-foreground">
						<li>One owner, one box</li>
						<li>Regularly shared community strategies</li>
						<li>4-core / 8GB server</li>
						<li>We operate it and ship version updates</li>
					</ul>
					<form class="space-y-3" onsubmit={onRequestAccess}>
						<div class="space-y-1.5">
							<Label for="slug" class="font-mono text-[0.7rem] uppercase tracking-wide"
								>Instance name</Label
							>
							<div
								class="flex items-center gap-2 rounded-sm border border-input bg-background px-3 py-2"
							>
								<input
									id="slug"
									name="slug"
									class="min-w-0 flex-1 bg-transparent font-mono text-sm outline-none"
									autocomplete="off"
									spellcheck="false"
									minlength={SLUG_MIN_LENGTH}
									maxlength={SLUG_MAX_LENGTH}
									pattern={SLUG_PATTERN}
									required
									title="Lowercase letters, numbers, and hyphens; 3–32 characters. Not a live claim."
									bind:this={slugEl}
									value={slug}
									oninput={onSlugInput}
									onblur={onSlugBlur}
								/>
								<span class="shrink-0 font-mono text-xs text-muted-foreground">.mftik.app</span>
							</div>
							<p class="text-xs text-muted-foreground">
								Your instance would be <code class="text-foreground">{preview}</code>
							</p>
							<p class="text-xs text-muted-foreground">
								Reservation note — we write back. This does not claim a live
								<code class="text-foreground">*.mftik.app</code> name.
							</p>
						</div>
						<div class="space-y-1.5">
							<Label for="request-name" class="sr-only">Your name</Label>
							<Input
								id="request-name"
								name="name"
								bind:value={requestName}
								minlength={2}
								maxlength={120}
								placeholder="Your name"
								required
								class="rounded-sm font-mono"
							/>
						</div>
						<div class="space-y-1.5">
							<Label for="request-email" class="sr-only">Email</Label>
							<Input
								id="request-email"
								name="email"
								type="email"
								bind:value={requestEmail}
								maxlength={254}
								placeholder="you@example.com"
								required
								class="rounded-sm font-mono"
							/>
						</div>
						<Button type="submit" class="w-full font-mono tracking-wide" disabled={requestBusy}>
							Request access
						</Button>
						{#if requestStatus}
							<p class="text-sm text-muted-foreground" role="status">{requestStatus}</p>
						{/if}
					</form>
				</Card.Content>
			</Card.Root>

			<Card.Root data-plan class="flex flex-col rounded-sm border-border bg-card/60 shadow-none">
				<Card.Header>
					<Card.Title class="font-mono text-sm tracking-[0.12em] uppercase">Custom</Card.Title>
					<p class="font-mono text-2xl text-foreground">Contact us</p>
					<Card.Description>
						For companies that need ops shaped to their footprint, and strategies built for their
						book. Talk first.
					</Card.Description>
				</Card.Header>
				<Card.Content class="flex-1">
					<ul class="space-y-2 text-sm text-muted-foreground">
						<li>Customized ops — VPC and/or distributed deploy</li>
						<li>We help customize the strategies you need</li>
						<li>Quoted separately · not self-serve</li>
					</ul>
				</Card.Content>
				<Card.Footer>
					<Button href="#contact" variant="outline" class="w-full font-mono tracking-wide">
						Contact us
					</Button>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
</section>
