import {Offcanvas, Stack} from 'react-bootstrap';
import CartUnit from './CartUnit';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

export const Cart = ({isCartOpen, closeCart}) => {

	const {cartItems, setCartItems, itemsJson} = useContext(CartContext);

	return (
		<div>
			<Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Cart</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Stack>
						{
							cartItems.map(item => (
								<CartUnit
									key={item.id}
									{...item}
									// todo {...item} - что за синтаксис??
									cartItems={cartItems}
									setCartItems={setCartItems}
								/>
							))
						}
						<div className="ms-auto fw-bold fs-5">

							{/*todo currency formatter*/}
							{/*todo indent*/}
							{/*todo remove*/}

							Total:{' '}
							{
								cartItems.reduce((total, cartItem) => {
									const item = itemsJson.find(item => item.id === cartItem.id);
									return total + (item.price * cartItem.quantity);
								}, 0)
							}
						</div>

					</Stack>

				</Offcanvas.Body>
			</Offcanvas>

		</div>
	);
};
