<script lang="ts">
	import { onMount } from 'svelte';
	import isAudioPlaying from '../store/autio';

	import { base } from '$app/paths';
	import song1 from '$lib/assets/charactertest/womyntest.mp3';
	import song2 from '$lib/assets/mockexam/sonata_nona.m4a';

	let autioRef: HTMLAudioElement;
	let song: string;

	onMount(() => {
		const url = window.location.href;
		if (url.includes('womyn-character-test')) {
			song = song1;
		} else if (url.includes('master-mock-exam')) {
			song = song2;
		} else {
			song = song1; // default value
		}
	});

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
