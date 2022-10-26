import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const LogIn = () => {
const {loginWithGoogle,user,logInWithGithub,signinWithEmail} = useContext(AuthProvider);
const navigate= useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';
//google auth provider 
const googleAuthProvider = new GoogleAuthProvider();
//github provider
const githubAuthProvider = new GithubAuthProvider();

//sign in with google 
const handlelogInWithGoogle = () =>{
    loginWithGoogle(googleAuthProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(e =>{
        console.error(e)
    })
};

//sign in with github
const handleLogInWithGithub = (provider) =>{
    logInWithGithub(githubAuthProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(e => console.error(e))

} 

//sign in with email and password
const logInWithEmail = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signinWithEmail(email,password)
    .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from,{replace:true});
    })
    .catch(e =>console.error(e))
}

    return (
        <div className="mt-16 w-96 mx-auto">
  <Card >
    <form onSubmit={logInWithEmail} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          name='email'
          placeholder="enter your name"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          name='password'
          type="password"
          required={true}
        />
      </div>
      <Button type="submit">
        LogIn
      </Button>
    </form>
    <Button onClick={handlelogInWithGoogle}  type="submit">
       Login With Google
      </Button>
      <Button onClick={handleLogInWithGithub} type="submit">
        Login With GitHub
      </Button>
      <p>Do Not Have a Account?please <Link className="text-indigo-600" to='/register'>Register</Link></p>
  </Card>
</div>
    );
};

export default LogIn;