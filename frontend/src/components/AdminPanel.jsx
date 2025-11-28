import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AdminPanel() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    title: '',
    category: '',
    price: '',
    unit: '',
    image: ''
  })

  useEffect(() => { fetchProducts() }, [])

  function fetchProducts() {
    setLoading(true)
    axios.get('http://localhost:5000/api/products')
      .then(r => {
        setProducts(r.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  function save(e) {
    e.preventDefault()
    if (!form.title || !form.price) return alert('Please fill in required fields')

    axios.post('http://localhost:5000/api/admin/product', form)
      .then(() => {
        fetchProducts()
        setForm({ title: '', category: '', price: '', unit: '', image: '' })
        alert('Product added successfully!')
      })
      .catch(err => alert('Failed to save product'))
  }

  function remove(id) {
    if (!window.confirm('Are you sure you want to delete this product?')) return
    axios.delete('http://localhost:5000/api/admin/product/' + id)
      .then(() => fetchProducts())
      .catch(err => alert('Failed to delete product'))
  }

  const categories = ["Organic", "White Rice", "Brown Rice", "Oil Items", "Pickles / Thokku", "Pulses", "Millets", "Spices"]

  return (
    <div className="bg-surface min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary-dark">Admin Dashboard</h1>
            <p className="text-text-muted">Manage your inventory and products</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
            <span className="text-sm text-text-muted">Total Products: </span>
            <span className="font-bold text-primary text-lg">{products.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Product Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-serif font-bold text-primary-dark mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add New Product
              </h2>

              <form onSubmit={save} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Product Title</label>
                  <input
                    placeholder="e.g. Organic Turmeric"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="">Select Category</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Price (₹)</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={form.price}
                      onChange={e => setForm({ ...form, price: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Unit</label>
                    <input
                      placeholder="kg, 100g, L"
                      value={form.unit}
                      onChange={e => setForm({ ...form, unit: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Image URL</label>
                  <input
                    placeholder="https://..."
                    value={form.image}
                    onChange={e => setForm({ ...form, image: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>

          {/* Product List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-serif font-bold text-primary-dark">Inventory</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface text-text-muted text-sm uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-medium">Product</th>
                      <th className="px-6 py-4 font-medium">Category</th>
                      <th className="px-6 py-4 font-medium">Price</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {loading ? (
                      <tr><td colSpan="4" className="px-6 py-8 text-center text-text-muted">Loading inventory...</td></tr>
                    ) : products.length === 0 ? (
                      <tr><td colSpan="4" className="px-6 py-8 text-center text-text-muted">No products found.</td></tr>
                    ) : (
                      products.map(p => (
                        <tr key={p.id} className="hover:bg-surface/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                              </div>
                              <span className="font-medium text-text-main">{p.title}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block px-2 py-1 rounded-full bg-surface text-xs font-medium text-text-muted border border-gray-200">
                              {p.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-text-main font-medium">
                            {p.price} <span className="text-text-muted text-sm font-normal">/ {p.unit}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => remove(p.id)}
                              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                              title="Delete Product"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
