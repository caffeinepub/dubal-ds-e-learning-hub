import { Toaster } from "@/components/ui/sonner";
import { useCallback, useState } from "react";
import AIHelpPage from "./components/AIHelpPage";
import DailyNewsPage from "./components/DailyNewsPage";
import DictionaryPage from "./components/DictionaryPage";
import HomePage from "./components/HomePage";
import LanguageTranslatorPage from "./components/LanguageTranslatorPage";
import MathCalculatorPage from "./components/MathCalculatorPage";
import Navbar from "./components/Navbar";
import QuestionPapersPage from "./components/QuestionPapersPage";
import SyllabusPage from "./components/SyllabusPage";
import { Category } from "./hooks/useQueries";

export type Section =
  | "home"
  | "syllabus"
  | "papers"
  | "aihelp"
  | "dictionary"
  | "calculator"
  | "translator"
  | "news";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activeCategory, setActiveCategory] = useState<Category>(
    Category.Class10,
  );

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
        {activeSection === "home" && (
          <HomePage
            onCategorySelect={(cat, section) => navigateToSection(section, cat)}
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
        {activeSection === "dictionary" && <DictionaryPage />}
        {activeSection === "calculator" && <MathCalculatorPage />}
        {activeSection === "translator" && <LanguageTranslatorPage />}
        {activeSection === "news" && <DailyNewsPage />}
      </main>

      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground/70">
            Dubal DS E-learning Hub
          </span>
          <span>
            © {new Date().getFullYear()}. Built with{" "}
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
