<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	
	import type { Character } from '$lib/assets/worldcup/characters';
	import { characters, shuffle, putTournamentResult } from '$lib/assets/worldcup/characters';

	import BGM from '$components/worldcup/BGM.svelte';
	import WarchiveLogo from '$components/worldcup/WarchiveLogo.svelte';
	import Loading from '$components/worldcup/Loading.svelte';
	import Footer from '$components/worldcup/Footer.svelte';

	let isSelected = false;
	let selectedOne: Character;

	let tournament = 64;
	let currentRound = 1;
	let currentIndex = 0;
	let originalCharacters: Character[] = [];
	let selectedCharacters: Character[] = [];
	let winCounts: number[] = [];

	function moveToResult(characterId: number) {
		setTimeout(function () {
			goto(`${base}/character-worldcup/result/${characterId}`);
		}, 4000);
	}

	function selectCharacter(character: Character) {
		isSelected = true;
		selectedOne = character;

		setTimeout(function () {
			isSelected = false;
				
			winCounts[character.id - 1]++;
			selectedCharacters.push(character);
			
			if(tournament == 2) {
				originalCharacters = [];
				putTournamentResult(winCounts);
				moveToResult(selectedOne.id);
			} else {
				currentIndex += 2;
				currentRound++;

				if (currentIndex >= originalCharacters.length) {
					tournament /= 2;
					currentRound = 1;
					currentIndex = 0;
					originalCharacters = shuffle(selectedCharacters);
					selectedCharacters = [];
				}
			}
		}, 2000);
    }
	
	function handleKeyDown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement; }, character: Character) {
        if (event.key === 'Enter' || event.key === ' ') {
            selectCharacter(character);
        }
    }

	function getTournament() {
		switch(tournament) {
			case 2: return "결승";
			case 4: return "준결승";
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
				{#if isSelected}
					<div
						class="character-block selected"
						in:fly={{ y: 50, duration: 1000, easing: cubicOut }}
					>
						<img class="character-img-selected" src={selectedOne.image} alt="{selectedOne.name} 이미지" />
						<div class="character-item">{selectedOne.item}</div>
						<div class="character-name">{selectedOne.name}</div>

						<!-- <img class="character-img-selected" src={selectedCharacters[selectedCharacters.length - 1].image} alt="{selectedCharacters[selectedCharacters.length - 1].name} 이미지" />
						<div class="character-item">{selectedCharacters[selectedCharacters.length - 1].item}</div>
						<div class="character-name">{selectedCharacters[selectedCharacters.length - 1].name}</div> -->
					</div>
				{:else}
					<div class="character-block" tabindex="0" role="button" on:click={() => selectCharacter(originalCharacters[currentIndex])}
						on:keydown={(event) => handleKeyDown(event, originalCharacters[currentIndex])}>
						<img class="character-img" src={originalCharacters[currentIndex].image} alt={`${originalCharacters[currentIndex].name} 이미지`}/>
						<div class="character-item">{originalCharacters[currentIndex].item}</div>
						<div class="character-name">{originalCharacters[currentIndex].name}</div>
					</div>
					<div class="versus">VS</div>
					<div class="character-block" tabindex="0" role="button" on:click={() => selectCharacter(originalCharacters[currentIndex + 1])}
						on:keydown={(event) => handleKeyDown(event, originalCharacters[currentIndex+1])}>
						<img class="character-img" src={originalCharacters[currentIndex + 1].image} alt={`${originalCharacters[currentIndex + 1].name} 이미지`}/>
						<div class="character-item">{originalCharacters[currentIndex + 1].item}</div>
						<div class="character-name">{originalCharacters[currentIndex + 1].name}</div>
					</div>
				{/if}
				
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

	.versus-container {
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

	.selected {
		cursor: default;
	}

	@media (max-width: 750px) {
		.container {
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

			min-height: 463px;
			justify-content: center;
		}
		
		.versus {
			font-size: 1rem;
			margin: 1rem;
		}

	}
</style>
