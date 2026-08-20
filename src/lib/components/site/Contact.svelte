<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { submitContact } from '$lib/api/contact';

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let message = $state('');
	let status = $state('');
	let busy = $state(false);
	let dialogOpen = $state(false);

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
		<div class="max-w-xl" data-reveal>
			<p class="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">Contact</p>
			<h2 class="text-2xl font-medium tracking-tight text-foreground md:text-3xl">Contact</h2>
			<p class="mt-3 text-muted-foreground">
				Demo, support, or a custom box. Self-host questions can still go on
				<a
					class="text-primary underline-offset-4 hover:underline"
					href="https://github.com/lynxlinkage/mftik/issues">GitHub issues</a
				>.
			</p>

			<form class="mt-8 space-y-3" onsubmit={onSubmit}>
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
