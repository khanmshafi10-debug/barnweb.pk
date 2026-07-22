import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { JournalArticle } from '../types';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Clock, User, ArrowRight, BookOpen, X, Tag } from 'lucide-react';

export const Journal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'grown' | 'restored'>('all');

  const filteredArticles = ARTICLES.filter((article) => {
    if (activeCategory === 'all') return true;
    return article.category === activeCategory;
  });

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-[#4A5D50] text-[#FAF8F4] py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <BarnRoofMotif color="#C9962F" height={14} className="mx-auto" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F4]/10 text-xs font-semibold uppercase tracking-wider text-[#C9962F]">
            <BookOpen className="w-3.5 h-3.5" />
            Barn.pk Harvest Gazette
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            The Wellness & Food Journal
          </h1>
          <p className="text-sm text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            Science, traditional food wisdom, and sourcing notes from raw honey hives to high-altitude Skardu cliffs.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap justify-center gap-2 pb-6 border-b border-[#4A5D50]/15">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#2B2E2C] text-white shadow-sm'
                : 'bg-white text-[#2B2E2C] border border-[#4A5D50]/20'
            }`}
          >
            All Journal Entries
          </button>
          <button
            onClick={() => setActiveCategory('grown')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'grown'
                ? 'bg-[#4A5D50] text-white shadow-sm'
                : 'bg-white text-[#4A5D50] border border-[#4A5D50]/20'
            }`}
          >
            Grown • Pure Food Wisdom
          </button>
          <button
            onClick={() => setActiveCategory('restored')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'restored'
                ? 'bg-[#45566B] text-white shadow-sm'
                : 'bg-white text-[#45566B] border border-[#45566B]/20'
            }`}
          >
            Restored • Vitality & Science
          </button>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-[#4A5D50]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    fallbackTitle={article.title}
                    category={article.category}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#4A5D50] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs z-10">
                    {article.categoryLabel}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#2B2E2C]/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C9962F]" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2B2E2C] leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#2B2E2C]/75 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read CTA */}
              <div className="p-6 pt-0 border-t border-[#4A5D50]/10 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                    <ImageWithFallback
                      src={article.author.avatar}
                      alt={article.author.name}
                      fallbackTitle={article.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-[#2B2E2C]">{article.author.name}</span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedArticle(article)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Read
                </Button>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedArticle(null)}
          />

          <div className="relative bg-[#FAF8F4] rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-[#4A5D50]/20 z-10 my-8 p-6 sm:p-10">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md text-[#2B2E2C] hover:text-red-600 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9962F] block">
                {selectedArticle.categoryLabel}
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B2E2C] leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#2B2E2C]/70 pb-4 border-b border-[#4A5D50]/15">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <ImageWithFallback
                      src={selectedArticle.author.avatar}
                      alt={selectedArticle.author.name}
                      fallbackTitle={selectedArticle.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <strong className="block font-bold">{selectedArticle.author.name}</strong>
                    <span className="text-[10px] text-[#2B2E2C]/60">{selectedArticle.author.role}</span>
                  </div>
                </div>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#4A5D50]/10">
                <ImageWithFallback
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fallbackTitle={selectedArticle.title}
                  category={selectedArticle.category}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm text-[#2B2E2C]/90 leading-relaxed space-y-4 whitespace-pre-line font-sans">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t border-[#4A5D50]/15 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-[#C9962F]" />
                {selectedArticle.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold bg-[#4A5D50]/10 text-[#4A5D50] px-2.5 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

