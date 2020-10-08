import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { logout } from '../store/auth';

import '../css/home.css'

function Home() {
    const dispatch = useDispatch();

    const currentUserId = useSelector(state => state.auth.id);

    const signOut = e => {
        e.preventDefault();
        dispatch(logout());
    }

    if (!currentUserId) return <Redirect to='/' />

    return (
        <div className='homeBackground'>
            <div className='homeContainer'>
                <div className='homeContainer__left'>

                </div>
                <div className='homeContainer__right'>
                    <button id='logout' onClick={signOut}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default Home;