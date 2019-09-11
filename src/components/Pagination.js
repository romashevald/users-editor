'use strict';

import React from 'react';
import {getAvailablePages} from '../utils/index';
import {Link} from 'react-router-dom';
import {URL_PAGE, URL_USERS} from '../router/constants';

export const Pagination = ({}) => {
    let controls = [];
    const pageCount = getAvailablePages();

    for (let i = 1; i <= pageCount; i++) {
        controls.push(
            <li className="page-item" key={i}>
                <Link to={`/${i}`}>{i}</Link>
            </li>
        );
    }


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {controls}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {};

Pagination.defaultProps = {};
