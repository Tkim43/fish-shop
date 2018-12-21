import React from 'react';
import SignIn from './sign_in';
import SignUp from './sign_up';
import NotFound from '../general/404'
import {Route, Switch} from 'react-router-dom';

export default ({match: {path}}) =>{
    return (
        <Switch>
            <Route path = {`${path}/sign-in`} component = {SignIn}/>
            <Route path = {`${path}/sign-up`} component = {SignUp}/>
            <Route component = {NotFound}/>
        </Switch>
    )
}