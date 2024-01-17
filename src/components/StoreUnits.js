import {Button, Card} from 'react-bootstrap';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

const StoreUnits = ({item}) => {
	const [cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity] = useContext(CartContext);
	const cartItem = cartItems.find(el => el.id === item.id);
	const quantity = cartItem ? cartItem.quantity : 0;

	return (
		<div className="d-flex flex-column-reverse">
			<Card>
				<Card.Img
					variant="top"
					src={item.image}
					style={{objectFit: 'contain'}}
					// height="300px"
					// width="300px"
				/>
				<Card.Body>
					<Card.Title className="d-flex flex-column">
						<span className="fs-4">{item.name}</span>
						<span className="fs-3">{item.price}</span>
					</Card.Title>
					{quantity ?
						(
							<div className="d-flex justify-content-around">
								<Button variant="outline-primary" onClick={() => decreaseQuantity(item)}>
									-
								</Button>
								<span className="d-flex fs-5 align-items-center">
									{quantity}
								</span>
								<Button variant="outline-primary" onClick={() => increaseQuantity(item)}>
									+
								</Button>
								<Button variant="outline-primary" onClick={() => removeFromCart(item)}>
									Remove
								</Button>
							</div>
						) : (
							<Button className="w-100" variant="outline-primary" onClick={() => addToCart(item)}
							>Add to Cart
							</Button>
						)
					}
				</Card.Body>
			</Card>
		</div>
	);
};

export default StoreUnits;
