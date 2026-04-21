import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const steps = [
  'Uploading photo...',
  'Detecting face...',
  'Removing background...',
  'Enhancing features...',
  'Applying refinements...',
  'Finalizing...'
];

export default function ProcessingOverlay({ currentStep }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center"
    >
      <div className="text-center max-w-sm mx-auto px-4">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary"
          />
          <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
            <Loader2 className="w-6 h-6 text-primary animate-spin" />
          </div>
        </div>

        <h3 className="font-space font-semibold text-xl text-foreground mb-3">
          Processing your photo
        </h3>

        {/* Steps */}
        <div className="space-y-2 mb-6">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0.3,
              }}
              className="flex items-center gap-2 justify-center"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${
                index < currentStep ? 'bg-primary' :
                index === currentStep ? 'bg-primary animate-pulse' :
                'bg-muted-foreground/30'
              }`} />
              <span className={`text-sm ${
                index <= currentStep ? 'text-foreground' : 'text-muted-foreground/40'
              }`}>
                {step}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">This usually takes 10-15 seconds</p>
      </div>
    </motion.div>
  );
}