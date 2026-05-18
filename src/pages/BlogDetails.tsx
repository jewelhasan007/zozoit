import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User, Tag, ExternalLink, CheckCircle2 } from 'lucide-react';
import CTA from '../sections/CTA';

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = BLOG_POSTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mt-4 mb-8">
              {project.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {project.excerpt1} We delivered a comprehensive solution that exceeded client expectations and set new industry standards for performance and design.
            </p>

         

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              {project.features?.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full -z-10" />
          </motion.div>

           <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {project.excerpt2} We delivered a comprehensive solution that exceeded client expectations and set new industry standards for performance and design.
            </p>
        </div>

      </div>
      <CTA />
    </motion.div>
  );
};

export default BlogDetails;
