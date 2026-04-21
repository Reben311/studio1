import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CreditCard, Globe, Users, FileText } from 'lucide-react';

const cases = [
  { icon: CreditCard, title: 'ID Photos', desc: 'National ID, driver\'s license, and government forms' },
  { icon: Globe, title: 'Passport Photos', desc: 'ICAO-compliant photos accepted worldwide' },
  { icon: Briefcase, title: 'Resume & CV', desc: 'Professional headshots for job applications' },
  { icon: Users, title: 'LinkedIn Profile', desc: 'Stand out with a polished professional profile' },
  { icon: GraduationCap, title: 'Academic', desc: 'Student IDs, university applications, and transcripts' },
  { icon: FileText, title: 'Visa Applications', desc: 'Meet strict embassy photo requirements' }
];

export default function UseCases() {
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
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Use Cases</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-foreground mb-4">
            One photo.<br />
            <span className="text-gradient">Every purpose.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border/40 bg-card/30 hover:border-primary/20 hover:bg-card/60 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}