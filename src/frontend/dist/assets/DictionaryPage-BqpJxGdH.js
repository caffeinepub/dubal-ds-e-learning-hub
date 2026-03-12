import { r as reactExports, j as jsxRuntimeExports, b as BookMarked, f as Skeleton } from "./index-CwPteKd5.js";
import { B as Button } from "./button-DMfgPtcG.js";
import { I as Input } from "./input-q2aRmz3W.js";
import { e as useSearchGlossary } from "./useQueries-Wt3to53f.js";
import { C as ChevronRight } from "./chevron-right-DDHxRzLp.js";
import { S as Search } from "./search-D7yVhnDR.js";
import { C as CircleAlert } from "./circle-alert-12_x0fuO.js";
import "./index-CCbV1KwV.js";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function GlossarySkeletons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-2/3 mb-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/3 mb-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5 mt-1" })
  ] }, i)) });
}
function DictionaryPage() {
  const [searchInput, setSearchInput] = reactExports.useState("");
  const [activeQuery, setActiveQuery] = reactExports.useState("a");
  const [activeLetter, setActiveLetter] = reactExports.useState("A");
  const inputRef = reactExports.useRef(null);
  const { data: terms, isLoading, isError } = useSearchGlossary(activeQuery);
  reactExports.useEffect(() => {
    const trimmed = searchInput.trim();
    if (trimmed === "") {
      setActiveQuery(activeLetter.toLowerCase());
      return;
    }
    const timer = setTimeout(() => {
      setActiveQuery(trimmed);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput, activeLetter]);
  const handleSearch = () => {
    const q = searchInput.trim();
    setActiveQuery(q || activeLetter.toLowerCase());
  };
  const handleLetterClick = (letter) => {
    setActiveLetter(letter);
    setSearchInput("");
    setActiveQuery(letter.toLowerCase());
  };
  const isSearchMode = searchInput.trim() !== "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-sm mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dictionary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "English Dictionary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-2", children: "English Dictionary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "General English dictionary with Hindi meanings — search any word from A to Z or browse by letter. Like an Oxford dictionary." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            ref: inputRef,
            value: searchInput,
            onChange: (e) => setSearchInput(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleSearch(),
            placeholder: "Search any word, e.g. resilience, abandon, courage, eloquent...",
            className: "pl-10 h-12 text-base",
            "data-ocid": "dictionary.search.input",
            "aria-label": "Search dictionary"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "lg",
          onClick: handleSearch,
          "data-ocid": "dictionary.search.button",
          className: "h-12 px-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 mr-2" }),
            "Search"
          ]
        }
      )
    ] }),
    !isSearchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Browse alphabetically" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ALPHABET.map((letter) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => handleLetterClick(letter),
          className: `w-9 h-9 rounded-lg text-sm font-bold transition-all duration-150 ${activeLetter === letter && !isSearchMode ? "bg-primary text-primary-foreground shadow-sm" : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"}`,
          "aria-pressed": activeLetter === letter && !isSearchMode,
          children: letter
        },
        letter
      )) })
    ] }),
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "dictionary.loading_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlossarySkeletons, {}) }),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "dictionary.error_state",
        className: "flex flex-col items-center gap-4 py-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-12 h-12 text-destructive/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Failed to load dictionary" })
        ]
      }
    ),
    !isLoading && !isError && terms && terms.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "dictionary.empty_state",
        className: "flex flex-col items-center gap-4 py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground", children: "No Words Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: isSearchMode ? `No entries matching "${searchInput}". Try a different keyword.` : `No terms starting with "${activeLetter}" yet.` })
          ] })
        ]
      }
    ),
    !isLoading && !isError && terms && terms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          terms.length,
          " word",
          terms.length !== 1 ? "s" : "",
          " ",
          isSearchMode ? `matching "${searchInput}"` : `starting with "${activeLetter}"`
        ] }),
        isSearchMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              setSearchInput("");
              setActiveQuery(activeLetter.toLowerCase());
            },
            className: "text-muted-foreground text-xs",
            children: "Clear search"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: terms.map((term, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `dictionary.item.${idx + 1}`,
          className: "bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground leading-tight mb-1", children: term.term }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 leading-relaxed", children: term.definition }),
            term.hindiMeaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start gap-2 pt-2.5 border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[oklch(0.82_0.10_50)] text-[oklch(0.15_0.14_30)] border border-[oklch(0.68_0.14_30)] tracking-wide", children: "हिंदी" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed font-medium", children: term.hindiMeaning })
            ] })
          ]
        },
        `${term.term}-${idx}`
      )) })
    ] })
  ] });
}
export {
  DictionaryPage as default
};
