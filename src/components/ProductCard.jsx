import React from "react";

function formatPrice(p) {
  if (typeof p !== "number") return p;
  return p.toLocaleString("en-IN");
}

export default function ProductCard({ product }) {
  const { name, category, price, image, description } = product;

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.01] transition-transform duration-150">
      <div className="h-48 w-full bg-gray-100">
        <img
          src={image || "/placeholder.jpg"}
          alt={name}
          className="h-48 w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.jpg";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-700 font-bold">₹{formatPrice(price)}</span>
          <button className="text-sm bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
