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
import {LuShoppingCart} from 'react-icons/lu';
import {NavLink, Route, Routes} from 'react-router-dom';
import logo from '../logo/logo8.png';
import Home from './Home';
import Game from './Game';
import Blog from './Blog';
import {Store} from '../Store/Store';
import {Cart} from '../Cart/Cart';
import {useContext} from 'react';
import {SearchContext} from '../contexts/SearchContext';

const NaviBar = () => {
	const {searchText, isCartOpen, handleSearch, handleCartToggle, closeCart} = useContext(SearchContext);

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
							<Nav.Link to="/game" as={NavLink}> Game </Nav.Link>
						</Nav>
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
				<Route path="/game" element={<Game/>}/>
			</Routes>
		</div>
	);
};

export default NaviBar;
