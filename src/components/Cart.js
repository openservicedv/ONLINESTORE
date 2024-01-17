import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import CartUnits from './CartUnits';
import {Offcanvas, Stack} from 'react-bootstrap';
import storeItems from '../data/items.json';
import {formatCurrency} from '../currency/formatCurrency';

const Cart = ({isCartOpen, closeCart}) => {
	const [cartItems] = useContext(CartContext);
	console.log(cartItems);
	return (
		<div>
			<Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Cart</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Stack>
						{
							console.log(cartItems)
						}
						{cartItems.map(item => (
							<CartUnits key={item.id}
								{...item}
							/>
						))
						}

						<div className="ms-auto fw-bold fs-5">

							{/*todo currency formatter*/}
							{/*todo indent*/}
							{/*todo remove*/}

							Total:{' '}
							{formatCurrency(
								cartItems.reduce((total, cartItem) => {
									const item = storeItems.find(item => item.id === cartItem.id);
									return total + (item.price * cartItem.quantity);
								}, 0)
							)}
						</div>
					</Stack>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default Cart;
