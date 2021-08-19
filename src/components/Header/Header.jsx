import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = ( props ) => {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png' />

            <div className={classes.loginBlock}>
                { props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}


export default Header;