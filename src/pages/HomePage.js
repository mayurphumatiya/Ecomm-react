import React from "react";
import Card from "../components/Card";
import classes from "./HomePage.module.css";
import louis from "../assets/images/louis.png";
import CategoryItem from '../components/CategoryItem';

const DUMMY_DATA = [
  {id:'b1', img:{louis}, category:"Men"},
  {id:'b2', img:{louis}, category:"Women"},
  {id:'b3', img:{louis}, category:"Electronics"},
]

const HomePage = () => {

  return (
    <Card>
      <div className={classes.secDiv}>
        <div className={classes.banner}>
          <img src={louis} alt="poster" className={classes.poster} />
        </div>
        <div style={{display:"flex"}}>
         {DUMMY_DATA.map((item)=>(
           <CategoryItem
           key={item.id}
          //  img={item.img}
           category={item.category} />
         )) }
        </div>
      </div>
    </Card>
  );
};

export default HomePage;
