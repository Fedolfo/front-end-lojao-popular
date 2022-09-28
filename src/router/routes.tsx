import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import { SingUp } from 'pages/login/Signup';
import Profile from 'pages/profile/Profile';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function MainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<SingUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default MainRoutes;
