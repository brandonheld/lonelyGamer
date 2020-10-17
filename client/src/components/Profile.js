import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../store/auth';
import '../css/home.css'

function Profile() {
    const dispatch = useDispatch();
    
    const currentUser = useSelector(state => state.user);
    
    const [edit, setEdit] = useState(false)
    const [profile, setProfile] = useState({
        nowPlaying: `${currentUser.game_title}`,
        platform: `${currentUser.platform}`,
        description: `${currentUser.description}`
    });

    const profileUpdate  = (e) => {
        e.preventDefault()
        setProfile({...profile, [e.target.name]: e.target.value})
    }
    const saveProfile = () => {
        setEdit(!edit)
        dispatch(update(currentUser.id, profile.nowPlaying, profile.platform, profile.description))
    }

    return (
        <>
        <div className='homeContainer__profile'>
            <h3>Profile</h3>
            {!edit ? ( 
                <div className='homeContainer__edit' onClick={() => setEdit(!edit)}>Update</div>
                ): <div className='homeContainer__edit' onClick={saveProfile }>Save</div>
            }
        </div>
        <div className='homeContainer__playing'>
            { !edit ? (
                <div className='homeContainer__labels'>
                    <h2>Playing Now</h2>
                    <div>{currentUser.game_title}</div>
                </div>
                ):
                    <>
                    <p className='homeContainer__inputLabel'>What you are you playing?</p>
                    <input className='homeContainer__profileInputfeild'
                    type='text'
                    name='nowPlaying' 
                    defaultValue={profile.nowPlaying}
                    autoComplete='off' 
                    onChange={profileUpdate}
                    />
                    </>
            }
        </div>
        <div className='homeContainer__platform'>
            { !edit ? (
                <div className='homeContainer__labels'>
                    <h2>Platform</h2>
                    <div>{currentUser.platform}</div>
                </div>
                ):
                    <>
                    <p className='homeContainer__inputLabel'>What platform are you on?</p>
                    <input className='homeContainer__profileInputfeild'
                    type='text'
                    name='platform' 
                    defaultValue={profile.platform}
                    autoComplete='off' 
                    onChange={profileUpdate}
                    />
                    </>
            }
        </div>
        { !edit ? (
            <div className='homeContainer__labels'>
                <h2>About me</h2>
                <div id='userDes'>{currentUser.description}</div>
            </div>
            ):
                <div className='homeContainer__description'>
                    <p className='homeContainer__inputLabel'>About you...</p>
                    <textarea className='homeContainer__profileInputfeild'
                        name='description'
                        rows='8'
                        defaultValue={profile.description}
                        onChange={profileUpdate}
                    />
                </div>
        }
        </>
    )
}

export default Profile;