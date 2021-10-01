import React from 'react';

import canvas from '../../ImageGeneration/Canvas';
import CanvasImage from '../../ImageGeneration/CanvasImage';

import classes from '../Pages.module.css';


const WorkingSkeleton = () => (
  <div className={classes.Pages}>
    <h1>Working Skeleton</h1>
    <p>Getting things to work is always the most important thing. <br />
      This is what I created on the first evening after receiving this challenge. <br />
      My idea was to ensure the uniqueness of each RGB combination first, <br />
      so I used a somewhat brute force way to rank the data points:  <br />
      RGB (7,7,7) (7,7,15) (7,7,23) ... (255,255,255)
    </p>
    <CanvasImage image={canvas('Red')} />
  </div>
);


export default WorkingSkeleton;