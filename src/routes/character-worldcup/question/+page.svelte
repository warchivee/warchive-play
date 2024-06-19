<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
	import type { Character } from '$lib/assets/worldcup/characters';
	import { characters, shuffle, putTournamentResult } from '$lib/assets/worldcup/characters';

	import BGM from '$components/worldcup/BGM.svelte';
	import WarchiveLogo from '$components/worldcup/WarchiveLogo.svelte';
	import Loading from '$components/worldcup/Loading.svelte';
	import Footer from '$components/worldcup/Footer.svelte';

	let tournament = 64;
	let currentRound = 1;
	let currentIndex = 0;
	let originalCharacters: Character[] = [];
	let selectedCharacters: Character[] = [];
	let winCounts: number[] = [];

	function selectCharacter(character: Character) {
		winCounts[character.id - 1]++;
        selectedCharacters.push(character);

		if(tournament == 2) {
			originalCharacters = [];
			putTournamentResult(winCounts);
		} else {
			currentIndex += 2;
			currentRound++;

			if (currentIndex >= originalCharacters.length) {
				tournament /= 2;
				currentRound = 1;
				currentIndex = 0;
				originalCharacters = selectedCharacters;
				selectedCharacters = [];
			}
		}
    }
	
	function handleKeyDown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement; }, character: Character) {
        if (event.key === 'Enter' || event.key === ' ') {
            selectCharacter(character);
        }
    }

	function getTournament() {
		switch(tournament) {
			case 2: return "결승";
			// case 4: return "준결승";
			default: return tournament + "강";
		}
	}

	onMount(() => {
		originalCharacters = shuffle(characters);
		winCounts = new Array(originalCharacters.length).fill(0);
	})
</script>

<section>
	<BGM />
	<div class="container">
		{#if originalCharacters.length > 0}
			<div class="title">여성서사 등장인물 월드컵 <span>{getTournament()}</span></div>
			<div class="guidance">
				＊지금은 {tournament / 2} 라운드 중에서 <u>{currentRound} 라운드</u>째＊
			</div>
			<div class="versus-container">
				<div class="character-block" tabindex="0" role="button" on:click={() => selectCharacter(originalCharacters[currentIndex])}
					on:keydown={(event) => handleKeyDown(event, originalCharacters[currentIndex])}>
					<img src={originalCharacters[currentIndex].image} alt={`${originalCharacters[currentIndex].name} 이미지`}/>
					<div class="character-item">{originalCharacters[currentIndex].item}</div>
					<div class="character-name">{originalCharacters[currentIndex].name}</div>
				</div>
				<div class="versus">VS</div>
				<div class="character-block" tabindex="0" role="button" on:click={() => selectCharacter(originalCharacters[currentIndex + 1])}
					on:keydown={(event) => handleKeyDown(event, originalCharacters[currentIndex+1])}>
					<img src={originalCharacters[currentIndex + 1].image} alt={`${originalCharacters[currentIndex + 1].name} 이미지`}/>
					<div class="character-item">{originalCharacters[currentIndex + 1].item}</div>
					<div class="character-name">{originalCharacters[currentIndex + 1].name}</div>
				</div>
			</div>
		{:else}
			<Loading />
		{/if}
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

	span {
		color: var(--color-text-6);
	}

	.title {
		text-align: center;

		font-family: var(--font-style-4);
		font-size: 5rem;
		letter-spacing: 0em;
		color: var(--color-text-5);

		& span {		
			font-family: var(--font-style-4);
			font-size: 5rem;
			letter-spacing: 0em;
		}
	}

	.guidance {
		font-family: var(--font-style-1);
		font-size: 2rem;
		letter-spacing: 0.1em;
		color: var(--color-text-6);

		& u {
			font-size: 2rem;
		}
	}

	.versus-container{
		padding: 2rem 0rem 1rem 0rem;
		display: flex;
		align-items: center;
		gap: 30px;
	}

	.versus {
		font-family: var(--font-style-5);
        font-weight: bold;
		font-size: 2rem;
		letter-spacing: -0.1em;
		color: var(--color-text-5);
	}

	.character-block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	img {
		width: 300px;
		height: 300px;
	}

	.character-item {
		margin-top: 1rem;
		font-family: var(--font-style-6);
		font-size: 2rem;
		letter-spacing: -0.1em;
		color: var(--color-text-5);
	}
	
	.character-name {
		line-height: 4rem;
		font-family: var(--font-style-5);
        font-weight: bold;
		font-size: 4rem;
		letter-spacing: -0.1em;
		color: var(--color-text-5);
	}

	@media (max-width: 750px) {
		.container {
			padding: 2rem;
		}

		.title {
			font-size: 2rem;
			letter-spacing: -0.1em;

			& span {		
				font-size: 2rem;
				letter-spacing: -0.1em;
			}
		}

		.guidance {
			font-size: 1rem;
			letter-spacing: -0.05em;

			& u {
				font-size: 1rem;
			}
		}

		.versus-container {
			display: flex;
			flex-direction: column;
			gap: 0px;
		}
		
		.versus {
			font-size: 1rem;
			margin: 1rem;
		}

		img {
			width: 158px;
			height: 158px;
		}

		.character-item {
			margin-top: 0.2rem;
			font-size: 1rem;
		}

		.character-name {
			line-height: 1.7rem;
			font-size: 1.7rem;
		}

	}
</style>
