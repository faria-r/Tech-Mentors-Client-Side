import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import SideBar from "../Course/SideBar";

const Courses = () => {
  const courses = useLoaderData();

  return (
    //all courses
    <div className="lg:grid grid-cols-4 ">
      <div className="col-span-1">
        <SideBar></SideBar>
      </div>
      <div className="lg:col-span-3 gap-2 ">
        <div className="  lg:w-3/4 lg:grid  grid-cols-2 gap-2  lg:ml-0 sm:w-1/2">
          {courses.map((course) => (
            <Course key={course._id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
