import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const features = [
  { n:"01", title:"Buy smarter", text:"Discover pre-owned books at prices that make sense, without the clutter of a traditional marketplace." },
  { n:"02", title:"Sell simply", text:"Turn books you no longer need into value with a straightforward listing flow." },
  { n:"03", title:"Keep books moving", text:"Offer exchange as an option and help useful books find their next reader." },
];

export default function Home() {
  const navigate = useNavigate();
  return <div className="overflow-hidden bg-[#f7faff] text-slate-900">
    <section className="relative min-h-[760px] grid-bg pt-28 md:pt-32">
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl animate-drift" /><div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-200/25 blur-3xl animate-drift" />
      <div className="section-wrap grid items-center gap-14 pb-24 pt-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur"><span className="h-2 w-2 rounded-full bg-blue-500" />A cleaner way to find your next book</div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl lg:text-7xl">Give every book a <span className="text-gradient">second chapter.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 md:text-lg">Buy, sell or exchange books through a focused marketplace designed around simple listings and real connections.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button onClick={() => navigate("/Browse")} className="btn-primary">Explore books <span>→</span></button><button onClick={() => navigate("/Sell")} className="btn-secondary">List a book</button></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500"><span>✓ Simple listings</span><span>✓ Exchange-ready</span><span>✓ Browse by city</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[500px] animate-fade-up [animation-delay:.12s]">
          <div className="absolute -inset-8 rounded-[40px] bg-blue-500/10 blur-3xl" />
          <div className="relative rounded-[34px] border border-white/80 bg-white/70 p-4 shadow-soft backdrop-blur-xl">
            <div className="rounded-[26px] bg-slate-950 p-6 text-white sm:p-8">
              <div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.22em] text-blue-300">SwapShelf</p><p className="mt-2 text-xl font-bold">A marketplace for books</p></div><div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-lg">↗</div></div>
              <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="text-3xl font-bold text-blue-300">Buy</div><p className="mt-2 text-sm text-slate-400">Find your next read</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="text-3xl font-bold text-cyan-300">Sell</div><p className="mt-2 text-sm text-slate-400">Pass a book forward</p></div></div>
              <div className="mt-3 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5"><div className="flex items-center justify-between"><span className="text-sm text-slate-300">Exchange</span><span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-xs text-blue-300">Optional</span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" /></div></div>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-5 animate-float rounded-2xl border border-slate-200 bg-white p-4 shadow-card"><p className="text-xs text-slate-400">Built around</p><p className="mt-1 font-bold text-slate-900">books, not noise.</p></div>
        </div>
      </div>
    </section>

    <section className="section-wrap py-24"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">Why SwapShelf</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Everything you need to move a book forward.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{features.map((f) => <div key={f.n} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"><div className="text-sm font-bold text-blue-600">{f.n}</div><h3 className="mt-10 text-xl font-bold">{f.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{f.text}</p><div className="mt-7 h-px w-12 bg-blue-200 transition-all group-hover:w-24 group-hover:bg-blue-500" /></div>)}</div></section>

    <section className="border-y border-blue-100 bg-white"><div className="section-wrap py-24"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">The flow</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Simple from start to finish.</h2></div><div className="mt-14 grid gap-6 md:grid-cols-3">{[["01","Create an account","Sign in so your listings and activity stay connected to you."],["02","Browse or list","Search by book or city, or add a book you are ready to pass on."],["03","Connect","Open the listing and contact the seller to take it forward."]].map(([n,t,d]) => <div key={n} className="relative rounded-3xl bg-slate-50 p-7"><span className="text-5xl font-black text-blue-100">{n}</span><h3 className="mt-6 text-lg font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{d}</p></div>)}</div></div></section>

    <section className="section-wrap py-24"><div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-7 py-14 text-center text-white md:px-14"><div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-600/30 blur-3xl" /><div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" /><div className="relative"><p className="text-sm font-semibold uppercase tracking-[.2em] text-blue-300">Your next read is out there</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Browse the shelf. Find a book worth keeping.</h2><button onClick={() => navigate("/Browse")} className="btn-primary mt-8">Browse books →</button></div></div></section>
    <Footer />
  </div>;
}
