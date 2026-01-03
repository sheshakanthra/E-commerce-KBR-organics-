import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-full border border-white/30 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg py-1.5 px-6'
          : 'bg-white/10 backdrop-blur-md shadow-sm py-2 px-8'
          }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full border border-primary/20 bg-white shadow-sm p-0.5">
              <img
                src="/images/logo.png"
                alt="KBR Organics"
                className="h-12 w-12 object-contain rounded-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg font-bold tracking-tight leading-none transition-colors ${isScrolled ? 'text-primary-dark' : 'text-primary-dark'}`}>
                KBR ORGANICS
              </span>
              <span className="text-[9px] tracking-[0.2em] text-accent uppercase font-medium">Pure & Natural</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'About', 'Contact', 'Admin'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : item === 'Products' ? '/products' : item === 'About' ? '/about' : item === 'Contact' ? '/contact' : item === 'Admin' ? '/admin' : '#'}
                className="text-sm font-medium text-text-main hover:text-primary transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link to="/cart" className="relative p-2 text-text-main hover:text-primary transition-colors hover:bg-white/50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent/90 backdrop-blur-sm text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          <button className="md:hidden text-text-main p-2 hover:bg-white/50 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}