<script lang="ts">
	import { onMount } from 'svelte';
	import isAudioPlaying from '../store/autio';

	import { base } from '$app/paths';
	import song_womyntest from '$lib/assets/charactertest/womyntest.mp3';
	import song_mockexam from '$lib/assets/mockexam/sonata_nona.m4a';
	import song_worldcup from '$lib/assets/worldcup/春よ、強く美しく.mp3';

	let autioRef: HTMLAudioElement;
	let song: string;

	onMount(() => {
		const url = window.location.href;
		if (url.includes('womyn-character-test')) {
			song = song_womyntest;
		} else if (url.includes('master-mock-exam')) {
			song = song_mockexam;
		} else  if (url.includes('character-worldcup')) {
			song = song_worldcup;
		} else {
			song = song_womyntest; // default value
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