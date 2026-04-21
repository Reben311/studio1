import React from 'react';
import { motion } from 'framer-motion';

const formats = [
  { name: '1×1 ID', size: '1" × 1"', aspect: 'aspect-square', use: 'Government IDs' },
  { name: '2×2 ID', size: '2" × 2"', aspect: 'aspect-square', use: 'US Passport, Visa' },
  { name: 'Passport', size: '35mm × 45mm', aspect: 'aspect-[35/45]', use: 'International Travel' },
  { name: 'Resume / CV', size: '2" × 2.5"', aspect: 'aspect-[4/5]', use: 'Job Applications' },
  { name: 'Profile Photo', size: 'Square', aspect: 'aspect-square', use: 'LinkedIn, Social' }
];

export default function FormatsSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Export Formats</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Every format.<br />
            <span className="text-gradient">Every standard.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Perfectly sized for any official requirement, from passports to LinkedIn.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {formats.map((fmt, index) => (
            <motion.div
              key={fmt.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group w-44"
            >
              <div className="rounded-2xl border border-border/50 bg-card/40 p-5 text-center hover:border-primary/30 transition-all duration-500 hover:bg-card/70">
                <div className={`w-24 h-28 mx-auto rounded-lg bg-white/90 border border-gray-200 mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{fmt.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{fmt.size}</p>
                <p className="text-[11px] text-primary/70 mt-1">{fmt.use}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}