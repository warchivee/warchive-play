<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

    import pcImgSrc from "$lib/images/worldcup/systems/Star_pc.png";
    import mobileImgSrc from "$lib/images/worldcup/systems/Star_mobile.png";

    export let handleShare;

    function handleRanking() {
        goto(`${base}/character-worldcup/ranking`);
    }

    function handleRestart() {
        goto(`${base}/character-worldcup/`);
    }

    function handleOtherGame() {
        window.open('https://article.womynarchive.com/play', '_blank');
    }
</script>

<div class="buttons pc">
    <button class="button-white" on:click={handleShare}>공유하기</button>
    <button class="button-black" on:click={handleRanking}>랭킹보기</button>
    <button class="button-black mobile" on:click={handleOtherGame}>
        <div class="button-img"  style="background-image: url({mobileImgSrc})"></div>
        다른게임
    </button>
    <button class="button-white" on:click={handleRestart}>다시하기</button>
    <button class="button-black pc" on:click={handleOtherGame}>
        <div class="button-img"  style="background-image: url({pcImgSrc})"></div>
        다른게임
    </button>
</div>

<style>
    .buttons {
		width: fit-content;
		height: fit-content;

		right: 20px;
		bottom: 100px;

		display: flex;
		flex-direction: column;
		position: absolute;
		gap: 2rem;
	}

    .button-img {
        position: absolute;

        top: -10px;
        right: 10px;
        width: 39px;
        height: 48px;
        transform: rotate(13deg);
    }

    @media (max-width: 750px) {
		.buttons {
            margin-top: 4rem;
            right: 0;
			bottom: 0;

			display: flex;
			flex-direction: row;
			position: relative;
		    gap: 1rem;
			
			font-family: var(--font-style-6);

            display: grid;
            grid-template-columns: 1fr 1fr;
		}

        .button-img {
            top: -8px;
            right: 12px;
            width: 19px;
            height: 20px;
            transform: rotate(0deg);
        }
	}
</style>