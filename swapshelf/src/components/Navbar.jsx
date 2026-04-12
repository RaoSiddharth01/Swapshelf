import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
  <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-full px-10 py-3 flex gap-8 text-gray-800 shadow-lg">
        <Link className="hover:text-blue-400 transition" to="/">Home</Link>
        <Link className="hover:text-blue-400 transition" to="/About">About</Link>
        <Link className="hover:text-blue-400 transition" to="/Login">Login</Link>
        <Link className="hover:text-blue-400 transition" to="/Sell">Sell</Link>
        <Link className="hover:text-blue-400 transition" to="/Browse">Browse</Link>
        <Link className="hover:text-blue-400 transition" to="/profile">My Listings</Link>
      </div>
    </div>
  );
}