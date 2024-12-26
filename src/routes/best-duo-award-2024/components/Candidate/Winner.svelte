<script lang="ts">
	import Crown from '$lib/images/best-duo-award-2024/crown.png';
	import PatternLeft from '$lib/images/best-duo-award-2024/pattern_left.png';
	import PatternRight from '$lib/images/best-duo-award-2024/pattern_right.png';

	export let category;
	export let details;

	function moveSite() {
		window.open(`https://www.womynarchive.com?s=${details.title}`);
	}
</script>

<div class="winner-container">
	<img src={Crown} alt="crown" />
	<div class="duo-section">{category} 부문 베스트 콤비</div>
	<div class="duo-container">
		<img src={details.images[0]} alt="Left character" />
		<img src={details.images[1]} alt="Right character" />
		<div class="title">
			<p>
				<img src={PatternLeft} alt="pattern" />
				{details.title}
				<img src={PatternRight} alt="pattern" />
			</p>
		</div>

		<div class="hover">
			<div class="info">
				<div>
					<span>{details.title}</span>
					<p>
						{details.intro}
					</p>
				</div>
				<div>
					<span>{details.characters[0]}-{details.characters[1]}</span>
					<p>
						{details.story}
					</p>
				</div>
			</div>
			<button on:click={moveSite}>와카이브에서 작품 보기</button>
		</div>
	</div>
	<hr />
	<div class="characters">
		{details.characters[0]} <span>X</span>
		{details.characters[1]}
	</div>
	<hr />
</div>

<style>
	.winner-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		min-width: 290px;
		width: 50%;
		margin: 30px 0;

		@media (max-width: 450px) {
			width: 100%;
			margin: 20px 0;
		}

		& > img {
			width: 50px;
			height: auto;
		}

		.duo-section {
			font-size: 1.8rem;
			font-weight: 900;
			text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
			background: rgb(253, 187, 45);
			background: linear-gradient(
				0deg,
				rgba(253, 187, 45, 1) 0%,
				rgba(238, 221, 172, 1) 100%
			); /* background 순서가 background-clip보다 위에있어야 함. */
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
		}

		.duo-container {
			display: flex;
			justify-content: space-between;
			position: relative;
			width: 100%;
			height: 100%;
			gap: 3px;
			margin: 10px 0;

			& > img {
				width: calc(50% - 2px);
				object-fit: cover;
				aspect-ratio: 2 / 3;
			}

			.title {
				position: absolute;
				bottom: 0px;
				left: 0px;
				width: 100%;
				height: 50%;
				background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);

				display: flex;
				flex-direction: column;
				justify-content: flex-end;

				& p {
					margin-bottom: 4px;
					font-size: 1.2rem;
					font-weight: bold;
					color: rgba(255, 255, 255, 0.6);

					& img {
						width: 50px;
						height: 16px;
						margin: 0 8px;
					}
				}
			}

			.hover {
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: 10;
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
		}

		.duo-container:hover .hover {
			opacity: 1;

			button {
				visibility: visible;
			}
		}

		hr {
			width: 100%;
			height: 1px;
			border: none;
			background-color: rgba(255, 255, 255, 0.4);
			margin: 8px 0;
		}

		.characters {
			font-size: 1.4em;
			font-weight: 700;

			& span {
				font-weight: 100;
			}
		}
	}
</style>
