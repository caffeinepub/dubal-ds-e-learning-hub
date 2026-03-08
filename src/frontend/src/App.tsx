import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Category } from "./types";

// Lazy load heavy pages so they only load when visited (fixes blank screen on mobile)
const HomePage = lazy(() => import("./components/HomePage"));
const SyllabusPage = lazy(() => import("./components/SyllabusPage"));
const QuestionPapersPage = lazy(
  () => import("./components/QuestionPapersPage"),
);
const AIHelpPage = lazy(() => import("./components/AIHelpPage"));
const SmartNotesPage = lazy(() => import("./components/SmartNotesPage"));
const DictionaryPage = lazy(() => import("./components/DictionaryPage"));
const MathCalculatorPage = lazy(
  () => import("./components/MathCalculatorPage"),
);
const LanguageTranslatorPage = lazy(
  () => import("./components/LanguageTranslatorPage"),
);
const DailyNewsPage = lazy(() => import("./components/DailyNewsPage"));
const CompetitiveExamsPage = lazy(
  () => import("./components/CompetitiveExamsPage"),
);
const SSBPage = lazy(() => import("./components/SSBPage"));
const ClassPage = lazy(() => import("./components/ClassPage"));

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-4">
      <Skeleton className="h-10 w-1/3" />
      <Skeleton className="h-6 w-1/2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-40 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export type Section =
  | "home"
  | "syllabus"
  | "papers"
  | "aihelp"
  | "smartnotes"
  | "dictionary"
  | "calculator"
  | "translator"
  | "news"
  | "competitive"
  | "ssb"
  | "class10"
  | "class12"
  | "jee"
  | "neet";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activeCategory, setActiveCategory] = useState<Category>(
    Category.Class10,
  );
  const [smartNotesTopic, setSmartNotesTopic] = useState<string | undefined>(
    undefined,
  );

  // AI voice welcome greeting — plays once per browser session on first load
  useEffect(() => {
    if (sessionStorage.getItem("welcomed")) return;
    const speak = () => {
      const synth = window.speechSynthesis;
      if (!synth) return;
      // Small delay so voices are loaded
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(
          "Welcome to Dubal DS E-learning Hub",
        );
        utterance.lang = "en-IN";
        utterance.rate = 0.9;
        utterance.pitch = 1.05;
        synth.cancel();
        synth.speak(utterance);
        sessionStorage.setItem("welcomed", "1");
      }, 1200);
    };
    speak();
  }, []);

  const navigateToSection = useCallback(
    (section: Section, category?: Category) => {
      setActiveSection(section);
      if (category) setActiveCategory(category);
    },
    [],
  );

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navbar
        activeSection={activeSection}
        onNavigate={(s) => navigateToSection(s)}
      />

      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {activeSection === "home" && (
            <HomePage
              onCategorySelect={(cat, section) =>
                navigateToSection(section, cat)
              }
              onSmartNotesSearch={(topic) => {
                setSmartNotesTopic(topic);
                setActiveSection("smartnotes");
              }}
              onViewSmartNotes={() => navigateToSection("smartnotes")}
            />
          )}
          {activeSection === "syllabus" && (
            <SyllabusPage
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          )}
          {activeSection === "papers" && (
            <QuestionPapersPage
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          )}
          {activeSection === "aihelp" && (
            <AIHelpPage
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          )}
          {activeSection === "smartnotes" && (
            <SmartNotesPage
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              initialTopic={smartNotesTopic}
            />
          )}
          {activeSection === "dictionary" && <DictionaryPage />}
          {activeSection === "calculator" && <MathCalculatorPage />}
          {activeSection === "translator" && <LanguageTranslatorPage />}
          {activeSection === "news" && <DailyNewsPage />}
          {activeSection === "competitive" && <CompetitiveExamsPage />}
          {activeSection === "ssb" && <SSBPage />}
          {activeSection === "class10" && (
            <ClassPage
              category={Category.Class10}
              onNavigate={navigateToSection}
            />
          )}
          {activeSection === "class12" && (
            <ClassPage
              category={Category.Class12}
              onNavigate={navigateToSection}
            />
          )}
          {activeSection === "jee" && (
            <ClassPage category={Category.JEE} onNavigate={navigateToSection} />
          )}
          {activeSection === "neet" && (
            <ClassPage
              category={Category.NEET}
              onNavigate={navigateToSection}
            />
          )}
        </Suspense>
      </main>

      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground/70">
            Dubal DS E-learning Hub
          </span>
          <span>
            © {new Date().getFullYear()}. Made with{" "}
            <span className="text-accent">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
