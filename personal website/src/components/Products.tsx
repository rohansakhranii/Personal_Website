import { useState } from "react";

interface Product {
  name: string;
  icon: string;
  description: string;
  highlight: string;
  color: string;
  bgColor: string;
}

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products: Product[] = [
    {
      name: "Reconciliation Platform",
      icon: "💰",
      description: "Matches aggregator payout reports against POS data to surface discrepancies.",
      highlight: "Catches payout mismatches automatically",
      color: "#F59E0B",
      bgColor: "#FEF3C7",
    },
    {
      name: "Online Ordering",
      icon: "🛒",
      description: "Covers Swiggy, Zomato, and other aggregators. Handles millions of orders.",
      highlight: "Millions of orders processed",
      color: "#FF6B9D",
      bgColor: "#FFE0EB",
    },
    {
      name: "Integration Platform",
      icon: "🔗",
      description: "200+ integrations across loyalty, CRM, ERP, delivery, payments, and SAP.",
      highlight: "200+ live integrations",
      color: "#7C3AED",
      bgColor: "#EDE9FE",
    },
    {
      name: "QR Ordering",
      icon: "📱",
      description: "Guests browse menu, order, and pay without calling a waiter. 3-tap flow.",
      highlight: "20,000+ orders/day",
      color: "#06B6D4",
      bgColor: "#E0F7FA",
    },
    {
      name: "Website Ordering",
      icon: "🌐",
      description: "Restaurants take Delivery and Pickup orders without aggregators.",
      highlight: "Direct ordering, zero commission",
      color: "#10B981",
      bgColor: "#D1FAE5",
    },
    {
      name: "Enterprise API",
      icon: "🏢",
      description: "Custom API solutions for enterprise clients. SAP, analytics, delivery.",
      highlight: "Onboarding: 4 weeks → 1.5 weeks",
      color: "#EF4444",
      bgColor: "#FEE2E2",
    },
  ];

  return (
    <section id="products" className="py-12 md:py-20 px-4">
      {/* Section header */}
      <div className="text-center mb-8 md:mb-16">
        <div className="inline-block px-4 md:px-6 py-2 bg-[#1a1a2e] text-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-full mb-4">
          <span className="font-pixel text-[10px] md:text-xs">INVENTORY</span>
        </div>
        <h2 className="text-2xl md:text-5xl font-bold text-[#1a1a2e] px-4">
          Products <span className="px-2 py-1 bg-[#10B981] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-lg inline-block">Owned</span>
        </h2>
        <p className="hidden md:block mt-4 text-lg text-[#1a1a2e]/70 max-w-xl mx-auto">
          The arsenal of products built and managed at Petpooja
        </p>
        <p className="md:hidden mt-2 text-xs text-[#1a1a2e]/60 px-4">
          Tap a chest to reveal what's inside!
        </p>
      </div>

      {/* Mobile: Treasure Chest Grid */}
      <div className="md:hidden max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {products.map((product, idx) => {
            const isActive = activeProduct === idx;
            return (
              <button
                key={idx}
                className="cursor-pointer transition-all duration-300 active:scale-[0.97] bg-transparent border-0 p-0 text-left w-full"
                onClick={() => setActiveProduct(isActive ? null : idx)}
                type="button"
              >
                <div
                  className={`relative border-[3px] border-[#1a1a2e] rounded-2xl p-3 text-center transition-all duration-300 ${
                    isActive ? "shadow-[6px_6px_0px_#1a1a2e]" : "shadow-[4px_4px_0px_#1a1a2e]"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${product.bgColor}, white)`,
                  }}
                >
                  {/* Sparkle */}
                  <div className="absolute top-1 right-1 text-[10px] animate-gem-shine" style={{ animationDelay: `${idx * 0.4}s` }}>
                    ✨
                  </div>

                  {/* Icon */}
                  <div className="text-3xl mb-2 transition-transform duration-300">
                    {isActive ? "🎁" : "📦"}
                  </div>

                  {/* Name */}
                  <h3 className="text-[11px] font-bold text-[#1a1a2e] leading-tight">{product.name}</h3>

                  {/* Status badge */}
                  <div className="mt-1.5">
                    <span
                      className="inline-block px-1.5 py-0.5 border-[2px] border-[#1a1a2e] rounded-full text-[7px] font-bold text-white"
                      style={{ backgroundColor: product.color }}
                    >
                      {isActive ? "OPENED!" : "TAP ME"}
                    </span>
                  </div>

                  {/* Revealed content */}
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-[250px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <div className="p-2 bg-white border-[2px] border-[#1a1a2e] rounded-xl text-left">
                      <p className="text-[10px] text-[#1a1a2e]/70 leading-tight mb-1.5">{product.description}</p>
                      <div className="flex items-start gap-1">
                        <span className="text-yellow-500 text-[10px] shrink-0 mt-px">⭐</span>
                        <span className="text-[9px] font-bold text-[#1a1a2e] leading-tight">{product.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stats banner - mobile */}
        <div className="mt-6 border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl p-4 bg-[#1a1a2e]">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-2 bg-white/5 rounded-xl border-[2px] border-white/10">
              <p className="font-pixel text-sm text-[#FF6B9D]">10K+</p>
              <p className="text-[9px] text-white/70 mt-0.5">Merchants</p>
            </div>
            <div className="p-2 bg-white/5 rounded-xl border-[2px] border-white/10">
              <p className="font-pixel text-sm text-[#F59E0B]">200+</p>
              <p className="text-[9px] text-white/70 mt-0.5">Integrations</p>
            </div>
            <div className="p-2 bg-white/5 rounded-xl border-[2px] border-white/10">
              <p className="font-pixel text-sm text-[#06B6D4]">20K+</p>
              <p className="text-[9px] text-white/70 mt-0.5">Orders/Day</p>
            </div>
            <div className="p-2 bg-white/5 rounded-xl border-[2px] border-white/10">
              <p className="font-pixel text-sm text-[#10B981]">80%</p>
              <p className="text-[9px] text-white/70 mt-0.5">Time Saved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:block max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, idx) => (
          <div
            key={idx}
            className={`border-[3px] border-[#1a1a2e] rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
              activeProduct === idx ? "shadow-[6px_6px_0px_#1a1a2e] scale-[1.02]" : "shadow-[4px_4px_0px_#1a1a2e] hover:shadow-[5px_5px_0px_#1a1a2e]"
            }`}
            style={{ backgroundColor: product.bgColor }}
            onClick={() => setActiveProduct(activeProduct === idx ? null : idx)}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className="w-12 h-12 border-[3px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: "white" }}
              >
                {product.icon}
              </div>
              <div
                className="px-2 py-1 border-[2px] border-[#1a1a2e] shadow-[2px_2px_0px_#1a1a2e] rounded-full font-pixel text-[9px]"
                style={{ backgroundColor: product.color, color: "white" }}
              >
                ACTIVE
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{product.name}</h3>
            <p className="text-sm text-[#1a1a2e]/70 mb-3 leading-relaxed">{product.description}</p>
            {activeProduct === idx && (
              <div
                className="mt-3 p-3 border-[2px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] rounded-xl animate-slide-up"
                style={{ backgroundColor: "white" }}
              >
                <p className="font-pixel text-[10px] text-[#1a1a2e] mb-1">⭐ HIGHLIGHT</p>
                <p className="text-sm font-bold text-[#1a1a2e]">{product.highlight}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Stats banner */}
      <div className="hidden md:block max-w-4xl mx-auto mt-12">
        <div className="border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl p-6 bg-[#1a1a2e]">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-pixel text-xl text-[#FF6B9D]">10K+</p>
              <p className="text-xs text-white/70 mt-1">Merchants</p>
            </div>
            <div>
              <p className="font-pixel text-xl text-[#F59E0B]">200+</p>
              <p className="text-xs text-white/70 mt-1">Integrations</p>
            </div>
            <div>
              <p className="font-pixel text-xl text-[#06B6D4]">20K+</p>
              <p className="text-xs text-white/70 mt-1">Orders/Day</p>
            </div>
            <div>
              <p className="font-pixel text-xl text-[#10B981]">80%</p>
              <p className="text-xs text-white/70 mt-1">Time Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
