<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import results from '$lib/assets/results';

	import { blur } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import Footer from '../../../component/Footer.svelte';
	import IntroSection from '../../../component/IntroSection.svelte';
	import Screen from '../../../component/Screen.svelte';
	import SnsShareBtns from '../../../component/SnsShareBtns.svelte';

	function getImageSrcs() {
		const result: string[] = [];

		Object.keys(results)?.forEach((key) => {
			let image = results[key]?.image;
			if (image) {
				result.push(image);
			}
		});

		return result;
	}

	let type = $page?.params?.type;
	const result = results[type];
	const images = getImageSrcs();
</script>

<Screen icon="rotate-left" progress={100}>
	<div class="title">
		<div>당신과 닮은 <b>여성서사 주인공</b>은?</div>
	</div>

	<div class="result" in:blur={{ amount: 10 }}>
		<img
			src={result?.image}
			alt="썸네일"
			in:fly={{ delay: 250, duration: 300, x: 10, y: 0, opacity: 0.5, easing: quintOut }}
		/>

		<div class="info font-gothic">
			<h1>{result?.name}</h1>
			<h3>{result?.title}</h3>

			<div class="keyword">
				<h5>{result?.keyword}</h5>
			</div>

			<p>
				{@html result?.description}
			</p>
		</div>
	</div>

	<SnsShareBtns />
</Screen>

<IntroSection
	src={result?.src}
	imgSrc={result?.imgSrc}
	title={result?.title}
	genre={result?.genre}
	intro={result?.intro}
	{images}
/>

<button class="replay-btn" on:click={() => goto(`${base}/`)}>테스트 다시하기</button>

<Footer />

<style>
	.result {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 10px 30px;
		margin-top: 10px;
	}

	.title > div {
		background-color: #170c1e;
		color: white;
		padding: 10px 20px;
		/* border-bottom: 2px solid #170c1e; */
	}

	.title > * {
		font-weight: bold;
	}

	.title b {
		font-weight: bold;
		color: #d388ff;
	}

	.keyword {
		width: 100%;
		display: flex;
	}

	.keyword > h5 {
		display: inline-block;
		box-shadow: inset 0 -13px 0 rgba(211, 136, 255, 0.2);
		word-spacing: 5px;
	}

	.title {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.info * {
		margin: 0.5rem 0;
	}

	.info > p {
		margin: 1rem 0;
	}

	h1,
	h3,
	h5,
	p {
		text-align: left;
	}

	h1 {
		line-height: 40px;
	}

	h3 {
		color: gray;
	}

	.result > img {
		width: 250px;
		height: 350px;
		border: 3px solid black;
		box-shadow: 8px 8px black;
		object-fit: cover;
	}

	.replay-btn {
		text-decoration: underline;
		font-weight: bold;
		cursor: pointer;
		margin: 20px;
		opacity: 0.7;
	}

	@media (max-width: 750px) {
		.result {
			flex-direction: column;
		}

		h1,
		h3,
		h5 {
			text-align: center;
		}

		.keyword {
			justify-content: center;
		}
	}
</style>
