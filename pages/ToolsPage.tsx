
import React, { useState, useEffect, useRef } from 'react';
import { TOOLS, ToolWithExtras } from '../constants';
import { generateToolResponse } from '../services/geminiService';

const ToolsPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolWithExtras | null>(null);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progressMsg, setProgressMsg] = useState('Analyzing your request...');
  const resultRef = useRef<HTMLDivElement>(null);

  // Sync with URL query param if present
  useEffect(() => {
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryString);
    const toolId = params.get('id');
    
    if (toolId) {
      const tool = TOOLS.find(t => t.id === toolId);
      if (tool) setSelectedTool(tool);
    } else if (!selectedTool) {
      setSelectedTool(TOOLS[0]);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      const msgs = [
        'Connecting to Gemini 3 Flash...',
        'Processing your unique skills...',
        'Formatting professional output...',
        'Almost ready!',
      ];
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % msgs.length;
        setProgressMsg(msgs[i]);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const loadExample = () => {
    if (selectedTool) {
      setInputs(selectedTool.sampleInputs);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTool) return;

    setLoading(true);
    setError(null);
    setResult('');

    try {
      const output = await generateToolResponse(selectedTool.systemPrompt, inputs);
      setResult(output);
      // Scroll to result after a small delay for animation
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'The AI service is currently busy. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI Virtual Assistant Toolbox</h1>
          <p className="text-slate-600 mt-2">Professional-grade career tools, powered by Google Gemini.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 sticky top-24">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Choose Your Tool</h2>
              <div className="space-y-1">
                {TOOLS.map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      setSelectedTool(tool);
                      setResult('');
                      setInputs({});
                      setError(null);
                    }}
                    className={`w-full text-left px-4 py-4 rounded-2xl transition-all flex items-center space-x-3 group ${
                      selectedTool?.id === tool.id 
                        ? 'bg-indigo-600 text-white shadow-indigo-100 shadow-xl' 
                        : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <span className={`text-2xl transition-transform group-hover:scale-110 ${selectedTool?.id === tool.id ? 'scale-110' : ''}`}>{tool.icon}</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">{tool.title}</span>
                      <span className={`text-[10px] ${selectedTool?.id === tool.id ? 'text-indigo-100' : 'text-slate-400'}`}>Beginner Friendly</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h4 className="text-sm font-bold text-indigo-900 mb-2">Need Help?</h4>
                <p className="text-xs text-indigo-700 leading-relaxed">Each tool is designed to save you hours of work. If you're stuck, use the <strong>"Try Example"</strong> button.</p>
              </div>
            </div>
          </div>

          {/* Main Interface */}
          <div className="lg:w-2/3 xl:w-3/4">
            {selectedTool && (
              <div className="space-y-8">
                {/* Form Card */}
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{selectedTool.title}</h2>
                      <p className="text-slate-600 mt-1">{selectedTool.description}</p>
                    </div>
                    <button 
                      onClick={loadExample}
                      className="px-4 py-2 text-sm font-bold text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors self-start md:self-center"
                    >
                      Try An Example
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-1 gap-6">
                        {selectedTool.fields.map(field => (
                          <div key={field.name}>
                            <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                              {field.label}
                              <span className="text-xs font-normal text-slate-400">Required</span>
                            </label>
                            {field.type === 'textarea' ? (
                              <textarea
                                required
                                value={inputs[field.name] || ''}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                placeholder={field.placeholder}
                                rows={5}
                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300 resize-none"
                              />
                            ) : field.type === 'select' ? (
                              <select
                                required
                                value={inputs[field.name] || ''}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all appearance-none bg-white"
                              >
                                <option value="">Select a tone...</option>
                                {field.options?.map(opt => (
                                  <option key={opt} value={opt}>{opt}</option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type="text"
                                required
                                value={inputs[field.name] || ''}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                placeholder={field.placeholder}
                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          className={`flex-grow w-full md:w-auto py-5 px-10 rounded-2xl font-bold text-white shadow-xl transition-all flex items-center justify-center text-lg ${
                            loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-indigo-100'
                          }`}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                              {progressMsg}
                            </>
                          ) : (
                            <>
                              <span className="mr-2">✨</span> Generate Results
                            </>
                          )}
                        </button>
                        
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start space-x-3 md:max-w-xs">
                          <span className="text-xl">💡</span>
                          <p className="text-xs text-slate-500 leading-relaxed"><span className="font-bold text-slate-700">Expert Tip:</span> {selectedTool.proTip}</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Error State */}
                {error && (
                  <div className="p-6 bg-red-50 border border-red-100 text-red-700 rounded-3xl flex items-center space-x-4 animate-in fade-in zoom-in duration-300">
                    <span className="text-2xl">⚠️</span>
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                {/* Results Section */}
                {result && (
                  <div ref={resultRef} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="bg-white rounded-3xl border border-indigo-100 shadow-2xl shadow-indigo-100/50 overflow-hidden">
                      <div className="bg-indigo-600 px-8 py-4 flex justify-between items-center text-white">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">📄</span>
                          <h3 className="font-bold">Your Custom {selectedTool.title}</h3>
                        </div>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(result);
                            alert('Copied to clipboard!');
                          }}
                          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-xl text-xs font-bold transition-colors border border-white/20"
                        >
                          Copy Text
                        </button>
                      </div>
                      <div className="p-8">
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 prose prose-indigo max-w-none whitespace-pre-wrap text-slate-700 font-medium leading-relaxed">
                          {result}
                        </div>
                        
                        <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 flex items-start space-x-4">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl shrink-0">🚀</div>
                          <div>
                            <h4 className="font-bold text-green-900">Next Step: Implementation</h4>
                            <p className="text-sm text-green-800 mt-1">Review the content above, make minor adjustments to fit your personal voice, and {selectedTool.id === 'proposal-gen' ? 'send it to the client immediately!' : 'update your profile to start attracting jobs.'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
