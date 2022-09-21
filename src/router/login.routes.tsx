import Login from 'pages/login/Login';
import { SingUp } from 'pages/login/Signup';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function LoginRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/register' element={<SingUp />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default LoginRoutes;
