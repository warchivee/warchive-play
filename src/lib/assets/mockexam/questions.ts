import Img1 from '$lib/images/mockexam/questions/01.png';
import Img2 from '$lib/images/mockexam/questions/02.png';
import Img3 from '$lib/images/mockexam/questions/03.png';
import Img4 from '$lib/images/mockexam/questions/04.png';
import Img5 from '$lib/images/mockexam/questions/05.png';
import Img6 from '$lib/images/mockexam/questions/06.png';
import Img7 from '$lib/images/mockexam/questions/07.png';
import Img8 from '$lib/images/mockexam/questions/08.png';
import Img9 from '$lib/images/mockexam/questions/09.png';
import Img10 from '$lib/images/mockexam/questions/10.png';

const questions: {
	category: string;
	questions: {
		text: string;
		image?: { type: 'horizontal' | 'vertical'; add: string };
		example?: { type: 'centered' | 'lefted'; text: string };
		answer_type?: 'long' | 'short';
		answers: { number: number; text: string }[];
		correctAnswers: number[];
		search: string;
	}[];
}[] = [
	{
		category: '만화',
		questions: [
			{
				text: `다음은 귀신이 된 주인공 박자언이 극락왕생을 하기 위해 고등학생 시절로 되돌아가 여러 기묘한 존재들과의 에피소드를 다루는 판타지 웹툰 〈극락왕생〉에 등장하는 캐릭터 도명의 단골 대사이다. 빈칸에 들어갈 단어로 알맞은 것을 고르시오.`,
				image: { type: 'vertical', add: Img1 },
				example: {
					type: 'centered',
					text: '수리수리 마하수리 수수리 사바하.<br />길어져라 ( &emsp;&emsp; ) 석장.'
				},
				answers: [
					{
						number: 1,
						text: '감나무'
					},
					{
						number: 2,
						text: '오동나무'
					},
					{
						number: 3,
						text: '참나무'
					},
					{
						number: 4,
						text: '소나무'
					},
					{
						number: 5,
						text: '박달나무'
					}
				],
				correctAnswers: [3],
				search: '극락왕생',
			},
			{
				text: `웹툰 〈극락왕생〉에는 에피소드마다 그에 어울리는 테마곡이 있다. 다음 중 〈극락왕생〉 플레이리스트에 속하지 <u><strong>않는</strong></u> 노래를 고르시오.`,
				answer_type: 'long',
				answers: [
					{
						number: 1,
						text: '낭만고양이 - 체리필터'
					},
					{
						number: 2,
						text: '내게 남은 사랑을 다 줄께 - 왁스'
					},
					{
						number: 3,
						text: '비와 당신 - 럼블피쉬'
					},
					{
						number: 4,
						text: '인연 - 이선희'
					},
					{
						number: 5,
						text: '아틀란티스 소녀 - 보아'
					}
				],
				correctAnswers: [4],
				search: '극락왕생'
			},
			{
				text: `이세계를 구한 용사, 고등학생 명옥은 중년의 나이에 다시 용사가 되어야 한다. 웹툰 〈왕년엔 용사님〉에서 주인공 명옥이 고등학생 시절 마왕을 봉인해 이세계를 구하고 원래 자신의 세계로 돌아간 후, ( &emsp;&emsp; ) 년 뒤 봉인석에 금이 가기 시작했다. 빈칸에 들어갈 것으로 알맞은 숫자를 고르시오.`,
				image: { type: 'vertical', add: Img2 },
				answers: [
					{
						number: 1,
						text: '2년'
					},
					{
						number: 2,
						text: '50년'
					},
					{
						number: 3,
						text: '100년'
					},
					{
						number: 4,
						text: '500년'
					},
					{
						number: 5,
						text: '1000년'
					}
				],
				correctAnswers: [1],
				search: '왕년엔 용사님'
			},
			{
				text: `웹툰 〈정년이〉는 춘향이도 이몽룡도 전부 여자가 연기하는, 1950년대 여성국극을 소재로 한 만화이다. 고향에서 소리 잘 하기로 유명했던 주인공 윤정년은 매란국극단에 입단하기 위해 상경한다. 정년은 어느 도시 출신인가?`,
				answers: [
					{
						number: 1,
						text: '서울'
					},
					{
						number: 2,
						text: '창원'
					},
					{
						number: 3,
						text: '목포'
					},
					{
						number: 4,
						text: '순천'
					},
					{
						number: 5,
						text: '제주'
					}
				],
				correctAnswers: [3],
				search: '정년이'
			},
			{
				text: `다음은 왕위 계승자인 공주가 해적이 되어 겪는 모험 이야기를 담은 판타지 웹툰 〈합법해적 파르페〉의 주인공, 파르페의 대사이다. 다음 중 빈칸에 들어갈 이름으로 옳은 것을 고르시오.`,
				example: {
					type: 'centered',
					text: '내 이름은 파르페야.<br />나는 백포도 왕국의 왕 ( &emsp;&emsp; )가 아니라<br />합법해적 파르페를 선택하기로 했고 후회는 없어.'
				},
				answers: [
					{
						number: 1,
						text: '미네르바'
					},
					{
						number: 2,
						text: '아테나'
					},
					{
						number: 3,
						text: '디아나'
					},
					{
						number: 4,
						text: '플로라'
					},
					{
						number: 5,
						text: '헤카테'
					}
				],
				correctAnswers: [3],
				search: '합법해적 파르페'
			}
		]
	},
	{
		category: '영상',
		questions: [
			{
				text: `남성 주연의 영화를 미러링해 리부트한 코미디 SF 영화 〈고스트버스터즈(2016)〉에는 괴현상을 해결하기 위해 모인 물리학 박사, 초자연 현상 전문가, 무기 개발자, 지하철 역무원 등 매력적인 여성 주인공들이 등장한다. 이 영화의 주인공은 전부 몇 명인가?`,
				image: { type: 'vertical', add: Img3 },
				answers: [
					{
						number: 1,
						text: '3명'
					},
					{
						number: 2,
						text: '4명'
					},
					{
						number: 3,
						text: '5명'
					},
					{
						number: 4,
						text: '6명'
					},
					{
						number: 5,
						text: '7명'
					}
				],
				correctAnswers: [2],
				search: '고스트버스터즈'
			},
			{
				text: `〈블렛츨리 서클〉은 전쟁 중 독일군의 암호를 해독하는 임무를 맡았던 영국군 여성들이 전쟁이 끝난 후 다시 한번 뭉쳐 일반인의 신분으로 살인사건을 해결하는 미스터리 스릴러 드라마이다. 다음 중 이들이 겪었던 전쟁을 고르시오.`,
				image: { type: 'vertical', add: Img4 },
				answers: [
					{
						number: 1,
						text: '러일 전쟁'
					},
					{
						number: 2,
						text: '제2차 세계대전'
					},
					{
						number: 3,
						text: '신미양요'
					},
					{
						number: 4,
						text: '걸프 전쟁'
					},
					{
						number: 5,
						text: '크림 전쟁'
					}
				],
				correctAnswers: [2],
				search: '블렛츨리 서클'
			},
			{
				text: `과거 경찰이었지만 현재는 히키코모리 온라인 게임 중독자인 구경이(이영애 분)가 사이코패스 연쇄살인범을 쫓는 드라마 〈구경이〉에서, 구경이는 사람을 죽이려면 필요한 것은 (A)와 (B)라고 말하며 자신에게는 이것이 없다고 한다. (A)와 (B)가 알맞게 짝지어진 것은?`,
				answers: [
					{
						number: 1,
						text: 'A 용기 - B 시간'
					},
					{
						number: 2,
						text: 'A 조력자 - B 온전한 내 편'
					},
					{
						number: 3,
						text: 'A 동기 - B 증오'
					},
					{
						number: 4,
						text: 'A 멍청함 - B 오만함'
					},
					{
						number: 5,
						text: 'A 돈 - B 행동력'
					}
				],
				correctAnswers: [4],
				search: '구경이'
			},
			{
				text: `넷플릭스 오리지널 예능 〈사이렌: 불의 섬〉은 소방관, 경찰관, 경호원, 군인, 운동선수, 스턴트 배우인 여성 24명이 직업군별로 팀을 이뤄 경쟁하는 서바이벌 리얼리티 프로그램이다. 다음 중 운동선수 팀원들의 종목으로 알맞지 않은 것을 고르시오.`,
				image: { type: 'horizontal', add: Img5 },
				answers: [
					{
						number: 1,
						text: '카바디'
					},
					{
						number: 2,
						text: '씨름'
					},
					{
						number: 3,
						text: '유도'
					},
					{
						number: 4,
						text: '클라이밍'
					},
					{
						number: 5,
						text: '사격'
					}
				],
				correctAnswers: [5],
				search: '사이렌: 불의 섬'
			},
			{
				text: `영화 〈에브리씽 에브리웨어 올 앳 원스〉 모녀간의 사랑과 갈등을 멀티버스라는 독특한 소재로 풀어낸 SF 액션 코미디 영화다. 다음은 여러 멀티버스 세계의 에블린(양자경 분)을 나열한 것이다. 이 중 옳지 않은 것을 고르시오.`,
				answer_type: 'long',
				answers: [
					{
						number: 1,
						text: '핫도그 손 세계의 에블린'
					},
					{
						number: 2,
						text: '멀티 버스 점프 기술을 개발한 에블린'
					},
					{
						number: 3,
						text: '성공한 대배우 에블린'
					},
					{
						number: 4,
						text: '테판야키 요리사 에블린'
					},
					{
						number: 5,
						text: '국세청 직원 에블린'
					}
				],
				correctAnswers: [5],
				search: '에브리씽 에브리웨어 올 앳 원스'
			}
		]
	},
	{
		category: '공연',
		questions: [
			{
				text: `뮤지컬 〈실비아, 살다〉는 자신의 직업인 시인이 아닌 아내, 딸, 엄마의 역할을 요구받는 삶에 지쳐 10년마다 자살을 시도하는 천재 시인 실비아 플라스의 삶을 다룬 작품이다. 실비아는 테드와 처음 만났을 때 (A) 색 스카프를 하고 있었다. 테드는 항상 (B) 색이라고 하지만 실비아는 (B) 색이 아닌 (A) 색 스카프를 하고 있었다. (A) 와 (B) 가 알맞게 짝지어진 것을 고르시오.`,
				answers: [
					{
						number: 1,
						text: 'A 검은색 - B 하얀색'
					},
					{
						number: 2,
						text: 'A 파란색 - B 빨간색'
					},
					{
						number: 3,
						text: 'A 빨간색 - B 파란색'
					},
					{
						number: 4,
						text: 'A 빨간색 - B 초록색'
					},
					{
						number: 5,
						text: 'A 초록색 - B 빨간색'
					}
				],
				correctAnswers: [3],
				search: '2023 실비아 살다'
			},
			{
				text: `‘( &emsp;&emsp; ) 탄 물’은  뮤지컬 〈실비아, 살다〉의 넘버 중 하나이다. 다음 가사를 참고하여 빈칸에 들어갈 내용으로 알맞은 것을 고르시오.`,
				example: {
					type: 'lefted',
					text: '여기선 사과는 누가 해야할까<br />실수로 그랬거나 일부러 그랬겠지<br />아님 자기가 그런줄 모를 수도<br />우리 모두 ( &emsp;&emsp; ) 탄 물을 마신거야 ( &emsp;&emsp; )<br />마시면 ( &emsp;&emsp; ) 취하지 어쩌겠어'
				},
				answers: [
					{
						number: 1,
						text: '술'
					},
					{
						number: 2,
						text: '설탕'
					},
					{
						number: 3,
						text: '소금'
					},
					{
						number: 4,
						text: '독'
					},
					{
						number: 5,
						text: '꿀'
					}
				],
				correctAnswers: [1],
				search: '2023 실비아 살다'
			},
			{
				text: `다음은 라듐과 폴로늄을 발견하여 최초로 노벨상을 두 번 수상한 과학자 마리 퀴리와, 마리의 친구이자 라듐으로 고통받는 라듐 공장 직공인 안느에 대한 뮤지컬 〈마리 퀴리〉의 넘버 중 하나인 ‘또 다른 이름’의 가사 일부이다. 빈칸에 들어갈 내용으로 알맞은 것을 고르시오.`,
				image: { type: 'horizontal', add: Img6 },
				example: {
					type: 'lefted',
					text: '너는 누구<br />너는 무엇<br />너의 또 다른 이름은 나<br />넌 이상한 ( &emsp;&emsp; )야<br />넌 떠도는 이민자<br />넌 설쳐대는 폴렉<br />내 이름 없었지<br />홀로 작은 유성처럼 떠다니는 짙고 푸른 너<br />제 몸에 상처를 내어 폭발하는 독하고 모난 나'
				},
				answers: [
					{
						number: 1,
						text: '괴짜'
					},
					{
						number: 2,
						text: '여자'
					},
					{
						number: 3,
						text: '과학자'
					},
					{
						number: 4,
						text: '라듐'
					},
					{
						number: 5,
						text: '별'
					}
				],
				correctAnswers: [1],
				search: '마리 퀴리'
			},
			{
				text: `뮤지컬 <해적>은 여성들로만 구성된 페어가 있는 2인극으로 바다를 동경하는 루이스가 캡틴 잭, 명사수 앤과 검투사 메리를 만나 함께 해적선을 타며 보물을 찾아 로즈 아일랜드로 향하는 여정을 담은 작품이다. 다음 중 뮤지컬 〈해적〉에서 작중 언급된 해적의 규칙으로 옳지 <u><strong>않은</string></u> 것을 고르시오.`,
				answer_type: 'long',
				answers: [
					{
						number: 1,
						text: '전투 중에 도망친 해적은 무인도에 버려두고 간다.'
					},
					{
						number: 2,
						text: '여자와 어린아이는 배에 태우지 않는다.'
					},
					{
						number: 3,
						text: '숨겨진 보석의 위치를 지도에 표시할 때는 해골 표시를 해 놓는다.'
					},
					{
						number: 4,
						text: '칼을 뽑은 반란이 실패하면 주도자에게는 죽음뿐이다.'
					},
					{
						number: 5,
						text: '배에서 나이가 가장 어린 해적은 모자에 깃털을 꽂을 수 없다.'
					}
				],
				correctAnswers: [5],
				search: '2023 해적'
			},
			{
				text: `연극 <분장실>은 여성 4인극으로 무대 위가 아닌 무대 뒤 분장실에서 일어나는 사건들과 대화를 통해 배우들이 각자 가진 열정, 회한, 다양한 삶의 모습을 엿볼 수 있는 작품이다. 다음 중 연극 〈분장실〉의 클라이맥스에서 배우 A, B, D가 연기하는 작품으로 바른 것을 고르시오.`,
				answers: [
					{
						number: 1,
						text: '분장실'
					},
					{
						number: 2,
						text: '세 자매'
					},
					{
						number: 3,
						text: '갈매기'
					},
					{
						number: 4,
						text: '맥베스'
					},
					{
						number: 5,
						text: '한여름밤의 꿈'
					}
				],
				correctAnswers: [2],
				search: '2023 분장실'
			}
		]
	},
	{
		category: '서적',
		questions: [
			{
				text: `〈RADish〉는 래디컬 페미니스트로서의 삶과 운동, 미래세대 여성에 대한 책임, 여성의 경제적·정서적 자립, 비혼 여성 생활 팁 등 래디컬 페미니즘의 주요 의제와 실천 방법을 고민하고 기록하는 여성주의 잡지다.  〈RADish〉를 집필 및 출간하는 출판사의 이름으로 옳은 것을 고르시오.`,
				answers: [
					{
						number: 1,
						text: '싹튼'
					},
					{
						number: 2,
						text: '움튼'
					},
					{
						number: 3,
						text: '동튼'
					},
					{
						number: 4,
						text: '아무튼'
					},
					{
						number: 5,
						text: '부르튼'
					}
				],
				correctAnswers: [2],
				search: 'RADish'
			},
			{
				text: `다음 중 김초엽의 첫 SF 작품으로, 우리 외 생명체가 살고 있는 근미래 우주를 배경으로 한 SF 단편 소설 모음집의 제목으로 옳은 것은?`,
				answer_type: 'long',
				answers: [
					{
						number: 1,
						text: '우리가 빛의 속도로 갈 수 없다면'
					},
					{
						number: 2,
						text: '지구 끝의 온실'
					},
					{
						number: 3,
						text: '파견자들'
					},
					{
						number: 4,
						text: '방금 떠나온 세계'
					},
					{
						number: 5,
						text: '감정의 물성'
					},
					{
						number: 6,
						text: '관내분실'
					}
				],
				correctAnswers: [1],
				search: '김초엽'
			},
			{
				text: `동물학자이자 방송인인 루시 쿡의 〈암컷들〉은 수컷만을 연구 대상으로 삼아왔던 과거 생물학의 가부장적 프레임을 비판하고, 암컷들의 강렬한 삶을 담은 책이다. 이 책의 소제목에 들어갈 단어로 적절하지 <u><strong>않은</strong></u> 것을 <u><strong>모두</strong></u> 고르시오.`,
				answers: [
					{
						number: 1,
						text: '방탕'
					},
					{
						number: 2,
						text: '쟁취'
					},
					{
						number: 3,
						text: '순종'
					},
					{
						number: 4,
						text: '군림'
					},
					{
						number: 5,
						text: '조신'
					}
				],
				correctAnswers: [3, 5],
				search: '암컷들'
			},
			{
				text: `천선란의 소설 〈천 개의 파랑〉은 곧 폐기를 앞둔 기수 휴머노이드, 그 휴머노이드와 호흡을 맞추는 경주마, 그리고 그를 구원하는 인물이 등장하는 소설이다. 이 인물들의 이름으로 올바르게 짝지어진 것을 고르시오.`,
				answer_type: 'long',
				answers: [
					{
						number: 1,
						text: '콜리, 튜스데이, 연희'
					},
					{
						number: 2,
						text: '사이다, 웬즈데이, 연재'
					},
					{
						number: 3,
						text: '콜리, 투데이, 연재'
					},
					{
						number: 4,
						text: '콜라, 투모로우, 연희'
					},
					{
						number: 5,
						text: '콜리, 예스터데이, 연재'
					}
				],
				correctAnswers: [3],
				search: '천 개의 파랑'
			},
			{
				text: `다음 중 디지털 성범죄 N번방 사건을 최초 보도하며 최초로 신고한 이들의 이야기를 담은 서적 〈우리가 우리를 우리라고 부를 때: N번방 추적기와 우리의 이야기〉의 저자로 알맞은 것을 고르시오.`,
				answers: [
					{
						number: 1,
						text: '탐정단 불꽃'
					},
					{
						number: 2,
						text: '추적단 불꽃'
					},
					{
						number: 3,
						text: '개척단 불꽃'
					},
					{
						number: 4,
						text: '자경단 불꽃'
					},
					{
						number: 5,
						text: '경비단 불꽃'
					}
				],
				correctAnswers: [2],
				search: '우리가 우리를 우리라고 부를 때'
			}
		]
	},
	{
		category: '게임',
		questions: [
			{
				text: `고대 그리스를 배경으로 모험을 하는 오픈월드 잠입 액션 게임 〈Assassin's Creed Odyssey〉의 주인공 카산드라는 ‘독수리를 거느린 자’라는 별명을 가지고 있다. 이 독수리의 이름으로 바른 것을 고르시오.`,
				image: { type: 'horizontal', add: Img7 },
				answers: [
					{
						number: 1,
						text: '메데이아'
					},
					{
						number: 2,
						text: '메두사'
					},
					{
						number: 3,
						text: '이카로스'
					},
					{
						number: 4,
						text: '미네르바'
					},
					{
						number: 5,
						text: '아르테미스'
					}
				],
				correctAnswers: [3],
				search: `Assasin's Creed`
			},
			{
				text: `게임 〈Life is strange〉는 시간을 되감는 초능력을 가진 주인공 맥스와 클로이가 실종 사건을 쫓는 게임이다. 맥스는 초능력을 이용해서 친구 클로이의 주머니에 든 물건을 알아맞힌다. 이 중 클로이의 주머니에 있었던 물건이 <u><strong>아닌</strong></u> 것을 고르시오.`,
				image: { type: 'horizontal', add: Img8 },
				answers: [
					{
						number: 1,
						text: '자동차 열쇠'
					},
					{
						number: 2,
						text: '담배'
					},
					{
						number: 3,
						text: '동전'
					},
					{
						number: 4,
						text: '주차 위반 경고지'
					},
					{
						number: 5,
						text: '안경닦이'
					}
				],
				correctAnswers: [5],
				search: 'Life is strange'
			},
			{
				text: `다음은 포탈건을 이용해 각종 살인 로봇과 함정이 가득한 실험실에서 탈출하는 퍼즐 게임 〈Portal〉 시리즈의 엔딩 곡 ‘Still alive’의 가사 일부이다. 빈 칸에 들어갈 〈Portal〉 시리즈에 등장하는 주요 오브젝트로 올바른 것을 고르시오.`,
				example: {
					type: 'lefted',
					text: `Go ahead and leave me.<br />저를 놔두고 어서 가세요.<br />I think I prefer to stay inside.<br />전 여기 이 안에 머무르는 게 더 좋을 것 같아요.<br />Maybe you'll find someone else to help you.<br />어쩌면 당신을 도와줄 다른 이를 찾을지도 몰라요.<br />Maybe Black Mesa...<br />블랙 메사라든가...<br />THAT WAS A JOKE. (HAHA) FAT CHANCE.<br />물론 농담이에요. (하하) 세상에 그럴 리가.<br />Anyway, this ( &emsp;&emsp; ) is great.<br />어쨌거나, 이 ( &emsp;&emsp; ) 는 참 훌륭하네요.<br />It's so delicious and moist.<br />너무 맛있고 촉촉해요.<br />`
				},
				answers: [
					{
						number: 1,
						text: '푸딩'
					},
					{
						number: 2,
						text: '초콜릿'
					},
					{
						number: 3,
						text: '케이크'
					},
					{
						number: 4,
						text: '사탕'
					},
					{
						number: 5,
						text: '껌'
					}
				],
				correctAnswers: [3],
				search: 'Portal'
			},
			{
				text: `다음 중 그리스 로마 신화를 모티브로 각기 다른 무기를 휘두르는 네 명의 여성들이 한 팀이 되어 적 ‘타이탄’을 물리치는 벨트스크롤 액션 게임 〈Full Metal Furies〉 의 주인공 4명의 상징색이 올바르게 짝지어지지 <u><strong>않은</strong></u> 것을 <u><strong>모두</strong></u> 고르시오.`,
				image: { type: 'horizontal', add: Img9 },
				answers: [
					{
						number: 1,
						text: '트리스 - 보라색'
					},
					{
						number: 2,
						text: '에린 - 연두색'
					},
					{
						number: 3,
						text: '에린 - 노란색'
					},
					{
						number: 4,
						text: '알렉스 - 빨간색'
					},
					{
						number: 5,
						text: '메그 - 주황색'
					}
				],
				correctAnswers: [1, 3],
				search: 'Full Metal Furies'
			},
			{
				text: `한 번 멸망해 기계생명체들이 자연을 지배하는 세계를 탐험하는 오픈월드 게임 〈Horizon zero dawn〉에는 모계 부족 출신의 실력 있는 사냥꾼, 주인공 에일로이가 사냥할 수 있는 다양한 기계생명체들이 등장한다. 이 중 기계생명체와 그 모티브가 된 동물이 알맞게 짝지어진 것을 고르시오.`,
				image: { type: 'horizontal', add: Img10 },
				answers: [
					{
						number: 1,
						text: '스톰버드 - 상어'
					},
					{
						number: 2,
						text: '톨넥 - 기린'
					},
					{
						number: 3,
						text: '베히모스 - 독수리'
					},
					{
						number: 4,
						text: '롱레그 - 하마'
					},
					{
						number: 5,
						text: '와쳐 - 호랑이'
					}
				],
				correctAnswers: [2],
				search: 'Horizon zero dawn'
			}
		]
	}
];

export default questions;
