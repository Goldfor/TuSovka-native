import { UPDATE_LIST } from '../constants/Redux';

export const updateTask = (ListParty, nav_Key) => ({
	type: UPDATE_LIST,
	key: nav_Key,
	ListParty: ListParty
});