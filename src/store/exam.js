import { writable } from 'svelte/store';

export const name = writable('');
export const number = writable('');
export const tested = writable(false);
export const tooltip = writable(true);
export const userAnswers = writable(/** @type {number[][][]} */ (initializeArray(5, 5)));

// @ts-ignore
/**
 * @param {number} cnt1
 * @param {number} cnt2
 * @returns {number[][][]}
 */
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

export function resetAnswers() {
	userAnswers.set(initializeArray(5, 5));
}
