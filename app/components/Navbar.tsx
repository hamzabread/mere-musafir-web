"use client";
import React, { useState, useEffect } from 'react';
import { LogOut, LogIn, Compass } from 'lucide-react';
import Link from 'next/link'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Logo/Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-2 rounded-lg">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Mera Musafir
            </h1>
          </div>

          {/* Right side - Auth Button */}
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 border border-white/30 backdrop-blur-sm"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 border border-white/30 backdrop-blur-sm"
              >
                <LogIn className="w-5 h-5" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;