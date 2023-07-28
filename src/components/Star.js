import React from "react";
import './Star.css'

function Star(props) {
    return (
        <svg id="Ebene_1"  width={'25px'} fill={props.fill} data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.61 23.41">
            <polygon className={"star-icon"} points="12.3 1.13 15.78 8.16 23.54 9.29 17.92 14.76 19.25 22.49 12.3 18.84 5.36 22.49 6.69 14.76 1.07 9.29 8.83 8.16 12.3 1.13"/>
        </svg>
    );
}

export default Star;