import {Col, Row} from 'react-bootstrap';
import {StoreUnit} from './StoreUnit';
import {useSelector} from 'react-redux';

export const Store = () => {
	const handleSearch = useSelector(state => state.handleSearch);
	const itemsJsonRedux = useSelector(state => state.itemJsonRedux);

	return (
		<div className="d-flex flex-column">
			<h1
				className="m-4"
			> TIRE STORE </h1>
			<Row className="d-flex justify-content-start align-content-start vh-100">
				{itemsJsonRedux
					.filter(el => el.name.toLowerCase().includes(handleSearch.toLowerCase()))
					.map(item => (
						<Col key={item.id} xs={'auto'} md={'auto'} lg={'auto'}>
							<StoreUnit item={item} />
						</Col>
					))
				}
			</Row>
		</div>
	);
};
