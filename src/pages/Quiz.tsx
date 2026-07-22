import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, ShoppingBag } from 'lucide-react';

interface QuizProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onAddToCart, onQuickView }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const question = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: string, tag: string) => {
    const updated = { ...answers, [questionId]: tag };
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Compute matched routine products
  const selectedTag = answers['primary-goal'] || 'Immunity';
  const matchedProducts = PRODUCTS.filter((p) => {
    return p.concerns?.includes(selectedTag) || p.category === answers['preference-type'];
  }).slice(0, 3);

  // Fallback to top products if empty
  const routineList = matchedProducts.length > 0 ? matchedProducts : PRODUCTS.slice(0, 3);

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Quiz Hero Banner */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Apothecary Routine Builder
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Discover Your Tailored Organic Regime
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            Answer 3 quick questions about your skin, hair, energy, or wellness concerns to receive a personalized, lab-tested natural product routine.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {!isCompleted ? (
          <div className="bg-white rounded-2xl border border-[#4A5D50]/20 p-6 sm:p-12 shadow-xl space-y-8">
            
            {/* Step Progress Header */}
            <div className="flex items-center justify-between border-b border-[#4A5D50]/15 pb-4 text-xs font-bold text-[#2B2E2C]/70">
              <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
              <div className="flex items-center gap-1.5">
                {QUIZ_QUESTIONS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentStep
                        ? 'w-8 bg-[#4A5D50]'
                        : idx < currentStep
                        ? 'w-3 bg-[#C9962F]'
                        : 'w-3 bg-black/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Question */}
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2E2C]">
                {question.question}
              </h2>
              <p className="text-xs sm:text-sm text-[#2B2E2C]/70">{question.subtitle}</p>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {question.options.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(question.id, opt.tag)}
                  className="p-5 rounded-xl bg-[#FAF8F4] border border-[#4A5D50]/15 hover:border-[#4A5D50] hover:bg-white hover:shadow-md cursor-pointer transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-bold text-[#2B2E2C] group-hover:text-[#4A5D50] transition-colors">
                      {opt.label}
                    </h4>
                    <p className="text-xs text-[#2B2E2C]/70">{opt.description}</p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#4A5D50] group-hover:text-white text-[#2B2E2C] border border-[#4A5D50]/20 flex items-center justify-center transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              ))}
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs font-bold text-[#2B2E2C]/60 hover:text-[#2B2E2C]"
                >
                  ← Back to previous question
                </button>
              </div>
            )}

          </div>
        ) : (
          /* Quiz Results View */
          <div className="bg-white rounded-2xl border border-[#4A5D50]/20 p-6 sm:p-12 shadow-2xl space-y-8 animate-fade-in">
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#4A5D50]/10 text-[#4A5D50] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-[#4A5D50]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9962F]">
                Your Personalized Apothecary Results
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B2E2C]">
                Recommended Organic Routine for "{selectedTag}"
              </h2>
              <p className="text-xs sm:text-sm text-[#2B2E2C]/70 max-w-lg mx-auto">
                Based on your selections, our master apothecaries recommend integrating these three pure, unheated products into your daily ritual.
              </p>
            </div>

            {/* Matched Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {routineList.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                />
              ))}
            </div>

            {/* Routine Actions */}
            <div className="pt-6 border-t border-[#4A5D50]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-xs font-bold text-[#2B2E2C]/70 hover:text-[#4A5D50]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Routine Quiz
              </button>

              <Button
                variant="primary-grown"
                size="lg"
                onClick={() => {
                  routineList.forEach((p) => onAddToCart(p));
                }}
                icon={<ShoppingBag className="w-4 h-4" />}
              >
                Add Entire Routine to Cart
              </Button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
