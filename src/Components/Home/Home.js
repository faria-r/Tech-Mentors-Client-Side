import { Carousel } from "flowbite-react";
import React from "react";
import Instructors from "../Instructors/Instructors";
import RightSideBar from "../RightSIdeBar/RightSideBar";

const Home = () => {
  return (
   <div>
     <div className="pb-32 lg:flex lg:flex-row  sm:flex-col-reverse">
      <RightSideBar></RightSideBar>
      <div className=" h-56 sm:h-64 xl:h-96 2xl:h-96  mt-16 w-3/4 mx-auto">
        <Carousel slideInterval={3000}>
          <img src="https://i.ibb.co/xFHMCdy/vue.jpg" alt="..." />
          <img src="https://i.ibb.co/TM0D4CK/React.jpg" alt="..." />

          <img src="https://i.ibb.co/zf1nRqv/bootstrap.jpg" alt="..." />
          <img
            className="lg:w-3/4"
            src="https://i.ibb.co/4d39pyC/mongoDB.jpg"
            alt="..."
          />
        </Carousel>
     
      </div>
      
    </div>
    <div className="w-3/4 mx-auto">
      <Instructors></Instructors>
      </div>
   </div>
  );
};

export default Home;
