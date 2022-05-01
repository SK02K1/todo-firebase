import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
