import { Spinner } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthProvider);
    if(loading){
        return <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
       }
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  
   }
   return children;
};

export default PrivateRoutes;