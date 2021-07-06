import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactHtmlParser from 'react-html-parser';
// eslint-disable-next-line import/no-webpack-loader-syntax
var __html = require('html-loader!../assets/NEWSLETTER INTERNE - Numéro 11 - Février 2021.html');


export default class Home extends React.Component {
  render() {
    return (
        <Paper>
            <div>{ ReactHtmlParser(__html) }</div>;
        </Paper>
    );
  }
}
