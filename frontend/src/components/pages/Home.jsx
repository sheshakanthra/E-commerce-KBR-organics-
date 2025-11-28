import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Hero from '../Hero'
import ProductCard from '../ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Mock data if API fails or for preview
    const mockProducts = [
      { id: 1, title: 'Organic Tomatoes', category: 'Vegetables', price: '₹40', unit: 'kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=2000&auto=format&fit=crop' },
      { id: 2, title: 'Fresh Carrots', category: 'Vegetables', price: '₹60', unit: 'kg', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=2000&auto=format&fit=crop' },
      { id: 3, title: 'Green Spinach', category: 'Leafy Greens', price: '₹30', unit: 'bunch', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2000&auto=format&fit=crop' },
      { id: 4, title: 'Red Onions', category: 'Vegetables', price: '₹50', unit: 'kg', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=2000&auto=format&fit=crop' },
    ]

    axios.get('http://localhost:5000/api/products')
      .then(r => {
        if (r.data && r.data.length > 0) {
          // Filter for specific best sellers
          const bestSellerIds = ['br-2', 'oil-7', 'wr-1', 'oil-6'];
          const bestSellers = r.data.filter(p => bestSellerIds.includes(p.id));
          // If we don't find the specific ones (e.g. data changed), just take the first 4
          setProducts(bestSellers.length > 0 ? bestSellers : r.data.slice(0, 4));
        } else {
          setProducts(mockProducts)
        }
      })
      .catch(e => {
        console.error(e)
        setProducts(mockProducts)
      })
  }, [])

  return (
    <div className="bg-surface min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: '100% Organic', desc: 'Certified organic produce from trusted local farmers.', icon: '🌿' },
              { title: 'Farm to Table', desc: 'Harvested in the morning, delivered to your kitchen by evening.', icon: '🚜' },
              { title: 'Eco-Friendly', desc: 'Sustainable farming practices that protect our soil and water.', icon: '🌍' },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-surface-secondary/50 hover:bg-surface-secondary transition-colors duration-300 group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-primary-dark mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Fresh Harvest</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mt-3 mb-6">Our Best Sellers</h2>
            <p className="text-text-muted text-lg">
              Hand-picked seasonal favorites, grown without synthetic pesticides or fertilizers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(p => <ProductCard key={p.id} p={p} />)}
          </div>

          <div className="mt-16 text-center">
            <Link to="/products" className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join the Organic Movement</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Subscribe to our weekly basket service and get fresh seasonal vegetables delivered to your doorstep every week.
          </p>
          <button className="px-10 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-accent-hover hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Start Your Subscription
          </button>
        </div>
      </section>
    </div>
  )
}