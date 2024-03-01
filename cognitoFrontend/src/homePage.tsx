import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Amazon Cognito<br />Sample App</h1>
      <br></br>
      <br></br>
      <h2>Hello World!</h2>
      <p className="celebrate">&#127881;</p>
      <p>You have successfully signed-up, confirmed your account, and signed-in using Amazon Cognito</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;