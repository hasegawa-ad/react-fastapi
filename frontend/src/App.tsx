import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import LoginFailed from "./components/pages/LoginFailed";
import Register from "./components/pages/Register";
import RegisterSucceeded from "./components/pages/RegisterSucceeded";
import RegisterFailed from "./components/pages/RegisterFailed";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginfailed" element={<LoginFailed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registersucceeded" element={<RegisterSucceeded />} />
          <Route path="/registerfailed" element={<RegisterFailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
