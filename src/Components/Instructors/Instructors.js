import { Card } from 'flowbite-react';
import React from 'react';
import instructor from '../../Assets/images/xcasual-man-happy-smile-young-handsome-guy-hold-tab-B3EGD4W.jpg.pagespeed.ic.U9-Jybi_6X.webp'
const Instructors = () => {
    return (
        <div>
            <h2 className='text-5xl text-blue-500 font-semibold'>Meet Our Instructors</h2>
            <div className="">
  <Card
    horizontal={true}
    imgSrc={instructor}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div>
        </div>
    );
};

export default Instructors;