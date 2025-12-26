
import React from 'react';
import { Product, DeepReview } from '../types';
import { TRACKING_ID } from '../constants';

interface ReviewDetailProps {
  product: Product;
  review: DeepReview;
  onBack: () => void;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ product, review, onBack }) => {
  const affiliateLink = `${product.amazonUrl}${product.amazonUrl.includes('?') ? '&' : '?'}tag=${TRACKING_ID}`;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Research
      </button>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm overflow-hidden">
        <header className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4 block">
            Deep Intelligence Review
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            {review.title || product.name}
          </h2>
          <p className="text-xl text-slate-600 italic">
            "A comprehensive analysis of performance, value, and longevity."
          </p>
        </header>

        <div className="aspect-video bg-slate-100 rounded-2xl mb-12 overflow-hidden">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-slate prose-lg max-w-none mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Executive Summary</h3>
          <p className="text-slate-700 leading-relaxed mb-8">
            {review.summary}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h4 className="text-emerald-900 font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Core Strengths
              </h4>
              <ul className="space-y-3">
                {review.pros.map((pro, i) => (
                  <li key={i} className="text-emerald-800 text-sm flex gap-2">
                    <span className="font-bold">•</span> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
              <h4 className="text-rose-900 font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Compromises
              </h4>
              <ul className="space-y-3">
                {review.cons.map((con, i) => (
                  <li key={i} className="text-rose-800 text-sm flex gap-2">
                    <span className="font-bold">•</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Verdict</h3>
          <p className="text-slate-700 mb-12">
            {review.verdict}
          </p>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Ideal For</h4>
                <p className="text-sm text-slate-600">{review.whoIsItFor}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Avoid If</h4>
                <p className="text-sm text-slate-600">{review.whoIsItNotFor}</p>
              </div>
            </div>
          </div>
        </div>

        {review.groundingSources.length > 0 && (
          <div className="mb-12">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Verified Data Sources</h4>
            <div className="flex flex-wrap gap-3">
              {review.groundingSources.map((source, idx) => (
                <a 
                  key={idx}
                  href={source.uri}
                  target="_blank"
                  rel="nofollow noopener"
                  className="bg-slate-100 px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  {source.title}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-slate-200 pt-10 flex flex-col items-center">
          <p className="text-slate-500 text-sm mb-6 text-center max-w-sm">
            Help support our independent testing by using our links. 
            We check prices across major retailers to find the best deal.
          </p>
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
          >
            Check Current Amazon Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
