import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/crown.svg';
import { auth } from '../../firebase/firebaseConfig';
import './Navbar.scss';

const Navbar = ({ currentUser }) => {
  return (
    <nav className='navbar'>
      <NavLink className='navbar-brand' to='/'>
        <img src={logo} alt='' />
      </NavLink>
      <ul className='navbar-nav'>
        <li className='navbar-item'>
          <NavLink to='/shop'>shop</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/contact'>contact</NavLink>
        </li>
        {currentUser ? (
          <li onClick={() => auth.signOut()} className='navbar-item'>
            Sign Out
          </li>
        ) : (
          <li className='navbar-item'>
            <NavLink to='/login'>Sign in</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
