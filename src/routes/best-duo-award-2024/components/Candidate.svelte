<script lang="ts">
	import axios from 'axios';
	import Confirm from './Confirm.svelte';
	import Snackbar from '$components/Snackbar.svelte';
	import Progress from './Progress.svelte';

	export let setData;

	export let value = {};

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
	<div class="content">
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
			<img src={value.images[0]} />
			<img src={value.images[1]} />
		</div>

		<div class="title">
			<div>{value.title}</div>
			<div>{value.characters[0]}<span>X</span>{value.characters[1]}</div>
		</div>
	</div>

	<!-- rate가 바뀌었을 때 progress 만 재렌더링 하도록 컴포넌트 분리 -->
	<Progress rate={value?.rate} />
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

		.title {
			padding: 50px 10px 10px 10px;

			background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);

			position: absolute;
			bottom: 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			text-align: right;
			width: 100%;

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

			height: 0;
			opacity: 0;
			overflow: hidden;
			transition: opacity 0.4s;

			.info {
				text-align: left;
				font-size: 0.9rem;
				padding: 20px;
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
				margin: 10px auto;
				flex: 1;

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
		}
	}
</style>
