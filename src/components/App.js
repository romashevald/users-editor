'use strict';

import React, {Component} from 'react';
import {UsersTable} from './UsersTable';
import {Pagination} from './Pagination';
import {users} from '../../public/api/users';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users,
        };
    }

    render() {
        const {users} = this.state;
        return (
            <div className="App">
                <UsersTable users={users}/>
                <Pagination/>
            </div>
        );
    }
};


