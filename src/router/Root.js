'use strict';

import React from 'react';
import {Route, HashRouter as Router} from 'react-router-dom'
import {URL_PAGE, URL_USERS} from './constants';
import App from '../components/App';

export const Root = () => (
    <Router >
        <Route exact path={`${URL_USERS}`} component={App}/>
        <Route exact path={`${URL_USERS}/${URL_PAGE}`} component={App}/>
        {/*<Route path={`${URL_LIST}/:id${URL_EDIT}`} component={TaskEdit}/>*/}
    </Router>
);