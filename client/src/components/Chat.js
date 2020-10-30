import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import { useSelector } from 'react-redux';
import { baseUrl, devUrl } from '../config';
import '../css/home.css'

let endPoint;
if (process.env.NODE_ENV !== 'production') {
    endPoint = devUrl 
} else {
    endPoint =baseUrl
}
let socket = io(`${endPoint}`,{reconnectionAttempts: 5, reconnectionDelay: 10000})

function Chat() {
    const currentUser = useSelector(state => state.user);
    const [messages, setMessages] = useState(['Emulates a Let\'s Play match and starts chat for demo purpose']);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        socket.on('message', msg => {
            setMessages([...messages, msg]);
        });
    
    })
    const sendMessage = () => {
        if (message !== '') {
            socket.emit('message', `${currentUser.username}: ${message}`);
            setMessage('');
        } else {
            alert("Please add a message");
        }
    };

    const storeMessage = e => {
        e.preventDefault()
        setMessage(e.target.value);
    }

    return (
        <div className='chatBox'>
            <h2 id='chatLable'>CHAT</h2>
            <div className='chat'>
                {messages.length > 0 &&
                    messages.map((msg, index) => (
                        <div id='chatMessage'key={index}>{msg}</div>
                    ))
                }
            </div>
            <div className='chatInput'>
                <input
                    type='text'
                    value={message} 
                    name='message' 
                    onChange={storeMessage}
                    autoComplete='off' 
                    placeholder='Enter message'
                />
                <button id='sendMesageButton' onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chat;
