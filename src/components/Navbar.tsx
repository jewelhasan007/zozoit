import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    subMenu: [
      { name: 'Website Design', path: '/services/web-development' },
      { name: 'Landing Page Design', path: '/services/landing-page' },
      { name: 'E-commerce Solutions', path: '/services/ecommerce' },
      { name: 'Logo Design', path: '/services/logo-design' },
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
      { name: 'SEO & Marketing', path: '/services/seo-marketing' },
      { name: 'Branding', path: '/services/branding' },
      { name: 'Mobile Apps', path: '/services/mobile-apps' },
      { name: 'Amazon FBA', path: '/services/amazon-fba-consultation' },
    ],
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-[#455F6C]'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            ZOZOIT
          </span>
        </Link>
  {/* 🔥 Vertical Marquee */}
<div className="hidden md:flex w-[500px] h-10 items-center overflow-hidden text-sm text-brand-primary font-medium">
  <div className="marquee-vertical">
    <div className="marquee-content">
      <span>Web Development</span>
      <span>Landing Page Design</span>
      <span>Digital Marketing</span>
      <span>UI/UX Design</span>
      <span>Branding & Identity</span>
      <span>Mobile App Development</span>

      {/* duplicate for smooth loop */}
      <span>Web Development</span>
      <span>Landing Page Design</span>
      <span>Digital Marketing</span>
      <span>UI/UX Design</span>
      <span>Branding & Identity</span>
      <span>Mobile App Development</span>
    </div>
  </div>

  <style>
    {`
      .marquee-vertical {
        height: 20px; /* container height = 1 item */
        overflow: hidden;
        position: relative;
      }

      .marquee-content {
        display: flex;
        flex-direction: column;
        animation: scrollUp 12s linear infinite;
      }

      .marquee-content span {
        height: 30px; /* same as container height */
        display: flex;
        align-items: center;
      }

      @keyframes scrollUp {
        0% { transform: translateY(0); }
        100% { transform: translateY(-240px); } /* 6 items * 40px */
      }
    `}
  </style>
</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <div key={link.name} className="relative group/nav">

              {link.subMenu ? (
                <div className="flex items-center gap-1 cursor-pointer">

                  <Link
                    to={link.path}
                    className={cn(
                      'text-sm font-medium transition-colors flex items-center gap-1',
                      location.pathname.startsWith(link.path)
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>

                  <ChevronDown
                    size={14}
                    className="text-white/70 group-hover/nav:rotate-180 transition-transform"
                  />

                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">

                    <div className="bg-[#2f3f4a] border border-white/10 rounded-2xl p-2 w-64 shadow-xl backdrop-blur-xl">

                      {link.subMenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-all"
                        >
                          <span className="text-sm font-medium">
                            {sub.name}
                          </span>
                        </Link>
                      ))}

                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-white text-slate-900 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#2f3f4a] border-t border-white/10 p-6 flex flex-col gap-3 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 text-lg font-medium py-3 block"
                >
                  {link.name}
                </Link>
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-4 bg-white text-slate-900 rounded-xl text-center font-bold"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;