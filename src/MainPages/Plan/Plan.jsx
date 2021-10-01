import React from "react";

import classes from '../Pages.module.css';


const Plan = () => (
    <div className={classes.Pages}>
        <h1>My Project Plan</h1>
        <div className={classes.Plan}>
            <div>
                <h2>The First Evening</h2>
                <ul>
                    <li>Understand the requirements</li>
                    <li>Create a working skeleton</li>
                </ul>
            </div>
            <div>
                <h2>Day 1</h2>
                <ul>
                    <li>Improve the design to be aesthetically pleasing</li>
                    <li>Build the add-ons</li>
                </ul>
            </div>
            <div>
                <h2>Day 2</h2>
                <ul>
                    <li>Build the remaining add-ons</li>
                    <li>Check browser competibilities</li>
                    <li>Check the performance</li>
                </ul>
            </div>
            <div>
                <h2>Day 3</h2>
                <ul>
                    <li>Clean the code</li>
                    <li>Deploy</li></ul>
            </div>
        </div>
    </div>
);

export default Plan;