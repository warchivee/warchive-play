<script lang="ts">
	import song from '$lib/assets/charactertest/womyntest.mp3';
	import { onMount } from 'svelte';
	import isAudioPlaying from '../store/autio';

	let autioRef: HTMLAudioElement;

	$: (() => {
		if (autioRef) {
			if ($isAudioPlaying) {
				autioRef.volume = 0.2;
				autioRef.play();
			} else {
				autioRef.pause();
			}
		}
	})();
</script>

<div>
	<main>
		<slot />
	</main>
</div>

<audio bind:this={autioRef} src={song} preload="auto" id="myAudio" loop playsinline></audio>
