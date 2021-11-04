import React from "react";
// Code EyesOnMe Component Here

function EyesOnMe() {
    function textButton() {
        console.log("Good!");
    }

    function textButtonBlur() {
        console.log("Hey! Eyes on me!");
    }
    return (
        <button onFocus={textButton} onBlur={textButtonBlur}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe

