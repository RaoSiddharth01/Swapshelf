export default function About() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('/Aboutpic.jpg')" }}
    >

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-600">SwapShelf</span>
        </h1>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          SwapShelf is a smart platform designed for students to{" "}
          <span className="text-blue-600 font-semibold">buy, sell, and exchange books</span>{" "}
          effortlessly. Whether you're looking for affordable textbooks or want to
          pass on books you no longer need, SwapShelf connects you with students
          around you.
        </p>

        <p className="text-md md:text-lg mb-8 text-gray-200">
          Our mission is simple —{" "}
          <span className="text-blue-600">save money</span>,{" "}
          <span className="text-blue-600">reduce waste</span>, and build a{" "}
          <span className="text-blue-600">student-driven community</span>.
          Instead of letting books collect dust, give them a second life while
          helping someone else learn and grow.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold mt-2">Easy Listings</h3>
            <p className="text-gray-300">Post books in seconds with images and details.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold mt-2">Book Exchange</h3>
            <p className="text-gray-300">Swap books with other students nearby.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg hover:scale-105 transition">
             <h3 className="font-semibold mt-2">Affordable Learning</h3>
            <p className="text-gray-300">Get books at lower prices than market.</p>
          </div>
        </div>

        <div className="mt-10">
          <button className="bg-blue-600 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition">
            Start Swapping 
          </button>
        </div>
      </div>
    </div>
  );
}