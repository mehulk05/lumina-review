import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, DISCLOSURE, SITE_NAME, SITE_OWNER } from '../constants';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <h2 className="text-white text-lg font-serif mb-3">{SITE_NAME}</h2>
          <p className="text-sm leading-relaxed">
            Independent product reviews for India. Published by {SITE_OWNER}.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Site</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/reviews" className="hover:text-white">All reviews</Link></li>
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/editorial-policy" className="hover:text-white">Editorial policy</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <p className="text-xs text-center leading-relaxed">{DISCLOSURE}</p>
        </div>
        <p className="mt-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} {SITE_NAME}. Amazon and the Amazon logo are trademarks
          of Amazon.com, Inc. or its affiliates.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
