
import React, { useState } from 'react';
import { generateBuyingGuide } from '../services/geminiService';
import { BuyerGuide } from '../types';

const BuyingGuides: React.FC = () => {
  const [guide, setGuide] = useState<BuyerGuide | null>(null);
  const [loading, setLoading] = useState(false);
  const categories = ['Wireless Headphones', 'Gaming Laptops', 'Mechanical Keyboards', '4K Projectors', 'Smartwatches'];

  const loadGuide = async (cat: string) => {
    setLoading(true);
    try {
      const res = await generateBuyingGuide(cat);
      setGuide(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">Expert Intelligence Guides</h2>
        <p className="text-slate-500">Don't just buy. Understand the engineering behind your tools.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => loadGuide(cat)}
              className="px-6 py-2 rounded-full border border-slate-200 text-sm font-medium hover:border-indigo-600 hover:text-indigo-600 transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading && <div className="text-center py-20 font-medium text-slate-500 animate-pulse">Synthesizing expert industry knowledge...</div>}

      {guide && !loading && (
        <article className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-500">
          <header className="mb-12 border-b border-slate-100 pb-12">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 block">{guide.category} Guide</span>
            <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{guide.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed italic">"{guide.intro}"</p>
          </header>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Critical Evaluation Factors</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {guide.buyingFactors.map((f, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">{f.factor}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100">
              <h3 className="text-xl font-bold text-rose-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Traps to Avoid
              </h3>
              <ul className="space-y-3">
                {guide.commonMistakes.map((m, i) => (
                  <li key={i} className="text-rose-800 text-sm flex gap-3">
                    <span className="font-bold">×</span> {m}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-600 leading-relaxed pt-8 border-t border-slate-100">
              {guide.conclusion}
            </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default BuyingGuides;
