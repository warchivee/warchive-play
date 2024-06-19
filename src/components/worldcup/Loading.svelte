<script lang="ts">
    import imgSrc from '$lib/images/worldcup/systems/4_loading.png';
</script>

<img src={imgSrc} alt="로딩중_이미지">
<div class="guidance">···  결과 분석 중  ···</div>

<style>
    img {
        width: 364px;
        height: 364px;
    }

    .guidance {
        width: fit-content;

		font-family: var(--font-style-6);
		font-size: 2.5rem;
		letter-spacing: -0.1em;
		color: var(--color-text-5);
    }

	@media (max-width: 750px) {
        img {
            width: 182px;
            height: 182px;
        }

        .guidance {
            font-size: 1.3rem;
            letter-spacing: -0.1em;
        }
    }
</style>