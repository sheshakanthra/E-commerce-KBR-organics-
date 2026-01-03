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
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 opacity-90">
                            Rooted in tradition, KBR Organics delivers the purest farm-fresh produce directly to your home. We are dedicated to sustainable farming, ensuring every harvest is natural, chemical-free, and full of wholesome goodness for your family.
                        </p>

                    </div>

                    {/* Quick Links */}


                    {/* Contact Us (Replacting Quick Links) */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-white">Address</p>
                                    <p>KBR Organics,</p>
                                    <p>Tamil Nadu, India</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-white">Email</p>
                                    <a href="mailto:care@kbrorganics.com" className="hover:text-accent transition-colors">care@kbrorganics.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-white">Phone</p>
                                    <a href="tel:+91123456789" className="hover:text-accent transition-colors">+91 123456789</a>
                                </div>
                            </li>
                            <li className="pt-2 flex gap-3">
                                {/* Social Icons Reuse - Mini Version */}

                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="text-center">
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Categories</h4>
                        <ul className="inline-grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-300 text-left mx-auto">
                            {['Brown Rice', 'Millets', 'Oil Items', 'Organic', 'Pickles / Thokku', 'Pulses', 'Spices', 'White Rice'].map((cat) => (
                                <li key={cat}>
                                    <Link
                                        to={`/products#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="hover:text-accent transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
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
