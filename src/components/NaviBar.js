import {Container, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap';
import logo from '../logo/logo8.png';
import {Cart} from './Cart';
import {NaviLinks, NaviRoutes} from './NaviRoutes';
import {SearchForm} from './SearchForm';

export const NaviBar = () => {

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light">
				<Container>
					<NavbarBrand>
						<img src={logo} height="40" width="170" alt="logo"/>
					</NavbarBrand>
					<NavbarToggle aria-controls="responsive-navbar-nav"/>
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
