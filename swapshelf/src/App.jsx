import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Sell from "./pages/Sell";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;