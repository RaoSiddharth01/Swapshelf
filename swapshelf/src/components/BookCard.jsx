import { useState } from "react";
import BookModal from "./BookModal";
import API from "../services/api";
import toast from "react-hot-toast";

export default function BookCard({
  book,
  isOwner,
  onDelete,
}) {
  const [open, setOpen] = useState(false);

  const handleEdit = async () => {
    const newPrice = prompt(
      "Enter new price:",
      book.price
    );

    if (!newPrice) return;

    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/books/${book._id}`,
        { price: newPrice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Price updated");

      window.location.reload();

    } catch (err) {
      console.log(err);
      toast.error("Unable to update listing");
    }
  };


  const handleChat = () => {
    const email =
      book.user?.email ||
      "seller@example.com";

    const subject = `Interested in your book: ${book.name}`;

    const message = `Hi,

I am interested in your book "${book.name}".

Can we discuss further?

Thanks`;

    const gmailLink =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    window.open(gmailLink, "_blank");
  };


  return (
    <>
      <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(10,50,90,.05)] transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_55px_rgba(10,50,90,.1)]">

        {/* IMAGE */}
        <div
          className="relative h-56 cursor-pointer overflow-hidden bg-slate-100"
          onClick={() => setOpen(true)}
        >

          <img
            src={book.image}
            alt={book.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />


          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />


          {/* PRICE */}
          <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#071a2d]/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            ₹{book.price}
          </div>


          {/* EXCHANGE */}
          {book.exchange && (
            <div className="absolute bottom-4 left-4 rounded-full border border-blue-200/20 bg-blue-600/90 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
              Exchange available
            </div>
          )}

        </div>


        {/* CONTENT */}
        <div className="p-5">

          <div className="flex items-start justify-between gap-3">

            <div>

              <h2 className="line-clamp-1 text-xl font-bold tracking-[-0.03em] text-[#071a2d]">
                {book.name}
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                {book.city}
              </p>

            </div>

          </div>


          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
            {book.description}
          </p>


          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

            <div>

              <p className="text-[9px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                Condition
              </p>

              <p className="mt-1 text-xs font-semibold text-[#102a43]">
                {book.condition}
              </p>

            </div>

            <button
              onClick={() => setOpen(true)}
              className="text-xs font-semibold text-blue-600 transition hover:text-blue-800"
            >
              View details →
            </button>

          </div>


          {/* OWNER ACTIONS */}
          {isOwner && (
            <div className="mt-4 grid grid-cols-2 gap-2">

              <button
                onClick={handleEdit}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Edit price
              </button>

              <button
                onClick={() => onDelete(book._id)}
                className="rounded-xl border border-red-100 bg-red-50 py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>

            </div>
          )}


          {/* ACTIONS */}
          <div className="mt-3 grid grid-cols-2 gap-2">

            <button
              onClick={() => setOpen(true)}
              className="rounded-xl border border-blue-200 py-2.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              View
            </button>

            <button
              onClick={handleChat}
              className="rounded-xl bg-[#071a2d] py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600"
            >
              Chat
            </button>

          </div>

        </div>

      </article>


      {open && (
        <BookModal
          book={book}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}