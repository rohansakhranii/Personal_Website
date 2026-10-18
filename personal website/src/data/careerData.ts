export interface Level {
  id: number;
  title: string;
  role: string;
  company: string;
  period: string;
  xp: number;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  achievements: string[];
  description: string;
  skills: string[];
  unlocked: boolean;
}

export const careerLevels: Level[] = [
  {
    id: 1,
    title: "Level 1",
    role: "Data Analyst",
    company: "APC Infosoft",
    period: "Oct 2020 – Mar 2021",
    xp: 1000,
    color: "#FF6B9D",
    bgColor: "#FFE0EB",
    borderColor: "#FF6B9D",
    icon: "📊",
    description: "Started the journey analyzing sales and consumption data for corporate clients across F&B, import/export, and IT industries. Built dashboards and wrote SQL queries for 20+ client accounts.",
    achievements: [
      "Worked on sales and consumption data for corporate clients across different industries",
      "Built dashboards and reports in Tableau and Excel for internal stakeholders",
      "Wrote SQL queries for data extraction, transformation, and reporting across 20+ client accounts",
      "Helped design ETL workflows for data cleaning and ingestion"
    ],
    skills: ["SQL", "Tableau", "Excel", "ETL", "Data Visualization"],
    unlocked: true,
  },
  {
    id: 2,
    title: "Level 2",
    role: "Business Analyst",
    company: "Electromed Sales & Services",
    period: "Mar 2021 – Aug 2022",
    xp: 2500,
    color: "#7C3AED",
    bgColor: "#EDE9FE",
    borderColor: "#7C3AED",
    icon: "📋",
    description: "Leveled up to managing 8 healthcare tech projects. Built a Requirements Dashboard that cut scope changes dramatically and improved dev flow by ~70%.",
    achievements: [
      "Managed 8 healthcare tech projects — all delivered on time",
      "Built a Requirements Dashboard where clients could submit and track requirements — cut scope changes significantly",
      "Improved development flow by ~70%",
      "Wrote BRDs and FRDs, handled communication between clients and dev teams",
      "Redesigned internal processes — team productivity went up by ~25%"
    ],
    skills: ["BRD/FRD", "Requirements Analysis", "Stakeholder Management", "Process Design", "Project Tracking"],
    unlocked: true,
  },
  {
    id: 3,
    title: "Level 3",
    role: "Project Manager",
    company: "Samcom Technobrains",
    period: "Mar 2023 – May 2023",
    xp: 3500,
    color: "#06B6D4",
    bgColor: "#E0F7FA",
    borderColor: "#06B6D4",
    icon: "🎯",
    description: "Handled 3 enterprise projects covering UX, DB design, and backend. Kept clients and dev teams aligned so things didn't get stuck.",
    achievements: [
      "Handled 3 enterprise projects — covered UX, DB design, and backend",
      "All projects delivered on time",
      "Kept clients and dev teams talking so things didn't get stuck",
      "Managed cross-functional coordination"
    ],
    skills: ["Project Management", "Cross-functional Leadership", "Client Communication", "UX Coordination", "Agile"],
    unlocked: true,
  },
  {
    id: 4,
    title: "Level 4",
    role: "Product Manager",
    company: "Petpooja",
    period: "Nov 2023 – Present",
    xp: 5000,
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    borderColor: "#F59E0B",
    icon: "🚀",
    description: "Currently handling multiple products at Petpooja — India's leading restaurant POS — covering Online Ordering, Reconciliation, Dine-in QR Ordering, Website Ordering, and an Integration Platform used by 10,000+ restaurants.",
    achievements: [
      "Managing roadmap for multiple restaurant tech products — 10,000+ merchants",
      "Built a reconciliation engine that catches payout mismatches",
      "Running an integration platform with 200+ live integrations",
      "Designed API-first architecture — cut onboarding effort significantly",
      "Led QR Ordering Platform — 20,000+ orders/day, 3-tap flow",
      "Cut partner onboarding from 4 weeks to 1.5 weeks",
      "Reduced engineering time per integration by 80%",
      "Built AI workflows to automate internal SOPs"
    ],
    skills: ["Product Strategy", "API Design", "System Design", "Roadmap Planning", "Stakeholder Management", "AI/ML", "SQL", "REST APIs"],
    unlocked: true,
  },
  {
    id: 5,
    title: "Side Quest",
    role: "Freelance PM & Data Analyst",
    company: "Self-Employed",
    period: "Feb 2022 – Present",
    xp: 3000,
    color: "#10B981",
    bgColor: "#D1FAE5",
    borderColor: "#10B981",
    icon: "⚡",
    description: "Completed 20+ analytics and product projects for startups and SMEs with 100% client retention. Built BI dashboards, full-stack web apps, and AI-assisted workflows.",
    achievements: [
      "20+ analytics and product projects — 100% retention",
      "Built BI dashboards in Tableau and Looker Studio",
      "Built web apps from scratch — scoping, backend, DB design, deployment",
      "Used AI to automate repetitive tasks and speed up delivery",
      "Worked directly with clients to understand needs and deliver solutions"
    ],
    skills: ["Full-stack Development", "Supabase", "SQL", "NoSQL", "BI Dashboards", "AI Automation"],
    unlocked: true,
  },
];

export const personalInfo = {
  name: "Rohan Sakhrani",
  title: "Product Manager",
  tagline: "Building B2B SaaS products in restaurant tech",
  location: "Ahmedabad, India",
  email: "rsrohansakhrani@gmail.com",
  phone: "+91 7801833215",
  education: {
    degree: "B.Tech — Computer Science",
    university: "Gujarat Technological University",
    cgpa: "9.15 / 10.0",
    year: "2021",
  },
  stats: {
    yearsExperience: "4+",
    productsOwned: "6+",
    integrations: "200+",
    merchantsServed: "10,000+",
    freelanceProjects: "20+",
    ordersPerDay: "20,000+",
  },
};
