import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>Please enter your credentials to log in.</p>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
