import React from "react";
import Paper from "@material-ui/core/Paper";
import {getAllPersons} from "../service/BackendAPI";
import { DataGrid } from '@material-ui/data-grid';

export default class Persons extends React.Component {
    state = {
        persons: [],
        columns: [
            { field: 'profile_picture', headerName: 'Photos', width: 150,
                renderCell: params => <img height="100px" width="auto" src={process.env.REACT_APP_BACKEND_URL + "media/" + params.value} /> },
            { field: 'first_name', headerName: 'Prénom', width: 150 },
            { field: 'last_name', headerName: 'Nom', width: 150 },
            { field: 'phone_number', headerName: 'Tél.', width: 150 },
            { field: 'email', headerName: 'Email', width: 150 },
        ]
    };

    componentDidMount() {
        getAllPersons().then(response => this.setState({persons: response}));
    }

    render() {
        const width = this.state.columns.reduce((a, v) => a + v.width, 0);
        return (
            <Paper style={{marginBottom: "60px", width: width+20}}>
                <DataGrid autoHeight autoWidth rowHeight={100} columns={this.state.columns} rows={this.state.persons} />
            </Paper>
        );
    }
}
