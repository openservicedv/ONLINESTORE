import {Nav} from 'react-bootstrap';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import {Store} from './Store';
import Game from './Game';

export const NaviLinks = () => {
	return (
		<Nav className="me-auto">
			<Nav.Link to="/" 		as={NavLink}> Home </Nav.Link>
			<Nav.Link to="/blog" 	as={NavLink}> Blog </Nav.Link>
			<Nav.Link to="/store" 	as={NavLink}> Tire Store </Nav.Link>
			<Nav.Link to="/game" 	as={NavLink}> Game </Nav.Link>
		</Nav>
	);
};
export const NaviRoutes = () => {
	return (
		<Routes>
			<Route path="/" 		element={<Home/>}/>
			<Route path="/blog" 	element={<Blog/>}/>
			<Route path="/store" 	element={<Store/>}/>
			<Route path="/game" 	element={<Game/>}/>
		</Routes>
	);
};
