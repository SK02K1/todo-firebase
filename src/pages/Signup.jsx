import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contexts";

const signupFormFields = [
  {
    id: 1,
    label: "Name",
    type: "text",
    name: "name"
  },
  {
    id: 2,
    label: "Email",
    type: "email",
    name: "email"
  },
  {
    id: 3,
    label: "Password",
    type: "password",
    name: "password"
  }
];

export const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = signupFormData;
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const inputChangeHandler = (e) =>
    setSignupFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName: name
      });
      toast.success("Successfully signed up");
      setUser(auth.currentUser);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={signupHandler}>
        {signupFormFields.map(({ id, label, type, name }) => {
          return (
            <label key={id}>
              <span>{label}: </span>
              <input
                onChange={inputChangeHandler}
                type={type}
                name={name}
                value={signupFormData[name]}
                placeholder={`Enter your ${name}`}
                required
              />
            </label>
          );
        })}
        <button className="btn">Signup</button>
      </form>
    </div>
  );
};
