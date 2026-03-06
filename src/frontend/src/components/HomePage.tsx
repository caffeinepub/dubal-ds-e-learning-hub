import {
  ArrowRight,
  BookMarked,
  BookOpen,
  BrainCircuit,
  Calculator,
  FileText,
  PlayCircle,
  Search,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { Section } from "../App";
import { Category } from "../types";

interface HomePageProps {
  onCategorySelect: (cat: Category, section: Section) => void;
  onSmartNotesSearch?: (topic: string) => void;
  onViewSmartNotes?: () => void;
}

const categoryCards = [
  {
    id: Category.Class10,
    title: "CBSE Class 10",
    subtitle: "Board Exam Prep",
    description:
      "Science, Mathematics, Social Science, English & more. Complete syllabus with NCERT solutions.",
    subjects: ["Mathematics", "Science", "Social Science", "English"],
    gradient: "from-[oklch(0.55_0.16_142)] to-[oklch(0.45_0.14_160)]",
    lightBg: "bg-[oklch(0.95_0.04_142)]",
    border: "border-[oklch(0.8_0.1_142)]",
    textColor: "text-[oklch(0.3_0.12_142)]",
    iconBg: "bg-[oklch(0.88_0.08_142)]",
    ocid: "home.class10.card",
  },
  {
    id: Category.Class12,
    title: "CBSE Class 12",
    subtitle: "Board Exam Prep",
    description:
      "Physics, Chemistry, Mathematics, Biology, Commerce & Humanities. Score 95+ with our resources.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    gradient: "from-[oklch(0.48_0.18_264)] to-[oklch(0.38_0.14_280)]",
    lightBg: "bg-[oklch(0.94_0.04_264)]",
    border: "border-[oklch(0.78_0.1_264)]",
    textColor: "text-[oklch(0.3_0.12_264)]",
    iconBg: "bg-[oklch(0.86_0.08_264)]",
    ocid: "home.class12.card",
  },
  {
    id: Category.JEE,
    title: "JEE",
    subtitle: "IIT Entrance Exam",
    description:
      "JEE Main & Advanced preparation with chapter-wise practice, previous year papers and AI doubts.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    gradient: "from-[oklch(0.58_0.19_30)] to-[oklch(0.48_0.16_45)]",
    lightBg: "bg-[oklch(0.96_0.04_30)]",
    border: "border-[oklch(0.8_0.1_30)]",
    textColor: "text-[oklch(0.3_0.14_30)]",
    iconBg: "bg-[oklch(0.9_0.08_30)]",
    ocid: "home.jee.card",
  },
  {
    id: Category.NEET,
    title: "NEET",
    subtitle: "Medical Entrance Exam",
    description:
      "Biology, Physics & Chemistry for NEET-UG. NCERT-based preparation with MCQ banks and mock tests.",
    subjects: ["Biology", "Physics", "Chemistry"],
    gradient: "from-[oklch(0.52_0.17_335)] to-[oklch(0.42_0.14_350)]",
    lightBg: "bg-[oklch(0.95_0.04_335)]",
    border: "border-[oklch(0.78_0.1_335)]",
    textColor: "text-[oklch(0.3_0.13_335)]",
    iconBg: "bg-[oklch(0.88_0.08_335)]",
    ocid: "home.neet.card",
  },
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Complete Syllabus",
    desc: "Chapter-wise breakdown with direct download links from official NCERT/CBSE sources.",
    color: "bg-[oklch(0.88_0.07_142)] text-[oklch(0.3_0.12_142)]",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Question Papers",
    desc: "Previous year papers with detailed solutions from 2015 onwards.",
    color: "bg-[oklch(0.88_0.07_264)] text-[oklch(0.3_0.12_264)]",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Doubt Solver",
    desc: "Get instant answers to your doubts from our curated Q&A knowledge base.",
    color: "bg-[oklch(0.9_0.07_335)] text-[oklch(0.3_0.13_335)]",
  },
  {
    icon: <BookMarked className="w-6 h-6" />,
    title: "Subject Dictionary",
    desc: "Comprehensive general English dictionary with Hindi meanings for every word.",
    color: "bg-[oklch(0.92_0.07_30)] text-[oklch(0.3_0.14_30)]",
  },
  {
    icon: <PlayCircle className="w-6 h-6" />,
    title: "Video Lessons",
    desc: "Embedded NCERT chapter videos — watch and learn without leaving the app.",
    color: "bg-[oklch(0.9_0.08_14)] text-[oklch(0.3_0.14_14)]",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Math Calculator",
    desc: "Scientific calculator with sin, cos, tan, log, and more built-in functions.",
    color: "bg-[oklch(0.88_0.07_200)] text-[oklch(0.3_0.12_200)]",
  },
];

const smartNoteTopics = [
  "Electricity",
  "Photosynthesis",
  "Nationalism in India",
  "The Last Lesson",
  "Polynomials",
  "Electrochemistry",
  "Cell Division",
  "Wave Optics",
];

export default function HomePage({
  onCategorySelect,
  onSmartNotesSearch,
  onViewSmartNotes,
}: HomePageProps) {
  const [smartSearchInput, setSmartSearchInput] = useState("");

  const handleSmartSearch = () => {
    const q = smartSearchInput.trim();
    if (!q) return;
    onSmartNotesSearch?.(q);
    setSmartSearchInput("");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        <img
          src="/assets/generated/hero-eduprep.dim_1400x600.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/90 text-xs font-semibold mb-6 animate-fade-in border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.75_0.18_52)] animate-pulse" />
              CBSE Class 10 &amp; 12 · JEE · NEET — Free Study Resources
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 animate-fade-in-up">
              Dubal DS{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, oklch(0.85 0.18 52), oklch(0.78 0.22 65), oklch(0.82 0.18 52))",
                }}
              >
                E-learning Hub
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:100ms]">
              Complete study resources for CBSE Class 10 &amp; 12, JEE, and NEET
              — syllabus, question papers, AI help, video lessons, and subject
              dictionary, all in one place.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up [animation-delay:200ms]">
              <button
                type="button"
                data-ocid="home.explore.primary_button"
                onClick={() => onCategorySelect(Category.Class10, "syllabus")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[oklch(0.75_0.18_52)] text-[oklch(0.15_0.05_52)] font-bold text-sm hover:bg-[oklch(0.80_0.20_52)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Exploring
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                data-ocid="home.papers.secondary_button"
                onClick={() => onCategorySelect(Category.Class10, "papers")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card text-white font-semibold text-sm hover:bg-white/15 transition-colors border border-white/25"
              >
                Question Papers
              </button>
            </div>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-2 mt-6 animate-fade-in-up [animation-delay:300ms]">
              {[
                "📚 4 Exam Categories",
                "🎥 Video per Chapter",
                "🧮 Scientific Calculator",
                "🌐 10 Indian Languages",
              ].map((stat) => (
                <span
                  key={stat}
                  className="text-xs px-3 py-1.5 rounded-full glass-card text-white/80 border border-white/10"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Choose Your Exam
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select your target exam to access tailored study materials, question
            papers, and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryCards.map((card, idx) => (
            <button
              type="button"
              key={card.id}
              data-ocid={card.ocid}
              onClick={() => onCategorySelect(card.id, "syllabus")}
              className={`group relative rounded-2xl border-2 ${card.border} ${card.lightBg} p-6 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${card.iconBg} mb-4`}>
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
                >
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
              </div>

              <div
                className={`text-xs font-semibold uppercase tracking-wider ${card.textColor} mb-1`}
              >
                {card.subtitle}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {card.subjects.map((s) => (
                  <span
                    key={s}
                    className={`text-xs px-2 py-0.5 rounded-full ${card.lightBg} ${card.textColor} border ${card.border} font-medium`}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div
                className={`flex items-center gap-1.5 text-sm font-semibold ${card.textColor} group-hover:gap-3 transition-all`}
              >
                Explore Resources
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Smart Notes Spotlight */}
      <section className="container mx-auto px-4 py-10">
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 280) 50%, oklch(0.22 0.08 300) 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.75 0.18 52) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.65 0.16 264) 0%, transparent 70%)",
              transform: "translate(-20%, 30%)",
            }}
          />

          <div className="relative z-10 max-w-2xl">
            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold"
                style={{ background: "oklch(1 0 0 / 0.08)" }}
              >
                <Zap className="w-3.5 h-3.5 text-[oklch(0.85_0.18_52)]" />
                AI Smart Notes
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-3 leading-tight">
              Get 600+ Word Smart Notes{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, oklch(0.85 0.18 52), oklch(0.78 0.22 65))",
                }}
              >
                on Any Topic
              </span>
            </h2>
            <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed max-w-xl">
              Type any chapter name or topic and get instantly detailed smart
              notes with theory, formulas, examples, and board exam tips — all
              NCERT aligned.
            </p>

            {/* Search */}
            <div className="flex gap-2 mb-5 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                <input
                  type="text"
                  value={smartSearchInput}
                  onChange={(e) => setSmartSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSmartSearch()}
                  placeholder="Get Smart Notes for any topic..."
                  className="w-full pl-10 pr-4 h-12 rounded-xl border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                  style={{ background: "oklch(1 0 0 / 0.10)" }}
                  data-ocid="home.smartnotes.input"
                  aria-label="Search smart notes topic"
                />
              </div>
              <button
                type="button"
                onClick={handleSmartSearch}
                disabled={!smartSearchInput.trim()}
                className="h-12 px-5 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "oklch(0.75 0.18 52)",
                  color: "oklch(0.15 0.04 52)",
                }}
                data-ocid="home.smartnotes.button"
              >
                <Zap className="w-4 h-4" />
              </button>
            </div>

            {/* Topic chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {smartNoteTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => onSmartNotesSearch?.(topic.toLowerCase())}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/40 transition-all"
                  style={{ background: "oklch(1 0 0 / 0.07)" }}
                  data-ocid="home.smartnotes.item"
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onViewSmartNotes}
              className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors group"
              data-ocid="home.smartnotes.primary_button"
            >
              View All Smart Notes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-foreground mb-3">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dubal DS E-learning Hub brings all study resources under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 animate-fade-in-up cursor-default relative overflow-hidden"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-secondary/60 to-transparent rounded-2xl" />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
