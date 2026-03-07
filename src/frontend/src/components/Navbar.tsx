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
  Shield,
  Trophy,
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
    icon: <Home className="w-3.5 h-3.5" />,
    ocid: "nav.home.link",
    color: "oklch(0.55 0.16 142)",
  },
  {
    id: "syllabus",
    label: "Syllabus",
    icon: <BookOpen className="w-3.5 h-3.5" />,
    ocid: "nav.syllabus.link",
    color: "oklch(0.48 0.18 264)",
  },
  {
    id: "papers",
    label: "Papers",
    icon: <FileText className="w-3.5 h-3.5" />,
    ocid: "nav.papers.link",
    color: "oklch(0.58 0.19 30)",
  },
  {
    id: "aihelp",
    label: "AI Help",
    icon: <BrainCircuit className="w-3.5 h-3.5" />,
    ocid: "nav.aihelp.link",
    color: "oklch(0.52 0.17 335)",
  },
  {
    id: "smartnotes",
    label: "Notes",
    icon: <Zap className="w-3.5 h-3.5" />,
    ocid: "nav.smartnotes.link",
    color: "oklch(0.75 0.18 52)",
  },
  {
    id: "dictionary",
    label: "Dict",
    icon: <BookMarked className="w-3.5 h-3.5" />,
    ocid: "nav.dictionary.link",
    color: "oklch(0.55 0.18 200)",
  },
  {
    id: "calculator",
    label: "Calc",
    icon: <Calculator className="w-3.5 h-3.5" />,
    ocid: "nav.calculator.link",
    color: "oklch(0.50 0.17 290)",
  },
  {
    id: "translator",
    label: "Translate",
    icon: <Languages className="w-3.5 h-3.5" />,
    ocid: "nav.translator.link",
    color: "oklch(0.52 0.18 165)",
  },
  {
    id: "news",
    label: "News",
    icon: <Newspaper className="w-3.5 h-3.5" />,
    ocid: "nav.news.link",
    color: "oklch(0.56 0.19 15)",
  },
  {
    id: "competitive" as Section,
    label: "Govt",
    icon: <Trophy className="w-3.5 h-3.5" />,
    ocid: "nav.competitive.link",
    color: "oklch(0.58 0.19 52)",
  },
  {
    id: "ssb" as Section,
    label: "SSB",
    icon: <Shield className="w-3.5 h-3.5" />,
    ocid: "nav.ssb.link",
    color: "oklch(0.45 0.18 264)",
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
          className="hidden lg:flex items-center gap-0.5 ml-auto flex-1 justify-end"
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
                  "nav-item-enter relative flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 group/btn whitespace-nowrap",
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
                    className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"
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
            className="nav-item-enter relative flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm group/eng ml-0.5 whitespace-nowrap"
            style={{
              animationDelay: `${navItems.length * 0.05}s`,
              color: "oklch(0.58 0.19 52)",
              border: "1.5px solid oklch(0.75 0.18 52 / 0.4)",
            }}
          >
            <span
              className="absolute inset-0 rounded-lg opacity-0 group-hover/eng:opacity-100 transition-opacity duration-200"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.18 52 / 0.12) 0%, oklch(0.58 0.19 30 / 0.08) 100%)",
              }}
            />
            <ExternalLink className="w-3.5 h-3.5 relative z-10 group-hover/eng:rotate-[15deg] transition-transform duration-200" />
            <span className="relative z-10">English</span>
          </a>
        </nav>
      </div>

      {/* Mobile tab bar — grid so ALL items fit in one screen, no scroll */}
      <nav
        className="lg:hidden w-full grid grid-cols-12 px-1 pt-1 pb-1.5"
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
                "flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg text-[8px] font-semibold transition-all duration-200 w-full",
                isActive
                  ? "text-white shadow-sm"
                  : "text-muted-foreground active:scale-95",
              ].join(" ")}
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(135deg, oklch(0.38 0.14 264) 0%, oklch(0.48 0.18 264) 100%)",
                      boxShadow: "0 2px 8px oklch(0.38 0.14 264 / 0.4)",
                    }
                  : {}
              }
            >
              <span
                className="flex items-center justify-center transition-transform duration-200"
                style={!isActive ? { color: item.color } : {}}
              >
                {item.icon}
              </span>
              <span className="leading-none truncate w-full text-center px-0.5">
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
          className="flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg text-[8px] font-semibold transition-all duration-200 w-full active:scale-95"
          style={{
            color: "oklch(0.58 0.19 52)",
            border: "1px solid oklch(0.75 0.18 52 / 0.35)",
          }}
        >
          <span className="flex items-center justify-center">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
          <span className="leading-none truncate w-full text-center px-0.5">
            Eng
          </span>
        </a>
      </nav>

      {/* Shimmer accent bar at the very bottom */}
      <div className="h-[3px] w-full shimmer-accent-bar" />
    </header>
  );
}
