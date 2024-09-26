import React, { useState } from 'react';
import '../App.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/login' : '/register';

    try {
      const response = await fetch(`http://localhost:8080${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {  // Check if the request was successful
        const result = await response.json();
        console.log(result);
        // Redirect to the main page upon success
        window.location.href = 'http://localhost:3000/main';
      } else {
        // Handle non-successful response
        console.error('Error: ', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="login-register-container">
      <div className="world-map-bg">
        <div className="form-box">
          <h2>{isLogin ? 'Login' : 'Registration'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.emailid}
                onChange={handleInputChange}
                required
              />
            </div>
              
            )}
            <div className="input-container">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">
              {isLogin ? 'Login' : 'Register'}
            </button>
            <div className="toggle-link">
              {isLogin ? (
                <span>
                  Don't have an account?{' '}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Register
                  </a>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <a href="#" onClick={() => setIsLogin(true)}>
                    Login
                  </a>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;