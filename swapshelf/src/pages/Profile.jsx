import { useEffect, useState } from "react";
import API from "../services/api";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Profile() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

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

      setBooks((prev) =>
        prev.filter((book) => book._id !== id)
      );

      toast.success("Listing deleted");

    } catch (err) {
      console.log(err);

      toast.error("Unable to delete listing");
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/Login");
  };


  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f9fc] text-[#102a43]">

      {/* HEADER */}
      <section className="relative overflow-hidden bg-[#061426] px-6 pb-16 pt-32 text-white md:px-12 md:pb-20 lg:px-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,.2),transparent_30%),linear-gradient(135deg,#061426,#020a14)]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
            My shelf
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-[3.5rem]">
            Your listings.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            Manage the books you've added to SwapShelf.
          </p>

        </div>

      </section>


      {/* CONTENT */}
      <section className="px-6 py-10 md:px-12 md:py-14 lg:px-16">

        <div className="mx-auto max-w-7xl">


          {/* USER CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(10,50,90,.06)] md:p-7">

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-50 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#071a2d] text-xl font-black text-white">
                  {user?.name?.charAt(0)?.toUpperCase() || "S"}
                </div>

                <div>

                  <p className="text-[10px] font-bold tracking-[0.16em] text-blue-600 uppercase">
                    Account
                  </p>

                  <h2 className="mt-1 text-xl font-bold tracking-[-0.03em]">
                    {user?.name || "SwapShelf user"}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {user?.email}
                  </p>

                </div>

              </div>


              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-100 bg-red-50 px-5 py-3 text-sm font-semibold text-red-500 transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>

            </div>

          </div>


          {/* LISTINGS HEADER */}
          <div className="mt-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <p className="text-[10px] font-bold tracking-[0.18em] text-blue-600 uppercase">
                01 / Your books
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.045em]">
                My listings
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {books.length}{" "}
                {books.length === 1
                  ? "book"
                  : "books"}{" "}
                listed
              </p>

            </div>


            <button
              onClick={() => navigate("/Sell")}
              className="group rounded-xl bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
            >
              Add a book
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>


          {/* BOOKS */}
          <div className="mt-7">

            {books.length > 0 ? (

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

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

              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-500">
                  +
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Your shelf is empty
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Add your first book and let another reader discover it.
                </p>

                <button
                  onClick={() => navigate("/Sell")}
                  className="mt-6 rounded-xl bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  List your first book →
                </button>

              </div>

            )}

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}