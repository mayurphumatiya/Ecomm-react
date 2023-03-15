import React, { useEffect, useState } from "react";
// import classes from "./Navbar.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  nav : {
    display: "flex",
    flexDirection: "row",
    /* width:100%; */
    justifyContent: "right",
  },
  header: {
    width: "100%",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff",
    /* background-color: transparent; */
    /* border-bottom: 1px solid grey; */
    /* position: fixed; */
    opacity: 0.9,
    zIndex: 2,
    [`@media screen and (max-width:600px)`]:{
      justifyContent:"space-evenly"
    },
    [`@media screen and (max-width:380px)`]:{
      height:'2rem'
    }
  },
  
  logo : {
    cursor:"pointer",
    fontSize: "2rem",
    /* width: 50%; */
    /* text-align:center; */
    display:"flex",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: "10%",
    color: "#0d0d0d",
    fontFamily: "Philosopher",
    [`@media screen and (max-width:500px)`]:{
      fontSize:'1.5rem'
    },
    [`@media screen and (max-width:380px)`]:{
      fontSize:"1rem",
    },
    "&:hover": {
      color:'#F7CAC9',
    }
  },
  img:{
    height:"100%",
    width:"auto",
  },
  
  ul : {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  
  li: {
    marginLeft: "1.5rem",
    fontWeight: 500,
    fontSize: "1.25rem",
    color: "#0d0d0d",
    cursor:'pointer',
    [`@media screen and (max-width:500px)`]:{
      fontSize:'1rem',
    },
    [`@media screen and (max-width:380px)`]:{
      fontSize:'0.725rem',
    },
    "&:hover": {
      color:'grey',
    }
  },
  
  
}))

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

  const media = useMediaQuery('(max-width:500px)');
  const classes = useStyles();
  return (
    <Grid id="navbar" className={classes.header} style={{position: positionStyle ? 'fixed' : ""}}>
      <Grid className={classes.logo} onClick={redirectToHome}>YAYFASHION</Grid>
      <Grid className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>Register</li>
          <li className={classes.li} style={{ display: "flex" }}>
            <AccountCircleIcon fontSize={media ? "small" : "medium"} />
            Login
          </li>
          <li className={classes.li}>
            <ShoppingCartOutlined fontSize={media ? "small" : "medium"}/>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};
