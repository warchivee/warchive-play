<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import prizeMarkImg from '$lib/images/mockexam/systems/prize_mark.png';

	import questions from '$lib/assets/mockexam/questions';
	import { name, number, tested, userAnswers } from '../../../store/exam';

	import PaperSheet from '$components/mockexam/PaperSheet.svelte';

	let loading = false;

	let currentPage = 0;
	const totalPages = questions.length;

	function goToNextPage() {
		currentPage = Math.min(currentPage + 1, questions.length - 1);
	}

	function goToPreviousPage() {
		currentPage = Math.max(currentPage - 1, 0);
	}

	let userName = '';
	let examNumber = '';
	let scores: any[] = [];
	let stored: number[][][] = [];
	
	function getWritableData(){
		const unsubscribeUserName = name.subscribe((value) => {
			userName = value;
		});
		const unsubscribeExamNumber = number.subscribe((value) => {
			examNumber = value;
		});
		const unsubscribeAnswers = userAnswers.subscribe((value) => {
			stored = value;
		});
	}

	function calculateScores() {
		const newScores: number[] = [];

		questions.forEach((subject, subjectIndex) => {
			let subjectScore = 0;

			subject.questions.forEach((question, questionIndex) => {
				const correctAnswers = question.correctAnswers;
				const userAnswers = stored[subjectIndex][questionIndex];

				let questionScore = 0;
            if (correctAnswers.length === 1) {
                if (userAnswers.includes(correctAnswers[0])) {
                    questionScore = 4;
                }
            } else {
                if (correctAnswers.length === userAnswers.length && correctAnswers.every(answer => userAnswers.includes(answer))) {
                    questionScore = 4;
                }
            }

				subjectScore += questionScore;
			});

			newScores.push(subjectScore);
		});

		scores = newScores;
	}

	function getResultString(){
		getWritableData();
		calculateScores();
		
		let result = `?n=${userName}&b=${examNumber}&s=${scores.join(',')}`;
		tested.set(true);
		return result;
	}
</script>

{#if loading === false}
	<section>
		{#if questions[currentPage]}
			<PaperSheet category={questions[currentPage]} index={currentPage + 1} />
		{/if}

		<div class="footer">
			<div class="pagination">
				<button class="page-btn" on:click={goToPreviousPage} disabled={currentPage === 0}
					>이전</button
				>
				<h4>{currentPage + 1} / {totalPages}</h4>
				<button
					class="page-btn"
					on:click={goToNextPage}
					disabled={currentPage === questions.length - 1}>다음</button
				>
			</div>

			<div class="submit">
				{#if currentPage === totalPages - 1}
					<button
						class="page-btn"
						on:click={() => {
							loading = true;
							const resultString = getResultString();
								
							setTimeout(function () {
								goto(`${base}/master-mock-exam/result${resultString}`);
							}, 7000);
						}}>답안 제출하기</button
					>
				{/if}
			</div>
		</div>
	</section>
{:else}
	<div class="loader">
		<img src={prizeMarkImg} alt="와카이브 인장" />
		<h5>
			수고하셨습니다.<br />
			제출하신 답안을 채점 중입니다.
		</h5>
		<h5>잠시만 기다려 주세요...</h5>
	</div>
{/if}

<style>
	@keyframes stamp {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0.1;
			transform-origin: 50%, 50%;
			transform: translate(-50%, -50%) rotate(-2deg) scale(5);
			transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
		}
		30% {
			opacity: 0.1;
			transform: translate(-50%, -50%) scale(1);
		}

		50% {
			opacity: 0.1;
			transform: translate(-50%, -50%) scale(1);
		}

		70% {
			opacity: 0;
		}

		100% {
			opacity: 0;
		}
	}

	.loader {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		h5 {
			z-index: 1;
			font-weight: 500;
		}

		img {
			width: 120%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			animation-delay: 1s;
			animation-name: stamp;
			animation-duration: 3s;
			opacity: 0;
			animation-fill-mode: forwards;
			animation-iteration-count: infinite;
		}
	}
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem;
	}

	.footer {
		width: 100%;

		.pagination {
			display: flex;
			justify-content: center;

			gap: 16px;
		}

		.page-btn {
			font-size: 1rem;
		}

		.submit {
			display: flex;
			justify-content: center;
			margin: 20px;
		}
	}

	@media (max-width: 750px) {
		.page-btn {
			font-size: 1.15rem;
		}
	}
</style>
