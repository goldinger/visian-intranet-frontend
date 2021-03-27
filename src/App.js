import React from "react";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Container from "@material-ui/core/Container";
import './App.css';
import Paper from "@material-ui/core/Paper";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Navbar/>

                <Container className="container" maxWidth="lg">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path='/' render={() => <Redirect to= "/home" />} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </ThemeProvider>

    );
}

