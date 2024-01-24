import {legacy_createStore, combineReducers} from 'redux';
import {storeReducer} from './storeReducer';
import {cartReducer} from './cartReducer';
import {composeWithDevTools} from '@redux-devtools/extension';
// import {applyMiddleware} from 'redux';

const rootReducer = combineReducers({
	cartReducer,
	storeReducer
});
export const store = legacy_createStore(rootReducer, composeWithDevTools());


