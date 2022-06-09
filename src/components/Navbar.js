import React from 'react';
import classes from './Navbar.module.css';


export const Navbar = () => {
  return (
    <header className={classes.header}>
    <div className={classes.logo}>E-comm</div>
    <nav className={classes.nav} >
        <ul>
            <li>Register</li>
            <li>Login</li>
        </ul>
    </nav>
    </header>
  )
}
