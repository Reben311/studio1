import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What kind of photos can I upload?',
    a: 'Any portrait or selfie photo works. For best results, use a well-lit, front-facing photo. Our AI can handle various lighting conditions and backgrounds.'
  },
  {
    q: 'Is the AI enhancement natural looking?',
    a: 'Absolutely. Our AI focuses on subtle, professional enhancements — evening out skin tone, reducing blemishes, and balancing lighting. We never over-edit or apply beauty filters.'
  },
  {
    q: 'Are the photos compliant for official documents?',
    a: 'Yes. We follow international standards including ICAO for passports, and standard sizes for government IDs, visas, and professional headshots.'
  },
  {
    q: 'How fast is the processing?',
    a: 'Most photos are processed in under 10 seconds. The AI handles background removal, face detection, enhancement, and formatting all at once.'
  },
  {
    q: 'Is my photo data private?',
    a: 'Yes. Photos are processed securely and are not stored permanently. We take privacy seriously and never use your photos for training or other purposes.'
  },
  {
    q: 'Can I get a print-ready sheet?',
    a: 'Yes! Pro users can generate a print-ready sheet with multiple copies of their photo, perfectly sized for standard photo paper.'
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">FAQ</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-foreground">
            Common<br />
            <span className="text-gradient">questions.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/40 px-6 data-[state=open]:bg-card/70 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}