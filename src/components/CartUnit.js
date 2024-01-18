import {Button, Stack} from 'react-bootstrap';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

const CartUnit = ({id, quantity}) => {

	const {itemsJson, currencyFormat, removeInsideCart} = useContext(CartContext);

	const item = itemsJson.find(item => item.id === id);
	if (item == null) return null;
	// todo - ? Why (item == null) instead of (item)

	// const removeInsideCart = () => {
	// 	const updatedCart = cartItems.filter(el => el.id !== id);
	// 	setCartItems(updatedCart);
	// };

	return (
		<Stack
			direction="horizontal"
			className="border-bottom d-flex align-items-center"
		>
			<img
				src={item.image}
				alt="img"
				style={{
					width: '100px',
					height: '100px',
					objectFit: 'contain'
				}}
			/>
			<div className="me-auto">
				<div>
					{item.name}
					{quantity >= 1 && (
						<span className="text-muted" style={{fontSize: '.7rem'}}>
							x {quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{fontSize: '.8rem'}}>
					{currencyFormat(item.price)}
				</div>
			</div>
			<div className="text-muted" style={{fontSize: '.8rem'}}>
				{currencyFormat(item.price * quantity)}
			</div>
			<Button
				variant={'outline-danger'}
				size={'sm'}
				onClick={() => removeInsideCart(id)}
			>
                &times;
			</Button>
		</Stack>
	);
};

export default CartUnit;
