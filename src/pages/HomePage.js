import React,{ useState, useEffect } from "react";
import louis from "../assets/images/louis.png";
import CategoryItem from "../components/CategoryItem";
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import ProductItem from "../components/ProductItem";
import { fetchProductData } from "../store/Product-actions";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  secDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "auto",
    width: "100%",
  },
  banner: {
    width: "100%",
    height: "70vh",
    [`@media screen and (max-width:899px)`]: {
      height: "40vh",
    },
  },
  greyDiv:{
    height:'2rem',
    width:'100%',
    backgroundColor:'#f5f5f5',
  },
  heading: {
    margin: "2rem 0rem",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.5rem",
    fontWeight: "500",
    paddingLeft: "auto",
    textAlign: "center",
  },
  mappedData:{
    display: "flex", justifyContent: "center", flexWrap: "wrap", backgroundColor:'#f5f5f5'
  },
  poster: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  moreProducts:{
    margin: "2rem 0rem",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",
    fontWeight: "500",
    textAlign: "center",
    cursor:'pointer',
    transition:'font-size 0.5s',
    '&:hover':{
      fontSize:"2.5rem",
      textDecoration:'underline',
    },
  },
}));

const DUMMY_DATA = [
  { id: "b1", img: { louis }, category: "Men" },
  { id: "b2", img: { louis }, category: "Women" },
  { id: "b3", img: { louis }, category: "Electronics" },
];

const HomePage = () => {
  const [productData, setProductData] = useState([])
  const navigate = useNavigate();

  const getData = async () => {
    setProductData(await fetchProductData());
  };

  useEffect(() => {
  getData();
  console.log(productData,"productsData")
  }, [productData])
  



  const classes = useStyles();
  return (
    <Grid className={classes.secDiv}>
      <Grid className={classes.banner}>
        <img src={louis} alt="poster" className={classes.poster} />
      </Grid>
      <Box className={classes.greyDiv}></Box>
      <Typography className={classes.heading}><CategoryOutlinedIcon fontSize="large"/> CATEGORIES</Typography>
      <Grid
        className={classes.mappedData}
      >
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
        {productData.slice(0,8).map((item)=>(
          <ProductItem
          key={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
            image={item.image}
            rating={item.rating.rate} />
          ))}
      </Grid>
      <Box className={classes.greyDiv} style={{height:"7rem", color:'teal'}}><Typography className={classes.moreProducts} onClick={()=>navigate('/products')}>SHOW MORE PRODUCTS <ArrowForwardRoundedIcon fontSize="medium"/></Typography></Box>
      
    </Grid>
  );
};

export default HomePage;
