import React from 'react'
import '../css/splash.css'

function Splash() {
    return (
        <>
            <div className='splashContainer'>
                <div className='splashContainer__login'>
                    <button className='splashContainer__button'>Login</button>
                    <button className='splashContainer__button'>Demo</button>
                </div>
                <div className='splashContainer__body'>
                    <h1 id='gotGame'>GOT GAME?</h1>
                    <button id='signupButton'>Create Account</button>
                </div>
            </div>
            <div className='background'>
                <img id='splashImg' src='https://images.unsplash.com/photo-1588915845045-32c9e46c7ae8?ixlib=rb-1.2.1' alt='background'></img>
            </div>
        </>
    )
}

export default Splash;