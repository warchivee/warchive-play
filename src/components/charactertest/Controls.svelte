<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import mobileLogo from '$lib/images/charactertest/mobile-logo.jpg';
	import isAudioPlaying from '../../store/autio';

	export let color = 'white';
	export let icon = 'play';
	export let progress = 0;

	export let showAutioMessage = false;
</script>

<div class="controls" style="--color: {color}">
	<div class="progress-bar">
		<div class="progress-circle" style="--progress: {progress === 100 ? 99 : progress}%"></div>
	</div>
	<div class="btns">
		<div>
			<i
				class="fas fa-{icon}"
				id="playBtn"
				aria-hidden="true"
				on:click={() => {
					if (icon === 'rotate-left') {
						goto(`${base}/womyn-character-test`);
					} else if (icon === 'play') {
						goto(`${base}/womyn-character-test/question`);
					}
				}}
			></i>
			<i class="fa-solid fa-forward-step"></i>
			<div class="audio">
				{#if showAutioMessage}
					<div class="font-gothic autio-message">이 버튼으로 BGM을 켜고 끌 수 있어요!</div>
				{/if}

				<i
					class={`volumn-btn fa-solid ${$isAudioPlaying ? 'fa-volume-high' : 'fa-volume-xmark'}`}
					aria-hidden="true"
					on:click={() => {
						isAudioPlaying.set(!$isAudioPlaying);
					}}
				></i>
				<div class="audio-copyright-wrap">
					<div class="audio-copyright">
						Elektronomia - Limitless [NCS Release] Music provided by NoCopyrightSounds
					</div>
				</div>
			</div>
		</div>
		<div>
			<img class="logo" src={mobileLogo} alt="모바일 로고" />
			<div class="font-gothic logo-text">여성서사 아카이브 프로젝트 - Warchive</div>
		</div>
	</div>
</div>

<style>
	.audio {
		display: flex;
		justify-content: center;
		gap: 10px;
		position: relative;
	}

	.autio-message {
		position: absolute;
		top: -55px;
		left: -10px;
		font-size: small;
		width: max-content;
		background: white;
		padding: 0.5rem 1rem;
		box-shadow: -2px 2px rgb(178 178 178 / 0.3);
	}

	.autio-message:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 20px;
		width: 0;
		height: 0;
		border: 7px solid transparent;
		border-top-color: #ffffff;
		border-bottom: 0;
		border-right: 0;
		margin-left: -3.5px;
		margin-bottom: -7px;
	}

	.audio-copyright-wrap {
		float: right;
		width: 125px;
		overflow: hidden;
		height: 100%;
		white-space: nowrap;
	}

	.audio .audio-copyright {
		font-size: 12px;
		white-space: nowrap;
		opacity: 0.5;
		animation: marquee 30s linear infinite;
	}

	@keyframes marquee {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-350%);
		}
	}

	.controls {
		width: 90%;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-bottom: 1rem;
	}

	.controls * {
		color: var(--color);
	}

	.progress-bar {
		height: 3px;
		background-color: var(--color);
		position: relative;
		margin-top: 20px;
	}

	.progress-circle {
		width: 14px;
		height: 14px;
		background-color: var(--color);
		border-radius: 50%;
		position: absolute;
		top: -5px;
		left: var(--progress);
		transition: left 0.5s ease;
	}

	.controls > .btns {
		widows: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding: 0 1rem;
	}

	.btns > div:first-child {
		display: flex;
		gap: 1.5rem;
	}

	.btns > div:last-child {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}

	.logo {
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
	}

	.logo-text {
		font-size: 0.8rem;
	}

	.controls > .btns i {
		color: var(--color);
		font-size: 24px;
		cursor: pointer;
	}

	.controls > .btns i:not(.no-click) {
		cursor: pointer;
	}

	.volumn-btn {
		text-shadow: 0 0 7px #fff;
	}

	@media (max-width: 600px) {
		.btns {
			display: flex;
			flex-direction: column;
		}
	}
</style>
