import React from 'react';
import '../css/signup.css';
import { Link } from 'react-router-dom';
import Vectorbg from '../Components/vectorbg';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      // TODO: Finish impl with backend
      email: data.get('email'),
      password: data.get('password'),
      // TODO: Check if confirm password is the same
    });
  };

  return (
    <>
      <Vectorbg />
      <div
        width='597'
        height='359'
        viewBox='0 0 597 359'
        // fill='none'
        className='container'
      >
        <div className='left'>
          <h1>Sign Up</h1>
          Username
          <input name='username' label='Username' autoFocus />
          Password
          <input name='password' label='Password' type='password' />
          Confirm password
          <input name='password' label='Password' type='password' />
          <button>Sign up</button>
          <h5>
            Already have an Account
            <Link style={{ color: '#596EC6' }} to='/login'>
              Log in
            </Link>
          </h5>
        </div>
        <hr />
        <div className='right'>
          <h1>
            Metro<span style={{ color: '#596EC6' }}>Event</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default SignUp;
