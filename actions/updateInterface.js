import { UPDATE_HEIGHT, UPDATE_TOP, UPDATE_PARTY_KEY, UPDATE_DRAW, UPDATE_SCROLL } from '../constants/Redux';

export const updateTop = (top) => ({
	type: UPDATE_TOP,
	top
});
export const updateHeight = (height) => ({
	type: UPDATE_HEIGHT,
	height
});
export const updatePartyKey = (partyKey) => ({
	type: UPDATE_PARTY_KEY,
	partyKey
});
export const updateDraw = (draw) => ({
	type: UPDATE_DRAW,
	draw
});
export const updateScroll = (partyKey, top, height) => ({
	type: UPDATE_SCROLL,
	partyKey,
	top,
	height
});