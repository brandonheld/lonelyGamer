import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Splash from './Splash'
import Home from './Home'

function Pages() {
    return (
        <>
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/' component={Splash} />
        </>
    )
}

export default Pages;