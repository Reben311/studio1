import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-chart-2/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">AI-Powered Photo Studio</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-space font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
            <span className="text-foreground">Studio-quality</span>
            <br />
            <span className="text-gradient">ID photos.</span>
            <br />
            <span className="text-foreground">Instantly.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            Transform any selfie into a professional, resume-ready, ID-compliant photo in seconds. Powered by advanced AI.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/studio">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 h-13 glow-primary-lg">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-secondary font-medium text-base px-8 h-13">
                See How It Works
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-primary/70" />
              <span>Privacy-first</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-primary/70" />
              <span>Results in seconds</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary/70" />
              <span>ID-compliant output</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-2 glow-primary">
            <div className="rounded-xl bg-secondary/50 aspect-video flex items-center justify-center overflow-hidden">
              <div className="flex items-center gap-8 p-8">
                {/* Before */}
                <div className="flex-1 text-center">
                  <div className="w-40 h-52 mx-auto rounded-xl bg-muted/60 border border-border/40 flex items-center justify-center mb-3">
                    <div className="w-20 h-20 rounded-full bg-muted-foreground/10 border-2 border-dashed border-muted-foreground/20" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Before</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground">AI Magic</span>
                </div>

                {/* After */}
                <div className="flex-1 text-center">
                  <div className="w-40 h-52 mx-auto rounded-xl bg-white border border-border/40 flex items-center justify-center mb-3">
                    <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-gray-300" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">After</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}