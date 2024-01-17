import {Col, Row} from 'react-bootstrap';
import itemsJson from '../data/items.json';
import StoreUnits from './StoreUnits';

const Store = ({searchText}) => {
	const filteredItems = itemsJson.filter(el => {
		return el.name.toLowerCase().includes(searchText.toLowerCase());
	});

	return (
		<div>
			<h1> Store </h1>
			<Row>
				{filteredItems.map(item => (
					<Col
						key={item.id}>
						<StoreUnits
							item={item}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Store;
