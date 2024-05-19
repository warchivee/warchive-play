<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import BGM from '$components/mockexam/BGM.svelte';

	import isAudioPlaying from '../../store/autio';
	import { name, number, tooltip } from '../../store/exam';

	export let showAutioMessage = false;
	export let userName = '';
	export let examNumber = '';

	onMount(() => {
		const today = new Date();
		const year = today.getFullYear().toString().slice(-2);
		const month = ('0' + (today.getMonth() + 1)).slice(-2);
		const day = ('0' + today.getDate()).slice(-2);
		const hours = ('0' + today.getHours()).slice(-2);
		const minutes = ('0' + today.getMinutes()).slice(-2);
		examNumber = `${year}${month}${day}${hours}${minutes}`;
	});

	const isNameEmpty = () => userName.trim() === '';

	const unsubscribeUserName = name.subscribe((value) => {
		userName = value;
	});

	$: {
		name.set(userName);
		number.set(examNumber);
	}
</script>

<section>
	<div class="cover-info">
		<h1 class="cover-title">여성서사 고인물 모의고사</h1>
		<h5 class="cover-desc pc">
			본 테스트는 다양한 여성서사 작품의 스포일러를 포함하고 있을 수 있습니다.
		</h5>
		<h5 class="cover-desc mobile">
			본 테스트는 다양한 여성서사 작품의<br />스포일러를 포함하고 있을 수 있습니다.
		</h5>
	</div>
	<div class="user-form">
		<div class="form-group">
			<label for="user-name">성명</label>
			<input
				type="text"
				id="user-name"
				name="user-name"
				placeholder="성명을 입력하세요"
				bind:value={userName}
				maxlength="5"
			/>
		</div>
		<div class="form-group">
			<label for="exam-number">수험번호</label>
			<input type="text" id="exam-number" name="exam-number" bind:value={examNumber} readonly />
		</div>
	</div>
	<div class="play-control">
		<button
			class="play-button"
			disabled={isNameEmpty()}
			on:click={() => {
				tooltip.set(true);
				isAudioPlaying.set(true);
				goto(`${base}/master-mock-exam/question`);
			}}>모의고사 응시하기</button
		>
		<div class="play-desc">모의고사 응시 시작 시 BGM이 재생됩니다.</div>
		<div class="music-info">
			<i class="fa-solid fa-music" aria-hidden="true"></i>
			<div class="audio-copyright-wrap">
				<div class="audio-copyright">12 Sonatas, Op.16 (Leonarda, Isabella)</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}

	.cover-info {
		max-width: 90%;

		& .cover-title {
			margin-bottom: 14px;
		}
		& .cover-desc {
			text-wrap: nowrap;
			margin-bottom: 30px;
		}
	}

	.user-form {
		display: flex;
		gap: 20px;
	}

	.form-group {
		width: 300px;
		height: 50px;

		display: flex;
		background-color: transparent;
		border: 1px solid black;

		label {
			width: 34%;
			height: 100%;
			margin: 2px;
			font-size: 1.5rem;
			text-align: center;
		}

		input[type='text'] {
			width: 66%;
			height: 100%;

			padding: 10px;
			font-size: 1rem;
			text-align: center;

			appearance: none;
			border-radius: 0;

			border: none;
			background-color: transparent;
			border-left: 1px solid black;
		}

		input[readonly] {
			pointer-events: none;
		}

		input:focus {
			outline: none;
			background-color: transparent;
		}

		input:-webkit-autofill {
			-webkit-box-shadow: 0 0 0 1000px var(--color-bg-1) inset;
		}
	}

	.play-control {
		width: 90%;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-bottom: 40px;

		.play-button {
			font-size: 1.5rem;
			text-align: center;
			margin: 50px;
		}

		.play-desc {
			font-size: 0.75rem;
			text-align: center;
		}

		.music-info {
			display: flex;
			font-size: 0.8rem;
			text-align: center;
			align-items: center;
			justify-content: center;
			gap: 6px;

			& > i {
				margin-top: 2px;
			}
		}
	}

	@media (max-width: 750px) {
		.user-form {
			display: flex;
			flex-direction: column;
		}
	}

	@media (max-width: 500px) {
		.form-group {
			width: 240px;
			height: 40px;

			label {
				font-size: 1.15rem;
			}
		}

		.play-control > .play-button {
			font-size: 1.15rem;
		}
	}
</style>
