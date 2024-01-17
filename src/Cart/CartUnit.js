import {Button, Stack} from 'react-bootstrap';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

const CartUnit = ({id, quantity}) => {

	const {itemsJson} = useContext(CartContext);

	const item = itemsJson.find(item => item.id === id);
	if (item == null) return null;
	// todo - ? Why (item == null) instead of (item)

	//todo remove from cart

	return (
		<Stack direction="horizontal" className="d-flex align-items-center">
			<img src={item.image} alt="img" style={{width: '100px', height: '100px', objectFit: 'contain'}}
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
					{item.price}
				</div>
			</div>
			<div className="text-muted" style={{fontSize: '.8rem'}}>
				{item.price * quantity}
			</div>
			<Button
				variant={'outline-danger'}
				size={'sm'}

				// todo				onClick={removeFromCart}

			>
				&times;
			</Button>
		</Stack>
	);
};

export default CartUnit;
