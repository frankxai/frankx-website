'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Music, Brain, Heart, Zap, CheckCircle, Star, Database, Code, Headphones, Users, Lightbulb, Rocket } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section - Personal Brand Focus */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-primary-700">Enterprise AI Architect × Conscious Creator</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm Frank — I Bridge <span className="gradient-text">Technology & Soul</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              After 15+ years architecting enterprise AI systems, I discovered something profound: 
              Technology should amplify human creativity, not replace it. I help creators, founders, 
              and professionals use AI as a tool for authentic expression and meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/soul-frequency-quiz" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Discover Your Creator Archetype
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/start-here" className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                Start Your Journey
                <Lightbulb className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years in AI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Songs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">∞</div>
                <div className="text-sm text-gray-600">Possibilities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For - Multiple Audiences */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">This Journey Is For You If...</h2>
            <p className="text-xl text-gray-600">Whether you're family, a founder, student, or professional — there's something here for you</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
            >
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">Family & Friends</h3>
              <p className="text-sm text-gray-600">Understand AI's impact on our future and how to thrive alongside technology while staying human</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl"
            >
              <Rocket className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold mb-2">Founders & Entrepreneurs</h3>
              <p className="text-sm text-gray-600">Build AI-powered businesses that create genuine value while maintaining authentic human connection</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl"
            >
              <Brain className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold mb-2">Students & Young Professionals</h3>
              <p className="text-sm text-gray-600">Future-proof your career by mastering AI collaboration while developing uniquely human skills</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl"
            >
              <Code className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold mb-2">Tech Professionals</h3>
              <p className="text-sm text-gray-600">Evolve from technical expertise to conscious technology leadership that serves humanity</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story - Personal & Authentic */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">My Journey: From Corporate AI to Conscious Creation</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                For over 15 years, I've been architecting AI systems for some of the world's largest enterprises. 
                I've seen AI at its most powerful — and its most soulless.
              </p>
              
              <p>
                The turning point came when I realized: <strong>We're building incredibly intelligent systems, 
                but we're forgetting to include the human soul in the equation.</strong>
              </p>
              
              <p>
                So I started experimenting. I created 500+ songs using AI. I built systems that amplify creativity 
                rather than replace it. I discovered that technology and consciousness aren't opposites — they can 
                dance together beautifully.
              </p>
              
              <p>
                Now, I share what I've learned with creators, founders, families, and professionals who want to 
                thrive in the AI age without losing their humanity. This isn't about choosing between technology 
                and soul — it's about integrating both.
              </p>
              
              <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
                <p className="italic text-primary-900">
                  "Technology is best when it brings people together, amplifies our creativity, 
                  and helps us express our deepest truths."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The Three Pillars of Conscious AI</h2>
            <p className="text-xl text-gray-600">My framework for thriving with technology</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Mastery</h3>
              <p className="text-gray-600">Understand AI deeply — not just surface level. Know how it works, its limitations, and its true potential.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Soul Alignment</h3>
              <p className="text-gray-600">Every technology decision should amplify your authentic self and serve your highest purpose.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Creative Expression</h3>
              <p className="text-gray-600">Use AI as a creative partner to manifest ideas you couldn't bring to life alone.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music Lab Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">The Music Lab: Where AI Meets Soul</h2>
            <p className="text-xl mb-8 opacity-90">
              500+ songs created, each one a bridge between technology and consciousness
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Headphones className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Learn Music Creation</h3>
                <p className="text-sm opacity-80">No musical background needed — AI helps you express through sound</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Heart className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Healing Frequencies</h3>
                <p className="text-sm opacity-80">Create music that transforms consciousness and elevates vibration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Zap className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Commercial Success</h3>
                <p className="text-sm opacity-80">Turn your creations into income streams on Spotify and beyond</p>
              </div>
            </div>
            
            <Link href="/music-lab" className="inline-flex items-center px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Explore the Music Lab
              <Music className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Resources for Everyone */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Resources for Your Journey</h2>
            <p className="text-xl text-gray-600">Free tools and insights to begin your transformation</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Soul Frequency Quiz', 
                description: 'Discover your unique creator archetype', 
                icon: Heart,
                link: '/soul-frequency-quiz',
                tag: 'Assessment'
              },
              { 
                title: 'AI Basics for Families', 
                description: 'Simple guide to understanding AI impact', 
                icon: Users,
                link: '/family-guide',
                tag: 'Guide'
              },
              { 
                title: 'Founder's AI Playbook', 
                description: 'Build conscious AI-powered businesses', 
                icon: Rocket,
                link: '/founder-playbook',
                tag: 'Strategy'
              },
              { 
                title: 'Weekly Insights', 
                description: 'Deep dives into AI and consciousness', 
                icon: Brain,
                link: '/insights',
                tag: 'Newsletter'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={resource.link} className="block bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-xs font-semibold text-primary-600 mb-2">{resource.tag}</div>
                  <resource.icon className="w-8 h-8 text-primary-600 mb-3" />
                  <h3 className="font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Join a Community of Conscious Creators</h2>
            <p className="text-xl text-gray-600 mb-12">
              Together, we're pioneering a new relationship between humanity and AI
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <p className="text-gray-600">Conscious creators worldwide</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <p className="text-gray-600">Countries represented</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">∞</div>
                <p className="text-gray-600">Possibilities being created</p>
              </div>
            </div>
            
            <Link href="/community" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Join the Movement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Your Journey to Conscious AI Starts Here</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're here to future-proof your career, build a business, or simply understand 
            what's coming — you belong here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/soul-frequency-quiz" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Take the Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/start-here" className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold">
              Start Your Journey
              <Sparkles className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}