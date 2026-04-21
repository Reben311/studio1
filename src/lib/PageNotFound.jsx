import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Camera className="w-7 h-7 text-primary" />
        </div>
        <h1 className="font-space font-bold text-6xl text-foreground mb-3">404</h1>
        <p className="text-muted-foreground mb-8">This page doesn't exist.</p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}