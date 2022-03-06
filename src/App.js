import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { auth } from './firebase/firebaseConfig';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='login' element={<SignInAndSignUp />} />
        </Routes>
      </>
    );
  }
}

export default App;
