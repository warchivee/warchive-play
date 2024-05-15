<script lang="ts">
    import BGM from '$components/mockexam/BGM.svelte';
	import Question from '$components/mockexam/Question.svelte';
    import Warchive from '$components/mockexam/Warchive.svelte';
    
    export let category;
    export let index;
</script>

<div class="paper-sheet">
    <div class="head pc">
		<h4>- {index}교시 -</h4>
        <h1>{category.category} 영역</h1>
		<div class="head-info pc">
            <BGM />
            <Warchive />
        </div>
	</div>
    <div class="head mobile">
        <div class="audio-box">
            <BGM />
        </div>
        <h4>- {index}교시 -</h4>
        <h1>{category.category} 영역</h1>
        <Warchive />
    </div>
    
    <div class="body">
        <div>
            {#each category.questions.slice(0, 3) as question, curIndex}
                <Question category={index} question={question} index={curIndex + 1}/>
            {/each}
        </div>
        <div>
            {#each category.questions.slice(3, 5) as question, curIndex}
                <Question category={index} question={question} index={curIndex + 4}/>
            {/each}
        </div>
    </div>
</div>

<style>
    .paper-sheet{
        width: 100%;
        height: fit-content;
    }

    .head{
        border-bottom: 2px solid black;
        
        .head-info {
            display: flex;
            justify-content: space-between;
            margin-top: 4px;
        }
    }

    .body {
        width: 100%;
        display: flex;
        flex-direction: row;

        & > div {
            width: 50%;
            padding: 1rem;
        }
        
        & > div:first-child {
            border-right: 1px solid black;
        }
    }

	@media (max-width: 750px){
        .audio-box{
            width: fit-content;
        }

        .body{
            width: 100%;
            display: flex;
            flex-direction: column;

            & > div {
                width: 100%;
                padding: 1rem 0;
            }

            & > div:first-child {
                border: none;
            }
        }
    }
</style>