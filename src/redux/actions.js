export const handleSearch = (event) => {
	return {
		type: 'handleSearch',
		payload: event.target.value
	};
};
export const handleCartToggle = () => {
	return {
		type: 'handleCartToggle',
	};
};
export const closeCart = () => {
	return {
		type: 'closeCart',
		payload: false,
	};
};
export const addToCart = (item) => {
	return {
		type: 'addToCart',
		payload: item,
	};
};
export const removeFromCart = (item) => {
	return {
		type: 'removeFromCart',
		payload: item,
	};
};
export const removeInsideCart = (id) => {
	return {
		type: 'removeInsideCart',
		payload: id,
	};
};
export const increaseQuantity = (item) => {
	return {
		type: 'increaseQuantity',
		payload: item,
	};
};
export const decreaseQuantity = (item) => {
	return {
		type: 'decreaseQuantity',
		payload: item,
	};
};
