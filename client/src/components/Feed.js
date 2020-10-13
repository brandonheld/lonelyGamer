import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedUsers } from '../store/feed'
import '../css/home.css'

function Feed() {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user);
    const onlineUsers = useSelector(state => state.onlineUsers);
    if(!onlineUsers.length) dispatch(getFeedUsers())
    
    return (
        <div className='homeContainer__feed'>
            <div className='homeContainer__feedButtons'>
                <button>Maybe Later</button>
                <button>Let's Play</button>
            </div>
            <h2 id='feedUsername'>{currentUser.username}</h2>
            <h2>Playing Now</h2>
            <div id='nowPlaying'>{currentUser.game_title}</div>
            <h2>Playing on</h2>
            <div>{currentUser.platform}</div>
            <p id='feedDes'>{currentUser.description}</p>
        </div> 
    )
}
export default Feed;
