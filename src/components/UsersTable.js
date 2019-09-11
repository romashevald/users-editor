'use strict';

import React, {useRef} from 'react';
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
    const ref = useRef(null);

    return (
        <div ref={ref}>
            <table className="table table-striped table-hover table-bordered ">
                <Thead/>
                <tbody>
                {
                    users.map((d, i) => {
                        return (
                            <UsersTr key={`users-${i}`}
                                     index={i}
                                     user={d}
                            />
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



