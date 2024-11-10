<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';

	export let value = {
		id: 1,
		title: '해적',
		characters: ['메리', '앤'],
		intro:
			'해적들의 황금시대, 바다를 동경하는 소년 루이스가 캡틴 잭, 총잡이 앤과 검투사 메리를 만나 해적선을 타고 보물섬으로 향하는 여정',
		story:
			'해적으로 만나 결투를 시작하며 막상막하의 승부를 겨루지만, 둘 사이에서 점점 피어나는 사랑이라는 감정',
		rate: 23
	};

	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	const number = tweened(0, {
		duration: 2000,
		easing: quintOut
	});

	function moveSite() {
		window.open(`https://www.womynarchive.com?s=${value.title}`);
	}

	function setRate() {
		progress.set(0);
		number.set(0);

		setTimeout(function () {
			progress.set(value.rate / 100);
			number.set(value.rate);
		}, 1000);
	}

	onMount(() => {
		setRate();
	});
</script>

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
			<button>투표하기</button>
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

<style>
	.candidate {
		min-width: 320px;
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

				div:first-child {
					color: rgba(255, 255, 255, 0.6);
				}

				div:last-child {
					font-size: 20px;
					font-weight: 700;

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
		}
	}
</style>
