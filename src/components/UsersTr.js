'use strict';

import React from 'react';
import {pObjectRequired} from '../constants/index';

export const UsersTr = ({user}) => {
    const {id, firstName, lastName, email} = user;
    return (
        <tr>
            <th>{id}</th>
            <th>{`${firstName} ${lastName}`}</th>
            <th>{email}</th>
        </tr>
    );
};

UsersTr.propTypes = {
    user: pObjectRequired
};

