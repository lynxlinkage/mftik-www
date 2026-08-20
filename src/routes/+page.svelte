<script lang="ts">
	import Header from '$lib/components/site/Header.svelte';
	import Hero from '$lib/components/site/Hero.svelte';
	import Observatory from '$lib/components/site/Observatory.svelte';
	import Architecture from '$lib/components/site/Architecture.svelte';
	import Pricing from '$lib/components/site/Pricing.svelte';
	import Contact from '$lib/components/site/Contact.svelte';
	import Footer from '$lib/components/site/Footer.svelte';

	const title = 'MFTIK — Mid-frequency algo trading with TradeOps';
	const description =
		'MFTIK is a mid-frequency algo stack with TradeOps built in — develop strategies remotely, publish them to a host, and run them. One instance.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://mftik.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mftik.com/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://mftik.com/mft-logo.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://mftik.com/mft-logo.png" />
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
