<script lang="ts">
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app{
		display: flex;
		min-height: 100vh;
		justify-content: center;
		overflow: hidden;

		background-color: var(--color-bg-1);
	}

	main{
		width: 100%;
		min-width: 375px;
		max-width: 1000px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		box-sizing: border-box;
	}
</style>