import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-white">
      <div className="section-wrap grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="text-2xl font-bold tracking-tight">Swap<span className="text-blue-400">Shelf</span></div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">A simple way to give your books a second life — buy, sell, and exchange with people around you.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-200">Explore</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400"><Link className="block hover:text-white" to="/Browse">Browse books</Link><Link className="block hover:text-white" to="/Sell">Sell a book</Link><Link className="block hover:text-white" to="/About">About SwapShelf</Link></div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-200">Account</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400"><Link className="block hover:text-white" to="/Login">Login / Register</Link><Link className="block hover:text-white" to="/Profile">My listings</Link></div>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="section-wrap py-5 text-xs text-slate-500">© 2026 SwapShelf. Built for a better way to share books.</div></div>
    </footer>
  );
}
