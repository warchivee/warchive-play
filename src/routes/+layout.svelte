<script lang="ts">
	import { page } from '$app/stores';
	import './styles.css';
</script>

<div class="app {$page?.route?.id === '/question' ? 'black' : 'gradient'}">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		min-height: 100vh;
		justify-content: center; /* logo center */

		overflow: hidden;
	}

	.app.black {
		background-color: #170c1e;
	}

	.app.gradient {
		background: linear-gradient(
			180deg,
			var(--color-bg-0) 0%,
			var(--color-bg-1) 15%,
			var(--color-bg-2) 50%
		);
	}

	main {
		width: 100%;
		min-width: 375px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		box-sizing: border-box;
	}

	.app.gradient > main {
		padding: 20px;

		max-width: 1000px;
	}

	.app.black > main {
		padding: 0;
	}
</style>
