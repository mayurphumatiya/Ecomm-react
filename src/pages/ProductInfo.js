import { Grid, makeStyles, Typography, Button, TextField, useMediaQuery, List, ListItemIcon, ListItem, Box } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import React from 'react';


const useStyles = makeStyles((theme)=>({
    mainProduct:{
        display:'flex',
        height:'max-content',
        [`@media screen and (max-width:768px)`]:{
            flexDirection:'column',
        },
        borderBottom:'2px solid #f5f5f5'
    },
    imageDiv:{
        backgroundColor:'#0d0d0d',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'45%',
        // width:'50vw',
        // height:'100%',
        [`@media screen and (max-width:768px)`]:{
            width:'100%',
        },
    },
    image:{
        //   width:'50%',
        //   height:'90%',
        objectFit:'cover',
    },
    productInfo:{
        [`@media screen and (min-width:768px)`]:{
        padding:'1rem 2rem',
        },
        // width:'50vw',
        // width:'45%',
        // height:'100%',
        [`@media screen and (max-width:768px)`]:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            // width:'100%',
            margin:' 0.5rem 1rem',
        },
    },
    productTitle:{
        fontSize:'28px',
        fontWeight:700,
        [`@media screen and (max-width:768px)`]:{
            fontSize:'18px',
        },
    },
    productPrice:{
        fontSize:'25px',
        fontWeight:700,
        paddingRight:'1rem',
        [`@media screen and (max-width:768px)`]:{
            fontSize:'18px',
        },
    },
    sizeBtn:{
        padding:'0.5rem 0rem',
        backgroundColor:'#f5f5f5',
        border:'2px solid #0d0d0d',
        fontSize:'20px',
        fontWeight:'700',
        [`@media screen and (min-width:768px)`]:{
        marginRight:'1rem',
        },
        [`@media screen and (max-width:768px)`]:{
            fontSize:'14px',
            padding:'0.5rem 0',
        },
    },
    cartBtn:{
    color:'#fff',
    backgroundColor:'#0d0d0d ',
    width:'90%',
    height:'3rem',
    marginTop:'2rem',
    [`@media screen and (max-width:768px)`]:{
        width:'100%',
    }

    },
    secHeading:{
        marginTop:'1rem',
        fontWeight:700,
        fontSize:'18px',
        [`@media screen and (max-width:768px)`]:{
            fontSize:'14px'
        }
    },
    
}))

const ProductInfo = () => {



    const classes = useStyles()
    const media = useMediaQuery('(max-width:768px)');

  return (
    <Grid className={classes.mainProduct} fullWidth>
        <Grid className={classes.imageDiv}>
            <img src={"//lp2.hm.com/hmgoepprod?set=source[/e8/e0/e8e02182fd81a1446f617505c57df37b5ede531e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]"} alt='product' className={classes.image} />
        </Grid>
        <Grid className={classes.productInfo}>
            <Typography className={classes.productTitle}>MEN'S MERINO TENCEL SHORT SLEEVE TEE</Typography>
            <div style={{display:'flex', flexDirection:media ? 'column' : 'row'}}>
            <Typography className={classes.productPrice}>Rs.1,799</Typography>
            <Box style={{display:'flex'}}>
            <Rating style={{paddingLeft:media ? '0':'1rem'}} name="half-rating-read" defaultValue={3.5} size={media ? 'medium' : 'large'} precision={0.5} readOnly/>
            <Typography style={{color:'grey', fontSize: media ? '10px' : '14px'}}>(2,533 Reviews)</Typography>
            </Box>
            </div>
            <Grid>
                <Typography className={classes.secHeading}>WHY IT'S SPECIAL:</Typography>
                <List style={{fontSize:media && '12px',}}>
                    <ListItem style={{paddingLeft:media &&'0'}}><LabelImportantIcon /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</ListItem>
                    <ListItem style={{paddingLeft: media && '0'}}><LabelImportantIcon />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </ListItem>
                    <ListItem style={{paddingLeft:media && '0'}}><LabelImportantIcon />Ut enim ad minim veniam</ListItem>
                    <ListItem style={{paddingLeft : media &&'0'}}><LabelImportantIcon /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ListItem>
                    <ListItem style={{paddingLeft:media &&'0'}}><LabelImportantIcon /> Excepteur sint occaecat cupidatat non proident</ListItem>
                </List>
                <Typography className={classes.secHeading}>SIZE:</Typography>
                <Grid style={{ display:'flex', justifyContent: media && 'space-around'}}>
                    <Button className={classes.sizeBtn}>S</Button>
                    <Button className={classes.sizeBtn}>M</Button>
                    <Button className={classes.sizeBtn}>L</Button>
                    <Button className={classes.sizeBtn}>XL</Button>
                    <Button className={classes.sizeBtn}>2XL</Button>
                </Grid>
                    <Box style={{ display:'flex', justifyContent: media && 'center'}}>
                    <Button variant="contained" style={{fontSize: media ? "13px": ''}} className={classes.cartBtn}><ShoppingCartOutlined/>Add To Cart</Button>
                    </Box>
            </Grid>
        </Grid>
    </Grid> 
  )
}

export default ProductInfo