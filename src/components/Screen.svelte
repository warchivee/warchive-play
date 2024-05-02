<script lang="ts">
	import Controls from './Controls.svelte';
	import logo from '$lib/images/logo.png';
	import Film from './Film.svelte';

	export let icon = 'play';
	export let color = 'white';
	export let animation = false;

	export let progress = 0;
	export let showAutioMessage = false;
</script>

<section class={animation ? 'animation' : ''}>
	<div class="screen {color}">
		<img class="logo" src={logo} alt="와카이브 로고" />

		<div class="content">
			<slot />
		</div>
		<Controls {showAutioMessage} {icon} color={color === 'white' ? 'black' : 'white'} {progress} />
	</div>

	<Film />
	<Film size="small" />
</section>

<style>
	section {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		z-index: 2;
	}

	section.animation {
		opacity: 0;
		animation: fadeInAnimation 1s ease forwards;
	}

	.logo {
		position: absolute;
		top: 50%;
		width: 70%;
		max-width: 600px;
		min-width: 320px;
		opacity: 0.1;
	}

	.screen {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		width: 100%;
		min-height: 600px;
		z-index: 1;
	}

	.screen.white {
		background-color: rgba(255, 255, 255, 0.8);
	}

	.screen.black {
		background-color: rgba(0, 0, 0, 0.6);
	}

	.screen .content {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.background-anitaion {
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			180deg,
			var(--color-bg-0) 0%,
			var(--color-bg-1) 15%,
			var(--color-bg-2) 50%
		);
		animation: revealAnimation 3s ease forwards;
	}

	@keyframes fadeInAnimation {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
