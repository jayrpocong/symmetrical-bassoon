
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="text-indigo-600 font-bold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Header */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center space-x-4 text-slate-300 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div 
              className="prose prose-slate prose-lg max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-li:text-slate-600
                prose-strong:text-slate-900
                prose-a:text-indigo-600 prose-a:font-bold hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }}
            />

            {/* Author Box */}
            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200 flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-3xl shrink-0 overflow-hidden border-4 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Written by Sarah Jenkins</h4>
                <p className="text-slate-500 text-sm">VA Career Expert & SEO Strategist. Sarah has helped over 5,000 VAs land their first clients on Upwork.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Tool CTA Card */}
              <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100">
                <h3 className="text-xl font-bold mb-4">Land Your First Client</h3>
                <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                  Stop cold-calling and start getting hired. Our AI Proposal Generator writes winning pitches in seconds.
                </p>
                <Link to="/tools?id=proposal-gen" className="block w-full py-3 bg-white text-indigo-600 text-center font-bold rounded-xl hover:bg-slate-50 transition-all">
                  Try Proposal Generator
                </Link>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">VA Weekly Digest</h3>
                <p className="text-slate-500 text-xs mb-4">Get high-paying job leads and VA tips sent to your inbox.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                  <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
