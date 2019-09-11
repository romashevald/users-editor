'use strict';

import React, {useContext, useRef} from 'react';
import {pObjectRequired} from '../constants/index';
import {PageContext, useRowSelect} from "../utils";
import {pNumberRequired} from "../constants";

export const UsersTr = ({user, index}) => {
    const {id, firstName, lastName, email} = user;
    const ref = useRef(null);
    const context = useContext(PageContext);

    useRowSelect(ref, () => context.handleSelectRow(id), []);

    return (
        <tr ref={ref}>
            <th>{id}</th>
            <th>{`${firstName} ${lastName}`}</th>
            <th>{email}</th>
        </tr>
    );
};

UsersTr.propTypes = {
    user: pObjectRequired,
    index: pNumberRequired,
};

