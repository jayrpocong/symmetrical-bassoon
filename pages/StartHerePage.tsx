
import React from 'react';

const StartHerePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Start Here: Your Path to Freelance Freedom</h1>
        <p className="text-lg text-slate-600">Follow these 5 steps to land your first Virtual Assistant client in 30 days or less.</p>
      </div>

      <div className="space-y-16">
        {/* Step 1 */}
        <section className="relative pl-16">
          <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Understand the VA Role</h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>A Virtual Assistant (VA) is a remote contractor who provides administrative, creative, or technical support to business owners. You don't need a degree—you need **reliability** and **willingness to learn**.</p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>General Admin (Email, Calendar)</li>
              <li>Social Media Management</li>
              <li>Data Entry and Research</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </section>

        {/* Step 2 */}
        <section className="relative pl-16">
          <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Identify Your High-Value Skills</h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>Don't just say you're a VA. Pick a niche. Specializing allows you to charge more. Use our <a href="#/tools?id=niche-finder" className="text-indigo-600 font-bold hover:underline">Niche Finder tool</a> to see what fits you.</p>
            <div className="mt-6 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-2">Pro Tip for Beginners:</h4>
              <p className="text-indigo-800 text-sm italic">"Start with what you already know. If you're good at Instagram, start as a Social Media VA. If you're organized, start with Email Management."</p>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="relative pl-16">
          <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Optimize Your Online Profiles</h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>Clients search for keywords. Your Upwork profile or Fiverr gig should include terms like "Virtual Assistant", "Administrative Support", and "Customer Service". Use our <a href="#/tools?id=resume-builder" className="text-indigo-600 font-bold hover:underline">Resume Helper</a> to polish your bio.</p>
          </div>
        </section>

        {/* Step 4 */}
        <section className="relative pl-16">
          <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Master the Art of the Proposal</h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>The secret to getting hired is not your resume—it's your proposal. Address the client's problem directly. Stop using boring templates and start sending high-conversion pitches with our <a href="#/tools?id=proposal-gen" className="text-indigo-600 font-bold hover:underline">Proposal Generator</a>.</p>
          </div>
        </section>

        {/* Step 5 */}
        <section className="relative pl-16 border-l-4 border-indigo-600/20 pb-8">
          <div className="absolute left-[-22px] top-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg">5</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ace the Client Interview</h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>Confidence is key. Use our <a href="#/tools?id=interview-gen" className="text-indigo-600 font-bold hover:underline">Interview Assistant</a> to prepare for discovery calls. Remember: the interview is just a conversation to see if you can help them!</p>
          </div>
          <div className="mt-12 text-center">
            <a href="#/tools" className="inline-block px-10 py-5 bg-indigo-600 text-white font-bold rounded-full text-xl shadow-xl hover:bg-indigo-700 transition-all hover:-translate-y-1">
              Start Using the Tools Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartHerePage;
