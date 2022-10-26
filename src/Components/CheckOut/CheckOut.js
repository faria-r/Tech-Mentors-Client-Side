import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseCheckOut = useLoaderData();
    const {Course_title} = courseCheckOut;
    return (
        <div>
            <h2>this is {Course_title}</h2>
        </div>
    );
};

export default CheckOut;