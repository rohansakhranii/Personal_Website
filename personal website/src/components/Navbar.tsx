import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { label: "MAP", href: "#game-map", icon: "🗺️" },
    { label: "SKILLS", href: "#skills", icon: "⚔️" },
    { label: "PRODUCTS", href: "#products", icon: "📦" },
    { label: "CONTACT", href: "#contact", icon: "📧" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Small delay to let menu close animation start
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF8E7]/95 backdrop-blur-sm border-b-[3px] border-[#1a1a2e] py-2"
            : "bg-transparent py-3 md:py-4"
        }`}
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-[#7C3AED] border-[3px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-lg">R</span>
            </div>
            <span className="font-pixel text-[10px] md:text-xs text-[#1a1a2e] hidden sm:block">ROHAN</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-[#1a1a2e] hover:bg-[#EDE9FE] border-[3px] border-[#1a1a2e] rounded-lg transition-all hover:shadow-[4px_4px_0px_#1a1a2e]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-11 h-11 bg-[#FF6B9D] border-[3px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] rounded-lg flex items-center justify-center active:shadow-[1px_1px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 w-full h-[2px] bg-[#1a1a2e] rounded-full transition-all duration-300 ease-in-out ${
                  menuOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] w-full h-[2px] bg-[#1a1a2e] rounded-full transition-all duration-200 ease-in-out ${
                  menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[2px] bg-[#1a1a2e] rounded-full transition-all duration-300 ease-in-out ${
                  menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-[#FFF8E7] overflow-y-auto"
          style={{
            paddingTop: "calc(4rem + env(safe-area-inset-top))",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          {/* Menu items */}
          <div className="px-6 space-y-3">
            {navItems.map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-4 p-4 bg-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl active:shadow-[2px_2px_0px_#1a1a2e] active:translate-x-[2px] active:translate-y-[2px] transition-all text-left"
                onClick={() => handleNavClick(item.href)}
                style={{
                  animation: `slide-up 0.3s ease-out ${i * 0.05}s both`,
                }}
                type="button"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-pixel text-sm text-[#1a1a2e]">{item.label}</span>
                <span className="ml-auto text-[#1a1a2e]/30">→</span>
              </button>
            ))}
          </div>

          {/* Decorative footer */}
          <div className="absolute bottom-8 left-0 right-0 text-center px-6">
            <p className="font-pixel text-[9px] text-[#1a1a2e]/30">TAP TO NAVIGATE</p>
          </div>
        </div>
      )}
    </>
  );
}
