'use strict';

import React, {useEffect, createContext} from 'react';
import {users} from '../../public/api/users';
import {STANDARD_PAGE_SIZE} from '../constants/index';
import {STANDARD_START_PAGE} from "../constants";

export const getAvailablePages = (pageSize = STANDARD_PAGE_SIZE) => {
    return Math.ceil(users.length / pageSize);
};

export const cutUsersData = (users,
                             pageNumber = STANDARD_START_PAGE,
                             limit = STANDARD_PAGE_SIZE) => {
    if (pageNumber < 1) {
        throw 'Cannot get page less than 1';
    }
    if (pageNumber > Math.ceil(users.length / limit)) {
        throw 'Page number is too big';
    }
    return users.slice(((pageNumber - 1) * limit), pageNumber * limit);
};

export const PageContext = createContext({});

export const useRowSelect = (ref, handler, props = []) => {
    return useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('click', e => {
                const tagName = e.target.tagName.toLowerCase();
                if (!/^a|input|select|label$/.test(tagName)) {
                    e.preventDefault();
                    e.stopPropagation();
                    handler();
                }
            });
        }
    }, props);
};