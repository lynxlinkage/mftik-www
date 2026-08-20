<script lang="ts">
	import Header from '$lib/components/site/Header.svelte';
	import Hero from '$lib/components/site/Hero.svelte';
	import Observatory from '$lib/components/site/Observatory.svelte';
	import Architecture from '$lib/components/site/Architecture.svelte';
	import Pricing from '$lib/components/site/Pricing.svelte';
	import Contact from '$lib/components/site/Contact.svelte';
	import Footer from '$lib/components/site/Footer.svelte';
</script>

<svelte:head>
	<title>MFTIK — Your own trading instance</title>
	<meta
		name="description"
		content="Mid-frequency algo trading. Self-host free, or claim a hosted instance for $30/month. Paper trading, strategy deploy, control UI."
	/>
	<link rel="canonical" href="https://mftik.com/" />
</svelte:head>

<Header />
<main>
	<Hero />
	<Observatory />
	<Architecture />
	<Pricing />
	<Contact />
</main>
<Footer />
