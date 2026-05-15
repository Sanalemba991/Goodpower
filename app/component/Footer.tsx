"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Consistent with Navbar
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socials = [
    { name: 'Facebook', href: '#', icon: <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.5.5C10.45.5,9.5,3.09,9.5,5.27v2.19H6.77v4h2.73V22h5V11.5h3.43l.53-4Z"/> },
    { name: 'LinkedIn', href: '#', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
    { name: 'X', href: '#', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-500 group-hover:scale-105 shadow-lg shadow-amber-500/10">
                <span className="text-white font-bold text-base">G</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Good<span className="text-amber-500">Power</span>
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Leading provider of innovative packaging solutions. We deliver quality, reliability, and excellence globally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <a 
                  key={i} 
                  href={s.href} 
                  aria-label={s.name}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1">›</span> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1">›</span> 
                    {link.name}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>

          {/* Column 4: Contact & CTA */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            
            <div className="space-y-4 text-sm mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400">Room 303, Building 2, Chuangye 1st Street, Dongguan, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+ 86 18230571661" className="hover:text-white transition-colors">+ 86 18230571661</a>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:sales@goodpowercn.com" className="hover:text-white transition-colors break-all">sales@goodpowercn.com</a>
                </div>
               
              </div>
            </div>

           
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11.5px]">
          <p className="text-slate-500">
            © {currentYear} GoodPower. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;