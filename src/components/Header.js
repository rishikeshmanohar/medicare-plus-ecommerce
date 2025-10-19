// components/Header.js
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, cartCount, setShowCart, showCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="text-4xl">⚕️</div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">MediCare Plus</h1>
              <p className="text-xs text-gray-600">Your Health, Our Priority</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
            <button onClick={() => setCurrentPage('products')} className="text-gray-700 hover:text-blue-600 transition">Products</button>
            <button onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
            <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-blue-600 transition">
              <User className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setShowCart(!showCart)}
              className="relative text-gray-700 hover:text-blue-600 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">Home</button>
            <button onClick={() => { setCurrentPage('products'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">Products</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">About</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">Contact</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;