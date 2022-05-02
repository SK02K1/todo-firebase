import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Hero, Navbar, TodoCard } from "../components";
import { useAuth } from "../contexts";
import { db } from "../firebase";

export const Home = () => {
  const [todos, setTodos] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [newTask, setNewTask] = useState("");
  const { user } = useAuth();
  const documentRef = doc(db, "users", user.uid);

  useEffect(() => {
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
  }, []);

  const addNewTodo = async (e) => {
    const newTodo = {
      id: uuid(),
      task: newTask,
      isCompleted: false,
      createdAt: new Date().getTime()
    };
    setShowLoader(true);
    e.preventDefault();
    try {
      await setDoc(documentRef, {
        todos: [...todos, newTodo]
      });
      setTodos((prevTodos) => prevTodos.concat(newTodo));
      setNewTask("");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <ClipLoader loading={showLoader} speedMultiplier={2.5} size={20} />
      <form onSubmit={addNewTodo}>
        <input
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          name="todo"
          id="todo"
          value={newTask}
          placeholder="Enter new task"
          required
        />
        <button className="btn">add</button>
      </form>
      {todos &&
        todos.map((todoInfo) => (
          <TodoCard key={todoInfo.id} todoInfo={todoInfo} />
        ))}
    </div>
  );
};
