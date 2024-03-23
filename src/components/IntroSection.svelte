<script lang="ts">
	import { fade } from 'svelte/transition';

	import Button from '$components/Button.svelte';
	import Carousel from '$components/Carousel.svelte';
	import Others from '$components/Others.svelte';

	export let src = '';
	export let imgSrc = '';
	export let title = '';
	export let genre = '';
	export let intro = '';

	export let images: string[] = [];

	let openOthers = false;

	function closeOthersPopup() {
		openOthers = false;
	}

	function openOthersPopup() {
		openOthers = true;
	}

	function moveSite() {
		window.open('https://www.womynarchive.com/');
	}
</script>

<article in:fade={{ delay: 250, duration: 300 }}>
	<section class="intro">
		{#if src}
			<div>
				<iframe
					width="100%"
					height="100%"
					{src}
					{title}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
		{:else}
			<div>
				<img src={imgSrc} alt={title} />
				<div class="background-blur" style="background-image: url({imgSrc})" />
			</div>
		{/if}

		<div>
			<h3 class="font-bold text-left">{title}</h3>
			<p class="font-gothic text-left">
				{intro}
			</p>
			<Button onClick={moveSite}>
				<div style="color: white; font-size: 0.8rem">
					{title}, 어디서 {genre === 'game' ? '할' : '볼'} 수 있지?
				</div>
				<div style="color: white; font-size: 1.25rem">와카이브에서 확인하기</div>
			</Button>
		</div>
	</section>

	<section class="other">
		<button class="btn font-bold" on:click={openOthersPopup}
			>다른 여성서사 주인공 확인하기 ▶</button
		>
		<Carousel autoplay={2000} dots={false} perPage={3}>
			{#each images as image}
				<img class="carousel-img" src={image} alt="다른 여성서사 주인공" />
			{/each}</Carousel
		>
	</section>
</article>

<Others isOpen={openOthers} close={closeOthersPopup} />

<style>
	article {
		width: 100%;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(251, 251, 251, 0.9);
		border-radius: 20px;
		padding: 2rem;
		gap: 2rem;
		margin: 2rem 0;
	}

	section.intro {
		display: flex;
		width: 100%;
		gap: 3rem;
	}

	section.intro > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
		position: relative;
	}

	.background-blur {
		position: absolute;
		filter: blur(10px);
		background-size: cover;
		width: 100%;
		height: 100%;
		opacity: 0.4;
	}

	section.intro iframe {
		min-height: 300px;
	}

	section.intro img {
		width: 100%;
		max-height: 300px;
		object-fit: contain;
		border-radius: 15px;

		z-index: 1;
	}

	.other {
		width: 100%;
	}

	.other > .btn {
		width: 100%;
		text-align: right;
		cursor: pointer;
		margin-bottom: 10px;
		font-size: 0.9rem;
	}

	.carousel-img {
		width: 100%;
		height: 200px;
		padding: 5px;
		object-fit: cover;
		border-radius: 10px;
	}

	@media (max-width: 750px) {
		section {
			flex-direction: column;
		}

		.carousel-imgs {
			height: 200px;
		}
	}
</style>
