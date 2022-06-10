import React from "react";
import { Box, Button, Card, CardContent, CardMedia , makeStyles, Typography } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme)=>({
productItem:{
  display:"flex",
  flexDirection:'column',
  height:"400px",
  width:"55vh",
  margin:'2rem 0.5rem 0rem 0.5rem',
  '&:hover':{
    boxShadow: "5px 5px 8px 8px #d3d3d3",
  },
[`@media screen and (min-width:1150px)`]:{
  width:'45vh'
},
[`@media screen and (max-width:625px)`]:{
  width:'90%'
},
},
imgDiv:{
width:'100%',
height:"200px",
display:'flex',
justifyContent:'center',
alignItems:'center',
borderBottom:"1px solid #000",
},
productImg:{
  width:"50%",
  height:"90%",
  objectFit:"contain",
},
productDetails:{
 padding:'1rem',
},
productTitle:{
  fontFamily:"Montserrat, sans-serif",
  fontWeight:'700',
  fontSize:"18px",
  marginBottom:"5px",
},
productDescription:{
  fontFamily:"Montserrat, sans-serif",
  fontWeight:'500',
  color:"#808080",
  fontSize:"12px",
  marginBottom:"5px",
},
productpricerate:{
  display:"flex",
  flexDirection:'column'
  // justifyContent:"space-between",
},
productPrice:{
  fontFamily:"Montserrat, sans-serif",
  fontWeight:'700',
  fontSize:"20px",
},
productRating:{
  fontWeight:'700',
  fontSize:"20px",
  display:"flex",
  width:"4rem",
  height:'1.75rem',
},
cartButton:{
 "&.MuiButton-root":{ 
  color:'#0d0d0d',
  fontWeight:'700',
  // fontSize:'18px',
  border:'3px solid #0d0d0d',
  padding:"0px 20px",
  // height:'3rem'
},
}

}))

const ProductItem = (props) => {

  const classes = useStyles();
  return (
      <Card className={classes.productItem}>
        <CardMedia className={classes.imgDiv}>
          <img src={props.image} alt="smartphone" className={classes.productImg} />
        </CardMedia>
        <CardContent className={classes.productDetails}>
        <Typography className={classes.productTitle}>{props.title.slice(0,30)}...</Typography>
        <Typography className={classes.productDescription}>{props.description.slice(0,90)}...</Typography>
        <Box style={{display:"flex",justifyContent:'space-between'}}>
        <Box className={classes.productpricerate}>
        <Typography className={classes.productPrice}>${props.price}</Typography>
        <Box className={classes.productRating} 
        style={{
          backgroundColor: (props.rating >= 2.5) ?  '#228b22' : '#FFFF00',}}
          >
            <Box 
            style={{color:"#fff"}}><StarIcon />
            </Box>{props.rating}</Box>
        </Box>
        <Button variant="outlined" size="medium" className={classes.cartButton}>ADD TO CART</Button>
        </Box>
        </CardContent>
      </Card>
  );
};

export default ProductItem;

