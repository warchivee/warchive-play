<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	
</script>

<section>
	<div class="music">음악(툴팁과 함께 컴포넌트화 예정)</div>
	<div class="ranking-container">
		<div class="title">여성서사 등장인물 월드컵 랭킹</div>
		<div class="guidance">* 랭킹 결과는 1시간마다 갱신됩니다 *</div>
		<!-- ranking-image에 이미지 적용 -->
		<!-- 내부에 div 적용 및 스크롤 스타일 지정 -->
		<div class="ranking-image">
			<div class="description">
				* 우승비율 = 최종 우승 횟수 / 전체 플레이수 * 승률 = 승리 횟수 / 전체 1 : 1 대결 수 *
			</div>
			<!-- 컴포넌트화 + 반복문 사용 -->
			<!-- 단, 1등은 안내 툴팁이 나오므로 반복문에서 제외 -->
			<div class="character-box">
				<div>이미지</div>
				<div class="character-info">
					<div class="tooltip">이름을 눌러 와카이브에서 검색하기</div>
					<div class="rank"><u>n위</u></div>
					<div class="title">작품명</div>
					<div class="name">캐릭터명</div>
				</div>
				<div class="character-data pc">
					<div class="winning-percentage">
						우승비율 NN.MM%
						비율 바
					</div>
					<div class="odds-of-winning">
						승률 NN.MM%
						비율 바
					</div>
				</div>
			</div>
		</div>
		<!-- PC에서 절대위치로 지정 -->
		<div class="buttons pc">
			<button on:click={() => { goto(`${base}/character-worldcup/`); }}>다시하기</button>
			<a href="https://article.womynarchive.com/play" target="_blank">다른게임</a>
		</div>
		<div class="buttons mobile">
			<!-- 공유 후 팝업 -->
			<button on:click={() => { goto(`${base}/character-worldcup/`); }}>다시하기</button>
			<a href="https://article.womynarchive.com/play" target="_blank">다른게임</a>
		</div>
		<div class="warchive-logo">와카이브 로고 사진(컴포넌트화 예정)</div>
	</div>
	<div class="footer">footer 컴포넌트</div>
</section>

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
