import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  ["Home", "/"],
  ["Browse", "/Browse"],
  ["Sell", "/Sell"],
  ["About", "/About"],
  ["My Listings", "/Profile"],
];

function BookMarkIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path d="M6 4.75A2.75 2.75 0 0 1 8.75 2h6.5A2.75 2.75 0 0 1 18 4.75V21l-6-3.5L6 21V4.75Z"/></svg>;
}

function MenuIcon({ close }) {
  return close ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="m6 6 12 12M18 6 6 18"/></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-5">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-card md:rounded-full md:px-5">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 font-bold tracking-tight text-slate-900">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"><BookMarkIcon /></span>
          <span className="text-lg">Swap<span className="text-blue-600">Shelf</span></span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, path]) => {
            const active = location.pathname.toLowerCase() === path.toLowerCase();
            return <Link key={path} to={path} className={`rounded-full px-4 py-2 text-sm font-medium transition ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}>{label}</Link>;
          })}
        </div>

        <Link to="/Login" className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 md:inline-flex">Sign in</Link>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"><MenuIcon close={open} /></button>
      </nav>

      {open && <div className="glass animate-fade-in mx-auto mt-2 max-w-6xl rounded-2xl p-2 shadow-card md:hidden">
        {navItems.map(([label, path]) => <Link key={path} onClick={() => setOpen(false)} to={path} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700">{label}</Link>)}
        <Link onClick={() => setOpen(false)} to="/Login" className="mt-1 block rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white">Sign in</Link>
      </div>}
    </header>
  );
}
