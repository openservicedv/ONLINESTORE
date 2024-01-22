import {Button, Stack} from 'react-bootstrap';
import {currencyFormat} from '../controllers/currencyFormat';
import {useDispatch, useSelector} from 'react-redux';
import {removeInsideCart} from '../redux/actions';

const CartUnit = ({id, quantity}) => {
	const dispatch = useDispatch();
	const itemsJson = useSelector(state => state.itemJson);

	const unit = itemsJson.find(el => el.id === id); // if (item == null) return null;

	return (
		<Stack
			direction="horizontal"
			className="d-flex justify-content-around"
			style={{
				width: '370px',
				height: '100px',
				marginBottom: '10px',
				border: 'solid 1px #d2d5de',
				borderRadius: '10px',
			}}>
			<img
				src={unit.image}
				alt="img"
				style={{
					width: '80px',
					height: '80px',
				}}
			/>
			<div
				style={{
					width: '280px',
				}}>
				<div
					className="d-flex align-items-start justify-content-between"
					style={{
						height: '50px',
					}}>
					<span
						style={{
							textAlign: 'start',
							fontSize: '12px',
						}}
					>{unit.name}<br/>{unit.size}
					</span>
					<br/>
					<div
						className="d-flex flex-column me-1"
					>
						<div
							className="text-muted"
							style={{
								width: '80px',
								textAlign: 'center',
								fontSize: '10px',
								border: 'solid #d2d5de',
								borderRadius: '10px',
								marginTop: '3px',
								marginBottom: '2px',
							}}>price
						</div>
						<div
							style={{
								textAlign: 'center',
								fontSize: '12px',
								color: 'brown',
								// fontWeight: 'bolder',
							}}>{currencyFormat(unit.price)}
						</div>
					</div>
				</div>
				<div
					className="d-flex justify-content-between"
					style={{
						// border: 'dashed red',
					}}>
					<div
						className="d-flex flex-column justify-content-around align-content-around"
						style={{
							width: '80px',
							// border: 'dashed green',
						}}>
						<div
							className="text-muted"
							style={{
								// width: '60px',
								textAlign: 'center',
								fontSize: '10px',
								border: 'solid #d2d5de',
								borderRadius: '10px',
								// marginTop: '3px',
								// marginBottom: '2px',
							}}>{quantity >= 1 && (
								<span> quantity </span>)}
						</div>
						<div
							style={{
								textAlign: 'center',
								fontSize: '12px',
								color: 'brown',
								// fontWeight: 'bolder',
							}}>{quantity}
						</div>
					</div>
					<Button
						variant={'outline-danger'}
						size={'sm'}
						onClick={() => dispatch(removeInsideCart(id))}
						style={{
							width: '30px',
							height: '30px',
							textAlign: 'center',
							fontSize: '14px',
							borderRadius: '10px',
						}}>&times;
					</Button>

					<div className="d-flex flex-column me-1">
						<div
							className="text-muted"
							style={{
								width: '80px',
								textAlign: 'center',
								fontSize: '10px',
								border: 'solid #d2d5de',
								borderRadius: '10px',
								marginBottom: '2px',
							}}>subtotal
						</div>

						<div
							style={{
								textAlign: 'center',
								fontSize: '12px',
								color: 'brown',
								// fontWeight: 'bolder',
							}}
						>{currencyFormat(unit.price * quantity)}
						</div>
					</div>
				</div>
			</div>
		</Stack>
	);
};

export default CartUnit;
