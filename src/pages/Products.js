import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState, useMemo } from "react";
import ProductItem from "../components/ProductItem";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { fetchProductData } from "../store/Product-actions";
import {
  FormControl,
  Grid,
  makeStyles,
  ListItem,
  Select,
  Typography,
} from "@material-ui/core";
import { ProductsData } from "../assets/JSON/ProductsData";

const useStyles = makeStyles((theme) => ({
  secDiv: {
    // padding: "0 auto",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    flexWrap: "wrap",
    height: "auto",
    /* width:95%; */
  },
  heading: {
    paddingTop: "2rem",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.5rem",
    fontWeight: "500",
    paddingLeft: "auto",
    textAlign: "center",
  },

  select: {
    height: "35px",
    cursor: "pointer",
    alignSelf: "center",
  },
}));

const Products = () => {
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState("All");

  // const getData = useSelector((state) => state.products.items);

  const getData = async () => {
    setData(await fetchProductData());
  };

  useEffect(() => {
    getData();

    console.log("ascdasef", data);
  }, []);

  const changeHandler = (e) => {
    setCategoryList(e.target.value);
  };

  const getFilteredList = () => {
    if (!categoryList || categoryList === "All") {
      return data;
    }
    return data.filter((item) => item.category === categoryList);
  };

  const filteredList = useMemo(getFilteredList, [categoryList, data]);

  const classes = useStyles();
  return (
    <Grid>
      <Typography className={classes.heading}>
        <LocalMallOutlinedIcon fontSize="large" />
        Products
      </Typography>
      <FormControl>
        <Typography
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}
        >
          Categories :-
        </Typography>
        <Select
          variant="outlined"
          value={categoryList}
          className={classes.select}
          onChange={changeHandler}
        >
          <ListItem value="All">All</ListItem>
          <ListItem value="men's clothing">Men's clothing</ListItem>
          <ListItem value="women's clothing">Women's clothing</ListItem>
          <ListItem value="electronics">Electronics</ListItem>
          <ListItem value="jewelery">Jewelery</ListItem>
        </Select>
      </FormControl>
      <Grid className={classes.secDiv}>
        {filteredList.map((item) => (
          <ProductItem
            key={item.id}
            price={item.price}
            title={item.title}
            // description={item.description}
            image={item.image}
            rating={item.rating.rate}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Products;
