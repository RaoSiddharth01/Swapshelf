import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./temp/Home";
import About from "./temp/About";
import Browse from "./temp/Browse";
import Login from "./temp/Login";
import Sell from "./temp/Sell";
import Profile from "./temp/Profile";
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