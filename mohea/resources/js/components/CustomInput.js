import React from "react";

export const CustomInput = (props) => {

    return (<div>
        <input type="checkbox" id="" />
        <label htmlFor="color-text">Text color</label>
        <input type="color" id="color-text" />
        <label htmlFor="color-background">Background color</label>
        <input type="color" id="color-background" />
    </div>)
}

// onFocus => update store variable from inputSelected and add if it necessary custom code
// add on input the style
// add on tablereturn good style