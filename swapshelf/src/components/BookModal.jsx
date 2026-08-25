export default function BookModal({
  book,
  onClose,
}) {
  const handleChat = () => {
    const email =
      book.user?.email ||
      "seller@example.com";

    const subject =
      `Interested in your book: ${book.name}`;

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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020a14]/75 px-4 py-6 backdrop-blur-md"
      onClick={onClose}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-white shadow-[0_35px_100px_rgba(0,0,0,.3)]"
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#071a2d]/80 text-sm text-white backdrop-blur-md transition hover:rotate-90 hover:bg-blue-600"
        >
          ✕
        </button>


        <div className="grid md:grid-cols-[.9fr_1.1fr]">

          {/* IMAGE */}
          <div className="relative min-h-[320px] bg-[#071a2d] md:min-h-[480px]">

            <img
              src={book.image}
              alt={book.name}
              className="h-full min-h-[320px] w-full object-cover md:min-h-[480px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">

              <p className="text-[9px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                SwapShelf listing
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                ₹{book.price}
              </p>

            </div>

          </div>


          {/* DETAILS */}
          <div className="p-7 md:p-9">

            <p className="text-[10px] font-bold tracking-[0.18em] text-blue-600 uppercase">
              Book details
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] text-[#071a2d]">
              {book.name}
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              {book.description}
            </p>


            <div className="mt-8 grid grid-cols-2 gap-3">

              <Detail
                label="Location"
                value={book.city}
              />

              <Detail
                label="Condition"
                value={book.condition}
              />

            </div>


            {book.exchange && (
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">

                <p className="text-xs font-semibold text-blue-700">
                  Available for exchange
                </p>

                <p className="mt-1 text-[11px] text-blue-600/70">
                  The seller is open to swapping this book.
                </p>

              </div>
            )}


            <button
              onClick={handleChat}
              className="group mt-8 w-full rounded-xl bg-[#071a2d] py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
            >
              Chat with seller
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


function Detail({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">

      <p className="text-[9px] font-bold tracking-[0.15em] text-slate-400 uppercase">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-semibold text-[#102a43]">
        {value || "Not specified"}
      </p>

    </div>
  );
}