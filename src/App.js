import './App.css';
import {Route, Switch, Redirect, BrowserRouter, NavLink} from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    return (
        <BrowserRouter>
              <Navbar/>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path='/' render={() => <Redirect to= "/home" />} />
            </Switch>
        </BrowserRouter>
    );
}

