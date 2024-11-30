<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let message = '';
	export let open = false;
</script>

{#if open}
	<div class="snackbar" in:fly={{ duration: 300, x: 0, y: 10, opacity: 0.5, easing: quintOut }}>
		<p class="font-gothic">{message}</p>
	</div>
{/if}

<style>
	.snackbar {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		background-color: #ffffff;
		box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
		padding: 10px 20px;
		border-radius: 5px;
		z-index: 999;
		color: black;
	}
</style>
