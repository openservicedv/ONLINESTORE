import './App.css';
import Menu from './components/Menu';
import {CartProvider} from './contexts/CartContext';


function App() {
	return (
		<CartProvider>
			<div className="App">
				<Menu/>
			</div>
		</CartProvider>
	);
}

export default App;
//refactor
