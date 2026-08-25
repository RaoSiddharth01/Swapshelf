import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Browse", path: "/Browse" },
    { name: "Sell", path: "/Sell" },
    { name: "My Listings", path: "/Profile" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop / Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
        <nav className="mx-auto flex h-[68px] max-w-[1380px] items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-4 shadow-[0_12px_40px_rgba(15,40,70,.08)] backdrop-blur-xl md:h-[72px] md:rounded-full md:px-5">

          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,.25)] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-blue-500 md:h-11 md:w-11 md:rounded-[14px]">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 3.5h12v17l-6-3.5-6 3.5z" />
              </svg>
            </div>

            <span className="text-[20px] font-black tracking-[-0.06em] text-[#101c30] md:text-[22px]">
              Swap<span className="text-blue-600">Shelf</span>
            </span>
          </Link>


          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2.5 text-[14px] font-medium transition duration-300 ${
                  isActive(link.path)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>


          {/* Sign in */}
          <Link
            to="/Login"
            className="hidden rounded-full bg-[#071a2d] px-6 py-3 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 sm:block"
          >
            Sign in
          </Link>


          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <span className="text-xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>

        </nav>


        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-[1380px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,40,70,.12)] lg:hidden">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                  isActive(link.path)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/Login"
              onClick={() => setMenuOpen(false)}
              className="mt-1 block rounded-xl bg-[#071a2d] px-4 py-3.5 text-center text-sm font-semibold text-white"
            >
              Sign in
            </Link>

          </div>
        )}

      </header>
    </>
  );
}