'use strict';

import React from "react";
import {URL_EDIT, URL_USERS} from "../router/constants";
import {Link} from "react-router-dom";

export const UsersCard = () => {
    const currentPage = Number(/\d+/.exec(location.hash));
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <Link href={`${URL_USERS}/${currentPage}${URL_EDIT}`}
                      className="card-link">Edit</Link>
            </div>
        </div>
    );
};
// modal
{/*<div className="modal" tabIndex="-1" role="dialog">*/}
    {/*<div className="modal-dialog" role="document">*/}
        {/*<div className="modal-content">*/}
            {/*<div className="modal-header">*/}
                {/*<h5 className="modal-title">Modal title</h5>*/}
                {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                    {/*<span aria-hidden="true">&times;</span>*/}
                {/*</button>*/}
            {/*</div>*/}
            {/*<div className="modal-body">*/}
                {/*<p>Modal body text goes here.</p>*/}
            {/*</div>*/}
            {/*<div className="modal-footer">*/}
                {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
                {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}
{/*</div>*/}

UsersCard.propTypes = {};
