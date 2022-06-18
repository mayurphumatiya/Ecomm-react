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
import { Grid, Button, Box, makeStyles, Typography } from "@material-ui/core";
import ProductItem from "../components/ProductItem";
import { fetchProductData } from "../store/Product-actions";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useNavigate } from "react-router-dom";
import { ProductsData } from "../assets/JSON/ProductsData";
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import Himg from "../assets/images/Himg.png";
import access from "../assets/images/access.png"


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
    height: "100%",
    objectFit: "fill",
    maxHeight: "80vh",
    [`@media screen and (max-width:899px)`]: {
      maxHeight: "30vh",
      height: "100%",
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
  logo: {
    height: "5rem",
    width: "auto",
    padding: "2rem",
    [`@media screen and (max-width:768px)`]:{
      height:'3rem',
    },
  },
  overlayCtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "bisque",
  },
  handm: {
    display: "flex",
    flexWrap:'wrap',
    justifyContent: "space-evenly",
  },
  handmen: {
    display:'flex',
    justifyContent:'center',
    height: "80vh",
    width: "35vw",
    padding:'2rem 0rem',
    alignItems:'center',
    [`@media screen and (max-width:768px)`]:{
      height:'50vh',
      width:'45vw',
    },
    [`@media screen and (max-width:470px)`]:{
      height:'60vh',
      width:'80vw',
    },
  },
  handimg: {
    height: "100%",
    width: "100%",
    objectFit: "fill",
  },
  access: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: "60vw",
    height: "40vh",
    margin:'auto',
    paddingBottom:'2rem',
    [`@media screen and (max-width:470px)`]:{
      height:'40vh',
      width:'80vw',
    },
  },
  categoryBtn: {
    padding: "0.725rem 1rem",
    background: "#fff",
    color: "#000",
    textAlign: "center",
    fontSize: "1rem",
    [`@media screen and (max-width:768px)`]:{
      padding: "0.5rem 0.725rem",
      width:'15vw',
      fontSize: "0.725rem"
    },
    [`@media screen and (max-width:600px)`]:{
      padding: "0.5rem 0.5rem",
      width:'18vw',
      fontSize: "0.5rem"
    },
  },
  bannerTxt:{
    fontSize:'2rem',
    fontWeight:'700',
    [`@media screen and (max-width:768px)`]:{
      fontSize:'1.5rem',
    },
  }
}));

const DUMMY_DATA = [
  { id: "b1", img: mensFashion, category: "Men" },
  { id: "b2", img: womensFashion, category: "Women" },
  { id: "b3", img: pcSetup, category: "Electronics" },
];
const HM = [
  {
    id: "h1",
    img: "//lp2.hm.com/hmgoepprod?set=source[/e8/e0/e8e02182fd81a1446f617505c57df37b5ede531e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
    category: "Men",
  },
  {
    id: "h2",
    img: "//lp2.hm.com/hmgoepprod?set=source[/f9/55/f9551db98c64287d851ed7206750f24cc7a5cdba.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
    category: "Women",
  },
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

        {/* CATEGORIES */}
      <Typography className={classes.heading}>
        <CategoryOutlinedIcon fontSize="large" /> CATEGORIES
      </Typography>
      <Grid className={classes.mappedData}>
        {DUMMY_DATA.map((item) => (
          <CategoryItem key={item.id} img={item.img} category={item.category} />
        ))}
      </Grid>


        {/* H&M */}
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img src={Himg} alt="logo" className={classes.logo} />
      </Grid>

      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
      backgroundColor:'#f5f5f5',
        }}
      >
        <Grid className={classes.handm}>
          {HM.map((x) => (
            <Grid key={x.id} className={classes.handmen}>
                 <Grid className={classes.overlayCtn}>
            <Typography className={classes.bannerTxt}>
            {x.category}
          </Typography>
          <Button className={classes.categoryBtn}>Shop Now</Button>
          </Grid>
              <img src={x.img} alt="model" className={classes.handimg} />
            </Grid>
          ))}
        </Grid>

        <Grid className={classes.access}>
        <Grid className={classes.overlayCtn}>

        <Typography className={classes.bannerTxt}>
            Accessories
          </Typography>
          <Button className={classes.categoryBtn}>Shop Now</Button>
        </Grid>
          <img src={access} alt="img" className={classes.handimg}/>
        </Grid>
      </Grid>

        {/* TRENDING */}
      <Typography className={classes.heading}>
            <WhatshotOutlinedIcon fontSize='large' />
            TRENDING
      </Typography>


        {/* PRODUCTS */}
      <Typography className={classes.heading}>
        <LocalMallOutlinedIcon fontSize="large" />
        PRODUCTS
      </Typography>
      <Grid className={classes.mappedData}>
        {productData.slice(12, 20).map((item) => (
          <ProductItem
            key={item.id}
            price={item.price}
            title={item.title}
            // description={item.description}
            image={item.image}
            // rating={item.rating.rate}
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
