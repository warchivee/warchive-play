<script lang="ts">
	import isAudioPlaying from '../../store/autio';
	import { tooltip } from '../../store/exam';

	let showTooltip: boolean;

	const unsubscribeTooltip = tooltip.subscribe((value) => {
		showTooltip = value;
	});
</script>

<div class="warchive-copyright">
	<div class="tooltip{showTooltip ? '': ' hidden'}">클릭해서 노래를 켜고 끌 수 있습니다.</div>
	<button
		class="audio"
		on:click={() => {
			isAudioPlaying.set(!$isAudioPlaying);
			tooltip.set(false);
		}}
	>
		<i
			class={`volumn-btn fa-solid ${$isAudioPlaying ? 'fa-volume-high' : 'fa-volume-xmark'}`}
			aria-hidden="true"
		></i>
		<div class="audio-copyright-wrap">
			<div class="audio-copyright">12 Sonatas, Op.16 (Leonarda, Isabella)</div>
		</div>
	</button>
</div>

<style>
	.tooltip {
		font-size: 0.75rem;
		text-align: center;
		width: fit-content;
		height: fit-content;
		position: absolute;
		background-color: var(--color-bg-0);
		padding: 5px;

		transform: translateX(10%) translateY(-130%);
		
		&::before {
			content: '';
			position: absolute;
			bottom: -20px;
			left: 50%;
			transform: translateX(-50%);
			border-width: 12px;
			border-style: solid;
			border-color: var(--color-bg-0) transparent transparent transparent;
		}
	}

	.audio {
		all: unset;
		cursor: pointer;

		display: flex;
		font-size: 0.8rem;
		text-align: center;
		align-items: center;
		justify-content: center;
		gap: 6px;

		& [class*='volumn-btn'] {
			margin-top: 2px;
		}
	}

	[class*='hidden'] {
		display: none;
	}
</style>
