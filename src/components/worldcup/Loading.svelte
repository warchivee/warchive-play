<script lang="ts">
    import imgSrc from '$lib/images/worldcup/systems/4_loading.png';
    export let msg;
</script>

<div class="loading">
    <img src={imgSrc} alt="로딩중_이미지">
    <div class="gradation"></div>
    <div class="guidance">{msg}</div>
</div>

<style>
    .loading {
        position: relative;
        
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    }

    img {
        width: 364px;
        height: 364px;
    }

    .gradation {
        position: absolute;
        top: 0;
        width: 364px;
        height: 364px;
        background: linear-gradient(90deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 1));
        animation: gradient 2s ease infinite;
        background-size: 500% 100%;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
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