import React from 'react';
import {Route, HashRouter as Router} from 'react-router-dom'
import {URL_USERS} from './constants';
import {App} from '../src/App';
import ThemeSwitcher from '../src/ThemeSwitcher';

export const Root = () => (
    <Router>
        <Route exact path={`${URL_USERS}`} component={App}/>
        <Route exact path={`${URL_USERS}/1`} component={ThemeSwitcher}/>
        {/*<Route path={`${URL_LIST}/:id${URL_EDIT}`} component={TaskEdit}/>*/}
    </Router>
);