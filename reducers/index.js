import { combineReducers } from 'redux';
import partyList from './partyList';
import userInterface from './userInterface'
import filter from './filter'

const rootReducer = combineReducers({ partyList, userInterface, filter });

export default rootReducer;