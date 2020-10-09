import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect} from 'react-router-dom'
import { logout } from '../store/auth';

import '../css/home.css'

function Home() {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.auth);

    const signOut = e => {
        e.preventDefault();
        dispatch(logout());
    }
    
    const [edit, setEdit] = useState(false)

    const [game, setGame] = useState({
        nowPlaying: 'none',
        platform: 'none',
    })

    const gameUpdate  = (e) => {
        e.preventDefault()
        setGame({...game, [e.target.name]: e.target.value})
    }

    if (!currentUser) return <Redirect to='/' />

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
                            <div>{game.nowPlaying}</div>
                            ):
                                <input id='nowPlaying'
                                type='text'
                                name='game_title' 
                                value={game.nowPlaying}
                                placeholder="What game are you playing?"
                                autoComplete='off' 
                                onChange={gameUpdate}
                                />
                        }
                    </div>
                    <div className='homeContainer__platform'>
                        { !edit ? (
                            <div>{game.platform}</div>
                            ):
                                <input id='platform'
                                type='text'
                                name='platform' 
                                value={game.platform}
                                placeholder="What game are you playing?"
                                autoComplete='off' 
                                onChange={gameUpdate}
                                />
                        }
                    </div>
                    { !edit ? (
                        <div>current User . description</div>
                        ):
                            <div className='homeContainer__description'>
                                <textarea id='description'
                                    name='description'
                                    rows='15'
                                    defaultValue='current User . description'
                                ></textarea>
                            </div>
                    }
                </div>
                <div className='homeContainer__right'>
                    <button id='logout' onClick={signOut}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default Home;