import { useState } from "react";
import BookModal from "./BookModal";

export default function BookCard({ book, isOwner, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative">
        
        
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 text-sm rounded-full shadow">
          ₹{book.price}
        </div>

        <img
          src={book.image}
          alt={book.name}
  
          className="h-48 w-full object-cover cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => setOpen(true)}
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold text-blue-600">
            {book.name}
          </h2>

          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {book.description}
          </p>

          <div className="mt-2 text-sm text-gray-500">
             {book.city}
          </div>

          <div className="text-sm mt-1">
            Condition: <span className="font-medium">{book.condition}</span>
          </div>

          {book.exchange && (
            <div className="mt-2 inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
              Available for Exchange
            </div>
          )}

          {/*  ACTION BUTTONS */}
          {isOwner && (
            <div className="flex gap-2 mt-3">
              
              {/*  EDIT */}
              <button
                className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
                onClick={() => {
                  const newPrice = prompt("Enter new price:");
                  if (!newPrice) return;

                  const token = localStorage.getItem("token");

                  fetch(`http://localhost:5000/api/books/${book._id}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ price: newPrice }),
                  }).then(() => window.location.reload());
                }}
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
                onClick={() => onDelete(book._id)}
              >
                Delete
              </button>

            </div>
          )}

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setOpen(true)}
              className="flex-1 border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              View
            </button>

            <button
               onClick={() => {
                 const email = book.user?.email || "seller@example.com";

                const subject = `Interested in your book: ${book.name}`;
                 const message = `Hi,\n\nI am interested in your book "${book.name}".\n\nCan we discuss further?\n\nThanks`;

                const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

              window.open(gmailLink, "_blank");
            }}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
              Chat
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && <BookModal book={book} onClose={() => setOpen(false)} />}
    </>
  );
}