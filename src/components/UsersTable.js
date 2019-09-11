'use strict';

import React from 'react';
import {pArrayRequired} from '../constants/index';
import {UsersTr} from './UsersTr';

const Thead = () => {
    return (
        <thead>
        <tr>
            <th className="th-sm">UserId</th>
            <th className="th-sm">Username</th>
            <th className="th-sm">Email</th>
        </tr>
        </thead>
    );
};

export const UsersTable = ({users}) => {
    return (
        <div>
            <table className="table table-striped table-bordered ">
                <Thead/>
                <tbody>
                {
                    users.map((d, i) => {
                        return (
                            <UsersTr key={`users-${i}`} user={d}/>
                        );
                    })
                }
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    );
};
UsersTable.propTypes = {
    users: pArrayRequired
};



