export default function About() {
  const tweets = [
    {
      id: 1,
      content: "PM with 4+ years building B2B SaaS products in restaurant tech 🍕",
      time: "2m",
      likes: 42,
      retweets: 12,
    },
    {
      id: 2,
      content: "Currently at @Petpooja — India's leading restaurant POS — handling products used by 10,000+ restaurants 🇮🇳",
      time: "5m",
      likes: 89,
      retweets: 23,
    },
    {
      id: 3,
      content: "My toolkit: Product strategy, API development, system design, stakeholder management, and data analytics 🛠️",
      time: "8m",
      likes: 56,
      retweets: 18,
    },
    {
      id: 4,
      content: "Technical background: SQL, REST APIs, databases, backend systems — I actually understand how the things I ship work 💻",
      time: "12m",
      likes: 134,
      retweets: 45,
    },
    {
      id: 5,
      content: "From Data Analyst → Business Analyst → Project Manager → Product Manager 🚀 The journey continues!",
      time: "15m",
      likes: 267,
      retweets: 78,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Mobile: Twitter Thread */}
        <div className="md:hidden">
          <div className="text-center mb-4">
            <span className="font-pixel text-[10px] text-[#1a1a2e]">🐦 CHARACTER BIO</span>
          </div>

          {/* Thread container */}
          <div className="border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl bg-white overflow-hidden">
            {/* Profile header */}
            <div className="p-4 bg-gradient-to-r from-[#7C3AED] to-[#FF6B9D] border-b-[3px] border-[#1a1a2e]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-[3px] border-white bg-white/20 flex items-center justify-center text-xl shrink-0">
                  🧑‍💻
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white truncate">Rohan Sakhrani</h3>
                  <p className="text-xs text-white/80 truncate">@rohansakhrani · Product Manager</p>
                </div>
              </div>
            </div>

            {/* Thread tweets */}
            <div>
              {tweets.map((tweet, i) => (
                <div key={tweet.id} className="relative">
                  {/* Tweet row */}
                  <div className="flex gap-3 p-4">
                    {/* Left column: avatar + thread line */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-9 h-9 rounded-full border-[2px] border-[#1a1a2e] bg-gradient-to-br from-[#7C3AED] to-[#FF6B9D] flex items-center justify-center text-sm shrink-0">
                        🧑‍💻
                      </div>
                      {/* Thread line - only between tweets, not after last */}
                      {i < tweets.length - 1 && (
                        <div className="w-[2px] flex-1 bg-[#1a1a2e]/15 mt-1" />
                      )}
                    </div>

                    {/* Right column: content */}
                    <div className="flex-1 min-w-0 pb-2">
                      <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                        <span className="text-[13px] font-bold text-[#1a1a2e]">Rohan Sakhrani</span>
                        <span className="text-[11px] text-[#1a1a2e]/40">· {tweet.time}</span>
                      </div>
                      <p className="text-[13px] text-[#1a1a2e]/80 leading-relaxed break-words">{tweet.content}</p>

                      {/* Engagement */}
                      <div className="flex items-center gap-5 mt-2.5">
                        <div className="flex items-center gap-1 text-[#1a1a2e]/40">
                          <span className="text-[11px]">💬</span>
                          <span className="text-[10px]">{Math.floor(tweet.retweets / 3)}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#1a1a2e]/40">
                          <span className="text-[11px]">🔁</span>
                          <span className="text-[10px]">{tweet.retweets}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#1a1a2e]/40">
                          <span className="text-[11px]">❤️</span>
                          <span className="text-[10px]">{tweet.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider between tweets */}
                  {i < tweets.length - 1 && (
                    <div className="h-[1px] bg-[#1a1a2e]/10 mx-4" />
                  )}
                </div>
              ))}
            </div>

            {/* Thread indicator */}
            <div className="p-3 bg-[#FFF8E7] border-t-[2px] border-[#1a1a2e]/10 text-center">
              <span className="font-pixel text-[8px] text-[#1a1a2e]/50">END OF THREAD</span>
            </div>
          </div>
        </div>

        {/* Desktop: Original design */}
        <div className="hidden md:block border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl p-8 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5"
            style={{ background: "radial-gradient(circle, #7C3AED 2px, transparent 2px)", backgroundSize: "10px 10px" }} />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#7C3AED] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a2e]">About Me</h2>
              <p className="text-sm text-[#1a1a2e]/60">The player behind the screen</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-[#1a1a2e] leading-relaxed">
              PM with <span className="font-bold px-1 py-0.5 bg-[#FEF3C7] border-[2px] border-[#1a1a2e] rounded text-sm">4+ years</span> building B2B SaaS products in restaurant tech. Currently handling multiple products at <span className="font-bold px-1 py-0.5 bg-[#FFE0EB] border-[2px] border-[#1a1a2e] rounded text-sm">Petpooja</span> — India's leading restaurant POS — covering Online Ordering, Reconciliation, Dine-in QR Ordering, Website Ordering, and an Integration Platform used by <span className="font-bold px-1 py-0.5 bg-[#E0F7FA] border-[2px] border-[#1a1a2e] rounded text-sm">10,000+ restaurants</span>.
            </p>
            <p className="text-lg text-[#1a1a2e] leading-relaxed">
              Have worked across product strategy, API development, system design, stakeholder management, and data analytics. Decent technical background too — <span className="font-bold">SQL, REST APIs, databases, backend systems</span> — so I actually understand how the things I ship work.
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#FFF8E7] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl">
            <p className="font-pixel text-[10px] text-[#1a1a2e] mb-3">🗺️ CAREER PATH</p>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { role: "Data Analyst", color: "#FF6B9D" },
                { role: "Business Analyst", color: "#7C3AED" },
                { role: "Project Manager", color: "#06B6D4" },
                { role: "Product Manager", color: "#F59E0B" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="px-3 py-1 border-[2px] border-[#1a1a2e] shadow-[2px_2px_0px_#1a1a2e] rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.role}
                  </span>
                  {i < 3 && <span className="text-[#1a1a2e]/40">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
