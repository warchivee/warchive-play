<script lang="ts">
    import { characters } from "$lib/assets/worldcup/characters";
    import bubbleImgSrc from "$lib/images/worldcup/systems/6_rank_bubble.png";

    export let index: number;
    export let character_id: number;
    export let championship_rate: number;
    export let winning_rate: number;

    const id: number = parseInt(character_id);

    function handleOnClick() {
        switch(id) {
            case 16:
                window.open(`https://www.womynarchive.com?s=The Last Of Us Part II`, '_blank');
                break;
            case 17:
            case 18:
                window.open(`https://www.womynarchive.com?s=Life is Strange`, '_blank');
                break;
            case 45:
                window.open(`https://www.womynarchive.com?s=Assassin's Creed`, '_blank');
                break;
            default:
                window.open(`https://www.womynarchive.com?s=${characters[id - 1].item}`, '_blank');
        }
    }
</script>

<div class="character-box">
    <img src={characters[id - 1].image} alt={`${characters[id - 1].name} 이미지`} />
    <div class="character-info">
        <div class="rank">
            {index + 1}위
            {#if index === 0}
                <div class="ranking-bubble" style="background-image: url({bubbleImgSrc})">
                    제목을 눌러 <span>와카이브</span>에서 검색하기
                </div>
            {/if}	        
        </div>
        <button class="item" on:click={handleOnClick}>{characters[id - 1].item}</button>
        <div class="name">
            {characters[id - 1].name}
            <div class="character-data mobile">
                <div class="bar-percentage">
                    <div class="percentage" style="width: {championship_rate}%;"></div>
                    <span class="percentage-detail">우승비율 &nbsp; {championship_rate}%</span>
                </div>
                <div class="bar-percentage">
                    <div class="percentage" style="width: {winning_rate}%;"></div>
                    <span class="percentage-detail">승률 &nbsp; {winning_rate}%</span>
                </div>
            </div>
        </div>
    </div>
    <div class="character-data pc">
        <div class="pc">
            우승비율 {championship_rate}%
            <div class="bar-percentage pc">
                <div class="percentage pc" style="width: {championship_rate}%;"></div>
            </div>    
        </div>
        <div class="pc">
            승률 {winning_rate}%
            <div class="bar-percentage pc">
                <div class="percentage pc" style="width: {winning_rate}%;"></div>
            </div>    
        </div>
    </div>
</div>

<style>
    .character-box {
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 20px;
    }

    .character-box > img {
        width: 150px;
        height: 150px;
    }

    .character-info {
        display: flex;
        flex-direction: column;

        width: 300px;
        margin: 0px 26px;
        color: var(--color-text-5);

        .rank {
            font-family: var(--font-style-6);
            font-size: 2rem;
            letter-spacing: -0.1em;
            text-decoration: underline;
            margin-bottom: 1rem;
            position: relative;
        }

        .item {
            all: unset;
            width: fit-content;
            font-family: var(--font-style-5);
            font-weight: bold;
            font-size: 2rem;
            letter-spacing: -0.1em;
            color: var(--color-text-6);
            cursor: pointer;
            text-decoration: none;
            transition: all 0.1s;
        }

        .item:hover {
            color: #6800AD;
        }

        .name {
            font-family: var(--font-style-5);
            font-weight: bold;
            font-size: 3rem;
            letter-spacing: -0.1em;
            line-height: 3rem;
        }
    }

    .ranking-bubble {
		background-size: cover;	
		background-position: center;
		background-repeat: no-repeat;

        position: absolute;
        width: 271px;
        height: 62px;
        left: 3.2rem;
        top: -1.4rem;

        padding: 2% 2% 0 0;
        text-align: center;

        font-family: var(--font-style-6);
        font-size: 1.5rem;
        letter-spacing: -0.1em;

        & span {
            font-weight: bold;
            font-size: 1.5rem;
            letter-spacing: -0.1em;
            color: var(--color-text-6);
        }
    }

    .character-data > div:nth-child(1) {
        margin-bottom: 1rem;
    }

    .character-data div {
        font-family: var(--font-style-6);
        font-size: 2rem;
        letter-spacing: -0.1em;
    }

    .bar-percentage {
        width: 250px;
        height: 16px;
        border: 1px solid var(--color-text-5);
    }

    .percentage {
        height: 100%;
        background-color: var(--color-text-5);
    }

	@media (max-width: 750px) {
        .character-box {
            margin: 0 0 1rem 0;
        }

        .character-box > img {
            width: 75px;
            height: 75px;
        }

        .character-info {
            width: 196px;
            margin: 0px 0 0 10px;

            .rank {
                font-size: 1rem;
                margin-bottom: 0.6rem;
            }

            .item {
                font-size: 1rem;
            }

            .name {
                font-size: 1.7rem;
                line-height: 1.7rem;
            }
        }

        .ranking-bubble {
			background-size: 100% 100%;
            width: 164px;
            height: 30px;
            left: 2.2rem;
            top: -0.6rem;

            padding: 1% 2% 0 0;
            text-align: center;

            font-size: 0.9rem;

            & span {
                font-size: 0.9rem;
            }
        }
    
        .character-data {
            display: flex;
            margin-top: 0.4rem;
        }

        .character-data > div:nth-child(1) {
            margin-bottom: 0;
            margin-right: 1rem;
        }

        .character-data > div {
            margin-bottom: 0;
            width: calc(50% - 0.5rem);
            height: 1rem;
        }

        .bar-percentage {
            position: relative;
            border: 1px solid rgba(181, 141, 194, 0.8);
            border-radius: 1rem;
            overflow: hidden;
        }

        .percentage {
            background-color: rgba(181, 141, 194, 0.8);
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }

        .percentage-detail {
            position: absolute;
            top: 0;
            left: 2px;
            font-size: 0.6rem;
            line-height: 0.8rem;
            letter-spacing: 0em;
        }
    }
</style>
