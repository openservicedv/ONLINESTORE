import itemsJsonRedux from '../data/items.json';

const defaultState = {
	handleSearch: '',
	isCartOpen: false,
	itemJsonRedux: itemsJsonRedux,
	cartItemsRedux: [],
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
		return state.cartItemsRedux
			.find(el => el.id === action.payload.id)
			? {...state, cartItemsRedux: [...state.cartItemsRedux, {...action.payload, quantity: action.payload.quantity + 1}]}
			: {...state, cartItemsRedux: [...state.cartItemsRedux, {...action.payload, quantity: 1}]};
	case 'removeFromCart':
		return {...state, cartItemsRedux: state.cartItemsRedux
			.filter(el => (action.payload.id !== el.id))
		};
	case 'removeInsideCart':
		return {...state, cartItemsRedux: state.cartItemsRedux
			.filter(el => (action.payload !== el.id))
		};
	case 'increaseQuantity':
		return {...state, cartItemsRedux: state.cartItemsRedux
			.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity + 1} : el))
		};
	case 'decreaseQuantity':
		return {...state, cartItemsRedux: state.cartItemsRedux
			.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity - 1} : el))
		};
	default:
		return state;
	}
};
