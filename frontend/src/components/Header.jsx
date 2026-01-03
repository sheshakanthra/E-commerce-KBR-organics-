import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl rounded-full border border-white/30 transition-all duration-300 ${isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg py-1.5 px-4 md:px-6'
            : 'bg-white/10 backdrop-blur-md shadow-sm py-2 px-4 md:px-8'
            }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button - Left */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-primary-dark p-2 hover:bg-white/50 rounded-full transition-colors order-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo - Center on Mobile, Left on Desktop */}
            <Link to="/" className="flex items-center gap-3 group order-2 md:order-1 mx-auto md:mx-0">
              <div className="relative overflow-hidden rounded-full border border-primary/20 bg-white shadow-sm p-0.5">
                <img
                  src="/images/logo.png"
                  alt="KBR Organics"
                  className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-sm md:text-lg font-bold tracking-tight leading-none transition-colors ${isScrolled ? 'text-primary-dark' : 'text-primary-dark'}`}>
                  KBR ORGANICS
                </span>
                <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-accent uppercase font-medium">Pure & Natural</span>
              </div>
            </Link>

            {/* Desktop Nav - Middle */}
            <nav className="hidden md:flex items-center gap-8 order-2">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : item === 'Products' ? '/products' : item === 'About' ? '/about' : item === 'Contact' ? '/contact' : '#'}
                  className="text-sm font-medium text-text-main hover:text-primary transition-colors relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Actions - Desktop & Mobile */}
            <div className="flex items-center gap-2 order-3">
              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-text-main hover:text-primary transition-colors hover:bg-white/50 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>

              {/* Cart Drawer Toggle */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-text-main hover:text-primary transition-colors hover:bg-white/50 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent/90 backdrop-blur-sm text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar - Expandable */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 px-6 pb-2 transition-all duration-300">
              <form onSubmit={handleSearch} className="relative mx-auto max-w-3xl">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-gray-200 bg-white/95 backdrop-blur-md px-6 py-3 pl-12 text-sm text-text-main shadow-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img src="/images/logo.png" alt="KBR" className="h-10 w-10 object-contain" />
                <span className="font-serif text-xl font-bold text-primary-dark">KBR Organics</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-text-main hover:bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 items-center flex-1 justify-center">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : item === 'Products' ? '/products' : item === 'About' ? '/about' : item === 'Contact' ? '/contact' : '#'}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif font-medium text-text-main hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
              {/* Mobile Cart Link in Menu */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="text-2xl font-serif font-medium text-text-main hover:text-primary transition-colors flex items-center gap-2"
              >
                Cart {cartCount > 0 && <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>}
              </button>
            </nav>

            <div className="text-center text-sm text-text-muted mt-auto pb-8">
              <p>Pure & Natural Organic Produce</p>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}