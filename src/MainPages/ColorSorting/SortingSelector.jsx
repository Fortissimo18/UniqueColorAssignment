import React, { useContext } from "react";

import { SortingContext } from "../../Store/SortingContext";
import DropDown from "./DropDown/DropDown";
import CanvasImage from "../../ImageGeneration/CanvasImage";
import canvas from "../../ImageGeneration/Canvas";

import classes from '../Pages.module.css';


function SortingSelector() {
    const [sortBy,] = useContext(SortingContext);
    return (
        <div className={classes.Pages}>
            <h1>Sorting the Colours</h1>
            <p>When things are organised, they generate aesthetics.<br />
                After getting the first draft done, I found that the visual result also follows a pattern, just like the numbers.<br />
                Sorting them might get a more pleasing visualisation without glitches.<br />
                So I chose the common colour representation RGB HSL as the metrics. <br />
                Personally speaking, I was also quite curious about how the results might look. <br />
                And I got a rainbow sorting by hue! <br />
            </p>
            <CanvasImage image={canvas(sortBy)} />
            <DropDown />
        </div>
    );
}

export default SortingSelector;