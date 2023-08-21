import React from "react";
import Avatar from "./Avatar";

const cardStyle = {
    width: '300px',
    margin: '20px',
    padding: '10px',
    border: '1px solid black',
    boxShadow: '5px 5px 10px black'
}

function Card(props) {   // Card component calls Avatar component
    return (
        <div style={cardStyle}>
            {/* Avatar component called from here */}
            <Avatar image={props.image} alt={props.text}/>
            <h1>My name is {props.name}</h1>
            <p>My mail id is {props.mail}</p>
        </div>
    );
}

export default Card;