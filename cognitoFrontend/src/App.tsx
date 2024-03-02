// import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './loginPage';
import HomePage from './homePage';
import ConfirmUserPage from './confirmUserPage';
import ForgotPasswordPage from './forgotPasswordPage'
import ConfirmPasswordReset from './confirmPasswordReset'
import './App.css'

const App = () => {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirm" element={<ConfirmUserPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/passwordreset" element={<ConfirmPasswordReset />} />
        <Route path="/home" element={isAuthenticated() ? <HomePage /> : <Navigate replace to="/login" />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
