'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Music, Brain, Heart, Zap, CheckCircle, Star } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
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
              <span className="text-sm font-medium text-primary-700">Oracle AI Architect × Generative Creator</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Become a <span className="gradient-text">Generative Creator</span>
              <br />with Soul-Aligned AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform from Tech-Overwhelmed to AI-Empowered Music Producer & Digital Creator in 8 Weeks. 
              Use technology as a tool for soul expression, not soul replacement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Discover Your Creator Frequency
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/resources" className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                Free Resources
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Songs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Creators Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">You're Struggling With...</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold mb-1">AI Feels Cold & Complex</h3>
                    <p className="text-gray-600">Technology seems to strip away the human touch from your creative work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Creative Dreams Feel Impossible</h3>
                    <p className="text-gray-600">Music production and content creation seem reserved for the technically gifted</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Technology Overwhelming</h3>
                    <p className="text-gray-600">Every new tool adds complexity instead of simplifying your workflow</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">We Solve It With...</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Soul-Aligned Systems</h3>
                    <p className="text-gray-600">AI that amplifies your unique creative essence, not replaces it</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Beautiful Simplicity</h3>
                    <p className="text-gray-600">Complex technology made elegantly simple and accessible</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Music in Minutes</h3>
                    <p className="text-gray-600">Create professional music without years of technical training</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Ladder Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Your Transformation Journey</h2>
            <p className="text-xl text-gray-600">Start free, scale as you grow</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Free Resources', price: '$0', icon: Heart, features: ['Soul Frequency Quiz', 'Starter Templates', 'Weekly Newsletter'] },
              { title: 'Digital Products', price: '$27-47', icon: Zap, features: ['Notion Templates', 'Suno Prompts', 'Automation Packs'] },
              { title: 'Core Courses', price: '$497', icon: Brain, features: ['8-Week Program', 'Live Q&A Calls', 'Community Access'] },
              { title: 'Mastermind', price: '$5,997/yr', icon: Star, features: ['Direct Access', 'Monthly Meetups', 'Advanced Strategies'] }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <tier.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-4">{tier.price}</div>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become a Generative Creator?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 1000+ creators who've discovered their soul-aligned path to AI mastery
          </p>
          <Link href="/quiz" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Take the Free Soul Frequency Quiz
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}