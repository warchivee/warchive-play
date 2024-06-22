<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
    import Snackbar from '$components/worldcup/Snackbar.svelte';

    import shareImgSrc from '$lib/images/worldcup/systems/2_share_bubble.png';

	const url = $page?.url?.toString();

	// url 상에 쿼리 스트링 표기 시 '공유 url의 쿼리값' 으로 인식하여 & 를 인코딩해줌
	// 글자수 늘어나는 이슈로 encodeURIComponent 대신 &만 인코딩하는 방식으로 수정
	const encodeUrl = url?.replaceAll('&', '%26');

	export let title = '';
	export let content = '';

	export let hashtags = '';
	export let squareImage = '';
    export let rectangleImage ='';

    let openModal = false;
	let openSnackbar = false;

    function handleModal() {
        openModal = !openModal;
    }

	function shareLink() {
		navigator.clipboard.writeText(`${url}`);
		openSnackbar = true;

		setTimeout(() => {
			openSnackbar = false;
		}, 3000);
	}

	function shareFacebook() {
		window.open(`http://www.facebook.com/sharer/sharer.php?u=${encodeUrl}`);
	}

	function shareX() {
		window.open(
			`https://x.com/intent/tweet?text=${title + ' ' + content}&hashtags=${hashtags}&url=${encodeUrl}`
		);
	}

	function shareKakao() {
		Kakao.Share.sendDefault({
			objectType: 'feed',
			content: {
				title: title,
				description: content,
				imageUrl: squareImage,
				link: {
					mobileWebUrl: `${url}`,
					webUrl: `${url}`
				}
			},
		});
	}

	onMount(() => {
		Kakao.init(import.meta.env.VITE_KAKAO_KEY);

		return () => {};
	});
</script>

<button class="button-gray" on:click={handleModal}>공유하기</button>
{#if openModal}
    <div class="modal" style="background-image: url({shareImgSrc})">
        <div class="items">
            <i class="fa-solid fa-link" on:click={shareLink} aria-hidden="true"></i>
            <span>링크복사</span>
        </div>
        <div class="items">
            <i class="fa-brands fa-x-twitter" on:click={shareX} aria-hidden="true"></i>
            <span>X(트위터)</span>
        </div>
        <div class="items">
            <i class="fa-brands fa-facebook" on:click={shareFacebook} aria-hidden="true"></i>
        <span>페이스북</span>
        </div>
        <div class="items">
            <i class="fa-solid fa-comment" on:click={shareKakao} aria-hidden="true"></i>
            <span>카카오톡</span>
        </div> 
    </div>
{/if}
<Snackbar message="링크가 복사되었습니다." open={openSnackbar} />

<style>
    .modal {
		background-size: cover;	
		background-position: center;
		background-repeat: no-repeat;
        
        position: absolute;
        width: 279px;
        height: 95px;

        top: 50%;
        right: -4px;
        transform: translate(100%, -50%);
        z-index: 100;
        
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding-right: 15px;
        gap: 15px;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    i {
        width: 47px;
        height: 47px;
        line-height: 32px;
        padding: 8px;
        border-radius: 100%;
        color: var(--color-text-1);
        background-color: var(--color-text-4);
        text-align: center;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
    }

    i:hover {
        background-color: rgba(53, 77, 17, 0.9);
    }

    i:active {
        background-color: rgba(53, 77, 17, 0.8);
    }

    span {
		font-family: var(--font-style-5);
        font-weight: bold;
		font-size: 1.16rem;
		letter-spacing: -0.1em;
		color: var(--color-text-4);
    }

    @media (max-width: 750px) {
        .modal {
            width: 208px;
            height: 72px;

            padding-right: 14px;
            gap: 8px;
        }

        .items {
            gap: 0px;
        }

        i {
            width: 36px;
            height: 36px;
            line-height: 20px;
            padding: 8px;
            font-size: 16px;
        }

        span {
            font-size: 0.9rem;
            letter-spacing: -0.1em;
        }
    }
</style>
