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
		background-color: rgba(255, 255, 255, 0.8);
		box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
        padding: 0px 28px;
		border-radius: 40px;
		z-index: 999;
	}

    p {
		font-family: var(--font-style-1);
		font-size: 2rem;
		letter-spacing: 0.1em;
		color: var(--color-text-5);
        line-height: 2rem;
    }

    @media (max-width: 750px) {
        .snackbar {
            padding: 0px 16px;
            border-radius: 20px;
        }

        p {
            font-size: 1rem;
            letter-spacing: -0.05em;
            line-height: 1rem;
        }
    }
</style>
