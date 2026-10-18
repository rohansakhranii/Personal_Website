import { useState, useEffect, useRef, useCallback } from "react";
import { careerLevels, Level } from "../data/careerData";
import LevelModal from "./LevelModal";

interface StorySlide {
  title: string;
  content: string;
  type: "intro" | "achievement" | "skill" | "stats";
  icon?: string;
}

function getStorySlides(level: Level): StorySlide[] {
  const slides: StorySlide[] = [
    {
      title: level.title,
      content: level.description,
      type: "intro",
      icon: level.icon,
    },
  ];

  const mid = Math.ceil(level.achievements.length / 2);
  slides.push({
    title: "🏆 Key Achievements",
    content: level.achievements.slice(0, mid).join("\n• "),
    type: "achievement",
  });
  if (level.achievements.length > mid) {
    slides.push({
      title: "🏆 More Wins",
      content: level.achievements.slice(mid).join("\n• "),
      type: "achievement",
    });
  }

  slides.push({
    title: "⚔️ Skills Unlocked",
    content: level.skills.join(" · "),
    type: "skill",
  });

  slides.push({
    title: "📊 Impact",
    content: `${level.role} at ${level.company}\n${level.period}\nXP Earned: ${level.xp}`,
    type: "stats",
  });

  return slides;
}

export default function GamePath() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  // Instagram Stories state
  const [storyLevel, setStoryLevel] = useState<Level | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Use refs to avoid stale closures in interval
  const currentSlideRef = useRef(0);
  const storyLevelRef = useRef<Level | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    storyLevelRef.current = storyLevel;
  }, [storyLevel]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const SLIDE_DURATION = 4000;

  // Lock body scroll when story is open
  useEffect(() => {
    if (storyLevel) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [storyLevel]);

  const goToNextSlide = useCallback(() => {
    const level = storyLevelRef.current;
    if (!level) return;
    const slides = getStorySlides(level);
    const nextSlide = currentSlideRef.current + 1;
    if (nextSlide < slides.length) {
      setCurrentSlide(nextSlide);
      setProgress(0);
    } else {
      setStoryLevel(null);
      setCurrentSlide(0);
      setProgress(0);
    }
  }, []);

  useEffect(() => {
    if (!storyLevel || isPaused) return;

    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      setProgress((prev) => {
        const increment = 100 / (SLIDE_DURATION / 50);
        const next = prev + increment;
        if (next >= 100) {
          // Use setTimeout to avoid state update during render
          setTimeout(() => goToNextSlide(), 0);
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [storyLevel, isPaused, goToNextSlide]);

  const openStory = (level: Level) => {
    setStoryLevel(level);
    setCurrentSlide(0);
    setProgress(0);
    setIsPaused(false);
  };

  const closeStory = () => {
    setStoryLevel(null);
    setCurrentSlide(0);
    setProgress(0);
    setIsPaused(false);
  };

  const handleStoryTap = (side: "left" | "right") => {
    const level = storyLevelRef.current;
    if (!level) return;
    const slides = getStorySlides(level);

    if (side === "left") {
      if (currentSlideRef.current > 0) {
        setCurrentSlide(currentSlideRef.current - 1);
        setProgress(0);
      }
    } else {
      if (currentSlideRef.current < slides.length - 1) {
        setCurrentSlide(currentSlideRef.current + 1);
        setProgress(0);
      } else {
        closeStory();
      }
    }
  };

  const togglePause = () => {
    setIsPaused((p) => !p);
  };

  return (
    <section id="game-map" className="relative py-12 md:py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-50" />
      <div className="hidden md:block absolute top-20 left-5 text-5xl opacity-10 animate-float">🎮</div>
      <div className="hidden md:block absolute top-60 right-10 text-4xl opacity-10 animate-float" style={{ animationDelay: "1s" }}>🕹️</div>
      <div className="hidden md:block absolute bottom-40 left-10 text-4xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>🏆</div>
      <div className="hidden md:block absolute bottom-20 right-5 text-5xl opacity-10 animate-float" style={{ animationDelay: "0.5s" }}>⭐</div>

      {/* Section header */}
      <div className="text-center mb-8 md:mb-16 relative z-10">
        <div className="inline-block px-4 md:px-6 py-2 bg-[#1a1a2e] text-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-full mb-4">
          <span className="font-pixel text-[10px] md:text-xs">🗺️ CAREER MAP</span>
        </div>
        <h2 className="text-3xl md:text-6xl font-bold text-[#1a1a2e] px-4">
          The <span className="px-2 md:px-3 py-1 bg-[#FF6B9D] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-lg inline-block rotate-[-2deg]">Journey</span>
        </h2>
        <p className="hidden md:block mt-4 text-lg text-[#1a1a2e]/70 max-w-xl mx-auto">
          Click on each level to explore quest details and achievements unlocked!
        </p>
        <p className="md:hidden mt-2 text-xs text-[#1a1a2e]/60 px-4">
          Tap a story to view the journey!
        </p>
      </div>

      {/* ============ MOBILE: INSTAGRAM STORIES ============ */}
      <div className="md:hidden relative z-10">
        {/* Stories row */}
        <div className="flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-hide">
          {careerLevels.map((level) => (
            <button
              key={level.id}
              className="flex-shrink-0 cursor-pointer active:scale-95 transition-transform bg-transparent border-0 p-0"
              onClick={() => openStory(level)}
              type="button"
            >
              <div className="w-[72px] h-[72px] rounded-full p-[3px] bg-gradient-to-tr from-[#FF6B9D] via-[#7C3AED] to-[#F59E0B]">
                <div className="w-full h-full rounded-full border-[3px] border-white flex items-center justify-center"
                  style={{ backgroundColor: level.bgColor }}>
                  <span className="text-2xl">{level.icon}</span>
                </div>
              </div>
              <p className="text-center text-[9px] font-bold text-[#1a1a2e] mt-1 truncate w-[72px]">
                {level.role.split(" ")[0]}
              </p>
            </button>
          ))}
        </div>

        {/* Level cards below */}
        <div className="mt-6 space-y-3">
          {careerLevels.map((level) => (
            <button
              key={level.id}
              className="w-full text-left border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-2xl p-4 cursor-pointer active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all bg-transparent"
              style={{ backgroundColor: level.bgColor }}
              onClick={() => openStory(level)}
              type="button"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-[3px] border-[#1a1a2e] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: level.color }}>
                  <span className="text-white font-bold text-sm">{level.id}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[#1a1a2e] truncate">{level.role}</h3>
                  <p className="text-[10px] text-[#1a1a2e]/60 truncate">{level.company}</p>
                  <p className="text-[9px] text-[#1a1a2e]/40 mt-0.5">{level.period}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-pixel text-[8px] text-[#1a1a2e]/50 block">VIEW</span>
                  <div className="text-lg text-[#1a1a2e]/40">▶</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ============ DESKTOP: ZIGZAG PATH ============ */}
      <div className="hidden md:block relative max-w-5xl mx-auto z-10">
        <div className="relative z-10">
          {careerLevels.map((level, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={level.id} className="relative mb-16">
                {index < careerLevels.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-16 border-l-4 border-dashed border-[#1a1a2e]/20 z-0" />
                )}
                <div className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"} items-center gap-8`}>
                  <div
                    className={`w-[400px] cursor-pointer transition-all duration-300 ${
                      hoveredLevel === level.id ? "scale-[1.03] -translate-y-1" : ""
                    }`}
                    onClick={() => setSelectedLevel(level)}
                    onMouseEnter={() => setHoveredLevel(level.id)}
                    onMouseLeave={() => setHoveredLevel(null)}
                  >
                    <div
                      className="border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl p-5 transition-all duration-200 relative overflow-hidden"
                      style={{ backgroundColor: level.bgColor }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-10"
                        style={{ background: `radial-gradient(circle, ${level.color} 2px, transparent 2px)`, backgroundSize: "8px 8px" }} />
                      <div className="flex items-center justify-between mb-3">
                        <div className="px-3 py-1 border-[2px] border-[#1a1a2e] shadow-[2px_2px_0px_#1a1a2e] rounded-full font-pixel text-[10px]"
                          style={{ backgroundColor: level.color, color: "white" }}>
                          {level.title}
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-white border-[2px] border-[#1a1a2e] rounded-full">
                          <span className="text-green-500 text-sm">✓</span>
                          <span className="font-pixel text-[9px] text-[#1a1a2e]">CLEARED</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl flex items-center justify-center text-3xl shrink-0"
                          style={{ backgroundColor: "white" }}>
                          {level.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#1a1a2e]">{level.role}</h3>
                          <p className="text-sm text-[#1a1a2e]/70 font-medium">{level.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm">📅</span>
                        <span className="text-sm font-medium text-[#1a1a2e]/80">{level.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-pixel text-[10px] text-[#1a1a2e]">XP</span>
                        <div className="flex-1 h-3 bg-white border-[2px] border-[#1a1a2e] rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${(level.xp / 5000) * 100}%`, backgroundColor: level.color }} />
                        </div>
                        <span className="font-pixel text-[10px] text-[#1a1a2e]">{level.xp}</span>
                      </div>
                      <div className="mt-3 text-center">
                        <span className="font-pixel text-[10px] text-[#1a1a2e]/50 animate-pulse">[ CLICK TO EXPLORE ]</span>
                      </div>
                    </div>
                    {hoveredLevel === level.id && (
                      <div className="absolute -top-3 -right-3 text-2xl animate-bounce z-20">⭐</div>
                    )}
                  </div>
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-full flex items-center justify-center text-2xl transition-all duration-300"
                      style={{ backgroundColor: level.color, transform: hoveredLevel === level.id ? "scale(1.2)" : "scale(1)" }}>
                      <span className="text-white font-bold text-lg">{level.id}</span>
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: level.color }} />
                  </div>
                  <div className="w-[400px]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Final destination */}
        <div className="mt-12 text-center relative z-10">
          <div className="inline-block animate-float">
            <div className="px-8 py-5 bg-gradient-to-r from-[#FF6B9D] via-[#7C3AED] to-[#F59E0B] border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl">
              <p className="font-pixel text-[10px] text-white/80 mb-2">🏁 CURRENT POSITION</p>
              <p className="text-xl md:text-2xl font-bold text-white">🚀 Product Manager @ Petpooja</p>
              <p className="text-sm text-white/80 mt-1">Building the future of restaurant tech</p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-pixel text-[9px] text-white">LEVELING UP...</span>
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ INSTAGRAM STORIES MODAL (Mobile) ============ */}
      {storyLevel && (
        <div
          className="md:hidden fixed inset-0 z-[100] bg-black"
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Progress bars */}
          <div className="absolute top-[env(safe-area-inset-top)] left-0 right-0 z-30 pt-2 px-3 flex gap-1">
            {getStorySlides(storyLevel).map((_, i) => (
              <div key={i} className="flex-1 h-[3px] bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: i < currentSlide ? "100%" : i === currentSlide ? `${progress}%` : "0%",
                    transition: i === currentSlide ? "none" : "width 0.2s ease",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div
            className="absolute left-0 right-0 z-30 px-4 flex items-center justify-between"
            style={{ top: "calc(env(safe-area-inset-top) + 20px)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border-[2px] border-white flex items-center justify-center text-base"
                style={{ backgroundColor: storyLevel.bgColor }}>
                {storyLevel.icon}
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">{storyLevel.role}</p>
                <p className="text-white/60 text-[10px]">{storyLevel.period}</p>
              </div>
            </div>
            <button
              onClick={closeStory}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Close story"
              type="button"
            >
              <span className="text-white text-xl font-bold">✕</span>
            </button>
          </div>

          {/* Story background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${storyLevel.color}, ${storyLevel.bgColor})`,
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          />

          {/* Tap zones - positioned to NOT overlap with center pause area */}
          <button
            className="absolute left-0 top-20 bottom-0 w-[30%] z-20 bg-transparent border-0 cursor-pointer"
            onClick={() => handleStoryTap("left")}
            aria-label="Previous slide"
            type="button"
          />
          <button
            className="absolute right-0 top-20 bottom-0 w-[30%] z-20 bg-transparent border-0 cursor-pointer"
            onClick={() => handleStoryTap("right")}
            aria-label="Next slide"
            type="button"
          />
          {/* Center pause zone */}
          <button
            className="absolute left-[30%] right-[30%] top-20 bottom-0 z-20 bg-transparent border-0 cursor-pointer"
            onClick={togglePause}
            aria-label={isPaused ? "Resume" : "Pause"}
            type="button"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 pt-28 pb-16 z-10 pointer-events-none">
            <div className="text-center max-w-[85vw] w-full overflow-y-auto max-h-[60vh]">
              {(() => {
                const slides = getStorySlides(storyLevel);
                const slide = slides[currentSlide];
                if (!slide) return null;

                if (slide.type === "intro") {
                  return (
                    <>
                      <div className="text-5xl mb-4">{slide.icon}</div>
                      <h2 className="text-xl font-bold text-white mb-3 drop-shadow-lg">{slide.title}</h2>
                      <p className="text-white/90 text-sm leading-relaxed drop-shadow">{slide.content}</p>
                    </>
                  );
                } else if (slide.type === "achievement") {
                  return (
                    <>
                      <h2 className="text-lg font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                      <div className="text-left space-y-2">
                        {slide.content.split("\n").filter(Boolean).map((line, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-yellow-300 text-sm mt-0.5 shrink-0">•</span>
                            <span className="text-white/90 text-xs leading-relaxed drop-shadow">{line}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                } else if (slide.type === "skill") {
                  return (
                    <>
                      <h2 className="text-lg font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {slide.content.split(" · ").map((skill, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white/20 border-[2px] border-white/60 rounded-full text-white text-[11px] font-bold drop-shadow">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <h2 className="text-lg font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                      <div className="space-y-2">
                        {slide.content.split("\n").map((line, i) => (
                          <p key={i} className="text-white/90 text-sm drop-shadow">{line}</p>
                        ))}
                      </div>
                    </>
                  );
                }
              })()}
            </div>
          </div>

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">⏸</span>
              </div>
            </div>
          )}

          {/* Slide counter */}
          <div
            className="absolute bottom-4 left-0 right-0 z-30 text-center pointer-events-none"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 8px)" }}
          >
            <span className="font-pixel text-[9px] text-white/50">
              {currentSlide + 1} / {getStorySlides(storyLevel).length}
            </span>
          </div>
        </div>
      )}

      {/* Desktop Modal */}
      {selectedLevel && (
        <LevelModal level={selectedLevel} onClose={() => setSelectedLevel(null)} />
      )}
    </section>
  );
}
