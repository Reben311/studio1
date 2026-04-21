import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Cpu, Download, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload Your Photo',
    description: 'Take a selfie or upload any portrait photo. Our AI works with almost any image quality.'
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI Enhancement',
    description: 'Background removal, face cleanup, lighting balance, and professional alignment — all automatic.'
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Choose Your Format',
    description: 'Select from ID, passport, resume, or profile photo formats. Pick your background color.'
  },
  {
    icon: Download,
    step: '04',
    title: 'Download & Use',
    description: 'Export in high-resolution PNG or JPG. Ready for official documents, applications, and profiles.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">How It Works</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Four steps to<br />
            <span className="text-gradient">perfection</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            No design skills needed. Our AI handles everything.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-8 h-full hover:border-primary/30 transition-all duration-500 hover:bg-card/80">
                <div className="text-[64px] font-space font-bold text-muted/30 leading-none mb-4 group-hover:text-primary/15 transition-colors">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-space font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}