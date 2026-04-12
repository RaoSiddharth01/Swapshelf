import { useState } from "react";
import Footer from "../components/Footer";
import API from "../services/api"; 

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
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  
  const handleSubmit = async () => {
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
      alert("Book posted successfully!");

    } catch (err) {
      console.log(err.response?.data);
      alert("Error posting book");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-28 px-6 md:px-20">

        <h1 className="text-3xl font-bold text-blue-600 mb-8">
          Sell / Exchange Your Book
        </h1>

    
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="block mb-2 font-medium">Upload Book Image</label>

              <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" onChange={handleImage} className="hidden" id="fileUpload" />
                
                <label htmlFor="fileUpload" className="cursor-pointer">
                  {preview ? (
                    <img
                      src={preview}
                      alt="preview"
                      className="h-48 mx-auto object-cover rounded-lg"
                    />
                  ) : (
                    <p className="text-gray-500">
                      Click to upload image
                    </p>
                  )}
                </label>
              </div>
            </div>

      
            <div className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Book Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-3 rounded-lg focus:outline-blue-400"
              />

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-3 rounded-lg focus:outline-blue-400"
              />

              <input
                type="number"
                placeholder="Price (₹)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border p-3 rounded-lg focus:outline-blue-400"
              />

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border p-3 rounded-lg focus:outline-blue-400"
              />

              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="border p-3 rounded-lg focus:outline-blue-400"
              >
                <option value="">Condition</option>
                <option>Like New</option>
                <option>Good</option>
                <option>Fair</option>
              </select>

              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={exchange}
                  onChange={() => setExchange(!exchange)}
                  className="w-5 h-5"
                />
                <label>Available for Exchange</label>
              </div>

            </div>
          </div>

          <button
            onClick={handleSubmit} 
            className="mt-8 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Post Book
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}