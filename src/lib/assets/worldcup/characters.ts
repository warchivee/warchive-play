import img01 from '$lib/images/worldcup/game/game01.png';
import img02 from '$lib/images/worldcup/game/game02.png';
import img03 from '$lib/images/worldcup/game/game03.png';
import img04 from '$lib/images/worldcup/game/game04.png';
import img05 from '$lib/images/worldcup/game/game05.png';
import img06 from '$lib/images/worldcup/game/game06.png';
import img07 from '$lib/images/worldcup/game/game07.png';
import img08 from '$lib/images/worldcup/game/game08.png';
import img09 from '$lib/images/worldcup/game/game09.png';
import img10 from '$lib/images/worldcup/game/game10.png';
import img11 from '$lib/images/worldcup/game/game11.png';
import img12 from '$lib/images/worldcup/game/game12.png';
import img13 from '$lib/images/worldcup/game/game13.png';
import img14 from '$lib/images/worldcup/game/game14.png';
import img15 from '$lib/images/worldcup/game/game15.png';
import img16 from '$lib/images/worldcup/game/game16.png';
import img17 from '$lib/images/worldcup/game/game17.png';
import img18 from '$lib/images/worldcup/game/game18.png';
import img19 from '$lib/images/worldcup/game/game19.png';
import img20 from '$lib/images/worldcup/game/game20.png';
import img21 from '$lib/images/worldcup/game/game21.png';
import img22 from '$lib/images/worldcup/game/game22.png';
import img23 from '$lib/images/worldcup/game/game23.png';
import img24 from '$lib/images/worldcup/game/game24.png';
import img25 from '$lib/images/worldcup/game/game25.png';
import img26 from '$lib/images/worldcup/game/game26.png';
import img27 from '$lib/images/worldcup/game/game27.png';
import img28 from '$lib/images/worldcup/game/game28.png';
import img29 from '$lib/images/worldcup/game/game29.png';
import img30 from '$lib/images/worldcup/game/game30.png';
import img31 from '$lib/images/worldcup/game/game31.png';
import img32 from '$lib/images/worldcup/game/game32.png';
import img33 from '$lib/images/worldcup/game/game33.png';
import img34 from '$lib/images/worldcup/game/game34.png';
import img35 from '$lib/images/worldcup/game/game35.png';
import img36 from '$lib/images/worldcup/game/game36.png';
import img37 from '$lib/images/worldcup/game/game37.png';
import img38 from '$lib/images/worldcup/game/game38.png';
import img39 from '$lib/images/worldcup/game/game39.png';
import img40 from '$lib/images/worldcup/game/game40.png';
import img41 from '$lib/images/worldcup/game/game41.png';
import img42 from '$lib/images/worldcup/game/game42.png';
import img43 from '$lib/images/worldcup/game/game43.png';
import img44 from '$lib/images/worldcup/game/game44.png';
import img45 from '$lib/images/worldcup/game/game45.png';
import img46 from '$lib/images/worldcup/game/game46.png';
import img47 from '$lib/images/worldcup/game/game47.png';
import img48 from '$lib/images/worldcup/game/game48.png';
import img49 from '$lib/images/worldcup/game/game49.png';
import img50 from '$lib/images/worldcup/game/game50.png';
import img51 from '$lib/images/worldcup/game/game51.png';
import img52 from '$lib/images/worldcup/game/game52.png';
import img53 from '$lib/images/worldcup/game/game53.png';
import img54 from '$lib/images/worldcup/game/game54.png';
import img55 from '$lib/images/worldcup/game/game55.png';
import img56 from '$lib/images/worldcup/game/game56.png';
import img57 from '$lib/images/worldcup/game/game57.png';
import img58 from '$lib/images/worldcup/game/game58.png';
import img59 from '$lib/images/worldcup/game/game59.png';
import img60 from '$lib/images/worldcup/game/game60.png';
import img61 from '$lib/images/worldcup/game/game61.png';
import img62 from '$lib/images/worldcup/game/game62.png';
import img63 from '$lib/images/worldcup/game/game63.png';
import img64 from '$lib/images/worldcup/game/game64.png';

export type { Character };
export { characters };

interface Character {
	id: number;
	image: string;
	item: string;
	name: string;
	wins: number;
}

const characters: Character[] = [
	{
		id: 1,
		image: img01,
		item: '합법해적 파르페',
		name: '파르페',
		wins: 0
	},
	{
		id: 2,
		image: img02,
		item: '합법해적 파르페',
		name: '반',
		wins: 0
	},
	{
		id: 3,
		image: img03,
		item: '합법해적 파르페',
		name: '벨',
		wins: 0
	},
	{
		id: 4,
		image: img04,
		item: '합법해적 파르페',
		name: '도결문',
		wins: 0
	},
	{
		id: 5,
		image: img05,
		item: '극락왕생',
		name: '박자언',
		wins: 0
	},
	{
		id: 6,
		image: img06,
		item: '극락왕생',
		name: '도명',
		wins: 0
	},
	{
		id: 7,
		image: img07,
		item: '극락왕생',
		name: '관음',
		wins: 0
	},
	{
		id: 8,
		image: img08,
		item: '극락왕생',
		name: '문수',
		wins: 0
	},
	{
		id: 9,
		image: img09,
		item: '정년이',
		name: '윤정년',
		wins: 0
	},
	{
		id: 10,
		image: img10,
		item: '정년이',
		name: '허영서',
		wins: 0
	},
	{
		id: 11,
		image: img11,
		item: '정년이',
		name: '권부용',
		wins: 0
	},
	{
		id: 12,
		image: img12,
		item: '정년이',
		name: '백도앵',
		wins: 0
	},
	{
		id: 13,
		image: img13,
		item: '약속의 네버랜드',
		name: '엠마',
		wins: 0
	},
	{
		id: 14,
		image: img14,
		item: '왕년엔 용사님',
		name: '이명옥',
		wins: 0
	},
	{
		id: 15,
		image: img15,
		item: '왕년엔 용사님',
		name: '루카 비젠타',
		wins: 0
	},
	{
		id: 16,
		image: img16,
		item: '더 라스트 오브 어스 2',
		name: '엘리 윌리엄스',
		wins: 0
	},
	{
		id: 17,
		image: img17,
		item: '라이프 이즈 스트레인지',
		name: '맥스 콜필드',
		wins: 0
	},
	{
		id: 18,
		image: img18,
		item: '라이프 이즈 스트레인지',
		name: '클로이 프라이스',
		wins: 0
	},
	{
		id: 19,
		image: img19,
		item: '마틸다',
		name: '마틸다',
		wins: 0
	},
	{
		id: 20,
		image: img20,
		item: '구경이',
		name: '구경이',
		wins: 0
	},
	{
		id: 21,
		image: img21,
		item: '언내추럴',
		name: '미스미 미코토',
		wins: 0
	},
	{
		id: 22,
		image: img22,
		item: '닥터후 시즌 12',
		name: '닥터',
		wins: 0
	},
	{
		id: 23,
		image: img23,
		item: '크레이지 엑스 걸프렌드',
		name: '레베카 번치',
		wins: 0
	},
	{
		id: 24,
		image: img24,
		item: '에브리씽 에브리웨어 올 앳 원스',
		name: '에블린 왕',
		wins: 0
	},
	{
		id: 25,
		image: img25,
		item: '블랙 위도우',
		name: '나타샤 로마노프',
		wins: 0
	},
	{
		id: 26,
		image: img26,
		item: '헝거 게임',
		name: '캣니스 에버딘',
		wins: 0
	},
	{
		id: 27,
		image: img27,
		item: '오션스 8',
		name: '데비 오션',
		wins: 0
	},
	{
		id: 28,
		image: img28,
		item: '오션스 8',
		name: '루',
		wins: 0
	},
	{
		id: 29,
		image: img29,
		item: '매드 맥스',
		name: '임페라토르 퓨리오사',
		wins: 0
	},
	{
		id: 30,
		image: img30,
		item: '힐다',
		name: '힐다',
		wins: 0
	},
	{
		id: 31,
		image: img31,
		item: '미쓰백',
		name: '백상아',
		wins: 0
	},
	{
		id: 32,
		image: img32,
		item: '캡틴 마블',
		name: '캐럴 댄버스',
		wins: 0
	},
	{
		id: 33,
		image: img33,
		item: '원더우먼',
		name: '원더우먼',
		wins: 0
	},
	{
		id: 34,
		image: img34,
		item: '메리다와 마법의 숲',
		name: '메리다',
		wins: 0
	},
	{
		id: 35,
		image: img35,
		item: '캐롤',
		name: '캐롤 에어드',
		wins: 0
	},
	{
		id: 36,
		image: img36,
		item: '겨울 왕국',
		name: '엘사',
		wins: 0
	},
	{
		id: 37,
		image: img37,
		item: '겨울 왕국',
		name: '안나',
		wins: 0
	},
	{
		id: 38,
		image: img38,
		item: '버즈 오브 프레이(할리 퀸의 황홀한 해방)',
		name: '할리 퀸',
		wins: 0
	},
	{
		id: 39,
		image: img39,
		item: '터미네이터: 다크 페이트',
		name: '사라 코너',
		wins: 0
	},
	{
		id: 40,
		image: img40,
		item: '킬링 이브',
		name: '이브 폴라스트리',
		wins: 0
	},
	{
		id: 41,
		image: img41,
		item: '꼴찌 마녀 밀드레드',
		name: '밀드레드 허블',
		wins: 0
	},
	{
		id: 42,
		image: img42,
		item: '꼴찌 마녀 밀드레드',
		name: '에설 할로우',
		wins: 0
	},
	{
		id: 43,
		image: img43,
		item: '빨간 머리 앤',
		name: '앤 셜리',
		wins: 0
	},
	{
		id: 44,
		image: img44,
		item: '보건교사 안은영',
		name: '안은영',
		wins: 0
	},
	{
		id: 45,
		image: img45,
		item: '어쌔신 크리드 오디세이',
		name: '카산드라',
		wins: 0
	},
	{
		id: 46,
		image: img46,
		item: '겟백',
		name: '염다정',
		wins: 0
	},
	{
		id: 47,
		image: img47,
		item: '겟백',
		name: '염나연',
		wins: 0
	},
	{
		id: 48,
		image: img48,
		item: '어글리후드',
		name: '엘사 브라이언트',
		wins: 0
	},
	{
		id: 49,
		image: img49,
		item: '어글리후드',
		name: '세라 그린마일',
		wins: 0
	},
	{
		id: 50,
		image: img50,
		item: '살아남은 로맨스',
		name: '은채린',
		wins: 0
	},
	{
		id: 51,
		image: img51,
		item: '살아남은 로맨스',
		name: '양미희',
		wins: 0
	},
	{
		id: 52,
		image: img52,
		item: '살아남은 로맨스',
		name: '정지현',
		wins: 0
	},
	{
		id: 53,
		image: img53,
		item: '오렌지 이즈 더 뉴 블랙',
		name: '파이퍼 채프먼',
		wins: 0
	},
	{
		id: 54,
		image: img54,
		item: '오렌지 이즈 더 뉴 블랙',
		name: '알렉스 보즈',
		wins: 0
	},
	{
		id: 55,
		image: img55,
		item: '오렌지 이즈 더 뉴 블랙',
		name: '갈리나 “레드” 레즈니코프',
		wins: 0
	},
	{
		id: 56,
		image: img56,
		item: '오렌지 이즈 더 뉴 블랙',
		name: '니콜 “니키” 니콜스',
		wins: 0
	},
	{
		id: 57,
		image: img57,
		item: '일립예고 학생들',
		name: '한솔',
		wins: 0
	},
	{
		id: 58,
		image: img58,
		item: '일립예고 학생들',
		name: '이다경',
		wins: 0
	},
	{
		id: 59,
		image: img59,
		item: '일립예고 학생들',
		name: '하시은',
		wins: 0
	},
	{
		id: 60,
		image: img60,
		item: '이대로 멈출 순 없다',
		name: '배소연',
		wins: 0
	},
	{
		id: 61,
		image: img61,
		item: '이대로 멈출 순 없다',
		name: '김민주',
		wins: 0
	},
	{
		id: 62,
		image: img62,
		item: '똑 닮은 딸',
		name: '길소명',
		wins: 0
	},
	{
		id: 63,
		image: img63,
		item: '똑 닮은 딸',
		name: '명소민',
		wins: 0
	},
	{
		id: 64,
		image: img64,
		item: '똑 닮은 딸',
		name: '류솔',
		wins: 0
	}
];

function shuffle(array: any[]): any[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export function getRandomCharacters(): Character[] {
	const shuffledCharacters = shuffle([...characters]);
	return shuffledCharacters.map((character) => ({
		...character,
		wins: 0
	}));
}
