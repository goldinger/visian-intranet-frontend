import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {isLoggedIn} from "../../service/Authentication";

export default class PrivateRoute extends React.Component {
    render(){
        if (!isLoggedIn()) {
            return (<Redirect to="/login"/>)
        }
        return (
            <Route {...this.props} />
        )
    }
}
