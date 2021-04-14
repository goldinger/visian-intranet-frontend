import React from "react";
import {Switch, Redirect, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Applications from "./components/Applications";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import './App.css';
import Profile from "./components/Profile";
import EmptyLayoutRoute from "./components/Layout/EmptyLayoutRoute";
import MainLayout from "./components/Layout/MainLayout";
import PrivateRoute from "./components/Layout/PrivateRoute";
import Persons from "./components/Persons";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <EmptyLayoutRoute exact path="/login" component={Login} />

                    <MainLayout>
                        <PrivateRoute exact path="/home" component={Home} />
                        <PrivateRoute exact path="/apps" component={Applications} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <PrivateRoute exact path="/persons" component={Persons} />
                        <PrivateRoute exact path='/' render={() => <Redirect to= "/home" />} />
                    </MainLayout>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>

    );
}

