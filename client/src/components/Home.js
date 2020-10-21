import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect} from 'react-router-dom'
import { logout, offline } from '../store/auth';
import Chat from './Chat'
import Profile from './Profile'
import Feed from './Feed'
import '../css/home.css'

function Home() {
    const dispatch = useDispatch();
    
    const currentUser = useSelector(state => state.user);
    const signOut = e => {
        e.preventDefault();
        dispatch(offline(currentUser.id));
        dispatch(logout());
    }
    
    const showUser = () => {
        const userInfo =  document.getElementById("user")
        const feedInfo = document.getElementById('test')
        userInfo.style.display = 'flex'
        feedInfo.style.display = 'none'
    };
    
    const close = () => {
        const userInfo =  document.getElementById("user")
        const feedInfo = document.getElementById('test')
        userInfo.style.display = 'none'
        feedInfo.style.display = 'grid'
    }
    const size = () => {
        const userInfo =  document.getElementById("user")
        const feedInfo = document.getElementById('test')
        if (window.innerWidth > 700) {
            userInfo.style.display = 'flex'
            feedInfo.style.display = 'grid'
        } else {
            userInfo.style.display = 'none'
            feedInfo.style.display = 'grid'
        }
    } 
    
    if (!currentUser.id) return <Redirect to='/' />
    window.addEventListener('resize', size);
    return (
        <div className='homeBackground'>
            <div className='homeContainer'>
                <div className='homeContainer__left' id='user'>
                    <div className='homeContainer__leftHeader'>
                        <h2 id='username'>{currentUser.username}</h2>
                        <div id='x' onClick={close}>X</div>
                    </div>
                    <Profile />
                    <Chat />
                </div>
                <div className='homeContainer__right' id='test'>
                    <button id='modalButton' onClick={showUser}>{currentUser.username}</button>
                    <button id='logout' onClick={signOut}>Sign Out</button>
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default Home;