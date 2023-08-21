import React from "react";

function Avatar(props) {
    return (
        // returning an HTML image element
        <img src={props.image} alt={props.text} />
    );
}

export default Avatar;