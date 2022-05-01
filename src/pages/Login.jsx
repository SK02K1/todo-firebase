import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = loginFormData;

  const inputChangeHandler = (e) =>
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="field-container">
          <label htmlFor="email">Email: </label>
          <input
            onChange={inputChangeHandler}
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="password">Password: </label>
          <input
            onChange={inputChangeHandler}
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            required
          />
        </div>
        <Link to="/signup">Create new account</Link>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
      <p>OR</p>
      <button className="btn">Sign-in using google</button>
    </div>
  );
};
