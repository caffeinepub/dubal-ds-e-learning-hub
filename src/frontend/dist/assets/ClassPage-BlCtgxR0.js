const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SyllabusPage-DbJ2shOK.js","assets/index-BswHPZfj.js","assets/index-d0-M_KbX.css","assets/accordion-BA3JeP3z.js","assets/index-BdAFL0UN.js","assets/index-Bx21pQed.js","assets/index-DP0dbc0v.js","assets/badge-DldjBNgd.js","assets/button-RJc8STgg.js","assets/dialog-DfxG2S41.js","assets/index-Cc4AyBma.js","assets/x-DaFOPcMX.js","assets/useQueries-YjDDIJXZ.js","assets/CategorySelector-sWObrAjS.js","assets/chevron-right-CufdvDqD.js","assets/circle-alert-Bcc-ENUo.js","assets/circle-play-DMmA67fp.js","assets/QuestionPapersPage-B3_F-km8.js","assets/select-Ww-fSHwt.js","assets/check-C0Orq__e.js","assets/SmartNotesPage-Lrs_QQ3X.js","assets/input-BgqFp35m.js","assets/tabs-CwQygHmS.js","assets/topicAnswers-pqUazWLI.js","assets/sparkles-D6UFf9v9.js","assets/search-Dx5zOBTS.js","assets/lightbulb-D_7VHjFB.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, C as Category, r as reactExports, I as GraduationCap, K as HeartPulse, e as FlaskConical, B as BookOpen, F as FileText, _ as __vitePreload } from "./index-BswHPZfj.js";
import { B as Badge } from "./badge-DldjBNgd.js";
import { B as Button } from "./button-RJc8STgg.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CwQygHmS.js";
import { C as ChevronRight } from "./chevron-right-CufdvDqD.js";
import { L as Lightbulb } from "./lightbulb-D_7VHjFB.js";
import { S as Sparkles } from "./sparkles-D6UFf9v9.js";
import "./index-Bx21pQed.js";
import "./index-BdAFL0UN.js";
import "./index-DP0dbc0v.js";
const SyllabusPage = reactExports.lazy(() => __vitePreload(() => import("./SyllabusPage-DbJ2shOK.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0));
const QuestionPapersPage = reactExports.lazy(() => __vitePreload(() => import("./QuestionPapersPage-B3_F-km8.js"), true ? __vite__mapDeps([17,1,2,7,5,8,18,4,10,19,12,13,14,15]) : void 0));
const SmartNotesPage = reactExports.lazy(() => __vitePreload(() => import("./SmartNotesPage-Lrs_QQ3X.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,21,18,10,19,22,23,12,24,25,15,26]) : void 0));
const categoryMeta = {
  [Category.Class10]: {
    label: "CBSE Class 10",
    subtitle: "Board exam preparation — Science, Maths, Social Science, English, Hindi",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
    color: "oklch(0.45 0.16 142)",
    colorLight: "oklch(0.58 0.14 142)",
    accentBg: "linear-gradient(135deg, oklch(0.22 0.10 142) 0%, oklch(0.30 0.13 152) 60%, oklch(0.24 0.08 165) 100%)",
    badge: "Class 10"
  },
  [Category.Class12]: {
    label: "CBSE Class 12",
    subtitle: "Board exam prep — Physics, Chemistry, Mathematics, Biology, English",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.52 0.16 264)",
    accentBg: "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 276) 60%, oklch(0.22 0.08 290) 100%)",
    badge: "Class 12"
  },
  [Category.JEE]: {
    label: "JEE Preparation",
    subtitle: "Joint Entrance Examination — Physics, Chemistry, Mathematics (Main & Advanced)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-8 h-8" }),
    color: "oklch(0.50 0.19 30)",
    colorLight: "oklch(0.64 0.17 30)",
    accentBg: "linear-gradient(135deg, oklch(0.26 0.12 30) 0%, oklch(0.34 0.16 42) 60%, oklch(0.28 0.10 15) 100%)",
    badge: "JEE"
  },
  [Category.NEET]: {
    label: "NEET Preparation",
    subtitle: "National Eligibility cum Entrance Test — Biology, Physics, Chemistry",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "w-8 h-8" }),
    color: "oklch(0.44 0.17 335)",
    colorLight: "oklch(0.58 0.15 335)",
    accentBg: "linear-gradient(135deg, oklch(0.22 0.10 335) 0%, oklch(0.30 0.14 347) 60%, oklch(0.24 0.08 320) 100%)",
    badge: "NEET"
  },
  [Category.CompetitiveExams]: {
    label: "Competitive Exams",
    subtitle: "UPSC, SSC, Bank PO, Railway, NDA & more",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8" }),
    color: "oklch(0.50 0.19 52)",
    colorLight: "oklch(0.64 0.17 52)",
    accentBg: "linear-gradient(135deg, oklch(0.24 0.10 52) 0%, oklch(0.32 0.14 64) 60%, oklch(0.26 0.08 38) 100%)",
    badge: "Govt Exams"
  },
  [Category.SSB]: {
    label: "SSB Preparation",
    subtitle: "Services Selection Board — 5-day interview process",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-8 h-8" }),
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.52 0.16 264)",
    accentBg: "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.28 0.14 276) 60%, oklch(0.22 0.08 290) 100%)",
    badge: "SSB"
  },
  [Category.Maharashtra10]: {
    label: "Maharashtra Board Class 10",
    subtitle: "SSC Board exam — Maths, Science, Social Science, English, Marathi, Hindi",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
    color: "oklch(0.55 0.19 48)",
    colorLight: "oklch(0.68 0.17 48)",
    accentBg: "linear-gradient(135deg, oklch(0.28 0.13 48) 0%, oklch(0.36 0.17 60) 60%, oklch(0.30 0.11 35) 100%)",
    badge: "MH SSC"
  },
  [Category.Bengal10]: {
    label: "West Bengal Board Class 10 (WBBSE)",
    subtitle: "Madhyamik exam — Maths, Physical Science, Life Science, History, Geography, English, Bengali",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
    color: "oklch(0.50 0.16 178)",
    colorLight: "oklch(0.62 0.14 178)",
    accentBg: "linear-gradient(135deg, oklch(0.26 0.10 178) 0%, oklch(0.34 0.14 190) 60%, oklch(0.28 0.08 165) 100%)",
    badge: "WBBSE"
  },
  [Category.Maharashtra12]: {
    label: "Maharashtra Board Class 12 (HSC)",
    subtitle: "HSC Board exam — Physics, Chemistry, Mathematics, Biology, English, Marathi",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
    color: "oklch(0.50 0.19 48)",
    colorLight: "oklch(0.63 0.17 48)",
    accentBg: "linear-gradient(135deg, oklch(0.26 0.13 48) 0%, oklch(0.34 0.17 60) 60%, oklch(0.28 0.11 35) 100%)",
    badge: "MH HSC"
  },
  [Category.Bengal12]: {
    label: "West Bengal Board Class 12 (WBCHSE)",
    subtitle: "Higher Secondary exam — Physics, Chemistry, Maths, Biology, English, Bengali",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
    color: "oklch(0.45 0.16 178)",
    colorLight: "oklch(0.57 0.14 178)",
    accentBg: "linear-gradient(135deg, oklch(0.24 0.10 178) 0%, oklch(0.32 0.14 190) 60%, oklch(0.26 0.08 165) 100%)",
    badge: "WBCHSE"
  }
};
const tabItems = [
  {
    value: "syllabus",
    label: "Syllabus",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
    ocid: "classpage.syllabus.tab"
  },
  {
    value: "papers",
    label: "Question Papers",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
    ocid: "classpage.papers.tab"
  },
  {
    value: "notes",
    label: "Smart Notes",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
    ocid: "classpage.notes.tab"
  },
  {
    value: "qa",
    label: "Chapter Q&A",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-4 h-4" }),
    ocid: "classpage.qa.tab"
  }
];
function PageFallback() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 flex flex-col gap-3 items-center justify-center text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary/40 border-t-primary rounded-full animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Loading…" })
  ] });
}
function ClassPage({ category, onNavigate }) {
  const meta = categoryMeta[category] ?? categoryMeta[Category.Class10];
  const noop = () => {
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "min-h-screen flex flex-col",
      "data-ocid": "classpage.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative overflow-hidden flex-shrink-0",
            style: { background: meta.accentBg },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-15",
                  style: {
                    backgroundImage: `radial-gradient(circle at 80% 50%, ${meta.colorLight} 0%, transparent 55%)`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-[0.06]",
                  style: {
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-4 py-8 md:py-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white/60 text-sm mb-4 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onNavigate("home"),
                      className: "hover:text-white/90 transition-colors",
                      "data-ocid": "classpage.home.link",
                      children: "Home"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 font-medium", children: meta.label })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl",
                      style: {
                        background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.colorLight} 100%)`
                      },
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: meta.icon })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl text-white leading-tight", children: meta.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          className: "text-xs font-bold px-3 py-1 rounded-full border-0",
                          style: {
                            background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.colorLight} 100%)`,
                            color: "white"
                          },
                          children: meta.badge
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-base max-w-2xl leading-relaxed", children: meta.subtitle }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-4 flex-wrap", children: [
                      {
                        label: "Syllabus",
                        tab: "syllabus",
                        ocid: "classpage.syllabus.button"
                      },
                      {
                        label: "Question Papers",
                        tab: "papers",
                        ocid: "classpage.papers.button"
                      },
                      {
                        label: "Smart Notes",
                        tab: "notes",
                        ocid: "classpage.notes.button"
                      }
                    ].map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": chip.ocid,
                        onClick: () => {
                          const el = document.querySelector(
                            `[data-radix-collection-item][data-state][value="${chip.tab}"]`
                          );
                          el == null ? void 0 : el.click();
                        },
                        className: "text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 text-white/80 hover:text-white hover:bg-white/15 transition-all backdrop-blur-sm",
                        children: chip.label
                      },
                      chip.tab
                    )) })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 container mx-auto px-0 sm:px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "syllabus", className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TabsList,
            {
              className: "flex w-full sm:w-auto sm:self-start gap-1 bg-secondary/60 p-1 rounded-xl mb-6 mx-4 sm:mx-0 overflow-x-auto",
              style: { WebkitOverflowScrolling: "touch" },
              children: tabItems.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: tab.value,
                  "data-ocid": tab.ocid,
                  className: "flex items-center gap-1.5 font-semibold whitespace-nowrap rounded-lg text-sm px-4 py-2 data-[state=active]:text-white flex-shrink-0",
                  style: {
                    // Active color via CSS var trick — Tailwind can't do dynamic OKLCH in data-state
                    // We use inline style on the parent and let Radix handle [data-state=active]
                  },
                  children: [
                    tab.icon,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: tab.label === "Question Papers" ? "Papers" : tab.label })
                  ]
                },
                tab.value
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "syllabus", className: "mt-0 px-4 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PageFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyllabusPage, { activeCategory: category, onCategoryChange: noop }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "papers", className: "mt-0 px-4 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PageFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuestionPapersPage,
            {
              activeCategory: category,
              onCategoryChange: noop
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notes", className: "mt-0 px-4 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PageFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SmartNotesPage,
            {
              activeCategory: category,
              onCategoryChange: noop
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "qa", className: "mt-0 px-4 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PageFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChapterQASection, { category }) }) })
        ] }) })
      ]
    }
  );
}
function ChapterQASection({ category }) {
  const meta = categoryMeta[category] ?? categoryMeta[Category.Class10];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl border border-border p-5 mb-6 flex items-start gap-4",
        style: {
          background: `linear-gradient(135deg, ${meta.color}12 0%, ${meta.colorLight}08 100%)`,
          borderColor: `${meta.color}30`
        },
        "data-ocid": "classpage.qa.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
              style: {
                background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.colorLight} 100%)`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-5 h-5 text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-lg text-foreground mb-1", children: [
              "Chapter-wise Q&A — ",
              meta.label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Practice questions with detailed answers for each chapter. Select a subject and chapter to view questions specific to that topic." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "mt-3 font-semibold",
                style: {
                  borderColor: `${meta.color}50`,
                  color: meta.color
                },
                "data-ocid": "classpage.qa.button",
                onClick: () => {
                  const trigger = document.querySelector(
                    '[data-ocid="smartnotes.chapterqa.tab"]'
                  );
                  trigger == null ? void 0 : trigger.click();
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-3.5 h-3.5 mr-1.5" }),
                  "Go to Chapter Q&A"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmartNotesPage, { activeCategory: category, onCategoryChange: () => {
    } })
  ] });
}
export {
  ClassPage as default
};
