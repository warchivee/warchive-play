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
		flex-direction: column;
		align-items: flex-end;
		font-size: 30px;
		font-weight: 700;
		width: 40%;

		@media (max-width: 450px) {
			font-size: 1.7rem;
		}

		progress {
			direction: rtl;
			appearance: none;
			width: 100%;
			height: 8px;
		}

		progress::-webkit-progress-bar {
			background-color: transparent;
			overflow: hidden;
		}

		progress::-webkit-progress-value {
			background: rgba(255, 255, 255, 0.6);
		}
	}
</style>
