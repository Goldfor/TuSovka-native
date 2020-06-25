import { combineReducers } from 'redux';
import partyList from './partyList';
import userInterface from './userInterface'

const rootReducer = combineReducers({ partyList, userInterface });

export default rootReducer;