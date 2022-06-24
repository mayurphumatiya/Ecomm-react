import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [positionStyle, setPositionStyle] = useState(false);
  const navigate = useNavigate();

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

  const redirectToHome = () =>{
  navigate("/")
  }

  return (
    <header id="navbar" className={classes.header} style={{position: positionStyle ? 'fixed' : ""}}>
      <div className={classes.logo} onClick={redirectToHome}>YAYFASHION</div>
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
