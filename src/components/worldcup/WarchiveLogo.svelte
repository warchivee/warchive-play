<script lang="ts">
    import logoImgSrc from '$lib/images/worldcup/systems/3_game_logo.png';

    function handleOnClick() {
        window.open(`https://www.womynarchive.com`, '_blank');
    }
</script>

<button on:click={handleOnClick}>
    <img class="warchive-logo" src={logoImgSrc} alt="와카이브_로고" />
</button>

<style>
    button {
        all: unset;
        position: absolute;
        
        width: fit-content;
        height: fit-content;
        left: 24px;
        bottom: 24px;

        cursor: pointer;
        padding: 0.6rem;
        border-radius: 1.2rem;

        transition: all 0.2s;
    }

    button:hover {
        background-color: rgba(240, 240, 240, 1);
    }

    .warchive-logo {
        width: 88px;
        height: 27px;

        opacity: 0.5;
    }

	@media (max-width: 750px) {
        button {
            left: 10px;
            bottom: 10px;
            padding: 0.4rem;
            border-radius: 0.8rem;
        }

        .warchive-logo {
            width: 49px;
            height: 15px;
        }
    }
</style>
