import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try it out with basic features',
    features: [
      '3 photos per month',
      'Basic background removal',
      'Standard quality export',
      'White background only',
      'Watermark on output'
    ],
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'Everything you need for professional photos',
    features: [
      'Unlimited photos',
      'AI face enhancement',
      'HD quality export',
      'All background options',
      'No watermark',
      'All format sizes',
      'Print-ready sheets',
      'Professional Score'
    ],
    cta: 'Start Pro Trial',
    featured: true
  },
  {
    name: 'Business',
    price: '$29',
    period: '/month',
    description: 'For teams and high-volume needs',
    features: [
      'Everything in Pro',
      'Batch processing',
      'API access',
      'Priority support',
      'Custom backgrounds',
      'Team collaboration',
      'Bulk export'
    ],
    cta: 'Contact Sales',
    featured: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Pricing</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Simple, transparent<br />
            <span className="text-gradient">pricing.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border p-8 relative ${
                plan.featured
                  ? 'border-primary/50 bg-card/80 glow-primary'
                  : 'border-border/50 bg-card/40'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-space font-semibold text-lg text-foreground">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="font-space font-bold text-4xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/studio">
                <Button
                  className={`w-full font-medium ${
                    plan.featured
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}