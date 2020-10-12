import React from 'react';
import { useSelector } from 'react-redux';
import '../css/home.css'

function Feed() {
    const currentUser = useSelector(state => state.user);

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
