import React, { useState, useEffect } from "react";
import louis from "../assets/images/louis.png";
import nike from "../assets/images/nike.jpg";
import sony from "../assets/images/sony.jpg";
import CategoryItem from "../components/CategoryItem";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import {
  Grid,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ProductItem from "../components/ProductItem";
import { fetchProductData } from "../store/Product-actions";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useNavigate } from "react-router-dom";

const slideImages = [
  {
    id: "i1",
    url: "/static/media/louis.47608225783456b4c9f9.png",
  },
  {
    id: "i2",
    url: "/static/media/nike.ceb00524834295fa6bc4.jpg",
  },
  {
    id: "i3",
    url: "/static/media/sony.244ee40c95e86b035d63.jpg",
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
    objectFit: "cover", 
      maxHeight: "70vh",
      [`@media screen and (max-width:899px)`]: {
        maxHeight: '30vh',
      },

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
  { id: "b1", img: { louis }, category: "Men" },
  { id: "b2", img: { louis }, category: "Women" },
  { id: "b3", img: { louis }, category: "Electronics" },
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

  console.log(louis);
  const classes = useStyles();
  return (
    <Grid className={classes.secDiv}>
        <Fade>
          {slideImages.map((item) => (
            <img className={classes.poster} alt="carouselImg" key={item.id} src={item.url} />
          ))}
        </Fade>
      <Box className={classes.greyDiv}></Box>
      <Typography className={classes.heading}>
        <CategoryOutlinedIcon fontSize="large" /> CATEGORIES
      </Typography>
      <Grid className={classes.mappedData}>
        {DUMMY_DATA.map((item) => (
          <CategoryItem
            key={item.id}
            //  img={item.img}
            category={item.category}
          />
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
