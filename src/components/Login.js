import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Email, VpnKey} from "@material-ui/icons";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {authenticate} from "../service/BackendAPI";
import FormHelperText from "@material-ui/core/FormHelperText";
import {setToken} from "../service/Authentication";

export default class Home extends React.Component {
    state = {
        username: "",
        password: "",
        username_error: null,
        password_error: null,
        non_field_errors_error: null,
    };

    handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    };

    clearErrors() {
        this.setState({
            username_error: null,
            password_error: null,
            non_field_errors_error: null,
        })
    }

    login() {
        this.clearErrors();
        let component = this;
        authenticate(this.state.username, this.state.password)
            .then(response => {
                if (response.ok) {
                    response.json().then(responseJson => {
                        setToken(responseJson.token);
                        component.props.history.push('/')
                    });
                }
                else {
                    response.json().then(responseJson => {
                        let errors = {};
                        Object.keys(responseJson).forEach(key => {
                            errors[key + "_error"] = responseJson[key][0];
                        });
                        component.setState(errors);
                    });
                }
            })
    }

    _handleKeyDown(e){
        if (e.key === "Enter") {
            this.login()
        }
    }

    render() {
        return (
            <Paper style={{maxWidth: "500px", width: "100%"}}>
                <form className="login-form">
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Email/>
                        </Grid>
                        <Grid item style={{flex: 1}}>
                            <FormControl fullWidth>
                                <InputLabel>Email</InputLabel>
                                <Input id="username" onChange={this.handleChange} type="text" onKeyDown={this._handleKeyDown.bind(this)}/>
                                <FormHelperText error>{this.state.username_error}</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <VpnKey />
                        </Grid>
                        <Grid item style={{flex: 1}}>
                            <FormControl fullWidth>
                                <InputLabel>Mot de passe</InputLabel>
                                <Input id="password" onChange={this.handleChange} type="password" onKeyDown={this._handleKeyDown.bind(this)}/>
                                <FormHelperText error>{this.state.password_error}</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <div style={{height: '50px'}}/>
                    <FormControl fullWidth>
                        <Button className="login-button" variant="contained" color="primary"
                                onClick={this.login.bind(this)} onKeyDown={this._handleKeyDown.bind(this)}>
                            Connexion
                        </Button>
                        <FormHelperText error>{this.state.non_field_errors_error}</FormHelperText>
                    </FormControl>

                </form>
            </Paper>
        );
    }
}
