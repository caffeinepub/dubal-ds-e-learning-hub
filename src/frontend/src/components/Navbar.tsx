import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BookMarked,
  BookOpen,
  BrainCircuit,
  Calculator,
  FileText,
  GraduationCap,
  Home,
  Languages,
  Menu,
  Newspaper,
} from "lucide-react";
import { useState } from "react";
import type { Section } from "../App";

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: {
  id: Section;
  label: string;
  icon: React.ReactNode;
  ocid: string;
}[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="w-4 h-4" />,
    ocid: "nav.home.link",
  },
  {
    id: "syllabus",
    label: "Syllabus",
    icon: <BookOpen className="w-4 h-4" />,
    ocid: "nav.syllabus.link",
  },
  {
    id: "papers",
    label: "Question Papers",
    icon: <FileText className="w-4 h-4" />,
    ocid: "nav.papers.link",
  },
  {
    id: "aihelp",
    label: "AI Help",
    icon: <BrainCircuit className="w-4 h-4" />,
    ocid: "nav.aihelp.link",
  },
  {
    id: "dictionary",
    label: "Dictionary",
    icon: <BookMarked className="w-4 h-4" />,
    ocid: "nav.dictionary.link",
  },
  {
    id: "calculator",
    label: "Calculator",
    icon: <Calculator className="w-4 h-4" />,
    ocid: "nav.calculator.link",
  },
  {
    id: "translator",
    label: "Translator",
    icon: <Languages className="w-4 h-4" />,
    ocid: "nav.translator.link",
  },
  {
    id: "news",
    label: "Daily News",
    icon: <Newspaper className="w-4 h-4" />,
    ocid: "nav.news.link",
  },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section: Section) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="flex items-center gap-2.5 flex-shrink-0 group"
          aria-label="Dubal DS E-learning Hub Home"
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-accent transition-all duration-300">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-base text-foreground">
              Dubal DS
            </span>
            <span className="text-[10px] font-body text-accent font-semibold tracking-wider uppercase">
              E-learning Hub
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              data-ocid={item.ocid}
              onClick={() => handleNav(item.id)}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-base block">
                      Dubal DS E-learning Hub
                    </span>
                    <span className="text-xs text-muted-foreground">
                      CBSE · JEE · NEET
                    </span>
                  </div>
                </div>
              </div>
              <nav className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    data-ocid={item.ocid}
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
