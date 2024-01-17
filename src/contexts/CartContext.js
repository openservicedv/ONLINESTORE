import {createContext, useState} from 'react';
import itemsJson from '../data/items.json';

export const CartContext = createContext();

export const CartProvider = (props) => {

	const [cartItems, setCartItems] = useState([]);
	const addToCart = (item) => {
		if (cartItems.find(cartItem => cartItem.id === item.id)) {
			const updatedCartItems = cartItems.map(cartItem => (
				item.id === cartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
			));
			setCartItems(updatedCartItems);
		} else setCartItems([...cartItems, {...item, quantity: 1}]);
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
			value={{cartItems, setCartItems, itemsJson, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}
		>
			{props.children}
		</CartContext.Provider>
	);
};
