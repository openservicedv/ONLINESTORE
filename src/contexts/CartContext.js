import {createContext, useState} from 'react';
import itemsJson from '../data/items.json';
import {currencyFormat} from '../controllers/currencyFormat';
export const CartContext = createContext();

export const CartProvider = (props) => {

	const [cartItems, setCartItems] = useState([]);
	const addToCart = (item) => {
		if (cartItems.find(el => el.id === item.id)) {
			setCartItems(cartItems.map(el => (item.id === el.id ? {...el, quantity: el.quantity + 1} : el)));
		} else {
			setCartItems([...cartItems, {...item, quantity: 1}]);
		}
	};
	const removeFromCart = (item) => {
		setCartItems(cartItems.filter(el => (item.id !== el.id)));
	};
	const removeInsideCart = (id) => {
		setCartItems(cartItems.filter(el => el.id !== id));
	};
	const increaseQuantity = (item) => {
		setCartItems(cartItems.map(el => (item.id === el.id ? {...el, quantity: el.quantity + 1} : el)));
	};
	const decreaseQuantity = (item) => {
		setCartItems(cartItems.map(el => (item.id === el.id ? {...el, quantity: el.quantity - 1} : el)));
	};

	return (
		<CartContext.Provider value={{
			cartItems,
			setCartItems,
			itemsJson,
			addToCart,
			removeFromCart,
			increaseQuantity,
			decreaseQuantity,
			currencyFormat,
			removeInsideCart
		}}>
			{props.children}
		</CartContext.Provider>
	);
};
