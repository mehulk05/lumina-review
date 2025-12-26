
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
import { SAMPLE_PRODUCTS } from './constants';
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
      // We simulate a search by creating a temporary product object and running the deep dive
      const tempProduct: Product = {
        id: Date.now().toString(),
        name: searchQuery,
        category: 'Search Result',
        description: `Deep analysis of ${searchQuery} based on current market data.`,
        priceEstimate: 'Variable',
        imageUrl: 'https://picsum.photos/seed/tech/800/600',
        amazonUrl: `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}`
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
          <h2 className="text-2xl font-serif text-slate-900 mb-2">Synthesizing Market Intelligence...</h2>
          <p className="text-slate-500 max-w-md text-center">
            Our AI engine is currently parsing technical specifications and expert feedback to ensure high-value unique insights.
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
                Discover Hardware Through <span className="text-indigo-600">Pure Intelligence.</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
                LuminaReviews provides the data depth that standard affiliate blogs miss. Expert research, AI-verified specs.
              </p>
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white border border-slate-200 rounded-full pl-6 pr-2 py-2 flex items-center shadow-lg max-w-lg w-full mx-auto sm:mx-0">
                  <input 
                    type="text" 
                    placeholder="Enter any product for instant AI review..." 
                    className="flex-grow bg-transparent outline-none text-sm p-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-indigo-700 transition">
                    Analyze
                  </button>
                </div>
              </form>
            </div>

            <div className="mb-12 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">Featured Technical Reviews</h3>
              <button onClick={() => navigateTo('guides')} className="text-sm font-semibold text-indigo-600">View Buying Guides →</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {SAMPLE_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} onViewReview={handleViewReview} />
              ))}
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden mb-20">
              <div className="relative z-10 max-w-2xl">
                <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Manifesto</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Beyond the Affiliate Link</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We don't just list products; we analyze their engineering. Every link you see is backed by real-time search grounding from verified industry sources.
                </p>
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">1k+</span>
                    <span className="text-xs text-slate-500 uppercase">Daily Updates</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">4.9/5</span>
                    <span className="text-xs text-slate-500 uppercase">Expert Trust</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;
