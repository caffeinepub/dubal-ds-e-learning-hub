import {
  BookMarked,
  BookOpen,
  BrainCircuit,
  Calculator,
  ExternalLink,
  FileText,
  Home,
  Languages,
  Newspaper,
  Zap,
} from "lucide-react";
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
  color: string;
}[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="w-[18px] h-[18px]" />,
    ocid: "nav.home.link",
    color: "oklch(0.55 0.16 142)",
  },
  {
    id: "syllabus",
    label: "Syllabus",
    icon: <BookOpen className="w-[18px] h-[18px]" />,
    ocid: "nav.syllabus.link",
    color: "oklch(0.48 0.18 264)",
  },
  {
    id: "papers",
    label: "Papers",
    icon: <FileText className="w-[18px] h-[18px]" />,
    ocid: "nav.papers.link",
    color: "oklch(0.58 0.19 30)",
  },
  {
    id: "aihelp",
    label: "AI Help",
    icon: <BrainCircuit className="w-[18px] h-[18px]" />,
    ocid: "nav.aihelp.link",
    color: "oklch(0.52 0.17 335)",
  },
  {
    id: "smartnotes",
    label: "Notes",
    icon: <Zap className="w-[18px] h-[18px]" />,
    ocid: "nav.smartnotes.link",
    color: "oklch(0.75 0.18 52)",
  },
  {
    id: "dictionary",
    label: "Dictionary",
    icon: <BookMarked className="w-[18px] h-[18px]" />,
    ocid: "nav.dictionary.link",
    color: "oklch(0.55 0.18 200)",
  },
  {
    id: "calculator",
    label: "Calculator",
    icon: <Calculator className="w-[18px] h-[18px]" />,
    ocid: "nav.calculator.link",
    color: "oklch(0.50 0.17 290)",
  },
  {
    id: "translator",
    label: "Translator",
    icon: <Languages className="w-[18px] h-[18px]" />,
    ocid: "nav.translator.link",
    color: "oklch(0.52 0.18 165)",
  },
  {
    id: "news",
    label: "News",
    icon: <Newspaper className="w-[18px] h-[18px]" />,
    ocid: "nav.news.link",
    color: "oklch(0.56 0.19 15)",
  },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  return (
    <header
      className="navbar-entrance sticky top-0 z-50"
      style={{
        background:
          "linear-gradient(135deg, oklch(1 0 0 / 0.97) 0%, oklch(0.97 0.006 256 / 0.98) 50%, oklch(1 0 0 / 0.97) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow:
          "0 1px 0 oklch(0.88 0.02 258), 0 4px 24px oklch(0.38 0.14 264 / 0.08)",
      }}
    >
      {/* Top bar — logo + desktop nav */}
      <div className="container mx-auto px-4 h-[72px] flex items-center gap-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 flex-shrink-0 group"
          aria-label="Dubal DS E-learning Hub Home"
          data-ocid="nav.home.link"
        >
          {/* Avatar with pulse ring */}
          <div className="relative flex-shrink-0">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full logo-pulse"
              style={{ borderRadius: "50%" }}
            />
            {/* Inner ring */}
            <div
              className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary/80 transition-all duration-300 flex-shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-primary/30 group-hover:shadow-lg"
              style={{ transitionProperty: "transform, box-shadow, ring" }}
            >
              <img
                src="/assets/uploads/Screenshot_2026-02-22-23-49-52-28_6012fa4d4ddec268fc5c7112cbb265e7-2.jpg"
                alt="Dubal DS"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative spark dot */}
            <span
              className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
              style={{ background: "oklch(0.75 0.18 52)" }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className="font-display font-bold text-base tracking-tight text-foreground group-hover:text-primary transition-colors duration-200"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              Dubal DS
            </span>
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.75 0.18 52)" }}
            >
              E-learning Hub
            </span>
          </div>
        </button>

        {/* Desktop nav (lg+) */}
        <nav
          className="hidden lg:flex items-center gap-1 ml-auto"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <button
                type="button"
                key={item.id}
                data-ocid={item.ocid}
                onClick={() => onNavigate(item.id)}
                className={[
                  "nav-item-enter relative flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group/btn",
                  isActive
                    ? "text-white shadow-md active-nav-glow"
                    : "text-muted-foreground hover:text-foreground hover:-translate-y-0.5 hover:shadow-sm",
                ].join(" ")}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.38 0.14 264) 0%, oklch(0.48 0.18 264) 100%)",
                        animationDelay: `${index * 0.05}s`,
                        boxShadow: "0 4px 16px oklch(0.38 0.14 264 / 0.35)",
                      }
                    : {
                        animationDelay: `${index * 0.05}s`,
                      }
                }
              >
                {/* Hover bg for inactive */}
                {!isActive && (
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}18 0%, ${item.color}10 100%)`,
                    }}
                  />
                )}

                {/* Icon */}
                <span
                  className={[
                    "relative z-10 transition-transform duration-200",
                    isActive
                      ? "text-white"
                      : "group-hover/btn:scale-110 group-hover/btn:-translate-y-0.5",
                  ].join(" ")}
                  style={!isActive ? { color: item.color } : {}}
                >
                  {item.icon}
                </span>

                {/* Label */}
                <span className="relative z-10">{item.label}</span>

                {/* Active underline dot */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: "oklch(0.75 0.18 52)" }}
                  />
                )}
              </button>
            );
          })}

          {/* English Hub external link */}
          <a
            href="https://dubal-ds-english-speaking-hub-lcc.caffeine.xyz"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.english.link"
            className="nav-item-enter relative flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm group/eng ml-1"
            style={{
              animationDelay: `${navItems.length * 0.05}s`,
              color: "oklch(0.58 0.19 52)",
              border: "1.5px solid oklch(0.75 0.18 52 / 0.4)",
            }}
          >
            <span
              className="absolute inset-0 rounded-xl opacity-0 group-hover/eng:opacity-100 transition-opacity duration-200"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.18 52 / 0.12) 0%, oklch(0.58 0.19 30 / 0.08) 100%)",
              }}
            />
            <ExternalLink className="w-[18px] h-[18px] relative z-10 group-hover/eng:rotate-[15deg] transition-transform duration-200" />
            <span className="relative z-10">English Hub</span>
          </a>
        </nav>
      </div>

      {/* Mobile tab bar */}
      <nav
        className="lg:hidden flex items-center gap-1.5 px-2.5 pt-2 pb-2.5 overflow-x-auto scrollbar-none"
        aria-label="Navigation tabs"
        style={{
          borderTop: "1px solid oklch(0.88 0.02 258 / 0.6)",
          background:
            "linear-gradient(180deg, oklch(0.99 0.003 258 / 0.95) 0%, oklch(0.97 0.006 256 / 0.98) 100%)",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              type="button"
              key={item.id}
              data-ocid={item.ocid}
              onClick={() => onNavigate(item.id)}
              className={[
                "flex-shrink-0 flex flex-col items-center gap-1 px-3 pt-2 pb-1.5 rounded-xl text-[11px] font-semibold transition-all duration-200 min-w-[60px]",
                isActive
                  ? "text-white shadow-md"
                  : "text-muted-foreground hover:scale-105 hover:text-foreground",
              ].join(" ")}
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(135deg, oklch(0.38 0.14 264) 0%, oklch(0.48 0.18 264) 100%)",
                      boxShadow: "0 3px 12px oklch(0.38 0.14 264 / 0.4)",
                    }
                  : {}
              }
            >
              <span
                className={[
                  "w-5 h-5 flex items-center justify-center transition-transform duration-200",
                  isActive ? "scale-110" : "",
                ].join(" ")}
                style={!isActive ? { color: item.color } : {}}
              >
                {item.icon}
              </span>
              <span className="leading-none truncate max-w-[56px]">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* English Hub - mobile */}
        <a
          href="https://dubal-ds-english-speaking-hub-lcc.caffeine.xyz"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="nav.english.link"
          className="flex-shrink-0 flex flex-col items-center gap-1 px-3 pt-2 pb-1.5 rounded-xl text-[11px] font-semibold transition-all duration-200 min-w-[60px] hover:scale-105"
          style={{
            color: "oklch(0.58 0.19 52)",
            border: "1.5px solid oklch(0.75 0.18 52 / 0.35)",
          }}
        >
          <span className="w-5 h-5 flex items-center justify-center">
            <ExternalLink className="w-[18px] h-[18px]" />
          </span>
          <span className="leading-none">English</span>
        </a>
      </nav>

      {/* Shimmer accent bar at the very bottom */}
      <div className="h-[3px] w-full shimmer-accent-bar" />
    </header>
  );
}
