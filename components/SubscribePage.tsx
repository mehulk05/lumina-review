
import React from 'react';

const SubscribePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="bg-indigo-600 rounded-[3rem] p-10 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
          <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10">Join the Intelligence Network.</h2>
        <p className="text-indigo-100 text-xl mb-12 max-w-xl mx-auto relative z-10">
          Get weekly deep-dives into hardware engineering, market anomalies, and genuine performance deals delivered to your inbox.
        </p>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10" onSubmit={e => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="expert@research.com" 
            className="flex-grow bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-indigo-200 outline-none focus:ring-2 focus:ring-white/50 transition"
          />
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition shadow-lg">
            Join Now
          </button>
        </form>

        <p className="mt-8 text-xs text-indigo-200/60 uppercase tracking-widest font-bold relative z-10">
          Zero Spam • Weekly Intelligence • Expert Curated
        </p>
      </div>
    </div>
  );
};

export default SubscribePage;
