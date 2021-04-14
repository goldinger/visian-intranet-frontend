import React from 'react';
import Navbar from "../Navbar/Navbar";
import Box from "@material-ui/core/Box";

class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <main>
                <Navbar />
                <Box style={{flex: "1 1 100%"}} display="flex" alignItems="center" flex={1} flexDirection="column" marginTop="60px">
                    {children}
                </Box>
            </main>
        );
    }
}

export default MainLayout;
