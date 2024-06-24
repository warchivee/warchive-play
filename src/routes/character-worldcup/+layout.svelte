<script lang="ts">
	import './styles.css';
	import backgroundImgSrc from '$lib/images/worldcup/systems/0_background.png';
</script>

<div class="app">
	<main style="background-image: url({backgroundImgSrc})">
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		min-height: 100vh;
		justify-content: center;
		overflow: hidden;
	}
	
	main {
		width: 100%;
		min-height: 100%;

		background-size: cover;	
		background-position: center;
		background-repeat: no-repeat;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
