import React from 'react';
import classes from './CategoryItem.module.css';
import louis from '../assets/images/louis.png'
const CategoryItem = (props) => {
  return (
    <>
    <div className={classes.category}>
    <img src={louis} alt='Banner' className={classes.categoryImg} />
    <div className={classes.overlayCtn}>
    <h1>{props.category}</h1>
    <div className={classes.categoryBtn}>Shop Now</div>
    </div>
    </div>
    </>
  )
}

export default CategoryItem