"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import hook to get current path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to check if link is active
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Solution', href: '/solution' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socials = [
    { href: '#', icon: <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.5.5C10.45.5,9.5,3.09,9.5,5.27v2.19H6.77v4h2.73V22h5V11.5h3.43l.53-4Z" /> },
    { href: '#', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
    { href: '#', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
  ];

  return (
    <header className="w-full fixed top-0 z-50 font-sans">

      {/* Top Bar */}
      <div className={`hidden sm:block bg-slate-900 text-slate-400 text-[11.5px] transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'
        }`}>
        <div className="max-w-7xl mx-auto px-6 h-9 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href="tel:+8618230571661" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-pointer">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              + 86 18230571661
            </a>
             <a href="tel:+917022429001" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-pointer">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 7022429001
            </a>
            <div className="w-px h-4 bg-slate-700" />
            <a href="mailto:sales@goodpowercn.com" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-pointer">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sales@goodpowercn.com
            </a>
            <div className="hidden md:block w-px h-4 bg-slate-700" />
            <a href="mailto: srtronioxindia@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-pointer">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              srtronioxindia@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="text-slate-500 hover:text-yellow-400 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white border-b border-slate-100 transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''
        }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <Image
                src="/logo.png"
                alt="GoodPower logo"
                width={70}
                height={70}
                className="rounded-lg transition-colors group-hover:opacity-90"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-[13.5px] font-medium rounded-md transition-all relative
                      ${active ? 'text-yellow-600 bg-yellow-50' : 'text-slate-500 hover:text-yellow-600 hover:bg-yellow-50'}
                    `}
                  >
                    {link.name}
                    {/* Active Bar Indicator */}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-yellow-500 rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2.5">

              <Link href="/contact" className="px-4 py-2 bg-amber-400 hover:bg-yellow-500 text-slate-900 font-semibold text-sm rounded-lg transition-colors">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 text-slate-500 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-all active:scale-95"
              aria-label="Toggle menu"
            >
              {isMenuOpen
                ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all active:scale-95
                        ${active ? 'text-yellow-700 bg-yellow-50 border-l-4 border-yellow-500' : 'text-slate-600 hover:text-yellow-600 hover:bg-yellow-50'}
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                <a 
                  href="tel:+8618230571661" 
                  className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-amber-500 hover:bg-yellow-50 rounded-lg transition-colors text-sm active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+86 18230571661</span>
                </a>
                
                <a 
                  href="mailto:sales@goodpowercn.com" 
                  className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-amber-500 hover:bg-yellow-50 rounded-lg transition-colors text-sm active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>sales@goodpowercn.com</span>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <Link 
                  href="/contact" 
                  className="block w-full text-center px-4 py-3 bg-amber-400 hover:bg-yellow-500 text-slate-900 font-semibold text-sm rounded-lg transition-colors active:scale-95 active:bg-yellow-600" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;