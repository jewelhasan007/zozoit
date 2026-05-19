import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="py-24 px-6 lg:px-16 xl:px-24 bg-slate-50 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[140px] rounded-full" />

      {/* Container (IMPORTANT FIX FOR LARGE SCREEN) */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">

          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-secondary font-semibold uppercase tracking-wider text-sm"
            >
              Selected Works
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mt-4 text-slate-900"
            >
              Case Studies of <span className="text-gradient">Success</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">

                <span className="text-brand-secondary font-semibold text-sm mb-2 uppercase tracking-wider">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-500 mb-6 max-w-md leading-relaxed">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">

                  <Link
                    to={`/portfolio/${project.id}`}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink size={20} />
                  </Link>

                  <Link
                    to={`/portfolio/${project.id}`}
                    className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                  >
                    <Plus size={20} />
                  </Link>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;