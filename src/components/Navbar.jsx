import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contexts";

export const Navbar = () => {
  const { user, setUser } = useAuth();

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Successfully Logged out");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <nav className="navbar">
      <h1>todo-firebase</h1>
      {user && <button onClick={logoutHandler}>Logout</button>}
    </nav>
  );
};
