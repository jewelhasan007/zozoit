import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, ChevronDown, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Why ZOZOIT', path: '/why' },
  {
    name: 'Services',
    path: '/services',
    megaMenu: true,
    groups: [
      {
        title: 'Strategy & Growth',
        items: [
          { name: 'Digital Marketing', path: '/services/seo-marketing' },
          { name: 'Brand Strategy', path: '/services/branding' },
        ],
      },
      {
        title: 'Web & Design',
        items: [
          { name: 'Website Design', path: '/services/web-development' },
          { name: 'Landing Page Design', path: '/services/landing-page' },
          { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        ],
      },
      {
        title: 'Support & Scaling',
        items: [
          { name: 'Mobile Apps', path: '/services/mobile-apps' },
          { name: 'E-commerce', path: '/services/ecommerce' },
        ],
      },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 whitespace-nowrap">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            ZOZOIT
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          {navLinks.map((link) => (
            <div key={link.name} className="relative group">

              {/* MEGA MENU */}
              {link.megaMenu ? (
                <>
                  {/* Trigger */}
                  <div
                    className={cn(
                      "flex items-center gap-1 cursor-pointer whitespace-nowrap transition-colors",
                      location.pathname.startsWith('/services')
                        ? "text-brand-primary font-semibold"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.name}
                    <ChevronDown size={14} />
                  </div>

                  {/* DROPDOWN */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                    <div className="bg-[#2f3f4a] p-6 rounded-2xl shadow-xl border border-white/10 w-[750px] grid grid-cols-3 gap-6">

                      {link.groups.map((group, i) => (
                        <div key={i}>
                          <h4 className="text-white font-semibold mb-3 text-sm uppercase">
                            {group.title}
                          </h4>

                          {group.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={cn(
                                "block text-sm py-1 whitespace-nowrap transition-colors",
                                location.pathname === item.path
                                  ? "text-brand-primary font-semibold"
                                  : "text-white/70 hover:text-white"
                              )}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}

                      {/* CALL BUTTON INSIDE MEGA MENU */}
                      <div className="col-span-3 mt-4 border-t border-white/10 pt-4 flex items-center justify-between">

                        <div>
                          <p className="text-white font-semibold text-sm">
                            Need help choosing a service?
                          </p>
                          <p className="text-white/60 text-xs">
                            Talk to our expert team instantly
                          </p>
                        </div>

                        <a
                          href="tel:+8801XXXXXXXXX"
                          className="flex items-center gap-2 px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all"
                        >
                          <Phone size={16} />
                          Call Now
                        </a>

                      </div>

                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors whitespace-nowrap",
                    location.pathname === link.path
                      ? "text-brand-primary font-semibold"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="px-5 py-2 bg-white text-slate-900 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#2f3f4a] p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-white py-2 whitespace-nowrap",
                  location.pathname === link.path
                    ? "text-brand-primary font-semibold"
                    : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CALL BUTTON */}
            <a
              href="tel:+8801XXXXXXXXX"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-bold"
            >
              <Phone size={16} />
              Call Now
            </a>

            <Link
              to="/contact"
              className="bg-white text-slate-900 py-3 rounded-xl text-center font-bold"
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