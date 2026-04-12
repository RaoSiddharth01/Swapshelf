import { useState, useEffect } from "react"; 
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import API from "../services/api"; 

export default function Browse() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [books, setBooks] = useState([]); 

  const fetchBooks = async () => {
    try {
      const { data } = await API.get(
        `/books?search=${search}&city=${city}`
      );
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(() => {
    fetchBooks();
  }, [search, city]);


  return (
    <div className="min-h-screen flex flex-col">

      <div className="mt-24 px-8 md:px-16 flex-1">

        
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Browse Books
        </h1>

        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by book name..."
            className="border p-3 rounded-lg w-full md:w-1/3 focus:outline-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="text"
            placeholder="Filter by city..."
            className="border p-3 rounded-lg w-full md:w-1/3 focus:outline-blue-400"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        
        {books.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No books found.</p>
        )}

      </div>

      <Footer />
    </div>
  );
}