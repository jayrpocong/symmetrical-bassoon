
import React from 'react';
import { BLOG_POSTS, TOOLS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-800 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>1,240+ VAs joined this week</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Start Your <span className="gradient-text">Virtual Assistant</span> <br className="hidden lg:block"/> Career Today
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
              No degree? No experience? No problem. Use our AI tools to find your niche, build a professional resume, and land your first client on Upwork or Fiverr.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#/start" className="px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95">
                Launch My Career
              </a>
              <a href="#/tools" className="px-10 py-5 bg-white text-indigo-600 border border-indigo-100 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                Try Free AI Tools
              </a>
            </div>
            
            <div className="mt-20">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Land Jobs On Top Platforms</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Upwork_Logo.svg" alt="Upwork" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo.svg" alt="Fiverr" className="h-6" />
                <span className="font-bold text-2xl">OnlineJobs.ph</span>
                <span className="font-bold text-2xl">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">10k+</div>
              <div className="text-slate-500 text-sm">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-slate-500 text-sm">Niche Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">$1k+</div>
              <div className="text-slate-500 text-sm">Avg. First Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">Free</div>
              <div className="text-slate-500 text-sm">Tool Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a VA? (SEO Rich) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What does a Virtual Assistant actually do?</h2>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  A <strong>Virtual Assistant (VA)</strong> is a remote worker who provides support to businesses from their home office. It’s one of the fastest-growing <strong>remote jobs for beginners</strong>.
                </p>
                <p>
                  You don’t need specialized degrees. Most VAs start by helping with simple tasks like:
                </p>
                <ul className="grid grid-cols-2 gap-2 mt-4">
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>Managing Emails</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>Social Media Posts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>Data Entry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>Graphic Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>Customer Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>Calendar Booking</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-indigo-50 rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Remote working" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-sm font-medium text-slate-900 italic">"I landed my first $15/hr client just 2 weeks after using the Proposal Generator!"</p>
                <p className="mt-2 text-xs font-bold text-slate-400">— Maria, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Roadmap */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your 30-Day Launch Roadmap</h2>
            <p className="text-slate-400">Follow these steps to go from zero to hired.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Find Your Niche", desc: "Discover what skills you have that clients are paying for right now." },
              { step: "02", title: "Build Your Brand", desc: "Create a professional profile and resume that stops the scroll." },
              { step: "03", title: "Apply Daily", desc: "Use our AI tools to send 5+ high-quality proposals every single day." },
              { step: "04", title: "Get Paid", desc: "Ace your discovery calls and set up your payment method securely." }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-black text-white/10 group-hover:text-indigo-500/20 transition-colors mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-24 bg-white" id="tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Try Our AI Toolbox</h2>
            <p className="text-slate-600">Specially designed for beginners applying to Upwork and Fiverr.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOLS.map((tool) => (
              <a 
                key={tool.id} 
                href={`#/tools?id=${tool.id}`}
                className="block p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{tool.description}</p>
                <div className="text-indigo-600 font-bold text-sm flex items-center">
                  Open Tool
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Latest from the Blog</h2>
              <p className="text-slate-600">Expert tips on virtual assistant jobs for beginners.</p>
            </div>
            <a href="#/blog" className="text-indigo-600 font-bold hover:underline">View All Posts</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="flex flex-col rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                <div className="p-6 flex-grow">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{post.category}</span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 leading-tight">{post.title}</h3>
                  <p className="mt-4 text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <a href={`#/blog/${post.id}`} className="text-slate-900 font-bold text-sm hover:text-indigo-600">Read Story →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (SEO Benefit) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Do I need a laptop to be a VA?", a: "Yes, a reliable laptop or PC and stable internet are essential for most Virtual Assistant jobs." },
              { q: "Can I do this part-time?", a: "Absolutely! Many clients look for VAs for just 5-10 hours per week, making it perfect for students or side-hustlers." },
              { q: "Is it really free?", a: "The tools on this page are 100% free to use. We believe in helping you land your first job before you spend a dime on training." },
              { q: "How much should I charge as a beginner?", a: "Most beginners start between $5-$10/hour depending on their niche. As you gain reviews, you can quickly move to $15-$25+/hour." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-indigo-600 rounded-[3rem] py-16 text-white shadow-2xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Dreaming, Start Working.</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">Join the 10,000+ virtual assistants who launched their careers right here.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#/start" className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-full text-xl hover:bg-slate-50 transition-all shadow-lg active:scale-95">
              Get Started Now — It's Free
            </a>
          </div>
          <p className="mt-6 text-sm text-indigo-200">No credit card required. No hidden fees.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
