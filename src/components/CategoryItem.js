import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  category: {
    height: "90vh",
    width: "30vw",
    margin: "2rem 0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [`@media screen and (max-width:899px)`]: {
      height: "50vh",
    },
    [`@media screen and (max-width:768px)`]: {
      width: "90%",
      height: "70vh",
    },
    [`@media screen and (max-width:500px)`]: {
      height: "60vh",
    },

    "&:hover": {},
    /* flex-direction:column; */
  },
  categoryImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlayCtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "white",
  },
  categoryBtn: {
    padding: "0.725rem 1rem",
    background: "teal",
    color: "#fff",
    textAlign: "center",
    fontSize: "1rem",
    [`@media screen and (max-width:600px)`]:{
      padding: "0.5rem 0.5rem",
      width:'20vw',
      fontSize: "0.5rem"
    },
  },
  bannerTxt:{
    fontSize:'2rem',
    fontWeight:'700',
    [`@media screen and (max-width:600px)`]:{
      fontSize:'1.5rem',
    },
  }
}));

const CategoryItem = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.category}>
        <img src={props.img} alt="Banner" className={classes.categoryImg} />
        <Grid className={classes.overlayCtn}>
          <Typography className={classes.bannerTxt}>
            {props.category}
          </Typography>
          <Button className={classes.categoryBtn}>Shop Now</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryItem;
