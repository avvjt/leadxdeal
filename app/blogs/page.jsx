"use client";

import { useState } from 'react';
import FooterSection from "@/components/footer";
import HeroBlog from "@/components/HeroBlog"

const posts = [
  {
    slug: "linkedin-automation-best-practices",
    title: "5 LinkedIn Automation Best Practices That Won't Get You Flagged",
    excerpt: "Learn how to safely automate your LinkedIn outreach without triggering restrictions or damaging your reputation.",
    date: "2025-06-18",
    author: "Sarah Connors",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    tags: ["Automation", "Best Practices", "LinkedIn"],
  },
  {
    slug: "cold-outreach-strategies",
    title: "3 Cold Outreach Frameworks That Convert on LinkedIn",
    excerpt: "Discover proven messaging templates and sequencing strategies that generate 5x more responses from prospects.",
    date: "2025-06-05",
    author: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80",
    tags: ["Outreach", "Lead Generation", "Sales"],
  },
  {
    slug: "lead-generation-automation",
    title: "How We Automated 90% of Our LinkedIn Lead Generation",
    excerpt: "Step-by-step guide to building a scalable lead pipeline using smart automation and personalized touchpoints.",
    date: "2025-05-22",
    author: "TechGrowth Team",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    tags: ["Automation", "Lead Generation", "LinkedIn Tools"],
  },
  {
    slug: "linkedin-algorithm-2025",
    title: "2025 LinkedIn Algorithm Changes: What Automation Tools Must Adapt To",
    excerpt: "Stay ahead of the curve with the latest algorithm updates affecting automation tools and engagement strategies.",
    date: "2025-05-15",
    author: "Julia Chen",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=600&q=80",
    tags: ["Algorithm", "LinkedIn Updates", "Best Practices"],
  },
  {
    slug: "automated-follow-ups",
    title: "The Science Behind Perfectly Timed LinkedIn Follow-Ups",
    excerpt: "Data-backed strategies for automated follow-up sequences that increase connection acceptance by 300%.",
    date: "2025-04-30",
    author: "David Kim",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    tags: ["Follow-Ups", "Automation", "Sales Tactics"],
  },
  {
    slug: "profile-optimization-automation",
    title: "Automated Profile Optimization: Boost Visibility Without the Manual Work",
    excerpt: "How to use automation tools to continuously optimize your profile for maximum visibility and credibility.",
    date: "2025-04-18",
    author: "GrowthHackers Team",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
    tags: ["Profile Optimization", "Personal Branding", "Automation"],
  }
];

const BlogCard = ({ post, onClick }) => (
  <div
    className="block bg-white dark:bg-black rounded-2xl overflow-hidden shadow shadow-slate-950/5 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-800 cursor-pointer"
    onClick={onClick}
  >
    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col h-full">
      <div className="flex gap-2 mb-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="inline-block px-2 py-1 bg-slate-100 dark:bg-black text-slate-700 dark:text-slate-200 text-xs rounded font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{post.title}</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
      <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </div>
  </div>
);

const BlogPreFooter = () => (
  <section className="bg-white dark:bg-[oklch(0.147_0.004_49.25)] py-16 lg:py-20 border-emerald-100 dark:border-slate-800">
    <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Never miss an update!
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
        Subscribe to our newsletter for the latest articles, tips, and exclusive content delivered straight to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-slate-400 mt-4">No spam. Unsubscribe anytime.</p>
    </div>
  </section>
);

const BlogMaintenance = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
    <div className="bg-black rounded-lg border border-gray-800 max-w-md w-full p-8">
      <div className="text-center">
        <div className="mb-6">
          <svg 
            className="w-16 h-16 mx-auto text-gray-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-100 mb-3">Blog Maintenance</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Our blog server is currently migrating to provide a better experience. 
          We'll be back shortly with improved content delivery.
        </p>
        <button
          onClick={onClose}
          className="px-5 py-2 text-gray-200 font-medium rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default function Blogs() {
  const [showMaintenance, setShowMaintenance] = useState(false);

  return (
    <>
      <HeroBlog/>
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <BlogCard 
              key={post.slug} 
              post={post} 
              onClick={() => setShowMaintenance(true)} 
            />
          ))}
        </div>
      </main>
      <BlogPreFooter />
      <FooterSection />

      {showMaintenance && <BlogMaintenance onClose={() => setShowMaintenance(false)} />}
    </>
  );
}