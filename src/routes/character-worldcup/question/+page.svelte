<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
	import type { Character } from '$lib/assets/worldcup/characters';
	import { characters, shuffle, putTournamentResult } from '$lib/assets/worldcup/characters';

	let tournament = 32;
	let currentRound = 1;
	let currentIndex = 0;
	let originalCharacters: Character[] = [];
	let selectedCharacters: Character[] = [];
	let winCounts: number[] = [];

	function selectCharacter(character: Character) {
		winCounts[character.id - 1]++;
        selectedCharacters.push(character);

		if(tournament == 1) {
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

	onMount(() => {
		originalCharacters = shuffle(characters);
		winCounts = new Array(originalCharacters.length).fill(0);
	})
</script>

{#if originalCharacters.length > 0}
	<section>
		<div class="music">음악(툴팁과 함께 컴포넌트화 예정)</div>
		<div class="question-container">
			<div class="title">여성서사 등장인물 월드컵 {tournament}강</div>
			<div class="guidance">* 지금은 {tournament}강 중에서 <u>{currentRound}강</u>째 *</div>
			<div class="versus-container">
				<!-- character-block은 컴포넌트화 -->
				<!-- character-block 컴포넌트 선택 이력 여기서 관리 -->
				<!-- 선택 후 VS 및 한쪽 없어짐 효과 추가 -->
				<!-- <div class="character-block">
					<div class="character-image">이미지</div>
					<div class="character-item">작품명</div>
					<div class="character-name">캐릭터 이름</div>
				</div>
				<div>VS</div>
				<div class="character-block">
					<div class="character-image">이미지</div>
					<div class="character-item">작품명</div>
					<div class="character-name">캐릭터 이름</div>
				</div> -->
			</div>
			<div class="versus-container">
				<div class="character-block" tabindex="0" role="button" on:click={() => selectCharacter(originalCharacters[currentIndex])}
					on:keydown={(event) => handleKeyDown(event, originalCharacters[currentIndex])}>
					<img src={originalCharacters[currentIndex].image} alt={`${originalCharacters[currentIndex].name} 이미지`}/>
					<div class="character-item">{originalCharacters[currentIndex].item}</div>
					<div class="character-name">{originalCharacters[currentIndex].name}</div>
				</div>
				<div>VS</div>
				<div class="character-block" tabindex="0" role="button" on:click={() => selectCharacter(originalCharacters[currentIndex + 1])}
					on:keydown={(event) => handleKeyDown(event, originalCharacters[currentIndex+1])}>
					<img src={originalCharacters[currentIndex + 1].image} alt={`${originalCharacters[currentIndex + 1].name} 이미지`}/>
					<div class="character-item">{originalCharacters[currentIndex + 1].item}</div>
					<div class="character-name">{originalCharacters[currentIndex + 1].name}</div>
				</div>
			</div>
			<div class="warchive-logo">와카이브 로고 사진(컴포넌트화 예정)</div>
		</div>
		<!-- if else 문으로 선택 -->
		<div class="loading-container">
			<div>달리는 이미지</div>
			<div class="guidance">... 결과 분석 중 ... (특수기호 수정)</div>
			<div class="warchive-logo">와카이브 로고 사진(컴포넌트화 예정)</div>
		</div>
		<div class="footer">footer 컴포넌트</div>
	</section>
{/if}

<style>
	section {	
		width: 100%;
		min-width: 375px;
		max-width: 1000px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		box-sizing: border-box;
		background-color: bisque;
	}

	.versus-container{
		display: flex;
	}

	img {
		width: 200px;
		height: 200px;
	}
</style>
