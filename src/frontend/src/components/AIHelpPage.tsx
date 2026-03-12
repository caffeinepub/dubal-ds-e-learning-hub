import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BrainCircuit,
  ChevronRight,
  Lightbulb,
  MessageSquare,
  Mic,
  MicOff,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

// ── Web Speech API types ──────────────────────────────────────────────────────
interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: ISpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}
interface ISpeechRecognitionEvent {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}
type SpeechRecognitionConstructor = new () => ISpeechRecognition;

function getSpeechRecognition(): SpeechRecognitionConstructor | null {
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

// ── Voice Search Hook ─────────────────────────────────────────────────────────
function useVoiceSearch(onResult: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognitionAPI = getSpeechRecognition();
    if (SpeechRecognitionAPI) {
      setIsSupported(true);
      const rec = new SpeechRecognitionAPI();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-IN";
      rec.onresult = (event: ISpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
        setIsListening(false);
      };
      rec.onerror = () => setIsListening(false);
      rec.onend = () => setIsListening(false);
      recognitionRef.current = rec;
    }
  }, [onResult]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || isListening) return;
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      setIsListening(false);
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isListening, isSupported, startListening, stopListening };
}
import { QA_BANK } from "../data/qaBank";
import { type TopicAnswer, searchTopics } from "../data/topicAnswers";
import { Category } from "../hooks/useQueries";
import AIChatTab from "./AIChatTab";

interface AIHelpPageProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
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
};

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

// ── Client-side QA search ─────────────────────────────────────────────────────
type QASearchResult = {
  question: string;
  answer: string;
  subject: string;
  category: Category;
};

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

function searchQABankDirect(query: string): QASearchResult | null {
  const queryWords = getQAKeywords(query);
  if (queryWords.length === 0) return null;
  const match = QA_BANK.find((entry) => {
    const entryWords = getQAKeywords(entry.question);
    const matchCount = queryWords.filter((qw) =>
      entryWords.some((ew) => ew.includes(qw) || qw.includes(ew)),
    ).length;
    return matchCount >= Math.min(2, queryWords.length);
  });
  return match ?? null;
}

// ── Smart Note Result Card ────────────────────────────────────────────────────
function TopicSmartNoteResult({ result }: { result: TopicAnswer }) {
  return (
    <div
      className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6"
      data-ocid="aihelp.topic.result"
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

// ── Quick Search Tab ──────────────────────────────────────────────────────────
function QuickSearchTab({
  activeCategory,
}: {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}) {
  const [askInput, setAskInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [topicResult, setTopicResult] = useState<TopicAnswer | null>(null);
  const [qaResult, setQAResult] = useState<QASearchResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const askInputRef = useRef<HTMLInputElement>(null);

  const handleVoiceResult = useCallback((text: string) => {
    setAskInput(text);
    // Auto-search after voice input
    setTimeout(() => {
      runSearch(text);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isListening, isSupported, startListening, stopListening } =
    useVoiceSearch(handleVoiceResult);

  const runSearch = (q: string) => {
    setIsThinking(true);
    setTopicResult(null);
    setQAResult(null);
    setNotFound(false);
    setHasSearched(false);

    setTimeout(() => {
      const topic = searchTopics(q);
      if (topic) {
        setTopicResult(topic);
        setIsThinking(false);
        setHasSearched(true);
        return;
      }
      const match = searchQABankDirect(q);
      if (match) {
        setQAResult(match);
        setIsThinking(false);
        setHasSearched(true);
        return;
      }
      setNotFound(true);
      setIsThinking(false);
      setHasSearched(true);
    }, 400);
  };

  const handleAsk = () => {
    const q = askInput.trim();
    if (!q) return;
    runSearch(q);
  };

  const handleExampleClick = (example: string) => {
    setAskInput(example);
    runSearch(example);
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

  // Suppress unused variable lint warning
  void activeCategory;

  return (
    <div className="py-6">
      {/* Ask input */}
      <div className="mb-6 p-5 bg-card rounded-2xl border border-border shadow-xs">
        <p className="text-sm text-muted-foreground mb-3 font-medium">
          Search from our knowledge base — Physics, Chemistry, Biology, Maths,
          English, History, Geography, Economics...
        </p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              ref={askInputRef}
              value={askInput}
              onChange={(e) => setAskInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              placeholder={
                isListening
                  ? "Listening… speak now"
                  : "e.g. What is Newton's second law? Explain photosynthesis..."
              }
              className="pl-10 h-12 text-base"
              data-ocid="aihelp.askai.input"
              aria-label="Search topics"
            />
          </div>
          {/* Voice search button */}
          {isSupported && (
            <Button
              type="button"
              size="lg"
              onClick={isListening ? stopListening : startListening}
              className={`h-12 w-12 p-0 flex-shrink-0 transition-all duration-200 ${
                isListening
                  ? "bg-red-500 hover:bg-red-400 animate-pulse border-0"
                  : "bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 border-0"
              }`}
              data-ocid="aihelp.askai.voice_button"
              aria-label={isListening ? "Stop voice search" : "Voice search"}
              title={isListening ? "Stop listening" : "Speak your question"}
            >
              {isListening ? (
                <MicOff className="w-5 h-5 text-white" />
              ) : (
                <Mic className="w-5 h-5 text-white" />
              )}
            </Button>
          )}
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
                Searching...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Search
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Loading */}
      {isThinking && (
        <div
          data-ocid="aihelp.askai.loading_state"
          className="rounded-2xl border border-border bg-card p-6"
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

      {/* Topic result */}
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
              Search again
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
              Search again
            </Button>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/20 text-accent-foreground flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-xl text-foreground leading-snug">
                  {qaResult.question}
                </h3>
                <div className="flex gap-2 mt-2 flex-wrap">
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
            <div className="bg-background rounded-xl p-5 border border-border shadow-xs">
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
              No Result in Quick Search
            </p>
            <p className="text-muted-foreground text-sm mt-1 max-w-sm">
              Try the <strong>AI Chat</strong> tab for any question — it uses
              real AI and can answer anything. Or try one of these topics:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-md">
            {suggestedTopics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => handleExampleClick(t)}
                className="text-sm px-3 py-1.5 rounded-full border border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all capitalize font-medium"
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

      {/* Example questions (idle) */}
      {!isThinking && !topicResult && !qaResult && !notFound && (
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Example questions — click to search
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {askAIExamples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => handleExampleClick(example)}
                className="text-sm text-left px-4 py-3 rounded-xl border border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all group font-medium"
              >
                <span className="mr-1.5 text-primary/70 group-hover:text-primary">
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
                title: "Search Topics",
                desc: "Search from our curated knowledge base with 1000+ topics from Class 10, 12, JEE, and NEET.",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Instant Results",
                desc: "Get detailed explanations with formulas, examples, and board exam tips.",
                color: "bg-accent/20 text-accent-foreground",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "NCERT Aligned",
                desc: "All answers are based on NCERT curriculum and board exam patterns.",
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
    </div>
  );
}

// ── Main Page Component ───────────────────────────────────────────────────────
export default function AIHelpPage({
  activeCategory,
  onCategoryChange,
}: AIHelpPageProps) {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.08 264) 0%, oklch(0.25 0.12 276) 60%, oklch(0.20 0.07 290) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, oklch(0.75 0.18 52) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <BrainCircuit className="w-4 h-4" />
            <span>AI Help</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80 font-medium">
              Ask Anything · Powered by AI
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-2 leading-tight">
            AI Study Assistant — Ask Anything
          </h1>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">
            Powered by advanced AI — ask any question about Physics, Chemistry,
            Biology, Maths, English, History, Geography, competitive exams, or
            anything else. Get instant, detailed answers.
          </p>
        </div>
      </div>

      {/* Tabbed content */}
      <div className="flex-1 flex flex-col container mx-auto px-4 py-6">
        <Tabs defaultValue="aichat" className="flex flex-col flex-1">
          <TabsList className="grid grid-cols-2 w-full max-w-sm mb-6 bg-secondary/60 p-1 rounded-xl">
            <TabsTrigger
              value="aichat"
              className="rounded-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white gap-2"
              data-ocid="aihelp.chat.tab"
            >
              <Sparkles className="w-4 h-4" />
              AI Chat
            </TabsTrigger>
            <TabsTrigger
              value="quicksearch"
              className="rounded-lg font-semibold gap-2"
              data-ocid="aihelp.quicksearch.tab"
            >
              <Search className="w-4 h-4" />
              Quick Search
            </TabsTrigger>
          </TabsList>

          {/* AI Chat Tab */}
          <TabsContent
            value="aichat"
            className="flex-1 flex flex-col mt-0 data-[state=active]:flex data-[state=inactive]:hidden"
          >
            <div
              className="flex-1 flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
              style={{ height: "65vh", minHeight: "500px" }}
            >
              <AIChatTab />
            </div>
          </TabsContent>

          {/* Quick Search Tab */}
          <TabsContent value="quicksearch" className="mt-0">
            <QuickSearchTab
              activeCategory={activeCategory}
              onCategoryChange={onCategoryChange}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
