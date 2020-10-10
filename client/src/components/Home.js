import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client'
import { Redirect} from 'react-router-dom'
import { logout } from '../store/auth';

import '../css/home.css'

let endPoint = 'http://localhost:5000'
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
        getMessages();
    });

    const getMessages = () => {
        socket.on('message', msg => {
            setMessages([...messages, msg]);
        });
    };

    const setMsg = e => {
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
    }
    if (!currentUser.id) return <Redirect to='/' />

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
                            <div>Playing Now: {profile.nowPlaying}</div>
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
                            <div>Platform: {profile.platform}</div>
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
                            messages.map(msg => (
                                <div>{msg}</div>
                            ))
                        }
                    </div>
                    <div className='chatInput'>
                        <input
                            type='text'
                            value={message} 
                            name='message' 
                            onChange={setMsg} 
                            placeholder='Enter message'
                        />
                        <button id='sendMesageButton' onClick={sendMessage}>Send</button>
                    </div>
                </div>
                <div className='homeContainer__right'>
                    <button id='logout' onClick={signOut}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default Home;