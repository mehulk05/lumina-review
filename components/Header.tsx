import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SITE_NAME } from '../constants';

const NAV = [
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/editorial-policy', label: 'Editorial policy' },
  { to: '/contact', label: 'Contact' }
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              L
            </span>
            <span className="text-2xl font-serif text-slate-900">{SITE_NAME}</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClass} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
