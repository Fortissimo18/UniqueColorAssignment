import React, { useEffect, useState, useRef } from "react";

import canvas from '../../../ImageGeneration/Canvas';

import classes from './TV.module.css';


function TV() {
  const [imageURL, setImageURL] = useState(canvas("Random"))

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  const animate = time => {
    if (previousTimeRef.current !== undefined) { 
      setImageURL(canvas("Random"));
    }      
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);      
  }
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once for better performance


  return (
    <div className={classes.VintageTV}>
      <span className={classes.Antenna}></span>
      <span className={classes.Screen} style={{ backgroundImage: imageURL }}></span>
      <span className={classes.ControlsTop}></span>
      <span className={classes.ControlsBottom}></span>
    </div>
  );
}

export default TV;