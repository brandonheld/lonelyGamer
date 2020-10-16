import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedUsers } from '../store/feed'
import '../css/home.css'

function Feed() {
    const dispatch = useDispatch();
    const [updateState, setUpdateState] = useState(true)
    const [getFeed, setGetFeed] = useState(true)
    const currentUser = useSelector(state => state.user);
    const onlineUsers = useSelector(state => state.onlineUsers);
    const updateFeed = () => {
        if (getFeed) {
            dispatch(getFeedUsers())
            setGetFeed(false)
        }
    }

    let onlineUser = onlineUsers.filter(user => user.id !== currentUser.id)
    let feedUser = onlineUser[0]
    const matches = [];
    
    const letsPlay = () => {
        let match = onlineUsers.shift()
        matches.push([...matches, match])
        setUpdateState(!updateState)
    }
    const maybeLater = () => {
        onlineUsers.shift()
        setUpdateState(!updateState)
    }
    
    useEffect(() => {
        updateFeed()
    })
    return (
        <div className='homeContainer__feed'>
            { onlineUser.length > 0 ? (
                <>
                <div className='homeContainer__feedButtons'>
                    <button id='maybeLater' onClick={maybeLater}>Maybe Later</button>
                    <button id='letsPlay' onClick={letsPlay}>Let's Play</button>
                </div>
                <h2 id='feedUsername'>{feedUser.username}</h2>
                <h2>Playing Now</h2>
                <div id='nowPlaying'>{feedUser.game_title}</div>
                <h2>Playing on</h2>
                <div id='platform'>{feedUser.platform}</div>
                <p id='feedDes'>{feedUser.description}</p>
                </>
            ) : <div><h1 id='emptyFeed'>Oh no there aren't any more users to match with! Dont forget to check your chat for matches! </h1></div>
            }
        </div> 
    )
    
}
export default Feed;
