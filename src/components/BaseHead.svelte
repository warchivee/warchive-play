<script>
	import { page } from '$app/stores';

	export let title = 'Warchive: 여성서사 주인공 테스트 - 내가 여성서사 작품의 주인공이 된다면?';
	export let image = 'https://i.ibb.co/v4Qpsb8/mbti-cover.png';

	const url = $page?.url;
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:image" content="https://i.ibb.co/v4Qpsb8/mbti-cover.png" />

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
