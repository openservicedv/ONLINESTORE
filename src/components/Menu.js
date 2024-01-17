import {
	Button,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarToggle
} from 'react-bootstrap';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './Home';
import FAQ from './FAQ';
import Store from './Store';
import Blog from './Blog';
import logo from '../logo/logo8.png';
import {useState} from 'react';
import {LuShoppingCart} from 'react-icons/lu';
import Cart from './Cart';

const Menu = () => {
	const [searchText, setSearchText] = useState('');
	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleCartToggle = () => {
		setIsCartOpen(!isCartOpen);
	};
	const closeCart = () => {
		setIsCartOpen(false);
	};
	const handleSearch = (event) => {
		setSearchText(event.target.value);

	};

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light">
				<Container>
					<NavbarBrand>
						<img
							src={logo}
							height="40"
							width="170"
							alt="logo"
						/>
					</NavbarBrand>
					<NavbarToggle aria-controls="responsive-navbar-nav"/>
					<NavbarCollapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link to="/" as={NavLink}> Home </Nav.Link>
							<Nav.Link to="/blog" as={NavLink}> Blog </Nav.Link>
							<Nav.Link to="/store" as={NavLink}> Store </Nav.Link>
							<Nav.Link to="/FAQ" as={NavLink}> FAQ </Nav.Link>
						</Nav>
						<Form className="d-flex flex-row">
							<FormControl
								name="form-id"
								inline="true"
								placeholder="search"
								type="text"
								className="me-sm-3"
								onChange={() => handleSearch(event)}
							/>
							<Button
								className="rounded-circle"
								style={{width: '3rem', height: '3rem', position: 'relative'}}
								variant="outline-primary"
								onClick={handleCartToggle}
							>
								<LuShoppingCart/>
								<div
									className="rounded-circle bg-danger"
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
					</NavbarCollapse>

					<Cart
						isCartOpen={isCartOpen}
						closeCart={closeCart}
					/>

				</Container>
			</Navbar>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/blog" element={<Blog/>}/>
				<Route path="/store" element={<Store searchText={searchText}/>}/>
				<Route path="/FAQ" element={<FAQ/>}/>
			</Routes>
		</div>
	);
};

export default Menu;
