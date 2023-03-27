import React from 'react';
import Part from './Part';

const Content = ({parts}) => {
    const allParts = parts.map(part => 
    <Part 
        key={part.id} 
        name={part.name} 
        exercises={part.exercises}
    />)

    const total = parts.reduce((prevVal, currentVal) => {
       return prevVal + currentVal.exercises
    }, 0)
    return (
        <div>
            {allParts}
            <p>total of {total} exercises</p>
        </div>
    );
};

export default Content;