// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signup } from '../store/auth'
// import { Redirect } from 'react-router-dom';
// import '../css/login.css'

// function Login() {
//     const currentUserId = useSelector(state => state.auth.id);
//     const dispatch = useDispatch();
    
//     const [form, setForm] = useState({
//         email: '',
//         username: '',
//         password: '',
//     })
    
//     const formUpdate  = (e) => {
//         setForm({...form, [e.target.username]: e.target.value})
//     }
    
//     const handleSubmit = e => {
//         e.preventDefault();
//         dispatch(signup(form.username.toLowerCase(), form.email.toLowerCase(), form.password));
//     }

//     if (currentUserId) return <Redirect to='/' />
//     return (
//         <>
//             <div className="loginContainer">
//                 <form className='loginContainer__form' onSubmit={handleSubmit}>
//                 <div>
//                     <input 
//                         type='text' 
//                         name='username' 
//                         value={form.username} 
//                         placeholder="Enter username" 
//                         onChange={formUpdate} 
//                     />
//                 </div>
//                 <div>
//                     <input 
//                         type='email' 
//                         name='email' 
//                         value={form.email} 
//                         placeholder="Enter email" 
//                         onChange={formUpdate} 
//                     />
//                 </div>
//                 <div>
//                     <input 
//                         type='password' 
//                         name='password' 
//                         value={form.password} 
//                         placeholder="Enter password" 
//                         onChange={formUpdate} 
//                     />
//                 </div>
//                 <div>
//                     <button type='submit' className='loginContainer__loginButton'>Log in</button>
//                 </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// export default Login;
