import { Alert, Button, Card } from "flowbite-react";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaDownload, FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const courseinfo = useLoaderData();
  const navigate = useNavigate();
  const { Course_title, image_url, get_started, _id } = courseinfo;
  const handleClick = () => {
    navigate(`/checkout/${_id}`);
  };
  return (
    <div className="container mx-auto mt-4">
      <Card>
        <div>
          <Alert color="info" withBorderAccent={true}>
            <span className="text-2xl text-indigo-600">{Course_title}</span>
            <span className="ml-96">
              <Pdf targetRef={ref} filename="Course.pdf">
                {({ toPdf }) => (
                  <button onClick={toPdf}>
                    {" "}
                    <FaDownload className="text-3xl lg:ml-96 text-indigo-600"></FaDownload>
                  </button>
                )}
              </Pdf>
            </span>
          </Alert>
        </div>
        <img src={image_url} alt="" className="h-96" />
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="dark:text-gray-400">Ratings:</span>
          <FaStar className=" text-yellow-300"></FaStar>
          <FaStar className=" text-yellow-300"></FaStar>
          <FaStar className=" text-yellow-300"></FaStar>
          <FaStar className=" text-yellow-300"></FaStar>
          <FaStar className=" text-yellow-300"></FaStar>
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            5.0
          </span>
        </div>

        <div>
          <Alert color="info" withBorderAccent={true}>
            <span>
              <span className="font-medium">Lets Get Started With</span>{" "}
              {Course_title}
            </span>
          </Alert>
          <div ref={ref} className="dark:text-gray-400 text-xl mt-8">{get_started}</div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Buy-at:$599
          </span>
          <Button onClick={handleClick} gradientDuoTone="greenToBlue">
            Get Premium Access
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetails;
