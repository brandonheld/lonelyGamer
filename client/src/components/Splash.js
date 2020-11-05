import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import '../css/splash.css'

function Splash() {
    const history = useHistory();
    
    const currentUserId = useSelector(state => state.user.id);
    
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
                </div>
                <div className='splashContainer__body'>
                    <h1 id='gotGame'>GOT GAME?</h1>
                    <button id='signupButton' onClick={signup}>Create Account</button>
                </div>
                <div className="splashContainer__footer">
                    <p>Created By Brandon Held</p>
                    <div className='splashContainer__FooterLinks'> 
                            <a href="https://www.linkedin.com/in/brandon-held12/">
                                <i className="fab fa-linkedin fa-3x"></i>
                            </a>
                            <a href="https://github.com/brandonheld/lonelyGamer">
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                            <a href="https://angel.co/u/brandon-held">
                                <i className="fab fa-angellist fa-3x"></i>
                            </a>
                            <a href="https://brandonheld.dev/">
                                <i className="fas fa-desktop fa-3x"></i>
                            </a>
                    </div>
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
