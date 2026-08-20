<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { submitContact } from '$lib/api/contact';

	type TopicId = 'demo' | 'custom' | 'support';

	const topics: { id: TopicId; label: string; title: string; body: string }[] = [
		{
			id: 'demo',
			label: 'Request a demo',
			title: 'Walk the hosted loop',
			body: 'See a hosted instance end to end — develop remotely, publish a strategy, and watch TradeOps run through Strategy, Market Domain, and Trading Domain.'
		},
		{
			id: 'custom',
			label: 'Custom',
			title: 'Built to your footprint',
			body: 'Extra regions, seats, or live venue keys. Not self-serve — tell us what the box must look like and we quote from there.'
		},
		{
			id: 'support',
			label: 'Support',
			title: 'Help running the stack',
			body: 'Stuck on deploy, ops, or a hosted box? Write here. Self-host questions can still go to GitHub issues.'
		}
	];

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let message = $state('');
	let status = $state('');
	let busy = $state(false);
	let dialogOpen = $state(false);
	let activeTopic = $state<TopicId>('demo');

	const active = $derived(topics.find((t) => t.id === activeTopic) ?? topics[0]);

	async function onSubmit(e: Event) {
		e.preventDefault();
		busy = true;
		status = 'Sending…';
		try {
			await submitContact({
				name: name.trim(),
				email: email.trim(),
				company: company.trim(),
				message: message.trim(),
				kind: 'mftik'
			});
			status = 'Sent. We’ll write back.';
			dialogOpen = true;
			name = '';
			email = '';
			company = '';
			message = '';
		} catch (err) {
			status = err instanceof Error ? err.message : 'Could not send';
		} finally {
			busy = false;
		}
	}
</script>

<section id="contact" class="scroll-mt-20 border-t border-border/60">
	<div class="mx-auto max-w-6xl px-5 py-16 md:py-24">
		<div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
			<aside class="order-1 lg:order-2" data-reveal data-contact-topics>
				<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Topics</p>
				<p class="mb-5 text-sm text-muted-foreground">
					Pick a lane — then send details in the form.
				</p>

				<div class="flex flex-col gap-2" role="tablist" aria-label="Contact topics">
					{#each topics as topic}
						<button
							type="button"
							role="tab"
							id="topic-{topic.id}"
							aria-selected={activeTopic === topic.id}
							aria-controls="topic-panel"
							class="group flex items-center justify-between border px-4 py-3 text-left font-mono text-xs tracking-wide transition-colors
								{activeTopic === topic.id
								? 'border-primary/50 bg-card text-foreground'
								: 'border-border/80 bg-transparent text-muted-foreground hover:border-border hover:bg-card/40 hover:text-foreground'}"
							onclick={() => (activeTopic = topic.id)}
						>
							<span>{topic.label}</span>
							<span
								class="text-[0.65rem] tracking-[0.16em] uppercase transition-opacity
									{activeTopic === topic.id ? 'text-primary opacity-100' : 'opacity-0 group-hover:opacity-50'}"
								aria-hidden="true"
							>
								→
							</span>
						</button>
					{/each}
				</div>

				<div
					id="topic-panel"
					role="tabpanel"
					aria-labelledby="topic-{active.id}"
					class="relative mt-5 min-h-[7.5rem] border border-border/70 bg-card/35 px-4 py-4"
				>
					{#key active.id}
						<div in:fly={{ y: 14, duration: 320, opacity: 0 }}>
							<p class="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-steel">
								{active.label}
							</p>
							<h3 class="mt-2 text-lg font-medium tracking-tight text-foreground">{active.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{active.body}</p>
							{#if active.id === 'support'}
								<p class="mt-3 text-sm text-muted-foreground">
									Self-host:
									<a
										class="text-primary underline-offset-4 hover:underline"
										href="https://github.com/lynxlinkage/mftik/issues"
										>GitHub issues</a
									>.
								</p>
							{/if}
						</div>
					{/key}
				</div>
			</aside>

			<div class="order-2 lg:order-1" data-reveal>
				<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Contact</p>
				<h2 class="text-2xl font-medium tracking-tight text-foreground md:text-3xl">Contact</h2>
				<p class="mt-3 text-muted-foreground">
					Demo, support, or a custom box. Pick a topic, then send the form.
				</p>

				<form class="mt-8 max-w-xl space-y-3" onsubmit={onSubmit}>
					<div class="space-y-1.5">
						<Label for="contact-name" class="sr-only">Your name</Label>
						<Input
							id="contact-name"
							name="name"
							bind:value={name}
							minlength={2}
							maxlength={120}
							placeholder="Your name"
							required
							class="rounded-sm"
						/>
					</div>
					<div class="space-y-1.5">
						<Label for="contact-email" class="sr-only">Email</Label>
						<Input
							id="contact-email"
							name="email"
							type="email"
							bind:value={email}
							maxlength={254}
							placeholder="you@example.com"
							required
							class="rounded-sm"
						/>
					</div>
					<div class="space-y-1.5">
						<Label for="contact-company" class="sr-only">Company</Label>
						<Input
							id="contact-company"
							name="company"
							bind:value={company}
							maxlength={200}
							placeholder="Company (optional)"
							class="rounded-sm"
						/>
					</div>
					<div class="space-y-1.5">
						<Label for="contact-message" class="sr-only">Message</Label>
						<Textarea
							id="contact-message"
							name="message"
							bind:value={message}
							minlength={3}
							maxlength={5000}
							rows={5}
							placeholder="What do you need?"
							required
							class="min-h-28 rounded-sm"
						/>
					</div>
					<Button type="submit" disabled={busy} class="font-mono tracking-wide">Send</Button>
					{#if status}
						<p class="text-sm text-muted-foreground" role="status">{status}</p>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content class="rounded-sm border-border bg-card sm:max-w-md">
		<Dialog.Header>
			<Dialog.Title class="font-mono tracking-wide">Message received</Dialog.Title>
			<Dialog.Description>
				We’ll write back about your demo, support, or custom request.
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button
				variant="outline"
				class="font-mono tracking-wide"
				onclick={() => (dialogOpen = false)}
			>
				Close
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
