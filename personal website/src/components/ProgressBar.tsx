export default function ProgressBar() {
  const stages = [
    { label: "Data Analyst", shortLabel: "DA", color: "#FF6B9D", emoji: "📊", candy: "🍬" },
    { label: "Business Analyst", shortLabel: "BA", color: "#7C3AED", emoji: "📋", candy: "🍭" },
    { label: "Project Manager", shortLabel: "PM", color: "#06B6D4", emoji: "🎯", candy: "🍫" },
    { label: "Product Manager", shortLabel: "PdM", color: "#F59E0B", emoji: "🚀", candy: "🧁", crown: true },
  ];

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Mobile: Criss-cross road map */}
        <div className="md:hidden">
          <div className="text-center mb-4">
            <span className="font-pixel text-[10px] text-[#1a1a2e]">🗺️ WORLD MAP</span>
          </div>
          <div className="border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-3xl bg-gradient-to-br from-[#FFF8E7] to-white p-4 relative overflow-hidden">
            {/* Road path SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 60 50 L 240 130 L 60 210 L 240 290"
                stroke="#1a1a2e"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.1"
              />
              <path
                d="M 60 50 L 240 130 L 60 210 L 240 290"
                stroke="#1a1a2e"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 6"
                opacity="0.3"
              />
            </svg>

            {/* Checkpoints */}
            <div className="relative z-10 space-y-6">
              {stages.map((stage, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                    <div className={`flex items-center gap-2.5 ${isLeft ? "" : "flex-row-reverse"}`}>
                      {/* Checkpoint node */}
                      <div className="relative shrink-0">
                        <div
                          className="w-12 h-12 rounded-full border-[3px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] flex items-center justify-center text-xl"
                          style={{ backgroundColor: stage.color }}
                        >
                          {stage.emoji}
                        </div>
                        {stage.crown && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-base">
                            👑
                          </div>
                        )}
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#10B981] border-[2px] border-[#1a1a2e] rounded-full flex items-center justify-center">
                          <span className="text-white text-[8px]">✓</span>
                        </div>
                      </div>

                      {/* Label */}
                      <div className={`${isLeft ? "text-left" : "text-right"}`}>
                        <p className="font-pixel text-[9px] text-[#1a1a2e] font-bold leading-tight">{stage.label}</p>
                        <p className="text-[8px] text-[#1a1a2e]/60">{stage.candy} Cleared!</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Completion badge */}
            <div className="mt-4 text-center relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D1FAE5] border-[2px] border-[#1a1a2e] shadow-[2px_2px_0px_#1a1a2e] rounded-full">
                <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
                <span className="font-pixel text-[7px] text-[#1a1a2e]">ALL WORLDS CLEARED!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Progress bar */}
        <div className="hidden md:block border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl p-6 bg-white">
          <div className="text-center mb-6">
            <span className="font-pixel text-xs text-[#1a1a2e]">🎮 LEVEL PROGRESSION</span>
          </div>
          <div className="relative">
            <div className="h-4 bg-gray-200 border-[3px] border-[#1a1a2e] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #FF6B9D, #7C3AED, #06B6D4, #F59E0B)",
                }}
              />
            </div>
            <div className="flex justify-between mt-4">
              {stages.map((stage, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-full flex items-center justify-center text-xl mb-2"
                    style={{ backgroundColor: stage.color }}
                  >
                    {stage.emoji}
                  </div>
                  <span className="font-pixel text-[9px] text-[#1a1a2e] text-center leading-tight">
                    {stage.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D1FAE5] border-[2px] border-[#1a1a2e] shadow-[2px_2px_0px_#1a1a2e] rounded-full">
              <span className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse" />
              <span className="font-pixel text-[10px] text-[#1a1a2e]">CURRENTLY AT MAX LEVEL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
