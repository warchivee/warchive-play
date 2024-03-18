<script>
	import film from '$lib/images/film.png';

	export let size = 'default';

	const MAX_VIEW_WIDTH = 7496;
	const DEFAULT_IMG_SIZE = 1874;
	const SMALL_IMG_SIZE = 1186;

	const getImgCount = (size = 1) => {
		return Math.ceil(MAX_VIEW_WIDTH / size);
	};

	const imgInfo = {
		default: {
			image_size: DEFAULT_IMG_SIZE,
			image_count: getImgCount(DEFAULT_IMG_SIZE)
		},
		small: {
			image_size: SMALL_IMG_SIZE,
			image_count: getImgCount(SMALL_IMG_SIZE)
		}
	};

	let images =
		size === 'small'
			? new Array(imgInfo.small.image_count).fill(film)
			: new Array(imgInfo.default.image_count).fill(film);
</script>

<div
	class={`image-container ${size}`}
	style="--default-size: {imgInfo.default.image_size * imgInfo.default.image_count}px;
    --small-size: {imgInfo.small.image_size * imgInfo.small.image_count}px;
    "
>
	<div class={`slide`}>
		<div>
			{#each images as image}
				<img src={image} alt="여성서사 필름" />
			{/each}
		</div>
		<div>
			{#each images as image}
				<img src={image} alt="여성서사 필름" />
			{/each}
		</div>
	</div>
</div>

<style>
	.image-container {
		--duration: 700s; /* duration */
		--default-transform: calc(-1 * var(--default-size));
		--small-transform: calc(-1 * var(--small-size));

		overflow: hidden;
		position: absolute;
		opacity: 0.2;
	}

	.image-container.default {
		top: 30%;
		width: var(--default-size);
	}

	.image-container.small {
		top: 60%;
		width: var(--small-size);
	}

	.slide,
	.slide div {
		display: flex;
	}

	.image-container.default > .slide {
		width: calc(var(--default-size) * 2);
		animation: slideLeft var(--duration) linear infinite;
	}

	.image-container.small > .slide {
		width: calc(var(--small-size) * 2);
		height: 100px;
		animation: slideRight var(--duration) linear infinite;
	}

	@keyframes slideLeft {
		0% {
			transform: translate(0%);
		}
		100% {
			transform: translate(var(--default-transform));
		}
	}

	@keyframes slideRight {
		0% {
			transform: translate(var(--small-transform));
		}
		100% {
			transform: translate(0%);
		}
	}
</style>
