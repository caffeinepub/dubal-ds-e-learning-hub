import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Category, B as BookOpen, Z as Zap, F as FileText, a as BrainCircuit, b as BookMarked, d as Calculator, L as Languages, N as Newspaper, T as Trophy, S as Shield } from "./index-D7Bnl27d.js";
import { B as Button } from "./button-BJmEzQ53.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CxZi-69v.js";
import { S as Sparkles } from "./sparkles-KSncGUP9.js";
import { S as Search } from "./search-CEPSlRzt.js";
import { C as CirclePlay } from "./circle-play-H9vlC4UT.js";
import "./index-DtTjcueB.js";
import "./index-DEsYGavB.js";
import "./index-DRAVMbBG.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
const categoryCards = [
  {
    id: Category.Class10,
    title: "CBSE Class 10",
    subtitle: "Board Exam Prep",
    description: "Science, Mathematics, Social Science, English & more. Complete syllabus with NCERT solutions.",
    subjects: ["Mathematics", "Science", "Social Science", "English"],
    color: "oklch(0.45 0.16 142)",
    colorLight: "oklch(0.62 0.14 142)",
    bgLight: "oklch(0.94 0.04 142)",
    borderColor: "oklch(0.74 0.10 142)",
    textDark: "oklch(0.22 0.14 142)",
    patternHue: "142",
    ocid: "home.class10.card"
  },
  {
    id: Category.Class12,
    title: "CBSE Class 12",
    subtitle: "Board Exam Prep",
    description: "Physics, Chemistry, Mathematics, Biology, Commerce & Humanities. Score 95+ with our resources.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.55 0.16 264)",
    bgLight: "oklch(0.92 0.05 264)",
    borderColor: "oklch(0.72 0.10 264)",
    textDark: "oklch(0.22 0.14 264)",
    patternHue: "264",
    ocid: "home.class12.card"
  },
  {
    id: Category.JEE,
    title: "JEE",
    subtitle: "IIT Entrance Exam",
    description: "JEE Main & Advanced preparation with chapter-wise practice, previous year papers and AI doubts.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    color: "oklch(0.50 0.19 30)",
    colorLight: "oklch(0.67 0.17 30)",
    bgLight: "oklch(0.94 0.05 30)",
    borderColor: "oklch(0.74 0.12 30)",
    textDark: "oklch(0.22 0.16 30)",
    patternHue: "30",
    ocid: "home.jee.card"
  },
  {
    id: Category.NEET,
    title: "NEET",
    subtitle: "Medical Entrance Exam",
    description: "Biology, Physics & Chemistry for NEET-UG. NCERT-based preparation with MCQ banks and mock tests.",
    subjects: ["Biology", "Physics", "Chemistry"],
    color: "oklch(0.44 0.17 335)",
    colorLight: "oklch(0.60 0.15 335)",
    bgLight: "oklch(0.93 0.05 335)",
    borderColor: "oklch(0.72 0.12 335)",
    textDark: "oklch(0.22 0.15 335)",
    patternHue: "335",
    ocid: "home.neet.card"
  }
];
const features = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7" }),
    title: "Complete Syllabus",
    desc: "Chapter-wise breakdown with direct NCERT PDF download links. All subjects covered for Class 10, 12, JEE and NEET.",
    color: "oklch(0.45 0.16 142)",
    colorBg: "oklch(0.90 0.06 142)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-7 h-7" }),
    title: "Question Papers",
    desc: "Previous year papers with detailed solutions from 2015 onwards. CBSE, JEE Main, JEE Advanced, and NEET papers.",
    color: "oklch(0.38 0.18 264)",
    colorBg: "oklch(0.90 0.06 264)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-7 h-7" }),
    title: "AI Doubt Solver",
    desc: "Get instant answers from our curated Q&A knowledge base with 3000+ solved questions across all subjects.",
    color: "oklch(0.44 0.17 335)",
    colorBg: "oklch(0.90 0.06 335)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { className: "w-7 h-7" }),
    title: "Subject Dictionary",
    desc: "Comprehensive English dictionary with Hindi meanings. 2000+ words — search any term instantly.",
    color: "oklch(0.50 0.19 30)",
    colorBg: "oklch(0.90 0.07 30)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "w-7 h-7" }),
    title: "Video Lessons",
    desc: "Chapter videos from Physics Wallah, Dear Sir, Vedantu, and Magnet Brains — top educators for every chapter.",
    color: "oklch(0.48 0.19 15)",
    colorBg: "oklch(0.90 0.06 15)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-7 h-7" }),
    title: "Scientific Calculator",
    desc: "Full scientific calculator with sin, cos, tan, sec, csc, cot, log, exp, and memory functions built-in.",
    color: "oklch(0.42 0.17 290)",
    colorBg: "oklch(0.90 0.06 290)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "w-7 h-7" }),
    title: "Language Translator",
    desc: "Translate study terms across 10 Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, and more.",
    color: "oklch(0.44 0.18 165)",
    colorBg: "oklch(0.90 0.06 165)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "w-7 h-7" }),
    title: "Daily News",
    desc: "Stay updated with live education news, current affairs, and exam notifications from top Indian news sources.",
    color: "oklch(0.48 0.19 15)",
    colorBg: "oklch(0.90 0.06 15)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-7 h-7" }),
    title: "Govt Exam Prep",
    desc: "UPSC, SSC CGL, BPSC, Loco Pilot, Bank PO, NDA, CDS — full syllabus and video lectures for all exams.",
    color: "oklch(0.50 0.19 52)",
    colorBg: "oklch(0.90 0.07 52)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-7 h-7" }),
    title: "SSB Preparation",
    desc: "Complete 5-day SSB process guide with psychology tests, GTO tasks, PI tips, and OLQ development strategies.",
    color: "oklch(0.38 0.18 264)",
    colorBg: "oklch(0.90 0.06 264)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-7 h-7" }),
    title: "Smart Notes",
    desc: "600+ word detailed notes for every chapter — theory, formulas, examples, and board exam tips included.",
    color: "oklch(0.62 0.18 52)",
    colorBg: "oklch(0.92 0.07 52)"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-7 h-7" }),
    title: "Chapter Q&A",
    desc: "20+ exam-style questions per chapter with detailed answers. Filter by class, subject, and chapter.",
    color: "oklch(0.44 0.17 335)",
    colorBg: "oklch(0.90 0.06 335)"
  }
];
const smartNoteTopics = [
  "Electricity",
  "Photosynthesis",
  "Nationalism in India",
  "The Last Lesson",
  "Polynomials",
  "Electrochemistry",
  "Cell Division",
  "Wave Optics"
];
const marqueeBadges = [
  "🎓 CBSE Aligned",
  "📄 NCERT PDFs",
  "🎥 Chapter Videos",
  "⚡ Smart Notes",
  "🧮 Scientific Calculator",
  "🌐 10 Indian Languages",
  "📰 Daily News",
  "🛡️ SSB Prep",
  "🏆 Govt Exams",
  "💯 100% Free",
  "📚 Class 10 & 12",
  "🔬 JEE & NEET",
  "🧠 AI Doubt Solver",
  "📖 Oxford Dictionary",
  "✅ Chapter Q&A"
];
const heroStats = [
  { label: "NCERT Chapters", value: 195, suffix: "+" },
  { label: "Exam Categories", value: 4, suffix: "" },
  { label: "Questions in Q&A", value: 3e3, suffix: "+" },
  { label: "Always Free", value: 100, suffix: "%" }
];
function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!start) return;
    let frame = 0;
    const totalFrames = Math.round(duration / 1e3 * 60);
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, 1e3 / 60);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}
function StatCounter({
  value,
  suffix,
  label,
  started
}) {
  const count = useCountUp(value, 1400, started);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "text-2xl md:text-3xl font-bold tabular-nums",
        style: { color: "oklch(0.85 0.18 52)" },
        children: [
          count.toLocaleString(),
          suffix
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs md:text-sm text-white/65 font-medium mt-0.5 text-center", children: label })
  ] });
}
function CategoryCard({
  card,
  idx,
  onClick
}) {
  const cardRef = reactExports.useRef(null);
  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = (y - cy) / cy * -8;
    const rotateY = (x - cx) / cx * 8;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
  };
  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
  };
  const handleMouseEnter = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.boxShadow = `0 12px 40px ${card.color.replace(")", " / 0.35)")}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      ref: cardRef,
      type: "button",
      "data-ocid": card.ocid,
      onClick,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter,
      className: "group relative rounded-2xl text-left cursor-pointer overflow-hidden stat-animate",
      style: {
        animationDelay: `${idx * 80}ms`,
        background: card.bgLight,
        border: `2px solid ${card.borderColor}`,
        transition: "transform 0.15s ease, box-shadow 0.2s ease",
        willChange: "transform"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.06] pointer-events-none",
            style: {
              backgroundImage: `radial-gradient(circle at 20% 20%, ${card.color} 1px, transparent 1px), radial-gradient(circle at 80% 80%, ${card.color} 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-1 rounded-t-2xl",
            style: {
              background: `linear-gradient(90deg, ${card.color}, ${card.colorLight})`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "inline-flex p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110",
              style: { background: `${card.color}22` },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg flex items-center justify-center",
                  style: {
                    background: `linear-gradient(135deg, ${card.color} 0%, ${card.colorLight} 100%)`
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-white" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-xs font-bold uppercase tracking-wider mb-1",
              style: { color: card.textDark },
              children: card.subtitle
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-bold text-xl mb-2",
              style: { color: "oklch(0.12 0.04 258)" },
              children: card.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm leading-relaxed mb-4",
              style: { color: "oklch(0.40 0.04 258)" },
              children: card.description
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-5", children: card.subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs px-2 py-0.5 rounded-full font-medium border",
              style: {
                background: `${card.color}18`,
                color: card.textDark,
                borderColor: card.borderColor
              },
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4 text-xs", children: ["Full Syllabus", "Videos", "Q&A"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1",
              style: { color: card.textDark },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f })
              ]
            },
            f
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3",
              style: { color: card.color },
              children: [
                "Explore Resources",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function HomePage({
  onCategorySelect,
  onSmartNotesSearch,
  onViewSmartNotes
}) {
  const [smartSearchInput, setSmartSearchInput] = reactExports.useState("");
  const [statsStarted, setStatsStarted] = reactExports.useState(false);
  const statsRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const handleSmartSearch = () => {
    const q = smartSearchInput.trim();
    if (!q) return;
    onSmartNotesSearch == null ? void 0 : onSmartNotesSearch(q);
    setSmartSearchInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden min-h-[560px] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/hero-eduprep.dim_1400x600.jpg",
          alt: "",
          "aria-hidden": "true",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-overlay absolute inset-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hero-blob-1 absolute pointer-events-none rounded-full",
          style: {
            width: 480,
            height: 480,
            top: "-10%",
            right: "-5%",
            background: "radial-gradient(circle, oklch(0.75 0.18 52 / 0.35) 0%, oklch(0.65 0.15 52 / 0.15) 50%, transparent 75%)",
            filter: "blur(40px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hero-blob-2 absolute pointer-events-none rounded-full",
          style: {
            width: 360,
            height: 360,
            bottom: "-15%",
            left: "5%",
            background: "radial-gradient(circle, oklch(0.55 0.20 264 / 0.30) 0%, oklch(0.45 0.16 264 / 0.12) 50%, transparent 75%)",
            filter: "blur(50px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hero-blob-3 absolute pointer-events-none rounded-full",
          style: {
            width: 300,
            height: 300,
            top: "30%",
            left: "50%",
            background: "radial-gradient(circle, oklch(0.60 0.18 335 / 0.20) 0%, transparent 70%)",
            filter: "blur(60px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hero-blob-4 absolute pointer-events-none rounded-full",
          style: {
            width: 200,
            height: 200,
            top: "10%",
            left: "25%",
            background: "radial-gradient(circle, oklch(0.55 0.16 142 / 0.20) 0%, transparent 70%)",
            filter: "blur(45px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4 py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/25 text-white/90 text-xs font-bold mb-6 stat-animate badge-animated",
            "data-ocid": "home.hero.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Sparkles,
                {
                  className: "w-3.5 h-3.5 flex-shrink-0",
                  style: { color: "oklch(0.85 0.18 52)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎓 India's #1 Free Study Platform for CBSE, JEE & NEET" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-1.5 h-1.5 rounded-full animate-pulse",
                  style: { background: "oklch(0.75 0.18 52)" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 stat-animate [animation-delay:80ms]", children: [
          "Dubal DS",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-transparent bg-clip-text block sm:inline",
              style: {
                backgroundImage: "linear-gradient(90deg, oklch(0.88 0.20 52), oklch(0.82 0.22 65), oklch(0.85 0.18 45))"
              },
              children: "E-learning Hub"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed stat-animate [animation-delay:160ms]", children: [
          "Complete study resources for CBSE Class 10 & 12, JEE, and NEET — syllabus, question papers, AI help, video lessons, and dictionary, all in one place.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/95", children: "Completely free." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 stat-animate [animation-delay:240ms]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "home.explore.primary_button",
              onClick: () => onCategorySelect(Category.Class10, "syllabus"),
              className: "ripple-btn flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5",
              style: {
                background: "oklch(0.75 0.18 52)",
                color: "oklch(0.15 0.05 52)",
                boxShadow: "0 6px 24px oklch(0.75 0.18 52 / 0.45)"
              },
              children: [
                "Start Exploring",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "home.papers.secondary_button",
              onClick: () => onCategorySelect(Category.Class10, "papers"),
              className: "ripple-btn flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card text-white font-semibold text-sm hover:bg-white/15 transition-colors border border-white/25",
              children: "Question Papers"
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: statsRef,
        style: {
          background: "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 280) 50%, oklch(0.22 0.08 300) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10", children: heroStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCounter,
          {
            value: s.value,
            suffix: s.suffix,
            label: s.label,
            started: statsStarted
          },
          s.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3", children: "Choose Your Exam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Select your target exam to access tailored study materials, question papers, and resources." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "aihelp", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex w-full flex-wrap gap-1 h-auto bg-secondary/40 p-2 rounded-2xl mb-8 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: "aihelp",
              "data-ocid": "home.tab.aihelp",
              className: "flex-1 min-w-[90px] flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all data-[state=active]:shadow-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                "AI Help"
              ]
            }
          ),
          categoryCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: card.id,
              "data-ocid": `home.tab.${card.id.toLowerCase()}`,
              className: "flex-1 min-w-[90px] flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all data-[state=active]:shadow-md data-[state=active]:text-white",
              style: {
                // CSS custom properties to be applied via data-state in JS
              },
              onFocus: (e) => {
                if (e.currentTarget.dataset.state === "active") return;
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
                card.id === Category.Class10 ? "Class 10" : card.id === Category.Class12 ? "Class 12" : card.title
              ]
            },
            card.id
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "aihelp", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-6 py-8 md:px-10",
              style: {
                background: "linear-gradient(135deg, oklch(0.18 0.08 264) 0%, oklch(0.25 0.12 276) 60%, oklch(0.20 0.07 290) 100%)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white text-lg leading-tight", children: "AI Study Assistant" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs", children: "Powered by AI · Any subject, any question" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm max-w-lg leading-relaxed mb-5", children: "Ask any question — get instant Smart Notes, Q&A answers, and chapter summaries powered by AI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: smartNoteTopics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => onSmartNotesSearch == null ? void 0 : onSmartNotesSearch(topic.toLowerCase()),
                    className: "text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all font-medium",
                    style: { background: "oklch(1 0 0 / 0.08)" },
                    children: topic
                  },
                  topic
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => onCategorySelect(Category.Class10, "aihelp"),
                    "data-ocid": "home.aihelp.primary_button",
                    className: "flex items-center gap-2 font-bold px-6 py-2.5 rounded-xl border-0",
                    style: {
                      background: "oklch(0.75 0.18 52)",
                      color: "oklch(0.15 0.04 52)"
                    },
                    children: [
                      "Go to AI Help ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border bg-card", children: [
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
              title: "Smart Notes",
              desc: "600+ word detailed notes for every chapter",
              color: "oklch(0.62 0.18 52)",
              bg: "oklch(0.95 0.05 52)"
            },
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }),
              title: "Chapter Q&A",
              desc: "20+ exam-style questions per chapter",
              color: "oklch(0.38 0.18 264)",
              bg: "oklch(0.93 0.04 264)"
            },
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-5 h-5" }),
              title: "AI Chat",
              desc: "Ask anything — real AI answers instantly",
              color: "oklch(0.44 0.17 335)",
              bg: "oklch(0.94 0.04 335)"
            }
          ].map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5",
                style: { background: feat.bg, color: feat.color },
                children: feat.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: feat.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: feat.desc })
            ] })
          ] }, feat.title)) })
        ] }) }),
        categoryCards.map((card, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: card.id, className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CategoryCard,
            {
              card,
              idx,
              onClick: () => onCategorySelect(card.id, "syllabus")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
            {
              label: "Syllabus",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
              action: () => onCategorySelect(card.id, "syllabus"),
              ocid: `home.${card.id.toLowerCase()}.syllabus.button`
            },
            {
              label: "Question Papers",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
              action: () => onCategorySelect(card.id, "papers"),
              ocid: `home.${card.id.toLowerCase()}.papers.button`
            },
            {
              label: "AI Help",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-4 h-4" }),
              action: () => onCategorySelect(card.id, "aihelp"),
              ocid: `home.${card.id.toLowerCase()}.aihelp.button`
            },
            {
              label: "Smart Notes",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
              action: () => {
                onSmartNotesSearch == null ? void 0 : onSmartNotesSearch(
                  card.id.toLowerCase().replace("class", "class ")
                );
              },
              ocid: `home.${card.id.toLowerCase()}.smartnotes.button`
            }
          ].map((btn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: btn.action,
              "data-ocid": btn.ocid,
              className: "flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card font-semibold text-sm text-foreground hover:border-transparent hover:shadow-md transition-all group justify-center",
              style: {
                // subtle hover accent matching card color
                // applied via CSS class hover
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "transition-transform group-hover:scale-110",
                    style: { color: card.color },
                    children: btn.icon
                  }
                ),
                btn.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ArrowRight,
                  {
                    className: "w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all",
                    style: { color: card.color }
                  }
                )
              ]
            },
            btn.label
          )) })
        ] }) }, card.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-8 border-y",
        style: {
          background: "oklch(0.97 0.008 255)",
          borderColor: "oklch(0.88 0.03 258)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-container w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track", children: marqueeBadges.concat(marqueeBadges).map((badge, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "mx-3 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border",
            style: {
              background: "oklch(1 0 0)",
              borderColor: "oklch(0.88 0.03 258)",
              color: "oklch(0.30 0.08 264)",
              boxShadow: "0 1px 4px oklch(0.38 0.14 264 / 0.08)"
            },
            children: badge
          },
          `marquee-${i}`
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden rounded-3xl p-8 md:p-12",
        style: {
          background: "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 280) 50%, oklch(0.22 0.08 300) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.75 0.18 52) 0%, transparent 70%)",
                transform: "translate(30%, -30%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.65 0.16 264) 0%, transparent 70%)",
                transform: "translate(-20%, 30%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold",
                style: { background: "oklch(1 0 0 / 0.08)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 text-[oklch(0.85_0.18_52)]" }),
                  "AI Smart Notes"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-2xl md:text-4xl text-white mb-3 leading-tight", children: [
              "Get 600+ Word Smart Notes",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-transparent bg-clip-text",
                  style: {
                    backgroundImage: "linear-gradient(90deg, oklch(0.85 0.18 52), oklch(0.78 0.22 65))"
                  },
                  children: "on Any Topic"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm md:text-base mb-6 leading-relaxed max-w-xl", children: "Type any chapter name or topic and get instantly detailed smart notes with theory, formulas, examples, and board exam tips — all NCERT aligned." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5 max-w-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: smartSearchInput,
                    onChange: (e) => setSmartSearchInput(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && handleSmartSearch(),
                    placeholder: "Get Smart Notes for any topic...",
                    className: "w-full pl-10 pr-4 h-12 rounded-xl border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30",
                    style: { background: "oklch(1 0 0 / 0.10)" },
                    "data-ocid": "home.smartnotes.input",
                    "aria-label": "Search smart notes topic"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleSmartSearch,
                  disabled: !smartSearchInput.trim(),
                  className: "ripple-btn h-12 px-5 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                  style: {
                    background: "oklch(0.75 0.18 52)",
                    color: "oklch(0.15 0.04 52)"
                  },
                  "data-ocid": "home.smartnotes.button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: smartNoteTopics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onSmartNotesSearch == null ? void 0 : onSmartNotesSearch(topic.toLowerCase()),
                className: "text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/40 transition-all",
                style: { background: "oklch(1 0 0 / 0.07)" },
                "data-ocid": "home.smartnotes.item",
                children: topic
              },
              topic
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: onViewSmartNotes,
                className: "flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors group",
                "data-ocid": "home.smartnotes.primary_button",
                children: [
                  "View All Smart Notes",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                ]
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "border-y border-border",
        style: { background: "oklch(0.97 0.008 255)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3", children: "Everything You Need to Succeed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Dubal DS E-learning Hub brings all study resources under one roof." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: features.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group bg-card rounded-2xl p-5 border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 stat-animate cursor-default relative overflow-hidden",
              style: {
                animationDelay: `${idx * 50}ms`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
                    style: {
                      background: `linear-gradient(135deg, ${f.color}0c 0%, ${f.color}05 100%)`
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    style: {
                      background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                        style: {
                          background: f.colorBg,
                          color: f.color
                        },
                        children: f.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg",
                        style: { background: f.color }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display font-bold text-base mb-1.5",
                      style: { color: "oklch(0.15 0.04 258)" },
                      children: f.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
                ] })
              ]
            },
            f.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "cta-banner relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-15",
          style: {
            background: "radial-gradient(circle, oklch(0.75 0.18 52) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
            filter: "blur(60px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-10",
          style: {
            background: "radial-gradient(circle, oklch(0.55 0.20 264) 0%, transparent 70%)",
            transform: "translate(-20%, 30%)",
            filter: "blur(50px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-4 py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-xs font-semibold mb-5",
            style: { background: "oklch(1 0 0 / 0.07)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Sparkles,
                {
                  className: "w-3.5 h-3.5",
                  style: { color: "oklch(0.85 0.18 52)" }
                }
              ),
              "Start Today — It's 100% Free"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4", children: "Start Your Exam Journey Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/65 text-lg mb-10 max-w-2xl mx-auto", children: "Access free study materials for CBSE, JEE, NEET, and Govt exams. Everything you need in one place — no signup, no fees, no limits." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "home.cta.primary_button",
              onClick: () => onCategorySelect(Category.Class10, "syllabus"),
              className: "ripple-btn flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5",
              style: {
                background: "oklch(0.75 0.18 52)",
                color: "oklch(0.15 0.05 52)",
                boxShadow: "0 8px 30px oklch(0.75 0.18 52 / 0.45)"
              },
              children: [
                "Explore Syllabus",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "home.cta.secondary_button",
              onClick: onViewSmartNotes,
              className: "ripple-btn flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base glass-card text-white hover:bg-white/15 transition-colors border border-white/25",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Zap,
                  {
                    className: "w-5 h-5",
                    style: { color: "oklch(0.85 0.18 52)" }
                  }
                ),
                "Get Smart Notes"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  HomePage as default
};
