'use strict';

import React, {Component} from 'react';
import {UsersTable} from './UsersTable';
import {Pagination} from './Pagination';
import {users} from '../../public/api/users';
import {STANDARD_START_PAGE} from "../constants";
import {cutUsersData, getAvailablePages, PageContext} from "../utils";
import {Link, Route, Redirect} from 'react-router-dom';
import {URL_PAGE, URL_USERS} from "../router/constants";
import {UsersCard} from "./UserCard";
import {Switch} from "react-router";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: cutUsersData(users),
            currentPage: Number(/\d+/.exec(location.hash)),
            referrer: null,
            pageCount: getAvailablePages()
        };
        this._handleSelectRow = this._handleSelectRow.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const currentPage = Number(/\d+/.exec(location.hash));
        if (prevState.currentPage !== currentPage
            && currentPage <= this.state.pageCount) {
            this.setState({
                users: cutUsersData(users, currentPage),
                currentPage
            });
        }
    }

    render() {
        const {users, referrer, pageCount} = this.state;
        if (referrer) return <Redirect to={referrer}/>;

        return (
            <div className="App">
                <PageContext.Provider value={{
                    handleSelectRow: this._handleSelectRow
                }}>
                    <UsersTable users={users}/>
                    <Pagination pageCount={pageCount}/>
                </PageContext.Provider>

            </div>
        );
    }

    _handleSelectRow(id) {
         //
         this.setState({referrer: `${URL_USERS}/${id}`});
    }
};


