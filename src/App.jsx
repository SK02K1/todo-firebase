import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home, Login } from "./pages";
import { RequireAuth } from "./components";

export default function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
