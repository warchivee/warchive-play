<script>
	import { page } from '$app/stores';

	export let title = '';
	export let image = '';

	const url = $page?.url;
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:image" content={image} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${url}`} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={`${url}`} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:image" content={image} />
</svelte:head>
