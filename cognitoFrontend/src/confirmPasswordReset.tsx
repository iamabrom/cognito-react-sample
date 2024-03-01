import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from './authService';

const ConfirmPasswordReset = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState(location.state?.email || '');
  const [confirmationCode, setConfirmationCode] = useState('');

  const handlePasswordMatch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await resetPassword(email, confirmationCode, password);
      alert('Password successfully changed\nSign in on next page.')
      navigate('/login', { state: { email } });
    } catch (error) {
      alert(`Password reset failed: ${error}`);
    }
  };

return (
  <div className="container">
    <h1>Amazon Cognito<br />Sample App</h1>
    <br></br>
    <br></br>
    <h2>Password Reset</h2>
    <form onSubmit={handlePasswordMatch}>
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
      <div>
        <input
          className="inputText"
          type="text"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
          placeholder="Confirmation Code"
          required />
      </div>
      <div>
          <input
            className="inputText"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            required
          />
        </div>
          <div>
            <input
              className="inputText"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
      <button type="submit">Reset Password</button>
    </form>
  </div>
);

};

export default ConfirmPasswordReset;
