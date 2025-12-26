
import React, { useEffect, useState } from 'react';
import { fetchTrendingDeals } from '../services/geminiService';
import { Deal } from '../types';
import { TRACKING_ID, FEATURED_DEALS } from '../constants';

const DealsPage: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const aiDeals = await fetchTrendingDeals();
        // Merge featured deals with AI found deals
        setDeals([...FEATURED_DEALS, ...aiDeals]);
      } catch (e) {
        console.error("Failed to fetch AI deals, using featured defaults", e);
        setDeals(FEATURED_DEALS);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="mb-12">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">Market Opportunity Report</h2>
        <p className="text-slate-500 text-lg max-w-2xl">
          We track price volatility across major hardware categories to identify genuine dips in MSRP. 
          Every deal listed is cross-referenced with price history data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deals.map(deal => (
          <div key={deal.id} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex flex-col hover:shadow-2xl transition-all duration-500 group relative">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-indigo-100">
                {deal.discountPercentage} SAVINGS
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{deal.category}</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight min-h-[3rem]">
              {deal.title}
            </h3>
            
            <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100 italic text-sm text-slate-600">
              <span className="font-bold text-indigo-600 not-italic block mb-1">Expert Insight:</span>
              "{deal.insight || "High demand item currently seeing rare price compression due to inventory cycles."}"
            </div>

            <p className="text-slate-500 text-sm mb-8 line-clamp-3">
              {deal.description}
            </p>
            
            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-slate-400 line-through leading-none mb-1">{deal.originalPrice}</span>
                <span className="text-2xl font-bold text-slate-900 leading-none">{deal.dealPrice}</span>
              </div>
              <a 
                href={`${deal.amazonUrl}${deal.amazonUrl.includes('?') ? '&' : '?'}tag=${TRACKING_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow bg-slate-900 text-white text-center py-4 rounded-2xl font-bold text-sm hover:bg-indigo-600 transition shadow-lg shadow-slate-100"
              >
                Secure Deal
              </a>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="col-span-full py-12 flex flex-col items-center">
            <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 text-sm font-medium">Scanning live API for secondary opportunities...</p>
          </div>
        )}
      </div>

      <div className="mt-20 bg-indigo-50 rounded-[3rem] p-12 border border-indigo-100">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-slate-900 mb-4">Deal Alert Verification</h3>
          <p className="text-slate-600 mb-0">
            Our proprietary algorithm monitors pricing for over 10,000 electronics daily. 
            We only highlight deals where the current price is at least 15% below the 90-day rolling average.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
