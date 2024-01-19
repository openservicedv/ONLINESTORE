import {Button, Card} from 'react-bootstrap';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

export const StoreUnit = ({item}) => {

	const {cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, currencyFormat} = useContext(CartContext);

	const unit = cartItems.find(el => el.id === item.id);
	const quantity = unit ? unit.quantity : 0;

	return (
		<Card
			className="ms-2 mb-2 mt-2 me-0 d-flex flex-column justify-content-center align-items-center"
			style={{
				width: '225px',
				height: '405px',
			}}
		>
			<Card.Img
				src={item.image}
				variant="top"
				style={{
					width: '220px',
					marginTop: '10px'
				}}
			/>
			<Card.Body>
				<Card.Title
					className="d-flex flex-column"
				>
					<span
						style={{
							width: '200px',
							height: '45px',
							textAlign: 'start',
							fontSize: 'smaller',
							fontWeight: 'lighter'
						}}
					>{item.name}
					</span>
					<span
						style={{
							width: '200px',
							height: '30px',
							textAlign: 'start',
							fontSize: '15px',
							textShadow: '1px 1px 1px grey',
						}}
					>{item.size}
					</span>
					<span
						style={{
							textAlign: 'start',
							color: 'brown',
							fontWeight: 'lighter',
						}}
					>{currencyFormat(item.price)}
					</span>
				</Card.Title>
				<div>
					{quantity ? (
						<div className="d-flex justify-content-around">
							<Button variant="outline-secondary" onClick={() => decreaseQuantity(item)}>
								-
							</Button>
							<span className="d-flex fs-5 align-items-center">
								{quantity}
							</span>
							<Button variant="outline-secondary" onClick={() => increaseQuantity(item)}>
                                +
							</Button>
							<Button variant="outline-secondary" onClick={() => removeFromCart(item)}>
                                Remove
							</Button>
						</div>
					) : (
						<Button className="w-100" variant="outline-secondary" onClick={() => addToCart(item)}
						>Add to Cart
						</Button>)
					}
				</div>
			</Card.Body>
		</Card>
	);
};
