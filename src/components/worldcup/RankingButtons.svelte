<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

    import pcImgSrc from "$lib/images/worldcup/systems/Star_pc.png";
    import mobileImgSrc from "$lib/images/worldcup/systems/Star_mobile.png";

    function handleRestart() {
        goto(`${base}/character-worldcup/`);
    }

    function handleOtherGame() {
        window.open('https://article.womynarchive.com/play', '_blank');
    }
</script>

<div class="buttons">
    <div class="button-block mobile">
        <button class="button-black" on:click={handleOtherGame}>
            <div class="button-img"  style="background-image: url({mobileImgSrc})"></div>
            다른게임
        </button>
        <div class="button-black-back"></div>    
    </div>
    <div class="button-block">
        <button class="button-white" on:click={handleRestart}>다시하기</button>
        <div class="button-white-back mobile"></div>    
    </div>
    <button class="button-black pc" on:click={handleOtherGame}>
        <div class="button-img"  style="background-image: url({pcImgSrc})"></div>
        다른게임
    </button>
</div>

<style>
    .buttons {
		width: fit-content;
		height: fit-content;

		right: 4rem;
		bottom: 26rem;

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
			margin: 1.4rem 0 2rem 0;
            /* margin-top: 2.6rem; */
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