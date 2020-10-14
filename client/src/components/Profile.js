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
                <div onClick={() => setEdit(!edit)}>Edit</div>
                ): <div onClick={saveProfile }>Save</div>
            }
        </div>
        <div className='homeContainer__playing'>
            { !edit ? (
                <div className='homeContainer__lables'>
                    <h2>Playing Now</h2>
                    <div>{currentUser.game_title}</div>
                </div>
                ):
                    <input className='homeContainer__profileInputfeild'
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
                <div className='homeContainer__lables'>
                    <h2>Platform</h2>
                    <div>{currentUser.platform}</div>
                </div>
                ):
                    <input className='homeContainer__profileInputfeild'
                    type='text'
                    name='platform' 
                    defaultValue={profile.platform}
                    autoComplete='off' 
                    onChange={profileUpdate}
                    />
            }
        </div>
        { !edit ? (
            <div className='homeContainer__lables'>
            <h2>About me</h2>
            <div id='userDes'>{currentUser.description}</div>
        </div>
            ):
                <div className='homeContainer__description'>
                    <textarea className='homeContainer__profileInputfeild'
                        name='description'
                        rows='15'
                        defaultValue={profile.description}
                        onChange={profileUpdate}
                    />
                </div>
        }
        </>
    )
}

export default Profile;