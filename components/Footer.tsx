
import React from 'react';
import { DISCLOSURE, SITE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-serif mb-4">{SITE_NAME}</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Our mission is to provide the most rigorous, data-driven product intelligence on the web. 
              We use advanced AI combined with real-world research to help you make informed decisions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Editorial Policy</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
             <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Newsletter</a></li>
              <li><a href="#" className="hover:text-white">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <p className="text-xs italic text-center">
              {DISCLOSURE}
            </p>
          </div>
          <p className="mt-8 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
