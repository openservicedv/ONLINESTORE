import itemsJson from '../data/items.json';

const defaultState = {
	handleSearch: '',
	itemJson: itemsJson,
};
export const storeReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'handleSearch':
		return {...state, handleSearch: action.payload};
	default:
		return state;
	}
};
