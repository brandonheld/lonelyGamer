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

    const currentUser = useSelector(state => state.auth);
    
    const [edit, setEdit] = useState(false)
    const [game, setGame] = useState({
        nowPlaying: 'Click edit to change',
        platform: 'Click edit to change',
    });
    const [messages, setMessages] = useState(['Start of chat']);
    const [message, setMessage] = useState('');

    const signOut = e => {
        e.preventDefault();
        dispatch(logout());
    }
    
    const gameUpdate  = (e) => {
        e.preventDefault()
        setGame({...game, [e.target.name]: e.target.value})
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

    if (!currentUser.id) return <Redirect to='/' />

    return (
        <div className='homeBackground'>
            <div className='homeContainer'>
                <div className='homeContainer__left'>
                    <div className='homeContainer__leftHeader'>
                        <div id='avatar'>avatar_id</div>
                        <h2 id='username'>{currentUser.username}</h2>
                    </div>
                    <div className='homeContainer__profile'>
                        <h3>Profile</h3>
                        {!edit ? ( 
                            <div onClick={() => setEdit(!edit)}>Edit</div>
                            ): <div onClick={() => setEdit(!edit)}>Save</div>
                        }
                    </div>
                    <div className='homeContainer__playing'>
                        { !edit ? (
                            <div>Playing Now: {game.nowPlaying}</div>
                            ):
                                <input id='nowPlaying'
                                type='text'
                                name='game_title' 
                                defaultValue={game.nowPlaying}
                                placeholder="What game are you playing?"
                                autoComplete='off' 
                                onChange={gameUpdate}
                                />
                        }
                    </div>
                    <div className='homeContainer__platform'>
                        { !edit ? (
                            <div>Platform: {game.platform}</div>
                            ):
                                <input id='platform'
                                type='text'
                                name='platform' 
                                defaultValue={game.platform}
                                placeholder="What game are you playing?"
                                autoComplete='off' 
                                onChange={gameUpdate}
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
                                    defaultValue='current User . description'
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