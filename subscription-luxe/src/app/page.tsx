import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-6 bg-[#FDFBF7] border-b border-[#D4AF37]/20">
    <div className="text-2xl font-serif font-bold text-[#002366] tracking-tight">
      LUXE<span className="text-[#D4AF37]">SUBS</span>
    </div>
    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-[#002366] font-medium">
      <a href="#features" className="hover:text-[#D4AF37] transition-colors">Features</a>
      <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">Pricing</a>
      <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
    </div>
    <button className="bg-gradient-to-r from-[#D4AF37] to-[#F9E498] text-[#002366] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-1 hover:shadow-lg">
      Join Exclusive
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center text-center px-4 bg-[#002366] overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
    <div className="relative z-10 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-serif text-[#FDFBF7] mb-6 leading-tight">
        Elevate Your Lifestyle with <span className="bg-gradient-to-r from-[#D4AF37] via-[#F9E498] to-[#D4AF37] bg-clip-text text-transparent">Premium Access</span>
      </h1>
      <p className="text-[#F7E7CE] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide">
        Join an elite circle of subscribers. Experience unparalleled quality, 
        exclusive benefits, and a touch of gold in every detail.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-[#D4AF37] to-[#F9E498] text-[#002366] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-lg">
          Explore Memberships
        </button>
        <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#002366] transition-all">
          View Gallery
        </button>
      </div>
    </div>
  </section>
);

const PricingCard = ({ tier, price, features, highlight = false }) => (
  <div className={`p-8 rounded-3xl border ${highlight ? 'border-[#D4AF37] bg-white shadow-2xl scale-105 z-10' : 'border-[#D4AF37]/30 bg-[#FDFBF7]/50'} transition-all hover:shadow-xl`}>
    <div className="text-center mb-8">
      <h3 className="text-xl font-serif text-[#002366] uppercase tracking-widest mb-2">{tier}</h3>
      <div className="text-4xl font-bold text-[#002366] mb-4">
        <span className="text-lg font-normal text-gray-500">$</span>{price}<span className="text-sm font-normal text-gray-500">/mo</span>
      </div>
      <div className={`h-1 w-12 mx-auto ${highlight ? 'bg-[#D4AF37]' : 'bg-gray-300'}`}></div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center text-[#002366]/80 text-sm font-light">
          <svg className="w-4 h-4 mr-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${highlight ? 'bg-gradient-to-r from-[#D4AF37] to-[#F9E498] text-[#002366] hover:-translate-y-1 hover:shadow-lg' : 'bg-[#002366] text-[#FDFBF7] hover:bg-[#001233]'}`}>
      Select Plan
    </button>
  </div>
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-8 bg-[#FDFBF7]">
    <div className="max-w-6xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-serif text-[#002366] mb-4">Membership Tiers</h2>
      <p className="text-[#002366]/60 max-w-xl mx-auto font-light">
        Choose the level of prestige that suits your ambitions. 
        Every plan is crafted for those who settle for nothing but the best.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <PricingCard 
        tier="Silver" 
        price="49" 
        features={["Basic Luxury Access", "Weekly Newsletter", "Community Forum", "Priority Support"]} 
      />
      <PricingCard 
        tier="Gold" 
        price="99" 
        highlight={true}
        features={["All Silver Benefits", "Exclusive Events", "Personal Concierge", "Early Access to Drops"]} 
      />
      <PricingCard 
        tier="Platinum" 
        price="199" 
        features={["All Gold Benefits", "One-on-One Consulting", "VIP Travel Perks", "Lifetime Membership Option"]} 
      />
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <Hero />
      <Pricing />
      <footer className="py-12 bg-[#0A0A0A] text-center">
        <div className="text-xl font-serif text-[#D4AF37] mb-4">LUXESUBS</div>
        <p className="text-gray-500 text-xs tracking-widest uppercase">© 2026 LuxeSubs International. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
