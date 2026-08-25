import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  const navigate = useNavigate();

  return (
    <main className="overflow-hidden bg-[#f6f9fc] text-[#102a43]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061426] px-6 pb-20 pt-32 text-white md:px-12 md:pb-24 lg:px-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,.22),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(37,99,235,.12),transparent_35%),linear-gradient(135deg,#061426,#020a14)]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -right-20 top-24 h-64 w-64 animate-pulse rounded-full border border-blue-400/10" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="animate-[fadeIn_600ms_ease-out] text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
              About SwapShelf
            </p>

            <h1 className="mt-5 animate-[fadeIn_800ms_ease-out] text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl md:text-[3.5rem]">
              A simpler way to
              <span className="block text-blue-400">
                keep books moving.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl animate-[fadeIn_1000ms_ease-out] text-base leading-7 text-slate-300 md:text-lg">
              SwapShelf was built around a simple problem:
              people often have books they no longer need while
              someone else is looking for those same books.
            </p>

          </div>


          <div className="mt-16 grid gap-4 sm:grid-cols-3">

            <AboutStat
              number="01"
              title="Buy"
              text="Find books without buying them new."
            />

            <AboutStat
              number="02"
              title="Sell"
              text="Give your finished books another reader."
            />

            <AboutStat
              number="03"
              title="Exchange"
              text="Swap books when both sides find a match."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY
      ====================================================== */}

      <section className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">

            <div>

              <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                01 / Why it exists
              </p>

              <div className="mt-4 h-px w-12 bg-blue-500" />

            </div>


            <div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] md:text-4xl">
                There are already plenty of books around us.
                The problem is finding where they go next.
              </h2>

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <p className="text-sm leading-7 text-slate-500">
                  Students finish textbooks, readers move on from novels,
                  and shelves slowly fill with books that may not be used
                  again.
                </p>

                <p className="text-sm leading-7 text-slate-500">
                  SwapShelf gives those books a simple second route —
                  another reader, another shelf, or an exchange that
                  makes sense for both people.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT IT DOES
      ====================================================== */}

      <section className="bg-[#f6f9fc] px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
              02 / What SwapShelf does
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] md:text-4xl">
              The idea is simple.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              SwapShelf focuses on the basic things a reader actually needs.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <AboutFeature
              number="01"
              title="Browse"
              text="Look through available books and check their details before deciding."
            />

            <AboutFeature
              number="02"
              title="List"
              text="Add a book you want to sell or pass on with its basic information."
            />

            <AboutFeature
              number="03"
              title="Connect"
              text="Get in touch with the person behind a listing and take it from there."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL / PRINCIPLE
      ====================================================== */}

      <section className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">

            {/* visual */}
            <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-[#071a2d]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(59,130,246,.2),transparent_35%)]" />

              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />

              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />


              <div className="absolute left-1/2 top-1/2 h-36 w-24 -translate-x-[55%] -translate-y-1/2 rotate-[-8deg] rounded-lg border border-white/10 bg-[#10375b] shadow-2xl transition duration-500 hover:-translate-x-[65%]" />

              <div className="absolute left-1/2 top-1/2 h-40 w-24 -translate-x-[25%] -translate-y-1/2 rotate-[7deg] rounded-lg border border-blue-300/10 bg-blue-600 shadow-2xl transition duration-500 hover:-translate-x-[15%]" />

              <div className="absolute bottom-7 left-7">

                <p className="text-[9px] font-bold tracking-[0.2em] text-blue-300 uppercase">
                  The principle
                </p>

                <p className="mt-2 max-w-xs text-sm text-slate-300">
                  A book can change shelves without losing its story.
                </p>

              </div>

            </div>


            {/* copy */}
            <div>

              <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                03 / The idea behind it
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.045em] md:text-4xl">
                Not another giant marketplace.
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-500 md:text-base">
                SwapShelf is meant to stay focused. The goal is not
                to fill the screen with promotions, statistics or
                unnecessary features.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
                It is simply a place where people can find books,
                list books they have finished with, and connect with
                another reader.
              </p>


              <div className="mt-8 border-l-2 border-blue-500 pl-5">

                <p className="text-sm font-semibold leading-6 text-[#071a2d]">
                  Keep the process simple.
                  <span className="text-blue-600">
                    {" "}Let the books do the rest.
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="bg-[#f6f9fc] px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            <ValueItem
              number="01"
              title="Practical"
              text="The platform should help you find or pass on a book without getting in the way."
            />

            <ValueItem
              number="02"
              title="Accessible"
              text="The experience is designed to stay clear and easy to understand on different screen sizes."
            />

            <ValueItem
              number="03"
              title="Reader-focused"
              text="The important part is the connection between the book and the next reader."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#071a2d] px-6 py-14 text-center text-white md:px-12 md:py-16">

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">

            <p className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
              SwapShelf
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] md:text-4xl">
              Ready to find your next book?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-400">
              Browse the current listings or add a book from your own shelf.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                onClick={() => navigate("/Browse")}
                className="rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Browse books →
              </button>

              <button
                onClick={() => navigate("/Sell")}
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                List a book
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <Footer />

    </main>
  );
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function AboutStat({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-bold tracking-[0.15em] text-blue-300">
          {number}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

      </div>

      <h3 className="mt-7 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-400">
        {text}
      </p>

    </div>
  );
}


function AboutFeature({ number, title, text }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_55px_rgba(10,50,90,.08)]">

      <span className="text-[10px] font-bold tracking-[0.15em] text-blue-500">
        {number}
      </span>

      <h3 className="mt-8 text-xl font-bold tracking-[-0.03em]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

      <div className="mt-7 h-px w-8 bg-blue-500 transition-all duration-500 group-hover:w-16" />

    </article>
  );
}


function ValueItem({ number, title, text }) {
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