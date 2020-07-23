import { ADD_LIST, UPDATE_LIST } from '../constants/Redux';

const party = (state = {}, { type, ListParty, key }) => {
  let _state = {...state};
  switch (type) {
    case ADD_LIST :
      _state[key] = [...state[key], ...ListParty];
      return _state;
    case UPDATE_LIST :
      _state[key] = ListParty;
      return _state;
    default:
      return state;
  }
}

export default party;