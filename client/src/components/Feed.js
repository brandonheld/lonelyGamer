import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedUsers } from '../store/feed'
import '../css/home.css'

function Feed() {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user);
    const onlineUsers = useSelector(state => state.onlineUsers);
    if(!onlineUsers.length) dispatch(getFeedUsers())
    console.log(onlineUsers)
    debugger

    return (
        <div className='homeContainer__feed'>
            <h2 id='feedUsername'>{currentUser.username}</h2>
            <h2>Playing Now</h2>
            <div id='nowPlaying'>{currentUser.game_title}</div>
            <h2>Playing on</h2>
            <div>{currentUser.platform}</div>
            <div id='feedDes'>{currentUser.description}</div>
        </div> 
    )
}
export default Feed;
