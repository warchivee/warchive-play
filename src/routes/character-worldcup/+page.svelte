<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	
	import WarchiveSign from '$lib/images/mockexam/systems/warchive_sign.png';

	import BaseHead from '$components/BaseHead.svelte';
	import Cover from '$components/mockexam/Cover.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<BaseHead title="Warchive: 여성서사 등장인물 월드컵" image="https://i.ibb.co/NyNnS5d/2-share-longthumb.png" />

<section>
	<div class="header">
		당신이 가장 좋아하는 여성서사 등장인물은 누구인가요?
	</div>
	<div class="body">
		<div class="letters"></div>
		<div class="container">
			<div class="title">여성서사 등장인물 월드컵</div>
			<div class="warning">* 다양한 여성서사 작품의 <u>스포일러</u>가 포함되어 있습니다. *</div>
			<div class="buttons">
				<button on:click={() => { goto(`${base}/character-worldcup/question`); }}>시작하기</button>
				<button on:click={() => { goto(`${base}/character-worldcup/ranking`); }}>랭킹보기</button>
				<button>공유하기</button>
			</div>
		</div>
	</div>
	<div class="footer">
		Copyright © 2024 by www.womynarchive.com all right reserved.
	</div>
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
</style>
