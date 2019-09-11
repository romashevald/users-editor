'use strict';

import React from 'react';
import {getAvailablePages} from '../utils/index';
import {Link, Route} from 'react-router-dom';
import {URL_PAGE, URL_USERS} from '../router/constants';
import {pNumberRequired} from "../constants";

export const Pagination = ({pageCount}) => {
    let controls = [];

    for (let i = 1; i <= pageCount; i++) {
        controls.push(
            <li className="page-item" key={i}>
                <Link className="page-link" to={`${URL_USERS}${URL_PAGE}/${i}`}>{i}</Link>
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

Pagination.propTypes = {pageCount: pNumberRequired};

Pagination.defaultProps = {};
