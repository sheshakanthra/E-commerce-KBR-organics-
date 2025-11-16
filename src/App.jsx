import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // use relative path; Vite dev proxy will forward to backend
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-green-700">🌾 KBR Organics</h1>
          <nav className="text-sm text-gray-600">Fresh • Organic • Local</nav>
        </header>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Live Products</h2>

          {products === null ? (
            <div className="text-center text-gray-500">Loading products…</div>
          ) : products.length === 0 ? (
            <div className="text-center text-gray-500">No products found 😅</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p._id || p.name} product={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
