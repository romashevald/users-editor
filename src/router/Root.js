'use strict';

import React from 'react';
import {Redirect, Route, HashRouter as Router, Switch} from 'react-router-dom'
import {URL_EDIT, URL_PAGE, URL_USERS} from './constants';
import App from '../components/App';
import {UsersCard} from "../components/UserCard";
import {UsersEdit} from "../components/UserEdit";

export const Root = () => (
    <Router>
        <Route exact path={`${URL_USERS}${URL_PAGE}/:page`} component={App}/>
        <Route exact path={`${URL_USERS}/:userId`} component={UsersCard}/>
        <Route exact path={`${URL_USERS}/:userId${URL_EDIT}`} component={UsersEdit}/>
        <Redirect to={`${URL_USERS}${URL_PAGE}/1`}/>
    </Router>
);