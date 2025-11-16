import express from "express";
import fs from "fs";
import path from "path";
import Product from "../models/Product.js";

const router = express.Router();

// helper: load sample products from JSON file
function loadSampleProducts() {
  try {
    // sample file located alongside the backend root; resolve from current working dir
    const file = path.join(process.cwd(), "sampleProducts.json");
    const raw = fs.readFileSync(file, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

// GET all products
router.get("/", async (req, res) => {
  // If mongoose isn't connected, return sample products so the frontend still shows data.
  try {
    const mongoose = (await import("mongoose")).default;
    if (!mongoose.connection || mongoose.connection.readyState !== 1) {
      console.log("[products] mongoose not connected — returning sampleProducts.json");
      const sample = loadSampleProducts();
      return res.json(sample);
    }

    const products = await Product.find();
    // if DB returns an empty array, fall back to sample data so the preview looks populated
    if (!products || products.length === 0) {
      console.log("[products] DB returned empty — falling back to sampleProducts.json");
      const sample = loadSampleProducts();
      return res.json(sample);
    }

    res.json(products);
  } catch (error) {
    console.error("[products] error while fetching products:", error?.message || error);
    const sample = loadSampleProducts();
    return res.json(sample);
  }
});

export default router;
