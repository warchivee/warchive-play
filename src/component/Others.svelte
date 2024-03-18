<script lang="ts">
	import { base } from '$app/paths';
	import Border from '$lib/images/border.png';
	import results from '$lib/assets/results';

	export let isOpen = false;
	export let close = () => {};

	const keys = Object.keys(results);
</script>

<div class="popup {isOpen ? 'open' : ''}" id="popup">
	<div class="popup-content">
		<div class="background" />
		<div class="items">
			{#each keys as key, index}
				<div class="item">
					<img class="font-gothic" src={results[key].image} alt={results[key].name} />
					<div>
						<div class="title">
							<div>
								<h3 class="font-gothic">{results[key].name}</h3>
								<h5 class="font-gothic">{results[key].title}</h5>
							</div>
							<a class="font-gothic" href="{base}/result/{key}" target="_blank">결과보기</a>
						</div>
						<p class="font-gothic keywords">{results[key].keyword}</p>
					</div>
				</div>

				{#if index !== keys.length - 1}
					<img src={Border} width="100px" alt="구분선" />
				{/if}
			{/each}
		</div>

		<button class="close font-gothic" id="closePopupBtn" on:click={close}>
			<p>결과로 돌아가기</p>
		</button>
	</div>
</div>

<style>
	.popup {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 9999;
	}

	.popup.open {
		display: block;
	}

	.popup-content {
		position: absolute;
		overflow: hidden;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 5px;
		background-color: #fbfbfb;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		overflow-y: scroll;
		height: 100%;
		width: 100%;
		max-width: 500px;

		background: linear-gradient(
			180deg,
			var(--color-bg-0) 0%,
			var(--color-bg-1) 15%,
			var(--color-bg-2) 50%
		);
	}

	.items {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5rem;
		padding: 20px;
	}

	.item {
		position: relative;
		width: 80%;
	}

	.item > div {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		background-color: #170c1e;
		padding: 10px 0px 10px 20px;
	}

	.title {
		display: flex;
		align-items: center;
	}

	.title > div {
		flex: 1;
	}

	.title a {
		background-color: #783b99;
		padding: 10px 20px;
		font-size: 0.9rem;
		cursor: pointer;
	}

	* {
		text-align: left;
		color: white;
	}

	h3 {
		font-weight: bold;
	}

	h5 {
		color: rgb(255, 255, 255, 0.8);
	}

	.item > img:first-child {
		width: 100%;
		height: 550px;
		object-fit: cover;
		border: 2px solid black;
		box-shadow: 10px 20px black;
	}

	.keywords {
		color: rgb(255, 255, 255, 0.8);
		word-spacing: 5px;
	}

	@media (max-width: 400px) {
		.item > img:first-child {
			height: 400px;
		}

		.keywords {
			font-size: 0.8rem;
		}
	}

	.close {
		position: sticky;
		bottom: 0;
		cursor: pointer;
		width: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #020202;
	}

	.close > * {
		color: white;
	}
</style>
