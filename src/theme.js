import { createMuiTheme }  from '@material-ui/core/styles';
import {frFR} from "@material-ui/core/locale";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1AA4BE',
        },
        secondary: { main: '#F6BE30'},
        background: {
            default: "#ededed"
        }
    },
    frFR
});

export default theme;
