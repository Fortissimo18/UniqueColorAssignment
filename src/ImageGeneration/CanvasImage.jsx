import React from "react";
import classes from './CanvasImage.module.css';

function CanvasImage(props) {
  return (
    <div className={classes.CanvasImage} style={{ backgroundImage: props.image }}></div>
  );
}

export default CanvasImage;