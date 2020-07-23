import { UPDATE_FILTER, UPDATE_FILTER_OBJ } from '../constants/Redux';
import filterNames from '../constants/filter';

const filter = (state = {}, { type, name, params, key }) => {
  let _state = {...state};
  let _s = {}
  switch (type) {
    case UPDATE_FILTER:
      _s[name] = params;
      _state[key] = {..._state[key], ..._s};
      return _state;
    case UPDATE_FILTER_OBJ:
      _s = {name: ''};
      Object.keys(filterNames).forEach(item => {_s[item] = '0';})
      _state[key] = {..._s}
      return _state;
    default:
      return state;
  }
}

export default filter;