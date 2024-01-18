import {Button, Stack} from 'react-bootstrap';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

const CartUnit = ({id, quantity}) => {
	const {itemsJson, currencyFormat, removeInsideCart} = useContext(CartContext);

	const unit = itemsJson.find(el => el.id === id); // if (item == null) return null;

	return (
		<Stack
			direction="horizontal"
			className="border d-flex align-items-center justify-content-between"
		>
			<img
				src={unit.image}
				alt="img"
				className="border"
				style={{
					width: '100px',
					height: '100px',
					objectFit: 'contain'
				}}
			/>
			<div className="me-auto border">
				<div>
					{unit.name}
					{quantity >= 1 && (
						<span className="text-muted border" style={{fontSize: '.7rem'}}>
							x {quantity}
						</span>
					)}
				</div>
				<div className="text-muted border" style={{fontSize: '.8rem'}}>
					{currencyFormat(unit.price)}
				</div>
			</div>
			<div className="text-muted border" style={{fontSize: '.8rem'}}>
				{currencyFormat(unit.price * quantity)}
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
