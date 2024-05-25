<script lang="ts">
	import { onMount } from 'svelte';

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import BGM from '$components/mockexam/BGM.svelte';
	import Warchive from '$components/mockexam/Warchive.svelte';
	import Certificate from '$components/mockexam/Certificate.svelte';
	import SnsShareBtns from '$components/SnsShareBtns.svelte';
	import OtherTest from '$components/mockexam/OtherTest.svelte';

	import { tested, tooltip, resetAnswers } from '../../../store/exam';

	import PrizeMark from '$lib/images/mockexam/systems/prize_mark.png';
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
			return 'https://i.ibb.co/R9VK7gY/mock-exam-share-1.png';
		} else if (grade === 2) {
			return 'https://i.ibb.co/vdB2vsG/mock-exam-share-2.png';
		} else if (grade === 3) {
			return 'https://i.ibb.co/61WgRZB/mock-exam-share-3.png';
		} else if (grade === 4) {
			return 'https://i.ibb.co/d0NFZ9s/mock-exam-share-4.png';
		} else if (grade === 5) {
			return 'https://i.ibb.co/f4QssWg/mock-exam-share-5.png';
		} else if (grade === 6) {
			return 'https://i.ibb.co/60t1ZB0/mock-exam-share-6.png';
		} else if (grade === 7) {
			return 'https://i.ibb.co/zxHTp1L/mock-exam-share-7.png';
		} else if (grade === 8) {
			return 'https://i.ibb.co/qCYpd2S/mock-exam-share-8.png';
		} else {
			return 'https://i.ibb.co/ZzsjPG7/mock-exam-share-9.png';
		}
	}

	const thumbnail = getSnsShareThumbnail();

	const formatDate = (): string => {
		const date = new Date();
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}년 ${month}월 ${day}일`;
	};

	const formattedDate = formatDate();

	let isShared = true;
	let showCertificate = false;

	onMount(() => {
		const unsubscribeAnswers = tested.subscribe((value) => {
			isShared = value ? false : true;
		});
	});
</script>

<BaseHead title="Warchive: 여성서사 고인물 모의고사" image={thumbnail} />

<section>
	<div class="head pc">
		<h1>여성서사 고인물 모의고사 성적표</h1>
		<div class="head-info pc">
			<BGM />
			<Warchive />
		</div>
	</div>
	<div class="head mobile">
		<BGM />
		<h1>여성서사 고인물 모의고사 성적표</h1>
		<Warchive />
	</div>

	<div class="result-popup">
		<div class="result-popup__header">
			<span>여성서사 고인물 모의고사 성적표</span>
			<div class="result-popup__xbutton font-gothic">
				<h5>x</h5>
			</div>
		</div>

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

		<div class="table-desc">
			<h5>*문제당 4점</h5>
		</div>

		<div class="result-popup__footer">
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					tooltip.set(false);
					goto(`${base}/master-mock-exam/review`);
				}}>정답 확인하기</button
			>
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					showCertificate = true;
				}}>고인물 인증서 발급하기</button
			>
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					resetAnswers();
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

	<div class="result mobile">
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

		<div class="table-desc">
			<h5>*문제당 4점</h5>
		</div>

		<div class="result-popup__footer">
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					tooltip.set(false);
					goto(`${base}/master-mock-exam/review`);
				}}>정답 확인하기</button
			>
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					showCertificate = true;
				}}>인증서 발급하기</button
			>
			<button
				class={isShared ? 'hidden' : ''}
				on:click={() => {
					resetAnswers();
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

	<OtherTest />

	<div class="container">
		<h5>{formattedDate}</h5>
		<div class="project-display">
			<div class="pc">
				<h2>여성서사 아카이브 프로젝트 와카이브</h2>
				<img class="display_prize__mark" src={PrizeMark} alt="인증서 꾸밈 요소" />
			</div>
			<div class="mobile">
				<h5>여성서사 아카이브 프로젝트</h5>
				<h1>와카이브</h1>
				<img class="display_prize__mark" src={PrizeMark} alt="인증서 꾸밈 요소" />
			</div>
		</div>
	</div>
</section>

{#if showCertificate}
	<Certificate
		image={thumbnail}
		onClose={() => {
			showCertificate = false;
		}}
	/>
{/if}

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

	.head {
		width: 100%;

		.head-info {
			display: flex;
			justify-content: space-between;
			margin-top: 2rem;
		}
	}

	.head + .result-popup {
		margin-top: -2rem;
	}

	.result-popup {
		width: 100%;
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
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

		& > * {
			position: relative;
			top: -2px;
			left: -0.5px;
		}
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
		margin: 2rem 0 0 0;
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

	.table-desc {
		width: 80%;
		height: 2rem;
		& > * {
			text-align: right;
		}
	}

	.tg.horizon {
		display: none;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1rem;
	}

	.project-display {
		display: flex;
		position: relative;
	}

	.display_prize__mark {
		position: absolute;
		width: 100px;
		top: -35%;
		right: -4%;
		opacity: 0.2;
	}

	@media (max-width: 750px) {
		.result-popup {
			display: none;
		}

		.result {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.tg {
			width: 100%;
			margin: 0;
		}

		.table-desc {
			width: 100%;
		}

		.result-popup__footer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 2rem 0rem 1rem 0rem;
			gap: 1.6rem;
		}

		.result-popup__footer button {
			width: 120px;
			font-size: 16px;
		}

		.tg.vertical {
			display: none;
		}

		.tg.horizon {
			display: table;
		}

		.project-display {
			margin-top: 0.5rem;
		}

		.project-display h1 {
			font-weight: 500;
			letter-spacing: 0.5rem;
		}

		.display_prize__mark {
			position: absolute;
			width: 90px;
			top: -6%;
			right: -30%;
			opacity: 0.2;
		}
	}
</style>
