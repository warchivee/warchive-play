<script>
	export let onClick = () => {};
	export let color = 'purple';
</script>

<button
	on:click={onClick}
	style={`background-color: ${color === 'purple' ? '#783b99' : 'white'}; color: ${color === 'purple' ? 'white' : 'black'}`}
>
	<slot />
</button>

<style>
	button {
		border: 2px solid black;
		min-height: 3rem;
		font-size: 1.25rem;
		cursor: pointer;
		z-index: 1;
		box-shadow: 4px 4px black;
	}

	@media (max-width: 600px) {
		button {
			font-size: 1rem;
		}
	}
</style>
