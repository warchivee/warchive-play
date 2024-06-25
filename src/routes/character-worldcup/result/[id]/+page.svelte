<script lang="ts">
	import { page } from '$app/stores';

	import { characters, certificates } from '$lib/assets/worldcup/characters';

	import BaseHead from '$components/BaseHead.svelte';
	import BGM from '$components/worldcup/BGM.svelte';
	import ResultBubble from '$components/worldcup/ResultBubble.svelte';
	import ResultButtons from '$components/worldcup/ResultButtons.svelte';
	import ResultShareModal from '$components/worldcup/ResultShareModal.svelte';
	import WarchiveLogo from '$components/worldcup/WarchiveLogo.svelte';
	import Footer from '$components/worldcup/Footer.svelte';

	const id = $page?.params?.id;
	const characterId: number = +id;
	const CharacterImg = characters[characterId - 1].image;
	const characterItem = characters[characterId - 1].item;
	const characterName = characters[characterId - 1].name;	

	let showModal = false;

	function handleModal() {
		showModal = !showModal;
	}

	function makeHashtag(str: string): string {
		return str.replace(/\s+/g, '');
	}
</script>

<BaseHead 
	title="Warchive: 여성서사 등장인물 월드컵" 
	image={certificates[characterId - 1]}
/>

<section>
	<BGM />
	<div class="result-container">
		<div class="title">당신의 <span>최애 여성서사 등장인물</span>은...</div>
		<div class="character-block">
			<img class="character-img-selected" src={CharacterImg} alt={`${characterName} 이미지`}/>
			<div class="character-item">{characterItem}</div>
			<div class="character-name">{characterName}</div>
			<ResultBubble target={characterItem}/>
		</div>
		<ResultButtons handleShare={handleModal}/>
		<WarchiveLogo />
	</div>
	<Footer />
</section>

{#if showModal}
	<ResultShareModal 
		title="Warchive: 여성서사 등장인물 월드컵"
		content={` - 당신의 최애 여성서사 등장인물은... ${characterItem}의 ${characterName}`}
		hashtags={`와카이브,여성서사등장인물월드컵,여성서사,${makeHashtag(characterItem)},${makeHashtag(characterName)}`}
		imageId={characterId}
		openModal={showModal}
		handleModal={handleModal}/>
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
	}

	.title {		
		text-align: center;
		margin-bottom: 4rem;
		font-family: var(--font-style-4);
		font-size: 5rem;
		letter-spacing: 0em;
		color: var(--color-text-5);

		& span {
			font-size: 5rem;
			letter-spacing: 0em;
			color: var(--color-text-6);
		}
	}

	.character-block {
		position: relative;
		cursor: default;
	}

	.character-item{
		color: var(--color-text-6);
	}

	@media (max-width: 750px) {
		.result-container {
			padding: 2rem;
			min-height: 550px;
		}

		.title {
			font-size: 2rem;
			letter-spacing: -0.1em;
		
			& span {
				font-size: 2rem;
				letter-spacing: -0.1em;
			}
		}

		.character-block {
			margin-top: 5rem;
		}
	}
</style>
