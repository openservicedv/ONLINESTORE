import {Col, Row} from 'react-bootstrap';
import {StoreUnit} from './StoreUnit';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import {SearchContext} from '../contexts/SearchContext';

export const Store = () => {

	const {itemsJson} = useContext(CartContext);
	const {searchText} = useContext(SearchContext);

	return (
		<div className="d-flex flex-column">
			<h1
				className="m-4"
			> TIRE STORE </h1>
			<Row
				className="d-flex justify-content-start align-content-start vh-100"
				// xs={2} md={4} lg={6}
				// style={{
				// 	border: 'solid',
				// }}
			>
				{itemsJson
					.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase()))
					.map(item => (
						<Col
							key={item.id}
							xs={'auto'} md={'auto'} lg={'auto'}
							// style={{
							// 	border: 'solid',
							// 	width: '210px'
							// }}
						>
							<StoreUnit item={item} />
						</Col>
					))
				}
			</Row>
		</div>
	);
};
