import { ADD_LIST, UPDATE_LIST } from '../constants/Redux';

const party = (state = [], { type, ListParty }) => {
  switch (type) {
    case ADD_LIST :
      return [
        ...state, 
        ...ListParty
      ];
    case UPDATE_LIST :
        return [ 
          ...ListParty
        ];
    default:
      return state;
  }
}

export default party;