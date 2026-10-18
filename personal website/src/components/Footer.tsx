import { personalInfo } from "../data/careerData";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12 md:py-16 px-4 bg-[#1a1a2e] overflow-hidden" style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom))" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B9D] via-[#7C3AED] via-[#06B6D4] to-[#10B981]" />
      <div className="hidden md:block absolute top-10 right-10 text-4xl opacity-20 animate-float">🎮</div>
      <div className="hidden md:block absolute bottom-10 left-10 text-4xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🕹️</div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Mobile */}
        <div className="md:hidden">
          <div className="inline-block px-4 py-2 bg-[#FF6B9D] border-[3px] border-white/20 rounded-full mb-4">
            <span className="font-pixel text-[10px] text-white">GAME ON!</span>
          </div>

          <h2 className="text-xl font-bold text-white mb-2 px-4">
            Let's Build Something <span className="text-[#F59E0B]">Amazing</span>
          </h2>
          <p className="text-xs text-white/70 mb-6 px-4">
            Open to product strategy, tech collabs, or restaurant tech chats!
          </p>

          {/* Contact buttons */}
          <div className="space-y-3 px-4 mb-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="block w-full px-4 py-3 bg-[#7C3AED] text-white border-[3px] border-white/20 shadow-[4px_4px_0px_rgba(255,255,255,0.2)] rounded-xl font-medium text-sm active:shadow-[2px_2px_0px_rgba(255,255,255,0.2)] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              📧 {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="block w-full px-4 py-3 bg-[#06B6D4] text-white border-[3px] border-white/20 shadow-[4px_4px_0px_rgba(255,255,255,0.2)] rounded-xl font-medium text-sm active:shadow-[2px_2px_0px_rgba(255,255,255,0.2)] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              📱 {personalInfo.phone}
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-white/60 mb-6">
            <span className="text-sm">📍</span>
            <span className="text-xs">{personalInfo.location}</span>
          </div>

          {/* Footer info */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="font-pixel text-[8px] text-white/40">BUILT WITH</span>
              <span className="text-red-400 animate-pulse text-sm">❤️</span>
              <span className="font-pixel text-[8px] text-white/40">& REACT</span>
            </div>
            <p className="font-pixel text-[7px] text-white/30">
              © 2024 ROHAN SAKHRANI
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="inline-block px-6 py-2 bg-[#FF6B9D] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-full mb-6">
            <span className="font-pixel text-xs text-white">GAME ON</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Build Something <span className="text-[#F59E0B]">Amazing</span>
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-lg mx-auto">
            Always open to discussing product strategy, tech collaborations, or just chatting about restaurant tech!
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-3 bg-[#7C3AED] text-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl flex items-center gap-2 font-medium active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              <span>📧</span>
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="px-5 py-3 bg-[#06B6D4] text-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl flex items-center gap-2 font-medium active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              <span>📱</span>
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/60 mb-8">
            <span>📍</span>
            <span>{personalInfo.location}</span>
          </div>

          <div className="w-full h-px bg-white/10 mb-6" />

          <div className="flex items-center justify-between">
            <p className="font-pixel text-[10px] text-white/40">
              © 2024 ROHAN SAKHRANI
            </p>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-white/40">BUILT WITH</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span className="font-pixel text-[10px] text-white/40">& REACT</span>
            </div>
            <p className="font-pixel text-[10px] text-white/40">
              PRESS START TO CONTINUE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
