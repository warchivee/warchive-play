<script lang="ts">
    import isAudioPlaying from '../../store/autio';
    import { isMusicTooltip } from '../../store/worldcup';

    import tooltipImgSrc from '$lib/images/worldcup/systems/3_game_bubble.png';
	let showTooltip: boolean;

	const unsubscribeTooltip = isMusicTooltip.subscribe((value) => {
		showTooltip = value;
	});

    function handleOnClickBGM() {
        isAudioPlaying.set(!$isAudioPlaying);
        isMusicTooltip.set(false);
    }
</script>

<div class="bgm-container">
	<button class="audio" on:click={handleOnClickBGM}>
		<i
			class={`audio-icon fa-solid ${$isAudioPlaying ? 'fa-volume-high' : 'fa-volume-xmark'}`}
			aria-hidden="true"
		></i>
		<div class="audio-text">
			春よ、強く美しく - 龍崎一
		</div>
	</button>
    {#if showTooltip}
        <div class="tooltip" style="background-image: url({tooltipImgSrc})">
            아이콘을 눌러 <span>음악 소리</span> 끄기 / 켜기
        </div>
    {/if}
</div>

<style>
	.bgm-container {
        width: 100%;
		margin: 2.8rem;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .audio {
        all: unset;
        display: flex;
        align-items: center;
        text-align: center;
        gap: 23px;

        cursor: pointer;
    }

    .audio-icon,
    .audio-text {
		font-size: 2rem;
		letter-spacing: 0.25em;
		color: var(--color-text-1);
    }

    .audio-text {
		font-family: var(1);
    }

    .tooltip {
        background-size: cover;	
		background-position: center;
		background-repeat: no-repeat;

        position: absolute;
        width: 271px;
        height: 63px;

        top: 36px;
        z-index: 100;

        padding-top: 24px;
        align-items: center;
        text-align: center;

		color: var(--color-text-5);
    }

    span,
    .tooltip {
        font-family: var(--font-style-5);
        font-weight: bold;
		font-size: 1.5rem;
		letter-spacing: -0.1em;
    }

    span {
        color: var(--color-text-6);
    }

	@media (max-width: 750px) {
        .audio {        
            gap: 15px;
        }

        .audio-icon,
        .audio-text {
            font-size: 0.9rem;
            letter-spacing: 0em;
        }

        .tooltip {
            width: 164px;
            height: 30px;

            top: 15px;
            
            padding-top: 10px;
            align-items: center;
            text-align: center;
        }

        span,
        .tooltip {
            font-size: 0.9rem;
            letter-spacing: -0.1em;
        }
    }
</style>
