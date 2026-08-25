import { useState } from "react";
import Footer from "../components/Footer";
import API from "../services/api";
import toast from "react-hot-toast";

export default function Sell() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [exchange, setExchange] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [condition, setCondition] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("city", city);
      formData.append("condition", condition);
      formData.append("exchange", exchange);
      formData.append("image", image);

      const token = localStorage.getItem("token");

      const { data } = await API.post("/books", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(data);

      toast.success("Book posted successfully!");

      setName("");
      setDescription("");
      setPrice("");
      setCity("");
      setCondition("");
      setExchange(false);
      setImage(null);
      setPreview(null);

    } catch (err) {
      console.log(err.response?.data);

      toast.error(
        err.response?.data?.message || "Error posting book"
      );
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f9fc] text-[#102a43]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061426] px-6 pb-16 pt-32 text-white md:px-12 md:pb-20 lg:px-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,.2),transparent_30%),linear-gradient(135deg,#061426,#020a14)]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
            01 / Sell or exchange
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl md:text-[3.5rem]">
            Give your book
            <span className="block text-blue-400">
              another reader.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            Add a few details about your book and put it on the shelf
            for someone else to discover.
          </p>

        </div>
      </section>


      {/* FORM */}
      <section className="px-6 py-12 md:px-12 md:py-16 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <form
            onSubmit={handleSubmit}
            className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(10,50,90,.08)] lg:grid-cols-[.85fr_1.15fr]"
          >

            {/* IMAGE SIDE */}
            <div className="relative bg-[#071a2d] p-7 text-white md:p-9">

              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <p className="text-[10px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                  02 / Book image
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                  Show what you're listing.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  A clear image makes it easier for another reader
                  to understand the condition of the book.
                </p>


                <div className="mt-8">

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="hidden"
                    id="fileUpload"
                  />

                  <label
                    htmlFor="fileUpload"
                    className="group flex min-h-[290px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-blue-300/30 bg-white/[0.04] p-5 text-center transition duration-300 hover:border-blue-300/60 hover:bg-white/[0.07]"
                  >

                    {preview ? (
                      <img
                        src={preview}
                        alt="Book preview"
                        className="h-full max-h-[280px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div>

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-2xl text-blue-300">
                          ↑
                        </div>

                        <p className="mt-5 text-sm font-semibold">
                          Click to upload
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          JPG, PNG or similar image
                        </p>

                      </div>
                    )}

                  </label>

                </div>

              </div>
            </div>


            {/* DETAILS */}
            <div className="p-7 md:p-9">

              <p className="text-[10px] font-bold tracking-[0.18em] text-blue-600 uppercase">
                03 / Details
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                Tell us about the book.
              </h2>

              <div className="mt-8 space-y-5">

                <Field
                  label="Book name"
                  value={name}
                  onChange={setName}
                  placeholder="e.g. Clean Code"
                />

                <div>

                  <label className="mb-2 block text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                    Description
                  </label>

                  <textarea
                    required
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a short description..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>


                <div className="grid gap-5 sm:grid-cols-2">

                  <Field
                    label="Price"
                    type="number"
                    value={price}
                    onChange={setPrice}
                    placeholder="₹ Price"
                  />

                  <Field
                    label="City"
                    value={city}
                    onChange={setCity}
                    placeholder="Your city"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                    Condition
                  </label>

                  <select
                    required
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="">Select condition</option>
                    <option>Like New</option>
                    <option>Good</option>
                    <option>Fair</option>
                  </select>

                </div>


                {/* EXCHANGE */}
                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/50">

                  <input
                    type="checkbox"
                    checked={exchange}
                    onChange={() => setExchange(!exchange)}
                    className="h-5 w-5 accent-blue-600"
                  />

                  <div>

                    <p className="text-sm font-semibold">
                      Available for exchange
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Let other readers know you're open to swapping.
                    </p>

                  </div>

                </label>


                <button
                  type="submit"
                  className="group w-full rounded-xl bg-[#071a2d] py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  Post book
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>

            </div>

          </form>

        </div>

      </section>


      <Footer />

    </main>
  );
}


function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
        {label}
      </label>

      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
      />

    </div>
  );
}