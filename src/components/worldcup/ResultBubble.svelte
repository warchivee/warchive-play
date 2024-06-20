<script lang="ts">
    import bubbleImgSrc from '$lib/images/worldcup/systems/5_result_bubble.png';

    export let target ='';

    function handleOnClick() {
        window.open(`https://www.womynarchive.com?s=${target}`, '_blank');
    }
</script>

<button class="bubble" style="background-image: url({bubbleImgSrc})" on:click={handleOnClick}>
    <span class="style-9-pc style-4-mobile">
        🤔 이 캐릭터,<br />어디에서 볼 수 있지?!
    </span>
    <span class="style-9-pc style-4-mobile">
        <b>말풍선 클릭</b>해서 🔍<br />
        <span>와카이브</span>에서 검색하기
    </span>
</button>

<style>
    .bubble {
        all: unset;
        
		background-size: cover;	
		background-position: center;
		background-repeat: no-repeat;

        width: 334px;
        height: 206px;
        /* width: 192px; */
        /* height: 118px; */

        position: absolute;
        left: -14rem;
        bottom: 6rem;

        display: flex;
		cursor: pointer;
    }

    .bubble > span {
        width: fit-content;
        height: fit-content;
        text-align: center;
        position: absolute;
    }

    .bubble > span:nth-child(1) {
        top: 3rem;
        left: 2rem;
    }

    .bubble > span:nth-child(2) {
        right: 4rem;
        bottom: 4rem;        
    }

    @media (max-width: 750px) {
        .bubble {            
            width: 167px;
            height: 103px;
            
            left: 10rem;
            top: -6rem;
        }
            
        .bubble > span:nth-child(1) {
            top: 1.4rem;
            left: 0.8rem;
        }

        .bubble > span:nth-child(2) {
            right: 1.8rem;
            bottom: 1.8rem;
        }
    }
</style>
