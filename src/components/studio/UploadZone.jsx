import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Image, X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UploadZone({ onFileSelect, isProcessing }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG, WEBP).');
      return false;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be under 10MB.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      onFileSelect(file);
    }
  };

  return (
    <div className="w-full">
      <motion.div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        animate={{
          borderColor: isDragOver ? 'hsl(252 87% 64%)' : 'hsl(220 12% 16%)',
          backgroundColor: isDragOver ? 'hsl(252 87% 64% / 0.05)' : 'transparent'
        }}
        className="relative rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer transition-all duration-300 group hover:border-primary/40"
        onClick={() => !isProcessing && document.getElementById('file-input').click()}
      >
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
          disabled={isProcessing}
        />

        <motion.div
          animate={{ y: isDragOver ? -5 : 0 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
            <Upload className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-space font-semibold text-lg text-foreground mb-2">
            {isDragOver ? 'Drop your photo here' : 'Upload your photo'}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Drag and drop or click to browse. JPG, PNG, WEBP up to 10MB.
          </p>
          <Button
            variant="outline"
            className="border-border/60 text-foreground hover:bg-secondary"
            disabled={isProcessing}
          >
            <Image className="w-4 h-4 mr-2" />
            Choose Photo
          </Button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
          >
            <AlertTriangle className="w-4 h-4 text-destructive shrink-0" />
            <span className="text-sm text-destructive">{error}</span>
            <button onClick={() => setError(null)} className="ml-auto">
              <X className="w-4 h-4 text-destructive/60" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}