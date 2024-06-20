<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
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

    const certificates: string[] = [
        "https://i.ibb.co/hfmPZZq/result01.png",
        "https://i.ibb.co/G3p2Bg1/result02.png",
        "https://i.ibb.co/pJ82TXZ/result03.png",
        "https://i.ibb.co/vhNzFjZ/result04.png",
        "https://i.ibb.co/P1X2sdT/result05.png",
        "https://i.ibb.co/YWfMKXj/result06.png",
        "https://i.ibb.co/xmPyxj2/result07.png",
        "https://i.ibb.co/wzFtGkc/result08.png",
        "https://i.ibb.co/1vPQGGv/result09.png",
        "https://i.ibb.co/Fbz7S5X/result10.png",
        "https://i.ibb.co/R6xydfD/result11.png",
        "https://i.ibb.co/ZJMFf2Q/result12.png",
        "https://i.ibb.co/XXfKdK4/result13.png",
        "https://i.ibb.co/n1bVbwv/result14.png",
        "https://i.ibb.co/zxMww1R/result15.png",
        "https://i.ibb.co/q1jrm73/result16.png",
        "https://i.ibb.co/FzYpVvk/result17.png",
        "https://i.ibb.co/0mckxWB/result18.png",
        "https://i.ibb.co/6X3pq6J/result19.png",
        "https://i.ibb.co/x81y6dJ/result20.png",
        "https://i.ibb.co/1rY5WMH/result21.png",
        "https://i.ibb.co/v3gW5YW/result22.png",
        "https://i.ibb.co/ryr8R05/result24.png",
        "https://i.ibb.co/z406DXn/result23.png",
        "https://i.ibb.co/y4fXFkD/result25.png",
        "https://i.ibb.co/RyBD4KX/result26.png",
        "https://i.ibb.co/98ptypT/result27.png",
        "https://i.ibb.co/tZjs5CF/result28.png",
        "https://i.ibb.co/M2yMtcS/result29.png",
        "https://i.ibb.co/ccs2JLC/result30.png",
        "https://i.ibb.co/YdZrXyv/result31.png",
        "https://i.ibb.co/gP2vwVX/result32.png",
        "https://i.ibb.co/ZXfJZJC/result33.png",
        "https://i.ibb.co/rkQZLMf/result34.png",
        "https://i.ibb.co/Cw3tkFj/result35.png",
        "https://i.ibb.co/R6jnhk0/result36.png",
        "https://i.ibb.co/XDgDWT0/result37.png",
        "https://i.ibb.co/MpWnDDw/result38.png",
        "https://i.ibb.co/6yq1jKT/result40.png",
        "https://i.ibb.co/SdbFqb9/result39.png",
        "https://i.ibb.co/0yjxfRg/result42.png",
        "https://i.ibb.co/6sb0MCg/result41.png",
        "https://i.ibb.co/Hxtm56p/result43.png",
        "https://i.ibb.co/PCHq4p6/result44.png",
        "https://i.ibb.co/wL5qzdW/result45.png",
        "https://i.ibb.co/HP6CCZ3/result46.png",
        "https://i.ibb.co/prP1mRJ/result47.png",
        "https://i.ibb.co/L6cfhjD/result48.png",
        "https://i.ibb.co/KXZbzLC/result49.png",
        "https://i.ibb.co/ZJx3Cq6/result50.png",
        "https://i.ibb.co/s6w0yrx/result51.png",
        "https://i.ibb.co/bNXMR4F/result52.png",
        "https://i.ibb.co/y8XN8Hb/result53.png",
        "https://i.ibb.co/c6r2LkC/result54.png",
        "https://i.ibb.co/6BRxb54/result55.png",
        "https://i.ibb.co/r5YtqbY/result56.png",
        "https://i.ibb.co/zQQnzG7/result57.png",
        "https://i.ibb.co/ByZJSfb/result58.png",
        "https://i.ibb.co/T08md7J/result59.png",
        "https://i.ibb.co/c3T1q0n/result60.png",
        "https://i.ibb.co/xMShwWh/result61.png",
        "https://i.ibb.co/J3YqyKh/result62.png",
        "https://i.ibb.co/68WDcxv/result63.png",
        "https://i.ibb.co/GMnJkXq/result64.png",
    ];

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
        <img class="certificate-img" src={certificates[imageId - 1]} alt="" />
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
