import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/crown.svg';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink className="navbar-brand" to="/">
				<img src={logo} alt="" />
			</NavLink>
			<ul className="navbar-nav">
				<li className="navbar-item">
					<NavLink to="/shop">shop</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink to="/contact">contact</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink to="/login">sign in</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
