<script lang="ts">
	import { page } from '$app/stores';

	import checkImg from '$lib/images/mockexam/systems/check.png';
	import redCheckImg from '$lib/images/mockexam/systems/red_check.png';
	import redCheckLineImg from '$lib/images/mockexam/systems/red_check_line.png';
	import correctMarkImg from '$lib/images/mockexam/systems/correct_mark.png';
	import wronMarkImg from '$lib/images/mockexam/systems/wrong_mark.png';
	import { userAnswers } from '../../store/exam';

	import type { Question } from '$lib/assets/mockexam/questions';

	export let category: number;
	export let question: Question;
	export let index: number;

	let stored: number[][][] = [];

	const isReviewPage = $page?.route?.id?.includes('/review');

	function numberToCircle(number: number) {
		const circleMap = ['①', '②', '③', '④', '⑤', '⑥'];
		if (number >= 1 && number <= 6) {
			return circleMap[number - 1];
		} else {
			return number;
		}
	}
	
	const unsubscribeAnswers = userAnswers.subscribe((value) => {
		stored = value;
	});

	function writeRadioAnswer(category: number, quest: number, answ: number) {
		const checkboxElement = document.getElementById(`${category + 1}-question-${quest + 1}-answer-${answ}`) as HTMLInputElement;
		if (checkboxElement) {
			checkboxElement.checked = false;
		}

		if (stored.length <= category || !stored[category]) {
			stored[category] = [[]];
		}
		if (stored[category].length <= quest || !stored[category][quest]) {
			stored[category][quest] = [];
		}
		stored[category][quest] = [answ];
		userAnswers.set(stored);
	}

	function writeCheckboxAnswer(category: number, quest: number, answ: number) {
		const radioElement = document.getElementById(`${category + 1}-question-${quest + 1}-answer-${answ}`) as HTMLInputElement;
		if (radioElement) {
			radioElement.checked = false;
		}

		if (stored.length <= category || !stored[category]) {
			stored[category] = [[]];
		}
		if (stored[category].length <= quest || !stored[category][quest]) {
			stored[category][quest] = [];
		}
		const index = stored[category][quest].indexOf(answ);
		if (index !== -1) {
			stored[category][quest].splice(index, 1);
		} else {
			stored[category][quest].push(answ);
			stored[category][quest].sort((a, b) => a - b);
		}
		userAnswers.set(stored);
	}

	function isUserChecked(selects: number[], answerIndex: number) {
		return selects.includes(answerIndex);
	}

	function checkQuestion(selects: number[], corrects: number[]) {
		if (
			!Array.isArray(selects) ||
			!Array.isArray(corrects) ||
			selects.length !== corrects.length
		) {
			return false;
		}

		for (let i = 0; i < selects.length; i++) {
			if (selects[i] !== corrects[i]) {
				return false;
			}
		}

		return true;
	}

	function isCorrectAnswer(answers: number[], answerIndex: number) {
		return answers.includes(answerIndex + 1);
	}
</script>

<div class="question" id="{category + 1}-question-{index}-answers">
	<img
		class="mark {isReviewPage ? 'show' : ''}"
		src={checkQuestion(stored[category][index - 1], question.correctAnswers)
			? correctMarkImg
			: wronMarkImg}
		alt="맞음"
	/>
	<div class="main-context">
		<p>{index}. {@html question.text}</p>
		{#if question.image}
			<img class={`${question.image.type}`} src={question.image.add} alt="문제 이미지" />
		{/if}
	</div>

	{#if question.example}
		<div class="sub-context">
			<p class={`${question.example.type}`}>
				{@html question.example.text}
			</p>
		</div>
	{/if}

	<div class="answers {question.answer_type}">
		{#each question.answers as answer, answerIndex}
			<div
				class="answer{isReviewPage && isCorrectAnswer(question.correctAnswers, answerIndex)
					? ' correct'
					: ''}{isUserChecked(stored[category][index - 1], answerIndex + 1)
					? ' checked'
					: ''}"
			>
				<input
					type={question.correctAnswers.length > 1 ? 'checkbox' : 'radio'}
					name="{category + 1}-question-{index}-answers"
					id="{category + 1}-question-{index}-answer-{answerIndex + 1}"
					disabled={isReviewPage}
					on:change={(event) =>
						question.correctAnswers.length > 1
							? writeCheckboxAnswer(category, index - 1, answerIndex + 1)
							: writeRadioAnswer(category, index - 1, answerIndex + 1)}
				/>
				<img class="check" src={checkImg} alt="체크표시" />
				<img class="correct_img check{checkQuestion(stored[category][index - 1], question.correctAnswers) ? " hidden" : ""}" src={redCheckImg} alt="체크표시" />
				<img class="correct_img line{checkQuestion(stored[category][index - 1], question.correctAnswers) ? " hidden" : ""}" src={redCheckLineImg} alt="체크표시" />
				<label for="{category + 1}-question-{index}-answer-{answerIndex + 1}">{numberToCircle(answerIndex + 1)}</label>
            	<label for="{category + 1}-question-{index}-answer-{answerIndex + 1}">{answer.text}</label>
			</div>
		{/each}
	</div>
	{#if isReviewPage}
		<button
			class="guidance"
			on:click={() => {
				window.open(`https://www.womynarchive.com?s=${question.search}`, '_blank');
			}}
		>
			와카이브에서 〈{question.search}〉 확인하기
		</button>
	{/if}
</div>

<style>
	* {
		text-align: justify;
	}

	.question {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		margin-bottom: 3rem;

		.mark {
			position: absolute;
			display: none;
			width: 150px;
			top: -20px;
			left: -30px;
		}

		.mark.show {
			display: block;
		}
	}

	.main-context {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: fit-content;
		justify-content: center;
		align-items: center;
		text-align: justify;
		gap: 1rem;

		img.horizontal {
			width: 300px;
		}

		img.vertical {
			width: 200px;
		}
	}

	.sub-context {
		margin-top: 10px;
		padding: 0.2rem 0.5rem;
		border: 1px solid black;
		font-style: italic;

		[class*='centered'] {
			text-align: center;
		}
	}

	.answers {
		display: grid;
		grid-template-columns: auto auto;
		gap: 0.5rem;
		margin-top: 10px;

		&.long {
			grid-template-columns: auto;
		}

		.answer {
			display: flex;
			width: fit-content;
			gap: 0.2rem;
			position: relative;

			input {
				display: none;
			}

			label {
				cursor: pointer;
			}

			img {
				display: none;
				position: absolute;
				left: 0;
			}

			img.check {
				width: 20px;
			}

			img.line {
				bottom: 0;
				height: 1px;
				width: 110%;
			}
		}
		
		.answer.checked img:not(.correct_img) {
			display: block;
		}

		.answer.correct {
			img.correct_img {
				display: block;
			}
			
			img.hidden {
				display: none;
			}
		}
	}

	.guidance {
		width: fit-content;
	}
</style>
