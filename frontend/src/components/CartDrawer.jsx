import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();
    const [isClosing, setIsClosing] = useState(false);

    // Free shipping threshold
    const FREE_SHIPPING_THRESHOLD = 500;
    const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
    const progressPercent = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);

    // Close with animation delay
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    if (!isOpen && !isClosing) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                onClick={handleClose}
            />

            {/* Drawer Panel */}
            <div
                className={`relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ${isClosing ? 'translate-x-full' : 'translate-x-0'}`}
            >
                {/* Header */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white z-10">
                    <h2 className="text-xl font-serif font-bold text-primary-dark">Shopping Cart ({cart.length})</h2>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">

                    {/* Free Shipping Progress */}
                    <div className="p-5 bg-surface/50 border-b border-gray-100">
                        {remainingForFreeShipping > 0 ? (
                            <p className="text-sm text-text-muted mb-2">
                                Add <span className="font-bold text-primary">₹{remainingForFreeShipping.toFixed(0)}</span> more to get <span className="font-bold text-accent">FREE SHIPPING</span>
                            </p>
                        ) : (
                            <p className="text-sm font-bold text-primary mb-2">🎉 You've unlocked FREE SHIPPING!</p>
                        )}
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>

                    {/* Cart Items */}
                    <div className="p-5 space-y-6">
                        {cart.length === 0 ? (
                            <div className="text-center py-10">
                                <span className="text-4xl mb-4 block opacity-50">🛒</span>
                                <p className="text-text-muted">Your cart is empty.</p>
                                <button
                                    onClick={handleClose}
                                    className="mt-4 text-primary font-medium hover:underline"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    {/* Thumbnail */}
                                    <div className="w-20 h-20 rounded-lg bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-primary-dark truncate pr-2">{item.title}</h3>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-xs text-text-muted mb-2">{item.category} • {item.unit}</p>

                                        <div className="flex items-center justify-between mt-2">
                                            {/* Qty */}
                                            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 text-primary-dark font-bold text-sm"
                                                >
                                                    -
                                                </button>
                                                <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 text-primary-dark font-bold text-sm"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <span className="font-bold text-primary-dark">
                                                ₹{(parseFloat(String(item.price).replace(/[^0-9.]/g, '')) * item.quantity).toFixed(0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* You May Also Like (Mock) */}
                    <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                        <h4 className="font-serif font-bold text-primary-dark mb-4 text-sm uppercase tracking-wide">You May Also Like</h4>
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {/* Recommendation 1 */}
                            <div className="min-w-[140px] bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                <div className="h-24 bg-gray-100 rounded-lg mb-2 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=300&auto=format&fit=crop" alt="Honey" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="font-bold text-sm truncate text-primary-dark">Organic Honey</h5>
                                <p className="text-xs text-text-muted mb-2">₹350</p>
                                <button className="w-full py-1.5 text-xs bg-white border border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors">
                                    Add
                                </button>
                            </div>
                            {/* Recommendation 2 */}
                            <div className="min-w-[140px] bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                <div className="h-24 bg-gray-100 rounded-lg mb-2 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=300&auto=format&fit=crop" alt="Ghee" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="font-bold text-sm truncate text-primary-dark">Pure Ghee</h5>
                                <p className="text-xs text-text-muted mb-2">₹650</p>
                                <button className="w-full py-1.5 text-xs bg-white border border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-5 border-t border-gray-100 bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-text-muted">Subtotal</span>
                            <span className="text-2xl font-serif font-bold text-primary-dark">₹{cartTotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-center text-text-muted mb-4">Shipping, taxes, and discounts calculated at checkout.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                to="/cart"
                                onClick={handleClose}
                                className="py-3 px-4 rounded-full border border-gray-200 text-center font-semibold text-primary-dark hover:border-primary hover:text-primary transition-colors"
                            >
                                View Cart
                            </Link>
                            <button
                                onClick={() => {
                                    handleClose();
                                    navigate('/checkout');
                                }}
                                className="py-3 px-4 rounded-full bg-primary text-white font-bold text-center hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
