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
  ChevronRight,
  Lightbulb,
  MessageSquare,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { type TopicAnswer, searchTopics } from "../data/topicAnswers";
import {
  Category,
  useGetQAByChapter,
  useGetQABySubject,
  useGetSyllabus,
  useSearchQABank,
} from "../hooks/useQueries";
import CategorySelector from "./CategorySelector";

interface AIHelpPageProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

const categoryBadgeClass: Record<Category, string> = {
  [Category.Class10]: "badge-class10",
  [Category.Class12]: "badge-class12",
  [Category.JEE]: "badge-jee",
  [Category.NEET]: "badge-neet",
};

const popularQuestions = [
  "What is Newton's second law?",
  "How to balance chemical equations?",
  "Explain photosynthesis",
  "What is integration?",
  "Define organic chemistry",
];

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
  "nation building india",
  "federalism",
  "power sharing",
  "matrices",
  "integrals",
  "alternating current",
  "biomolecules",
  "solutions chemistry",
  "globalisation",
  "development",
  "money credit",
  "wave optics",
  "semiconductor electronics",
  "atoms bohr",
  "determinants",
];

const askAIExamples = [
  "What is Newton's second law?",
  "Explain photosynthesis",
  "What is the Pythagorean theorem?",
  "What is federalism?",
  "Explain DNA replication",
  "What is the last lesson about?",
  "What are Mendel's laws?",
  "Explain electrochemistry",
  "What is the Dandi March?",
  "What are the colligative properties?",
  "What is a quadratic equation?",
  "Explain the cell cycle",
];

const suggestedTopics = [
  "electricity",
  "photosynthesis",
  "nationalism in india",
  "polynomials",
  "alternating current",
  "the last lesson",
];

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

function TopicSmartNoteResult({ result }: { result: TopicAnswer }) {
  return (
    <div
      className="rounded-xl border border-primary/20 bg-primary/5 p-5"
      data-ocid="aihelp.topic.result"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-base text-foreground">
            {result.title}
          </h3>
          <div className="flex gap-2 mt-1.5 flex-wrap">
            <Badge variant="secondary" className="text-xs">
              {result.subject}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {result.category}
            </Badge>
          </div>
        </div>
      </div>
      <div className="bg-background/80 rounded-lg p-4 border border-border">
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
          {result.answer}
        </p>
      </div>
    </div>
  );
}

// ── Ask AI Tab component ───────────────────────────────────────────────────────
// We inline the QA search here to avoid circular hook dependencies
type QASearchResult = {
  question: string;
  answer: string;
  subject: string;
  category: Category;
};

// Simple client-side QA search
const QA_KEYWORDS_CACHE: Record<string, string[]> = {};
function getQAKeywords(question: string): string[] {
  if (QA_KEYWORDS_CACHE[question]) return QA_KEYWORDS_CACHE[question];
  const words = question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3);
  QA_KEYWORDS_CACHE[question] = words;
  return words;
}

function AskAITab() {
  const [askInput, setAskInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [topicResult, setTopicResult] = useState<TopicAnswer | null>(null);
  const [qaResult, setQAResult] = useState<QASearchResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const askInputRef = useRef<HTMLInputElement>(null);

  const { data: allQAResults } = useSearchQABank("a"); // prefetch a broad set

  const handleAsk = () => {
    const q = askInput.trim();
    if (!q) return;

    setIsThinking(true);
    setTopicResult(null);
    setQAResult(null);
    setNotFound(false);
    setHasSearched(false);

    setTimeout(() => {
      // 1. Try topic search first
      const topic = searchTopics(q);
      if (topic) {
        setTopicResult(topic);
        setIsThinking(false);
        setHasSearched(true);
        return;
      }

      // 2. Try QA bank search (using the preloaded data or direct filter)
      const queryWords = getQAKeywords(q);
      if (queryWords.length > 0 && allQAResults && allQAResults.length > 0) {
        const match = allQAResults.find((entry) => {
          const entryWords = getQAKeywords(entry.question);
          const matchCount = queryWords.filter((qw) =>
            entryWords.some((ew) => ew.includes(qw) || qw.includes(ew)),
          ).length;
          return matchCount >= Math.min(2, queryWords.length);
        });
        if (match) {
          setQAResult(match);
          setIsThinking(false);
          setHasSearched(true);
          return;
        }
      }

      // 3. Not found
      setNotFound(true);
      setIsThinking(false);
      setHasSearched(true);
    }, 400);
  };

  const handleExampleClick = (example: string) => {
    setAskInput(example);
    setIsThinking(true);
    setTopicResult(null);
    setQAResult(null);
    setNotFound(false);
    setHasSearched(false);

    setTimeout(() => {
      const topic = searchTopics(example);
      if (topic) {
        setTopicResult(topic);
        setIsThinking(false);
        setHasSearched(true);
        return;
      }

      const queryWords = getQAKeywords(example);
      if (queryWords.length > 0 && allQAResults && allQAResults.length > 0) {
        const match = allQAResults.find((entry) => {
          const entryWords = getQAKeywords(entry.question);
          const matchCount = queryWords.filter((qw) =>
            entryWords.some((ew) => ew.includes(qw) || qw.includes(ew)),
          ).length;
          return matchCount >= Math.min(2, queryWords.length);
        });
        if (match) {
          setQAResult(match);
          setIsThinking(false);
          setHasSearched(true);
          return;
        }
      }

      setNotFound(true);
      setIsThinking(false);
      setHasSearched(true);
    }, 400);
  };

  const handleClear = () => {
    setAskInput("");
    setTopicResult(null);
    setQAResult(null);
    setNotFound(false);
    setHasSearched(false);
    setIsThinking(false);
    askInputRef.current?.focus();
  };

  return (
    <div>
      {/* Ask input */}
      <div className="mb-6 p-4 bg-card rounded-xl border border-border">
        <p className="text-sm text-muted-foreground mb-3 font-medium">
          Ask any question — Physics, Chemistry, Biology, Maths, English,
          History, Geography, Economics...
        </p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              ref={askInputRef}
              value={askInput}
              onChange={(e) => setAskInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              placeholder="e.g. What is Newton's second law? Explain photosynthesis..."
              className="pl-10 h-12 text-base"
              data-ocid="aihelp.askai.input"
              aria-label="Ask AI any question"
            />
          </div>
          <Button
            size="lg"
            onClick={handleAsk}
            data-ocid="aihelp.askai.button"
            className="h-12 px-6"
            disabled={!askInput.trim() || isThinking}
          >
            {isThinking ? (
              <>
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Get Answer
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Loading state */}
      {isThinking && (
        <div
          data-ocid="aihelp.askai.loading_state"
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <div className="flex-1">
              <Skeleton className="h-5 w-1/2 mb-2" />
              <Skeleton className="h-3 w-1/4" />
            </div>
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      )}

      {/* Topic result from topicAnswers */}
      {!isThinking && topicResult && (
        <div data-ocid="aihelp.askai.result">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Answer for:{" "}
              <span className="font-semibold text-foreground">{askInput}</span>
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="text-muted-foreground"
              data-ocid="aihelp.askai.close_button"
            >
              Ask another
            </Button>
          </div>
          <TopicSmartNoteResult result={topicResult} />
        </div>
      )}

      {/* QA bank result */}
      {!isThinking && qaResult && (
        <div data-ocid="aihelp.askai.result">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Answer for:{" "}
              <span className="font-semibold text-foreground">{askInput}</span>
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="text-muted-foreground"
              data-ocid="aihelp.askai.close_button"
            >
              Ask another
            </Button>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-base text-foreground leading-snug">
                  {qaResult.question}
                </h3>
                <div className="flex gap-2 mt-1.5 flex-wrap">
                  <Badge
                    variant="outline"
                    className={`text-xs ${categoryBadgeClass[qaResult.category]}`}
                  >
                    {qaResult.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {qaResult.subject}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="bg-background/80 rounded-lg p-4 border border-border">
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                {qaResult.answer}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Not found */}
      {!isThinking && notFound && hasSearched && (
        <div
          data-ocid="aihelp.askai.empty_state"
          className="flex flex-col items-center gap-4 py-12 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
            <BrainCircuit className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-foreground">
              No Direct Answer Found
            </p>
            <p className="text-muted-foreground text-sm mt-1 max-w-sm">
              Try rephrasing your question or use one of these popular topics:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-md">
            {suggestedTopics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => handleExampleClick(t)}
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
            data-ocid="aihelp.askai.cancel_button"
          >
            Try Again
          </Button>
        </div>
      )}

      {/* Example questions grid (idle) */}
      {!isThinking && !topicResult && !qaResult && !notFound && (
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Example questions — click to try
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {askAIExamples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => handleExampleClick(example)}
                className="text-sm text-left px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all group"
              >
                <span className="mr-1.5 text-primary/50 group-hover:text-primary">
                  →
                </span>
                {example}
              </button>
            ))}
          </div>
          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "Ask Anything",
                desc: "Type any question in plain English. Topics from Class 10, 12, JEE, and NEET.",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Instant Answers",
                desc: "Get detailed explanations with formulas, examples, and board exam tips.",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "NCERT Aligned",
                desc: "All answers are based on NCERT curriculum and board exam patterns.",
              },
            ].map((t) => (
              <div
                key={t.title}
                className="bg-card rounded-xl border border-border p-5 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  {t.icon}
                </div>
                <h3 className="font-display font-semibold text-sm mb-1.5">
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
    </div>
  );
}

export default function AIHelpPage({
  activeCategory,
  onCategoryChange,
}: AIHelpPageProps) {
  // Q&A Bank tab state
  const [searchInput, setSearchInput] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterChapter, setFilterChapter] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Topic Smart Notes tab state
  const [topicInput, setTopicInput] = useState("");
  const [topicResult, setTopicResult] = useState<TopicAnswer | null>(null);
  const [topicNotFound, setTopicNotFound] = useState(false);
  const topicInputRef = useRef<HTMLInputElement>(null);

  const { data: syllabusData } = useGetSyllabus(activeCategory);
  const subjects = syllabusData?.subjects ?? [];
  const activeSubjectData = subjects.find((s) => s.name === filterSubject);
  const chapters = activeSubjectData?.chapters ?? [];

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

  const handlePopularClick = (q: string) => {
    setSearchInput(q);
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

  const handleChapterFilter = (chapter: string) => {
    setFilterChapter(chapter);
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

  // Topic Smart Notes handlers
  const handleTopicSearch = () => {
    const q = topicInput.trim();
    if (!q) return;
    const result = searchTopics(q);
    if (result) {
      setTopicResult(result);
      setTopicNotFound(false);
    } else {
      setTopicResult(null);
      setTopicNotFound(true);
    }
  };

  const handlePopularTopicClick = (topic: string) => {
    setTopicInput(topic);
    const result = searchTopics(topic);
    if (result) {
      setTopicResult(result);
      setTopicNotFound(false);
    } else {
      setTopicResult(null);
      setTopicNotFound(true);
    }
  };

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <BrainCircuit className="w-4 h-4" />
          <span>AI Help</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Doubt Solver</span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          AI Study Assistant
        </h1>
        <p className="text-muted-foreground text-base">
          Ask any question, get topic smart notes, or search our Q&amp;A bank —
          all subjects covered for Class 10, 12, JEE &amp; NEET.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="askai" className="w-full">
        <TabsList
          className="mb-6 w-full max-w-xl grid grid-cols-3"
          data-ocid="aihelp.tab"
        >
          <TabsTrigger
            value="askai"
            className="flex-1"
            data-ocid="aihelp.askai.tab"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
            Ask AI
          </TabsTrigger>
          <TabsTrigger
            value="smartnotes"
            className="flex-1"
            data-ocid="aihelp.smartnotes.tab"
          >
            <Zap className="w-3.5 h-3.5 mr-1.5" />
            Smart Notes
          </TabsTrigger>
          <TabsTrigger
            value="qabank"
            className="flex-1"
            data-ocid="aihelp.qabank.tab"
          >
            <Search className="w-3.5 h-3.5 mr-1.5" />
            Q&amp;A Bank
          </TabsTrigger>
        </TabsList>

        {/* ── Ask AI Tab ────────────────────────────────────────── */}
        <TabsContent value="askai">
          <AskAITab />
        </TabsContent>

        {/* ── Topic Smart Notes Tab ─────────────────────────────── */}
        <TabsContent value="smartnotes">
          <div className="mb-6 p-4 bg-card rounded-xl border border-border">
            <p className="text-sm text-muted-foreground mb-3 font-medium">
              Ask about any chapter or topic — English, SST, Science, Maths,
              Physics, Chemistry, Biology...
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  ref={topicInputRef}
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTopicSearch()}
                  placeholder="e.g. electricity, letter to god, nationalism in india..."
                  className="pl-10 h-12 text-base"
                  data-ocid="aihelp.topic.input"
                  aria-label="Enter topic for smart notes"
                />
              </div>
              <Button
                size="lg"
                onClick={handleTopicSearch}
                data-ocid="aihelp.topic.button"
                className="h-12 px-6"
                disabled={!topicInput.trim()}
              >
                <Zap className="w-4 h-4 mr-2" />
                Get Notes
              </Button>
            </div>
          </div>

          {/* Popular topics */}
          {!topicResult && !topicNotFound && (
            <div className="mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Popular topics
              </p>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => handlePopularTopicClick(t)}
                    data-ocid="aihelp.topic.item"
                    className="text-sm px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all capitalize"
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "All Subjects",
                    desc: "English, SST, Science, Maths, Physics, Chemistry, Biology and more.",
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Instant Smart Notes",
                    desc: "Get concise chapter summaries with key formulas and board exam tips.",
                  },
                  {
                    icon: <Lightbulb className="w-5 h-5" />,
                    title: "Class 10 & 12 Focus",
                    desc: "Specially curated for CBSE Class 10, Class 12, JEE and NEET students.",
                  },
                ].map((t) => (
                  <div
                    key={t.title}
                    className="bg-card rounded-xl border border-border p-5 text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                      {t.icon}
                    </div>
                    <h3 className="font-display font-semibold text-sm mb-1.5">
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

          {/* Smart note result */}
          {topicResult && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  Smart notes for:{" "}
                  <span className="font-semibold text-foreground">
                    {topicInput}
                  </span>
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setTopicResult(null);
                    setTopicNotFound(false);
                    setTopicInput("");
                  }}
                  className="text-muted-foreground"
                  data-ocid="aihelp.topic.clear_button"
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
              data-ocid="aihelp.topic.empty_state"
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTopicNotFound(false);
                  setTopicInput("");
                  topicInputRef.current?.focus();
                }}
                data-ocid="aihelp.topic.retry_button"
              >
                Try Again
              </Button>
            </div>
          )}
        </TabsContent>

        {/* ── Q&A Bank Tab ──────────────────────────────────────── */}
        <TabsContent value="qabank">
          {/* Category selector */}
          <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-card rounded-xl border border-border">
            <span className="text-sm font-semibold text-foreground min-w-[90px]">
              Select Exam:
            </span>
            <CategorySelector
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Search bar */}
          <div className="relative mb-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  ref={inputRef}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Ask a doubt... e.g. What is Newton's third law?"
                  className="pl-10 h-12 text-base"
                  data-ocid="aihelp.search.input"
                  aria-label="Search doubts"
                />
              </div>
              <Button
                size="lg"
                onClick={handleSearch}
                data-ocid="aihelp.search.button"
                className="h-12 px-6"
                disabled={!searchInput.trim()}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Ask
              </Button>
            </div>
          </div>

          {/* Popular questions */}
          {mode === "idle" && (
            <div className="mb-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Popular doubts
              </p>
              <div className="flex flex-wrap gap-2">
                {popularQuestions.map((q) => (
                  <button
                    type="button"
                    key={q}
                    onClick={() => handlePopularClick(q)}
                    className="text-sm px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Subject + Chapter filter */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-sm font-semibold text-foreground">
              Browse by subject:
            </span>
            <Select value={filterSubject} onValueChange={handleSubjectFilter}>
              <SelectTrigger
                className="w-52"
                aria-label="Filter by subject"
                data-ocid="aihelp.subject.select"
              >
                <SelectValue placeholder="Select subject..." />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s.id.toString()} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {filterSubject && chapters.length > 0 && (
              <>
                <span className="text-sm font-semibold text-muted-foreground">
                  Chapter:
                </span>
                <Select
                  value={filterChapter}
                  onValueChange={handleChapterFilter}
                >
                  <SelectTrigger
                    className="w-64"
                    aria-label="Filter by chapter"
                    data-ocid="aihelp.chapter.select"
                  >
                    <SelectValue placeholder="All chapters..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All chapters</SelectItem>
                    {chapters.map((ch) => (
                      <SelectItem key={ch.name} value={ch.name}>
                        {ch.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            )}
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
                data-ocid="aihelp.clear.button"
              >
                Clear filter
              </Button>
            )}
          </div>

          {/* Loading */}
          {isLoading && (
            <div data-ocid="aihelp.loading_state">
              <QASkeletons count={4} />
            </div>
          )}

          {/* Error */}
          {isError && (
            <div
              data-ocid="aihelp.error_state"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
              {[
                {
                  icon: <Search className="w-5 h-5" />,
                  title: "Search Anything",
                  desc: "Type any concept, formula, or topic to get an instant answer.",
                },
                {
                  icon: <BookOpen className="w-5 h-5" />,
                  title: "Subject Browse",
                  desc: "Filter by subject to see all available Q&As for that topic.",
                },
                {
                  icon: <Lightbulb className="w-5 h-5" />,
                  title: "Curated Answers",
                  desc: "All answers are reviewed and aligned with NCERT curriculum.",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className="bg-card rounded-xl border border-border p-5 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                    {t.icon}
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1.5">
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
                data-ocid="aihelp.empty_state"
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
                {results.map((entry, idx) => (
                  <AccordionItem
                    key={`${entry.question}-${idx}`}
                    value={`qa-${idx}`}
                    className="rounded-xl border border-border bg-card overflow-hidden"
                    data-ocid={`aihelp.item.${idx + 1}`}
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
                              className={`text-xs ${categoryBadgeClass[entry.category]}`}
                            >
                              {entry.category}
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
        </TabsContent>
      </Tabs>
    </section>
  );
}
