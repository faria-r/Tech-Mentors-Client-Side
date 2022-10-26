import { Sidebar } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://tech-mentors-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mt-8 ml-8 sticky top-3">
      {categories.map((category) => (
        <div className="w-fit" key={category.id}>
          <Sidebar  aria-label="Sidebar with content separator example">
            <Sidebar.Items>
              <Sidebar.ItemGroup >
              <Link to={`/categories/${category.id}`}>
                <Sidebar.Item className="bg-slate-500 d-flex  text-red-800 font-bold text-2xl">
               {category.name} <FaArrowCircleRight></FaArrowCircleRight>
                </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
