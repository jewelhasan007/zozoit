import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, ChevronDown, Monitor, Layout, PenTool, BarChart, PackageSearch } from 'lucide-react';
import { cn } from '../lib/utils';
import Marquee from "react-fast-marquee";

export const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      subMenu: [
        { name: 'Website Design', path: '/services/web-development', icon: Monitor }, //id:1
        { name: 'Landing Page Design', path: '/services/landing-page', icon: Layout }, //id:9
        { name: 'E-commerce Solutions', path: '/services/ecommerce', icon: Layout }, //id:2
        { name: 'Logo Design', path: '/services/logo-design', icon: PenTool }, // id:7
        { name: 'UI/UX Design', path: '/services/ui-ux-design', icon: PenTool }, //id:4
        { name: 'Digital Marketing & SEO', path: '/services/seo-marketing', icon: BarChart }, //id:3
        { name: 'Branding & Identity', path: '/services/branding', icon: BarChart }, //id:5
        { name: 'Mobile App Development', path: '/services/mobile-apps', icon: BarChart }, //id:6
        { name: 'Amazon FBA Consultant', path: '/services/amazon-fba-consultation', icon: PackageSearch }, //id:8
      ]
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
  const words = ["Build", "Design", "Grow", "Transform", "Launch"];
  const [index, setIndex] = useState(0);

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
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-bottom border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
         {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-white">ZOZOIT</span>
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
                      'text-sm font-medium transition-colors hover:text-brand-primary flex items-center gap-1',
                      location.pathname.startsWith(link.path) ? 'text-brand-primary' : 'text-slate-300'
                    )}
                  >
                    {link.name}
                  </Link>
                  <ChevronDown size={14} className="text-slate-400 group-hover/nav:rotate-180 transition-transform" />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                    <div className="bg-slate-900 border border-white/10 rounded-2xl p-2 w-64 shadow-2xl backdrop-blur-xl">
                      {link.subMenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all group/sub"
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover/sub:bg-brand-primary group-hover/sub:text-white transition-colors">
                            <sub.icon size={16} />
                          </div>
                          <span className="text-sm font-medium">{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-brand-primary',
                    location.pathname === link.path ? 'text-brand-primary' : 'text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-white text-slate-950 rounded-full text-sm font-semibold hover:bg-brand-primary hover:text-white transition-all"
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
            className="absolute top-full left-0 right-0 bg-slate-950 border-t border-white/5 p-6 flex flex-col gap-2 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.subMenu ? (
                  <>
                    <div 
                      className="flex items-center justify-between py-3 cursor-pointer"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <span className={cn(
                        'text-lg font-medium',
                        location.pathname.startsWith(link.path) ? 'text-brand-primary' : 'text-slate-300'
                      )}>
                        {link.name}
                      </span>
                      <ChevronDown size={20} className={cn('text-slate-400 transition-transform', servicesOpen && 'rotate-180')} />
                    </div>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden flex flex-col gap-1 pl-4 border-l border-white/10 ml-2"
                        >
                          {link.subMenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-3 text-slate-400 hover:text-white transition-colors"
                            >
                              <sub.icon size={18} className="text-brand-primary" />
                              <span className="text-base">{sub.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium py-3',
                      location.pathname === link.path ? 'text-brand-primary' : 'text-slate-300'
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-4 bg-brand-primary text-white rounded-xl text-center font-bold"
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
