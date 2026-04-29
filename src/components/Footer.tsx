import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Github, Linkedin, Mail, Phone, MapPin, Loader2, Facebook, Instagram, Youtube } from 'lucide-react';
import { cn } from '../lib/utils';
import { navLinks } from './Navbar';

const Footer = ({ onNewSubscriber }: { onNewSubscriber?: () => void }) => {
  const services = navLinks.find(link => link.name === 'Services')?.subMenu || [];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    console.log("Subscribe HIT")
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Subscribed successfully!');
        setEmail('');
        // ✅ Refresh subscriber list
        if (onNewSubscriber) onNewSubscriber();
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to server');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold text-white">ZOZOIT</span>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Empowering brands through innovative digital solutions. We build high-performance products that drive growth and engagement.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Facebook, Instagram, Youtube ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {[Github ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            {['Web Development', 'Landing Page Design','E-commerce', 'SEO & Digital Marketing', 'UI/UX Design', 'Branding'].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-slate-400 hover:text-brand-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
<div>
  <h4 className="text-white font-bold mb-6">Services</h4>
  <ul className="space-y-4">
    {services.map((item) => (
      <li key={item.name}>
        <Link 
          to={item.path} 
          className="text-slate-400 hover:text-brand-primary transition-colors"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            {['About Us', 'Our Projects', 'Latest News', 'Contact', 'Careers'].map((item) => (
              <li key={item}>
                <Link to={item === 'Contact' ? '/contact' : '/about'} className="text-slate-400 hover:text-brand-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-slate-400 mb-4">Subscribe to get the latest digital trends and agency updates.</p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-primary"
            />
            <button 
              disabled={status === 'loading'}
              className="w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : 'Subscribe'}
            </button>
            {message && (
              <p className={cn(
                "text-xs font-bold",
                status === 'success' ? "text-emerald-500" : "text-rose-500"
              )}>
                {message}
              </p>
            )} 
          </form>
          <Link to="/subscriber-list">
            <button className="cursore-pointer">
              Subscribers Lists
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} ZOZOTECH Digital Agency. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
