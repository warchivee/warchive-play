<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import questions from '$lib/assets/mockexam/questions';

	import BaseHead from '$components/BaseHead.svelte';
	import PaperSheet from '$components/mockexam/PaperSheet.svelte';

	let currentPage = 0;
	const totalPages = questions.length;

  	function goToNextPage() {
    	currentPage = Math.min(currentPage + 1, questions.length - 1);
  	}

  	function goToPreviousPage() {
    	currentPage = Math.max(currentPage - 1, 0);
  	}
</script>

<!-- <BaseHead /> -->

<section>
	{#if questions[currentPage]}
	  <PaperSheet category={questions[currentPage]} index={currentPage + 1}/>
	{/if}
  
	<div class="footer">
		<div class="pagination">
			<button class="page-btn" on:click={goToPreviousPage} disabled={currentPage === 0}>이전</button>
			<h4>{currentPage + 1} / {totalPages}</h4>
			<button class="page-btn" on:click={goToNextPage} disabled={currentPage === questions.length - 1}>다음</button>	
		</div>

		<div class="submit">
			{#if currentPage === totalPages - 1}
				<button class="page-btn" on:click={() => {goto(`${base}/master-mock-exam/result`); }}
				>답안 제출하기</button>
			{/if}
		</div>
	</div>
</section>

<style>
 	section{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem;
	}

	.footer{
		width: 100%;

		.pagination{
			display: flex;
			justify-content: center;		
		
			gap: 16px;
		}
	
		.page-btn{
			font-size: 1.0rem;
		}

		.submit{
			display: flex;
			justify-content: center;
			margin: 20px;
		}
	}

	@media (max-width: 750px){
		.page-btn{
            font-size: 1.15rem;
		}
	}
</style>