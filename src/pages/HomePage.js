import React, { useState, useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { Fade } from "react-slideshow-image";
import sony from "../assets/images/sony.jpg";
import shoes from "../assets/images/shoes.png";
import mainBanner from "../assets/images/mainBanner.png";
import pcSetup from "../assets/images/pcSetup.jpg";
import mensFashion from "../assets/images/mensFashion.png";
import womensFashion from "../assets/images/womensFashion.png";
import "react-slideshow-image/dist/styles.css";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import { Grid, Box, makeStyles, Typography } from "@material-ui/core";
import ProductItem from "../components/ProductItem";
import { fetchProductData } from "../store/Product-actions";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useNavigate } from "react-router-dom";

const slideImages = [
  {
    id: "i1",
    url: mainBanner,
  },
  {
    id: "i2",
    url: shoes,
  },
  {
    id: "i3",
    url: sony,
  },
];

const useStyles = makeStyles((theme) => ({
  secDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "auto",
    width: "100%",
  },
  greyDiv: {
    height: "2rem",
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  poster: {
    width: "100%",
    minHeight: 0,
    objectFit: "fill",
    maxHeight: "80vh",
    [`@media screen and (max-width:899px)`]: {
      maxHeight: "30vh",
    },
    // [`@media screen and (max-width:420px)`]: {
    //   maxHeight: "40vh",
    // },
  },
  heading: {
    margin: "2rem 0rem",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.5rem",
    fontWeight: "500",
    paddingLeft: "auto",
    textAlign: "center",
    [`@media screen and (max-width:899px)`]: {
      margin: "0.5rem 0rem",
    },
  },
  mappedData: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#f5f5f5",
  },

  moreProducts: {
    margin: "2rem 0rem",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",
    fontWeight: "500",
    textAlign: "center",
    cursor: "pointer",
    transition: "font-size 0.5s",
    "&:hover": {
      fontSize: "2.5rem",
      textDecoration: "underline",
    },
  },
}));

const DUMMY_DATA = [
  { id: "b1", img: mensFashion, category: "Men" },
  { id: "b2", img: womensFashion, category: "Women" },
  { id: "b3", img: pcSetup, category: "Electronics" },
];
const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    setProductData(await fetchProductData());
  };

  useEffect(() => {
    getData();
    console.log(productData, "productsData");
  }, []);

  const classes = useStyles();
  return (
    <Grid className={classes.secDiv}>
      <Fade>
        {slideImages.map((item) => (
          <img
            className={classes.poster}
            alt="carouselImg"
            key={item.id}
            src={item.url}
          />
        ))}
      </Fade>
      <Box className={classes.greyDiv}></Box>
      <Typography className={classes.heading}>
        <CategoryOutlinedIcon fontSize="large" /> CATEGORIES
      </Typography>
      <Grid className={classes.mappedData}>
        {DUMMY_DATA.map((item) => (
          <CategoryItem key={item.id} img={item.img} category={item.category} />
        ))}
      </Grid>
      <Typography className={classes.heading}>
        <LocalMallOutlinedIcon fontSize="large" />
        PRODUCTS
      </Typography>
      <Grid className={classes.mappedData}>
        {productData.slice(0, 8).map((item) => (
          <ProductItem
            key={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
            image={item.image}
            rating={item.rating.rate}
          />
        ))}
      </Grid>
      <Box
        className={classes.greyDiv}
        style={{ height: "7rem", color: "teal" }}
      >
        <Typography
          className={classes.moreProducts}
          onClick={() => navigate("/products")}
        >
          SHOW MORE PRODUCTS <ArrowForwardRoundedIcon fontSize="medium" />
        </Typography>
      </Box>
    </Grid>
  );
};

export default HomePage;
