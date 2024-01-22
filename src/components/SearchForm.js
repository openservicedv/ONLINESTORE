import {PiShoppingCartSimpleLight} from 'react-icons/pi';
import {Button, Form, FormControl} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {handleCartToggle, handleSearch} from '../redux/actions';

export const SearchForm = () => {
	const dispatch = useDispatch();

	return (
		<Form className="d-flex flex-row">
			<FormControl
				name="form-name"
				inline="true"
				placeholder="search"
				type="text"
				className="me-sm-3"
				onChange={() => dispatch(handleSearch(event))}
			/>
			<Button
				className="rounded-circle"
				style={{width: '3rem', height: '3rem', position: 'relative'}}
				variant="outline-secondary"
				onClick={() => dispatch(handleCartToggle())}
			>
				<PiShoppingCartSimpleLight/>
				<div
					className="rounded-circle bg-dark"
					style={{
						width: '1.5rem',
						height: '1.5rem',
						color: 'white',
						position: 'absolute',
						transform: 'translate(20%, 20%)',
						bottom: 0,
						right: 0
					}}
				>
				</div>
			</Button>
		</Form>
	);
};
