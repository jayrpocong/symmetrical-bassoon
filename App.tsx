
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import StartHerePage from './pages/StartHerePage';
import BlogPostPage from './pages/BlogPostPage';
import { BLOG_POSTS } from './constants';

const BlogListingPage = () => (
  <div className="bg-slate-50 min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900">VA Strategy Blog</h1>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Master the art of virtual assistance with our expert-led guides and tutorials.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <a key={post.id} href={`#/blog/${post.id}`} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
            <img src={post.image} alt={post.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-8">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{post.category}</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 leading-tight group-hover:text-indigo-600">{post.title}</h3>
              <p className="text-slate-500 text-sm mt-4 line-clamp-3">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold mb-6">About VA Launchpad</h1>
    <div className="prose text-slate-600">
      <p>We are a team of former freelancers who struggled to get our first clients. We built VA Launchpad to ensure that anyone with ambition can build a remote career, regardless of their starting point.</p>
      <p className="mt-4">Our mission is to democratize high-quality career advice and professional tools for the global freelance workforce.</p>
    </div>
  </div>
);

const ResourcesPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold mb-4">Free Resources</h1>
    <p className="text-slate-600 mb-8">Download our premium templates and checklists.</p>
    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className="p-6 bg-white border border-slate-200 rounded-2xl">
        <h3 className="font-bold mb-2">Resume Template</h3>
        <p className="text-sm text-slate-500 mb-4">Professional, ATS-friendly VA resume.</p>
        <button className="text-indigo-600 font-bold">Download PDF</button>
      </div>
      <div className="p-6 bg-white border border-slate-200 rounded-2xl">
        <h3 className="font-bold mb-2">Portfolio Checklist</h3>
        <p className="text-sm text-slate-500 mb-4">What to include in your first portfolio.</p>
        <button className="text-indigo-600 font-bold">Download PDF</button>
      </div>
      <div className="p-6 bg-white border border-slate-200 rounded-2xl">
        <h3 className="font-bold mb-2">Discovery Call Script</h3>
        <p className="text-sm text-slate-500 mb-4">Questions to ask potential clients.</p>
        <button className="text-indigo-600 font-bold">Download PDF</button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartHerePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/blog" element={<BlogListingPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
