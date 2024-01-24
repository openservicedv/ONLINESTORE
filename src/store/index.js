import {legacy_createStore, combineReducers} from 'redux';
import {storeReducer} from './storeReducer';
import {cartReducer} from './cartReducer';
import {composeWithDevTools} from '@redux-devtools/extension';

const rootReducer = combineReducers({
	cartReducer,
	storeReducer
});
export const store = legacy_createStore(rootReducer, composeWithDevTools());


