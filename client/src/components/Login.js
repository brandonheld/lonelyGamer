import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../store/auth';
// import { getFeedUsers } from '../store/feed'
import '../css/login.css'

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUserId = useSelector(state => state.user.id);

    // const onlineUsers = useSelector(state => state.onlineUsers);
    // if(!onlineUsers.length) dispatch(getFeedUsers());

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    const signup = e => {
        e.preventDefault();
        history.push(`/signup`)
    }

    const demo = e => {
        e.preventDefault();
        dispatch(login('demo@demo.com', 'password'));
    };
    
    const demo2 = e => {
        e.preventDefault();
        dispatch(login('ian@aa.io', 'password'))
    };

    const createSquare = () => {
        const section = document.querySelector('section');
        const square = document.createElement('span');
        
        let size = Math.random() * 50;
        
        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';
        square.style.top = Math.random() * window.innerHeight + 'px';
        square.style.left = Math.random() * window.innerWidth + 'px';
        
        
        section.appendChild(square);

        setTimeout(() => {
            square.remove()
        }, 5000)
    }
    useEffect(() => {
        const interval = setInterval(createSquare, 150);

        return () => {
            clearInterval(interval);
        }

    })

    if (currentUserId) return <Redirect to='/home' />

    return (
        <div className='loginBackground'>
            <section id='boxes'></section>
            <div className='loginContainer'>
                <div className='loginContainer__header'>
                    <h1 id='loginLable' className='loginContainer__formLable'>Login</h1>
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
                            onChange={(e) => setEmail(e.target.value)} 
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
                    <button className='loginContainer__signIn' type='submit'>Sign in</button>
                    <button className='loginContainer__signIn' onClick={demo} >Demo Login 1</button> 
                    <button className='loginContainer__signIn' onClick={demo2} >Demo Login 2</button> 
                </form> 
            </div>
        </div>
    );
};

export default Login;