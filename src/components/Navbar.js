import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

export const Navbar = () => {
  const [positionStyle, setPositionStyle] = useState(false);

  const handleChange = () => {
    if (window.scrollY >= 66) {
      setPositionStyle(true);
    } else {
      setPositionStyle(false);
    }
  };

  useEffect(() => {
    handleChange();
    window.addEventListener("scroll", handleChange);
  }, []);

  return (
    <header id="navbar" className={classes.header} style={{position: positionStyle ? 'fixed' : ""}}>
      <div className={classes.logo}>YAYFASHION</div>
      <nav className={classes.nav}>
        <ul>
          <li>Register</li>
          <li style={{ display: "flex" }}>
            <AccountCircleIcon />
            Login
          </li>
          <li>
            <ShoppingCartOutlined />
          </li>
        </ul>
      </nav>
    </header>
  );
};
