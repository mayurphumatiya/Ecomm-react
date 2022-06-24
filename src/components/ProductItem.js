import React from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  productItem: {
    display: "flex",
    flexDirection: "column",
    width:'20vw',
    justifyContent:'space-between',
    height: "70vh",
    margin: "1rem 0.5rem",
    border:'0.5px solid #f5f5f5',
    [`@media screen and (min-width:768px)`] : {
    "&:hover": {
      boxShadow: "5px 5px 8px 3px #d3d3d3",
    },
  },
    [`@media screen and (min-width:1150px)`]: {
      width: "23vw",
    },
    [`@media screen and (max-width:1150px)`]: {
      width: "23vw",
      height:'60vh',
    },
    [`@media screen and (max-width:900px)`]: {
      width: "45vw",
      height:'60vh'
    },
    [`@media screen and (max-width:550px)`]: {
      width: "80%",
      height:'70vh'
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
    width: "60%",
    height: "70%",
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
    [`@media screen and (max-width:768px)`]: {
      fontSize:'13px'
    },
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
    flexDirection: "column",
    justifyContent:"space-between",
  },
  productPrice: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    fontSize: "16px",
    [`@media screen and (max-width:768px)`]: {
      fontSize:'14px'
    },
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

const SlideProducts = (props) => {
    const classes = useStyles();
    const media = useMediaQuery('(max-width:768px)');
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
            {props.title.slice(0,36)}
          </Typography>
          {/* <Typography className={classes.productDescription}>
            {props.description.slice(0, 90)}...
          </Typography> */}
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>
            <Box className={classes.productpricerate}>
              <Typography className={classes.productPrice}>
                Rs.{props.price}
              </Typography>
              <Box>
                <Rating name="half-rating-read" defaultValue={props.rating} size={media ? 'small' : 'medium'} precision={0.5} readOnly />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Button color='primary' variant="contained" style={{ color:'#fff', backgroundColor:'#0d0d0d ', fontSize: media ? "13px": ''}}><ShoppingCartOutlinedIcon/>Add To Cart</Button>
      </Grid>
  )
}

export default SlideProducts;