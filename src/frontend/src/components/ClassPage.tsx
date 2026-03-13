import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  ChevronRight,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Suspense, lazy } from "react";
import type { Section } from "../App";
import { Category } from "../types";

const SyllabusPage = lazy(() => import("./SyllabusPage"));
const QuestionPapersPage = lazy(() => import("./QuestionPapersPage"));
const SmartNotesPage = lazy(() => import("./SmartNotesPage"));

interface ClassPageProps {
  category: Category;
  onNavigate: (section: Section, category?: Category) => void;
}

// ── Category metadata ─────────────────────────────────────────────────────────
const categoryMeta: Record<
  Category,
  {
    label: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    colorLight: string;
    accentBg: string;
    badge: string;
  }
> = {
  [Category.Class10]: {
    label: "CBSE Class 10",
    subtitle:
      "Board exam preparation — Science, Maths, Social Science, English, Hindi",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "oklch(0.45 0.16 142)",
    colorLight: "oklch(0.58 0.14 142)",
    accentBg:
      "linear-gradient(135deg, oklch(0.22 0.10 142) 0%, oklch(0.30 0.13 152) 60%, oklch(0.24 0.08 165) 100%)",
    badge: "Class 10",
  },
  [Category.Class12]: {
    label: "CBSE Class 12",
    subtitle:
      "Board exam prep — Physics, Chemistry, Mathematics, Biology, English",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.52 0.16 264)",
    accentBg:
      "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 276) 60%, oklch(0.22 0.08 290) 100%)",
    badge: "Class 12",
  },
  [Category.JEE]: {
    label: "JEE Preparation",
    subtitle:
      "Joint Entrance Examination — Physics, Chemistry, Mathematics (Main & Advanced)",
    icon: <FlaskConical className="w-8 h-8" />,
    color: "oklch(0.50 0.19 30)",
    colorLight: "oklch(0.64 0.17 30)",
    accentBg:
      "linear-gradient(135deg, oklch(0.26 0.12 30) 0%, oklch(0.34 0.16 42) 60%, oklch(0.28 0.10 15) 100%)",
    badge: "JEE",
  },
  [Category.NEET]: {
    label: "NEET Preparation",
    subtitle:
      "National Eligibility cum Entrance Test — Biology, Physics, Chemistry",
    icon: <HeartPulse className="w-8 h-8" />,
    color: "oklch(0.44 0.17 335)",
    colorLight: "oklch(0.58 0.15 335)",
    accentBg:
      "linear-gradient(135deg, oklch(0.22 0.10 335) 0%, oklch(0.30 0.14 347) 60%, oklch(0.24 0.08 320) 100%)",
    badge: "NEET",
  },
  [Category.CompetitiveExams]: {
    label: "Competitive Exams",
    subtitle: "UPSC, SSC, Bank PO, Railway, NDA & more",
    icon: <Sparkles className="w-8 h-8" />,
    color: "oklch(0.50 0.19 52)",
    colorLight: "oklch(0.64 0.17 52)",
    accentBg:
      "linear-gradient(135deg, oklch(0.24 0.10 52) 0%, oklch(0.32 0.14 64) 60%, oklch(0.26 0.08 38) 100%)",
    badge: "Govt Exams",
  },
  [Category.SSB]: {
    label: "SSB Preparation",
    subtitle: "Services Selection Board — 5-day interview process",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.52 0.16 264)",
    accentBg:
      "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 276) 60%, oklch(0.22 0.08 290) 100%)",
    badge: "SSB",
  },
  [Category.Maharashtra10]: {
    label: "Maharashtra Board Class 10",
    subtitle:
      "SSC Board exam — Maths, Science, Social Science, English, Marathi, Hindi",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "oklch(0.55 0.19 48)",
    colorLight: "oklch(0.68 0.17 48)",
    accentBg:
      "linear-gradient(135deg, oklch(0.28 0.13 48) 0%, oklch(0.36 0.17 60) 60%, oklch(0.30 0.11 35) 100%)",
    badge: "MH SSC",
  },
  [Category.Bengal10]: {
    label: "West Bengal Board Class 10 (WBBSE)",
    subtitle:
      "Madhyamik exam — Maths, Physical Science, Life Science, History, Geography, English, Bengali",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "oklch(0.50 0.16 178)",
    colorLight: "oklch(0.62 0.14 178)",
    accentBg:
      "linear-gradient(135deg, oklch(0.26 0.10 178) 0%, oklch(0.34 0.14 190) 60%, oklch(0.28 0.08 165) 100%)",
    badge: "WBBSE",
  },
  [Category.Maharashtra12]: {
    label: "Maharashtra Board Class 12 (HSC)",
    subtitle:
      "HSC Board exam — Physics, Chemistry, Mathematics, Biology, English, Marathi",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "oklch(0.50 0.19 48)",
    colorLight: "oklch(0.63 0.17 48)",
    accentBg:
      "linear-gradient(135deg, oklch(0.26 0.13 48) 0%, oklch(0.34 0.17 60) 60%, oklch(0.28 0.11 35) 100%)",
    badge: "MH HSC",
  },
  [Category.Bengal12]: {
    label: "West Bengal Board Class 12 (WBCHSE)",
    subtitle:
      "Higher Secondary exam — Physics, Chemistry, Maths, Biology, English, Bengali",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "oklch(0.45 0.16 178)",
    colorLight: "oklch(0.57 0.14 178)",
    accentBg:
      "linear-gradient(135deg, oklch(0.24 0.10 178) 0%, oklch(0.32 0.14 190) 60%, oklch(0.26 0.08 165) 100%)",
    badge: "WBCHSE",
  },
};

// Tab config
const tabItems = [
  {
    value: "syllabus",
    label: "Syllabus",
    icon: <BookOpen className="w-4 h-4" />,
    ocid: "classpage.syllabus.tab",
  },
  {
    value: "papers",
    label: "Question Papers",
    icon: <FileText className="w-4 h-4" />,
    ocid: "classpage.papers.tab",
  },
  {
    value: "notes",
    label: "Smart Notes",
    icon: <Sparkles className="w-4 h-4" />,
    ocid: "classpage.notes.tab",
  },
  {
    value: "qa",
    label: "Chapter Q&A",
    icon: <Lightbulb className="w-4 h-4" />,
    ocid: "classpage.qa.tab",
  },
];

function PageFallback() {
  return (
    <div className="py-10 flex flex-col gap-3 items-center justify-center text-muted-foreground">
      <div className="w-8 h-8 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
      <span className="text-sm font-medium">Loading…</span>
    </div>
  );
}

export default function ClassPage({ category, onNavigate }: ClassPageProps) {
  const meta = categoryMeta[category] ?? categoryMeta[Category.Class10];
  // No-op for category change since this page is locked to one category
  const noop = () => {};

  return (
    <section
      className="min-h-screen flex flex-col"
      data-ocid="classpage.section"
    >
      {/* ── Hero Header ─────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ background: meta.accentBg }}
      >
        {/* Decorative glow orb */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, ${meta.colorLight} 0%, transparent 55%)`,
          }}
        />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4 flex-wrap">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="hover:text-white/90 transition-colors"
              data-ocid="classpage.home.link"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90 font-medium">{meta.label}</span>
          </div>

          <div className="flex items-start gap-5">
            {/* Icon badge */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.colorLight} 100%)`,
              }}
              aria-hidden="true"
            >
              <span className="text-white">{meta.icon}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h1 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                  {meta.label}
                </h1>
                <Badge
                  className="text-xs font-bold px-3 py-1 rounded-full border-0"
                  style={{
                    background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.colorLight} 100%)`,
                    color: "white",
                  }}
                >
                  {meta.badge}
                </Badge>
              </div>
              <p className="text-white/70 text-base max-w-2xl leading-relaxed">
                {meta.subtitle}
              </p>

              {/* Quick action chips */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {[
                  {
                    label: "Syllabus",
                    tab: "syllabus",
                    ocid: "classpage.syllabus.button",
                  },
                  {
                    label: "Question Papers",
                    tab: "papers",
                    ocid: "classpage.papers.button",
                  },
                  {
                    label: "Smart Notes",
                    tab: "notes",
                    ocid: "classpage.notes.button",
                  },
                ].map((chip) => (
                  <button
                    key={chip.tab}
                    type="button"
                    data-ocid={chip.ocid}
                    onClick={() => {
                      const el = document.querySelector(
                        `[data-radix-collection-item][data-state][value="${chip.tab}"]`,
                      ) as HTMLButtonElement | null;
                      el?.click();
                    }}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 text-white/80 hover:text-white hover:bg-white/15 transition-all backdrop-blur-sm"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabbed Content ───────────────────────────────────────────────── */}
      <div className="flex-1 container mx-auto px-0 sm:px-4 py-6">
        <Tabs defaultValue="syllabus" className="flex flex-col">
          {/* Tab list */}
          <TabsList
            className="flex w-full sm:w-auto sm:self-start gap-1 bg-secondary/60 p-1 rounded-xl mb-6 mx-4 sm:mx-0 overflow-x-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                data-ocid={tab.ocid}
                className="flex items-center gap-1.5 font-semibold whitespace-nowrap rounded-lg text-sm px-4 py-2 data-[state=active]:text-white flex-shrink-0"
                style={
                  {
                    // Active color via CSS var trick — Tailwind can't do dynamic OKLCH in data-state
                    // We use inline style on the parent and let Radix handle [data-state=active]
                  }
                }
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">
                  {tab.label === "Question Papers" ? "Papers" : tab.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Syllabus */}
          <TabsContent value="syllabus" className="mt-0 px-4 sm:px-0">
            <Suspense fallback={<PageFallback />}>
              <SyllabusPage activeCategory={category} onCategoryChange={noop} />
            </Suspense>
          </TabsContent>

          {/* Question Papers */}
          <TabsContent value="papers" className="mt-0 px-4 sm:px-0">
            <Suspense fallback={<PageFallback />}>
              <QuestionPapersPage
                activeCategory={category}
                onCategoryChange={noop}
              />
            </Suspense>
          </TabsContent>

          {/* Smart Notes */}
          <TabsContent value="notes" className="mt-0 px-4 sm:px-0">
            <Suspense fallback={<PageFallback />}>
              <SmartNotesPage
                activeCategory={category}
                onCategoryChange={noop}
              />
            </Suspense>
          </TabsContent>

          {/* Chapter Q&A — renders SmartNotesPage with Q&A tab defaulted */}
          <TabsContent value="qa" className="mt-0 px-4 sm:px-0">
            <Suspense fallback={<PageFallback />}>
              <ChapterQASection category={category} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// ── Chapter Q&A sub-section ───────────────────────────────────────────────────
// Renders SmartNotesPage but scrolled to the Chapter Q&A tab
function ChapterQASection({ category }: { category: Category }) {
  const meta = categoryMeta[category] ?? categoryMeta[Category.Class10];

  return (
    <div>
      {/* Brief intro */}
      <div
        className="rounded-2xl border border-border p-5 mb-6 flex items-start gap-4"
        style={{
          background: `linear-gradient(135deg, ${meta.color}12 0%, ${meta.colorLight}08 100%)`,
          borderColor: `${meta.color}30`,
        }}
        data-ocid="classpage.qa.panel"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.colorLight} 100%)`,
          }}
        >
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="font-display font-bold text-lg text-foreground mb-1">
            Chapter-wise Q&amp;A — {meta.label}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Practice questions with detailed answers for each chapter. Select a
            subject and chapter to view questions specific to that topic.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-3 font-semibold"
            style={{
              borderColor: `${meta.color}50`,
              color: meta.color,
            }}
            data-ocid="classpage.qa.button"
            onClick={() => {
              // Trigger the Chapter Q&A tab inside SmartNotesPage
              const trigger = document.querySelector(
                '[data-ocid="smartnotes.chapterqa.tab"]',
              ) as HTMLButtonElement | null;
              trigger?.click();
            }}
          >
            <Lightbulb className="w-3.5 h-3.5 mr-1.5" />
            Go to Chapter Q&amp;A
          </Button>
        </div>
      </div>

      {/* Render SmartNotesPage inline */}
      <SmartNotesPage activeCategory={category} onCategoryChange={() => {}} />
    </div>
  );
}
