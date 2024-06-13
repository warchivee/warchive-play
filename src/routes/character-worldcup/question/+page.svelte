<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { characters } from '$lib/assets/worldcup/characters';

	

	// onMount(() => {
    //     tournamentStore.subscribe(value => {
    //         characters = value.characters;
    //     });
    // });
</script>

<section>
	<div class="music">음악(툴팁과 함께 컴포넌트화 예정)</div>
	<div class="question-container">
		<div class="title">여성서사 등장인물 월드컵 NN강</div>
		<div class="guidance">* 지금은 MM강 중에서 <u>LL강</u>째 *</div>
		<div class="versus-container">
			<!-- character-block은 컴포넌트화 -->
			<!-- character-block 컴포넌트 선택 이력 여기서 관리 -->
			<!-- 선택 후 VS 및 한쪽 없어짐 효과 추가 -->
			<div class="character-block">
				<div class="character-image">이미지</div>
				<div class="character-item">작품명</div>
				<div class="character-name">캐릭터 이름</div>
			</div>
			<div>VS</div>
			<div class="character-block">
				<div class="character-image">이미지</div>
				<div class="character-item">작품명</div>
				<div class="character-name">캐릭터 이름</div>
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
</style>
