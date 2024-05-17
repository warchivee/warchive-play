<script lang="ts">
	import { onMount } from 'svelte';

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import BGM from '$components/mockexam/BGM.svelte';
	import Warchive from '$components/mockexam/Warchive.svelte';
	import SnsShareBtns from '$components/SnsShareBtns.svelte';

	import { tested } from '../../../store/exam';

	import PrizeUnderline from '$lib/images/mockexam/systems/prize_underline.png';
	import PrizeMark from '$lib/images/mockexam/systems/prize_mark.png';
	import PrizeBadge from '$lib/images/mockexam/systems/prize_badge.png';
	import PrizeBorderHor from '$lib/images/mockexam/systems/prize_border_hor.png';
	import PrizeBorderVer from '$lib/images/mockexam/systems/prize_border_ver.png';
	import Footer from '$components/Footer.svelte';
	import BaseHead from '$components/BaseHead.svelte';

	const urlData = $page.url;

	const name = urlData.searchParams.get('n') ?? 'no-name';
	const number = urlData.searchParams.get('b') ?? '00000000';
	let scores = urlData.searchParams
		.get('s')
		?.split(',')
		?.map((s) => Number(s) ?? 0) ?? [0, 0, 0, 0, 0];
	scores = scores?.length < 5 ? [0, 0, 0, 0, 0] : scores;

	const total = scores?.reduce((acc: number, cur: number) => acc + cur);

	function getGrade() {
		if (total >= 92) {
			return 1;
		} else if (total >= 84) {
			return 2;
		} else if (total >= 72) {
			return 3;
		} else if (total >= 60) {
			return 4;
		} else if (total >= 40) {
			return 5;
		} else if (total >= 32) {
			return 6;
		} else if (total >= 20) {
			return 7;
		} else if (total >= 16) {
			return 8;
		} else {
			return 9;
		}
	}

	const grade = getGrade();

	function getSnsShareThumbnail() {
		if (grade === 1) {
			return 'https://i.ibb.co/w4bB555/mock-exam-share-1.png';
		} else if (grade === 2) {
			return 'https://i.ibb.co/6bphBZ5/mock-exam-share-2.png';
		} else if (grade === 3) {
			return 'https://i.ibb.co/6Rg9WKL/mock-exam-share-3.png';
		} else if (grade === 4) {
			return 'https://i.ibb.co/nnrzmkN/mock-exam-share-4.png';
		} else if (grade === 5) {
			return 'https://i.ibb.co/xY2KgCG/mock-exam-share-5.png';
		} else if (grade === 6) {
			return 'https://i.ibb.co/VSjsFJY/mock-exam-share-6.png';
		} else if (grade === 7) {
			return 'https://i.ibb.co/zs21GvS/mock-exam-share-7.png';
		} else if (grade === 8) {
			return 'https://i.ibb.co/whZgBXn/mock-exam-share-8.png';
		} else {
			return 'https://i.ibb.co/m5b4Bbq/mock-exam-share-9.png';
		}
	}

	const thumbnail = getSnsShareThumbnail();

	let isShared = true;

	onMount(() => {
		const unsubscribeAnswers = tested.subscribe((value) => {
			isShared = value ? false : true;
		});
	});
</script>

<BaseHead title="Warchive: 여성서사 고인물 모의고사" image={thumbnail} />

<section>
	<h1>여성서사 고인물 모의고사 결과지</h1>

	<div class="result-top-info">
		<BGM />
		<Warchive />
	</div>

	<div class="result-popup">
		<div class="result-popup__header">
			<span>result.php</span>
			<div class="result-popup__xbutton font-gothic">x</div>
		</div>

		<img class="popup_prize__mark" src={PrizeMark} alt="인증서 꾸밈 요소" />

		<table class="tg vertical">
			<thead>
				<tr>
					<th class="tg-h" colspan="2"><h4>성명</h4></th>
					<th class="tg-h" colspan="3"><h4>{name}</h4></th>
					<th class="tg-h" colspan="2"><h4>수험번호</h4></th>
					<th class="tg-h" colspan="3"><h4>{number}</h4></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="tg-h" colspan="2"><h4>등급</h4></td>
					<td class="tg-h" colspan="3"><h4>{grade}등급</h4></td>
					<td class="tg-h" colspan="2"><h4>총점</h4></td>
					<td class="tg-h" colspan="3"><h4>{total}/100</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="2"><h4>만화</h4></td>
					<td class="tg-h" colspan="2"><h4>영상</h4></td>
					<td class="tg-h" colspan="2"><h4>공연</h4></td>
					<td class="tg-h" colspan="2"><h4>서적</h4></td>
					<td class="tg-h" colspan="2"><h4>게임</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="2"><h4>{scores[0]}/20</h4></td>
					<td class="tg-h" colspan="2"><h4>{scores[1]}/20</h4></td>
					<td class="tg-h" colspan="2"><h4>{scores[2]}/20</h4></td>
					<td class="tg-h" colspan="2"><h4>{scores[3]}/20</h4></td>
					<td class="tg-h" colspan="2"><h4>{scores[4]}/20</h4></td>
				</tr>
			</tbody>
		</table>

		<table class="tg horizon">
			<thead>
				<tr>
					<th class="tg-h" colspan="2"><h4>성명</h4></th>
					<th class="tg-h" colspan="4"><h4>{name}</h4></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="tg-h" colspan="2"><h4>수험번호</h4></td>
					<td class="tg-h" colspan="4"><h4>{number}</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="2"><h4>등급</h4></td>
					<td class="tg-h" colspan="4"><h4>{grade}등급</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="2"><h4>총점</h4></td>
					<td class="tg-h" colspan="4"><h4>{total}/100</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="3"><h4>만화</h4></td>
					<td class="tg-h" colspan="3"><h4>{scores[0]}/20</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="3"><h4>영상</h4></td>
					<td class="tg-h" colspan="3"><h4>{scores[1]}/20</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="3"><h4>공연</h4></td>
					<td class="tg-h" colspan="3"><h4>{scores[2]}/20</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="3"><h4>서적</h4></td>
					<td class="tg-h" colspan="3"><h4>{scores[3]}/20</h4></td>
				</tr>
				<tr>
					<td class="tg-h" colspan="3"><h4>게임</h4></td>
					<td class="tg-h" colspan="3"><h4>{scores[4]}/20</h4></td>
				</tr>
			</tbody>
		</table>

		<div class="result-popup__footer">
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					goto(`${base}/master-mock-exam/review`);
				}}>해설 확인하기</button
			>
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					goto(`${base}/master-mock-exam`);
				}}>다시 응시하기</button
			>
			<button
				class={isShared ? '' : 'hidden'}
				on:click={() => {
					goto(`${base}/master-mock-exam`);
				}}>직접 응시하기</button
			>
		</div>
	</div>

	<SnsShareBtns
		title="Warchive: 여성서사 고인물 모의고사"
		content={` - 내 여성서사 고인물 모의고사 등급은... ${grade}등급!`}
		hashtags="와카이브,여성서사고인물모의고사,여성서사"
		image={thumbnail}
	/>

	<a href="https://article.womynarchive.com/play" target="_blank">다른 여성서사 테스트 하러가기</a>

	<hr />

	<div
		class="prize"
		style="--prize_border_hor: url({PrizeBorderHor}); --prize_border_ver: url({PrizeBorderVer});"
	>
		<div class="prize__header">
			<h2>여성서사 고인물 인증서</h2>
			<img src={PrizeUnderline} alt="인증서 꾸밈 요소" />
		</div>

		<img class="prize__badge" src={PrizeBadge} alt="인증서 꾸밈 요소" />

		<div class="prize__contents">
			<h4>{getGrade()}등급</h4>
			<div>
				<h5>성명 {name}</h5>
				<h5>수험번호 {number}</h5>
			</div>
		</div>

		<h5 class="prize__p over-500">
			위 사람은 여성서사 고인물 모의고사에서 <br />
			평소 여성서사를 사랑하는 마음으로 성실히 응시한 결과 <br />
			다음과 같은 성적을 받았기에 이 상장을 수여합니다.
		</h5>
		<h5 class="prize__p under-500">
			위 사람은 여성서사 고인물 모의고사에서 <br />
			평소 여성서사를 사랑하는 마음으로 <br />
			성실히 응시한 결과 <br />
			다음과 같은 성적을 받았기에 <br />
			이 상장을 수여합니다.
		</h5>

		<div class="prize__footer">
			<h4>여성서사 아카이브 프로젝트 와카이브</h4>
			<img class="prize__mark" src={PrizeMark} alt="인증서 꾸밈 요소" />
		</div>
	</div>
</section>

<Footer />

<style>
	section {
		padding: 3rem;
		width: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}

	hr {
		all: unset;
		height: 1px;
		background-color: black;
		width: 100%;
		margin: 30px 0px 40px 0px;
	}

	.result-top-info + .result-popup {
		margin-top: -2rem;
	}

	.result-top-info {
		width: 100%;
		border: none;
		display: flex;
		justify-content: space-between;
	}

	.result-popup {
		width: 100%;
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

		.popup_prize__mark {
			position: absolute;
			width: 20%;
			min-width: 150px;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0.1;
		}
	}

	.result-popup__header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: black;
		padding: 0.2rem 1rem;
	}

	.result-popup__header > span {
		color: white;
	}

	.result-popup__xbutton {
		color: black;
		background: #dbd2cb;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 20px;
		width: 20px;
		border-top: 1px solid white;
		border-left: 1px solid white;
		border-bottom: 1px solid black;
		border-right: 1px solid black;
	}

	.result-popup__footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0rem 0rem 2rem 0rem;
		gap: 2rem;

		[class*='hidden'] {
			display: none;
		}
	}

	.result-popup__footer button {
		font-size: 20px;
	}

	.tg {
		margin: 2rem 0;
		border-collapse: collapse;
		border-spacing: 0;
		table-layout: fixed;
		width: 80%;
	}

	.tg td,
	.tg th {
		border: 2px solid black;
		font-size: 14px;
		overflow: hidden;
		padding: 10px 5px;
		word-break: normal;
	}

	.tg .tg-h {
		font-size: 20px;
		text-align: center;
		vertical-align: middle;
	}

	.prize {
		width: 750px;
		position: relative;
		padding: 90px 60px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		background: white;
		background-image: var(--prize_border_hor);
		background-size: 95%;
		background-position: center;
		background-repeat: no-repeat;

		border-width: 8px;
		border-style: solid;
		border-image: linear-gradient(to bottom right, #f8ac48, #ffe66b) 1;
	}

	.prize h4,
	.prize h5 {
		z-index: 1;
	}

	.prize > .prize__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.prize > .prize__header > img {
		max-width: 250px;
		width: 70%;
		z-index: 1;
	}

	.prize > .prize__badge {
		position: absolute;
		opacity: 0.5;
		width: 25%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 0;
	}

	.prize > .prize__contents {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		padding: 0 2rem;
	}

	.prize > .prize__contents > div h5 {
		text-align: right;
	}

	.prize > .prize__p.over-500 {
		display: block;
	}

	.prize > .prize__p.under-500 {
		display: none;
	}

	.prize > .prize__footer {
		width: fit-content;
		margin-top: 1rem;
		position: relative;
		overflow: visible;
	}

	.prize > .prize__footer > h4 {
		letter-spacing: 5px;
	}

	.prize > .prize__footer > img {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 60px;
		opacity: 0.2;
	}

	.tg.horizon {
		display: none;
	}

	@media (max-width: 750px) {
		.prize {
			background-image: var(--prize_border_ver);
			width: 500px;
			height: 700px;
			gap: 50px;
		}

		.prize > .prize__p {
			line-height: 400%;
		}

		.result-popup__footer button {
			font-size: 16px;
		}

		.tg.vertical {
			display: none;
		}

		.tg.horizon {
			display: table;
		}
	}

	@media (max-width: 500px) {
		.prize {
			background-image: var(--prize_border_ver);
			width: 360px;
			height: 500px;
			gap: 20px;
			padding: 90px 50px;
		}

		.prize > .prize__p {
			line-height: 180%;
		}

		.prize > .prize__p.over-500 {
			display: none;
		}
		.prize > .prize__p.under-500 {
			display: block;
		}

		.result-popup__footer button {
			font-size: 12px;
		}

		.tg.vertical {
			display: none;
		}

		.tg.horizon {
			display: table;
		}
	}
</style>
