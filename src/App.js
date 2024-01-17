import './App.css';
import Header from './components/Header';
import {CartProvider} from './contexts/CartContext';


function App() {
	return (
		<CartProvider>
			<div className="App">
				<Header/>
			</div>
		</CartProvider>
	);
}

export default App;
