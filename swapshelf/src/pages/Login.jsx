import { useState } from "react";
import Footer from "../components/Footer";
import API from "../services/api"; 
import toast from "react-hot-toast";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isRegister ? "/auth/register" : "/auth/login";

      const { data } = await API.post(url, {
        name,
        email,
        password,
      });

      console.log(data);

      
      if (!isRegister) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      toast.success(
       isRegister ? "Registered Successfully!" : "Login Successful!"
      );

    
      if (!isRegister) {
        window.location.href = "/";
      }

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
  <div className="min-h-screen flex flex-col bg-gray-50">

  
    <div className="flex flex-1 items-start justify-center px-4 mt-32">

      
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">

        
        <div className="flex mb-6 border rounded-lg overflow-hidden">
          <button
            onClick={() => setIsRegister(false)}
            className={`w-1/2 py-2 transition ${
              !isRegister
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsRegister(true)}
            className={`w-1/2 py-2 transition ${
              isRegister
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            Register
          </button>
        </div>

      
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {isRegister && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          )}

          <button className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition shadow-md hover:shadow-lg">
            {isRegister ? "Register" : "Login"}
          </button>

          {!isRegister && (
            <p className="text-sm text-right text-blue-500 cursor-pointer">
              Forgot Password?
            </p>
          )}
        </form>

        
        <p className="text-sm text-center mt-6 text-gray-500">
          {isRegister
            ? "Already have an account?"
            : "New user?"}
          <span
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500 cursor-pointer ml-1"
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>

      </div>
    </div>

    
    <Footer />
  </div>
);
}