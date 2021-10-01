import React from "react";

import TV from './TV/TV';

import classes from '../Pages.module.css';


function CheatingVersion() {

    return (
        <div className={classes.Pages}>
            <h1>The... Cheating Version?</h1>
            <p>When individuals cannot shine by themselves, there're always companions to help!<br />
                The visualisation of randomised RGB data points reminded me of an old colour TV losing its signals.<br />
                So I added a TV frame to the generated image as its companion. <br />
                Reckon it can be a good 404 page!<br />
            </p>
            <TV />
            <h2>404 Not Found</h2>
            <br />
            <p> Ref: <a href="https://codepen.io/kevinjannis/pen/iypwm">Vintage TV </a> from CodePen by Kevin Jannis.</p>
        </div>
    );
}

export default CheatingVersion;