import { Button, Card,  Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Register = () => {
  const { createUser, updateUserProfile} = useContext(AuthProvider);
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  //register with email and password
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result?.user;
        console.log(user);
       
        handleUpdateUserProfile(name, photoURL);
        navigate(from,{replace: true});
        form.reset();
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  //update user profile name and photo url
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="mt-8 w-96 mx-auto pb-16">
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Your Full name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoURL" value="Your photo URL" />
            </div>
            <TextInput
              id="photo"
              name="photo"
              type="text"
              placeholder="Your Photo URL"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              name="email"
              type="email"
              placeholder="your email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              name="password"
              type="password"
              required={true}
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
        <p>
          Already Have an Account?please{" "}
          <Link className="text-indigo-600" to="/login">
            Login
          </Link>
        </p>
        {error && <p className="text-red-800 text-xl ">{error}</p>}
      </Card>
    </div>
  );
};

export default Register;
