export default function BookModal({ book, onClose }) {
  const chat = () => {
    const email = book.user?.email || "seller@example.com";
    const subject = `Interested in your book: ${book.name}`;
    const message = `Hi,\n\nI am interested in your book "${book.name}".\n\nCan we discuss further?\n\nThanks`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`, "_blank");
  };
  return <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/65 p-4 backdrop-blur-sm" onClick={onClose}>
    <div className="animate-modal relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/20 bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-slate-950/80 text-xl text-white backdrop-blur transition hover:scale-105">×</button>
      <div className="grid md:grid-cols-[.9fr_1.1fr]">
        <div className="min-h-72 bg-gradient-to-br from-blue-50 to-indigo-100 p-6"><img src={book.image} alt={book.name} className="h-full max-h-[430px] w-full rounded-2xl object-cover shadow-xl" /></div>
        <div className="p-7 md:p-9"><span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">{book.condition}</span><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">{book.name}</h2><p className="mt-4 leading-7 text-slate-500">{book.description}</p><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Price</p><p className="mt-1 text-xl font-bold text-slate-900">₹{book.price}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Location</p><p className="mt-1 text-sm font-semibold text-slate-800">{book.city}</p></div></div>{book.exchange && <p className="mt-5 text-sm font-semibold text-blue-700">This listing is also available for exchange.</p>}<button onClick={chat} className="btn-primary mt-7 w-full">Contact seller</button></div>
      </div>
    </div>
  </div>;
}
