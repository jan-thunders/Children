import React from "react";

const Hello = (props) => {

    console.log(props);

    return (
        <div>
            
            <h1>I am a software Developer</h1>
            <p>I am also an instructor</p>
            {props.children}
            <hr />
        </div>
    )
}

export default Hello;

// can I access my 1st or only my 2nd children 
