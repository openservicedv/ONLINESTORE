import {Offcanvas, Stack} from 'react-bootstrap';
import CartUnit from './CartUnit';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import {SearchContext} from '../contexts/SearchContext';

export const Cart = () => {

	const {cartItems, itemsJson, currencyFormat} = useContext(CartContext);
	const {isCartOpen, closeCart} = useContext(SearchContext);

	return (
		<div>
			<Offcanvas
				show={isCartOpen}
				onHide={closeCart}
				placement="end"
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title> Cart </Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Stack className="">
						{cartItems.map(el => (
							<CartUnit key={el.id}
								{...el}                     // todo {...el} - что за синтаксис props ??
							/>
						))}
						<div className="ms-auto fw-bold fs-5">
                            Total:{' '}
							{currencyFormat(cartItems.reduce((total, el) => {
								const item = itemsJson.find(item => item.id === el.id);
								return total + (item.price * el.quantity);
							}, 0))}
						</div>
					</Stack>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};
