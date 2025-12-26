
import React from 'react';
import { Product } from '../types';
import { TRACKING_ID } from '../constants';

interface ProductCardProps {
  product: Product;
  onViewReview: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewReview }) => {
  // Critical for Amazon Associates: Append the tag
  const affiliateLink = `${product.amazonUrl}${product.amazonUrl.includes('?') ? '&' : '?'}tag=${TRACKING_ID}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-600 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-slate-900">{product.priceEstimate}</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => onViewReview(product)}
            className="w-full py-2.5 rounded-xl border border-indigo-600 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 transition"
          >
            Read Intelligence
          </button>
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold text-center hover:bg-indigo-700 transition"
          >
            Check Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
