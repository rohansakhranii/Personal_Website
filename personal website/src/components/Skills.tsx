export default function Skills() {
  const skillCategories = [
    {
      title: "Product Management",
      icon: "🎯",
      color: "#F59E0B",
      bgColor: "#FEF3C7",
      skills: [
        "Product Strategy", "Product Lifecycle", "PRD & BRD", "Roadmap Planning",
        "GTM Strategy", "Stakeholder Mgmt", "User Research", "Product Analytics",
        "A/B Testing", "Agile", "Scrum",
      ],
    },
    {
      title: "Technical",
      icon: "⚙️",
      color: "#7C3AED",
      bgColor: "#EDE9FE",
      skills: [
        "REST APIs", "System Design", "ETL Pipelines", "Database Design",
        "RDBMS", "NoSQL", "API Architecture", "Backend Systems", "Cloud",
      ],
    },
    {
      title: "Data & Analytics",
      icon: "📊",
      color: "#06B6D4",
      bgColor: "#E0F7FA",
      skills: [
        "SQL", "Excel", "Tableau", "Looker Studio", "Data Visualization",
        "KPI Design", "Business Analytics", "Dashboards",
      ],
    },
    {
      title: "AI & Automation",
      icon: "🤖",
      color: "#10B981",
      bgColor: "#D1FAE5",
      skills: [
        "Process Automation", "LLM Fundamentals", "AI Products", "Claude",
        "Cursor", "Windsurf", "Hugging Face", "OpenAI", "Fine-tuning", "RAG",
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 pixel-grid">
      {/* Section header */}
      <div className="text-center mb-8 md:mb-16">
        <div className="inline-block px-4 md:px-6 py-2 bg-[#1a1a2e] text-white border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-full mb-4">
          <span className="font-pixel text-[10px] md:text-xs">SKILL TREE</span>
        </div>
        <h2 className="text-2xl md:text-5xl font-bold text-[#1a1a2e] px-4">
          Skills <span className="px-2 py-1 bg-[#06B6D4] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-lg inline-block">Unlocked</span>
        </h2>
        <p className="hidden md:block mt-4 text-lg text-[#1a1a2e]/70 max-w-xl mx-auto">
          The complete arsenal built across 4+ years of climbing the ladder
        </p>
      </div>

      {/* Mobile: Game Inventory style */}
      <div className="md:hidden max-w-md mx-auto space-y-3">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-2xl overflow-hidden"
            style={{ backgroundColor: category.bgColor }}
          >
            {/* Category header */}
            <div
              className="p-3 flex items-center gap-2 border-b-[3px] border-[#1a1a2e]"
              style={{ backgroundColor: category.color }}
            >
              <span className="text-xl">{category.icon}</span>
              <h3 className="text-sm font-bold text-white flex-1">{category.title}</h3>
              <span className="font-pixel text-[8px] text-white/80 bg-white/20 px-2 py-0.5 rounded-full">
                {category.skills.length}
              </span>
            </div>

            {/* Skills grid */}
            <div className="p-3">
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] font-bold border-[2px] border-[#1a1a2e] rounded-lg bg-white text-[#1a1a2e] active:scale-95 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Education badge */}
        <div className="border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-2xl p-4 bg-white text-center">
          <div className="text-3xl mb-2">🎓</div>
          <h3 className="text-sm font-bold text-[#1a1a2e] mb-1">B.Tech — Computer Science</h3>
          <p className="text-[10px] text-[#1a1a2e]/70">Gujarat Technological University</p>
          <div className="mt-2 inline-block px-3 py-1 bg-[#10B981] border-[2px] border-[#1a1a2e] shadow-[2px_2px_0px_#1a1a2e] rounded-full">
            <span className="font-pixel text-[9px] text-white">CGPA: 9.15 / 10.0</span>
          </div>
          <p className="mt-2 text-[9px] text-[#1a1a2e]/60">
            DSA · DBMS · System Design · Python · Mathematics
          </p>
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:block max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: category.bgColor }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 border-[3px] border-[#1a1a2e] shadow-[4px_4px_0px_#1a1a2e] rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e]">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-bold border-[2px] border-[#1a1a2e] rounded-lg bg-white text-[#1a1a2e] hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Education */}
      <div className="hidden md:block max-w-2xl mx-auto mt-12">
        <div className="border-[3px] border-[#1a1a2e] shadow-[6px_6px_0px_#1a1a2e] rounded-2xl p-6 bg-white text-center">
          <div className="text-4xl mb-3">🎓</div>
          <h3 className="text-xl font-bold text-[#1a1a2e] mb-1">B.Tech — Computer Science</h3>
          <p className="text-[#1a1a2e]/70">Gujarat Technological University</p>
          <div className="mt-3 inline-block px-4 py-2 bg-[#10B981] border-[2px] border-[#1a1a2e] shadow-[3px_3px_0px_#1a1a2e] rounded-full">
            <span className="font-pixel text-xs text-white">CGPA: 9.15 / 10.0</span>
          </div>
          <p className="mt-3 text-sm text-[#1a1a2e]/60">
            DSA · DBMS · System Design · Python · Mathematics
          </p>
        </div>
      </div>
    </section>
  );
}
