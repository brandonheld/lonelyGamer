import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client'
import { Redirect} from 'react-router-dom'
import { logout, update } from '../store/auth';
import { getFeedUsers } from '../store/feed'
import { baseUrl, devUrl } from '../config';

import '../css/home.css'
let endPoint;
if (process.env.NODE_ENV !== 'production') {
    endPoint = devUrl 
} else {
    endPoint =baseUrl
}
let socket = io.connect(`${endPoint}`)

function Home() {
    const dispatch = useDispatch();
    
    const currentUser = useSelector(state => state.user);
    
    const [messages, setMessages] = useState(['Start of chat']);
    const [message, setMessage] = useState('');
    const [edit, setEdit] = useState(false)
    const [profile, setProfile] = useState({
        nowPlaying: `${currentUser.game_title}`,
        platform: `${currentUser.platform}`,
        description: `${currentUser.description}`
    });

    const signOut = e => {
        e.preventDefault();
        dispatch(logout());
    }
    
    const profileUpdate  = (e) => {
        e.preventDefault()
        setProfile({...profile, [e.target.name]: e.target.value})
    }
    
    useEffect(() => {

        socket.on('message', msg => {
            setMessages([...messages, msg]);
        });
    })

    const storeMessage = e => {
        e.preventDefault()
        setMessage(e.target.value);
    }

    const sendMessage = () => {
        if (message !== '') {
            socket.emit('message', `${currentUser.username}: ${message}`);
            setMessage('');
        } else {
            alert("Please add a message");
        }
    };
    const saveProfile = () => {
        setEdit(!edit)
        dispatch(update(currentUser.id, profile.nowPlaying, profile.platform, profile.description))
    }

    if (!currentUser.id) return <Redirect to='/' />
    dispatch(getFeedUsers())
    return (
        <div className='homeBackground'>
            <div className='homeContainer'>
                <div className='homeContainer__left'>
                    <div className='homeContainer__leftHeader'>
                        <h2 id='username'>{currentUser.username}</h2>
                    </div>
                    <div className='homeContainer__profile'>
                        <h3>Profile</h3>
                        {!edit ? ( 
                            <div onClick={() => setEdit(!edit)}>Edit</div>
                            ): <div onClick={saveProfile }>Save</div>
                        }
                    </div>
                    <div className='homeContainer__playing'>
                        { !edit ? (
                            <div>Playing Now: {currentUser.game_title}</div>
                            ):
                                <input id='nowPlaying'
                                type='text'
                                name='nowPlaying' 
                                defaultValue={profile.nowPlaying}
                                autoComplete='off' 
                                onChange={profileUpdate}
                                />
                        }
                    </div>
                    <div className='homeContainer__platform'>
                        { !edit ? (
                            <div>Platform: {currentUser.platform}</div>
                            ):
                                <input id='platform'
                                type='text'
                                name='platform' 
                                defaultValue={profile.platform}
                                autoComplete='off' 
                                onChange={profileUpdate}
                                />
                        }
                    </div>
                    { !edit ? (
                        <div>{currentUser.description}</div>
                        ):
                            <div className='homeContainer__description'>
                                <textarea id='description'
                                    name='description'
                                    rows='15'
                                    defaultValue={profile.description}
                                    onChange={profileUpdate}
                                />
                            </div>
                    }
                    <div className='chat'>
                        {messages.length > 0 &&
                            messages.map((msg, index) => (
                                <div key={index}>{msg}</div>
                            ))
                        }
                    </div>
                    <div className='chatInput'>
                        <input
                            type='text'
                            value={message} 
                            name='message' 
                            onChange={storeMessage} 
                            placeholder='Enter message'
                        />
                        <button id='sendMesageButton' onClick={sendMessage}>Send</button>
                    </div>
                </div>
                <div className='homeContainer__right'>
                    <button id='logout' onClick={signOut}>Sign Out</button>
                    <div className='homeContainer__feed'>
                        <h2 id='username'>{currentUser.username}</h2>
                        <div>Playing: {profile.nowPlaying}</div>
                        <div>Playing on: {profile.platform}</div>
                        <div>{currentUser.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;