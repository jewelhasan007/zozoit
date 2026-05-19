
import { motion } from 'motion/react';
import { Code2, ShoppingBag, TrendingUp, Palette, Zap, Smartphone } from 'lucide-react';
import { SERVICES } from '../constants';

import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Code2,
  ShoppingBag,
  TrendingUp,
  Palette,
  Zap,
  Smartphone,
};

const Services = () => {
  return (
<section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold uppercase tracking-widest text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6"
          >
            Solutions Tailored For Your <span className="text-gradient">Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
if (!Icon) return null; // prevents crash if icon not found
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-3xl group hover:border-brand-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Icon size={32} className="text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                {/* <a href={service.slug} className="text-brand-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <TrendingUp size={16} />
             
                </a> */}
               <Link
  to={`/services/${service.slug}`}
  className="text-brand-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
>
  Learn More <TrendingUp size={16} />
</Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
