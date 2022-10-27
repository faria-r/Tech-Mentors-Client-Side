import {
  Avatar,
  Button,
  DarkThemeToggle,
  Flowbite,
  Navbar,
  Tooltip,
} from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthProvider);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Navbar
      className="dark:bg-black dark:text-white"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand to="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/924/924915.png"
          className="mr-3 h-6 sm:h-9"
          alt="tech Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tech Mentors
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-64">
        <Link to="/home">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/blog">Blog</Link>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <Link>
          {user ? (
            <div className="flex justify-between align-middle">
              <Tooltip content={user?.displayName} trigger="hover">
                <Avatar img={user?.photoURL} status="online" />
              </Tooltip>

              <Button onClick={handleLogOut} className="ml-8">
                LogOut
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </>
          )}
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
