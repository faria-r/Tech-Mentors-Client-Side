import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Header = () => {
  const { user,logOut } = useContext(AuthProvider);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <Navbar className="w-3/4 mx-auto"  fluid={true} rounded={true}>
      <Navbar.Brand to="https://flowbite.com/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/924/924915.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
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
        <Link to="/theme">Light Mode</Link>
        <Link>
          {user?.uid ? (
            <div className="flex justify-between align-middle">
              <Tooltip content={user?.displayName} trigger="hover">
                <Avatar img={user?.photoURL} status="online" />
              </Tooltip>

              <Button onClick={handleLogOut} className="ml-8">LogOut</Button>
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
