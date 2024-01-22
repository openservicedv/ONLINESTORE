import {Offcanvas, Stack} from 'react-bootstrap';
import CartUnit from './CartUnit';
import {currencyFormat} from '../controllers/currencyFormat';
import {closeCart} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

export const Cart = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(state => state.isCartOpen);
	const itemsJsonRedux = useSelector(state => state.itemJsonRedux);
	const cartItemsRedux = useSelector(state => state.cartItemsRedux);

	return (
		<div>
			<Offcanvas
				show={isCartOpen}
				onHide={()=>dispatch(closeCart())}
				placement="end"
				className=''
			>
				<Offcanvas.Header
					closeButton
					className='border'
				>
					<Offcanvas.Title
						style={{
							width: '330px',
							objectFit: 'contain',
							textAlign: 'start',
							fontWeight: 'bold'
						}}
					> SHOPPING CART </Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Stack className="">
						{cartItemsRedux.map(el => (
							<CartUnit
								key={el.id}
								{...el}
							/>))}
						<div className="ms-auto fw-bold fs-6">
                            Total:{' '}
							{currencyFormat(cartItemsRedux.reduce((total, el) => {
								const item = itemsJsonRedux.find(item => item.id === el.id);
								return total + (item.price * el.quantity);
							}, 0))}
						</div>
					</Stack>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};
