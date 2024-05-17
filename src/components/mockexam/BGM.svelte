<script lang="ts">
	import isAudioPlaying from '../../store/autio';
</script>

<div class="warchive-copyright">
	<button
		class="audio"
		on:click={() => {
			isAudioPlaying.set(!$isAudioPlaying);
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
</style>
