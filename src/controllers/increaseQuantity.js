import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

const increaseQuantity = (item) => {

	const {cartItems, setCartItems} = useContext(CartContext);

	const updatedCartItems = cartItems.map(cartItem => (
		item.id === cartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
	));
	setCartItems(updatedCartItems);
};
export default increaseQuantity;
