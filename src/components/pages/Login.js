import React from 'react';
import { motion } from "framer-motion";
import Register from '../views/Register';
import { Navigate } from 'react-router-dom';

function LogIn() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  
  return (
    userInfo && userInfo.email ? 
    <Navigate to="/"></Navigate> 
    : 
    <motion.div
      className="text-center relative"
      animate={{
        scale: [1,1],
        opacity:[0,1]
      }}
      transition={{ duration: 2}}
    > 
      <img src="/assets/img/mark2.png" alt='login' className="w-16 absolute top-0 mt-8 ml-24"/>
      <Register className="absolute top-0 w-screen h-screen login-back"/>
    </motion.div>
  );
}

export default LogIn;
