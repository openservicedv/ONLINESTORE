import {Col, Row} from 'react-bootstrap';
import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

const Photos = ({searchText}) => {
	const [cartItems, setCartItems] = useContext(CartContext);
	const addToCart = (item) => {
		if (cartItems.find(cartItem => cartItem.id === item.id)) {
			const updatedCartItems = cartItems.map(cartItem => (
				item.id === cartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
			));
			setCartItems(updatedCartItems);
		} else {
			setCartItems([...cartItems, {...item, quantity: 1}]);
		}

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

	const filteredItems = storeItems.filter(storeItem => {
		return storeItem.name.toLowerCase().includes(searchText.toLowerCase());
	});

	return (
		<div>
			<h1> Photos </h1>
			<Row>
				{filteredItems.map(item => (
					<Col key={item.id}>
						<StoreItem
							item={item}
							addToCart={addToCart}
							removeFromCart={removeFromCart}
							increaseQuantity={increaseQuantity}
							decreaseQuantity={decreaseQuantity}
							cartItems={cartItems}
							qty={cartItems.quantity}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Photos;
