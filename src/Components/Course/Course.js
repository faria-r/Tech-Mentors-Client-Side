import { Card } from 'flowbite-react';
import React from 'react';

const Course = ({course}) => {
    const {Course_title,image_url,details}= course;
    return (
        <div className='lg:w-96 mb-8 mt-8 lg:ml-24' >
        <Card className='lg:mr-8 sm:ml-8'
        >
            <img src={image_url} className='w-96 h-64' alt='course-name'/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Course_title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-500">
            {details.slice(0,100)+'...'}
          </p>
        </Card>
      </div>
    );
};

export default Course;