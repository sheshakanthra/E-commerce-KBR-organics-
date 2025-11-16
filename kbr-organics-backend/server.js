import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./backend_routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

// Basic health endpoint for quick checks
app.get("/api/health", (req, res) => {
	const mongoState = mongoose.connection && mongoose.connection.readyState;
	res.json({ status: "ok", mongoState });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
