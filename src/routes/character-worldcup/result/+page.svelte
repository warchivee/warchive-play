<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	
</script>

<section>
	<div class="music">음악(툴팁과 함께 컴포넌트화 예정)</div>
	<div class="result-container">
		<div class="title">당신의 최애 여성서사 등장인물은...</div>
		<div class="character-block">
			<div class="character-image">
				<div>이미지</div>
				<!-- character-info에 말풍선 이미지 삽입 -->
				<div class="character-info">
					<div>
						🤔 이 캐릭터,<br />어디에서 볼 수 있지?!
					</div>
					<div>말풍선 클릭해서 🔍<br />와카이브(보라색!!)에서 검색하기</div>
				</div>
			</div>
			<div class="character-item">작품명(보라색!!)</div>
			<div class="character-name">캐릭터 이름</div>
		</div>
		<!-- PC에서 절대위치로 지정 -->
		<div class="buttons pc">
			<!-- 공유 후 팝업 -->
			<button>공유하기</button>
			<button on:click={() => { goto(`${base}/character-worldcup/ranking`); }}>랭킹보기</button>
			<button on:click={() => { goto(`${base}/character-worldcup/`); }}>다시하기</button>
			<a href="https://article.womynarchive.com/play" target="_blank">다른게임</a>
		</div>
		<div class="buttons mobile">
			<!-- 공유 후 팝업 -->
			<!-- pc와 달리 mobile은 사각 버튼 & 2x2 구조 -->
			<button>공유하기</button>
			<button on:click={() => { goto(`${base}/character-worldcup/ranking`); }}>랭킹보기</button>
			<button on:click={() => { goto(`${base}/character-worldcup/`); }}>다시하기</button>
			<a href="https://article.womynarchive.com/play" target="_blank">다른게임</a>
		</div>
		<div class="warchive-logo">와카이브 로고 사진(컴포넌트화 예정)</div>
	</div>
	<div class="footer">footer 컴포넌트</div>
</section>
<!-- if 문으로 보이기 & 절대 위치로 화면 덮기 (컴포넌트화 OK) -->
<div class="modal-background">
	<div class="modal-container">
		<div>X(닫기 버튼)</div>
		<div class="head">
			최애 인증서 공유하기
		</div>
		<div class="body">
			이미지
		</div>
		<div class="foot">
			4개 버튼 새로 구현 (컴포넌트)
		</div>
	</div>
</div>

<style>
	section {	
		width: 100%;
		min-width: 375px;
		max-width: 1000px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		box-sizing: border-box;
		background-color: bisque;
	}
</style>
