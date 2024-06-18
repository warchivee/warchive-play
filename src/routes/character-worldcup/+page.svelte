<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	
	import WarchiveSign from '$lib/images/mockexam/systems/warchive_sign.png';
	import personImgSrc from '$lib/images/worldcup/systems/1_start_soccergirl.png';

	import BaseHead from '$components/BaseHead.svelte';
	import Cover from '$components/mockexam/Cover.svelte';
	import Footer from '$components/worldcup/Footer.svelte';
</script>

<BaseHead title="Warchive: 여성서사 등장인물 월드컵" image="https://i.ibb.co/NyNnS5d/2-share-longthumb.png" />

<section>
	<div class="header">
		당신이 가장 좋아하는 여성서사 등장인물은 누구인가요?
	</div>
	<div class="body">
		<div class="letters">
			WOMYN<br />WOMYN<br />WOMYN
			<div class="letters-italic">Warchive</div>
			<div class="letters-front">
				WOMYN<br />WOMYN<br />WOMYN
			</div>
		</div>
		<div class="container">
			<div class="title">여성서사 등장인물 월드컵</div>
			<div class="warning">＊다양한 여성서사 작품의 <u>스포일러</u>가 포함되어 있습니다＊</div>
			<div class="buttons">
				<button on:click={() => { goto(`${base}/character-worldcup/question`); }}>시작하기</button>
				<button on:click={() => { goto(`${base}/character-worldcup/ranking`); }}>랭킹보기</button>
				<button>공유하기</button>
			</div>	
		</div>
	</div>
	<Footer />
</section>
<img class="letters-image" src={personImgSrc} alt="타이틀_축구"/>

<style>
	section {
		width: 100%;
		height: 100%;
		min-width: 375px;
		max-width: 1000px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		box-sizing: border-box;
	}

	.header {
		width: 100%;
		margin: 2.8rem;
		text-align: center;

		font-family: var(--font-style-1);
		font-size: 2rem;
		letter-spacing: 0.75em;
		color: var(--color-text-1);

		@media (max-width: 500px) {
			font-size: 0.9rem;
			letter-spacing: 0.25em;
		}
	}

	.body {
		display: flex;
		flex-direction: column;
	}

	.letters {
		position: relative;
		text-align: center;
		z-index: 1;
	}

	.letters-image {
		position: absolute;
		
		top: 50%;
		left: 50%;
		width: 100vw;
		height: 100vh;
		transform: translate(-50%, -50%);
		object-fit: cover;
		/* z-index: 0; */
		z-index: -1;
	}

	.letters,
	.letters-front {
		font-family: var(--font-style-2);
		font-size: 10.8rem;
		letter-spacing: -0.1em;
		color: var(--color-text-2);
	}

	.letters-front {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 3;
	}

	.letters-italic {
		font-family: var(--font-style-3);
		font-size: 25rem;
		color: var(--color-text-3);
		
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(350deg);
		z-index: 4;
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-family: var(--font-style-4);
		font-size: 5rem;
		letter-spacing: 0em;
		color: var(--color-text-1);
	}

	.warning {
		font-family: var(--font-style-1);
		font-size: 2rem;
		letter-spacing: 0.15em;
		color: var(--color-text-1);
		white-space: nowrap;
	}

	.warning > u {
		font-family: var(--font-style-1);
		font-size: 2rem;
		letter-spacing: 0.15em;
		color: var(--color-text-1);
		text-decoration: underline;
	}

	.buttons {
		font-family: var(--font-style-5);
		font-size: 2rem;
		letter-spacing: 0.3em;
		color: var(--color-text-1);
	}
</style>
