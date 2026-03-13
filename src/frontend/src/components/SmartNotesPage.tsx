import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { CHAPTER_QA_CLASS10 } from "../data/chapterQAClass10";
import { CHAPTER_QA_CLASS12 } from "../data/chapterQAClass12";
import { QA_BANK } from "../data/qaBank";
import { type TopicAnswer, searchTopics } from "../data/topicAnswers";
import {
  Category,
  useGetQAByChapter,
  useGetQABySubject,
  useSearchQABank,
} from "../hooks/useQueries";

interface SmartNotesPageProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  initialTopic?: string;
}

// ── Error Boundary ────────────────────────────────────────────────────────────
class TabErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("TabErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-destructive/60" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-foreground">
              Something went wrong
            </p>
            <p className="text-muted-foreground text-sm mt-1 max-w-sm">
              This section encountered an error. Click below to try again.
            </p>
          </div>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="text-sm px-4 py-2 rounded-lg border border-border bg-card text-primary hover:bg-primary/5 transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Smart Note Result Card ────────────────────────────────────────────────────
function TopicSmartNoteResult({ result }: { result: TopicAnswer }) {
  return (
    <div
      className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6"
      data-ocid="smartnotes.topic.result"
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-xl text-foreground leading-snug">
            {result.title}
          </h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            <Badge variant="secondary" className="text-xs font-medium">
              {result.subject}
            </Badge>
            <Badge variant="outline" className="text-xs font-medium">
              {result.category}
            </Badge>
          </div>
        </div>
      </div>
      <div className="bg-background rounded-xl p-5 border border-border shadow-xs">
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
          {result.answer}
        </p>
      </div>
    </div>
  );
}

// ── QA Skeletons ─────────────────────────────────────────────────────────────
const SKELETON_IDS = ["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f"];
function QASkeletons({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {SKELETON_IDS.slice(0, count).map((id) => (
        <div key={id} className="rounded-xl border border-border p-4 bg-card">
          <Skeleton className="h-5 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mt-1" />
        </div>
      ))}
    </div>
  );
}

const categoryBadgeClass: Record<Category, string> = {
  [Category.Class10]: "badge-class10",
  [Category.Class12]: "badge-class12",
  [Category.JEE]: "badge-jee",
  [Category.NEET]: "badge-neet",
  [Category.CompetitiveExams]: "badge-class10",
  [Category.SSB]: "badge-class12",
  [Category.Maharashtra10]: "badge-class10",
  [Category.Bengal10]: "badge-class12",
  [Category.Maharashtra12]: "badge-class10",
  [Category.Bengal12]: "badge-class12",
};

const popularTopics = [
  "electricity",
  "photosynthesis",
  "polynomials",
  "nationalism in india",
  "the last lesson",
  "letter to god",
  "electrochemistry",
  "complex numbers",
  "cell division",
  "federalism",
  "power sharing",
  "matrices",
  "integrals",
  "alternating current",
  "biomolecules",
  "solutions chemistry",
  "globalisation",
  "development economics",
  "wave optics",
  "semiconductor electronics",
  "atoms bohr",
  "determinants",
  "heredity evolution",
  "light reflection",
];

// ── Smart Notes Tab ───────────────────────────────────────────────────────────
function SmartNotesTab({ initialTopic }: { initialTopic?: string }) {
  const [topicInput, setTopicInput] = useState(initialTopic ?? "");
  const [topicResult, setTopicResult] = useState<TopicAnswer | null>(null);
  const [topicNotFound, setTopicNotFound] = useState(false);
  const topicInputRef = useRef<HTMLInputElement>(null);

  const runSearch = (q: string) => {
    if (!q.trim()) return;
    const result = searchTopics(q.trim());
    if (result) {
      setTopicResult(result);
      setTopicNotFound(false);
    } else {
      setTopicResult(null);
      setTopicNotFound(true);
    }
  };

  // Auto-search when initialTopic is provided
  useEffect(() => {
    if (initialTopic) {
      setTopicInput(initialTopic);
      const q = initialTopic.trim();
      if (q) {
        const result = searchTopics(q);
        if (result) {
          setTopicResult(result);
          setTopicNotFound(false);
        } else {
          setTopicResult(null);
          setTopicNotFound(true);
        }
      }
    }
  }, [initialTopic]);

  const handleTopicSearch = () => runSearch(topicInput);

  const handlePopularTopicClick = (topic: string) => {
    setTopicInput(topic);
    runSearch(topic);
  };

  const handleClear = () => {
    setTopicResult(null);
    setTopicNotFound(false);
    setTopicInput("");
    topicInputRef.current?.focus();
  };

  return (
    <div>
      {/* Search input */}
      <div className="mb-6 p-5 bg-card rounded-2xl border border-border shadow-xs">
        <p className="text-sm text-muted-foreground mb-3 font-medium">
          Get detailed Smart Notes for any topic — English, SST, Science, Maths,
          Physics, Chemistry, Biology, History, Geography and more.
        </p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              ref={topicInputRef}
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTopicSearch()}
              placeholder="e.g. electricity, letter to god, nationalism in india, photosynthesis..."
              className="pl-10 h-12 text-base"
              data-ocid="smartnotes.topic.input"
              aria-label="Enter topic for smart notes"
            />
          </div>
          <Button
            size="lg"
            onClick={handleTopicSearch}
            data-ocid="smartnotes.topic.button"
            className="h-12 px-6"
            disabled={!topicInput.trim()}
          >
            <Zap className="w-4 h-4 mr-2" />
            Get Notes
          </Button>
        </div>
      </div>

      {/* Popular topics (idle) */}
      {!topicResult && !topicNotFound && (
        <div className="mb-8">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Popular topics — click to get notes instantly
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {popularTopics.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => handlePopularTopicClick(t)}
                data-ocid="smartnotes.topic.item"
                className="text-sm px-3 py-1.5 rounded-full border border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all capitalize font-medium"
              >
                {t}
              </button>
            ))}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "600+ Words Per Note",
                desc: "Each smart note is detailed with theory, formulas, examples, and board exam tips. Never too short.",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Instant Generation",
                desc: "Type any topic name and get NCERT-aligned smart notes instantly. No wait, no login required.",
                color: "bg-accent/20 text-accent-foreground",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Class 10 & 12 Focus",
                desc: "Specially curated for CBSE Class 10, 12, JEE and NEET students. All major subjects covered.",
                color: "bg-[oklch(0.82_0.10_142)] text-[oklch(0.18_0.14_142)]",
              },
            ].map((t) => (
              <div
                key={t.title}
                className="bg-card rounded-2xl border border-border p-5"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center mb-3`}
                >
                  {t.icon}
                </div>
                <h3 className="font-display font-semibold text-sm mb-1.5 text-foreground">
                  {t.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Result */}
      {topicResult && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Smart notes for:{" "}
              <span className="font-semibold text-foreground capitalize">
                {topicInput}
              </span>
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="text-muted-foreground"
              data-ocid="smartnotes.topic.close_button"
            >
              Clear
            </Button>
          </div>
          <TopicSmartNoteResult result={topicResult} />
        </div>
      )}

      {/* Not found */}
      {topicNotFound && (
        <div
          data-ocid="smartnotes.topic.empty_state"
          className="flex flex-col items-center gap-4 py-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
            <BrainCircuit className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-foreground">
              Topic Not Found
            </p>
            <p className="text-muted-foreground text-sm mt-1 max-w-sm">
              Try a different keyword. Popular topics include: electricity,
              photosynthesis, nationalism, polynomials, the last lesson...
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-md">
            {[
              "electricity",
              "photosynthesis",
              "polynomials",
              "the last lesson",
              "nationalism in india",
              "cell division",
            ].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => handlePopularTopicClick(t)}
                className="text-sm px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all capitalize"
              >
                {t}
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClear}
            data-ocid="smartnotes.topic.cancel_button"
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
}

// ── Q&A Bank Tab ──────────────────────────────────────────────────────────────
function QABankTab({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}) {
  const [searchInput, setSearchInput] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterChapter, setFilterChapter] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const QA_SUBJECTS: Record<Category, string[]> = {
    [Category.Class10]: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Hindi",
    ],
    [Category.Class12]: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
      "History",
      "Geography",
      "Political Science",
    ],
    [Category.JEE]: ["Physics", "Chemistry", "Mathematics"],
    [Category.NEET]: ["Biology", "Physics", "Chemistry"],
    [Category.CompetitiveExams]: [
      "GK",
      "GS",
      "Reasoning",
      "Current Affairs",
      "Banking",
    ],
    [Category.SSB]: [
      "OIR",
      "Psychology",
      "GTO",
      "Personal Interview",
      "Conference",
    ],
    [Category.Maharashtra10]: [
      "Mathematics (Algebra)",
      "Mathematics (Geometry)",
      "Science & Technology Part 1",
      "Science & Technology Part 2",
      "Social Science",
      "English",
      "Marathi",
      "Hindi",
    ],
    [Category.Bengal10]: [
      "Mathematics",
      "Physical Science",
      "Life Science",
      "History",
      "Geography",
      "English",
      "Bengali",
    ],
    [Category.Maharashtra12]: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
      "Marathi",
    ],
    [Category.Bengal12]: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
      "Bengali",
    ],
  };

  const subjects = QA_SUBJECTS[activeCategory].map((name) => ({
    name,
    id: 0n,
    chapters: [] as { name: string; url?: string; videoUrl?: string }[],
  }));

  const {
    data: searchResults,
    isLoading: searchLoading,
    isError: searchError,
  } = useSearchQABank(activeSearch);

  const {
    data: subjectResults,
    isLoading: subjectLoading,
    isError: subjectError,
  } = useGetQABySubject(activeCategory, filterChapter ? "" : filterSubject);

  const {
    data: chapterResults,
    isLoading: chapterLoading,
    isError: chapterError,
  } = useGetQAByChapter(activeCategory, filterSubject, filterChapter);

  const mode: "idle" | "search" | "subject" | "chapter" =
    activeSearch.trim() !== ""
      ? "search"
      : filterChapter !== ""
        ? "chapter"
        : filterSubject !== ""
          ? "subject"
          : "idle";

  const results =
    mode === "search"
      ? searchResults
      : mode === "chapter"
        ? chapterResults
        : mode === "subject"
          ? subjectResults
          : [];
  const isLoading =
    mode === "search"
      ? searchLoading
      : mode === "chapter"
        ? chapterLoading
        : mode === "subject"
          ? subjectLoading
          : false;
  const isError =
    mode === "search"
      ? searchError
      : mode === "chapter"
        ? chapterError
        : mode === "subject"
          ? subjectError
          : false;

  const handleSearch = () => {
    const q = searchInput.trim();
    if (!q) return;
    setFilterSubject("");
    setFilterChapter("");
    setActiveSearch(q);
  };

  const handleSubjectFilter = (subject: string) => {
    setFilterSubject(subject);
    setFilterChapter("");
    setActiveSearch("");
    setSearchInput("");
  };

  const handleCategoryChange = (cat: Category) => {
    setFilterSubject("");
    setFilterChapter("");
    setActiveSearch("");
    setSearchInput("");
    onCategoryChange(cat);
  };

  const popularQuestions = [
    "What is Newton's second law?",
    "How to balance chemical equations?",
    "Explain photosynthesis",
    "What is integration?",
    "Define organic chemistry",
  ];

  return (
    <div>
      {/* Exam category selector */}
      <div className="flex flex-wrap items-center gap-4 mb-5 p-4 bg-card rounded-xl border border-border">
        <span className="text-sm font-semibold text-foreground">
          Select Exam:
        </span>
        <div className="flex flex-wrap gap-2">
          {(
            [
              Category.Class10,
              Category.Class12,
              Category.JEE,
              Category.NEET,
              Category.CompetitiveExams,
              Category.SSB,
            ] as Category[]
          ).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all font-medium ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"
              }`}
              data-ocid="smartnotes.qabank.tab"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            ref={inputRef}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search doubts... e.g. What is Newton's third law?"
            className="pl-10 h-12 text-base"
            data-ocid="smartnotes.qabank.search_input"
            aria-label="Search Q&A bank"
          />
        </div>
        <Button
          size="lg"
          onClick={handleSearch}
          data-ocid="smartnotes.qabank.button"
          className="h-12 px-6"
          disabled={!searchInput.trim()}
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Popular questions (idle) */}
      {mode === "idle" && (
        <div className="mb-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Popular doubts
          </p>
          <div className="flex flex-wrap gap-2">
            {popularQuestions.map((q) => (
              <button
                type="button"
                key={q}
                onClick={() => {
                  setSearchInput(q);
                  setFilterSubject("");
                  setFilterChapter("");
                  setActiveSearch(q);
                }}
                className="text-sm px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Subject filter */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-sm font-semibold text-foreground">
          Browse by subject:
        </span>
        <Select value={filterSubject} onValueChange={handleSubjectFilter}>
          <SelectTrigger
            className="w-52"
            aria-label="Filter by subject"
            data-ocid="smartnotes.qabank.select"
          >
            <SelectValue placeholder="Select subject..." />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((s) => (
              <SelectItem key={s.name} value={s.name}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {(filterSubject || activeSearch) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setFilterSubject("");
              setFilterChapter("");
              setActiveSearch("");
              setSearchInput("");
            }}
            className="text-muted-foreground"
            data-ocid="smartnotes.qabank.cancel_button"
          >
            Clear filter
          </Button>
        )}
      </div>

      {/* Loading */}
      {isLoading && (
        <div data-ocid="smartnotes.qabank.loading_state">
          <QASkeletons count={4} />
        </div>
      )}

      {/* Error */}
      {isError && (
        <div
          data-ocid="smartnotes.qabank.error_state"
          className="flex flex-col items-center gap-4 py-16 text-center"
        >
          <AlertCircle className="w-12 h-12 text-destructive/50" />
          <p className="font-semibold text-foreground">
            Failed to load Q&amp;A
          </p>
        </div>
      )}

      {/* Idle state */}
      {mode === "idle" && !isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
          {[
            {
              icon: <Search className="w-5 h-5" />,
              title: "Search Anything",
              desc: "Type any concept, formula, or topic to get an instant answer from our Q&A bank.",
            },
            {
              icon: <BookOpen className="w-5 h-5" />,
              title: "Subject Browse",
              desc: "Filter by subject to see all available Q&As for that topic.",
            },
            {
              icon: <Lightbulb className="w-5 h-5" />,
              title: "Curated Answers",
              desc: "All answers are reviewed and aligned with NCERT curriculum for board exams.",
            },
          ].map((t) => (
            <div
              key={t.title}
              className="bg-card rounded-2xl border border-border p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                {t.icon}
              </div>
              <h3 className="font-display font-semibold text-sm mb-1.5 text-foreground">
                {t.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* No results */}
      {!isLoading &&
        !isError &&
        results &&
        results.length === 0 &&
        mode !== "idle" && (
          <div
            data-ocid="smartnotes.qabank.empty_state"
            className="flex flex-col items-center gap-4 py-20 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
              <BrainCircuit className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="font-display font-semibold text-lg text-foreground">
                No Results Found
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Try a different keyword or browse by subject.
              </p>
            </div>
          </div>
        )}

      {/* Results */}
      {!isLoading && !isError && results && results.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            {results.length} answer{results.length !== 1 ? "s" : ""} found
            {mode === "search" && ` for "${activeSearch}"`}
            {mode === "subject" && ` in ${filterSubject}`}
          </p>
          <Accordion type="multiple" className="space-y-3">
            {results
              .filter((entry) => entry?.question)
              .map((entry, idx) => (
                <AccordionItem
                  key={`${entry.question}-${idx}`}
                  value={`qa-${idx}`}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                  data-ocid={`smartnotes.item.${idx + 1}`}
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/40 transition-colors">
                    <div className="flex items-start gap-3 text-left flex-1 mr-3">
                      <div className="w-7 h-7 rounded-lg bg-accent/20 text-accent-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Lightbulb className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {entry.question}
                        </p>
                        <div className="flex gap-2 mt-1.5">
                          <Badge
                            variant="outline"
                            className={`text-xs ${entry.category ? (categoryBadgeClass[entry.category] ?? "") : ""}`}
                          >
                            {entry.category ?? ""}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {entry.subject}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4">
                    <div className="pt-2 pl-10">
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-sm text-foreground leading-relaxed">
                          {entry.answer}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      )}
    </div>
  );
}

// ── Chapter Q&A Tab ───────────────────────────────────────────────────────────
function ChapterQATab() {
  const [selectedCategory, setSelectedCategory] = useState<
    "Class 10" | "Class 12"
  >("Class 10");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const dataSource =
    selectedCategory === "Class 10" ? CHAPTER_QA_CLASS10 : CHAPTER_QA_CLASS12;

  const subjects = Array.from(
    new Set(dataSource.map((entry) => entry.subject)),
  ).sort();

  const chapters = selectedSubject
    ? dataSource
        .filter((entry) => entry.subject === selectedSubject)
        .map((entry) => entry.chapter)
    : [];

  const chapterData =
    selectedSubject && selectedChapter
      ? dataSource.find(
          (entry) =>
            entry.subject === selectedSubject &&
            entry.chapter === selectedChapter,
        )
      : null;

  const handleCategoryChange = (cat: "Class 10" | "Class 12") => {
    setSelectedCategory(cat);
    setSelectedSubject("");
    setSelectedChapter("");
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedChapter("");
  };

  return (
    <div>
      {/* Class selector */}
      <div className="flex flex-wrap items-center gap-3 mb-5 p-4 bg-card rounded-xl border border-border">
        <span className="text-sm font-semibold text-foreground">Class:</span>
        <div className="flex gap-2">
          {(["Class 10", "Class 12"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all font-semibold ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10"
              }`}
              data-ocid="smartnotes.chapterqa.toggle"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Subject + Chapter selectors */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Select value={selectedSubject} onValueChange={handleSubjectChange}>
          <SelectTrigger
            className="w-56"
            aria-label="Select subject"
            data-ocid="smartnotes.chapterqa.select"
          >
            <SelectValue placeholder="Select subject..." />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedSubject && chapters.length > 0 && (
          <Select value={selectedChapter} onValueChange={setSelectedChapter}>
            <SelectTrigger
              className="w-72"
              aria-label="Select chapter"
              data-ocid="smartnotes.chapterqa.chapter.select"
            >
              <SelectValue placeholder="Select chapter..." />
            </SelectTrigger>
            <SelectContent>
              {chapters.map((ch) => (
                <SelectItem key={ch} value={ch}>
                  {ch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {(selectedSubject || selectedChapter) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedSubject("");
              setSelectedChapter("");
            }}
            className="text-muted-foreground"
            data-ocid="smartnotes.chapterqa.cancel_button"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Questions display */}
      {chapterData && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 min-w-0">
              <h2 className="font-display font-bold text-xl text-foreground leading-snug">
                {chapterData.chapter}
              </h2>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  {chapterData.subject}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {selectedCategory}
                </Badge>
                <Badge className="text-xs bg-primary/10 text-primary border-0">
                  {chapterData.questions.length} questions
                </Badge>
              </div>
            </div>
          </div>
          <Accordion type="multiple" className="space-y-2">
            {chapterData.questions.map((item, idx) => (
              <AccordionItem
                key={item.q.slice(0, 50)}
                value={`cqa-${idx}`}
                className="rounded-xl border border-border bg-card overflow-hidden"
                data-ocid={`smartnotes.chapterqa.item.${idx + 1}`}
              >
                <AccordionTrigger className="px-4 py-3.5 hover:no-underline hover:bg-secondary/40 transition-colors">
                  <div className="flex items-start gap-3 text-left flex-1 mr-3">
                    <div className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {item.q}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="pt-2 pl-9">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-sm text-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}

      {/* Idle/no chapter selected */}
      {!chapterData && (
        <div
          data-ocid="smartnotes.chapterqa.empty_state"
          className="flex flex-col items-center gap-5 py-16 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-foreground">
              {selectedSubject
                ? "Now select a chapter"
                : "Select a subject and chapter to browse chapter-wise Q&A"}
            </p>
            <p className="text-muted-foreground text-sm mt-1 max-w-sm">
              {selectedSubject
                ? `Choose a chapter from ${selectedSubject} to see all Q&As with detailed answers.`
                : "Minimum 20 questions per chapter — curated for Class 10 & Class 12 CBSE board exams."}
            </p>
          </div>
          {!selectedSubject && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md w-full mt-2">
              {(selectedCategory === "Class 10"
                ? [
                    "English",
                    "Mathematics",
                    "Science",
                    "Hindi",
                    "SST History",
                    "SST Geography",
                  ]
                : [
                    "Physics",
                    "Chemistry",
                    "Mathematics",
                    "Biology",
                    "English",
                    "History",
                  ]
              ).map((subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => handleSubjectChange(subj)}
                  className="text-sm px-3 py-2 rounded-xl border border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all text-center font-semibold"
                  data-ocid="smartnotes.chapterqa.button"
                >
                  {subj}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function SmartNotesPage({
  activeCategory,
  onCategoryChange,
  initialTopic,
}: SmartNotesPageProps) {
  return (
    <section className="min-h-screen">
      {/* Hero Header */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.12 264) 0%, oklch(0.30 0.16 280) 50%, oklch(0.26 0.10 300) 100%)",
        }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.9 0.12 264) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.75 0.18 52) 0%, transparent 40%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Study Resources</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-3 leading-tight">
            Smart Notes &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.85 0.18 52), oklch(0.78 0.22 65))",
              }}
            >
              Q&amp;A Bank
            </span>
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
            Get detailed 600+ word smart notes on any topic, search our curated
            Q&amp;A bank, or browse chapter-wise questions — all subjects
            covered for CBSE Class 10 &amp; 12, JEE and NEET.
          </p>
          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-2">
            {[
              "📝 600+ Word Smart Notes",
              "🔍 Searchable Q&A Bank",
              "📚 Chapter-wise Questions",
              "✅ NCERT Aligned",
            ].map((stat) => (
              <span
                key={stat}
                className="text-xs px-3 py-1.5 rounded-full text-white/80 border border-white/20"
                style={{ background: "oklch(1 0 0 / 0.08)" }}
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-10">
        <Tabs defaultValue="smartnotes" className="w-full">
          <TabsList
            className="mb-8 w-full grid grid-cols-3 h-14 p-1.5 bg-secondary/60 rounded-2xl"
            data-ocid="smartnotes.tab"
          >
            <TabsTrigger
              value="smartnotes"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold rounded-xl h-full data-[state=active]:shadow-sm"
              data-ocid="smartnotes.smartnotes.tab"
            >
              <Zap className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Smart Notes</span>
            </TabsTrigger>
            <TabsTrigger
              value="qabank"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold rounded-xl h-full data-[state=active]:shadow-sm"
              data-ocid="smartnotes.qabank.tab"
            >
              <Search className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Q&amp;A Bank</span>
            </TabsTrigger>
            <TabsTrigger
              value="chapterqa"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold rounded-xl h-full data-[state=active]:shadow-sm"
              data-ocid="smartnotes.chapterqa.tab"
            >
              <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Chapter Q&amp;A</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="smartnotes">
            <TabErrorBoundary>
              <SmartNotesTab initialTopic={initialTopic} />
            </TabErrorBoundary>
          </TabsContent>

          <TabsContent value="qabank">
            <TabErrorBoundary>
              <QABankTab
                activeCategory={activeCategory}
                onCategoryChange={onCategoryChange}
              />
            </TabErrorBoundary>
          </TabsContent>

          <TabsContent value="chapterqa">
            <TabErrorBoundary>
              <ChapterQATab />
            </TabErrorBoundary>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
