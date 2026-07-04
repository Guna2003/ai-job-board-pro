import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/apply/:id" element={<Apply />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;