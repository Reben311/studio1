import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, RotateCcw, Sparkles, Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { uploadFile, analyzeImage, generateImage, savePhotoSession } from '@/api/apiClient';

import UploadZone from '../components/studio/UploadZone';
import BeforeAfter from '../components/studio/BeforeAfter';
import FormatSelector from '../components/studio/FormatSelector';
import ProfessionalScore from '../components/studio/ProfessionalScore';
import ExportPanel from '../components/studio/ExportPanel';
import ProcessingOverlay from '../components/studio/ProcessingOverlay';

export default function Studio() {
  const [originalFile, setOriginalFile] = useState(null);
  const [originalUrl, setOriginalUrl] = useState(null);
  const [processedUrl, setProcessedUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState('passport');
  const [selectedBg, setSelectedBg] = useState('white');
  const [score, setScore] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [addOutfit, setAddOutfit] = useState(false);

  const processPhoto = useCallback(async (file, outfit = false) => {
    try {
      setIsProcessing(true);
      setProcessingStep(0);

      // Step 1: Upload
      const uploadResult = await uploadFile(file);
      const file_url = uploadResult.file_url;
      setOriginalUrl(file_url);
      setProcessingStep(1);

      // Step 2-5: AI Analysis & Enhancement
      setProcessingStep(2);
      await new Promise(r => setTimeout(r, 800));
      setProcessingStep(3);

      // Use AI to analyze the photo
      const analysisResult = await analyzeImage(file_url, {
        prompt: `You are a professional photo analyst for ID and passport photos. Analyze this uploaded portrait photo and provide:
1. A professional readiness score from 0-100 based on: lighting quality, face centering, background simplicity, expression, and overall photo quality for official documents.
2. A brief 2-sentence analysis of the photo quality and what was enhanced.

Be realistic with scoring. Most casual selfies score 50-75. Well-lit, front-facing portraits score 75-90.`
      });

      setProcessingStep(4);

      // Generate the enhanced photo
      const bgColors = {
        white: 'pure white (#FFFFFF)',
        light_gray: 'light gray (#E5E5E5)',
        soft_blue: 'soft pastel blue (#DBEAFE)'
      };

      const formatDesc = {
        '1x1_id': '1x1 inch ID photo',
        '2x2_id': '2x2 inch ID photo',
        passport: '35mm x 45mm passport photo',
        resume: 'professional resume/CV headshot',
        profile: 'square professional profile photo'
      };

      const enhanced = await generateImage(
        file_url,
        `Create a professional ${formatDesc[selectedFormat]} of this person. The photo must have a ${bgColors[selectedBg]} background. The person should be centered, well-lit with even lighting, sharp and clear. This should look like a professional studio photo suitable for official documents. Keep the person's appearance natural and realistic. The face should be properly aligned and centered within the frame.${outfit ? ' The person should be wearing formal professional attire such as a suit or dress shirt.' : ''}`
      );

      setProcessingStep(5);
      await new Promise(r => setTimeout(r, 500));

      setProcessedUrl(enhanced.url);
      setScore(analysisResult.score);
      setAnalysis(analysisResult.analysis);
      setIsProcessing(false);

      // Save session
      await savePhotoSession({
        original_url: file_url,
        processed_url: enhanced.url,
        format: selectedFormat,
        background: selectedBg,
        professional_score: analysisResult.score,
        analysis: analysisResult.analysis,
        status: 'completed'
      });
    } catch (error) {
      console.error('Photo processing error:', error);
      setIsProcessing(false);
      // TODO: Show error toast to user
    }
  }, [selectedFormat, selectedBg]);

  const handleFileSelect = (file) => {
    setOriginalFile(file);
    // Create local preview
    const reader = new FileReader();
    reader.onload = (e) => setOriginalUrl(e.target.result);
    reader.readAsDataURL(file);
    processPhoto(file, addOutfit);
  };

  const handleReset = () => {
    setOriginalFile(null);
    setOriginalUrl(null);
    setProcessedUrl(null);
    setScore(null);
    setAnalysis('');
    setIsProcessing(false);
    setProcessingStep(0);
    setAddOutfit(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-primary" />
                </div>
                <span className="font-space font-bold text-lg text-foreground">
                  Studio<span className="text-primary">One</span>
                </span>
              </Link>
              {processedUrl && (
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  Photo Studio
                </div>
              )}
            </div>

            {processedUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="border-border/60 text-foreground hover:bg-secondary"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-2" />
                New Photo
              </Button>
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isProcessing && <ProcessingOverlay currentStep={processingStep} />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {!processedUrl && !isProcessing ? (
          /* Upload State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-primary">AI Photo Studio</span>
              </div>
              <h1 className="font-space font-bold text-3xl sm:text-4xl text-foreground mb-3">
                Transform your photo
              </h1>
              <p className="text-muted-foreground">
                Upload a selfie or portrait and get a professional, ID-ready photo in seconds.
              </p>
            </div>

            {/* Outfit option */}
            <div className="mb-6 rounded-2xl border border-border/40 bg-card/30 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Shirt className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Add Professional Outfit</span>
                </div>
                <button
                  onClick={() => setAddOutfit(!addOutfit)}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${addOutfit ? 'bg-primary' : 'bg-muted'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${addOutfit ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">AI will dress you in formal professional attire for your photo.</p>
            </div>

            <UploadZone onFileSelect={handleFileSelect} isProcessing={isProcessing} />

            {/* Quick tips */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { tip: 'Front-facing', desc: 'Look directly at the camera' },
                { tip: 'Good lighting', desc: 'Natural or even lighting is best' },
                { tip: 'Plain background', desc: 'Any background works, AI removes it' }
              ].map((item) => (
                <div key={item.tip} className="text-center p-4 rounded-xl border border-border/30 bg-card/20">
                  <p className="text-sm font-medium text-foreground">{item.tip}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : processedUrl ? (
          /* Results State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Before/After */}
              <div className="lg:col-span-2">
                <h2 className="font-space font-semibold text-xl text-foreground mb-6">Before & After</h2>
                <BeforeAfter originalUrl={originalUrl} processedUrl={processedUrl} />
              </div>

              {/* Right: Controls */}
              <div className="space-y-6">
                {score !== null && (
                  <ProfessionalScore score={score} analysis={analysis} />
                )}

                <FormatSelector
                  selectedFormat={selectedFormat}
                  onFormatChange={setSelectedFormat}
                  selectedBg={selectedBg}
                  onBgChange={setSelectedBg}
                />

                <ExportPanel processedUrl={processedUrl} format={selectedFormat} />
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}