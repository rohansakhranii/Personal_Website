import { useEffect } from "react";
import { Level } from "../data/careerData";

interface LevelModalProps {
  level: Level;
  onClose: () => void;
}

export default function LevelModal({ level, onClose }: LevelModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center modal-overlay"
      style={{ backgroundColor: "rgba(26, 26, 46, 0.7)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-auto md:max-w-2xl max-h-[92vh] md:max-h-[85vh] overflow-y-auto rounded-t-2xl md:rounded-2xl animate-slide-up overscroll-contain"
        style={{ backgroundColor: level.bgColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 p-4 md:p-6 border-b-[3px] border-[#1a1a2e]"
          style={{ backgroundColor: level.color }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 bg-white border-[3px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] rounded-lg flex items-center justify-center font-bold text-lg active:shadow-[1px_1px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>

          <div className="flex items-center gap-3 md:gap-4 pr-12">
            <div className="text-4xl md:text-5xl shrink-0">{level.icon}</div>
            <div className="min-w-0 flex-1">
              <p className="font-pixel text-[9px] md:text-xs text-white/80 mb-1">{level.title}</p>
              <h2 className="text-lg md:text-3xl font-bold text-white truncate">{level.role}</h2>
              <p className="text-sm md:text-base text-white/90 font-medium mt-0.5 truncate">{level.company}</p>
            </div>
          </div>

          {/* XP Bar */}
          <div className="mt-3 md:mt-4 flex items-center gap-2 md:gap-3">
            <span className="font-pixel text-[9px] md:text-xs text-white">XP</span>
            <div className="flex-1 h-3 md:h-4 bg-white/30 border-[2px] border-[#1a1a2e] rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-1000"
                style={{ width: `${(level.xp / 5000) * 100}%` }}
              />
            </div>
            <span className="font-pixel text-[9px] md:text-xs text-white">{level.xp}</span>
          </div>

          {/* Period */}
          <div className="mt-2 md:mt-3 inline-block px-2 md:px-3 py-1 bg-white/20 border-[2px] border-[#1a1a2e] rounded-full">
            <span className="font-pixel text-[8px] md:text-[10px] text-white">{level.period}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Description */}
          <div className="p-3 md:p-4 bg-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl">
            <h3 className="font-pixel text-[10px] md:text-xs text-[#1a1a2e] mb-2">📖 STORY</h3>
            <p className="text-sm md:text-base text-[#1a1a2e] font-medium leading-relaxed">{level.description}</p>
          </div>

          {/* Achievements */}
          <div className="p-3 md:p-4 bg-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl">
            <h3 className="font-pixel text-[10px] md:text-xs text-[#1a1a2e] mb-3">🏆 ACHIEVEMENTS</h3>
            <ul className="space-y-2">
              {level.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-base md:text-lg mt-0.5 shrink-0">★</span>
                  <span className="text-xs md:text-sm text-[#1a1a2e] font-medium leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="p-3 md:p-4 bg-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl">
            <h3 className="font-pixel text-[10px] md:text-xs text-[#1a1a2e] mb-3">⚔️ SKILLS UNLOCKED</h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {level.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold border-[2px] border-[#1a1a2e] rounded-full"
                  style={{
                    backgroundColor: level.bgColor,
                    color: "#1a1a2e",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 md:p-4 border-t-[3px] border-[#1a1a2e] flex justify-between items-center sticky bottom-0" style={{ backgroundColor: level.bgColor }}>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span>
            <span className="font-pixel text-[9px] md:text-xs text-[#1a1a2e]">COMPLETED</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 md:px-4 py-2 bg-[#1a1a2e] text-white font-bold text-sm border-[2px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] rounded-lg active:shadow-[1px_1px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            type="button"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
