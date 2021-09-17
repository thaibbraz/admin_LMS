import React from "react";
import { Route, Redirect } from "react-router-dom";
import Local from '../helpers/Local';


function NonAuthenticatedRoute(props) {
    // Redirect to /login if anonymous user
    let userId = Local.getUserId();
    if (userId) {
        return <Redirect to="/" />;
    }

    // Render <Route> containing child component(s)
    return (
        <Route exact path={props.path}>
            {props.children}
        </Route>
    );
}

export default NonAuthenticatedRoute;