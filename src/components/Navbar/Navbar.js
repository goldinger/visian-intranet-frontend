import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from './logo-Visian.png';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {MenuItems} from "./MenuItems";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {logOut} from "../../service/Authentication";

const useStyles = makeStyles((theme) => ({
    grow: {
        flex: "1 1 80px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        display: 'none',
        maxHeight: "60px",
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    navLink: {
        textDecoration: "inherit",
        color: "inherit",
        // "& :hover": {textDecoration: "underline"}
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {MenuItems.map(item => (
                <NavLink className={classes.navLink} to={item.path}>
                    <MenuItem>
                        <IconButton color="inherit">
                            {item.iconComponent}
                        </IconButton>
                        {item.title}
                    </MenuItem>
                </NavLink>
            ))}
            <MenuItem onClick={logOut}>
                <IconButton color="inherit">
                    <PowerSettingsNewIcon />
                </IconButton>
                Déconnexion
            </MenuItem>


        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <NavLink to='/'>
                        <Button color="inherit"><img className={classes.logo} alt="Visian-logo" src={logo} /></Button>
                    </NavLink>
                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        {MenuItems.map(item => (
                            <NavLink className={classes.navLink} to={item.path}>
                                <IconButton color="inherit">
                                    {item.iconComponent}
                                </IconButton>
                            </NavLink>
                        ))}
                        <IconButton onClick={logOut} color="inherit">
                                    <PowerSettingsNewIcon />
                                </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}
