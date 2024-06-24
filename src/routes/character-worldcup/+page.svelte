<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	
	import isAudioPlaying from '../../store/autio';

	import BaseHead from '$components/BaseHead.svelte';
	import MainShareButton from '$components/worldcup/MainShareButton.svelte';
	import Footer from '$components/worldcup/Footer.svelte';

	function handleStart() {
		isAudioPlaying.set(true);
		goto(`${base}/character-worldcup/question`);
	}

	function handleRanking() {
		goto(`${base}/character-worldcup/ranking`);
	}
</script>

<BaseHead title="Warchive: 여성서사 등장인물 월드컵" image="https://i.ibb.co/NyNnS5d/2-share-longthumb.png" />

<section>
	<header>
		당신이 가장 좋아하는 여성서사 등장인물은 누구인가요?
	</header>
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
				<button class="button-gray" on:click={handleStart}>시작하기</button>
				<button class="button-gray" on:click={handleRanking}>랭킹보기</button>
				<div class="buttons-inner">
					<MainShareButton 
						title="Warchive: 여성서사 등장인물 월드컵"
						content=" - 당신의 최애 여성서사 등장인물은?"
						hashtags="와카이브,여성서사등장인물월드컵,여성서사"
						squareImage="https://i.ibb.co/64C15nv/2-share-shortthumb.png"
						rectangleImage="https://i.ibb.co/NyNnS5d/2-share-longthumb.png"
					/>
				</div>
			</div>	
		</div>
	</div>
	<Footer />
</section>

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

	header {
		width: 100%;
		margin: 2.8rem;
		text-align: center;

		font-family: var(--font-style-1);
		font-size: 2rem;
		letter-spacing: 0.75em;
		color: var(--color-text-1);
	}

	.body {
		display: flex;
		flex-direction: column;
	}

	.letters {
		position: relative;
		text-align: center;
		z-index: 0;
		
		cursor: default;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
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
		color: rgba(255, 214, 0, 0.3);
		z-index: 3;
	}

	.letters-italic {
		font-family: var(--font-style-3);
		font-size: 25rem;
		color: var(--color-text-3);
		
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-8deg);
		z-index: 2;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		z-index: 2;
	}

	.title {
		font-family: var(--font-style-4);
		font-size: 5rem;
		letter-spacing: 0em;
		color: var(--color-text-1);
	}

	.warning,
	.warning > u {
		font-family: var(--font-style-1);
		font-size: 2rem;
		letter-spacing: 0.15em;
		color: var(--color-text-1);
		white-space: nowrap;
	}

	.warning > u {
		text-decoration: underline;
	}

	.buttons {
		display: flex;
		width: fit-content;
		margin: 40px 0px 30px 0px;
	}

	.buttons-inner{
		width: fit-content;
		position: relative;
	}

	@media (max-width: 1000px) {
		.buttons {
			display: flex;
			flex-direction: column;
			gap: 10px;

		}
	}

	@media (max-width: 750px) {
		header {
			font-size: 0.9rem;
			letter-spacing: 0.25em;
		}

		.letters,
		.letters-front {
			font-size: 5rem;
			letter-spacing: -0.05em;
		}

		.letters-italic {
			font-size: 10rem;
			letter-spacing: 0em;
		}

		.title {
			font-size: 2rem;
			letter-spacing: -0.1em;
		}
		
		.warning,
		.warning > u {
			font-size: 0.9em;
			letter-spacing: -0.05em;
		}
		
	}
</style>
