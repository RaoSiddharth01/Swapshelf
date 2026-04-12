export default function BookModal({ book, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* DETAILS */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-blue-600">
            {book.name}
          </h2>

          <p className="mt-2 text-gray-600">
            {book.description}
          </p>

          <div className="mt-3 text-sm">
            <p> {book.city}</p>
            <p>Condition: {book.condition}</p>
            <p className="text-blue-600 font-semibold mt-1">
              ₹{book.price}
            </p>
          </div>

          {book.exchange && (
            <div className="mt-2 text-blue-500 text-sm">
              Available for Exchange
            </div>
          )}

          {/*CHAT BUTTON */}
          <button className="mt-5 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Chat with Seller
          </button>
        </div>
      </div>
    </div>
  );
}