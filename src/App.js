import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Hats from './pages/Hats';
import Home from './pages/Home';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="hats" element={<Hats />} />
		</Routes>
	);
}

export default App;
