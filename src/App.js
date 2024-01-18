import './App.css';
import {NaviBar} from './components/NaviBar';
import {CartProvider} from './contexts/CartContext';
import {SearchProvider} from './contexts/SearchContext';

function App() {
	return (
		<CartProvider>
			<SearchProvider>
				<div className="App">
					<NaviBar/>
				</div>
			</SearchProvider>
		</CartProvider>
	);
}

export default App;
