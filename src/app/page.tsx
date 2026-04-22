
import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-navy">
      {/* NAVIGATION - Minimal & Floating */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-serif font-bold tracking-tighter text-white">
          LUXE<span className="text-gold">.</span>
        </div>
        <div className="hidden md:flex gap-12 text-xs uppercase tracking-widest font-medium text-white">
          <a href="#collection" className="hover:text-gold transition-colors">Collection</a>
          <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
          <a href="#membership" className="hover:text-gold transition-colors">Membership</a>
        </div>
        <button className="px-6 py-2 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-500">
          Join Now
        </button>
      </nav>

      {/* HERO SECTION - Asymmetric & High Contrast */}
      <section className="relative h-screen flex items-center px-8 md:px-24 overflow-hidden bg-navy">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gold opacity-10 skew-x-12 translate-x-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 fade-in-up">
              <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-8">
                The Art of <br />
                <span className="italic gold-gradient-text">Exclusive</span> Living.
              </h1>
              <p className="text-lg text-slate-300 max-w-xl mb-12 font-light leading-relaxed">
                Beyond a subscription. A gateway to the world's most coveted experiences, reserved for the few who recognize true craftsmanship.
              </p>
              <div className="flex gap-6">
                <button className="px-10 py-4 bg-gold text-navy font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300">
                  Explore Tiers
                </button>
                <button className="px-10 py-4 border border-slate-500 text-white font-bold uppercase text-xs tracking-widest hover:border-gold transition-all duration-300">
                  The Manifesto
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="aspect-[3/4] bg-slate-800 luxury-border relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent z-10 opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1514361892611-fb57f79f6835?auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Suite" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 p-8 glass-card z-20 hidden md:block">
                <p className="text-navy text-xs uppercase tracking-tighter font-bold mb-1">Est. 2026</p>
                <p className="text-navy font-serif italic text-xl">Pure Distinction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Grid-Break Pattern */}
      <section id="experience" className="py-32 px-8 md:px-24 bg-cream">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm uppercase tracking-widest text-gold mb-4 font-bold">The Experience</h2>
              <h3 className="text-5xl md:text-6xl font-serif text-navy leading-tight">
                Sourced from the edges of <span className="italic">perfection</span>.
              </h3>
            </div>
            <p className="text-navy opacity-60 max-w-xs text-sm font-light">
              We don't aggregate. We curate. Every detail is a testament to uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Card 1 - Shifted Up */}
            <div className="md:-mt-12 group">
              <div className="aspect-square bg-navy overflow-hidden relative luxury-border">
                <img src="https://images.unsplash.com/photo-1585336136180-e2227f77737f?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500 filter grayscale hover:grayscale-0" />
              </div>
              <h4 className="text-2xl font-serif mt-6 text-navy">Bespoke Curations</h4>
              <p className="text-sm text-navy opacity-70 mt-2 font-light">Artisanal products delivered monthly, tailored to your sensory profile.</p>
            </div>

            {/* Card 2 - Center */}
            <div className="group">
              <div className="aspect-square bg-navy overflow-hidden relative luxury-border">
                <img src="https://images.unsplash.com/photo-1535131742578-3f2c7d073777?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500 filter grayscale hover:grayscale-0" />
              </div>
              <h4 className="text-2xl font-serif mt-6 text-navy">Private Access</h4>
              <p className="text-sm text-navy opacity-70 mt-2 font-light">Invitations to closed-door events and secret galleries worldwide.</p>
            </div>

            {/* Card 3 - Shifted Down */}
            <div className="md:mt-12 group">
              <div className="aspect-square bg-navy overflow-hidden relative luxury-border">
                <img src="https://images.unsplash.com/photo-1553113244-377a6073034a?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500 filter grayscale hover:grayscale-0" />
              </div>
              <h4 className="text-2xl font-serif mt-6 text-navy">Concierge Living</h4>
              <p className="text-sm text-navy opacity-70 mt-2 font-light">A dedicated lifestyle architect managing every whim with precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Ultra-Minimalist Cards */}
      <section id="membership" className="py-32 px-8 md:px-24 bg-navy text-white">
        <div className="container mx-auto text-center mb-24">
          <h2 className="text-sm uppercase tracking-widest text-gold mb-4 font-bold">Membership</h2>
          <h3 className="text-5xl font-serif">Choose Your Legacy</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1 */}
          <div className="p-12 border border-slate-700 group hover:border-gold transition-all duration-500 text-left flex flex-col">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">Silver Tier</p>
            <h4 className="text-4xl font-serif mb-4">$499 <span className="text-sm font-light text-slate-500">/mo</span></h4>
            <ul className="space-y-4 mb-12 text-sm font-light text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold"></div> Monthly curated box</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold"></div> Digital concierge access</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold"></div> Member-only forum</li>
            </ul>
            <button className="mt-auto w-full py-4 border border-slate-700 group-hover:bg-gold group-hover:text-navy transition-all duration-300 uppercase text-xs tracking-widest font-bold">
              Apply Now
            </button>
          </div>

          {/* Tier 2 - Featured */}
          <div className="p-12 bg-white text-navy border-2 border-gold relative transform md:-translate-y-8 text-left flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gold text-navy text-[10px] uppercase font-bold tracking-widest">
              Most Coveted
            </div>
            <p className="text-xs uppercase tracking-widest text-gold mb-8">Gold Tier</p>
            <h4 className="text-4xl font-serif mb-4">$1,299 <span className="text-sm font-light text-slate-500">/mo</span></h4>
            <ul className="space-y-4 mb-12 text-sm font-light text-navy opacity-80">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-navy"></div> Priority curated shipments</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-navy"></div> Quarterly private event invites</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-navy"></div> 24/7 Dedicated Concierge</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-navy"></div> Exclusive brand collabs</li>
            </ul>
            <button className="mt-auto w-full py-4 bg-navy text-white hover:bg-gold hover:text-navy transition-all duration-300 uppercase text-xs tracking-widest font-bold">
              Apply Now
            </button>
          </div>

          {/* Tier 3 */}
          <div className="p-12 border border-slate-700 group hover:border-gold transition-all duration-500 text-left flex flex-col">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">Platinum Tier</p>
            <h4 className="text-4xl font-serif mb-4">$4,999 <span className="text-sm font-light text-slate-500">/mo</span></h4>
            <ul className="space-y-4 mb-12 text-sm font-light text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold"></div> Limitless curation</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold"></div> All-access pass to global events</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold"></div> Personal lifestyle architect</li>
            </ul>
            <button className="mt-auto w-full py-4 border border-slate-700 group-hover:bg-gold group-hover:text-navy transition-all duration-300 uppercase text-xs tracking-widest font-bold">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER - Ultra Minimal */}
      <footer className="py-12 px-8 md:px-24 bg-cream border-t border-gold/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-serif font-bold tracking-tighter text-navy">
            LUXE<span className="text-gold">.</span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-navy opacity-50">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <p className="text-[10px] text-navy opacity-30 uppercase tracking-widest">
            © 2026 Luxe Membership. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
