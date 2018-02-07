import React from 'react';

const person = (arg) => {
    return (
        <div>
            <p onClick={arg.click}>I'm {arg.name} and age {arg.age}</p>
            <p>{arg.children}</p>
        </div>
    )
}

export default person;