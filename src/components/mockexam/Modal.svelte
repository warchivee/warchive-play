<script lang="ts">
    export let message = '';
    export let onConfirm = () => {};
    export let onCancel = () => {};
</script>

<div class="modal">
    <div class="modal-header">
        <span>안내</span>
        <button class="font-gothic" on:click={onCancel}>
            <h5>x</h5>
        </button>
    </div>
    <div class="modal-content">
        <div class="modal-msg">
            {message}
        </div>
        <div class="modal-btn">
            <button on:click={onConfirm}>네</button>
            <button on:click={onCancel}>아니오</button>    
        </div>
    </div>
</div>
  
<style>
    .modal {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        
        background-color: rgba(0, 0, 0, 0.3);
    }
  
    .modal-header {
        width: 420px;
        max-width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: black;
		padding: 0.2rem 1rem;

        & > span {
            color: white;
        }

        & > button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            width: 20px;

            & > * {
                position: relative;
                top: -2.0px;
                left: -0.5px;
            }
        }
    }

    .modal-content {
        width: 420px;
        max-width: 80%;
        height: fit-content;
        padding: 20px;        
        background-color: var(--color-bg-1);
		border: 2px solid black;
    }

    .modal-msg {
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: pre-wrap;
    }

    .modal-btn {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        gap: 10px;
    }
</style>