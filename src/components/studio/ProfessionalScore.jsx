import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, CheckCircle, AlertCircle } from 'lucide-react';

export default function ProfessionalScore({ score, analysis }) {
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = () => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Very Good';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Improvement';
  };

  const circumference = 2 * Math.PI * 42;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border/50 bg-card/40 p-6"
    >
      <div className="flex items-center gap-2 mb-5">
        <Gauge className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Professional Score</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Score ring */}
        <div className="relative w-24 h-24 shrink-0">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="42" strokeWidth="6" fill="none" className="stroke-muted/30" />
            <motion.circle
              cx="48" cy="48" r="42"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              className="stroke-primary"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ strokeDasharray: circumference }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`font-space font-bold text-2xl ${getScoreColor()}`}>{score}</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className={`font-semibold text-sm ${getScoreColor()} mb-1`}>{getScoreLabel()}</div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{analysis}</p>
        </div>
      </div>

      {/* Quick checks */}
      <div className="mt-5 pt-5 border-t border-border/30 grid grid-cols-2 gap-2">
        {[
          { label: 'Face detected', ok: score > 0 },
          { label: 'Good lighting', ok: score >= 60 },
          { label: 'Centered', ok: score >= 50 },
          { label: 'ID ready', ok: score >= 80 }
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            {item.ok ? (
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5 text-muted-foreground" />
            )}
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}