import {Button, Form, FormControl} from 'react-bootstrap';
// import {LuShoppingCart} from 'react-icons/lu';
import {useContext} from 'react';
import {SearchContext} from '../contexts/SearchContext';
import {PiShoppingCartSimpleLight} from 'react-icons/pi';

export const SearchForm = () => {

	const {handleSearch, handleCartToggle} = useContext(SearchContext);

	return (
		<Form className="d-flex flex-row">
			<FormControl
				name="form-name"
				inline="true"
				placeholder="search"
				type="text"
				className="me-sm-3"
				onChange={() => handleSearch(event)}
			/>
			<Button
				className="rounded-circle"
				style={{width: '3rem', height: '3rem', position: 'relative'}}
				variant="outline-secondary"
				onClick={handleCartToggle}
			>
				{/*<LuShoppingCart/>*/}
				<PiShoppingCartSimpleLight />
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
