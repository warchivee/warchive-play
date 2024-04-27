<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import BaseHead from '$components/BaseHead.svelte';

	onMount(() => {
		const redirectUrl = `${base}/womyn-character-test`;

		window.location.href = redirectUrl;
	});
</script>

<BaseHead />

<style>
</style>
