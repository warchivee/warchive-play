<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';

	export let rate = null;

	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	const number = tweened(0, {
		duration: 2000,
		easing: quintOut
	});

	function setRate() {
		progress.set((rate || 0) / 100);
		number.set(rate || 0);
	}

	// rate 값이 변경될 때마다 애니메이션을 새로 시작
	$: {
		if (rate !== null) {
			setRate();
		}
	}
</script>

<div class="progress">
	<progress value={$progress}></progress>
	<div class="percentage">{Math.floor($number)}%</div>
</div>

<style>
	.progress {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: baseline;
		gap: 5px;
		width: 100%;
		margin: 10px 0;

		@media (max-width: 450px) {
			font-size: 1.7rem;
		}

		.percentage {
			flex: 1;
			font-size: 1rem;
			color: white;
			font-weight: bold;
			text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
			line-height: 0.5;
		}

		progress {
			/* direction: rtl; */
			appearance: none;
			width: 100%;
			height: 0.7rem;
		}

		.container {
			width: 100%;
		}

		progress::-webkit-progress-bar {
			background-color: transparent;
			overflow: hidden;

			background: linear-gradient(145deg, #222, #444);
			border-radius: 10px;
		}

		progress::-webkit-progress-value {
			background: linear-gradient(90deg, #ffd700, #ffcc00); /* Gold gradient */
			border-radius: 8px;
		}
	}
</style>
