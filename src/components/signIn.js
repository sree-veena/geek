// Signin.js

import React, { useState } from 'react';

const Signin = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform authentication logic (you can use a backend or simulate it here)
    if (formData.name === 'username' && formData.password === 'password') {
      onSignIn(true); // Call the onSignIn callback with a flag indicating successful sign-in
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <h2>User Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
      {loginError && <p>Invalid Credentials</p>}
    </div>
  );
};

export default Signin;
