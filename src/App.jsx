import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="login" element={<SignInAndSignUp />} />
			</Routes>
		</>
	);
}

export default App;
