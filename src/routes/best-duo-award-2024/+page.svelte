<script lang="ts">
	import './styles.css';

	import axios from 'axios';
	import { onMount } from 'svelte';

	import BaseHead from '$components/BaseHead.svelte';
	import SnsShareBtns from '$components/SnsShareBtns.svelte';

	import Candidate from './components/Candidate/Candidate.svelte';
	import Particles from './components/Particles.svelte';
	import Countdown from './components/Countdown.svelte';

	import logo from '$lib/images/logo/logo.png';
	import AwardLogo from '$lib/images/best-duo-award-2024/award-logo.png';

	// 이미지 동적 할당 시 제대로 매핑되지 않는 이슈로 import 문 작성
	import family1_1 from '$lib/images/best-duo-award-2024/duos/family/1_1.jpg';
	import family1_2 from '$lib/images/best-duo-award-2024/duos/family/1_2.jpg';
	import family2_1 from '$lib/images/best-duo-award-2024/duos/family/2_1.jpg';
	import family2_2 from '$lib/images/best-duo-award-2024/duos/family/2_2.jpg';
	import family3_1 from '$lib/images/best-duo-award-2024/duos/family/3_1.jpg';
	import family3_2 from '$lib/images/best-duo-award-2024/duos/family/3_2.jpg';
	import family4_1 from '$lib/images/best-duo-award-2024/duos/family/4_1.jpg';
	import family4_2 from '$lib/images/best-duo-award-2024/duos/family/4_2.jpg';

	import friend1_1 from '$lib/images/best-duo-award-2024/duos/friend/1_1.jpg';
	import friend1_2 from '$lib/images/best-duo-award-2024/duos/friend/1_2.jpg';
	import friend2_1 from '$lib/images/best-duo-award-2024/duos/friend/2_1.jpg';
	import friend2_2 from '$lib/images/best-duo-award-2024/duos/friend/2_2.jpg';
	import friend3_1 from '$lib/images/best-duo-award-2024/duos/friend/3_1.jpg';
	import friend3_2 from '$lib/images/best-duo-award-2024/duos/friend/3_2.jpg';
	import friend4_1 from '$lib/images/best-duo-award-2024/duos/friend/4_1.jpg';
	import friend4_2 from '$lib/images/best-duo-award-2024/duos/friend/4_2.jpg';

	import romance1_1 from '$lib/images/best-duo-award-2024/duos/romance/1_1.jpg';
	import romance1_2 from '$lib/images/best-duo-award-2024/duos/romance/1_2.jpg';
	import romance2_1 from '$lib/images/best-duo-award-2024/duos/romance/2_1.jpg';
	import romance2_2 from '$lib/images/best-duo-award-2024/duos/romance/2_2.jpg';
	import romance3_1 from '$lib/images/best-duo-award-2024/duos/romance/3_1.jpg';
	import romance3_2 from '$lib/images/best-duo-award-2024/duos/romance/3_2.jpg';
	import romance4_1 from '$lib/images/best-duo-award-2024/duos/romance/4_1.jpg';
	import romance4_2 from '$lib/images/best-duo-award-2024/duos/romance/4_2.jpg';

	import rival1_1 from '$lib/images/best-duo-award-2024/duos/rival/1_1.jpg';
	import rival1_2 from '$lib/images/best-duo-award-2024/duos/rival/1_2.jpg';
	import rival2_1 from '$lib/images/best-duo-award-2024/duos/rival/2_1.jpg';
	import rival2_2 from '$lib/images/best-duo-award-2024/duos/rival/2_2.jpg';
	import rival3_1 from '$lib/images/best-duo-award-2024/duos/rival/3_1.jpg';
	import rival3_2 from '$lib/images/best-duo-award-2024/duos/rival/3_2.jpg';
	import rival4_1 from '$lib/images/best-duo-award-2024/duos/rival/4_1.jpg';
	import rival4_2 from '$lib/images/best-duo-award-2024/duos/rival/4_2.jpg';

	import obsess1_1 from '$lib/images/best-duo-award-2024/duos/obsess/1_1.jpg';
	import obsess1_2 from '$lib/images/best-duo-award-2024/duos/obsess/1_2.jpg';
	import obsess2_1 from '$lib/images/best-duo-award-2024/duos/obsess/2_1.jpg';
	import obsess2_2 from '$lib/images/best-duo-award-2024/duos/obsess/2_2.jpg';
	import obsess3_1 from '$lib/images/best-duo-award-2024/duos/obsess/3_1.jpg';
	import obsess3_2 from '$lib/images/best-duo-award-2024/duos/obsess/3_2.jpg';
	import obsess4_1 from '$lib/images/best-duo-award-2024/duos/obsess/4_1.jpg';
	import obsess4_2 from '$lib/images/best-duo-award-2024/duos/obsess/4_2.jpg';

	const SITE_TITLE = '2024 여성서사 베스트 콤비 어워드';
	const SITE_THUMBNAIL = 'https://i.ibb.co/ZHHWR0R/thumb-award.png';

	const sections = [
		{
			name: '가족',
			code: 'family'
		},
		{
			name: '우정',
			code: 'friend'
		},
		{
			name: '로맨스',
			code: 'romance'
		},
		{
			name: '라이벌',
			code: 'rival'
		},
		{
			name: '애증',
			code: 'obsess'
		}
	];

	const imageGroups = {
		family: import.meta.glob('$lib/images/best-duo-award-2024/duos/family/*', { eager: true }),
		friend: import.meta.glob('$lib/images/best-duo-award-2024/duos/friend/*', { eager: true }),
		romance: import.meta.glob('$lib/images/best-duo-award-2024/duos/romance/*', { eager: true }),
		rival: import.meta.glob('$lib/images/best-duo-award-2024/duos/rival/*', { eager: true }),
		obsess: import.meta.glob('$lib/images/best-duo-award-2024/duos/obsess/*', { eager: true })
	};

	const duos = {
		family: [
			{
				id: 1,
				title: '아케인',
				characters: ['파우더', '바이올렛'],
				images: [family1_1, family1_2],
				intro:
					'알 수 없는 폭발 때문에 지상과 지하로 나뉜 도시, 마법 공학이 불러온 혼란 속에서 서로 적이 된 두 자매 파우더와 바이올렛의 대립',
				story:
					'바이올렛과 모든 것을 함께하고 싶었던 동생 파우더와 점점 도를 넘는 동생의 행동을 이해할 수 없는 언니 바이올렛'
			},
			{
				id: 2,
				title: '위국일기',
				characters: ['코다이 마키오', '타쿠미 아사'],
				images: [family2_1, family2_2],
				intro:
					'갑작스러운 사고로 고아가 된 16살 타쿠미 아사. 안타까운 사정을 알게 된 이모 마키오가 자신의 집으로 아사를 데려오며 시작되는 가족 성장물',
				story:
					'극한의 내향인 이모 마키오와 정반대 성격의 외향인 조카 아사, 너무나도 다른 두 사람이지만 조금씩 맞춰가며 함께하는 삶'
			},
			{
				id: 3,
				title: '똑 닮은 딸',
				characters: ['길소명', '명소민'],
				images: [family3_1, family3_2],
				intro:
					'겉으로는 완벽하고 부러운 것 없어 보이는 엄마와 딸, 속을 들여다보면 이보다 치열하고 잔혹할 수 없는 가족 심리 스릴러',
				story:
					'엄마로부터 자유로워지고 싶은 딸과 자신의 딸에게 완벽한 인생을 선사해 주고 싶은 엄마의 끝없는 집착'
			},
			{
				id: 4,
				title: '브론테',
				characters: ['에밀리 브론테', '샬럿 브론테'],
				images: [family4_1, family4_2],
				intro:
					'여자가 글을 쓰는 일이 허락되지 않았던 빅토리아 시대, 글을 쓰며 자유를 꿈꾸는 브론테 자매들의 이야기',
				story:
					'함께 글을 쓰며 울고 웃다 의견 차이로 크게 다투기도 하지만, 결국 서로를 가장 아끼고 사랑하는 따뜻한 자매'
			}
		],
		friend: [
			{
				id: 5,
				title: '룩백',
				characters: ['후지노', '쿄모토'],
				images: [friend1_1, friend1_2],
				intro:
					'학교 신문에 네 컷 만화를 연재하는 후지노와 그의 팬인 그림 천재 쿄모토의 성장 이야기',
				story:
					'쿄모토의 그림에서 천재적인 재능을 발견하고 양가감정이 든 후지노이지만 함께 만화를 그리며 시작되는 둘의 인연'
			},
			{
				id: 6,
				title: '빅토리',
				characters: ['추필선', '장미나'],
				images: [friend2_1, friend2_2],
				intro:
					'연습실을 얻기 위해 시작한 치어리딩, 하지만 점점 더 진심이 되어가며 우리 모두를 응원하는 거제상고 밀레니엄 걸즈의 성장기',
				story:
					'춤과 의리로 이어진 그들의 찬란한 우정, 서로의 꿈을 진솔하게 응원하고 지지하는 진정한 친구'
			},
			{
				id: 7,
				title: '나이애드의 다섯 번째 파도',
				characters: ['다이애나 나이애드', '보니 스톨'],
				images: [friend3_1, friend3_2],
				intro:
					'다이애나 나이애드의 평생의 꿈, 쿠바-플로리다 맨몸 수영 바다 종단! 60세에 다시 시작된 그의 찬란한 도전기',
				story:
					'몇 번을 실패해도 다시 일어서는 나이애드와 그의 가장 든든한 지원군인 코치이자 최고의 친구 보니'
			},
			{
				id: 8,
				title: '일립예고 학생들',
				characters: ['유소이', '한솔'],
				images: [friend4_1, friend4_2],
				intro:
					'저마다의 개성이 뚜렷한 학생들이 일립예고에 입학하며 자신이 사랑하는 예술을 찾아가는 이야기',
				story:
					'친구 솔이를 만나기 위해 용기를 내 다시 세상 밖으로 나온 유소이와 그런 소이를 응원하고 그의 섬세한 감각을 사랑하는 한솔'
			}
		],
		rival: [
			{
				id: 9,
				title: '정년이',
				characters: ['허영서', '윤정년'],
				images: [rival1_1, rival1_2],
				intro:
					'‘여성국극’을 소재로 한 시대극이자, 최고의 국극 배우가 되기 위해 상경한 윤정년과 매란국극단원들의 성장 서사',
				story:
					'매란국극단원의 유망주 허영서, 그리고 시골에서 갓 올라온 촌뜨기 윤정년의 왕자가 되기 위해 시작된 선의의 경쟁'
			},
			{
				id: 10,
				title: '카산드라',
				characters: ['카산드라', '헬레네'],
				images: [rival2_1, rival2_2],
				intro:
					'트로이 전쟁이라는 역사적 사건을 카산드라와 헬레네라는 여성 인물의 관점으로 재해석한 뛰어난 정치·전략물',
				story:
					'추구하는 방향과 신념은 다르지만 자신의 뜻을 위해 분투하는 상대방을 바라보며 서로의 뛰어남을 인정하는 두 여자의 치열한 전략 싸움'
			},
			{
				id: 11,
				title: '강철부대W',
				characters: ['박보람', '양해주'],
				images: [rival3_1, rival3_2],
				intro:
					'최정예 군인 예비역들이 오로지 여성들로만 구성된 팀을 이뤄 출신 부대의 명예를 걸고 싸우는 밀리터리 서바이벌 프로그램',
				story:
					'저격수 박보람과 그의 부사수였던 양해주가 이제는 다른 팀으로 만나, 최고의 저격수 타이틀을 차지하기 위해 시작한 경쟁'
			},
			{
				id: 12,
				title: '자매전쟁',
				characters: ['원리온', '원해라'],
				images: [rival4_1, rival4_2],
				intro:
					'예술고등학교에서 1, 2등을 다투는 두 사람이 자매가 되면서 시작되는 경쟁과 하나둘 밝혀지는 비밀들',
				story:
					'유명한 조각가인 엄마의 대표작이 될 수 있는 건 단 한 사람뿐, 진짜 딸 자리를 두고 자신의 예술 세계를 펼쳐 나가는 원리온과 원해라'
			}
		],
		romance: [
			{
				id: 13,
				title: '해적',
				characters: ['메리', '앤'],
				images: [romance1_1, romance1_2],
				intro:
					'해적들의 황금시대, 바다를 동경하는 소년 루이스가 캡틴 잭, 총잡이 앤과 검투사 메리를 만나 해적선을 타고 보물섬으로 향하는 여정',
				story:
					'적으로 만나 결투를 시작하며 막상막하의 승부를 겨루지만, 둘 사이에서 점점 피어나는 사랑이라는 감정'
			},
			{
				id: 14,
				title: '정년이',
				characters: ['윤정년', '권부용'],
				images: [romance2_1, romance2_2],
				intro:
					'‘여성국극’을 소재로 한 시대극이자, 최고의 국극 배우가 되기 위해 상경한 윤정년과 매란국극단원들의 성장 서사',
				story: '팬과 국극 배우로 시작된 관계지만 함께 성장하며 그 이상으로 서로를 사랑하게 되는 둘'
			},
			{
				id: 15,
				title: '아케인',
				characters: ['바이올렛', '케이틀린'],
				images: [romance3_1, romance3_2],
				intro:
					'알 수 없는 폭발 때문에 지상과 지하로 나뉜 도시, 마법 공학이 불러온 혼란 속에서 서로 적이 된 두 자매의 대립',
				story:
					'빈민가 지하도시 출신의 수감자 바이올렛과 부유한 지상도시의 귀족 출신 집행자 케이틀린 사이의 친해질 수 없을 듯하면서도 깊어지는 관계'
			},
			{
				id: 16,
				title: '러브 라이즈 블리딩',
				characters: ['루', '잭키'],
				images: [romance4_1, romance4_2],
				intro: '1980년대 후반 미국 뉴멕시코의 한 체육관을 배경으로 하는 피땀 로맨스 서사',
				story:
					'서로를 위하는 방식에 차이는 있지만, 결국 함께 자유를 찾아가며 관계를 발전시키는 체육관 매니저 루와 보디빌딩 대회를 준비하는 잭키'
			}
		],
		obsess: [
			{
				id: 17,
				title: '당신이 나를 믿으신다면',
				characters: ['박수민', '경가나'],
				images: [obsess1_1, obsess1_2],
				intro:
					'사이비 종교인 진리선도계천교의 신자 경가나와 의도치 않게 엮여버린 박수민의 사이비 종교 탈출기',
				story:
					'우연히 엿들은 통화 내용으로 가나의 개인사를 재미 삼아 전부 맞혀버린 수민과 그의 말을 진심으로 믿으며 그를 구원자라고 여기는 가나'
			},
			{
				id: 18,
				title: '타원을 그리는 법',
				characters: ['유영애', '서미연'],
				images: [obsess2_1, obsess2_2],
				intro:
					'평범한 직장인 유주하부터 ML제약 회장의 딸 유영애까지, 여자를 사랑하는 여자들과 어딘가 수상한 ML제약',
				story:
					'서로에 대한 집착과 어딘가 비틀린 애정을 가진 둘 사이의 숨겨진 비밀과 진실은 무엇일지 지켜보게 하는 관계'
			},
			{
				id: 19,
				title: '공동급식구역',
				characters: ['라이타', '가솔린'],
				images: [obsess3_1, obsess3_2],
				intro:
					'먹는 게 중요할 나이, 급식을 쟁탈하기 위해 폭력은 옳지 않지만 대화가 통하지 않는다면 무력으로 제패하는 소년 만화의 정석',
				story:
					'중학교 시절부터 함께하며 각별한 관계였으나 모종의 사건으로 변해버린 라이타와 그런 그를 두고만 볼 수 없는 가솔린'
			},
			{
				id: 20,
				title: '애증화음',
				characters: ['선경화', '최인정'],
				images: [obsess4_1, obsess4_2],
				intro:
					'서화예술고등학교 피아노과에서 수석과 차석을 다투는 최인정과 선경화의 치열한 경쟁과 성장 이야기',
				story:
					'때로는 친구이고 때로는 라이벌로서 서로를 누구보다 미워하고 집착한 끝에, 역설적으로 가장 완벽한 서로의 이해자가 된 둘'
			}
		]
	};

	const today = new Date();

	let selectedSectionIndex = 0;
	let loading = false;
	let data = {};
	let uuid = null;

	async function loadData() {
		try {
			loading = true;

			const response = await axios.get(
				`https://script.google.com/macros/s/AKfycbyCJ9pqVZzvsn3-dyKQkCvwP5_o_c7LP0_MxKVBsAca4BCzW5zMqXEIRPudQ8oslMdISw/exec?uuid=${uuid}`
			);

			return response.data;
		} catch (error) {
			console.error('Error fetching ranking data:', error);
			return [];
		} finally {
			loading = false;
		}
	}

	function getRate(section) {
		return duos[section.code].map((duo, index) => ({
			...duo,
			rate: data?.rates?.[section.code]?.find((e) => e?.duo_id === duo.id)?.rate,
			section
		}));
	}

	function setData(newData) {
		data = { ...newData };
	}

	// 어뷰징 방지 위해 ip 이용
	async function getUUIDbyIp() {
		try {
			const response = await axios.get('https://api.ipify.org?format=json');
			const ip = response.data.ip;

			const ipBuffer = new TextEncoder('utf-8').encode(ip);

			return crypto.subtle.digest('SHA-1', ipBuffer).then((hash) => {
				const hexArray = Array.from(new Uint8Array(hash));
				return hexArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
			});
		} catch (error) {
			console.error('UUID 생성 실패', error);
			throw error;
		}
	}

	onMount(async () => {
		uuid = await getUUIDbyIp();
		const newData = await loadData(); // 데이터를 로드
		setData(newData);
	});
</script>

<BaseHead title={SITE_TITLE} image={SITE_THUMBNAIL} />

<Particles />

<section class="top">
	<div>
		<div class="title">
			<img src={AwardLogo} style="position: relative; z-index: 1;" height="40" alt="award logo" />
			<div class="year">
				<div class="stars">
					<span class="small-star">★</span>
					<span class="big-star">★</span>
				</div>
				<h2>2024년</h2>
				<div class="stars">
					<span class="big-star">★</span>
					<span class="small-star">★</span>
				</div>
			</div>
			<h1>여성서사<span>베스트 콤비</span>어워드</h1>
		</div>
		<div class="intro">
			<p>스토리의 중심에서 다채로운 관계를 보여준 <span>여성서사 캐릭터들.</span></p>
			<p>올해 여러분의 마음을 울린 최고의 여성 듀오는 누구인가요?</p>
		</div>
	</div>
</section>
<section class="middle">
	<Countdown />
	<p>베스트 콤비 발표일 : 2024년 12월 27일</p>
</section>

<section class="bottom">
	<ul>
		{#each sections as section, i}
			<li
				class={i === selectedSectionIndex ? 'selected' : ''}
				on:click={() => {
					selectedSectionIndex = i;
				}}
				aria-hidden="true"
			>
				{section.name}
			</li>
		{/each}
	</ul>

	{#if loading || !data || !uuid}
		<div class="loading-screen">
			<div class="spinner"></div>
			<p class="loading-text">불러오는 중...</p>
		</div>
	{:else}
		<p>
			총 4개의 후보 중 <span
				>마음에 드는 <u>{sections[selectedSectionIndex].name}</u> 콤비에 투표해주세요.</span
			>
		</p>

		<div class="candidate-list">
			{#each getRate(sections[selectedSectionIndex]) as duo}
				{@const votedId = data?.my_vote?.duo_ids?.[sections[selectedSectionIndex].code]}
				<Candidate
					{uuid}
					hasParticipated={data?.my_vote ? true : false}
					value={{ ...duo, voted: votedId === duo.id }}
					{setData}
				/>
			{/each}
		</div>
	{/if}
</section>

<SnsShareBtns
	message="공유하기"
	title={SITE_TITLE}
	content="올해 여러분의 마음을 울린 최고의 여성 듀오는 누구인가요?"
	hashtags="와카이브,여성서사베스트콤비어워드,여성서사"
	image={''}
	color="white"
/>

<footer>
	Copyright © {today.getFullYear()} by <img src={logo} alt="와카이브 로고" /> all right reserved.
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');

	* {
		color: white;
		text-align: center;
	}

	section {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		margin-bottom: 70px;
	}

	p > span {
		white-space: nowrap;
	}

	p > span {
		color: rgba(255, 255, 255, 0.6);
	}

	section.top {
		display: flex;
		flex-direction: column;
		gap: 50px;

		.intro {
			margin-top: 10px;
			font-size: 1rem;
		}

		div:first-child p {
			font-weight: 600;
		}

		.title {
			& * {
				font-weight: 900;

				text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
				background: rgb(253, 187, 45);
				background: linear-gradient(
					0deg,
					rgba(253, 187, 45, 1) 0%,
					rgba(238, 221, 172, 1) 100%
				); /* background 순서가 background-clip보다 위에있어야 함. */
				background-clip: text;
				-webkit-background-clip: text;
				color: transparent;
			}

			.year {
				display: flex;
				justify-content: center;
				align-items: baseline;
				gap: 10px;
			}

			.stars {
				/* font-family: 'Potta One', system-ui; */
			}

			.stars .big-star {
				font-size: 1.5rem;
			}

			.stars .small-star {
				font-size: 1rem;
			}

			h2 {
				font-size: 2rem;
			}

			h1 {
				font-size: 4rem;

				span {
					margin: 0 15px;
				}

				@media (max-width: 780px) {
					span {
						display: block;
					}
				}
			}
		}
	}

	.font-gray {
		color: rgba(255, 255, 255, 0.6);
	}

	p {
		color: rgba(255, 255, 255, 0.6);
		u {
			color: rgba(255, 255, 255, 0.6);
		}
		text-underline-offset: 3px;
	}

	h3 {
		color: white;
	}

	section.middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	section.bottom {
		display: flex;
		flex-direction: column;
		gap: 50px;

		ul {
			display: flex;
			justify-content: space-around;
			list-style-type: none;

			li {
				cursor: pointer;
				padding: 5px 10px;
				border-radius: 5px;
				font-weight: 500;
			}

			li.selected {
				background: rgba(255, 255, 255, 0.2);
			}
		}
	}

	.candidate-list {
		width: 90%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		row-gap: 20px;
		column-gap: 20px;
	}

	@media (max-width: 700px) {
		.candidate-list {
			grid-template-columns: 1fr;
		}
	}

	footer {
		font-size: 0.9rem;
		margin: 3rem 0;

		img {
			height: 22px;
			margin: 0 5px;
		}
	}

	.loading-screen {
		text-align: center;
	}

	.spinner {
		width: 50px;
		height: 50px;
		border: 5px solid #444;
		border-top: 5px solid #ffd700; /* 원하는 메인 색상으로 변경 */
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto;
	}

	.loading-text {
		margin-top: 20px;
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.9rem;
	}

	/* Spinner 애니메이션 */
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
