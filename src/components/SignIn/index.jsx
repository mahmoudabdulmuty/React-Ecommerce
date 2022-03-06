import { useState } from 'react';
import { signInWithGoogle } from '../../firebase/firebaseConfig';
import Button from '../Button';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='email'
          value={formData.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='password'
          value={formData.password}
          handleChange={handleChange}
          required
        />
        <div className='btns'>
          <Button type='submit'>Sign in</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
