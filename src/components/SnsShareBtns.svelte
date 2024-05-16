<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Snackbar from './Snackbar.svelte';

	const url = $page?.url;

	export let title = '';
	export let content = '';

	export let hashtags = '';
	export let image = '';

	let openSnackbar = false;

	function shareLink() {
		navigator.clipboard.writeText(`${url}`);
		openSnackbar = true;

		setTimeout(() => {
			openSnackbar = false;
		}, 3000);
	}

	function shareFacebook() {
		window.open(`http://www.facebook.com/sharer/sharer.php?u=${url}`);
	}

	function shareTwitter() {
		window.open(
			`https://twitter.com/intent/tweet?text=${title + ' ' + content}&hashtags=${hashtags}&url=${url.toString().split('://')[1]}`
		);
	}

	function shareKakao() {
		Kakao.Share.sendDefault({
			objectType: 'feed',
			content: {
				title: title,
				description: content,
				imageUrl: image,
				link: {
					mobileWebUrl: `${url}`,
					webUrl: `${url}`
				}
			},
			buttons: [
				{
					title: '결과 보기',
					link: {
						mobileWebUrl: `${url}`,
						webUrl: `${url}`
					}
				}
			]
		});
	}

	onMount(() => {
		Kakao.init(import.meta.env.VITE_KAKAO_KEY);

		return () => {};
	});
</script>

<section>
	<p class="font-bold">친구에게 결과 공유하기</p>
	<div class="btns">
		<i class="fa-solid fa-link" on:click={shareLink} aria-hidden="true"></i>
		<i class="fa-brands fa-x-twitter" on:click={shareTwitter} aria-hidden="true"></i>
		<i class="fa-solid fa-comment" on:click={shareKakao} aria-hidden="true"></i>
		<i class="fa-brands fa-facebook" on:click={shareFacebook} aria-hidden="true"></i>
	</div>
</section>

<Snackbar message="링크가 복사되었습니다." open={openSnackbar} />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	p {
		font-size: 0.9rem;
	}

	.btns {
		display: flex;
		gap: 0.5rem;
	}

	.btns > i {
		background: white;
		border-radius: 50%;
		padding: 10px;
		cursor: pointer;
		z-index: 1;
		box-shadow: 0 5px 12px rgba(104, 104, 104, 0.1);
	}
</style>
