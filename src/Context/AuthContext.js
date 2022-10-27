import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  //setting obsever
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser === null || currentUser.email) {
        setUser(currentUser);
      }
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  //create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in with google
  const loginWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //log in with github
  const logInWithGithub = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth,provider);

  };
  //sign in with email and password
  const signinWithEmail = (email,password)=>{
    setLoading(true);
return signInWithEmailAndPassword(auth,email,password);
  }
  //update user info
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser,profile);
    }

  //sign out a user
  const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
  }
  const authInfo = { user,
     loginWithGoogle,
      createUser,
      logInWithGithub,
      signinWithEmail,
      updateUserProfile,
      loading,
      setLoading,
      logOut,
      setUser
    
    };
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
