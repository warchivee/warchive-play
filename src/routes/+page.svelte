<script lang="ts">
	import { onMount } from 'svelte';
	import BaseHead from '$components/BaseHead.svelte';

	onMount(() => {
		const redirectUrl = `https://article.womynarchive.com/playt`;

		window.location.href = redirectUrl;
	});
</script>

<BaseHead />

<style>
</style>
