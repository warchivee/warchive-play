<script lang="ts">
	import { onMount } from 'svelte';

	import type { Ranking } from '$lib/assets/worldcup/characters';
	import { loadRankingData } from '$lib/assets/worldcup/characters';

	import boxImgSrc from '$lib/images/worldcup/systems/6_rank_box.png';
	
	import BGM from '$components/worldcup/BGM.svelte';
	import RankingBox from '$components/worldcup/RankingBox.svelte';
	import RankingButtons from '$components/worldcup/RankingButtons.svelte';
	import WarchiveLogo from '$components/worldcup/WarchiveLogo.svelte';
	import Footer from '$components/worldcup/Footer.svelte';
	
	let data: Ranking[] = [];
	
	onMount(async () => {
		try {
			data = await loadRankingData();
		} catch (error) {
			console.error('Failed to load ranking data:', error);
		}
  	});
</script>

<section>
	<BGM />
	<div class="container">
		<div class="title">여성서사 등장인물 월드컵 <span>랭킹</span></div>
		<div class="ranking-image" style="background-image: url({boxImgSrc})">
			<div class="ranking-container">
				<div class="description pc">
					＊  우승비율 = 최종 우승 횟수 / 전체 플레이 수  ＊  승률 = 승리 횟수 / 전체 1:1 대결 수  ＊
				</div>
				{#each data as { character_id, championship_rate, winning_rate }, index}
					<RankingBox index={index} character_id={character_id}, championship_rate={championship_rate} winning_rate={winning_rate}/>
				{/each}	
			</div>
		</div>
		<RankingButtons />
		<WarchiveLogo />
	</div>
	<Footer />
</section>

<style>
	section {	
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.1);
	}

	.container {
		width: 1500px;
		max-width: 100%;
		height: fit-content;
		min-height: 870px;
		max-height: 90vh;
		padding: 4rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: white;
		position: relative;

		z-index: 0;
	}

	.title {
		text-align: center;
		margin-bottom: 1rem;

		font-family: var(--font-style-4);
		font-size: 5rem;
		letter-spacing: 0em;
		color: var(--color-text-5);

		& span {		
			font-family: var(--font-style-4);
			font-size: 5rem;
			letter-spacing: 0em;
			color: var(--color-text-6);
		}
	}

	.ranking-image {
		background-size: cover;	
		background-position: center;
		background-repeat: no-repeat;
		
		width: 992px;
		height: 644px;

		overflow: hidden;
	}

	.ranking-container {
		width: 969px;
		height: 621px;
		margin: 2px 0 0 1px;

		overflow-y: scroll;

		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.ranking-container::-webkit-scrollbar {
		width: 15px;
	}

	.ranking-container::-webkit-scrollbar-thumb {
		background-color: #F6F6F6;
		border-radius: 5px;
	}

	.ranking-container::-webkit-scrollbar-track {
		background-color: #D9D9D9;
	}

	.description {
		font-family: var(--font-style-6);
		font-size: 1.5rem;
		letter-spacing: 0.15em;
		color: var(--color-text-5);
		margin: 1rem;
	}

	@media (max-width: 750px) {
		.container {
			padding: 0;
			min-height: 600px;
		}

		.title {
			margin-bottom: 2rem;

			font-size: 2rem;
			letter-spacing: -0.1em;

			& span {
				font-size: 2rem;
				letter-spacing: -0.1em;
			}
		}

		.ranking-image {
			background-size: 100% 100%;
			width: 328px;
			height: 416px;
		}
		
		.ranking-container {
			width: 320px;
			height: 400px;
			padding: 10px 0 0 0;
		}
	}
</style>
