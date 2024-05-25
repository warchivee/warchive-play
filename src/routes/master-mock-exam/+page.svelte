<script lang="ts">
	import WarchiveSign from '$lib/images/mockexam/systems/warchive_sign.png';

	import BaseHead from '$components/BaseHead.svelte';
	import Cover from '$components/mockexam/Cover.svelte';
	import Footer from '$components/Footer.svelte';

	export let showAutioMessage = false;
</script>

<BaseHead title="Warchive: 여성서사 고인물 모의고사" image="https://i.ibb.co/FwcfC3Q/master.png" />

<section>
	<img src={WarchiveSign} alt="와카이브 낙서" />

	<Cover />

	<Footer />
</section>

<style>
	section {
		position: relative;
		width: 100%;
		max-width: 1000px;
		padding: 1rem;
	}

	img {
		opacity: 0.5;
		width: 40%;
		position: absolute;
		top: -100px;
		left: 50px;
	}

	@media (max-width: 700px) {
		img {
			left: 10px;
			top: -50px;
		}
	}
</style>
