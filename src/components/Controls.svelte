<script lang="ts">
	import mobileLogo from '$lib/images/mobile-logo.jpg';
	export let color = 'white';
	export let icon = 'play';
	export let progress = 0;
</script>

<div class="controls" style="--color: {color}">
	<div class="progress-bar">
		<div class="progress-circle" style="--progress: {progress === 100 ? 99 : progress}%"></div>
	</div>
	<div class="btns">
		<div>
			<i class="fas fa-{icon}" id="playBtn"></i>
			<i class="fa-solid fa-forward-step"></i>
			<i class="fa-solid fa-volume-low"></i>
		</div>
		<div>
			<img class="logo" src={mobileLogo} alt="모바일 로고" />
			<div class="font-gothic logo-text">여성서사 아카이브 프로젝트 - Warchive</div>
		</div>
	</div>
</div>

<style>
	.controls {
		width: 90%;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-bottom: 1rem;
	}

	.controls * {
		color: var(--color);
	}

	.progress-bar {
		height: 3px;
		background-color: var(--color);
		position: relative;
		margin-top: 20px;
	}

	.progress-circle {
		width: 14px;
		height: 14px;
		background-color: var(--color);
		border-radius: 50%;
		position: absolute;
		top: -5px;
		left: var(--progress);
		transition: left 0.5s ease;
	}

	.controls > .btns {
		widows: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding: 0 1rem;
	}

	.btns > div:first-child {
		display: flex;
		gap: 1.5rem;
	}

	.btns > div:last-child {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}

	.logo {
		border-radius: 50%;
		width: 1.25rem;
		height: 1.25rem;
	}

	.controls > .btns i {
		color: var(--color);
		font-size: 24px;
		cursor: pointer;
	}

	@media (max-width: 600px) {
		.btns {
			display: flex;
			flex-direction: column;
		}
		.logo-text {
			font-size: 0.9rem;
		}

		.logo {
			width: 1rem;
			height: 1rem;
		}
	}
</style>
