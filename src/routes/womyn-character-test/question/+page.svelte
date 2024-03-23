<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import questions from '$lib/assets/questions';
	import { pathsByType } from '$lib/assets/results';
	
	import Button from '$components/Button.svelte';
	import Loader from '$components/Loader.svelte';
	import Screen from '$components/Screen.svelte';
	import BaseHead from '$components/BaseHead.svelte';

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

	const getType = () => {
		let type = '';

		type = type + (count.E > count.I ? 'E' : 'I');
		type = type + (count.N > count.S ? 'N' : 'S');
		type = type + (count.T > count.F ? 'T' : 'F');
		type = type + (count.J > count.P ? 'J' : 'P');

		return type;
	};

	const handleClick = (answerNum: number) => {
		console.log(count);
		if (questionNum + 1 === questions.length) {
			const type = getType();

			loading = true;

			setTimeout(function () {
				goto(`${base}/womyn-character-test/result/${pathsByType[type]}`);
			}, 4000);

			return;
		}

		const selectCount = questions[questionNum].answers[answerNum].value;

		questionNum = questionNum + 1;
		count[selectCount] = count[selectCount] + 1;
	};
</script>

<BaseHead />

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
		padding: 0 1rem;
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
