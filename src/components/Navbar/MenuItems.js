import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
// import AccountCircle from '@material-ui/icons/AccountCircle';

export const MenuItems = [
    {
        title: "Home",
        path: "/",
        iconComponent: <HomeIcon />,
    },
    {
        title: "Annuaire",
        path: "/persons",
        iconComponent: <MenuBookIcon />,
    },
    {
        title: "Applications",
        path: "/apps",
        iconComponent: <AppsIcon />,
    },
    // {
    //     title: "Profile",
    //     path: "/profile",
    //     iconComponent: <AccountCircle />,
    // }
];
