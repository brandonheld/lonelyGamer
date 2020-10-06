import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth'
import { Redirect } from 'react-router-dom';


function Signup() {
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
        
    const [form, setForm] = useState({
      email: '',
      username: '',
      password: '',
    })

    const [count, setCount] = useState(1)
    
    const formUpdate  = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signup(form.username, form.email, form.password));
    }
    
    if (currentUserId) return <Redirect to='/' />
    return (
        <>
            <div className="signupContainer">
                <form className='signupContainer__form' onSubmit={handleSubmit}>
                {count === 1 ? (
                  <div>
                    <input 
                      type='text' 
                      name='username' 
                      value={form.username} 
                      placeholder="Enter username" 
                      onChange={formUpdate} 
                    />
                  </div>
                ): null}
                {count === 2 ? (
                <div>
                  <input 
                    type='email' 
                    name='email' 
                    value={form.email} 
                    placeholder="Enter email" 
                    onChange={formUpdate} 
                  />
                </div>
                ): null}
                {count === 3 ? (
                <div>
                  <input 
                    type='password' 
                    name='password' 
                    value={form.password} 
                    placeholder="Enter password" 
                    onChange={formUpdate} 
                  />
                </div>
                ): null}
                {count === 3 ? (
                <div>
                    <button type='submit' className='signupContainer__signupButton'>Create Profile</button>
                </div>
                ): null}
                </form>
                <div>
                    <button className='signupContainer__backButton' onClick={() => setCount(count - 1)} disabled={count < 2}>Back</button>
                </div>
                <div>
                    <button className='signupContainer__nextButton' onClick={() => setCount(count + 1)} disabled={count > 2}>Next</button>
                </div>
            </div>
        </>
    )
}
export default Signup;