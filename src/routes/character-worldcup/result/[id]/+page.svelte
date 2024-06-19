<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { characters } from '$lib/assets/worldcup/characters';

	import BGM from '$components/worldcup/BGM.svelte';
	import ResultBubble from '$components/worldcup/ResultBubble.svelte';
	import WarchiveLogo from '$components/worldcup/WarchiveLogo.svelte';
	import Footer from '$components/worldcup/Footer.svelte';

	const showModal = false;

	const id = $page?.params?.id;
	const characterId: number = +id;
	const CharacterImg = characters[characterId - 1].image;
	const characterItem = characters[characterId - 1].item;
	const characterName = characters[characterId - 1].name;	
</script>

<section>
	<BGM />
	<div class="result-container">
		<div class="title style-2">당신의 <span>최애 여성서사 등장인물</span>은...</div>
		<div class="character-block">
			<img class="character-img" src={CharacterImg} alt={`${characterName} 이미지`}/>
			<div class="character-item">{characterItem}</div>
			<div class="character-name">{characterName}</div>
			<ResultBubble target={characterItem}/>
		</div>
		<div class="buttons">
			<button>공유하기</button>
			<button on:click={() => { goto(`${base}/character-worldcup/ranking`); }}>랭킹보기</button>
			<button on:click={() => { goto(`${base}/character-worldcup/`); }}>다시하기</button>
			<a href="https://article.womynarchive.com/play" target="_blank">다른게임</a>
		</div>
		<WarchiveLogo />
	</div>
	<Footer />
</section>

{#if showModal}
	<!-- if 문으로 보이기 & 절대 위치로 화면 덮기 (컴포넌트화 OK) -->
	<div class="modal-background">
		<div class="modal-container">
			<div>X(닫기 버튼)</div>
			<div class="head">
				최애 인증서 공유하기
			</div>
			<div class="body">
				이미지
			</div>
			<div class="foot">
				4개 버튼 새로 구현 (컴포넌트)
			</div>
		</div>
	</div>
{/if}

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

	.result-container {
		width: 1000px;
		max-width: 100%;
		height: fit-content;
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
		margin-bottom: 4rem;
	}

	.character-block {
		position: relative;
		cursor: default;
	}

	.character-img{
		width: 520px;
		height: 520px;
	}

	.character-item{
		color: var(--color-text-6);
	}

	.buttons{
		position: absolute;
	}
</style>
