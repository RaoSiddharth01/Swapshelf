import express from "express";
import { addBook, getBooks } from "../controllers/bookController.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
import { getMyBooks } from "../controllers/bookController.js";
import { deleteBook, updateBook } from "../controllers/bookController.js";

const router = express.Router();

router.delete("/:id", protect, deleteBook);
router.put("/:id", protect, updateBook);
router.post("/", protect, upload.single("image"), addBook);
router.get("/", getBooks);
router.get("/my", protect, getMyBooks);
export default router;