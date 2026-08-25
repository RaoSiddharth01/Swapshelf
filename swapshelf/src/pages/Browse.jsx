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
    <main className="min-h-screen overflow-hidden bg-[#f6f9fc] text-[#102a43]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061426] px-6 pb-16 pt-32 text-white md:px-12 md:pb-20 lg:px-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,.2),transparent_30%),linear-gradient(135deg,#061426,#020a14)]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -right-24 top-24 h-64 w-64 rounded-full border border-blue-400/10" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
            01 / Browse
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl md:text-[3.5rem]">
            Find something
            <span className="block text-blue-400">
              worth reading.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            Browse books listed by other readers and find your next
            read without making the search complicated.
          </p>

        </div>
      </section>


      {/* SEARCH */}
      <section className="px-6 py-10 md:px-12 md:py-14 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(10,50,90,.06)] md:p-6">

            <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">

              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase">
                  Search
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
                    ⌕
                  </span>

                  <input
                    type="text"
                    placeholder="Search by book name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-[#102a43] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>


              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Filter by city..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#102a43] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

            </div>

          </div>


          {/* RESULTS HEADER */}
          <div className="mt-12 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-blue-600 uppercase">
                02 / Listings
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] md:text-3xl">
                Available books
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              {books.length} {books.length === 1 ? "book" : "books"} found
            </p>

          </div>


          {/* BOOKS */}
          <div className="mt-7">

            {books.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {books.map((book) => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-500">
                  ⌕
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  No books found
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Try changing your search or city filter and look again.
                </p>

              </div>
            )}

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}