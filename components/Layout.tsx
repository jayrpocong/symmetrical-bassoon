
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="#/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
                <span className="text-xl font-bold tracking-tight text-slate-900">VA Launchpad</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="#/tools" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Try AI Tools
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
                <span className="text-xl font-bold tracking-tight">VA Launchpad</span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Helping aspiring virtual assistants get their first client and build a sustainable career through AI-powered tools and expert guidance.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Tools</h3>
              <ul className="space-y-2">
                <li><a href="#/tools" className="text-slate-500 hover:text-indigo-600 transition-colors">Niche Finder</a></li>
                <li><a href="#/tools" className="text-slate-500 hover:text-indigo-600 transition-colors">Proposal Generator</a></li>
                <li><a href="#/tools" className="text-slate-500 hover:text-indigo-600 transition-colors">Resume Builder</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#/about" className="text-slate-500 hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#/blog" className="text-slate-500 hover:text-indigo-600 transition-colors">Success Stories</a></li>
                <li><a href="#/resources" className="text-slate-500 hover:text-indigo-600 transition-colors">Resources</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm">© 2024 VA Launchpad. Built for the next generation of freelancers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
