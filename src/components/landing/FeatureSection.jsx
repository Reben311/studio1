import React from 'react';
import { motion } from 'framer-motion';
import { Eraser, Sun, Eye, Focus, Palette, Crop, Gauge, Layers } from 'lucide-react';

const features = [
  {
    icon: Eraser,
    title: 'Background Removal',
    description: 'Pixel-perfect AI extraction with clean edges, even on complex hair and clothing.'
  },
  {
    icon: Sun,
    title: 'Shadow Balancing',
    description: 'Even out facial lighting and shadows for a professional studio-lit appearance.'
  },
  {
    icon: Eye,
    title: 'Natural Enhancement',
    description: 'Subtle blemish reduction, eye/teeth clarity, and skin smoothing — never over-edited.'
  },
  {
    icon: Focus,
    title: 'Smart Sharpening',
    description: 'AI-driven clarity improvement that enhances detail without introducing artifacts.'
  },
  {
    icon: Crop,
    title: 'Auto Face Alignment',
    description: 'Automatic centering, cropping, and alignment to meet formal photo requirements.'
  },
  {
    icon: Palette,
    title: 'Background Options',
    description: 'Choose from white, light gray, or soft blue — all meeting official photo standards.'
  },
  {
    icon: Gauge,
    title: 'Professional Score',
    description: 'Get an AI readiness score for resume, ID, and passport photo compliance.'
  },
  {
    icon: Layers,
    title: 'Batch Export',
    description: 'Download in multiple formats and sizes at once. Print-ready sheets included.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">AI Features</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Advanced AI.<br />
            <span className="text-gradient">Natural results.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Every enhancement is subtle, realistic, and designed to make you look your best — not different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 h-full hover:border-primary/25 transition-all duration-500 hover:bg-card/70">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}