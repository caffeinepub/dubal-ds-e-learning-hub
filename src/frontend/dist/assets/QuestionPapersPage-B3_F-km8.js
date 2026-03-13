import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, F as FileText, E as ExternalLink, C as Category, D as Download, f as Skeleton } from "./index-BswHPZfj.js";
import { B as Badge } from "./badge-DldjBNgd.js";
import { B as Button } from "./button-RJc8STgg.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Ww-fSHwt.js";
import { u as useGetSyllabus, a as useGetQuestionPapers } from "./useQueries-YjDDIJXZ.js";
import { C as CategorySelector } from "./CategorySelector-sWObrAjS.js";
import { C as ChevronRight } from "./chevron-right-CufdvDqD.js";
import { C as CircleAlert } from "./circle-alert-Bcc-ENUo.js";
import "./index-Bx21pQed.js";
import "./index-BdAFL0UN.js";
import "./index-Cc4AyBma.js";
import "./check-C0Orq__e.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]
];
const BookCheck = createLucideIcon("book-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const categoryLabels = {
  [Category.Class10]: "CBSE Class 10",
  [Category.Class12]: "CBSE Class 12",
  [Category.JEE]: "JEE",
  [Category.NEET]: "NEET",
  [Category.CompetitiveExams]: "Competitive Exams",
  [Category.SSB]: "SSB",
  [Category.Maharashtra10]: "Maharashtra Board Class 10",
  [Category.Bengal10]: "West Bengal Board Class 10",
  [Category.Maharashtra12]: "Maharashtra Board Class 12",
  [Category.Bengal12]: "West Bengal Board Class 12"
};
function PaperCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-lg" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-32" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-32" })
    ] })
  ] });
}
function QuestionPapersPage({
  activeCategory,
  onCategoryChange
}) {
  const [selectedSubject, setSelectedSubject] = reactExports.useState("");
  const { data: syllabusData } = useGetSyllabus(activeCategory);
  const subjects = (syllabusData == null ? void 0 : syllabusData.subjects) ?? [];
  const {
    data: papers,
    isLoading,
    isError
  } = useGetQuestionPapers(activeCategory, selectedSubject);
  const handleCategoryChange = (cat) => {
    setSelectedSubject("");
    onCategoryChange(cat);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-sm mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Question Papers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: categoryLabels[activeCategory] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-2", children: "Question Papers & Solutions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "Browse previous year question papers with solutions from official sources." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 mb-8 p-4 bg-card rounded-xl border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground min-w-[90px]", children: "Select Exam:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CategorySelector,
        {
          activeCategory,
          onCategoryChange: handleCategoryChange
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Subject:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedSubject, onValueChange: setSelectedSubject, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "w-64",
            "data-ocid": "papers.subject.select",
            "aria-label": "Select subject",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose a subject..." })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.name, children: s.name }, s.id.toString())) })
      ] })
    ] }),
    !selectedSubject && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "papers.empty_state",
        className: "flex flex-col items-center gap-4 py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground", children: "Select a Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Choose a subject above to browse question papers." })
          ] })
        ]
      }
    ),
    selectedSubject && isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "papers.loading_state",
        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
        children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaperCardSkeleton, {}, i))
      }
    ),
    selectedSubject && isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "papers.error_state",
        className: "flex flex-col items-center gap-4 py-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-12 h-12 text-destructive/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Failed to load papers" })
        ]
      }
    ),
    selectedSubject && !isLoading && !isError && papers && papers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "papers.empty_state",
        className: "flex flex-col items-center gap-4 py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookCheck, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground", children: "No Papers Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
              "No papers available for ",
              selectedSubject,
              " yet."
            ] })
          ] })
        ]
      }
    ),
    selectedSubject && !isLoading && !isError && papers && papers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
        papers.length,
        " paper",
        papers.length !== 1 ? "s" : "",
        " found for",
        " ",
        selectedSubject
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: papers.map((paper, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `papers.item.${idx + 1}`,
          className: "bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground leading-tight mb-1 line-clamp-2", children: paper.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                    paper.year.toString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: selectedSubject })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "flex-1 min-w-[120px]",
                  "data-ocid": `papers.download.button.${idx + 1}`,
                  onClick: () => window.open(paper.url, "_blank", "noopener,noreferrer"),
                  "aria-label": `Open question paper for ${paper.title}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 mr-1.5" }),
                    activeCategory === Category.JEE ? "Open JEE Portal" : activeCategory === Category.NEET ? "Open NEET Portal" : "Download PDF"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "flex-1 min-w-[120px]",
                  "data-ocid": `papers.solution.button.${idx + 1}`,
                  disabled: !paper.solutionUrl,
                  onClick: () => paper.solutionUrl && window.open(
                    paper.solutionUrl,
                    "_blank",
                    "noopener,noreferrer"
                  ),
                  "aria-label": paper.solutionUrl ? `View solutions for ${paper.title}` : "No solution available",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 mr-1.5" }),
                    paper.solutionUrl ? "Solutions" : "No Solution"
                  ]
                }
              )
            ] })
          ]
        },
        `${paper.title}-${paper.year.toString()}`
      )) })
    ] })
  ] });
}
export {
  QuestionPapersPage as default
};
