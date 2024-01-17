import storeItems from '../data/items.json';
import {Button, Stack} from 'react-bootstrap';
import {formatCurrency} from '../currency/formatCurrency';

const CartItems = ({id, quantity}) => {
	const item = storeItems.find(item => item.id === id);
	if (item == null) return null;

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
					{formatCurrency(item.price)}
				</div>
			</div>
			<div className="text-muted" style={{fontSize: '.8rem'}}>
				{formatCurrency(item.price * quantity)}
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

export default CartItems;
