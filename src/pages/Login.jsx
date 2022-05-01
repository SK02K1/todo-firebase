import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contexts";

export const Login = () => {
  const { setUser } = useAuth();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = loginFormData;
  const navigate = useNavigate();

  const inputChangeHandler = (e) =>
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res?.user) {
        setUser(res.user);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
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
