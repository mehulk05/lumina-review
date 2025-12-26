
import React, { useState } from 'react';
import { generateComparison } from '../services/geminiService';
import { Comparison } from '../types';

const ComparisonTool: React.FC = () => {
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [comparison, setComparison] = useState<Comparison | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (!p1 || !p2) return;
    setLoading(true);
    try {
      const res = await generateComparison(p1, p2);
      setComparison(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">Product Duel</h2>
        <p className="text-slate-500">Select two products to see a data-driven technical comparison.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <input 
            type="text" 
            placeholder="Product A (e.g. iPhone 15)" 
            className="flex-grow w-full md:w-auto p-4 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600/20"
            value={p1}
            onChange={(e) => setP1(e.target.value)}
          />
          <span className="text-2xl font-serif text-slate-300">VS</span>
          <input 
            type="text" 
            placeholder="Product B (e.g. Galaxy S24)" 
            className="flex-grow w-full md:w-auto p-4 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600/20"
            value={p2}
            onChange={(e) => setP2(e.target.value)}
          />
          <button 
            onClick={handleCompare}
            disabled={loading}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Compare'}
          </button>
        </div>
      </div>

      {loading && (
        <div className="py-20 text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-medium">Conducting performance cross-references...</p>
        </div>
      )}

      {comparison && !loading && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">The Verdict</h3>
              <p className="text-indigo-800 leading-relaxed font-medium">Winner: {comparison.winner}</p>
              <p className="mt-4 text-slate-600 text-sm">{comparison.summary}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Differences</h3>
              <ul className="space-y-3">
                {comparison.keyDifferences.map((diff, i) => (
                  <li key={i} className="text-slate-600 text-sm flex gap-3">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    {diff}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Feature</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900">{comparison.productA}</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900">{comparison.productB}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.comparisonTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-sm font-bold text-slate-700">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.valA}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.valB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonTool;
