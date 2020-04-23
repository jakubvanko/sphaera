import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

import {URL_HOME, URL_LOGIN} from "../../scripts/constants/urls";

const RoutePermission = ({user, type, ...props}) => {
    if ((type === "login" || type === "admin") && user._id === undefined) return <Redirect to={URL_LOGIN}/>;
    if (type === "admin" && user.admin !== true) return <Redirect to={URL_HOME}/>;
    if (type === "nologin" && user._id !== undefined) return <Redirect to={URL_HOME}/>;
    return <Route {...props}/>
};

export default connect(({user}) => ({user: user.current}))(RoutePermission);
