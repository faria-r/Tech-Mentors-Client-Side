import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const CheckOut = () => {
    const courseCheckOut = useLoaderData();
    const {Course_title} = courseCheckOut;
    const {user} = useContext(AuthProvider)
    return (
        <div>
            <h2>this is {Course_title}</h2>
            {
                user?.uid && <p>{user?.displayName}</p>
            }
            {
                user?.uid && <p>{user?.email}</p>
            }
        </div>
    );
};

export default CheckOut;