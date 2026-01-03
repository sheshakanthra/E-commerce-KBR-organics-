import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-surface">
                <div className="text-6xl mb-6">🛒</div>
                <h2 className="text-3xl font-serif font-bold text-primary-dark mb-4">Your Cart is Empty</h2>
                <p className="text-text-muted mb-8">Looks like you haven't added any fresh produce yet.</p>
                <Link to="/products" className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-surface min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold text-primary-dark mb-8 text-center">Your Shopping Cart</h1>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 md:p-8">
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                    {/* Image */}
                                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-lg font-bold text-primary-dark">{item.title}</h3>
                                        <p className="text-sm text-text-muted">{item.category}</p>
                                        <p className="text-primary font-medium mt-1">₹{item.price} / {item.unit}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3 bg-surface rounded-full px-3 py-1">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-primary-dark transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold text-primary-dark w-6 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-primary-dark transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Total & Remove */}
                                    <div className="text-right min-w-[100px] flex flex-col items-center md:items-end gap-2">
                                        <span className="text-lg font-bold text-primary-dark">
                                            ₹{(parseFloat(String(item.price).replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}
                                        </span>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 text-sm hover:text-red-700 underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer / Total */}
                    <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <button
                                onClick={clearCart}
                                className="text-text-muted hover:text-red-500 transition-colors text-sm font-medium"
                            >
                                Clear Cart
                            </button>

                            <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                                <div className="flex items-center justify-between w-full md:w-auto gap-12">
                                    <span className="text-lg text-text-muted">Subtotal</span>
                                    <span className="text-3xl font-serif font-bold text-primary-dark">₹{cartTotal.toFixed(2)}</span>
                                </div>
                                <p className="text-sm text-text-muted">Shipping & taxes calculated at checkout</p>
                                <button
                                    className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                                    onClick={() => navigate('/checkout')}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
