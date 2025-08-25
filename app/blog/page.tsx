'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Heart, Users, Rocket, Brain, Music } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const blogPosts = [
  {
    id: '01-ai-doesnt-have-to-be-soulless',
    title: "AI Doesn't Have To Be Soulless (And Here's How I Know)",
    summary: "After 15 years architecting enterprise AI systems, I've discovered something profound: technology can amplify human creativity rather than replace it. Here's my story and what I've learned.",
    readTime: "7 min",
    publishDate: "Aug 22, 2024",
    tags: ["AI", "Consciousness", "Technology", "Personal Story"],
    icon: Heart,
    color: "from-red-500 to-pink-500"
  },
  {
    id: '02-the-soul-frequency-framework',
    title: "The Soul Frequency Framework: How to Find Your Authentic Creative Voice in the AI Age",
    summary: "Everyone has a unique creative frequency — a way of expressing that's authentically yours. Here's how to discover yours and use AI to amplify it, not mask it.",
    readTime: "8 min", 
    publishDate: "Aug 22, 2024",
    tags: ["Creativity", "Personal Development", "AI Tools", "Framework"],
    icon: Brain,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: '03-ai-guide-for-families-and-professionals',
    title: "The Family & Professional's Guide to Thriving with AI (Not Just Surviving It)",
    summary: "A practical, honest guide for families and working professionals who want to understand AI's real impact and how to navigate it successfully — without the hype or fear.",
    readTime: "9 min",
    publishDate: "Aug 22, 2024", 
    tags: ["AI Education", "Family", "Professional Development", "Practical AI"],
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: '04-conscious-ai-for-entrepreneurs',
    title: "The Conscious Entrepreneur's Guide to Building AI-Powered Businesses That Actually Serve Humanity",
    summary: "How to build AI-powered businesses that create genuine value, foster human connection, and generate sustainable profits — without losing your soul or your ethics.",
    readTime: "10 min",
    publishDate: "Aug 22, 2024",
    tags: ["Entrepreneurship", "AI Business", "Conscious Business", "Startup Strategy"], 
    icon: Rocket,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: '05-music-as-consciousness-technology',
    title: "500 Songs Later: What AI Music Creation Taught Me About Consciousness, Creativity, and the Future",
    summary: "After creating 500+ songs with AI, I've discovered something profound: music isn't just entertainment—it's consciousness technology. Here's what I learned from my journey into AI-human musical collaboration.",
    readTime: "11 min",
    publishDate: "Aug 22, 2024",
    tags: ["Music", "AI Creativity", "Consciousness", "Suno AI", "Creative Process"],
    icon: Music,
    color: "from-orange-500 to-red-500"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights on <span className="gradient-text">Conscious AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real stories, practical frameworks, and deep insights from 15+ years architecting AI systems 
              and 3 years exploring human-AI collaboration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center`}>
                      <post.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.publishDate}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6">
                      {post.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Get Weekly Insights on Conscious AI
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 1000+ creators, entrepreneurs, and professionals learning to thrive with AI while staying authentically human
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}