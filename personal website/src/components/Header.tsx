import { personalInfo } from "../data/careerData";

export default function Header() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pixel-grid overflow-hidden pt-20 pb-16">
      {/* Y2K gradient orbs */}
      <div className="absolute -top-20 -right-20 w-48 md:w-96 h-48 md:h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "linear-gradient(135deg, #f093fb, #f5576c)" }} />
      <div className="absolute -bottom-32 -left-32 w-64 md:w-[500px] h-64 md:h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "linear-gradient(135deg, #4facfe, #00f2fe)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[600px] h-64 md:h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: "linear-gradient(135deg, #a18cd1, #fbc2eb)" }} />

      {/* Floating decorative elements - desktop only */}
      <div className="hidden md:block absolute top-[10%] left-[5%] text-4xl animate-float">⭐</div>
      <div className="hidden md:block absolute top-[15%] right-[10%] text-3xl animate-float" style={{ animationDelay: "0.5s" }}>💫</div>
      <div className="hidden md:block absolute bottom-[20%] left-[8%] text-3xl animate-float" style={{ animationDelay: "1s" }}>✨</div>
      <div className="hidden md:block absolute bottom-[25%] right-[5%] text-4xl animate-float" style={{ animationDelay: "1.5s" }}>🌟</div>

      {/* Y2K chrome-style decorative lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B9D] via-[#7C3AED] via-[#06B6D4] to-[#F59E0B]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Mobile: Clean header without avatar/level */}
        <div className="md:hidden">
          {/* Name */}
          <h1 className="text-4xl font-bold text-[#1a1a2e] mb-2 animate-bounce-in">
            <span className="inline-block px-4 py-2 border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl bg-[#FFE0EB] rotate-[-1deg]">
              ROHAN
            </span>
          </h1>
          <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4 animate-bounce-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl bg-[#EDE9FE] rotate-[1deg]">
              SAKHRANI
            </span>
          </h1>

          {/* Role badge */}
          <div className="inline-block px-6 py-3 bg-[#F59E0B] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl animate-wiggle mb-4">
            <p className="font-pixel text-xs text-[#1a1a2e]">⚡ PRODUCT MANAGER ⚡</p>
          </div>

          {/* Tagline */}
          <p className="text-base text-[#1a1a2e] font-medium px-2 mb-2">
            {personalInfo.tagline}
          </p>
          <p className="text-sm text-[#1a1a2e]/60 px-4 mb-6">
            From Data Analyst to Product Manager
          </p>

          {/* Stats as game cards */}
          <div className="grid grid-cols-2 gap-3 mb-6 max-w-sm mx-auto">
            {[
              { label: "Years", value: "4+", bg: "#FFE0EB", icon: "⏰" },
              { label: "Products", value: "6+", bg: "#EDE9FE", icon: "📦" },
              { label: "Integrations", value: "200+", bg: "#E0F7FA", icon: "🔗" },
              { label: "Merchants", value: "10K+", bg: "#FEF3C7", icon: "🏪" },
            ].map((stat, i) => (
              <div key={i}
                className="px-3 py-3 border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl text-center animate-slide-up"
                style={{
                  backgroundColor: stat.bg,
                  animationDelay: `${0.3 + i * 0.1}s`,
                  animationFillMode: "both"
                }}>
                <span className="text-2xl">{stat.icon}</span>
                <p className="text-xl font-bold text-[#1a1a2e]">{stat.value}</p>
                <p className="text-[10px] text-[#1a1a2e]/60">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 px-4">
            <a href="#game-map"
              className="w-full inline-block px-6 py-3 bg-[#7C3AED] text-white font-bold border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all text-center">
              <span className="font-pixel text-xs">▶ VIEW JOURNEY</span>
            </a>
            <a href="#contact"
              className="w-full inline-block px-6 py-3 bg-white text-[#1a1a2e] font-bold border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all text-center">
              <span className="font-pixel text-xs">📧 CONTACT</span>
            </a>
          </div>

          {/* Location */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[#1a1a2e]/70">
            <span className="text-sm">📍</span>
            <span className="text-xs font-medium">{personalInfo.location}</span>
          </div>
        </div>

        {/* Desktop: Original design */}
        <div className="hidden md:block">
          <div className="inline-block mb-6 px-6 py-2 bg-[#1a1a2e] text-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-full animate-bounce-in">
            <span className="font-pixel text-xs tracking-wider">🎮 PLAYER 1 — ROHAN SAKHRANI</span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#1a1a2e] mb-6 leading-tight">
            <span className="inline-block mx-1 px-3 py-1 border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-lg bg-[#FFE0EB] rotate-[-1deg]">
              ROHAN
            </span>
            <span className="inline-block mx-1 px-3 py-1 border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-lg bg-[#EDE9FE] rotate-[1deg]">
              SAKHRANI
            </span>
          </h1>

          <div className="mt-6 inline-block px-8 py-4 bg-[#F59E0B] border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-xl animate-wiggle">
            <p className="font-pixel text-sm text-[#1a1a2e]">⚡ PRODUCT MANAGER ⚡</p>
          </div>

          <p className="mt-6 text-2xl text-[#1a1a2e] font-medium max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>
          <p className="mt-2 text-lg text-[#1a1a2e]/60 max-w-xl mx-auto">
            From Data Analyst to Product Manager — a gamified career journey
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { label: "Years Exp", value: "4+", bg: "#FFE0EB" },
              { label: "Products", value: "6+", bg: "#EDE9FE" },
              { label: "Integrations", value: "200+", bg: "#E0F7FA" },
              { label: "Merchants", value: "10K+", bg: "#FEF3C7" },
            ].map((stat, i) => (
              <div key={i}
                className="px-4 py-2 border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-lg text-sm font-bold animate-slide-up"
                style={{
                  backgroundColor: stat.bg,
                  animationDelay: `${0.3 + i * 0.1}s`,
                  animationFillMode: "both"
                }}>
                <span className="text-[#1a1a2e] text-lg">{stat.value}</span>
                <span className="text-[#1a1a2e]/60 ml-1 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <a href="#game-map"
              className="inline-block px-8 py-4 bg-[#7C3AED] text-white font-bold text-lg border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-xl active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
              <span className="font-pixel text-xs">▼ EXPLORE MAP ▼</span>
            </a>
            <a href="#contact"
              className="inline-block px-8 py-4 bg-white text-[#1a1a2e] font-bold text-lg border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-xl active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
              <span className="font-pixel text-xs">📧 CONTACT ME</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-[#1a1a2e]/70">
            <span className="text-xl">📍</span>
            <span className="font-medium">{personalInfo.location}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 md:w-8 md:h-12 border-[3px] border-[#1a1a2e] rounded-full flex items-start justify-center pt-1.5 md:pt-2">
          <div className="w-1.5 h-2 md:w-2 md:h-3 bg-[#1a1a2e] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
