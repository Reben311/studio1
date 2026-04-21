import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const formats = [
  { id: '1x1_id', name: '1×1 ID', size: '1" × 1"' },
  { id: '2x2_id', name: '2×2 ID', size: '2" × 2"' },
  { id: 'passport', name: 'Passport', size: '35×45mm' },
  { id: 'resume', name: 'Resume/CV', size: '2" × 2.5"' },
  { id: 'profile', name: 'Profile', size: 'Square' }
];

const backgrounds = [
  { id: 'white', name: 'White', color: '#FFFFFF' },
  { id: 'light_gray', name: 'Light Gray', color: '#E5E5E5' },
  { id: 'soft_blue', name: 'Soft Blue', color: '#DBEAFE' }
];

export default function FormatSelector({ selectedFormat, onFormatChange, selectedBg, onBgChange }) {
  return (
    <div className="space-y-6">
      {/* Format */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3 block">Format</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {formats.map((fmt) => (
            <button
              key={fmt.id}
              onClick={() => onFormatChange(fmt.id)}
              className={`relative px-4 py-3 rounded-xl border text-left transition-all duration-300 ${
                selectedFormat === fmt.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border/50 bg-card/30 hover:border-border'
              }`}
            >
              {selectedFormat === fmt.id && (
                <motion.div
                  layoutId="format-check"
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-primary-foreground" />
                </motion.div>
              )}
              <span className="block font-medium text-sm text-foreground">{fmt.name}</span>
              <span className="block text-xs text-muted-foreground mt-0.5">{fmt.size}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Background */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3 block">Background</label>
        <div className="flex gap-3">
          {backgrounds.map((bg) => (
            <button
              key={bg.id}
              onClick={() => onBgChange(bg.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                selectedBg === bg.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border/50 bg-card/30 hover:border-border'
              }`}
            >
              <div
                className="w-6 h-6 rounded-full border border-border/60"
                style={{ backgroundColor: bg.color }}
              />
              <span className="text-sm text-foreground">{bg.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}