import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  const [activeBook, setActiveBook] = useState(0);

  const books = [
    {
      title: "A new reader",
      type: "Ready to be discovered",
      label: "01",
    },
    {
      title: "A second chapter",
      type: "Waiting on another shelf",
      label: "02",
    },
    {
      title: "A story in motion",
      type: "Passed from reader to reader",
      label: "03",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBook((prev) => (prev + 1) % books.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-hidden bg-[#f6f9fc] text-[#102a43]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#061426] text-white md:min-h-[760px]">

        {/* background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,.22),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,.12),transparent_35%),linear-gradient(135deg,#061426,#020a14)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* floating shapes */}
        <div className="absolute -right-20 top-36 h-64 w-64 animate-pulse rounded-full border border-blue-400/10" />

        <div className="absolute right-10 top-52 h-36 w-36 animate-[spin_18s_linear_infinite] rounded-[35%] border border-blue-400/10" />

        <div className="absolute bottom-20 left-[-100px] h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />


        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-20 pt-32 md:min-h-[760px] md:px-12 lg:px-16">

          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">


            {/* LEFT */}
            <div className="max-w-2xl">

              <div className="mb-7 inline-flex animate-[fadeIn_700ms_ease-out] items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-blue-300 uppercase backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                A place for books to move
              </div>


              <h1 className="animate-[fadeIn_900ms_ease-out] text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-[3.7rem] lg:text-[4.2rem]">
                Swap<span className="text-blue-400">Shelf</span>
              </h1>


              <p className="mt-6 max-w-xl animate-[fadeIn_1100ms_ease-out] text-base leading-7 text-slate-300 md:text-lg">
                Buy books you need, sell the ones you've finished,
                or exchange them with another reader.
              </p>


              <div className="mt-8 flex flex-col gap-3 animate-[fadeIn_1300ms_ease-out] sm:flex-row">

                <button
                  onClick={() => navigate("/Browse")}
                  className="group rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,.2)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
                >
                  Browse books
                  <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>


                <button
                  onClick={() => navigate("/Sell")}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  List a book
                </button>

              </div>


              {/* small links */}
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-500">

                <span className="flex items-center gap-2">
                  <span className="text-blue-400">01</span>
                  Browse
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-blue-400">02</span>
                  Sell
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-blue-400">03</span>
                  Exchange
                </span>

              </div>

            </div>


            {/* RIGHT VISUAL */}
            <div className="relative mx-auto hidden h-[430px] w-full max-w-[480px] lg:block">

              {/* orbit */}
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 animate-[spin_22s_linear_infinite] rounded-full border border-blue-400/10" />

              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />


              {/* floating dot */}
              <span className="absolute left-[12%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-blue-400" />

              <span className="absolute right-[13%] top-[68%] h-1.5 w-1.5 animate-ping rounded-full bg-blue-300" />


              {/* BOOK STACK */}
              <div className="absolute left-1/2 top-1/2 h-[230px] w-[250px] -translate-x-1/2 -translate-y-1/2">

                <div className="absolute bottom-5 left-5 h-24 w-48 rotate-[-8deg] rounded-lg border border-white/10 bg-[#102a43] shadow-2xl transition duration-700 hover:-translate-x-3">
                  <span className="absolute bottom-5 left-5 text-[10px] font-bold tracking-[0.2em] text-slate-400">
                    READ
                  </span>
                </div>


                <div className="absolute bottom-9 left-10 h-24 w-48 rotate-[5deg] rounded-lg border border-blue-300/10 bg-[#0b3559] shadow-2xl transition duration-700 hover:translate-x-3">
                  <span className="absolute bottom-5 left-5 text-[10px] font-bold tracking-[0.2em] text-blue-300">
                    SHARE
                  </span>
                </div>


                <div className="absolute bottom-14 left-16 flex h-28 w-48 rotate-[-2deg] items-end overflow-hidden rounded-lg border border-blue-300/20 bg-gradient-to-br from-blue-600 to-[#123d68] p-5 shadow-[0_30px_70px_rgba(0,0,0,.35)] transition duration-700 hover:-translate-y-3">

                  <div>
                    <p className="text-[9px] font-bold tracking-[0.22em] text-blue-100">
                      SWAPSHELF
                    </p>

                    <p className="mt-2 text-xl font-black leading-tight tracking-[-0.04em]">
                      KEEP
                      <br />
                      STORIES
                      <br />
                      MOVING.
                    </p>
                  </div>

                </div>

              </div>


              {/* floating note */}
              <div className="absolute bottom-4 left-0 animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl">

                <p className="text-[9px] font-bold tracking-[0.15em] text-blue-300 uppercase">
                  Simple idea
                </p>

                <p className="mt-1 text-xs text-slate-300">
                  A finished book can still be useful.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* bottom line */}
        <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] tracking-[0.14em] text-slate-500 uppercase md:left-12 md:right-12 lg:left-16 lg:right-16">

          <span>Buy · Sell · Exchange</span>

          <span className="hidden sm:block">
            Scroll to explore ↓
          </span>

        </div>

      </section>


      {/* =====================================================
          IDEA
      ====================================================== */}

      <section className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">

            <div>

              <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                01 / The idea
              </p>

              <div className="mt-4 h-px w-12 bg-blue-500" />

            </div>


            <div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] text-[#071a2d] md:text-4xl">
                A book doesn't have to stop being useful when you finish reading it.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                SwapShelf gives those books another place to go.
                You can discover something new, list a book you no
                longer need, or connect with another reader for an exchange.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-[#f6f9fc] px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                02 / How it works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] md:text-4xl">
                Three simple steps.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Nothing complicated. Find a book, connect with its owner,
              and decide what works for both of you.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <FlowCard
              number="01"
              title="Discover"
              text="Browse books listed by other readers and find something worth reading next."
              icon="⌕"
            />

            <FlowCard
              number="02"
              title="Connect"
              text="Open a listing, check the details and get in touch with the seller."
              icon="↗"
            />

            <FlowCard
              number="03"
              title="Move it on"
              text="Buy, sell or exchange. Once you're done, the book gets another reader."
              icon="↻"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          DISCOVER SECTION
      ====================================================== */}

      <section className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">

            <div>

              <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                03 / Discover
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-0.045em] md:text-4xl">
                Your next read could already be on someone else's shelf.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                Browse different kinds of books from people who are
                ready to pass them on. No endless catalogue — just
                listings made by readers.
              </p>

              <button
                onClick={() => navigate("/Browse")}
                className="group mt-7 rounded-full bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                Browse the shelf
                <span className="ml-3 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>


            {/* BOOK GRID */}
            <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-[#071a2d] p-6">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,.2),transparent_35%)]" />

              <div className="relative flex h-full items-end justify-center gap-3">

                {[
                  ["FICTION", "bg-[#123d68]", "-rotate-6"],
                  ["IDEAS", "bg-[#0d2944]", "rotate-2"],
                  ["CODE", "bg-blue-600", "-rotate-2"],
                  ["STORIES", "bg-[#16456f]", "rotate-6"],
                ].map(([label, bg, rotation], index) => (
                  <div
                    key={label}
                    className={`group h-52 w-16 ${bg} ${rotation} flex cursor-default items-end rounded-md border border-white/10 p-3 shadow-2xl transition duration-500 hover:-translate-y-5 hover:rotate-0 sm:h-60 sm:w-20`}
                    style={{
                      transitionDelay: `${index * 70}ms`,
                    }}
                  >
                    <span className="text-[8px] font-bold tracking-[0.16em] text-white/80 [writing-mode:vertical-rl]">
                      {label}
                    </span>
                  </div>
                ))}

              </div>


              <div className="absolute left-6 top-6">

                <p className="text-[9px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                  A shelf is bigger than one reader
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SELL SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071a2d] px-6 py-20 text-white md:px-12 md:py-24 lg:px-16">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.8fr]">

          <div>

            <p className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
              04 / Give a book another reader
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-0.045em] md:text-4xl">
              Finished reading?
              <span className="block text-blue-400">
                Don't let it sit there.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              List the book, add its details and let someone else decide
              if it's the one they're looking for.
            </p>

            <button
              onClick={() => navigate("/Sell")}
              className="mt-7 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#071a2d] transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:text-white"
            >
              List your book →
            </button>

          </div>


          {/* rotating cards */}
          <div className="relative mx-auto h-64 w-full max-w-md">

            <div className="absolute left-1/2 top-1/2 h-44 w-64 -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl transition duration-700 hover:-rotate-12" />

            <div className="absolute left-1/2 top-1/2 h-44 w-64 -translate-x-1/2 -translate-y-1/2 rotate-[7deg] rounded-2xl border border-white/10 bg-blue-500/10 shadow-2xl transition duration-700 hover:rotate-12" />

            <div className="absolute left-1/2 top-1/2 flex h-44 w-64 -translate-x-1/2 -translate-y-1/2 items-end rounded-2xl border border-blue-300/20 bg-gradient-to-br from-blue-600 to-[#0c3456] p-6 shadow-[0_30px_60px_rgba(0,0,0,.3)]">

              <div>

                <p className="text-[9px] font-bold tracking-[0.2em] text-blue-100">
                  YOUR BOOK
                </p>

                <p className="mt-2 text-2xl font-black tracking-[-0.05em]">
                  NEXT
                  <br />
                  READER.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-3">

            <MiniPoint
              number="01"
              title="Simple"
              text="Find and list books without unnecessary steps."
            />

            <MiniPoint
              number="02"
              title="Useful"
              text="A practical way to get books you need and pass on the ones you don't."
            />

            <MiniPoint
              number="03"
              title="Human"
              text="Listings connect readers instead of turning books into anonymous products."
            />

          </div>

        </div>

      </section>

      <section className="px-6 pb-20 md:px-12 md:pb-24 lg:px-16">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#edf5ff] px-6 py-16 text-center md:px-12">

          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="relative">

            <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
              SwapShelf
            </p>

            
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
              Start with the shelf that's already around you.
            </p>

            <button
              onClick={() => navigate("/Browse")}
              className="mt-7 rounded-full bg-[#071a2d] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
            >
              Explore books →
            </button>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}

function FlowCard({ number, title, text, icon }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_55px_rgba(10,50,90,.09)]">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-bold tracking-[0.15em] text-blue-500">
          {number}
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </span>

      </div>

      <h3 className="mt-9 text-xl font-bold tracking-[-0.03em]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </article>
  );
}


function MiniPoint({ number, title, text }) {
  return (
    <div className="border-t border-slate-200 pt-5">

      <span className="text-[10px] font-bold tracking-[0.15em] text-blue-500">
        {number}
      </span>

      <h3 className="mt-4 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  );
}