import { UPDATE_FILTER, UPDATE_FILTER_OBJ } from '../constants/Redux';

export const updateFilter = (name, params, nav_Key) => ({
	type: UPDATE_FILTER,
	key: nav_Key,
	name,
	params
});

export const updateFilterObj = (nav_Key) => ({
	type: UPDATE_FILTER_OBJ,
	key: nav_Key
});