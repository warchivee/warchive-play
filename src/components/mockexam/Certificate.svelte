<script lang="ts">
	export let image;
	export let onClose = () => {};

	const stopPropagation = (event: MouseEvent) => {
		event.stopPropagation();
	};
</script>

<div class="modal" on:click={onClose}>
	<div class="pc" on:click={stopPropagation}>
		<div class="modal-header">
			<span>여성서사 고인물 인증서</span>
			<button class="font-gothic" on:click={onClose}>
				<h5>x</h5>
			</button>
		</div>
		<div class="modal-content">
			<img src={image} alt="고인물 인증서" />
			<div class="desc">마우스 우클릭으로 인증서 저장하기</div>
		</div>
	</div>
	<div class="mobile" on:click={stopPropagation}>
		<div class="header">
			<button class="font-gothic" on:click={onClose}>
				<h5>x</h5>
			</button>
		</div>
		<div class="content">
			<img src={image} alt="고인물 인증서" />
			<div class="desc">길게 눌러 인증서 저장하기</div>
		</div>
	</div>
</div>

<style>
	.modal {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;

		background-color: rgba(0, 0, 0, 0.6);
		overflow-y: auto;
	}

	.modal-header {
		width: 80vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: black;
		padding: 0.2rem 1rem;

		& > span {
			color: white;
		}

		& > button {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 20px;
			width: 20px;

			& > * {
				position: relative;
				top: -2px;
				left: -0.5px;
			}
		}
	}

	.modal-content {
		width: 80vw;
		height: fit-content;
		background-color: var(--color-bg-1);
		border: 2px solid black;

		display: flex;
		flex-direction: column;
		padding: 26px 0;
		gap: 20px;

		& img {
			width: 76%;
			aspect-ratio: 527 / 296;
			margin: 0px 12%;
		}
	}

	.desc {
		font-size: medium;
		text-align: center;
	}

	.content {
		width: 80vw;
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	@media (max-width: 750px) {
		.header {
			display: flex;
			justify-content: flex-end;
		}

		button {
			all: unset;

			margin: 10px;
			cursor: pointer;
		}

		button:hover {
			cursor: pointer;
		}

		button h5 {
			color: white;
		}

		.desc {
			color: white;
		}
	}

	@media (max-width: 500px) {
		.desc {
			font-size: small;
		}
	}
</style>
