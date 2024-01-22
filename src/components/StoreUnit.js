import {Button, Card} from 'react-bootstrap';
import {currencyFormat} from '../controllers/currencyFormat';
import {addToCart, decreaseQuantity, increaseQuantity, removeFromCart} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

export const StoreUnit = ({item}) => {
	const dispatch = useDispatch();
	const cartItemsRedux = useSelector(state => state.cartItemsRedux);

	const unit = cartItemsRedux.find(el => el.id === item.id);
	const quantity = unit ? unit.quantity : 0;

	return (
		<Card
			className="d-flex flex-column justify-content-center align-items-center ms-2 mt-2"
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
							fontSize: '13px',
							fontWeight: 'bolder'
							// textShadow: '1px 1px 1px grey',
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
							<Button variant="outline-secondary" onClick={() => dispatch(decreaseQuantity(item))}>
								-
							</Button>
							<span className="d-flex fs-5 align-items-center">
								{quantity}
							</span>
							<Button variant="outline-secondary" onClick={() => dispatch(increaseQuantity(item))}>
                                +
							</Button>
							<Button variant="outline-secondary" onClick={() => dispatch(removeFromCart(item))}>
                                Remove
							</Button>
						</div>
					) : (
						<Button className="w-100" variant="outline-secondary" onClick={() => dispatch(addToCart(item))}
						>Add to Cart
						</Button>)
					}
				</div>
			</Card.Body>
		</Card>
	);
};
