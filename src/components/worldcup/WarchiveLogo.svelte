<script lang="ts">
    import logoImgSrc from '$lib/images/worldcup/systems/3_game_logo.png';
</script>

<img class="warchive-logo" src={logoImgSrc} alt="와카이브_로고" />

<style>
    .warchive-logo {
        position: absolute;
        width: 88px;
        height: 27px;

        left: 24px;
        bottom: 24px;
    }

	@media (max-width: 750px) {
        .warchive-logo {
            width: 49px;
            height: 15px;

            left: 10px;
            bottom: 10px;
        }
    }
</style>
