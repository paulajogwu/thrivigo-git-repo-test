import {createStore, combineReducers} from 'redux';
import Git_search from "./components/git_search/reducers";

const reducers = combineReducers({Git_search});

export default createStore(reducers);