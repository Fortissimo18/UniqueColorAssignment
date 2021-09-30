import React from 'react';
import canvas from './canvas';

function WorkingSkeleton() {

  return(
    <>
    <h1>Working Skeleton</h1>
    <p>Getting things to work is always the most important thing. 
      This is the first draft I created in the first evening after receiving this challenge</p>
      <img src={canvas('Red')} alt='basic'></img>
      </>
    );
}

export default WorkingSkeleton;