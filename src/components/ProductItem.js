import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  productItem: {
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    margin: "1rem 0.5rem",
    border:'0.5px solid #f5f5f5',
    "&:hover": {
      boxShadow: "5px 5px 8px 3px #d3d3d3",
    },
    [`@media screen and (min-width:1150px)`]: {
      width: "23vw",
    },
    [`@media screen and (max-width:1150px)`]: {
      width: "29vw",
      height:'50vh',
    },
    [`@media screen and (max-width:768px)`]: {
      width: "45vw",
      height:'55vh'
    },
    [`@media screen and (max-width:550px)`]: {
      width: "80%",
    },
  },
  imgDiv: {
    width: "100%",
    backgroundColor:'#fff',
    height: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // "&:hover": {
    //   boxShadow: "5px 5px 8px 8px #d3d3d3",
    // },
    // borderBottom: "1px solid #cecece",
  },
  productImg: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
  productDetails: {
    padding: "0.5rem",
  },
  productTitle: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    fontSize: "15px",
    marginBottom: "5px",
  },
  productDescription: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    color: "#808080",
    fontSize: "12px",
    marginBottom: "5px",
  },
  productpricerate: {
    display: "flex",
    // flexDirection: "column",
    justifyContent:"space-between",
  },
  productPrice: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    fontSize: "14px",
  },
  productRating: {
    fontWeight: "700",
    fontSize: "14px",
    display: "flex",
    width: "4rem",
    height: "1rem",
  },
  cartButton: {
    "&.MuiButton-root": {
      color: "#fff",
      fontWeight: "700",
      // fontSize:'18px',
      border: "3px solid #0d0d0d",
      padding: "0px 20px",
      backgroundColor:'#1b1d33'
      // height:'3rem'
    },
  },
}));

const ProductItem = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.productItem}>
      <Grid className={classes.imgDiv}>
        <img
          src={props.image}
          alt="smartphone"
          className={classes.productImg}
        />
      </Grid>
      <Grid className={classes.productDetails}>
        <Typography className={classes.productTitle}>
          {props.title.slice(0,45)}
        </Typography>
        {/* <Typography className={classes.productDescription}>
          {props.description.slice(0, 90)}...
        </Typography> */}
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box className={classes.productpricerate}>
            <Typography className={classes.productPrice}>
              {props.price}
            </Typography>
            {/* <Box
              className={classes.productRating}
              style={{
                backgroundColor: props.rating >= 2.5 ? "#228b22" : "#FFFF00",
              }}
            >
              <Box style={{ color: "#fff" }}>
                <StarIcon fontSize="small"/>
              </Box>
              {props.rating}
            </Box> */}
          </Box>
          {/* <Button
            variant="outlined"
            size="medium"
            className={classes.cartButton}
          >
            ADD TO CART
          </Button> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductItem;
