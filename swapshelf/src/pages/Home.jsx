import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  const images = [
    "Picture1.jpg",
    "Picture2.jpg",
    "Picture3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-gray-800">

<div
  className="h-[75vh] md:h-[85vh] flex items-center justify-center text-white transition-all duration-1000"
  style={{
    backgroundImage: `url(${images[current]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="bg-black/50 px-16 py-10 rounded-2xl text-center max-w-3xl">
    
    <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-blue-400">
      SwapShelf
    </h1>

    <p className="mt-4 text-lg md:text-xl text-gray-200">
      Buy • Sell • Exchange Books Easily
    </p>

    
    <div className="mt-8 flex justify-center gap-4">
      
      <button
        onClick={() => navigate("/sell")}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
      >
        Sell a Book
      </button>
    </div>

  </div>
</div>

      
      <div className="px-8 md:px-20 py-16 grid md:grid-cols-3 gap-8">
        <Feature title="Buy Books" desc="Find affordable second-hand books near you" />
        <Feature title="Sell Easily" desc="List your old books in seconds" />
        <Feature title="Exchange" desc="Swap books with other students" />
      </div>

      <div className="bg-blue-50 py-16 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Step num="1" text="Create an account" />
          <Step num="2" text="List or browse books" />
          <Step num="3" text="Connect & exchange" />
        </div>
      </div>


      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Start Swapping Today 
        </h2>
        <button
          onClick={() => navigate("/browse")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition"
        >
          Browse Books
        </button>
      </div>

      <Footer />
    </div>
  );
}


function Feature({ title, desc }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-blue-500 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Step({ num, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="text-blue-500 text-2xl font-bold mb-2">{num}</div>
      <p>{text}</p>
    </div>
  );
}