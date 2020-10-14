import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth'
import { Redirect, useHistory } from 'react-router-dom';
import '../css/signup.css'

function Signup() {
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUserId = useSelector(state => state.user.id);
    const [count, setCount] = useState(1)
    const [form, setForm] = useState({
      email: '',
      username: '',
      password: '',
    })

    const formUpdate  = (e) => {
        e.preventDefault()
        setForm({...form, [e.target.name]: e.target.value}) 
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (form.email && form.password && form.username) {
            dispatch(signup(form.username, form.email, form.password));
        } else if (!form.email && form.password && form.username) {
            alert('Check email')
        } else if (form.email && !form.password && form.username) {
            alert('Check password')
        } else if (form.email && form.password && !form.username) {
            alert('Check username')
        } else {
            alert('Check username, email, and password')
        }
    }
    
    const login = e => {
        e.preventDefault();
        history.push(`/login`)
    }
    
    const createSquare = () => {
        const section = document.querySelector('section');
        const square = document.createElement('span');
        
        let size = Math.random() * 50;
        
        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';
        square.style.top = Math.random() * window.innerHeight + 'px';
        square.style.left = Math.random() * window.innerWidth + 'px';
        
        
        section.appendChild(square);

        setTimeout(() => {
            square.remove()
        }, 5000)
    }
    const noEnter = (e) => {
        if (e.keyIdentifier==='U+000A'||e.keyIdentifier==='Enter'||e.keyCode===13)
            {if (e.target.nodeName==='INPUT'&&
                    (e.target.type==='text'||
                     e.target.type==='email')) {
                     e.preventDefault();
                    return false;
                }
            }
        
    }
    useEffect(() => {
        window.addEventListener('keydown',noEnter)

        const interval = setInterval(createSquare, 150);

        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', noEnter);
        }

    }, [])

    if (currentUserId) return <Redirect to='/home' />

    return (
        <>
            <div className='signupBackground'>
                <section></section>
                <div className="signupContainer">
                    <form className='signupContainer__form' onSubmit={handleSubmit}>
                    {count === 1 ? (
                        <>
                            <div className='signupContainer__text'>
                                <p>Is that you? Are you the one that the legends speak of? It can't be you! What is your name?</p>
                            </div>
                            <div>
                                <input
                                    className='signupContainer__formInput'
                                    type='text' 
                                    name='username' 
                                    value={form.username} 
                                    placeholder="Enter your username" 
                                    required={true}
                                    onChange={formUpdate} 
                                />
                            </div>
                        </>
                    ): null}
                    {count === 2 ? (
                        <>
                            <div className='signupContainer__text'>
                                <p>Whoa it really is you! I thought you were just a myth! Let me be the first to welcome you to Lonely Gamer {form.username}! 
                                While you are out on your adventures there may come a time when we may need to email you top secret information,
                                in that event where would would you like us to send it?
                                </p>
                            </div>
                            <div>
                                <input 
                                    className='signupContainer__formInput'
                                    type='email' 
                                    name='email' 
                                    value={form.email} 
                                    placeholder="Enter your email"
                                    autoComplete='off' 
                                    onChange={formUpdate} 
                                />
                            </div>
                        </>
                    ): null}
                    {count === 3 ? (
                        <>
                            <div className='signupContainer__text'>
                                <p>Nice! Here at Lonely Gamer we would like to keep the myths about you just that myths,
                                    but if all your information is just out in the open there are no myths to be spoken of. 
                                    Therefore we will keep your information hidden with a code only you know. </p>
                            </div>
                            <div>
                                <input 
                                    className='signupContainer__formInput'
                                    type='password' 
                                    name='password' 
                                    value={form.password} 
                                    placeholder="Enter your password"
                                    autoComplete='off' 
                                    onChange={formUpdate} 
                                />
                            </div>
                        </>
                    ): null}
                    </form>
                    <div className='signupContainer__buttonsBox'>
                        <div>
                            <button className='signupContainer__button' id='signupBackButton' onClick={() => setCount(count - 1)} disabled={count < 2}>Back</button>
                        </div>
                        {count === 3 ? (
                        <div>
                            <button className='signupContainer__button' id='signupPageButton' onClick={handleSubmit}>Create Profile</button>
                        </div>
                        ): null}
                        {count === 1 ? (
                        <div>
                            <button className='signupContainer__button' id='signupPageButton' onClick={login}>Have an account?</button>
                        </div>
                        ): null}
                        <div>
                            <button className='signupContainer__button' id='signupNextButton' onClick={() => setCount(count + 1)} disabled={count > 2}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;