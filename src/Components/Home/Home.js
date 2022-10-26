import { Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
  return (
  <div className="min-h-screen">
      <div className="lg:h-full sm:h-64 xl:h-96 2xl:h-full  mt-8 w-3/4 mx-auto">
      <Carousel slideInterval={3000}>
        <img
          src="https://i.ibb.co/4d39pyC/mongoDB.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/xFHMCdy/vue.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/TM0D4CK/React.jpg"
          alt="..."
        />

        <img
          src="https://i.ibb.co/zf1nRqv/bootstrap.jpg"
          alt="..."
        />
        <img className=""
          src="https://i.ibb.co/Ycqm3pQ/OIP.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  </div>
  );
};

export default Home;
