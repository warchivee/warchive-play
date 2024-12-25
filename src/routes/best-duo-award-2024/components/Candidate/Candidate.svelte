<script lang="ts">
	import axios from 'axios';

	import Snackbar from '$components/Snackbar.svelte';
	import Confirm from './Confirm.svelte';
	import Progress from './Progress.svelte';

	import VotedImg from '$lib/images/best-duo-award-2024/voted.png';

	export let voted = false;
	export let uuid = null;
	export let setData;

	export let value = {};

	const targetDate = new Date('2024-12-26T23:59:00+09:00'); // 한국 시간
	let isCountdownOver = targetDate - new Date() <= 0 ? true : false;

	let showModal = false;
	let loading = false;

	function moveSite() {
		window.open(`https://www.womynarchive.com?s=${value.title}`);
	}

	function handleOpen() {
		showModal = true;
	}

	let message = '';
	let openSnackbar = false;

	function openSnackbarMessage() {
		openSnackbar = true;

		setTimeout(() => {
			openSnackbar = false;
		}, 3000);
	}

	async function handleConfirm() {
		try {
			loading = true;

			const response = await axios.post(
				'https://script.google.com/macros/s/AKfycbyCJ9pqVZzvsn3-dyKQkCvwP5_o_c7LP0_MxKVBsAca4BCzW5zMqXEIRPudQ8oslMdISw/exec',
				{
					uuid: uuid,
					section: value.section.code,
					duo_id: value.id
				},
				{
					headers: {
						'Content-Type': 'text/plain;charset=utf-8'
					}
				}
			);

			message = '투표하였습니다.';

			setData(response.data);

			openSnackbarMessage();

			handleCancel();
		} catch (error) {
			console.error('Error update data:', error);
			return [];
		} finally {
			loading = false;
		}
	}

	function handleCancel() {
		showModal = false;
	}
</script>

{#if showModal}
	<Confirm
		section={value.section.name}
		title={value.title}
		duo={value.characters}
		onConfirm={handleConfirm}
		onCancel={handleCancel}
	/>
{/if}

<div class="candidate">
	<div class="content {value.selected ? 'selected' : ''}">
		<div class="hover">
			<div class="info">
				<div>
					<span>{value.title}</span>
					<p>
						{value.intro}
					</p>
				</div>

				<div>
					<span>{value.characters[0]}-{value.characters[1]}</span>
					<p>
						{value.story}
					</p>
				</div>
			</div>

			<button on:click={moveSite}>와카이브에서 작품 보기</button>
		</div>

		<div class="images">
			<img src={value.images[0]} />
			<img src={value.images[1]} />
		</div>

		<div class="title">
			<div>
				{value.title}
			</div>
			<div>
				{value.characters[0]}<span>X</span>{value.characters[1]}

				{#if value.selected}
					<img class="banner" src={VotedImg} alt="voted" />
				{/if}
			</div>
		</div>
	</div>

	<Progress rate={value?.rate} />

	{#if !isCountdownOver}
		<button class="vote-btn" disabled={value.selected} on:click={handleOpen}
			>{value.selected ? '투표 완료' : voted ? '투표 변경하기' : '투표하기'}</button
		>
	{/if}
</div>

<Snackbar {message} open={openSnackbar} />

<style>
	.candidate {
		display: flex;
		flex-direction: column;
		min-width: 290px;
		width: 100%;

		.content {
			position: relative;
			flex: 1;
		}

		.content.selected {
			box-shadow: 0 0 15px #ffd700;
		}

		.title {
			padding: 50px 10px 10px 10px;

			background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);

			position: absolute;
			bottom: 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: right;
			width: 100%;

			div:first-child {
				color: rgba(255, 255, 255, 0.6);
			}

			div:last-child {
				font-size: 20px;
				font-weight: 700;

				position: relative;

				.banner {
					position: absolute;
					bottom: 10px;
					width: 40px;
					height: auto;
					/* margin-left: 10px; */
				}

				@media (max-width: 450px) {
					font-size: 1.13rem;
				}

				span {
					font-weight: 100;
					margin: 0 4px;
				}
			}
		}

		.images {
			display: flex;
			justify-content: space-between;
			gap: 3px;
			height: 100%;

			img {
				width: calc(50% - 1.5px);
				object-fit: cover;
				aspect-ratio: 2 / 3;
			}
		}

		.hover {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: rgba(0, 0, 0, 0.9);

			overflow: hidden;

			opacity: 0;
			transition: opacity 0.4s;

			.info {
				text-align: left;
				font-size: 0.9rem;
				padding: 20px;
				overflow-y: scroll;

				/* 드래그 방지: 모바일에서 클릭 시 자동으로 드래그되어 사용에 불편함*/
				-ms-user-select: none;
				-moz-user-select: -moz-none;
				-webkit-user-select: none;
				-khtml-user-select: none;
				user-select: none;

				&::-webkit-scrollbar {
					width: 5px;
				}

				&::-webkit-scrollbar-thumb {
					background-color: gray;
					border-radius: 5px;
				}

				&::-webkit-scrollbar-track {
					background-color: transparent;
				}

				span {
					font-weight: 700;
				}

				p {
					margin-bottom: 20px;
				}
			}

			button {
				margin: 10px auto;
				width: 80%;

				visibility: hidden;

				transition: 0.1s 0.1s; /* 모바일에서 버튼 위치 클릭하면 바로 클릭되는 현상 방지 위한 지연*/
			}
		}

		.vote-btn {
			width: 100%;
			border-radius: 20px;
			background: transparent;
			border: 1px solid white;
			color: white;
			box-shadow: none;
		}

		.vote-btn:disabled {
			border: 1px solid #ffd700;
			color: #ffd700;
			cursor: default;
		}

		.content:hover .hover {
			opacity: 1;

			button {
				visibility: visible;
			}
		}
	}
</style>
