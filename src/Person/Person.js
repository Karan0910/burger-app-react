import React from "react"

const person = (props) => {
    return (
        <div>
            <p>Hi i'm a {props.name} and i am {props.age}    years old.</p>
            {props.children}
        </div>
    );
}

export default person;