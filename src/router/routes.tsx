import Cart from 'pages/cart/Cart';
import ForgetPassword from 'pages/forget-password/ForgetPassword';
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import { SingUp } from 'pages/login/Signup';
import NoMatch from 'pages/nomatch/NoMatch';
import ProductDetails from 'pages/product-details/ProductDetails';
import Profile from 'pages/profile/Profile';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function MainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<SingUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forget_password' element={<ForgetPassword />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/product/details/:productId' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  );
}

export default MainRoutes;
