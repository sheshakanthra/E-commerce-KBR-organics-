import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-serif font-bold text-xl">
                                K
                            </div>
                            <span className="text-2xl font-serif font-bold">KBR Organics</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Mannin Suvai, Manadhin Nambikkai. We are dedicated to bringing you the freshest, most wholesome organic produce directly from our local farmers.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 bg-current rounded-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                                <Link to="/" className="hover:text-accent transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-accent rounded-full" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-accent rounded-full" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-accent transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-accent rounded-full" />
                                    Shop Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-accent transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-accent rounded-full" />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Categories</h4>
                        <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                            {['Organic', 'White Rice', 'Brown Rice', 'Oil Items', 'Pickles / Thokku', 'Pulses', 'Millets', 'Spices'].map((cat) => (
                                <li key={cat}>
                                    <Link
                                        to={`/products#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="hover:text-accent transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-accent rounded-full" />
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Stay Updated</h4>
                        <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for fresh updates and offers.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="bg-accent text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} KBR Organics. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
