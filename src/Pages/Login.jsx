import { Link } from 'react-router-dom';
import React from 'react';
import '../css/login.css';
import Vectorbg from '../components/vectorbg';

// const defaultTheme = createTheme()

// NOTE(hans): Login template
// https://github.com/mui/material-ui/tree/v5.15.12/docs/data/material/getting-started/templates/sign-up
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            // TODO: Finish impl with backend
            email: data.get('email'),
            password: data.get('password'),
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
                    <h1>Log In</h1>
                    Username
                    <input name='username' label='Username' autoFocus />
                    Password
                    <input name='password' label='Password' type='password' />
                    <button>Log in</button>
                    <h5>
                        Don’t have an Account yet?
                        <Link style={{ color: '#596EC6' }} to='/signup'>
                            Sign up
                        </Link>
                    </h5>
                </div>
                <hr />
                <div className='right'>
                    <h1>
                        Metro<span style={{ color: '#596EC6' }}>Events</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Login;
