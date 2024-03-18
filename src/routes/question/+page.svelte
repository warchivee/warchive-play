<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import questions from '$lib/assets/questions';

	import Button from '../../component/Button.svelte';
	import Loader from '../../component/Loader.svelte';
	import Screen from '../../component/Screen.svelte';

	let loading = false;

	let count: Record<string, number> = {
		E: 0,
		I: 0,

		N: 0,
		S: 0,

		T: 0,
		F: 0,

		J: 0,
		P: 0
	};

	let questionNum = 0;

	const getResult = () => {
		let result = '';

		result = result + (count.E > count.I ? 'E' : 'I');
		result = result + (count.N > count.S ? 'N' : 'S');
		result = result + (count.T > count.F ? 'T' : 'F');
		result = result + (count.J > count.P ? 'J' : 'P');

		return result;
	};

	const handleClick = (answerNum: number) => {
		if (questionNum + 1 === questions.length) {
			const result = getResult();

			loading = true;

			setTimeout(function () {
				goto(`${base}/result/${result}`);
			}, 4000);

			return;
		}

		const selectCount = questions[questionNum].answers[answerNum].value;

		questionNum = questionNum + 1;
		count[selectCount] = count[selectCount] + 1;
	};
</script>

<Screen
	icon="pause"
	color="black"
	animation={true}
	progress={questionNum == questions.length - 1 ? 100 : questionNum * 12}
>
	{#if loading === false}
		<h3>{questionNum + 1}/{questions.length}</h3>

		<h3>
			{@html questions[questionNum].text}
		</h3>

		<div class="answer">
			<Button
				onClick={() => {
					handleClick(0);
				}}
				color="white">{@html questions[questionNum].answers[0].text}</Button
			>
			<Button
				onClick={() => {
					handleClick(1);
				}}>{@html questions[questionNum].answers[1].text}</Button
			>
		</div>
	{:else}
		<Loader />
	{/if}
</Screen>

<style>
	h3 {
		color: white;
		flex: 1;
	}

	.question {
		font-size: 2rem;
		color: white;
		text-align: center;
		font-weight: 500;
		font-size: 1.5rem;
	}

	.answer {
		width: 70%;
		min-width: 375px;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
