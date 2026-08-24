import { useState } from "react";
import BookModal from "./BookModal";

export default function BookCard({ book, isOwner, onDelete }) {
  const [open, setOpen] = useState(false);

  const chat = () => {
    const email = book.user?.email || "seller@example.com";
    const subject = `Interested in your book: ${book.name}`;
    const message = `Hi,\n\nI am interested in your book "${book.name}".\n\nCan we discuss further?\n\nThanks`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailLink, "_blank");
  };

  return <>
    <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/40 blur-2xl transition duration-500 group-hover:scale-125" />
        <img src={book.image} alt={book.name} className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105" onClick={() => setOpen(true)} />
        <div className="absolute left-4 top-4 z-20 rounded-full bg-slate-950/85 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">₹{book.price}</div>
        {book.exchange && <div className="absolute bottom-4 left-4 z-20 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow backdrop-blur">Exchange available</div>}
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3"><h2 className="line-clamp-1 text-lg font-bold text-slate-900">{book.name}</h2><span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">{book.condition}</span></div>
        <p className="line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">{book.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500"><span className="grid h-7 w-7 place-items-center rounded-full bg-blue-50 text-blue-600">⌖</span>{book.city}</div>
        {isOwner && <div className="mt-4 grid grid-cols-2 gap-2"><button className="rounded-xl border border-amber-200 bg-amber-50 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100" onClick={() => { const newPrice = prompt("Enter new price:"); if (!newPrice) return; const token = localStorage.getItem("token"); fetch(`http://localhost:5000/api/books/${book._id}`, { method:"PUT", headers:{"Content-Type":"application/json", Authorization:`Bearer ${token}`}, body:JSON.stringify({ price:newPrice }) }).then(() => window.location.reload()); }}>Edit</button><button className="rounded-xl border border-red-200 bg-red-50 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100" onClick={() => onDelete(book._id)}>Delete</button></div>}
        <div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => setOpen(true)} className="btn-secondary py-2.5 text-sm">View details</button><button onClick={chat} className="btn-primary py-2.5 text-sm">Contact seller</button></div>
      </div>
    </article>
    {open && <BookModal book={book} onClose={() => setOpen(false)} />}
  </>;
}
