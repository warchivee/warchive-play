<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import questions from '$lib/assets/mockexam/questions';
	
	import PaperSheet from '$components/mockexam/PaperSheet.svelte';

	let currentPage = 0;
	const totalPages = questions.length;

	function goToNextPage() {
		currentPage = Math.min(currentPage + 1, questions.length - 1);
	}

	function goToPreviousPage() {
		currentPage = Math.max(currentPage - 1, 0);
	}

    function goBack() {
        history.back();
    }
</script>

<section>
    <div class="back-area">
        <button class="back-btn" on:click={goBack}>결과지로 돌아가기</button>
    </div>
    {#if questions[currentPage]}
        <PaperSheet category={questions[currentPage]} index={currentPage + 1} />
    {/if}

    <div class="footer">
        <div class="pagination">
            <button class="page-btn" on:click={goToPreviousPage} disabled={currentPage === 0}
                >이전</button
            >
            <h4>{currentPage + 1} / {totalPages}</h4>
            <button
                class="page-btn"
                on:click={goToNextPage}
                disabled={currentPage === questions.length - 1}>다음</button
            >
        </div>
    </div>
</section>

<style>
    .back-area {
        width: 100%;
        margin-bottom: 10px;

        .back-btn {
            font-size: 1rem;
        }
    }

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem;
	}

	.footer {
		width: 100%;

		.pagination {
			display: flex;
			justify-content: center;

			gap: 16px;
		}

		.page-btn {
			font-size: 1rem;
		}
	}

	@media (max-width: 750px) {
        .page-btn {
			font-size: 1.15rem;
		}
	}
</style>
