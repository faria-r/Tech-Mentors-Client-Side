import React from 'react';
import { useLoaderData } from 'react-router-dom';

const 
SideBar = () => {
    const categories = useLoaderData();
    console.log(categories);

    return (
        <div className="w-fit">
            {
                categories.map(category => <p>{category.name}</p>)
            }
        
      </div>
    );
};

export default SideBar;