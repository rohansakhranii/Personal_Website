import { personalInfo } from "../data/careerData";

export default function StatsPanel() {
  const stats = [
    { label: "Years Exp", value: "4+", icon: "⏰", color: "#FF6B9D", emoji: "🍬" },
    { label: "Products", value: "6+", icon: "📦", color: "#7C3AED", emoji: "🍭" },
    { label: "Integrations", value: "200+", icon: "🔗", color: "#06B6D4", emoji: "🍫" },
    { label: "Merchants", value: "10K+", icon: "🏪", color: "#F59E0B", emoji: "🧁" },
    { label: "Freelance", value: "20+", icon: "💼", color: "#10B981", emoji: "🍩" },
    { label: "Orders/Day", value: "20K+", icon: "🛵", color: "#EF4444", emoji: "🍪" },
  ];

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Mobile: Pseudo-3D Power-ups */}
        <div className="md:hidden">
          <div className="text-center mb-4">
            <span className="font-pixel text-[10px] text-[#1a1a2e]">🎁 POWER-UPS COLLECTED</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative active:scale-95 transition-transform duration-150"
              >
                <div
                  className="relative border-[3px] border-[#1a1a2e] rounded-2xl p-2.5 text-center overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, ${stat.color}40, ${stat.color}80)`,
                    boxShadow: `
                      inset 0 2px 4px rgba(255,255,255,0.3),
                      inset 0 -2px 4px rgba(0,0,0,0.1),
                      4px 4px 0px #1a1a2e
                    `,
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl" />
                  
                  {/* Candy emoji */}
                  <div className="absolute -top-0.5 -right-0.5 text-xs animate-gem-shine" style={{ animationDelay: `${i * 0.3}s` }}>
                    {stat.emoji}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-1">
                    <div
                      className="w-10 h-10 mx-auto rounded-lg border-[2px] border-[#1a1a2e] flex items-center justify-center text-xl"
                      style={{
                        background: `linear-gradient(145deg, white, ${stat.color}30)`,
                        boxShadow: `
                          inset 0 2px 4px rgba(255,255,255,0.5),
                          inset 0 -2px 4px rgba(0,0,0,0.1),
                          2px 2px 0px rgba(0,0,0,0.2)
                        `,
                      }}
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value */}
                  <div
                    className="font-pixel text-sm font-bold"
                    style={{
                      color: stat.color,
                      textShadow: `1px 1px 0px rgba(0,0,0,0.2), 2px 2px 0px rgba(0,0,0,0.1)`,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[8px] text-[#1a1a2e]/70 mt-0.5 font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Game HUD */}
        <div className="hidden md:block border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl bg-[#1a1a2e] p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
            }}
          />
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FF6B9D] rounded-full animate-pulse" />
              <span className="font-pixel text-xs text-white">PLAYER STATS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-[#F59E0B]">{personalInfo.name.toUpperCase()}</span>
              <span className="font-pixel text-[10px] text-white/50">|</span>
              <span className="font-pixel text-[10px] text-[#10B981]">LVL 4</span>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3 relative z-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border-[3px] border-[#1a1a2e] rounded-xl p-3 text-center transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-pixel text-base" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-white/60 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[9px] text-white/40">STATUS:</span>
              <span className="font-pixel text-[9px] text-[#10B981]">ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[9px] text-white/40">HP:</span>
              <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#10B981] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
