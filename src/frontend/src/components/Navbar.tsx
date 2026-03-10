import {
  BookMarked,
  BookOpen,
  BrainCircuit,
  Calculator,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Home,
  Languages,
  Newspaper,
  Shield,
  Smartphone,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Section } from "../App";

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: {
  id: Section;
  label: string;
  mobileLabel: string;
  icon: React.ReactNode;
  mobileIcon: React.ReactNode;
  ocid: string;
  color: string;
  colorLight: string;
  shadowColor: string;
}[] = [
  {
    id: "home",
    label: "Home",
    mobileLabel: "Home",
    icon: <Home className="w-3.5 h-3.5" />,
    mobileIcon: <Home className="w-5 h-5" />,
    ocid: "nav.home.link",
    color: "oklch(0.45 0.16 142)",
    colorLight: "oklch(0.58 0.14 142)",
    shadowColor: "oklch(0.45 0.16 142 / 0.40)",
  },
  {
    id: "class10" as Section,
    label: "Class 10",
    mobileLabel: "Class 10",
    icon: <GraduationCap className="w-3.5 h-3.5" />,
    mobileIcon: <GraduationCap className="w-5 h-5" />,
    ocid: "nav.class10.link",
    color: "oklch(0.45 0.16 142)",
    colorLight: "oklch(0.58 0.14 142)",
    shadowColor: "oklch(0.45 0.16 142 / 0.40)",
  },
  {
    id: "class12" as Section,
    label: "Class 12",
    mobileLabel: "Class 12",
    icon: <GraduationCap className="w-3.5 h-3.5" />,
    mobileIcon: <GraduationCap className="w-5 h-5" />,
    ocid: "nav.class12.link",
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.52 0.16 264)",
    shadowColor: "oklch(0.38 0.18 264 / 0.40)",
  },
  {
    id: "jee" as Section,
    label: "JEE",
    mobileLabel: "JEE",
    icon: <FlaskConical className="w-3.5 h-3.5" />,
    mobileIcon: <FlaskConical className="w-5 h-5" />,
    ocid: "nav.jee.link",
    color: "oklch(0.50 0.19 30)",
    colorLight: "oklch(0.64 0.17 30)",
    shadowColor: "oklch(0.50 0.19 30 / 0.40)",
  },
  {
    id: "neet" as Section,
    label: "NEET",
    mobileLabel: "NEET",
    icon: <HeartPulse className="w-3.5 h-3.5" />,
    mobileIcon: <HeartPulse className="w-5 h-5" />,
    ocid: "nav.neet.link",
    color: "oklch(0.44 0.17 335)",
    colorLight: "oklch(0.58 0.15 335)",
    shadowColor: "oklch(0.44 0.17 335 / 0.40)",
  },
  {
    id: "syllabus",
    label: "Syllabus",
    mobileLabel: "Syllabus",
    icon: <BookOpen className="w-3.5 h-3.5" />,
    mobileIcon: <BookOpen className="w-5 h-5" />,
    ocid: "nav.syllabus.link",
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.52 0.16 264)",
    shadowColor: "oklch(0.38 0.18 264 / 0.40)",
  },
  {
    id: "papers",
    label: "Papers",
    mobileLabel: "Papers",
    icon: <FileText className="w-3.5 h-3.5" />,
    mobileIcon: <FileText className="w-5 h-5" />,
    ocid: "nav.papers.link",
    color: "oklch(0.50 0.19 30)",
    colorLight: "oklch(0.64 0.17 30)",
    shadowColor: "oklch(0.50 0.19 30 / 0.40)",
  },
  {
    id: "aihelp",
    label: "AI Help",
    mobileLabel: "AI Help",
    icon: <BrainCircuit className="w-3.5 h-3.5" />,
    mobileIcon: <BrainCircuit className="w-5 h-5" />,
    ocid: "nav.aihelp.link",
    color: "oklch(0.44 0.17 335)",
    colorLight: "oklch(0.58 0.15 335)",
    shadowColor: "oklch(0.44 0.17 335 / 0.40)",
  },
  {
    id: "smartnotes",
    label: "Notes",
    mobileLabel: "Notes",
    icon: <Zap className="w-3.5 h-3.5" />,
    mobileIcon: <Zap className="w-5 h-5" />,
    ocid: "nav.smartnotes.link",
    color: "oklch(0.62 0.18 52)",
    colorLight: "oklch(0.76 0.16 52)",
    shadowColor: "oklch(0.62 0.18 52 / 0.40)",
  },
  {
    id: "dictionary",
    label: "Dict",
    mobileLabel: "Dictionary",
    icon: <BookMarked className="w-3.5 h-3.5" />,
    mobileIcon: <BookMarked className="w-5 h-5" />,
    ocid: "nav.dictionary.link",
    color: "oklch(0.46 0.18 200)",
    colorLight: "oklch(0.60 0.16 200)",
    shadowColor: "oklch(0.46 0.18 200 / 0.40)",
  },
  {
    id: "calculator",
    label: "Calc",
    mobileLabel: "Calculator",
    icon: <Calculator className="w-3.5 h-3.5" />,
    mobileIcon: <Calculator className="w-5 h-5" />,
    ocid: "nav.calculator.link",
    color: "oklch(0.42 0.17 290)",
    colorLight: "oklch(0.56 0.15 290)",
    shadowColor: "oklch(0.42 0.17 290 / 0.40)",
  },
  {
    id: "translator",
    label: "Translate",
    mobileLabel: "Translator",
    icon: <Languages className="w-3.5 h-3.5" />,
    mobileIcon: <Languages className="w-5 h-5" />,
    ocid: "nav.translator.link",
    color: "oklch(0.44 0.18 165)",
    colorLight: "oklch(0.58 0.16 165)",
    shadowColor: "oklch(0.44 0.18 165 / 0.40)",
  },
  {
    id: "news",
    label: "News",
    mobileLabel: "Daily News",
    icon: <Newspaper className="w-3.5 h-3.5" />,
    mobileIcon: <Newspaper className="w-5 h-5" />,
    ocid: "nav.news.link",
    color: "oklch(0.48 0.19 15)",
    colorLight: "oklch(0.62 0.17 15)",
    shadowColor: "oklch(0.48 0.19 15 / 0.40)",
  },
  {
    id: "competitive" as Section,
    label: "Govt",
    mobileLabel: "Govt Exams",
    icon: <Trophy className="w-3.5 h-3.5" />,
    mobileIcon: <Trophy className="w-5 h-5" />,
    ocid: "nav.competitive.link",
    color: "oklch(0.50 0.19 52)",
    colorLight: "oklch(0.64 0.17 52)",
    shadowColor: "oklch(0.50 0.19 52 / 0.40)",
  },
  {
    id: "ssb" as Section,
    label: "SSB",
    mobileLabel: "SSB Prep",
    icon: <Shield className="w-3.5 h-3.5" />,
    mobileIcon: <Shield className="w-5 h-5" />,
    ocid: "nav.ssb.link",
    color: "oklch(0.38 0.18 264)",
    colorLight: "oklch(0.52 0.16 264)",
    shadowColor: "oklch(0.38 0.18 264 / 0.40)",
  },
];

function SparkAvatar({ size = "desktop" }: { size?: "desktop" | "mobile" }) {
  const wh = size === "desktop" ? "w-12 h-12" : "w-10 h-10";
  return (
    <div
      className={`relative flex-shrink-0 ${size === "mobile" ? "" : ""}`}
      aria-hidden="true"
    >
      <div
        className="absolute avatar-ring rounded-full"
        style={{
          inset: "-3px",
          background:
            "conic-gradient(oklch(0.82 0.22 52), oklch(0.70 0.24 335), oklch(0.72 0.20 142), oklch(0.68 0.22 264), oklch(0.78 0.20 200), oklch(0.82 0.22 52))",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        className="absolute rounded-full bg-white"
        style={{ inset: "-1px", borderRadius: "50%", zIndex: 1 }}
      />
      <div
        className={`relative ${wh} rounded-full overflow-hidden avatar-zoom`}
        style={{ zIndex: 2 }}
      >
        <img
          src="/assets/uploads/Screenshot_2026-02-22-23-49-52-28_6012fa4d4ddec268fc5c7112cbb265e7-2-1.jpg"
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <span className="spark-particle" />
      <span className="spark-particle" />
      <span className="spark-particle" />
      <span className="spark-particle" />
      <span className="spark-particle" />
      <span className="spark-star" />
      <span className="spark-star" />
      <span className="spark-star" />
    </div>
  );
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const deferredPrompt = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [canInstall, setCanInstall] = useState(false);
  const [installed, setInstalled] = useState(false);
  // Mobile nav collapsed state — collapses after selecting a menu item
  const [mobileNavCollapsed, setMobileNavCollapsed] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (e: any) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setCanInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setCanInstall(false);
    });
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt.current) {
      alert(
        "To install this app:\n\n📱 Android (Chrome): Tap the 3-dot menu → 'Add to Home screen'\n🍎 iPhone (Safari): Tap Share → 'Add to Home Screen'\n💻 Desktop (Chrome): Click the install icon in the address bar",
      );
      return;
    }
    deferredPrompt.current.prompt();
    const { outcome } = await deferredPrompt.current.userChoice;
    if (outcome === "accepted") {
      setInstalled(true);
      setCanInstall(false);
    }
    deferredPrompt.current = null;
  };

  // Handle mobile nav item tap: navigate then auto-collapse
  const handleMobileNavTap = (section: Section) => {
    onNavigate(section);
    setMobileNavCollapsed(true);
  };

  // Active item for collapsed indicator
  const activeItem = navItems.find((item) => item.id === activeSection);

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
      {/* Top bar */}
      <div className="container mx-auto px-4 h-[72px] flex items-center gap-4 relative">
        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            onNavigate("home");
            setMobileNavCollapsed(true);
          }}
          className="flex items-center gap-3 flex-shrink-0 group"
          aria-label="Dubal DS E-learning Hub Home"
          data-ocid="nav.logo.button"
        >
          <div className="relative flex-shrink-0">
            <div
              className="absolute inset-0 rounded-full logo-pulse"
              style={{ borderRadius: "50%" }}
            />
            <div
              className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary/80 transition-all duration-300 flex-shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-primary/30 group-hover:shadow-lg"
              style={{ transitionProperty: "transform, box-shadow, ring" }}
            >
              <img
                src="/assets/generated/dubal-ds-logo-transparent.dim_200x200.png"
                alt="Dubal DS"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span
              className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
              style={{ background: "oklch(0.75 0.18 52)" }}
            />
          </div>
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
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                type="button"
                key={item.id}
                data-ocid={item.ocid}
                onClick={() => onNavigate(item.id)}
                className={[
                  "relative flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 group/btn whitespace-nowrap",
                  isActive
                    ? "text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(135deg, ${item.color} 0%, ${item.colorLight} 100%)`,
                        boxShadow: `0 4px 16px ${item.shadowColor}`,
                      }
                    : {}
                }
              >
                {!isActive && (
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}18 0%, ${item.color}10 100%)`,
                    }}
                  />
                )}
                <span
                  className={[
                    "relative z-10",
                    isActive ? "text-white" : "",
                  ].join(" ")}
                  style={!isActive ? { color: item.color } : {}}
                >
                  {item.icon}
                </span>
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: "oklch(0.75 0.18 52)" }}
                  />
                )}
              </button>
            );
          })}

          <a
            href="https://dubal-ds-english-speaking-hub-lcc.caffeine.xyz"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.english.link"
            className="relative flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 group/eng ml-0.5 whitespace-nowrap"
            style={{
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

          {!installed && (
            <button
              type="button"
              data-ocid="nav.install.button"
              onClick={handleInstall}
              className="relative flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-bold transition-colors duration-200 group/install ml-0.5 whitespace-nowrap"
              style={{
                color: "white",
                background:
                  "linear-gradient(135deg, oklch(0.42 0.22 142) 0%, oklch(0.56 0.20 165) 100%)",
                boxShadow: "0 2px 12px oklch(0.42 0.22 142 / 0.35)",
              }}
              title={
                canInstall ? "Install as mobile app" : "Add to Home Screen"
              }
            >
              <Smartphone className="w-3.5 h-3.5 relative z-10" />
              <Download className="w-3 h-3 relative z-10 -ml-0.5" />
              <span className="relative z-10">Install</span>
            </button>
          )}
          {installed && (
            <span
              className="flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-semibold ml-0.5 whitespace-nowrap"
              style={{ color: "oklch(0.42 0.22 142)" }}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Installed!</span>
            </span>
          )}
        </nav>

        {/* Desktop profile avatar */}
        <div className="hidden lg:flex items-center ml-3 flex-shrink-0">
          <SparkAvatar size="desktop" />
        </div>

        {/* Mobile: profile avatar + expand toggle when collapsed */}
        <div
          className="lg:hidden absolute top-3 right-4 flex items-center gap-2"
          style={{ zIndex: 10 }}
        >
          {/* Expand nav toggle — only visible when collapsed */}
          {mobileNavCollapsed && (
            <button
              type="button"
              data-ocid="nav.expand.toggle"
              onClick={() => setMobileNavCollapsed(false)}
              aria-label="Open navigation menu"
              className="flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all duration-200"
              style={{
                background: activeItem
                  ? `linear-gradient(135deg, ${activeItem.color} 0%, ${activeItem.colorLight} 100%)`
                  : "linear-gradient(135deg, oklch(0.45 0.16 142) 0%, oklch(0.58 0.14 142) 100%)",
                color: "white",
                boxShadow: activeItem
                  ? `0 2px 10px ${activeItem.shadowColor}`
                  : undefined,
              }}
            >
              {activeItem && (
                <span className="flex items-center">
                  {activeItem.mobileIcon}
                </span>
              )}
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
          <SparkAvatar size="mobile" />
        </div>
      </div>

      {/* Mobile tab bar — collapses/expands */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: mobileNavCollapsed ? "0px" : "600px",
          opacity: mobileNavCollapsed ? 0 : 1,
        }}
      >
        <nav
          className="w-full grid grid-cols-4 gap-1.5 px-2 pt-2 pb-3"
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
                onClick={() => handleMobileNavTap(item.id)}
                className={[
                  "flex flex-col items-center justify-center gap-1.5 py-3 px-1 rounded-xl text-[11px] font-bold transition-colors duration-200 w-full active:scale-95",
                  isActive ? "text-white shadow-md" : "text-foreground",
                ].join(" ")}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(135deg, ${item.color} 0%, ${item.colorLight} 100%)`,
                        boxShadow: `0 3px 12px ${item.shadowColor}`,
                      }
                    : {
                        background: `linear-gradient(135deg, ${item.color}18 0%, ${item.color}0a 100%)`,
                        border: `1.5px solid ${item.color}30`,
                      }
                }
              >
                <span
                  className="flex items-center justify-center"
                  style={!isActive ? { color: item.color } : {}}
                >
                  {item.mobileIcon}
                </span>
                <span className="leading-none text-center w-full truncate px-0.5">
                  {item.mobileLabel}
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
            className="flex flex-col items-center justify-center gap-1.5 py-3 px-1 rounded-xl text-[11px] font-bold transition-all duration-200 w-full active:scale-95"
            style={{
              color: "oklch(0.52 0.18 52)",
              background:
                "linear-gradient(135deg, oklch(0.75 0.18 52 / 0.15) 0%, oklch(0.58 0.19 30 / 0.08) 100%)",
              border: "1.5px solid oklch(0.75 0.18 52 / 0.40)",
            }}
          >
            <ExternalLink className="w-5 h-5" />
            <span className="leading-none text-center w-full truncate px-0.5">
              English
            </span>
          </a>

          {/* Install App - mobile */}
          {!installed ? (
            <button
              type="button"
              data-ocid="nav.install.button"
              onClick={handleInstall}
              className="flex flex-col items-center justify-center gap-1.5 py-3 px-1 rounded-xl text-[11px] font-bold transition-all duration-200 w-full active:scale-95"
              style={{
                color: "white",
                background:
                  "linear-gradient(135deg, oklch(0.42 0.22 142) 0%, oklch(0.56 0.20 165) 100%)",
                boxShadow: "0 2px 8px oklch(0.42 0.22 142 / 0.40)",
              }}
            >
              <div className="flex items-center gap-0.5">
                <Smartphone className="w-4 h-4" />
                <Download className="w-3.5 h-3.5" />
              </div>
              <span className="leading-none text-center w-full truncate px-0.5">
                Install
              </span>
            </button>
          ) : (
            <div
              className="flex flex-col items-center justify-center gap-1.5 py-3 px-1 rounded-xl text-[11px] font-bold w-full"
              style={{
                color: "oklch(0.42 0.22 142)",
                background: "oklch(0.42 0.22 142 / 0.12)",
                border: "1.5px solid oklch(0.42 0.22 142 / 0.30)",
              }}
            >
              <Smartphone className="w-5 h-5" />
              <span className="leading-none text-center w-full truncate px-0.5">
                Installed
              </span>
            </div>
          )}
        </nav>

        {/* Collapse handle at bottom of expanded nav */}
        <button
          type="button"
          data-ocid="nav.collapse.toggle"
          onClick={() => setMobileNavCollapsed(true)}
          aria-label="Collapse navigation menu"
          className="lg:hidden w-full flex items-center justify-center gap-1 py-1.5 text-xs font-semibold active:scale-95 transition-all duration-200"
          style={{
            background: "oklch(0.95 0.005 258 / 0.9)",
            borderTop: "1px solid oklch(0.88 0.02 258 / 0.5)",
            color: "oklch(0.50 0.06 258)",
          }}
        >
          <ChevronUp className="w-4 h-4" />
          <span>Collapse</span>
        </button>
      </div>

      {/* Shimmer accent bar */}
      <div className="h-[3px] w-full shimmer-accent-bar" />
    </header>
  );
}
