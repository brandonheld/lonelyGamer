import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';

function Login() {
    const currentUserId = useSelector(state => state.auth.id);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    };
    const demo = e => {
        e.preventDefault();
        dispatch(login('demo@demo.com', 'password'))
    };

    if (currentUserId) return <Redirect to='/' />
    return (
        <div className='background'>
            <div className='loginContainer'>
                <div className='loginContainer__header'>
                    <h1>Login</h1>
                </div>
                <form className='loginContainer__form' onSubmit={handleSubmit}>
                    <label className='loginContainer__formLable'>Email address</label>
                        <input className='loginContainer__formInput'
                            type="text" 
                            name="username" 
                            value={username}
                            required={true}
                            autoComplete="off" 
                            onChange={(e) => setUsername(e.target.value)} 
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
                    <button id='demoButton' onClick={demo}>Demo</button>
                </form>  
            </div>
        </div>
    );
};

export default Login;