import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  city: String,
  condition: String,
  exchange: Boolean,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);