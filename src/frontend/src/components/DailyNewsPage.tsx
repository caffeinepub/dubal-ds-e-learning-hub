import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ExternalLink,
  Newspaper,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface NewsItem {
  id: number;
  headline: string;
  summary: string;
  category: string;
  date: string;
  url: string;
  emoji: string;
}

// Multiple CORS proxy services with fallback
const CORS_PROXIES = [
  "https://api.rss2json.com/v1/api.json?rss_url=",
  "https://rss-to-json-serverless-api.vercel.app/api?feedURL=",
];

// RSS feeds to fetch live news from
const RSS_FEEDS = [
  {
    url: "https://feeds.feedburner.com/ndtvnews-india-news",
    category: "Live News",
    emoji: "📰",
  },
  {
    url: "https://www.thehindu.com/education/feeder/default.rss",
    category: "Live News",
    emoji: "🏫",
  },
  {
    url: "https://www.indiaeducation.net/rss/news.xml",
    category: "Live News",
    emoji: "🎓",
  },
  {
    url: "https://www.thehindu.com/sci-tech/science/feeder/default.rss",
    category: "Live News",
    emoji: "🔬",
  },
];

// Fallback static news (shown if all feeds fail)
const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 1,
    headline: "CBSE Board Exams 2026 Timetable Released",
    summary:
      "CBSE has officially announced the timetable for Class 10 and Class 12 board examinations for 2026. Class 10 exams begin February 15 and Class 12 from February 20. Students are advised to download admit cards from the official CBSE portal.",
    category: "CBSE Updates",
    date: "March 2, 2026",
    url: "https://cbse.gov.in",
    emoji: "📅",
  },
  {
    id: 2,
    headline: "JEE Main 2026 Session 1 Results Declared by NTA",
    summary:
      "National Testing Agency has declared JEE Main 2026 Session 1 results. Over 12 lakh students appeared for the exam. The NTA Score card and percentile are available on the official JEE Main portal. Session 2 registrations are now open.",
    category: "JEE/NEET Exams",
    date: "March 1, 2026",
    url: "https://jeemain.nta.ac.in",
    emoji: "🏆",
  },
  {
    id: 3,
    headline: "NEET UG 2026 Registration Portal Now Open",
    summary:
      "National Testing Agency has opened the NEET UG 2026 registration window. Students applying for medical and dental programmes must register before the deadline. The exam is scheduled for May 2026.",
    category: "JEE/NEET Exams",
    date: "February 28, 2026",
    url: "https://neet.nta.nic.in",
    emoji: "🩺",
  },
  {
    id: 4,
    headline: "NCERT Releases Revised Textbooks for 2025-26 Academic Year",
    summary:
      "NCERT has introduced updated textbooks for Class 6 to 12 incorporating the National Curriculum Framework (NCF) 2023. The new books emphasize competency-based learning, critical thinking, and Indian knowledge systems.",
    category: "CBSE Updates",
    date: "February 25, 2026",
    url: "https://ncert.nic.in",
    emoji: "📚",
  },
  {
    id: 5,
    headline: "India's Mars Mission Mangalyaan 2 — Key Science Facts",
    summary:
      "ISRO's Mangalyaan 2 mission is progressing steadily. For NEET and JEE students: Mars has gravity 0.38g and atmosphere 95% CO2. Mangalyaan 2 will study Martian atmosphere composition and surface geology.",
    category: "Science & Technology",
    date: "February 22, 2026",
    url: "https://www.isro.gov.in",
    emoji: "🚀",
  },
  {
    id: 6,
    headline: "Nobel Prize in Physics 2025 — Wave-Particle Duality",
    summary:
      "The 2025 Nobel Prize in Physics was awarded for discoveries in quantum entanglement. Connects to Class 12 Physics Chapter 'Dual Nature of Radiation and Matter'. A must-know for JEE Advanced aspirants.",
    category: "General Knowledge",
    date: "February 20, 2026",
    url: "https://www.nobelprize.org",
    emoji: "🔬",
  },
  {
    id: 7,
    headline: "New Education Policy (NEP 2020) Updates for Schools",
    summary:
      "The Ministry of Education announced new milestones for NEP 2020. Key changes include flexible subject choices from Class 9, vocational education, and a shift from rote learning to analytical thinking.",
    category: "CBSE Updates",
    date: "February 18, 2026",
    url: "https://education.gov.in",
    emoji: "🏫",
  },
  {
    id: 8,
    headline: "JEE Advanced 2026 Exam Date Announced",
    summary:
      "IIT Delhi has announced JEE Advanced 2026 date as June 1, 2026. Only top 2.5 lakh JEE Main qualifiers are eligible. The exam tests deep conceptual understanding in Physics, Chemistry, and Mathematics.",
    category: "JEE/NEET Exams",
    date: "February 15, 2026",
    url: "https://jeeadv.ac.in",
    emoji: "🎓",
  },
  {
    id: 9,
    headline: "Top Government Scholarships for Class 10 and 12 Students",
    summary:
      "Scholarships available: NTSE, INSPIRE, PM Scholarship, Post-Matric for SC/ST. Applications for 2026 cycle open in April. Eligible students can receive up to Rs. 50,000 annually.",
    category: "Career & Opportunities",
    date: "February 12, 2026",
    url: "https://scholarships.gov.in",
    emoji: "💰",
  },
  {
    id: 10,
    headline: "AI and Machine Learning Added to CBSE Curriculum",
    summary:
      "CBSE has introduced AI as an elective subject for Classes 8 to 12. The syllabus covers Python programming, machine learning basics, neural networks, and ethical AI.",
    category: "Science & Technology",
    date: "February 10, 2026",
    url: "https://cbseacademic.nic.in",
    emoji: "🤖",
  },
  {
    id: 11,
    headline: "QS World University Rankings 2026: IIT Bombay Enters Top 100",
    summary:
      "IIT Bombay, IIT Delhi, and IISc Bangalore improved significantly in QS World University Rankings 2026. IIT Bombay entered the top 100 globally.",
    category: "Career & Opportunities",
    date: "February 8, 2026",
    url: "https://www.topuniversities.com",
    emoji: "🌍",
  },
  {
    id: 12,
    headline: "CBSE Sample Papers 2026 Released — Download Now",
    summary:
      "CBSE Academic has released sample question papers for Class 10 and Class 12 board exams 2026 with marking schemes. Papers are available for all subjects.",
    category: "CBSE Updates",
    date: "February 3, 2026",
    url: "https://cbseacademic.nic.in/sqp_classx.html",
    emoji: "📄",
  },
];

const CATEGORIES = [
  "All",
  "Live News",
  "CBSE Updates",
  "JEE/NEET Exams",
  "Science & Technology",
  "General Knowledge",
  "Career & Opportunities",
];

const categoryColors: Record<string, string> = {
  "CBSE Updates":
    "bg-[oklch(0.82_0.09_142)] text-[oklch(0.18_0.14_142)] border-[oklch(0.68_0.12_142)]",
  "JEE/NEET Exams":
    "bg-[oklch(0.82_0.09_264)] text-[oklch(0.18_0.14_264)] border-[oklch(0.68_0.12_264)]",
  "Science & Technology":
    "bg-[oklch(0.82_0.09_200)] text-[oklch(0.18_0.14_200)] border-[oklch(0.68_0.12_200)]",
  "General Knowledge":
    "bg-[oklch(0.86_0.10_30)] text-[oklch(0.18_0.16_30)] border-[oklch(0.70_0.14_30)]",
  "Career & Opportunities":
    "bg-[oklch(0.83_0.10_335)] text-[oklch(0.18_0.15_335)] border-[oklch(0.68_0.12_335)]",
  "Live News":
    "bg-[oklch(0.92_0.06_15)] text-[oklch(0.30_0.18_15)] border-[oklch(0.75_0.12_15)]",
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

interface LiveArticle {
  headline: string;
  summary: string;
  url: string;
  date: string;
  emoji: string;
}

async function fetchFeedViaProxy(
  proxyBase: string,
  feedUrl: string,
  emoji: string,
): Promise<LiveArticle[]> {
  try {
    const resp = await fetch(
      `${proxyBase}${encodeURIComponent(feedUrl)}&count=6`,
      { signal: AbortSignal.timeout(7000) },
    );
    if (!resp.ok) return [];
    const data = await resp.json();
    // rss2json format
    if (
      data.status === "ok" &&
      Array.isArray(data.items) &&
      data.items.length > 0
    ) {
      return data.items.map((item: Record<string, string>) => ({
        headline: stripHtml(item.title || ""),
        summary:
          stripHtml(item.description || item.content || "").slice(0, 300) ||
          "Read the full article for details.",
        url: item.link || item.url || "#",
        date: formatDate(item.pubDate || ""),
        emoji,
      }));
    }
    // rss-to-json-serverless format
    if (data.feed && Array.isArray(data.items)) {
      return data.items.map((item: Record<string, string>) => ({
        headline: stripHtml(item.title || ""),
        summary:
          stripHtml(item.description || item.content || "").slice(0, 300) ||
          "Read the full article for details.",
        url: item.link || "#",
        date: formatDate(item.published || ""),
        emoji,
      }));
    }
    return [];
  } catch {
    return [];
  }
}

async function fetchFeed(
  feedUrl: string,
  emoji: string,
): Promise<LiveArticle[]> {
  // Try each proxy in order
  for (const proxy of CORS_PROXIES) {
    const articles = await fetchFeedViaProxy(proxy, feedUrl, emoji);
    if (articles.length > 0) return articles;
  }
  return [];
}

async function fetchAllLiveNews(): Promise<LiveArticle[]> {
  const results = await Promise.allSettled(
    RSS_FEEDS.map((f) => fetchFeed(f.url, f.emoji)),
  );
  const all: LiveArticle[] = [];
  for (const r of results) {
    if (r.status === "fulfilled") {
      all.push(...r.value);
    }
  }
  return all;
}

export default function DailyNewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [liveArticles, setLiveArticles] = useState<LiveArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  const loadNews = useCallback(async () => {
    setLoading(true);
    setFetchError(false);
    try {
      const items = await fetchAllLiveNews();
      if (items.length > 0) {
        setLiveArticles(items);
        setLastFetched(new Date());
      } else {
        setFetchError(true);
      }
    } catch {
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  // Build unified list
  const liveNewsItems: NewsItem[] = liveArticles.map((a, idx) => ({
    id: 1000 + idx,
    headline: a.headline,
    summary: a.summary,
    category: "Live News",
    date: a.date,
    url: a.url,
    emoji: a.emoji,
  }));

  const allItems = [...liveNewsItems, ...FALLBACK_NEWS];

  const filtered =
    activeCategory === "All"
      ? allItems
      : allItems.filter((n) => n.category === activeCategory);

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.48_0.18_195)] to-[oklch(0.32_0.14_220)] p-6 text-white shadow-lg">
        <div className="flex items-center gap-2 text-white/60 text-xs font-medium mb-3">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Updates</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/90">Education & Current Affairs</span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
          Daily News & Updates
        </h1>
        <p className="text-white/70 text-base">
          Live headlines from The Hindu, NDTV, Times of India — refreshed daily.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {["📅 CBSE", "🏆 JEE/NEET", "🔬 Science", "🌍 GK", "🎓 Careers"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/15"
              >
                {tag}
              </span>
            ),
          )}
          <div className="ml-auto flex items-center gap-2">
            {lastFetched && (
              <span className="text-xs text-white/50">
                {lastFetched.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
            <button
              type="button"
              data-ocid="news.refresh.button"
              onClick={loadNews}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all disabled:opacity-50"
            >
              <RefreshCw
                className={`w-3 h-3 ${loading ? "animate-spin" : ""}`}
              />
              {loading ? "Loading..." : "Refresh"}
            </button>
          </div>
        </div>
      </div>

      {/* Live status banner */}
      {liveArticles.length > 0 && (
        <div className="flex items-center gap-2 mb-4 px-1">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-muted-foreground font-medium">
            {liveArticles.length} live articles loaded from news sources
          </span>
        </div>
      )}
      {fetchError && (
        <div
          data-ocid="news.error_state"
          className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200"
        >
          <WifiOff className="w-4 h-4 text-amber-500" />
          <span className="text-xs text-amber-700">
            Live news unavailable — showing curated articles.{" "}
            <button type="button" onClick={loadNews} className="underline">
              Try again
            </button>
          </span>
        </div>
      )}

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8" data-ocid="news.filter.tab">
        {CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat}
            data-ocid={`news.${cat.toLowerCase().replace(/[^a-z]/g, "_")}.tab`}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-150 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat === "Live News" ? "🔴 Live News" : cat}
          </button>
        ))}
      </div>

      {/* Loading skeleton */}
      {loading && liveArticles.length === 0 ? (
        <div
          data-ocid="news.loading_state"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border p-5 animate-pulse"
            >
              <div className="h-4 bg-muted rounded w-1/3 mb-3" />
              <div className="h-5 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-full mb-1" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          data-ocid="news.list"
        >
          {filtered.map((item, idx) => {
            const isLive = item.category === "Live News";
            return (
              <article
                key={item.id}
                data-ocid={`news.item.${idx + 1}`}
                className={`bg-card rounded-2xl border p-5 hover:shadow-lg transition-all duration-200 flex flex-col ${
                  isLive
                    ? "border-orange-200 hover:border-orange-300"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {/* Category badge + date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge
                    variant="outline"
                    className={`text-xs border ${categoryColors[item.category] ?? "bg-secondary text-foreground border-border"}`}
                  >
                    {isLive ? "🔴 Live" : item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>

                {/* Headline */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {item.emoji}
                  </span>
                  <h2 className="font-display font-bold text-base text-foreground leading-snug">
                    {item.headline}
                  </h2>
                </div>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {item.summary}
                </p>

                {/* Read more */}
                <Button
                  variant="outline"
                  size="sm"
                  data-ocid={`news.primary_button.${idx + 1}`}
                  onClick={() =>
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }
                  className={`self-start h-8 px-4 text-xs gap-1.5 ${
                    isLive
                      ? "border-orange-200 text-orange-600 hover:bg-orange-50"
                      : "border-primary/20 text-primary hover:bg-primary/10"
                  }`}
                >
                  Read More
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </article>
            );
          })}
        </div>
      )}

      {filtered.length === 0 && !loading && (
        <div
          data-ocid="news.empty_state"
          className="text-center py-20 text-muted-foreground"
        >
          <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="font-semibold">No news in this category</p>
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground mt-10">
        Live news fetched from The Hindu, NDTV &amp; Times of India RSS feeds.
        Curated articles shown as fallback.
      </p>
    </section>
  );
}
