import {users} from '../../public/api/users';
import {STANDARD_PAGE_SIZE} from '../constants/index';

export const getAvailablePages = (pageSize = STANDARD_PAGE_SIZE) => {
    return Math.ceil(users.length / pageSize);
};