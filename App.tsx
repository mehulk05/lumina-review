
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ReviewDetail from './components/ReviewDetail';
import ComparisonTool from './components/ComparisonTool';
import DealsPage from './components/DealsPage';
import BuyingGuides from './components/BuyingGuides';
import SubscribePage from './components/SubscribePage';
import { Product, DeepReview } from './types';
import { SAMPLE_PRODUCTS, TRACKING_ID } from './constants';
import { generateProductDeepDive } from './services/geminiService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeReview, setActiveReview] = useState<DeepReview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    setActiveReview(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const tempProduct: Product = {
        id: Date.now().toString(),
        name: searchQuery,
        category: 'Market Intelligence',
        description: `Deep analysis of ${searchQuery} based on current data.`,
        priceEstimate: 'Checking...',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        amazonUrl: `https://www.amazon.in/s?k=${encodeURIComponent(searchQuery)}`
      };
      const review = await generateProductDeepDive(searchQuery);
      setSelectedProduct(tempProduct);
      setActiveReview(review);
      setCurrentPage('review');
    } catch (err) {
      setError("Analysis failed. Please try a more specific product name.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewReview = async (product: Product) => {
    setIsLoading(true);
    setSelectedProduct(product);
    setError(null);
    try {
      const review = await generateProductDeepDive(product.name);
      setActiveReview(review);
      setCurrentPage('review');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError("Failed to generate intelligence report.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-32 px-4">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h2 className="text-2xl font-serif text-slate-900 mb-2">Synthesizing Product DNA...</h2>
          <p className="text-slate-500 max-w-md text-center">
            Our AI engine is currently parsing global performance metrics and pricing volatility.
          </p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="max-w-2xl mx-auto py-20 px-4 text-center">
           <div className="bg-rose-50 border border-rose-200 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Analysis Interrupted</h3>
              <p className="text-slate-600 mb-6">{error}</p>
              <button onClick={() => navigateTo('home')} className="bg-indigo-600 text-white px-6 py-2 rounded-xl">Return Home</button>
           </div>
        </div>
      );
    }

    if (currentPage === 'review' && selectedProduct && activeReview) {
      return <ReviewDetail product={selectedProduct} review={activeReview} onBack={() => navigateTo('home')} />;
    }

    switch (currentPage) {
      case 'comparison': return <ComparisonTool />;
      case 'deals': return <DealsPage />;
      case 'guides': return <BuyingGuides />;
      case 'subscribe': return <SubscribePage />;
      case 'home':
      default:
        return (
          <div className="pb-20">
            {/* Hero Section */}
            <div className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white -z-10" />
               <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 blur-[120px] rounded-full -mr-64 -z-10" />
               
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
                  Next-Gen Affiliate Intelligence
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight max-w-5xl mx-auto">
                  Shopping, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Re-Engineered.</span>
                </h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
                  Standard reviews just list features. We analyze engineering integrity, real-world longevity, and verified price value using Search-Grounded AI.
                </p>
                
                <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                  <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 flex flex-col sm:flex-row gap-2">
                    <input 
                      type="text" 
                      placeholder="Enter a product for instant expert analysis..." 
                      className="flex-grow px-6 py-4 outline-none text-slate-700 font-medium"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 whitespace-nowrap">
                      Run Analysis
                    </button>
                  </div>
                </form>
               </div>
            </div>

            {/* Handpicked Editor's Choice Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-3xl font-serif text-slate-900 mb-2">Editor's Hot Picks</h3>
                  <p className="text-slate-500">The most rigorously verified recommendations for this week.</p>
                </div>
                <button onClick={() => navigateTo('deals')} className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition">
                  Explore Deals Hub →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SAMPLE_PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} onViewReview={handleViewReview} />
                ))}
              </div>
            </section>

            {/* Category Spotlight */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
              <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
                 <div className="lg:w-1/2 relative z-10">
                    <span className="text-indigo-200 font-bold uppercase tracking-widest text-xs mb-4 block">Special Access</span>
                    <h3 className="text-4xl md:text-5xl font-serif mb-6">Real-Time Deals Monitor</h3>
                    <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                      Our intelligence engine is currently monitoring the Amazon Electronics marketplace for price anomalies. Don't buy blind.
                    </p>
                    <a 
                      href={`https://www.amazon.in/s?i=electronics&rh=n%3A1805560031%2Cp_85%3A10440599031%2Cp_n_deal_type%3A26921224031&tag=${TRACKING_ID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition shadow-xl"
                    >
                      Visit Lightning Deals Hub
                    </a>
                 </div>
                 <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                       <span className="text-4xl font-bold block mb-2">70%</span>
                       <span className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Max Savings</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                       <span className="text-4xl font-bold block mb-2">1k+</span>
                       <span className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Daily Sweeps</span>
                    </div>
                 </div>
              </div>
            </section>

            {/* Trust Manifesto */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Verification Standards</h4>
                    <h3 className="text-4xl font-serif text-slate-900 mb-6">Built to solve the "Amazon Compliance" challenge.</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      LuminaReviews isn't just another affiliate blog. We provide unique value that shoppers can't find anywhere else:
                    </p>
                    <ul className="space-y-4">
                      {['Engineering-first specifications analysis', 'Price history cross-referencing', 'Crowdsourced reliability reporting'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-900 font-semibold">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" /></svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-100 aspect-video rounded-[3rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" alt="Technology Analysis" className="w-full h-full object-cover" />
                  </div>
               </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 bg-white">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;
