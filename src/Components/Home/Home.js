import { Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
  return (
  <div className="min-h-screen">
      <div className="lg:h-full sm:h-64 xl:h-96 2xl:h-full  mt-8 w-3/4 mx-auto">
      <Carousel slideInterval={2000}>
        <img
          src="https://th.bing.com/th/id/OIP.QKutpElR_69MkWGFuOQdowHaEV?pid=ImgDet&w=520&h=304&rs=1"
          alt="..."
        />

        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
      </Carousel>
    </div>
  </div>
  );
};

export default Home;
