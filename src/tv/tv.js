import React from "react";
import classes from './tv.module.css';
import canvas from '../basicElement/canvas';

function TV() {
    
let backgroundImg = canvas();  
console.log(backgroundImg)
    return(
<div className={classes.vintageTV}>
  <span className={classes.antenna}></span>
  <span className={classes.screen} style={{backgroundImage: backgroundImg }}></span>
  <span className={classes.controls1}></span>
  <span className={classes.controls2}></span>
</div>
    );
}

export default TV;