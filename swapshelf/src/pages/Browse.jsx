import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import API from "../services/api";

export default function Browse() {
  const [search, setSearch] = useState(""); const [city, setCity] = useState(""); const [books, setBooks] = useState([]);
  const fetchBooks = async () => { try { const { data } = await API.get(`/books?search=${search}&city=${city}`); setBooks(data); } catch (err) { console.log(err); } };
  useEffect(() => { fetchBooks(); }, [search, city]);
  return <div className="page-shell bg-[#f7faff] text-slate-900"><main className="section-wrap pb-20">
    <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white px-6 py-10 shadow-card md:px-10"><div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" /><div className="relative"><p className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">Discover</p><h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Find a book that fits.</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Search the current shelf by title or city and open any listing for the full details.</p><div className="mt-8 grid gap-3 md:grid-cols-[1.6fr_1fr]"><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by book name..." className="input-premium pl-11" /></div><input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Filter by city..." className="input-premium" /></div></div></div>
    <div className="mt-12 flex items-end justify-between gap-4"><div><p className="text-sm text-slate-500">{books.length} {books.length === 1 ? "listing" : "listings"} available</p><h2 className="mt-1 text-2xl font-bold">Latest books</h2></div>{(search || city) && <button onClick={() => {setSearch(""); setCity("");}} className="text-sm font-semibold text-blue-600 hover:text-blue-800">Clear filters</button>}</div>
    {books.length > 0 ? <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{books.map((book, index) => <BookCard key={book._id || index} book={book} />)}</div> : <div className="mt-7 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-600">⌕</div><h3 className="mt-5 text-lg font-bold">No books found</h3><p className="mt-2 text-sm text-slate-500">Try another title or city.</p></div>}
  </main><Footer /></div>;
}
