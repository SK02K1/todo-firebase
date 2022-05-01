import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import { RequireAuth } from "./components";

export default function App() {
  return (
    <div className="App">
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
