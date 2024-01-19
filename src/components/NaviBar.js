import {Container, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap';
import logo from '../logo/bridgestone1_2_orig.png';
import {Cart} from './Cart';
import {NaviLinks, NaviRoutes} from './NaviRoutes';
import {SearchForm} from './SearchForm';

export const NaviBar = () => {

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light">
				<Container>
					<NavbarBrand
						// className="ms-1"
					>
						<img src={logo} height="15" width="120" alt="logo"/>
					</NavbarBrand>
					<NavbarToggle
						aria-controls="responsive-navbar-nav"
					/>
					<NavbarCollapse id="responsive-navbar-nav">
						<NaviLinks/>
						<SearchForm/>
					</NavbarCollapse>
					<Cart/>
				</Container>
			</Navbar>
			<NaviRoutes/>
		</div>
	);
};
