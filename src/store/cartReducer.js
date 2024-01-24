const defaultState = {
	isCartOpen: false,
	cartItems: JSON.parse(localStorage.getItem('cartLocal') || String([])),
};
export const cartReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'handleCartToggle':
		return {...state, isCartOpen: !state.isCartOpen};
	case 'closeCart':
		return {...state, isCartOpen: action.payload};
	case 'addToCart':
		return state.cartItems.find(el => el.id === action.payload.id)
			? {
				...state, cartItems: state.cartItems
					.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity + 1} : el))
			}
			: {...state, cartItems: [...state.cartItems, {...action.payload, quantity: 1}]};
	case 'removeFromCart': {
		const updatedObject = {
			...state, cartItems: state.cartItems
				.filter(el => (action.payload.id !== el.id))
		};
		localStorage.setItem('cartLocal', JSON.stringify(updatedObject.cartItems));
		return updatedObject;
	}
	case 'removeInsideCart': {
		const updatedObject = {
			...state, cartItems: state.cartItems
				.filter(el => (action.payload !== el.id))
		};
		localStorage.setItem('cartLocal', JSON.stringify(updatedObject.cartItems));
		return updatedObject;

	}
	case 'increaseQuantity': {
		const updatedObject = {
			...state, cartItems: state.cartItems
				.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity + 1} : el))
		};
		localStorage.setItem('cartLocal', JSON.stringify(updatedObject.cartItems));
		return updatedObject;
	}
	case 'decreaseQuantity':
		localStorage.setItem('cartLocal', JSON.stringify(state.cartItems));
		return {
			...state, cartItems: state.cartItems
				.map(el => (action.payload.id === el.id ? {...el, quantity: el.quantity - 1} : el))
		};
	default:
		return state;
	}
};
