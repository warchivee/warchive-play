<script>
	import { onMount } from 'svelte';

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	const targetDate = new Date('2024-12-26T23:59:00+09:00'); // 한국 시간
	let isCountdownOver = targetDate - new Date() <= 0 ? true : false;

	// 카운트다운 업데이트 함수
	function updateCountdown() {
		const now = new Date();
		const timeLeft = targetDate - now;

		if (timeLeft <= 0) {
			clearInterval(interval);
			return;
		}

		days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
	}

	// 페이지가 마운트되면 카운트다운 시작
	onMount(() => {
		updateCountdown(); // 처음 한 번 실행
		const interval = setInterval(updateCountdown, 1000); // 1초마다 업데이트
	});

	function moveResult() {
		window.location.href = '/best-duo-award-2024/result';
	}
</script>

<div class="countdown-container">
	{#if isCountdownOver}
		<div class="countdown-title">투표가 마감되었습니다</div>
		<button on:click={moveResult}>결과 보기</button>
	{:else}
		<div class="countdown-title">투표 마감일까지 앞으로</div>
		<div class="countdown">
			<div class="time">
				<div class="time-value">{String(days).padStart(2, '0')}</div>
				<span class="time-unit">일</span>
			</div>
			<div class="time">
				<div class="time-value">{String(hours).padStart(2, '0')}</div>
				<span class="time-unit">시간</span>
			</div>
			<div class="time">
				<div class="time-value">{String(minutes).padStart(2, '0')}</div>
				<span class="time-unit">분</span>
			</div>
			<div class="time">
				<div class="time-value">{String(seconds).padStart(2, '0')}</div>
				<span class="time-unit">초</span>
			</div>
		</div>
	{/if}
</div>

<style>
	.countdown-container {
		margin: 20px 0;
		/* border: 1px solid white; */
		background: rgba(0, 0, 0, 0.2);
		padding: 30px 0;
		border-radius: 10px;
		width: 90%;
		max-width: 600px;
	}
	.countdown-title {
		font-size: 1rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.6);
	}

	.countdown {
		display: flex;
		justify-content: center;
		font-weight: bold;
	}

	.time {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px;
		border-radius: 10px;
	}

	.time span {
		font-size: 1.15rem;
		margin-top: 10px;
	}

	.time-value {
		font-size: 2rem;

		@media (max-width: 500px) {
			font-size: 1.5rem;
		}
	}

	.time-unit {
		font-size: 1rem;
		margin-left: 5px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.6);
	}

	button {
		margin-top: 10px;
	}
</style>
