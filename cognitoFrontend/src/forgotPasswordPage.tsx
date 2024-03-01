import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { forgotPassword } from './authService';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert("If you have an account, you should recieve an email shortly");
      navigate('/passwordreset', { state: { email } });
    } catch (error) {
      alert(`Failed to confirm account: ${error}`);
    }
  };

return (
  <div className="container">
    <h1>Amazon Cognito<br />Sample App</h1>
    <br></br>
    <br></br>
    <h2>Forgot Password</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="inputText"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  </div>
);

};

export default ForgotPasswordPage;
