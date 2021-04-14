import React from 'react';
import { Route } from 'react-router-dom';
import Box from "@material-ui/core/Box";

const EmptyLayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Box display="flex" flexDirection="column" alignItems="center" padding="10px" flex={1} marginTop="150px" >
        <Component {...props} />
      </Box>
    )}
  />
);

export default EmptyLayoutRoute;
