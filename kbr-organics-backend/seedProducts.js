import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "Sona Masoori - Traditional Rice",
    description: "A lightweight, aromatic rice variety known for its soft texture and rich taste.",
    price: 149,
    category: "Rice",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    name: "Cold-Pressed Sesame Oil",
    description: "Pure cold-pressed sesame oil made using traditional wooden churners.",
    price: 299,
    category: "Oil",
    image: "https://images.unsplash.com/photo-1587731385963-4d1c1e4e6b91",
  },
  {
    name: "Organic Jaggery Powder",
    description: "Unrefined, chemical-free jaggery powder with natural sweetness.",
    price: 199,
    category: "Jaggery",
    image: "https://images.unsplash.com/photo-1601050690597-8e4949f1e7df",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Sample products added successfully!");
    process.exit();
  })
  .catch((error) => {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  });
