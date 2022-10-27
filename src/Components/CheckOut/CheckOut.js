import { Button, Card, Toast } from "flowbite-react";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

//premium content for premium user page--protected routes
const CheckOut = () => {
  const courseCheckOut = useLoaderData();
  const { Course_title } = courseCheckOut;
  const { user } = useContext(AuthProvider);
  return (
    <div className="max-w-sm mx-auto mt-8 pb-44">
      <div className="flex justify-between px-4 pt-4  mb-8 text-xl text-indigo-600 font-semibold">
        <h2>Your Enrolled Course is:{Course_title}</h2>
      </div>
      <Card>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={user?.photoURL && user.photoURL}
            alt="user "
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user?.uid && <p>{user?.displayName}</p>}
          </h5>
          <span className="text-sm text-black-500 dark:text-gray-400">
            {user?.uid && <p>{user?.email}</p>}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Button>SuccessFully Enrolled</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CheckOut;
