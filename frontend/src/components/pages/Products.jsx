import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard'

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(r => {
                setProducts(r.data)
                setLoading(false)
            })
            .catch(e => {
                console.error(e)
                setLoading(false)
            })
    }, [])

    // Group products by category
    const categories = [...new Set(products.map(p => p.category))]

    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Collection</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mt-3 mb-6">All Products</h1>
                    <p className="text-text-muted text-lg">
                        Explore our wide range of organic products, fresh from the farm.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-20">Loading...</div>
                ) : (
                    <div className="space-y-16">
                        {categories.map(category => {
                            const categoryProducts = products.filter(p => p.category === category)
                            return (
                                <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                                    <h2 className="text-3xl font-serif font-bold text-primary-dark mb-8 border-b border-gray-200 pb-4">
                                        {category}
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {categoryProducts.map(p => <ProductCard key={p.id} p={p} />)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
