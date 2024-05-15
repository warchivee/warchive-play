import { writable } from 'svelte/store';

export const name = writable('');
export const number = writable('');

export const userAnswers = writable(initializeArray(5, 5));

// @ts-ignore
function initializeArray(cnt1, cnt2) {
	const returnArray = [];
	for (let i = 0; i < cnt1; i++) {
		const tmpArray = [];
		for (let j = 0; j < cnt2; j++) {
			tmpArray.push([]);
		}
		returnArray.push(tmpArray);
	}
	return returnArray;
}
