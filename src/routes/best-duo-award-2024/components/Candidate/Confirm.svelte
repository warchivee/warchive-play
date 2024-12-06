<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let section = '';
	export let title = '';
	export let duo = '';
	export let loading = false;
	export let onConfirm = () => {};
	export let onCancel = () => {};

	async function handleConfirm() {
		if (loading) return; // 중복 클릭 방지
		loading = true;
		try {
			await onConfirm(); // 확인 버튼 동작
		} finally {
			loading = false; // 로딩 해제
		}
	}

	onMount(() => {
		document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 막기
	});

	onDestroy(() => {
		document.body.style.overflow = ''; // 모달 닫힐 때 스크롤 복원
	});
</script>

<div class="modal" on:click|stopPropagation aria-hidden="true">
	<div class="modal-body">
		<div class="modal-header">
			<span>2024 여성서사 베스트 콤비 - {section} 부문</span>
		</div>
		<div class="modal-content">
			<div class="message">
				<div>{title}</div>
				<div>{duo[0]}<span>X</span>{duo[1]}</div>
				<div>콤비에 투표하시겠습니까?</div>
			</div>
			<div class="caution">*비정상적인 투표는 합산되지 않습니다.</div>
		</div>

		<div class="modal-btn">
			<button class="cancel" on:click={onCancel} disabled={loading}>취소</button>
			<button on:click={handleConfirm} disabled={loading}>
				{#if loading}
					<span class="loader"></span>
				{:else}
					확인
				{/if}
			</button>
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
		z-index: 999;
		left: 0;
		top: 0;

		background-color: rgba(0, 0, 0, 0.5);
		pointer-events: all; /* 배경 클릭을 비활성화 */
	}

	.modal-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		max-width: 420px;
		width: 80%;
		background: white;
		box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
		padding: 10px 20px;
		border-radius: 10px;

		color: black;
	}

	.modal-header {
		font-weight: 800;
		font-size: 1rem;
		margin-top: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #333;
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 1rem;
		gap: 10px;
		margin: 10px 0 15px 0;
		text-align: left;
	}

	.message {
		width: 100%;
		text-align: center;

		div:first-child,
		div:last-child {
			font-size: 1rem;
			font-weight: 400;
		}

		div:nth-child(2) {
			font-size: 1.5rem;
			font-weight: 700;
			margin: 10px 0;

			span {
				font-weight: 200;
				margin: 0 5px;
			}

			@media (max-width: 380px) {
				font-size: 1.3rem;
			}
		}
	}

	.caution {
		font-size: 0.8rem;
		opacity: 0.7;
	}

	.cancel {
		color: gray;
	}

	.modal-btn {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;

		& > button {
			margin: 0;
			padding: 0;
			height: 35px;
			flex: 1;
		}
	}

	button[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	.loader {
		border: 2px solid transparent;
		border-top: 2px solid #000;
		border-radius: 50%;
		width: 12px;
		height: 12px;
		animation: spin 0.6s linear infinite;
		display: inline-block;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
