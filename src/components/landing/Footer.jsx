import React from 'react';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
              <Camera className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="font-space font-bold text-foreground">
              Studio<span className="text-primary">One</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StudioOne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}