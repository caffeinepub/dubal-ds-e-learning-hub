import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  BrainCircuit,
  Calculator,
  CheckCircle2,
  FileText,
  Languages,
  Newspaper,
  PlayCircle,
  Search,
  Shield,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
    color: "oklch(0.45 0.16 142)",
    colorLight: "oklch(0.62 0.14 142)",
    bgLight: "oklch(0.94 0.04 142)",
    borderColor: "oklch(0.74 0.10 142)",
    textDark: "oklch(0.22 0.14 142)",
    patternHue: "142",
    ocid: "home.class10.card",
  },
  {
    id: Category.Class12,
    title: "CBSE Class 12",
    subtitle: "Board Exam Prep",
    description:
      "Physics, Chemistry, Mathematics, Biology, Commerce & Humanities. Score 95+ with our resources.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.55 0.16 264)",
    bgLight: "oklch(0.92 0.05 264)",
    borderColor: "oklch(0.72 0.10 264)",
    textDark: "oklch(0.22 0.14 264)",
    patternHue: "264",
    ocid: "home.class12.card",
  },
  {
    id: Category.JEE,
    title: "JEE",
    subtitle: "IIT Entrance Exam",
    description:
      "JEE Main & Advanced preparation with chapter-wise practice, previous year papers and AI doubts.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    color: "oklch(0.50 0.19 30)",
    colorLight: "oklch(0.67 0.17 30)",
    bgLight: "oklch(0.94 0.05 30)",
    borderColor: "oklch(0.74 0.12 30)",
    textDark: "oklch(0.22 0.16 30)",
    patternHue: "30",
    ocid: "home.jee.card",
  },
  {
    id: Category.NEET,
    title: "NEET",
    subtitle: "Medical Entrance Exam",
    description:
      "Biology, Physics & Chemistry for NEET-UG. NCERT-based preparation with MCQ banks and mock tests.",
    subjects: ["Biology", "Physics", "Chemistry"],
    color: "oklch(0.44 0.17 335)",
    colorLight: "oklch(0.60 0.15 335)",
    bgLight: "oklch(0.93 0.05 335)",
    borderColor: "oklch(0.72 0.12 335)",
    textDark: "oklch(0.22 0.15 335)",
    patternHue: "335",
    ocid: "home.neet.card",
  },
];

const features = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Complete Syllabus",
    desc: "Chapter-wise breakdown with direct NCERT PDF download links. All subjects covered for Class 10, 12, JEE and NEET.",
    color: "oklch(0.45 0.16 142)",
    colorBg: "oklch(0.90 0.06 142)",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Question Papers",
    desc: "Previous year papers with detailed solutions from 2015 onwards. CBSE, JEE Main, JEE Advanced, and NEET papers.",
    color: "oklch(0.38 0.18 264)",
    colorBg: "oklch(0.90 0.06 264)",
  },
  {
    icon: <BrainCircuit className="w-7 h-7" />,
    title: "AI Doubt Solver",
    desc: "Get instant answers from our curated Q&A knowledge base with 3000+ solved questions across all subjects.",
    color: "oklch(0.44 0.17 335)",
    colorBg: "oklch(0.90 0.06 335)",
  },
  {
    icon: <BookMarked className="w-7 h-7" />,
    title: "Subject Dictionary",
    desc: "Comprehensive English dictionary with Hindi meanings. 2000+ words — search any term instantly.",
    color: "oklch(0.50 0.19 30)",
    colorBg: "oklch(0.90 0.07 30)",
  },
  {
    icon: <PlayCircle className="w-7 h-7" />,
    title: "Video Lessons",
    desc: "Chapter videos from Physics Wallah, Dear Sir, Vedantu, and Magnet Brains — top educators for every chapter.",
    color: "oklch(0.48 0.19 15)",
    colorBg: "oklch(0.90 0.06 15)",
  },
  {
    icon: <Calculator className="w-7 h-7" />,
    title: "Scientific Calculator",
    desc: "Full scientific calculator with sin, cos, tan, sec, csc, cot, log, exp, and memory functions built-in.",
    color: "oklch(0.42 0.17 290)",
    colorBg: "oklch(0.90 0.06 290)",
  },
  {
    icon: <Languages className="w-7 h-7" />,
    title: "Language Translator",
    desc: "Translate study terms across 10 Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, and more.",
    color: "oklch(0.44 0.18 165)",
    colorBg: "oklch(0.90 0.06 165)",
  },
  {
    icon: <Newspaper className="w-7 h-7" />,
    title: "Daily News",
    desc: "Stay updated with live education news, current affairs, and exam notifications from top Indian news sources.",
    color: "oklch(0.48 0.19 15)",
    colorBg: "oklch(0.90 0.06 15)",
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: "Govt Exam Prep",
    desc: "UPSC, SSC CGL, BPSC, Loco Pilot, Bank PO, NDA, CDS — full syllabus and video lectures for all exams.",
    color: "oklch(0.50 0.19 52)",
    colorBg: "oklch(0.90 0.07 52)",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "SSB Preparation",
    desc: "Complete 5-day SSB process guide with psychology tests, GTO tasks, PI tips, and OLQ development strategies.",
    color: "oklch(0.38 0.18 264)",
    colorBg: "oklch(0.90 0.06 264)",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Smart Notes",
    desc: "600+ word detailed notes for every chapter — theory, formulas, examples, and board exam tips included.",
    color: "oklch(0.62 0.18 52)",
    colorBg: "oklch(0.92 0.07 52)",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Chapter Q&A",
    desc: "20+ exam-style questions per chapter with detailed answers. Filter by class, subject, and chapter.",
    color: "oklch(0.44 0.17 335)",
    colorBg: "oklch(0.90 0.06 335)",
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
  "✅ Chapter Q&A",
];

const heroStats = [
  { label: "NCERT Chapters", value: 195, suffix: "+" },
  { label: "Exam Categories", value: 4, suffix: "" },
  { label: "Questions in Q&A", value: 3000, suffix: "+" },
  { label: "Always Free", value: 100, suffix: "%" },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const totalFrames = Math.round((duration / 1000) * 60);
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

function StatCounter({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(value, 1400, started);
  return (
    <div className="flex flex-col items-center px-4 py-3">
      <span
        className="text-2xl md:text-3xl font-bold tabular-nums"
        style={{ color: "oklch(0.85 0.18 52)" }}
      >
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-xs md:text-sm text-white/65 font-medium mt-0.5 text-center">
        {label}
      </span>
    </div>
  );
}

function CategoryCard({
  card,
  idx,
  onClick,
}: {
  card: (typeof categoryCards)[0];
  idx: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
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

  return (
    <button
      ref={cardRef}
      type="button"
      data-ocid={card.ocid}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group relative rounded-2xl text-left cursor-pointer overflow-hidden stat-animate"
      style={{
        animationDelay: `${idx * 80}ms`,
        background: card.bgLight,
        border: `2px solid ${card.borderColor}`,
        transition: "transform 0.15s ease, box-shadow 0.2s ease",
        willChange: "transform",
      }}
    >
      {/* Background mesh pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, ${card.color} 1px, transparent 1px), radial-gradient(circle at 80% 80%, ${card.color} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top gradient bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, ${card.color}, ${card.colorLight})`,
        }}
      />

      <div className="relative p-6">
        {/* Icon */}
        <div
          className="inline-flex p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${card.color}22` }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${card.color} 0%, ${card.colorLight} 100%)`,
            }}
          >
            <BookOpen className="w-5 h-5 text-white" />
          </div>
        </div>

        <div
          className="text-xs font-bold uppercase tracking-wider mb-1"
          style={{ color: card.textDark }}
        >
          {card.subtitle}
        </div>
        <h3
          className="font-display font-bold text-xl mb-2"
          style={{ color: "oklch(0.12 0.04 258)" }}
        >
          {card.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "oklch(0.40 0.04 258)" }}
        >
          {card.description}
        </p>

        {/* Subject tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {card.subjects.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-0.5 rounded-full font-medium border"
              style={{
                background: `${card.color}18`,
                color: card.textDark,
                borderColor: card.borderColor,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Feature check row */}
        <div className="flex items-center gap-3 mb-4 text-xs">
          {["Full Syllabus", "Videos", "Q&A"].map((f) => (
            <div
              key={f}
              className="flex items-center gap-1"
              style={{ color: card.textDark }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="font-medium">{f}</span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div
          className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
          style={{ color: card.color }}
        >
          Explore Resources
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}

export default function HomePage({
  onCategorySelect,
  onSmartNotesSearch,
  onViewSmartNotes,
}: HomePageProps) {
  const [smartSearchInput, setSmartSearchInput] = useState("");
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSmartSearch = () => {
    const q = smartSearchInput.trim();
    if (!q) return;
    onSmartNotesSearch?.(q);
    setSmartSearchInput("");
  };

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[560px] flex items-center">
        {/* Background image */}
        <img
          src="/assets/generated/hero-eduprep.dim_1400x600.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Glowing orb blobs */}
        <div
          className="hero-blob-1 absolute pointer-events-none rounded-full"
          style={{
            width: 480,
            height: 480,
            top: "-10%",
            right: "-5%",
            background:
              "radial-gradient(circle, oklch(0.75 0.18 52 / 0.35) 0%, oklch(0.65 0.15 52 / 0.15) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="hero-blob-2 absolute pointer-events-none rounded-full"
          style={{
            width: 360,
            height: 360,
            bottom: "-15%",
            left: "5%",
            background:
              "radial-gradient(circle, oklch(0.55 0.20 264 / 0.30) 0%, oklch(0.45 0.16 264 / 0.12) 50%, transparent 75%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="hero-blob-3 absolute pointer-events-none rounded-full"
          style={{
            width: 300,
            height: 300,
            top: "30%",
            left: "50%",
            background:
              "radial-gradient(circle, oklch(0.60 0.18 335 / 0.20) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="hero-blob-4 absolute pointer-events-none rounded-full"
          style={{
            width: 200,
            height: 200,
            top: "10%",
            left: "25%",
            background:
              "radial-gradient(circle, oklch(0.55 0.16 142 / 0.20) 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            {/* Animated badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/25 text-white/90 text-xs font-bold mb-6 stat-animate badge-animated"
              data-ocid="home.hero.section"
            >
              <Sparkles
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "oklch(0.85 0.18 52)" }}
              />
              <span>
                🎓 India's #1 Free Study Platform for CBSE, JEE &amp; NEET
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "oklch(0.75 0.18 52)" }}
              />
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 stat-animate [animation-delay:80ms]">
              Dubal DS{" "}
              <span
                className="text-transparent bg-clip-text block sm:inline"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, oklch(0.88 0.20 52), oklch(0.82 0.22 65), oklch(0.85 0.18 45))",
                }}
              >
                E-learning Hub
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed stat-animate [animation-delay:160ms]">
              Complete study resources for CBSE Class 10 &amp; 12, JEE, and NEET
              — syllabus, question papers, AI help, video lessons, and
              dictionary, all in one place.{" "}
              <strong className="text-white/95">Completely free.</strong>
            </p>

            {/* CTA buttons with ripple */}
            <div className="flex flex-wrap gap-3 stat-animate [animation-delay:240ms]">
              <button
                type="button"
                data-ocid="home.explore.primary_button"
                onClick={() => onCategorySelect(Category.Class10, "syllabus")}
                className="ripple-btn flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  background: "oklch(0.75 0.18 52)",
                  color: "oklch(0.15 0.05 52)",
                  boxShadow: "0 6px 24px oklch(0.75 0.18 52 / 0.45)",
                }}
              >
                Start Exploring
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                data-ocid="home.papers.secondary_button"
                onClick={() => onCategorySelect(Category.Class10, "papers")}
                className="ripple-btn flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card text-white font-semibold text-sm hover:bg-white/15 transition-colors border border-white/25"
              >
                Question Papers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stat strip ───────────────────────────────────── */}
      <div
        ref={statsRef}
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 280) 50%, oklch(0.22 0.08 300) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {heroStats.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                started={statsStarted}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Tabs ───────────────────────────────── */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Choose Your Exam
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select your target exam to access tailored study materials, question
            papers, and resources.
          </p>
        </div>

        <Tabs defaultValue="aihelp" className="w-full">
          {/* Tab bar */}
          <TabsList className="flex w-full flex-wrap gap-1 h-auto bg-secondary/40 p-2 rounded-2xl mb-8 border border-border">
            <TabsTrigger
              value="aihelp"
              data-ocid="home.tab.aihelp"
              className="flex-1 min-w-[90px] flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all data-[state=active]:shadow-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
            >
              <Sparkles className="w-4 h-4" />
              AI Help
            </TabsTrigger>
            {categoryCards.map((card) => (
              <TabsTrigger
                key={card.id}
                value={card.id}
                data-ocid={`home.tab.${card.id.toLowerCase()}`}
                className="flex-1 min-w-[90px] flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all data-[state=active]:shadow-md data-[state=active]:text-white"
                style={
                  {
                    // CSS custom properties to be applied via data-state in JS
                  } as React.CSSProperties
                }
                onFocus={(e) => {
                  if (e.currentTarget.dataset.state === "active") return;
                }}
              >
                <BookOpen className="w-4 h-4" />
                {card.id === Category.Class10
                  ? "Class 10"
                  : card.id === Category.Class12
                    ? "Class 12"
                    : card.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* AI Help Tab */}
          <TabsContent value="aihelp" className="mt-0">
            <div className="rounded-2xl border border-border overflow-hidden">
              {/* Header */}
              <div
                className="px-6 py-8 md:px-10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.18 0.08 264) 0%, oklch(0.25 0.12 276) 60%, oklch(0.20 0.07 290) 100%)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg leading-tight">
                      AI Study Assistant
                    </p>
                    <p className="text-white/60 text-xs">
                      Powered by AI · Any subject, any question
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-sm max-w-lg leading-relaxed mb-5">
                  Ask any question — get instant Smart Notes, Q&A answers, and
                  chapter summaries powered by AI
                </p>

                {/* Quick topic chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {smartNoteTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => onSmartNotesSearch?.(topic.toLowerCase())}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all font-medium"
                      style={{ background: "oklch(1 0 0 / 0.08)" }}
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() => onCategorySelect(Category.Class10, "aihelp")}
                  data-ocid="home.aihelp.primary_button"
                  className="flex items-center gap-2 font-bold px-6 py-2.5 rounded-xl border-0"
                  style={{
                    background: "oklch(0.75 0.18 52)",
                    color: "oklch(0.15 0.04 52)",
                  }}
                >
                  Go to AI Help <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border bg-card">
                {[
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Smart Notes",
                    desc: "600+ word detailed notes for every chapter",
                    color: "oklch(0.62 0.18 52)",
                    bg: "oklch(0.95 0.05 52)",
                  },
                  {
                    icon: <FileText className="w-5 h-5" />,
                    title: "Chapter Q&A",
                    desc: "20+ exam-style questions per chapter",
                    color: "oklch(0.38 0.18 264)",
                    bg: "oklch(0.93 0.04 264)",
                  },
                  {
                    icon: <BrainCircuit className="w-5 h-5" />,
                    title: "AI Chat",
                    desc: "Ask anything — real AI answers instantly",
                    color: "oklch(0.44 0.17 335)",
                    bg: "oklch(0.94 0.04 335)",
                  },
                ].map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3 p-5">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: feat.bg, color: feat.color }}
                    >
                      {feat.icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">
                        {feat.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Category tabs (Class 10, 12, JEE, NEET) */}
          {categoryCards.map((card, idx) => (
            <TabsContent key={card.id} value={card.id} className="mt-0">
              <div className="space-y-6">
                <CategoryCard
                  card={card}
                  idx={idx}
                  onClick={() => onCategorySelect(card.id, "syllabus")}
                />

                {/* Quick-access action buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      label: "Syllabus",
                      icon: <BookOpen className="w-4 h-4" />,
                      action: () => onCategorySelect(card.id, "syllabus"),
                      ocid: `home.${card.id.toLowerCase()}.syllabus.button`,
                    },
                    {
                      label: "Question Papers",
                      icon: <FileText className="w-4 h-4" />,
                      action: () => onCategorySelect(card.id, "papers"),
                      ocid: `home.${card.id.toLowerCase()}.papers.button`,
                    },
                    {
                      label: "AI Help",
                      icon: <BrainCircuit className="w-4 h-4" />,
                      action: () => onCategorySelect(card.id, "aihelp"),
                      ocid: `home.${card.id.toLowerCase()}.aihelp.button`,
                    },
                    {
                      label: "Smart Notes",
                      icon: <Zap className="w-4 h-4" />,
                      action: () => {
                        onSmartNotesSearch?.(
                          card.id.toLowerCase().replace("class", "class "),
                        );
                      },
                      ocid: `home.${card.id.toLowerCase()}.smartnotes.button`,
                    },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      type="button"
                      onClick={btn.action}
                      data-ocid={btn.ocid}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card font-semibold text-sm text-foreground hover:border-transparent hover:shadow-md transition-all group justify-center"
                      style={
                        {
                          // subtle hover accent matching card color
                          // applied via CSS class hover
                        }
                      }
                    >
                      <span
                        className="transition-transform group-hover:scale-110"
                        style={{ color: card.color }}
                      >
                        {btn.icon}
                      </span>
                      {btn.label}
                      <ArrowRight
                        className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                        style={{ color: card.color }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* ── Marquee "Why Choose Us" strip ───────────────── */}
      <section
        className="py-8 border-y"
        style={{
          background: "oklch(0.97 0.008 255)",
          borderColor: "oklch(0.88 0.03 258)",
        }}
      >
        <div className="marquee-container w-full">
          <div className="marquee-track">
            {marqueeBadges.concat(marqueeBadges).map((badge, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: marquee clone needs positional keys
                key={`marquee-${i}`}
                className="mx-3 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border"
                style={{
                  background: "oklch(1 0 0)",
                  borderColor: "oklch(0.88 0.03 258)",
                  color: "oklch(0.30 0.08 264)",
                  boxShadow: "0 1px 4px oklch(0.38 0.14 264 / 0.08)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Smart Notes Spotlight ────────────────────────── */}
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
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.75 0.18 52) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.65 0.16 264) 0%, transparent 70%)",
              transform: "translate(-20%, 30%)",
            }}
          />

          <div className="relative z-10 max-w-2xl">
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
                className="ripple-btn h-12 px-5 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "oklch(0.75 0.18 52)",
                  color: "oklch(0.15 0.04 52)",
                }}
                data-ocid="home.smartnotes.button"
              >
                <Zap className="w-4 h-4" />
              </button>
            </div>

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

      {/* ── Features grid ───────────────────────────────── */}
      <section
        className="border-y border-border"
        style={{ background: "oklch(0.97 0.008 255)" }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Dubal DS E-learning Hub brings all study resources under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className="group bg-card rounded-2xl p-5 border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 stat-animate cursor-default relative overflow-hidden"
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                {/* Hover glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${f.color}0c 0%, ${f.color}05 100%)`,
                  }}
                />
                {/* Accent top stripe on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`,
                  }}
                />

                <div className="relative">
                  {/* Icon with glow */}
                  <div className="relative inline-block mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: f.colorBg,
                        color: f.color,
                      }}
                    >
                      {f.icon}
                    </div>
                    {/* Glow behind icon */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg"
                      style={{ background: f.color }}
                    />
                  </div>

                  <h3
                    className="font-display font-bold text-base mb-1.5"
                    style={{ color: "oklch(0.15 0.04 258)" }}
                  >
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

      {/* ── Bottom CTA banner ───────────────────────────── */}
      <section className="cta-banner relative overflow-hidden">
        {/* Background blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.18 52) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.20 264) 0%, transparent 70%)",
            transform: "translate(-20%, 30%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-xs font-semibold mb-5"
            style={{ background: "oklch(1 0 0 / 0.07)" }}
          >
            <Sparkles
              className="w-3.5 h-3.5"
              style={{ color: "oklch(0.85 0.18 52)" }}
            />
            Start Today — It's 100% Free
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Start Your Exam Journey Today
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-2xl mx-auto">
            Access free study materials for CBSE, JEE, NEET, and Govt exams.
            Everything you need in one place — no signup, no fees, no limits.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="home.cta.primary_button"
              onClick={() => onCategorySelect(Category.Class10, "syllabus")}
              className="ripple-btn flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5"
              style={{
                background: "oklch(0.75 0.18 52)",
                color: "oklch(0.15 0.05 52)",
                boxShadow: "0 8px 30px oklch(0.75 0.18 52 / 0.45)",
              }}
            >
              Explore Syllabus
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              data-ocid="home.cta.secondary_button"
              onClick={onViewSmartNotes}
              className="ripple-btn flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base glass-card text-white hover:bg-white/15 transition-colors border border-white/25"
            >
              <Zap
                className="w-5 h-5"
                style={{ color: "oklch(0.85 0.18 52)" }}
              />
              Get Smart Notes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
