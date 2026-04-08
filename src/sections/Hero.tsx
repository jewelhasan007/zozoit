import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const words = ["Build", "Design", "Grow", "Transform", "Launch"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray opacity-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-6">
              NEXT GEN DIGITAL AGENCY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-8"
          >
We {" "}
        <span className="text-brand-primary transition-opacity duration-500">
          {words[index]}
        </span>{" "}  High-Converting <br/> 
<span className="text-gradient">Websites and Marketing Systems</span>  

            {/* Crafting Digital <br />
            <span className="text-gradient">Experiences</span> That <br />
            Define The Future. */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            We blend strategy and technology to create high-performance digital products that drive business growth.
            {/* We combine strategic thinking with cutting-edge technology to build high-performance digital products that scale your business. */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-brand-primary/90 hover:scale-105 transition-all shadow-lg shadow-brand-primary/20"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-1/3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="glass p-8 rounded-3xl relative z-10 animate-float">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <Rocket className="text-brand-primary" />
              </div>
              <div>
                <div className="text-white font-bold">Project Launched</div>
                <div className="text-slate-400 text-sm">24 hours ago</div>
              </div>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full bg-brand-primary"
              />
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-slate-400">Success Rate</span>
              <span className="text-brand-primary font-bold">98%</span>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 glass p-6 rounded-2xl z-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-white mb-1">150+</div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold">Clients Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Rocket = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
  </svg>
);

export default Hero;
