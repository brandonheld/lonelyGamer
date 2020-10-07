import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Splash from './Splash'

function Pages() {
    return (
        <>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/' component={Splash} />
        </>
    )
}

export default Pages;