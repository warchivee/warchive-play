<script lang="ts">
	import axios from 'axios';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import Confirm from './Confirm.svelte';
	import Snackbar from '$components/Snackbar.svelte';

	export let setData;

	export let value = {};

	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	const number = tweened(0, {
		duration: 2000,
		easing: quintOut
	});

	let showModal = false;
	let loading = false;

	function moveSite() {
		window.open(`https://www.womynarchive.com?s=${value.title}`);
	}

	function setRate() {
		progress.set(0);
		number.set(0);

		setTimeout(function () {
			progress.set((value.rate ?? 0) / 100);
			number.set(value.rate ?? 0);
		}, 1000);
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

	// 어뷰징 방지 위해 ip 이용
	async function getUUIDbyIp() {
		try {
			const response = await axios.get('https://api.ipify.org?format=json');
			const ip = response.data.ip;

			const ipBuffer = new TextEncoder('utf-8').encode(ip);

			return crypto.subtle.digest('SHA-1', ipBuffer).then((hash) => {
				const hexArray = Array.from(new Uint8Array(hash));
				return hexArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
			});
		} catch (error) {
			console.error('UUID 생성 실패', error);
			throw error;
		}
	}

	async function handleConfirm() {
		try {
			loading = true;

			const uuid = await getUUIDbyIp();

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

			if (response.data?.action === 'UPDATE') {
				message = '기존 투표 내용을 수정하였습니다.';
			} else {
				message = '투표하였습니다.';
			}

			setData(response.data?.result);

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

	onMount(() => {
		if (value?.rate) {
			setRate();
		}
	});
</script>

{#if showModal}
	<Confirm
		title="2024 여성서사 베스트 콤비 - {value.section.name} 부문"
		message="{value.title} | {value.characters[0]}x{value.characters[1]} 콤비에 투표하시겠습니까?"
		caution="*비정상적인 투표는 합산되지 않습니다."
		onConfirm={handleConfirm}
		onCancel={handleCancel}
	/>
{/if}

<div class="candidate">
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

		<div class="btns">
			<button on:click={handleOpen}>투표하기</button>
			<button on:click={moveSite}>와카이브에서 작품 보기</button>
		</div>
	</div>

	<div class="images">
		<img src="https://picsum.photos/150/220" />
		<img src="https://picsum.photos/150/220" />
	</div>

	<div class="rate">
		<div class="title">
			<div>{value.title}</div>
			<div>{value.characters[0]}<span>X</span>{value.characters[1]}</div>
		</div>
		<div class="progress">
			<progress value={$progress}></progress>
			<div class="percentage">{Math.floor($number)}%</div>
		</div>
	</div>
</div>

<Snackbar {message} open={openSnackbar} />

<style>
	.candidate {
		min-width: 290px;
		width: 100%;

		position: relative;

		.images {
			display: flex;
			justify-content: space-between;
			gap: 3px;
			margin-bottom: 10px;

			img {
				width: 50%;
				object-fit: cover;
			}
		}

		.rate {
			display: flex;
			justify-content: space-between;
			align-items: last baseline;

			.title {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				text-align: left;

				div:first-child {
					color: rgba(255, 255, 255, 0.6);
				}

				div:last-child {
					font-size: 20px;
					font-weight: 700;

					@media (max-width: 450px) {
						font-size: 1.13rem;
					}

					span {
						font-weight: 100;
						margin: 0 4px;
					}
				}
			}

			.progress {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				font-size: 30px;
				font-weight: 700;
				width: 40%;

				@media (max-width: 450px) {
					font-size: 1.7rem;
				}

				progress {
					direction: rtl;
					appearance: none;
					width: 100%;
					height: 8px;
				}

				progress::-webkit-progress-bar {
					background-color: transparent;
					overflow: hidden;
				}

				progress::-webkit-progress-value {
					background: rgba(255, 255, 255, 0.6);
				}
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

			opacity: 0;
			height: 0;
			overflow: hidden;
			transition: 1s;

			.info {
				text-align: left;
				font-size: 0.9rem;
				padding: 20px;

				span {
					font-weight: 700;
				}

				p {
					margin-bottom: 20px;
				}
			}

			.btns {
				display: flex;
				flex-direction: column;
				gap: 5px;
				width: 80%;
				margin: 0 auto;

				button:last-child {
					background: black;
					color: white;
				}

				button {
					width: 100%;
				}
			}
		}

		&:hover .hover {
			opacity: 1;
			height: 100%;
			overflow-y: scroll;

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
		}
	}
</style>
