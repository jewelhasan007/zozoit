import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Years Experience', value: '6+' },
    { label: 'Team Experts', value: '25+' },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/agency/800/1000"
              alt="Our Team"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div> */}

            <div className="relative">
  {/* Main Image */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
  >
    <img
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
      alt="ZoZo TECH Team Working"
      className="w-full h-auto"
      referrerPolicy="no-referrer"
    />
  </motion.div>

  {/* Overlapping Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="absolute -bottom-12 -right-12 w-48 md:w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-950 z-20"
  >
    <img
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
      alt="Team Collaboration"
      className="w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
  </motion.div>

  {/* Background Glow Effects */}
  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full" />
  <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-secondary/20 blur-[80px] rounded-full" />
</div>

          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-secondary/20 blur-[80px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-10 -left-10 glass p-8 rounded-2xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="text-emerald-500" />
              </div>
              <div>
                <div className="text-white font-bold">Trusted Partner</div>
                <div className="text-slate-400 text-sm">Certified Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
             Empowering <span className="text-gradient">Digital Growth</span> Since 2020
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              ZoZo TECH is a full-service agency dedicated to helping businesses navigate the complex digital landscape. We combine creative vision with technical precision to deliver results that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl font-display font-extrabold text-white">{stat.value}</div>
                <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6"
          >
            <Link to="/about-stats">
            <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:scale-105 transition-all cursor-pointer">
              Learn More About Us
            </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
