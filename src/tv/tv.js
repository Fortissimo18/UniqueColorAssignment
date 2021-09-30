import React, { useEffect, useState } from "react";
import classes from './tv.module.css';
import canvas from '../workingSkeleton/canvas';


function TV() {

  const [backgroundImg, setBackgroundImg] = useState('url("' + canvas('Random') + '")');

    
  // useEffect(() => {
  //   setBackgroundImg(canvas(''));
  //   setTimeout(() => {}, 100);
  // }, [backgroundImg])



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