'use strict';

import React, {Component} from 'react';
import {UsersTable} from './UsersTable';
import {Pagination} from './Pagination';
import {users} from '../../public/api/users';
import {STANDARD_START_PAGE} from "../constants";
import {cutUsersData, getAvailablePages, PageContext} from "../utils";
import {Link, Route, Redirect} from 'react-router-dom';
import {URL_EDIT, URL_PAGE, URL_USERS} from "../router/constants";
import {UsersCard} from "./UserCard";
import {Switch} from "react-router";
import PageUsersEditor from './PageUsersEditor';
import {UsersEdit} from './UserEdit';

export default class App extends Component {
    render() {
        return (
            <div className="tabs">
                <Switch>
                    <Route path={`${URL_USERS}${URL_PAGE}/:page`} component={PageUsersEditor}/>
                    <Route path={`${URL_USERS}/:userId`} component={UsersCard}/>
                    <Route path={`${URL_USERS}/:userId${URL_EDIT}`} component={UsersEdit}/>
                </Switch>
            </div>
        );
    }
};


