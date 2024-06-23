<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

    import { certificates } from '$lib/assets/worldcup/characters';
    import Snackbar from '$components/worldcup/Snackbar.svelte';

	const url = $page?.url?.toString();

	// url 상에 쿼리 스트링 표기 시 '공유 url의 쿼리값' 으로 인식하여 & 를 인코딩해줌
	// 글자수 늘어나는 이슈로 encodeURIComponent 대신 &만 인코딩하는 방식으로 수정
	const encodeUrl = url?.replaceAll('&', '%26');

	export let title = '';
	export let content = '';

	export let hashtags = '';
	export let imageId: number;

    export let openModal;
    export let handleModal;

    let openSnackbar = false;

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
				imageUrl: certificates[imageId - 1],
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

<div class="modal-background">
    <div class="modal-container">
        <button class="x-button" on:click={handleModal}>
            <i class="fa-solid fa-x"></i>
        </button>
        
        <div class="head">최애 인증서 공유하기</div>
        <img class="certificate-img" src={certificates[imageId - 1]} alt="인증서 이미지" />
        <div class="foot">
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
    </div>
</div>
<Snackbar message="링크가 복사되었습니다." open={openSnackbar} />

<style>
    .modal-background {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .modal-container {
        position: relative;
        width: 870px;
        height: 570px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 2rem;
    }

    .x-button {
        all: unset;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 20px;

        & i {
            font-size: 1.6rem;
        }
    }

    .head {
        font-family: var(--font-style-5);
        font-weight: bold;
        font-size: 2.5rem;
    	letter-spacing: -0.1em;
        color: var(--color-text-5);
        text-align: center;
    }
    
    .certificate-img {
        width: 564px;
        height: 316px;
        margin: 2rem;
    }

    .foot {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 4rem;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .items i {
        width: 47px;
        height: 47px;
        line-height: 32px;
        padding: 8px;
        border-radius: 100%;
        color: var(--color-text-1);
        background-color: var(--color-text-5);
        text-align: center;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
    }


    .items i:hover {
        background-color: rgba(6, 27, 8, 0.8);
    }

    .items i:active {
        background-color: rgba(6, 27, 8, 0.75);
    }

    span {
		font-family: var(--font-style-5);
        font-weight: bold;
		font-size: 1.16rem;
		letter-spacing: -0.1em;
		color: var(--color-text-5);
    }

    @media (max-width: 750px) {
        .modal-container {
            width: 340px;
            height: 380px;
            padding: 0rem;
        }
        
        .x-button {
            right: 10px;
            top: 10px;

            & i {
                font-size: 1rem;
            }
        }
        
        .head {
            font-size: 1.5rem;
            letter-spacing: -0.1em;
        }     
        
        .certificate-img {
            width: 300px;
            height: 169px;
            margin: 4rem;
        }

        .foot {
            gap: 2rem;
        }

        .items {
            gap: 0px;
        }

        .items i {
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
