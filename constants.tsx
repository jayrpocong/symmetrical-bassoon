
import React from 'react';
import { NavItem, Tool, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'Start Here', href: '#/start' },
  { label: 'AI Tools', href: '#/tools' },
  { label: 'Blog', href: '#/blog' },
  { label: 'Resources', href: '#/resources' },
];

export interface ToolWithExtras extends Tool {
  sampleInputs: Record<string, string>;
  proTip: string;
}

export const TOOLS: ToolWithExtras[] = [
  {
    id: 'niche-finder',
    title: 'VA Niche Finder',
    description: 'Find the perfect virtual assistant niche based on your existing skills and interests.',
    icon: '🎯',
    proTip: "Don't worry about being perfect. Focus on skills you actually enjoy doing daily!",
    sampleInputs: {
      background: 'I worked as a primary school teacher for 5 years.',
      interests: 'I love organizing schedules, creating colorful presentations, and social media.'
    },
    systemPrompt: "You are a career coach for virtual assistants. Based on the user's background, suggest 3 high-paying niches. Explain why they fit and what the first steps are for each.",
    fields: [
      { name: 'background', label: 'What is your past work experience?', type: 'textarea', placeholder: 'e.g. Sales, Teaching, Administration...' },
      { name: 'interests', label: 'What are you passionate about?', type: 'textarea', placeholder: 'e.g. Social media, writing, organizing data...' }
    ]
  },
  {
    id: 'proposal-gen',
    title: 'Proposal Generator',
    description: 'Create winning job proposals for Upwork, Fiverr, or OnlineJobs.ph in seconds.',
    icon: '✉️',
    proTip: "Always mention the client's name if it's in the job post or reviews. It shows you paid attention!",
    sampleInputs: {
      jobTitle: 'E-commerce Product Lister',
      clientName: 'Sarah',
      jobDesc: 'Looking for someone to upload 50 products to my Shopify store. Must know how to write basic descriptions.'
    },
    systemPrompt: "You are a high-earning freelancer. Write a personalized, persuasive job proposal. Keep it professional but warm. Focus on how the freelancer solves the client's problem.",
    fields: [
      { name: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'e.g. Real Estate Virtual Assistant' },
      { name: 'clientName', label: 'Client Name (if known)', type: 'text', placeholder: 'e.g. John Doe' },
      { name: 'jobDesc', label: 'Job Description Details', type: 'textarea', placeholder: 'Paste the job description here...' }
    ]
  },
  {
    id: 'interview-gen',
    title: 'Interview Assistant',
    description: 'Generate natural-sounding answers to common client interview questions.',
    icon: '🎤',
    proTip: 'Client interviews are just "Discovery Calls". They want to know if you can solve their problem.',
    sampleInputs: {
      question: 'What is your experience with managing busy calendars?',
      tone: 'Confident'
    },
    systemPrompt: 'You are a virtual assistant expert. Provide a natural, confident answer to the interview question. Also, give 2-3 follow-up questions the user can ask the client.',
    fields: [
      { name: 'question', label: 'Interview Question', type: 'textarea', placeholder: 'e.g. Why should I hire you over someone with more experience?' },
      { name: 'tone', label: 'Desired Tone', type: 'select', options: ['Professional', 'Friendly', 'Confident', 'Humble'] }
    ]
  },
  {
    id: 'resume-builder',
    title: 'Resume Helper',
    description: 'Optimize your resume summary and bullet points for Virtual Assistant roles.',
    icon: '📝',
    proTip: 'Use numbers! Instead of "Managed emails," say "Managed 50+ daily inquiries with 100% response rate."',
    sampleInputs: {
      currentRole: 'Retail Sales Associate',
      responsibilities: 'Handled customer complaints, managed inventory spreadsheets, and coordinated team shifts.'
    },
    systemPrompt: "You are an HR specialist. Rewrite the user's experience to sound more like a professional Virtual Assistant. Use action verbs and focus on remote-ready skills.",
    fields: [
      { name: 'currentRole', label: 'Current/Past Role', type: 'text', placeholder: 'e.g. Customer Service Rep' },
      { name: 'responsibilities', label: 'What did you do there?', type: 'textarea', placeholder: 'List your daily tasks...' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'how-to-become-va-no-experience',
    title: 'How to Become a Virtual Assistant with No Experience (2025 Guide)',
    excerpt: 'Learn how to become a virtual assistant with no experience. Our 5-step guide covers skills, tools, and where to find high-paying VA jobs for beginners.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    category: 'Guides',
    content: `
      <h2>The Rise of Remote Support: Why Now is the Best Time to Start</h2>
      <p>In 2025, the demand for <strong>virtual assistant jobs for beginners</strong> has reached an all-time high. Small business owners and entrepreneurs are looking for reliable partners to handle daily operations so they can focus on growth.</p>
      
      <p>The best part? You don't need a fancy degree or a decade of corporate experience to <strong>become a VA with no experience</strong>. What you need is a laptop, a stable internet connection, and the right strategy.</p>

      <h2>Step 1: Audit Your "Transferable" Skills</h2>
      <p>Many beginners think they have "no skills." That is rarely true. If you've ever held a job in retail, teaching, or administration, you already have skills clients want to pay for.</p>
      <ul>
        <li><strong>Customer Service:</strong> Translates to Email Management and Community Moderation.</li>
        <li><strong>Teaching/Tutoring:</strong> Translates to Creating Training Manuals or Content Writing.</li>
        <li><strong>Organizing:</strong> Translates to Calendar Management and Bookkeeping.</li>
      </ul>

      <h2>Step 2: Choose Your Profitable VA Niche</h2>
      <p>The "Generalist VA" trap is real. Generalists usually get paid less because they are perceived as replaceable. To earn more, you must specialize.</p>
      <h3>High-Demand VA Niches for 2025:</h3>
      <ul>
        <li><strong>Real Estate VA:</strong> Handling cold calls and listing management.</li>
        <li><strong>E-commerce VA:</strong> Managing Shopify stores and product descriptions.</li>
        <li><strong>Social Media VA:</strong> Scheduling posts and engaging with followers.</li>
      </ul>

      <h2>Step 3: Master the "Essential Toolkit"</h2>
      <p>You don't need to be a tech genius, but you should be comfortable with these standard remote work tools:</p>
      <ul>
        <li><strong>Communication:</strong> Slack, Zoom, and WhatsApp.</li>
        <li><strong>Task Management:</strong> Trello, Asana, or ClickUp.</li>
        <li><strong>Productivity:</strong> Google Workspace (Docs, Sheets, Slides).</li>
        <li><strong>Design:</strong> Canva (essential for Social Media VAs).</li>
      </ul>

      <h2>Step 4: Create a Portfolio (Even Without Clients)</h2>
      <p>Clients don't care about your resume as much as they care about your <strong>results</strong>. If you don't have past work samples, create "Mock Projects."</p>
      <p>For example, if you want to be a Social Media VA, create a sample content calendar for a fictional coffee shop. Show it to potential clients to prove you know the workflow.</p>

      <h2>Step 5: Where to Find Your First Client</h2>
      <p>Don't wait for clients to find you. You must go where they hang out. Here are the top platforms for <strong>beginner VA jobs</strong>:</p>
      <ul>
        <li><strong>Upwork:</strong> The largest marketplace. Competitive but highly rewarding.</li>
        <li><strong>OnlineJobs.ph:</strong> The go-to for Filipino VAs. Great for long-term stable roles.</li>
        <li><strong>Facebook Groups:</strong> Search for "Female Entrepreneurs" or "Small Business Owners."</li>
      </ul>

      <h2>Frequently Asked Questions (FAQ)</h2>
      <h3>How much do beginner VAs earn?</h3>
      <p>Beginners typically start between $5 and $10 per hour. As you specialize and gain reviews, you can quickly move to $15–$25 per hour.</p>
      
      <h3>Is virtual assisting hard?</h3>
      <p>It requires discipline. You are your own boss, which means managing your own time and deadlines. However, the flexibility of working from anywhere makes it worth the effort.</p>

      <div class="bg-indigo-50 p-8 rounded-3xl mt-12">
        <h2 class="text-indigo-900">Ready to take the first step?</h2>
        <p class="text-indigo-800">Don't guess which niche is right for you. Use our AI-powered Niche Finder to match your existing skills with high-paying remote roles in seconds.</p>
        <a href="#/tools?id=niche-finder" class="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all">Try the Niche Finder Tool →</a>
      </div>
    `
  },
  {
    id: '2',
    title: '5 High-Paying VA Niches for Beginners',
    excerpt: 'Stop being a generalist and start earning more by picking one of these in-demand niches.',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    category: 'Career'
  },
  {
    id: '3',
    title: 'Upwork vs OnlineJobs.ph: Where Should You Start?',
    excerpt: 'A detailed comparison of the top platforms for Filipino and international VAs.',
    date: 'Oct 18, 2023',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    category: 'Platforms'
  }
];
