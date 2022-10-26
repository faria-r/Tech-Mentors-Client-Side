import { Footer } from "flowbite-react";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
const Footers = () => {
  return (
    <div>
         <Footer container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="text-indigo-500 ">
            <Footer.Brand
              href="#"
              src="https://cdn-icons-png.flaticon.com/512/924/924915.png"
              alt="tech Logo"
              name="Tech Mentors"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link>Tech Mentors</Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link>Github</Footer.Link>
                <Footer.Link>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link>Privacy Policy</Footer.Link>
                <Footer.Link>Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Tech-Mentors™" year={2022} />
          <div className="mt-4 text-2xl text-indigo-500 flex space-x-6 sm:mt-0 sm:justify-center">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaGithub></FaGithub>
          </div>
        </div>
      </div>
    </Footer>
    </div>
   
  );
};

export default Footers;
