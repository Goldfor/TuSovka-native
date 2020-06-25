import { UPDATE_TOP, UPDATE_HEIGHT, UPDATE_PARTY_KEY, UPDATE_DRAW, UPDATE_SCROLL } from '../constants/Redux';

const Interface = (state = {draw: false}, { type, top, height, partyKey, draw }) => {
  switch (type) {
    case UPDATE_TOP:
      return {
        ...state,
        top
      };
    case UPDATE_HEIGHT :
      return {
        ...state,
        height
      };
    case UPDATE_PARTY_KEY :
      return {
        ...state,
        partyKey
      };
    case UPDATE_DRAW :
      return {
        ...state,
        draw
      };
    case UPDATE_SCROLL :
      return {
        ...state,
        top,
        height,
        partyKey
      };
    default:
      return state;
  }
}

export default Interface;