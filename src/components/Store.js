import {Col, Row} from 'react-bootstrap';
import {StoreUnit} from './StoreUnit';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import {SearchContext} from '../contexts/SearchContext';

export const Store = () => {

	const {itemsJson} = useContext(CartContext);
	const {searchText} = useContext(SearchContext);

	return (
		<div>
			<h1> Store </h1>
			<Row>
				{itemsJson
					.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase()))
					.map(item => (
						<Col key={item.id}>
							<StoreUnit item={item} />
						</Col>
					))}
			</Row>
		</div>
	);
};
