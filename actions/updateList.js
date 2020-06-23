import { UPDATE_LIST } from '../constants/Redux';

export const updateTask = (ListParty) => ({
	type: UPDATE_LIST,
	ListParty: ListParty
});