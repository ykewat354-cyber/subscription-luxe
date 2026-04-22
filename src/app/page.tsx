import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gold-500/20 px-6 py-4 flex justify-between items-center">
    <div className="text-2xl font-serif font-bold tracking-tighter text-white">
      LUXE<span className="text-[#D4AF37]">SUBS</span>
    </div>
    <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">
      <a href="#features" className="hover:text-[#D4AF37] transition-all duration-300">Features</a>
      <a href="#pricing" className="hover:text-[#D4AF37] transition-all duration-300">Pricing</a>
      <a href="#about" className="hover:text-[#D4AF37] transition-all duration-300">About</a>
    </div>
    <button className="bg-[#D4AF37] text-black px-5 py-2 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-500">
      Join Elite
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-center px-4 bg-[#0A0A0A] overflow-hidden">
    {/* Ambient Glow */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
    
    <div className="relative z-10 max-w-5xl">
      <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight">
        Elevate Your <br /> 
        <span className="italic text-[#D4AF37]">Existence</span>
      </h1>
      <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
        An exclusive sanctuary for those who demand perfection. <br className="hidden md:block" /> 
        Experience unparalleled access to the world's most coveted assets.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <button className="group relative px-12 py-4 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white">
          Explore Memberships
        </button>
        <button className="px-12 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] hover:border-[#D4AF37] transition-all duration-500">
          The Gallery
        </button>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
    </div>
  </section>
);

const PricingCard = ({ tier, price, features, highlight = false }: any) => (
  <div className={`relative p-10 rounded-none border ${highlight ? 'border-[#D4AF37] bg-white/5 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-white/10 bg-white/[0.02]'} transition-all duration-700 hover:border-[#D4AF37]/50`}>
    <div className="text-center mb-12">
      <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">{tier}</h3>
      <div className="text-5xl font-serif text-white mb-6">
        <span className="text-sm font-sans text-gray-500 align-top">$</span>{price}<span className="text-sm font-sans text-gray-500">/mo</span>
      </div>
      <div className={`h-[1px] w-12 mx-auto ${highlight ? 'bg-[#D4AF37]' : 'bg-white/20'}`} />
    </div>
    <ul className="space-y-6 mb-12">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center text-gray-400 text-xs font-light tracking-wide group">
          <div className="w-1 h-1 rounded-full bg-[#D4AF37] mr-4 group-hover:scale-150 transition-transform" />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${highlight ? 'bg-[#D4AF37] text-black hover:bg-white' : 'border border-white/20 text-white hover:border-[#D4AF37]'}`}>
      Select Tier
    </button>
  </div>
);

const Pricing = () => (
  <section id="pricing" className="py-32 px-8 bg-[#0A0A0A]">
    <div className="max-w-6xl mx-auto text-center mb-24">
      <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Membership Tiers</h2>
      <p className="text-gray-500 max-w-xl mx-auto font-light text-sm leading-relaxed tracking-wide">
        Tailored for the few who settle for nothing less than extraordinary.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      <PricingCard 
        tier="Silver" 
        price="49" 
        features={["Curated Luxury Access", "Weekly Intelligence", "Inner Circle Access", "Concierge Lite"]} 
      />
      <PricingCard 
        tier="Gold" 
        price="99" 
        highlight={true}
        features={["All Silver Privileges", " priority Event Access", "Personal Asset Manager", "Early Access Drops"]} 
      />
      <PricingCard 
        tier="Platinum" 
        price="199" 
        features={["All Gold Privileges", "One-to-One Consulting", "Global VIP Perks", "Lifetime Legacy"]} 
      />
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <Hero />
      <Pricing />
      <footer className="py-20 bg-black border-t border-white/5 text-center">
        <div className="text-2xl font-serif text-[#D4AF37] mb-6 tracking-tighter">LUXESUBS</div>
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">© 2026 LuxeSubs International. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
