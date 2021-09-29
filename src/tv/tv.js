import React, { useEffect, useState } from "react";
import classes from './tv.module.css';
import canvas from '../basicElement/canvas';


function TV() {

  const [backgroundImg, setBackgroundImg] = useState('url("' + canvas('h') + '")');

    
  // useEffect(() => {
  //   setBackgroundImg(canvas())
  //   setTimeout(() => {}, 50);
  // }, [backgroundImg])

  
  function handleClick(event){
    console.log("clicked");
  }

    return(
<div className={classes.vintageTV}>
  <span className={classes.antenna}></span>
  <span className={classes.screen} style={{backgroundImage: backgroundImg }}></span>
  <span className={classes.controls1} onClick={handleClick}></span>
  <span className={classes.controls2}></span>
</div>
    );
}

export default TV;