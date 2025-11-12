import React, { useState } from 'react'
import DemocraticAccountabilityPlatform from './DemocraticAccountabilityPlatform.jsx'
import ConversationalInput from './ConversationalInput.jsx'
import { MessageSquare, BarChart3, Shield, Database, Users, Zap, MapIcon, TrendingUp } from 'lucide-react'

export default function App() {
  const [view, setView] = useState('landing') // 'landing', 'citizen', 'admin'

  // Landing Page View
  if (view === 'landing') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-2xl">
                📍
              </div>
              <span className="text-xl font-bold animated-gradient-text">Project Pain Point</span>
            </div>

            <button
              onClick={() => setView('admin')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Admin View →
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <div className="pulse-dot"></div>
              <span className="text-sm">247,831 Citizens Sharing Real Experiences</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="animated-gradient-text">Your Story.</span><br />
              <span className="animated-gradient-text">Real Data.</span><br />
              <span className="text-white">Instant Accountability.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We collect your real experiences with federal policies and connect them to live government data,
              news coverage, and thousands of other citizen voices. See exactly what's happening in your
              community—with facts, evidence, and transparency that creates real accountability.
            </p>

            {/* Primary CTA */}
            <button
              onClick={() => setView('citizen')}
              className="gradient-bg text-white px-12 py-5 rounded-2xl text-xl font-bold hover:opacity-90 transition-opacity glow-button mb-4 inline-flex items-center gap-3"
            >
              <MessageSquare className="w-6 h-6" />
              Enter Citizen Portal
            </button>

            <p className="text-sm text-gray-500">
              Share your story in under 60 seconds
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-opacity-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-4 gradient-text">
              Your Voice. Amplified by Intelligence.
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
              We don't just collect stories—we verify them, connect them to data, and show decision-makers
              the real impact of policy decisions.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="impact-card text-center p-6">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">1. Share Experience</h3>
                <p className="text-sm text-gray-400">
                  Tell us what changed in your community. Voice, text, or photo—your choice.
                </p>
              </div>

              <div className="impact-card text-center p-6">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">2. AI Verification</h3>
                <p className="text-sm text-gray-400">
                  Our AI cross-references 20+ government databases, news sources, and verified data.
                </p>
              </div>

              <div className="impact-card text-center p-6">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">3. Pattern Detection</h3>
                <p className="text-sm text-gray-400">
                  We match your story with thousands of others to reveal systemic issues.
                </p>
              </div>

              <div className="impact-card text-center p-6">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">4. Create Change</h3>
                <p className="text-sm text-gray-400">
                  Decision-makers see real-time evidence. Your voice becomes undeniable data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Intelligence Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl">
              <div className="w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black mb-4 gradient-text">
                Real-Time Pain Point Intelligence
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Every story is instantly connected to live government data, verified by AI, and mapped to thousands of similar experiences across the nation.
              </p>
              <button
                onClick={() => setView('admin')}
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <BarChart3 className="w-5 h-5" />
                <span>View Intelligence Dashboard</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="impact-card text-center p-8">
                <div className="text-5xl font-black gradient-text mb-2">247K+</div>
                <div className="text-sm text-gray-400">Verified Stories</div>
                <div className="badge success mt-2">94.7% Accuracy</div>
              </div>
              <div className="impact-card text-center p-8">
                <div className="text-5xl font-black gradient-text mb-2">50</div>
                <div className="text-sm text-gray-400">States Covered</div>
                <div className="badge info mt-2">Real-Time</div>
              </div>
              <div className="impact-card text-center p-8">
                <div className="text-5xl font-black gradient-text mb-2">20+</div>
                <div className="text-sm text-gray-400">Gov't APIs</div>
                <div className="badge high mt-2">Live Data</div>
              </div>
              <div className="impact-card text-center p-8">
                <div className="text-5xl font-black gradient-text mb-2">$287B</div>
                <div className="text-sm text-gray-400">Economic Impact</div>
                <div className="badge critical mt-2">Tracked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-card p-12 text-center rounded-3xl">
            <h2 className="text-4xl font-black mb-4 animated-gradient-text">
              Your Experience Matters
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 247,831 citizens creating accountability through transparency
            </p>
            <button
              onClick={() => setView('citizen')}
              className="gradient-bg text-white px-12 py-5 rounded-2xl text-xl font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-3"
            >
              <MessageSquare className="w-6 h-6" />
              Share Your Story Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
            <p>Project Pain Point - Citizen Voice Intelligence Platform</p>
            <p className="mt-2">Powered by AI-verified data from 20+ federal sources</p>
          </div>
        </footer>
      </div>
    );
  }

  // Citizen Portal View
  if (view === 'citizen') {
    return (
      <div className="min-h-screen relative">
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <button onClick={() => setView('landing')} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-2xl">
                📍
              </div>
              <span className="text-xl font-bold animated-gradient-text">Project Pain Point</span>
            </button>

            <div className="live-indicator">
              <span>Citizen Portal</span>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-12 px-4">
          <div className="slide-up-animation">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h1 className="text-5xl font-black mb-4 animated-gradient-text">
                Your Story Changes Everything
              </h1>
              <p className="text-xl text-gray-400">
                Share what's really happening in your community. AI verifies your experience
                and connects it with thousands of others to create real political change.
              </p>
            </div>

            <ConversationalInput
              onStorySubmit={(story) => console.log('Story submitted:', story)}
            />
          </div>
        </div>
      </div>
    );
  }

  // Admin View
  return (
    <div className="min-h-screen relative">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => setView('landing')} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-2xl">
              📍
            </div>
            <span className="text-xl font-bold animated-gradient-text">Project Pain Point</span>
          </button>

          <div className="flex gap-2">
            <button className="glass-card px-4 py-2 rounded-full font-semibold hover:bg-opacity-20 flex items-center gap-2">
              <MapIcon className="w-4 h-4" />
              Pain Point Map
            </button>
            <button className="glass-card px-4 py-2 rounded-full font-semibold hover:bg-opacity-20 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Intelligence
            </button>
            <button className="glass-card px-4 py-2 rounded-full font-semibold hover:bg-opacity-20 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Creative Services
            </button>
          </div>

          <div className="live-indicator">
            <span>Admin View</span>
          </div>
        </div>
      </nav>

      <div className="pt-24">
        <DemocraticAccountabilityPlatform />
      </div>
    </div>
  );
}
