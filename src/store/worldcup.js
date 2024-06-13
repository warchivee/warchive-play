import { writable } from 'svelte/store';
import { getRandomCharacters } from '$lib/assets/worldcup/characters';

const initialCharacters = getRandomCharacters();
