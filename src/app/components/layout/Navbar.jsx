"use client";
import React, { useState } from "react";
import { ShoppingBag, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/pay-as-you-go"
              className="text-gray-600 hover:text-blue-600"
            >
              Pay as you go
            </a>
            <a
              href="/pay-monthly"
              className="text-gray-600 hover:text-blue-600"
            >
              Pay monthly
            </a>
            <a href="/help" className="text-gray-600 hover:text-blue-600">
              Help
            </a>
          </div>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Quick top up
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">EN</span>
              <img
                src="/api/placeholder/24/24"
                alt="UK flag"
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/pay-as-you-go"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Pay as you go
            </a>
            <a
              href="/pay-monthly"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Pay monthly
            </a>
            <a
              href="/help"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Help
            </a>
            <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
              Quick top up
            </button>
            <div className="px-3 py-2 flex items-center space-x-2">
              <span className="text-gray-600">EN</span>
              <img
                src="/api/placeholder/24/24"
                alt="UK flag"
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
