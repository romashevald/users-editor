'use strict';

import React from "react";
import {URL_EDIT, URL_USERS} from "../router/constants";
import {Link} from "react-router-dom";

export const UsersCard = ({location}) => {
    const {state = {}} = location;
    const {modal, referrer} = state;
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <Link to={`${referrer}${URL_EDIT}`} className="card-link">Edit</Link>
            </div>
        </div>
    );
};


UsersCard.propTypes = {};
