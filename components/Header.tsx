
import React from 'react';
import { SITE_NAME } from '../constants';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { id: 'home', label: 'Latest Reviews' },
    { id: 'guides', label: 'Buying Guides' },
    { id: 'comparison', label: 'Comparisons' },
    { id: 'deals', label: 'Hot Deals' }
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h1 className="text-2xl font-serif text-slate-900 tracking-tight">{SITE_NAME}</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition ${
                  currentPage === item.id ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
             <button 
               onClick={() => onNavigate('subscribe')}
               className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
             >
               Subscribe
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
