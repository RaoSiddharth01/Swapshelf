export default function Footer() {
  return (
    <div className="bg-gray-900 text-white mt-20 px-10 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-400">SwapShelf</h1>
          <p className="text-sm mt-2 text-gray-400">
            Buy, Sell & Exchange books easily with students around you.
          </p>
        </div>

        <div className="text-sm text-gray-400">
          <p>© 2026 SwapShelf Siddharth</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
}