import {legacy_createStore, combineReducers} from 'redux';
import {storeReducer} from './storeReducer';
import {cartReducer} from './cartReducer';

const rootReducer = combineReducers({
	cartReducer,
	storeReducer
});
export const store = legacy_createStore(rootReducer);


