import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
    });
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically integrate with a payment gateway or backend
        // For now, we'll simulate a successful order
        setIsOrderPlaced(true);
        setTimeout(() => {
            clearCart();
            navigate('/');
        }, 6000);
    }

    if (cart.length === 0 && !isOrderPlaced) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-surface">
                <div className="text-6xl mb-6">🛒</div>
                <h2 className="text-3xl font-serif font-bold text-primary-dark mb-4">Cart is Empty</h2>
                <button
                    onClick={() => navigate('/products')}
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
                >
                    Return to Shop
                </button>
            </div>
        );
    }

    if (isOrderPlaced) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface px-4">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center max-w-lg w-full">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary-dark mb-4">Order Placed!</h2>
                    <p className="text-text-muted mb-8">
                        Thank you for your order, {formData.firstName}. We have sent a confirmation email to {formData.email}.
                    </p>
                    <p className="text-sm text-gray-400">Redirecting to home...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-8 text-center">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    {/* Form Section */}
                    <div>
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                                Shipping Details
                            </h2>
                            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main">Address</label>
                                    <textarea
                                        name="address"
                                        required
                                        rows="3"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main">Pincode</label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            required
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                                Payment Method
                            </h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 p-4 border border-primary/20 bg-primary/5 rounded-xl cursor-pointer">
                                    <input type="radio" name="payment" checked readOnly className="text-primary focus:ring-primary" />
                                    <span className="font-medium text-primary-dark">Cash on Delivery</span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl opacity-50 cursor-not-allowed">
                                    <input type="radio" name="payment" disabled className="text-primary focus:ring-primary" />
                                    <span className="font-medium text-gray-400">Online Payment (Coming Soon)</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold text-primary-dark mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 rounded-lg bg-gray-50 overflow-hidden shrink-0">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-primary-dark line-clamp-1">{item.title}</h4>
                                            <p className="text-sm text-text-muted">{item.quantity} x ₹{item.price}</p>
                                        </div>
                                        <div className="font-semibold text-primary-dark">
                                            ₹{(parseFloat(String(item.price).replace(/[^0-9.]/g, '')) * item.quantity).toFixed(0)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
                                <div className="flex justify-between text-text-muted">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-text-muted">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-primary-dark pt-2 border-t border-gray-100 mt-2">
                                    <span>Total</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-dark hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                            >
                                Place Order
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                            <p className="text-xs text-center text-text-muted mt-4">
                                By placing this order, you agree to our Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
