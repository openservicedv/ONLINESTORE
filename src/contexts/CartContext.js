import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		console.log(item);
		// if (cartItems.find(el => el.id === item.id)) {
		// 	const updatedCartItems = cartItems.map(el => (
		// 		item.id === el.id ? {...el, quantity: el.quantity + 1} : el
		// 	));
		// 	setCartItems(updatedCartItems);
		// } else {
		// setCartItems([...cartItems, {...item, quantity: 1}]);
		// }
	};

	const removeFromCart = (item) => {
		const updatedCartItems = cartItems.filter(cartItem => (item.id !== cartItem.id));
		setCartItems(updatedCartItems);
	};

	const increaseQuantity = (item) => {
		const updatedCartItems = cartItems.map(cartItem => (
			item.id === cartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
		));
		setCartItems(updatedCartItems);
	};

	const decreaseQuantity = (item) => {
		const updatedCartItems = cartItems.map(cartItem => (
			item.id === cartItem.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
		));
		setCartItems(updatedCartItems);
	};

	return (
		<CartContext.Provider
			value={[cartItems, setCartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity]}
		>
			{props.children}
		</CartContext.Provider>
	);
};
