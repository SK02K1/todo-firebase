import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Hero, Navbar, TodoCard } from "../components";
import { useAuth } from "../contexts";
import { db } from "../firebase";

export const Home = () => {
  const [todos, setTodos] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const documentRef = doc(db, "users", user.uid);

    (async () => {
      setShowLoader(true);
      try {
        const userData = await getDoc(documentRef);
        if (userData.exists()) {
          setTodos(userData.data().todos);
        } else {
          setTodos([]);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setShowLoader(false);
      }
    })();
  }, [user]);

  return (
    <div>
      <Navbar />
      <Hero />
      <ClipLoader loading={showLoader} speedMultiplier={2.5} size={20} />
      {todos &&
        todos.map((todoInfo) => (
          <TodoCard key={todoInfo.id} todoInfo={todoInfo} />
        ))}
    </div>
  );
};
