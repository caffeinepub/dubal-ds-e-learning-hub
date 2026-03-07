import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, BookMarked, ChevronRight, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchGlossary } from "../hooks/useQueries";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function GlossarySkeletons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="rounded-xl border border-border bg-card p-5">
          <Skeleton className="h-5 w-2/3 mb-2" />
          <Skeleton className="h-3 w-1/3 mb-3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5 mt-1" />
        </div>
      ))}
    </div>
  );
}

export default function DictionaryPage() {
  const [searchInput, setSearchInput] = useState("");
  const [activeQuery, setActiveQuery] = useState("a");
  const [activeLetter, setActiveLetter] = useState("A");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: terms, isLoading, isError } = useSearchGlossary(activeQuery);

  // Debounce typing for live search
  useEffect(() => {
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

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    setSearchInput("");
    setActiveQuery(letter.toLowerCase());
  };

  const isSearchMode = searchInput.trim() !== "";

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <BookMarked className="w-4 h-4" />
          <span>Dictionary</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">
            English Dictionary
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          English Dictionary
        </h1>
        <p className="text-muted-foreground text-base">
          General English dictionary with Hindi meanings — search any word from
          A to Z or browse by letter. Like an Oxford dictionary.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            ref={inputRef}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search any word, e.g. resilience, abandon, courage, eloquent..."
            className="pl-10 h-12 text-base"
            data-ocid="dictionary.search.input"
            aria-label="Search dictionary"
          />
        </div>
        <Button
          size="lg"
          onClick={handleSearch}
          data-ocid="dictionary.search.button"
          className="h-12 px-6"
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Alphabet browser */}
      {!isSearchMode && (
        <div className="mb-8">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Browse alphabetically
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ALPHABET.map((letter) => (
              <button
                type="button"
                key={letter}
                onClick={() => handleLetterClick(letter)}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-all duration-150 ${
                  activeLetter === letter && !isSearchMode
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                }`}
                aria-pressed={activeLetter === letter && !isSearchMode}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div data-ocid="dictionary.loading_state">
          <GlossarySkeletons />
        </div>
      )}

      {/* Error */}
      {isError && (
        <div
          data-ocid="dictionary.error_state"
          className="flex flex-col items-center gap-4 py-16 text-center"
        >
          <AlertCircle className="w-12 h-12 text-destructive/50" />
          <p className="font-semibold text-foreground">
            Failed to load dictionary
          </p>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && !isError && terms && terms.length === 0 && (
        <div
          data-ocid="dictionary.empty_state"
          className="flex flex-col items-center gap-4 py-20 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
            <BookMarked className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-foreground">
              No Words Found
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              {isSearchMode
                ? `No entries matching "${searchInput}". Try a different keyword.`
                : `No terms starting with "${activeLetter}" yet.`}
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {!isLoading && !isError && terms && terms.length > 0 && (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              {terms.length} word{terms.length !== 1 ? "s" : ""}{" "}
              {isSearchMode
                ? `matching "${searchInput}"`
                : `starting with "${activeLetter}"`}
            </p>
            {isSearchMode && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchInput("");
                  setActiveQuery(activeLetter.toLowerCase());
                }}
                className="text-muted-foreground text-xs"
              >
                Clear search
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {terms.map((term, idx) => (
              <div
                key={`${term.term}-${idx}`}
                data-ocid={`dictionary.item.${idx + 1}`}
                className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
              >
                {/* Word */}
                <h3 className="font-display font-bold text-lg text-foreground leading-tight mb-1">
                  {term.term}
                </h3>

                {/* Definition */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {term.definition}
                </p>

                {/* Hindi meaning */}
                {term.hindiMeaning && (
                  <div className="mt-3 flex items-start gap-2 pt-2.5 border-t border-border/60">
                    <span className="flex-shrink-0 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[oklch(0.82_0.10_50)] text-[oklch(0.15_0.14_30)] border border-[oklch(0.68_0.14_30)] tracking-wide">
                      हिंदी
                    </span>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {term.hindiMeaning}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
