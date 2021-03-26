import React from 'react';
import { MenuItems } from "./MenuItems";
import {NavLink} from "react-router-dom";
import './Navbar.css';
import logo from './logo-Visian.png';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <NavLink className='nav-logo' to='/'>
                    <img alt="Visian" src={logo} />
                </NavLink>
                <ul className="nav-menu">
                    {MenuItems.map(item => (<li>
                        <NavLink
                            className={item.className ? item.className : 'nav-link'}
                            activeClassName={item.activeClassName ? item.activeClassName : "active-nav-link" }
                            to={item.path}
                        >
                            {item.title}
                        </NavLink>
                    </li>))}
                </ul>

            </nav>
        )
    }
}

