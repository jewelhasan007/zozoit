
import { motion } from 'motion/react';
import { Search, Lightbulb, PenTool, Code, Rocket, BarChart3, ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react';
import React, { useEffect, useRef } from "react";
import LeaderLine from "leader-line-new";

const steps = [
  {
    sl: 1,
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and market landscape.',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    sl: 2,
    title: 'Strategy',
    description: 'Developing a comprehensive roadmap tailored to your specific objectives.',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500',
  },
  {
    sl: 3,
    title: 'Design',
    description: 'Creating intuitive and visually stunning interfaces that engage users.',
    icon: PenTool,
    color: 'from-orange-500 to-red-500',
  },
  {
    sl: 6,
    title: 'Growth',
    description: 'Continuous optimization and support to ensure long-term success.',
    icon: BarChart3,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    sl:5, 
    title: 'Launch',
    description: 'Deploying your product with meticulous attention to detail and performance.',
    icon: Rocket,
    color: 'from-brand-primary to-brand-secondary',
  },
  {
    sl: 4,
    title: 'Development',
    description: 'Building robust, scalable solutions using the latest technologies.',
    icon: Code,
    color: 'from-emerald-500 to-teal-500',
  },
];

const Process = () => {

  return (
   <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold uppercase tracking-widest text-sm"
          >
            Our Workflow
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            How We Bring Your <span className="text-gradient">Vision</span> To Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0" />

          {/* {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 group"
            >
              <div className="glass p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-8 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <step.icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center font-display font-bold text-brand-primary">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))} */}

{steps.map((step, index) => (
  <motion.div
    key={step.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative z-10 group"
  >
    <div className="glass p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">

      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-8 group-hover:scale-110 transition-transform`}>
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
          <step.icon className="text-white" size={32} />
        </div>
      </div>

      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center font-display font-bold text-brand-primary">
        0{step.sl + 0}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
      <p className="text-slate-400 leading-relaxed">{step.description}</p>
    </div>

    {/* Arrow */}
    {/* {index !== steps.length - 1 && (
      <ArrowRight
        className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 text-white/20"
        size={32}
      />
    )} */}

<div className="hidden lg:block">
  {/* Row 1 arrows */}
  {index === 0 && (
    <ArrowRight className="absolute -right-10 top-1/2 -translate-y-1/2 text-white/20" size={32} />
  )}

  {index === 1 && (
    <ArrowRight className="absolute -right-10 top-1/2 -translate-y-1/2 text-white/20" size={32} />
  )}

  {/* Step 3 → Step 4 downward */}
  {index === 2 && (
    <ArrowDown className="absolute left-1/2 -bottom-10 -translate-x-1/2 text-white/20" size={32} />
  )}

  {/* Row 2 reverse arrows */}
  {index === 4 && (
    <ArrowLeft className="absolute -left-10 top-1/2 -translate-y-1/2 text-white/20" size={32} />
  )}

  {index === 5 && (
    <ArrowLeft className="absolute -left-10 top-1/2 -translate-y-1/2 text-white/20" size={32} />
  )}
</div>

  </motion.div>
))}


        </div>
      </div>


    </section>
  );
};



export default Process;
