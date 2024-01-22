import './App.css';
import {NaviBar} from './components/NaviBar';
import {Provider} from 'react-redux';
import {reduxStore} from './redux/reduxStore';

function App() {
	return (
		<Provider store={reduxStore}>
			<div className="App">
				<NaviBar/>
			</div>
		</Provider>
	);
}

export default App;
