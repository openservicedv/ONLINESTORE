import './App.css';
import {NaviBar} from './components/NaviBar';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<NaviBar/>
			</div>
		</Provider>
	);
}
