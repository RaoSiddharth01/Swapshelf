import Book from "../models/Book.js";
import cloudinary from "../config/cloudinary.js";

export const addBook = async (req, res) => {
  try {
    const { name, description, price, city, condition, exchange } = req.body;

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        { folder: "bookswap" },
        async (error, result) => {
          if (error) throw error;

          imageUrl = result.secure_url;

          const book = await Book.create({
            name,
            description,
            price,
            city,
            condition,
            exchange,
            image: imageUrl,
            user: req.user,
          });

          res.json(book);
        }
      );

      result.end(req.file.buffer);
    } else {
      const book = await Book.create({
        name,
        description,
        price,
        city,
        condition,
        exchange,
        image: "",
        user: req.user,
      });

      res.json(book);
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getBooks = async (req, res) => {
  try {
    const { search = "", city = "" } = req.query;

    const books = await Book.find({
      name: { $regex: search, $options: "i" },
      city: { $regex: city, $options: "i" },
    }).populate("user", "name email");

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user })
  .populate("user", "name email");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.user.toString() !== req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await book.deleteOne();

    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    
    if (book.user.toString() !== req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};