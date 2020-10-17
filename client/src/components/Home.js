import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect} from 'react-router-dom'
import { logout } from '../store/auth';
import Chat from './Chat'
import Profile from './Profile'
import Feed from './Feed'
import '../css/home.css'

function Home() {
    const dispatch = useDispatch();
    
    const currentUser = useSelector(state => state.user);
    const signOut = e => {
        e.preventDefault();
        dispatch(logout());
    }
    
    if (!currentUser.id) return <Redirect to='/' />
    return (
        <div className='homeBackground'>
            <div className='homeContainer'>
                <div className='homeContainer__left'>
                    <div className='homeContainer__leftHeader'>
                        <h2 id='username'>{currentUser.username}</h2>
                    </div>
                    <Profile />
                    <Chat />
                </div>
                <div className='homeContainer__right'>
                    <button id='modalButton' onClick={signOut}>{currentUser.username}</button>
                    <button id='logout' onClick={signOut}>Sign Out</button>
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default Home;