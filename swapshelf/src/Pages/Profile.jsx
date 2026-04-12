import { useEffect, useState } from "react";
import API from "../services/api";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchMyBooks = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await API.get("/books/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyBooks();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(books.filter((b) => b._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //  LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <div className="mt-28 px-6 md:px-16 flex-1">

        <div className="bg-white shadow-xl rounded-2xl p-6 mb-10 flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              {user?.name}
            </h2>
            <p className="text-gray-500 mt-1">
              {user?.email}
            </p>
          </div>

          
          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition shadow"
          >
            Logout
          </button>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            My Listings
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your posted books 
          </p>
        </div>

        {books.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                isOwner={true}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-10 text-lg">
            No books posted yet 
          </p>
        )}

      </div>

      <Footer />
    </div>
  );
}