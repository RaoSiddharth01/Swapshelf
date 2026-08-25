import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#061326] text-white">

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 lg:px-16">

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* BRAND */}
          <div>

            <Link
              to="/"
              className="text-2xl font-black tracking-[-0.06em]"
            >
              Swap<span className="text-blue-400">Shelf</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              A simple place to buy, sell and exchange books with
              other readers.
            </p>

          </div>


          {/* EXPLORE */}
          <div>

            <p className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/Browse"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                Browse
              </Link>

              <Link
                to="/Sell"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                Sell a book
              </Link>

              <Link
                to="/About"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                About
              </Link>

            </div>

          </div>


          {/* ACCOUNT */}
          <div>

            <p className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
              Account
            </p>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/Login"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                Sign in
              </Link>

              <Link
                to="/Profile"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                My listings
              </Link>

            </div>

          </div>

        </div>


        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row">

          <p>
            © 2026 SwapShelf
          </p>

          <p>
            Built for readers.
          </p>

        </div>

      </div>

    </footer>
  );
}