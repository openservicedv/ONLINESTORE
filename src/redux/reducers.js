import itemsJson from '../data/items.json';

const defaultState = {
	handleSearch: '',
	isCartOpen: false,
	itemJson: itemsJson,
	cartItems: [],
};
export const reducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'handleSearch':
		return {...state, handleSearch: action.payload};
	case 'handleCartToggle':
		return {...state, isCartOpen: !state.isCartOpen};
	case 'closeCart':
		return {...state, isCartOpen: action.payload};
	case 'addToCart':
		return state.cartItems.find(el => el.id === action.payload.id)
			? {...state, cartItems: state.cartItems
				.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity + 1} : el))}
			: {...state, cartItems: [...state.cartItems, {...action.payload, quantity: 1}]};
	case 'removeFromCart':
		return {...state, cartItems: state.cartItems
			.filter(el => (action.payload.id !== el.id))};
	case 'removeInsideCart':
		return {...state, cartItems: state.cartItems
			.filter(el => (action.payload !== el.id))};
	case 'increaseQuantity':
		return {...state, cartItems: state.cartItems
			.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity + 1} : el))};
	case 'decreaseQuantity':
		return {...state, cartItems: state.cartItems
			.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity - 1} : el))};
	default:
		return state;
	}
};
