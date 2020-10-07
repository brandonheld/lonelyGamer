import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../store/auth';
import '../css/splash.css'

function Splash() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const currentUserId = useSelector(state => state.auth.id);
    
    const demo = e => {
        e.preventDefault();
        dispatch(login('demo@demo.com', 'password'))
    };

    const signin = e => {
        e.preventDefault();
        history.push(`/login`)
    }

    const signup = e => {
        e.preventDefault();
        history.push(`/signup`)
    }

    if (currentUserId) return <Redirect to='/home' />
    
    return (
        <>
            <div className='splashContainer'>
                <div className='splashContainer__login'>
                    <button className='splashContainer__button' onClick={signin}>Login</button>
                    <button className='splashContainer__button' onClick={demo} >Demo Login</button>
                </div>
                <div className='splashContainer__body'>
                    <h1 id='gotGame'>GOT GAME?</h1>
                    <button id='signupButton' onClick={signup}>Create Account</button>
                </div>
            </div>
            <div className='background'>
                <img id='splashImg' src='https://images.unsplash.com/photo-1588915845045-32c9e46c7ae8?ixlib=rb-1.2.1' alt='background'></img>
            </div>
            <div className='backgroundColor'>
            </div>
        </>
    )
}

export default Splash;