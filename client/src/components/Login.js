import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../store/auth';
import '../css/login.css'

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUserId = useSelector(state => state.auth.id);
    const [email, setEmailname] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    };

    const signup = e => {
        e.preventDefault();
        history.push(`/signup`)
    }
    if (currentUserId) return <Redirect to='/home' />

    return (
        <div className='loginBackground'>
            <div className='loginContainer'>
                <div className='loginContainer__header'>
                    <h1>Login</h1>
                    <button id='registerButton' onClick={signup} >Create Account</button>
                </div>
                <form className='loginContainer__form' onSubmit={handleSubmit}>
                    <label className='loginContainer__formLable'>Email address</label>
                        <input className='loginContainer__formInput'
                            type="email" 
                            name="email" 
                            value={email}
                            required={true}
                            autoComplete="off" 
                            onChange={(e) => setEmailname(e.target.value)} 
                        />
                    <label className='loginContainer__formLable'>Password</label>
                        <input className='loginContainer__formInput'
                            type='password' 
                            name='password' 
                            value={password}
                            required={true}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    <button id='signIn' type='submit'>Sign in</button> 
                </form> 
            </div>
        </div>
    );
};

export default Login;