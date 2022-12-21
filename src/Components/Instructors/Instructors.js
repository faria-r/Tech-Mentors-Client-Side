import { Card } from 'flowbite-react';
import React from 'react';
import instructor from '../../Assets/images/xcasual-man-happy-smile-young-handsome-guy-hold-tab-B3EGD4W.jpg.pagespeed.ic.U9-Jybi_6X.webp'
const Instructors = () => {
    return (
        <div className='my-4 w-3/4 mx-auto shadow-xl shadow-blue-400 p-4'>
            <h2 className='text-5xl text-blue-500 my-8 font-semibold'>Meet Our Instructor</h2>
            <div className="">
  <div className=' lg:flex sm:flex-column'>
    <div>
        <img src={instructor} alt="" className='h-96' />
    </div>
   <div className='lg:ml-8'>
   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     Daniel Alexander Mike
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Meet Mr.Mike! The best one from our Instructor Team.
    </p>
   </div>
  </div>
</div>
        </div>
    );
};

export default Instructors;