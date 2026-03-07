import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink, Newspaper } from "lucide-react";
import { useState } from "react";

interface NewsItem {
  id: number;
  headline: string;
  summary: string;
  category: string;
  date: string;
  url: string;
  emoji: string;
}

const NEWS_ITEMS: NewsItem[] = [
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
      "National Testing Agency has opened the NEET UG 2026 registration window. Students applying for medical and dental programmes must register before the deadline. The exam is scheduled for May 2026. Syllabus is based on NCERT Class 11 and 12.",
    category: "JEE/NEET Exams",
    date: "February 28, 2026",
    url: "https://neet.nta.nic.in",
    emoji: "🩺",
  },
  {
    id: 4,
    headline: "NCERT Releases Revised Textbooks for 2025-26 Academic Year",
    summary:
      "NCERT has introduced updated textbooks for Class 6 to 12 incorporating the National Curriculum Framework (NCF) 2023. The new books emphasize competency-based learning, critical thinking, and Indian knowledge systems. New chapters on AI have been added.",
    category: "CBSE Updates",
    date: "February 25, 2026",
    url: "https://ncert.nic.in",
    emoji: "📚",
  },
  {
    id: 5,
    headline: "India's Mars Mission Mangalyaan 2 — Key Science Facts",
    summary:
      "ISRO's Mangalyaan 2 mission is progressing steadily. The spacecraft will study Martian atmosphere composition, surface geology, and search for signs of subsurface water. For NEET and JEE students: Mars has gravity 0.38g and atmosphere 95% CO2.",
    category: "Science & Technology",
    date: "February 22, 2026",
    url: "https://www.isro.gov.in",
    emoji: "🚀",
  },
  {
    id: 6,
    headline: "Nobel Prize in Physics 2025 Explained for Students",
    summary:
      "The 2025 Nobel Prize in Physics was awarded for discoveries in quantum entanglement. This topic connects to Class 12 Physics Chapter 'Dual Nature of Radiation and Matter' and the concept of wave-particle duality. A must-know for JEE Advanced aspirants.",
    category: "General Knowledge",
    date: "February 20, 2026",
    url: "https://www.nobelprize.org",
    emoji: "🔬",
  },
  {
    id: 7,
    headline: "New Education Policy (NEP 2020) Updates for Schools",
    summary:
      "The Ministry of Education announced new implementation milestones for NEP 2020. Key changes include flexible subject choices from Class 9, vocational education, and a shift from rote learning to analytical thinking. These changes affect CBSE board exam patterns.",
    category: "CBSE Updates",
    date: "February 18, 2026",
    url: "https://education.gov.in",
    emoji: "🏫",
  },
  {
    id: 8,
    headline: "JEE Advanced 2026 Exam Date and Eligibility Announced",
    summary:
      "IIT Delhi has announced JEE Advanced 2026 date as June 1, 2026. Only top 2.5 lakh JEE Main qualifiers are eligible. The exam tests deep conceptual understanding in Physics, Chemistry, and Mathematics beyond the NCERT level.",
    category: "JEE/NEET Exams",
    date: "February 15, 2026",
    url: "https://jeeadv.ac.in",
    emoji: "🎓",
  },
  {
    id: 9,
    headline: "Top Government Scholarships for Class 10 and 12 Students",
    summary:
      "Central and state governments offer numerous scholarships for meritorious students: NTSE, INSPIRE, PM Scholarship, Post-Matric Scholarship for SC/ST, and more. Applications for 2026 cycle open in April. Eligible students can receive up to Rs. 50,000 annually.",
    category: "Career & Opportunities",
    date: "February 12, 2026",
    url: "https://scholarships.gov.in",
    emoji: "💰",
  },
  {
    id: 10,
    headline: "AI and Machine Learning Added to CBSE Curriculum",
    summary:
      "CBSE has introduced AI as an elective subject for Classes 8 to 12. The syllabus covers Python programming, machine learning basics, neural networks, and ethical AI. Students choosing AI elective alongside PCM are in high demand at leading engineering colleges.",
    category: "Science & Technology",
    date: "February 10, 2026",
    url: "https://cbseacademic.nic.in",
    emoji: "🤖",
  },
  {
    id: 11,
    headline: "QS World University Rankings 2026: Indian Institutions Rise",
    summary:
      "IIT Bombay, IIT Delhi, and IISc Bangalore improved significantly in QS World University Rankings 2026. IIT Bombay entered the top 100 globally. For aspiring engineers: JEE Advanced rank determines admission to IITs, which rank among Asia's best.",
    category: "Career & Opportunities",
    date: "February 8, 2026",
    url: "https://www.topuniversities.com",
    emoji: "🌍",
  },
  {
    id: 12,
    headline: "Climate Change Topics in CBSE Board Exams 2026",
    summary:
      "Environmental Science is increasingly important in CBSE board exams. Key topics: greenhouse effect, global warming, ozone depletion, renewable energy. India has pledged net zero carbon by 2070. Connects to Class 10 'Our Environment' and Class 12 'Environmental Issues'.",
    category: "General Knowledge",
    date: "February 5, 2026",
    url: "https://unfccc.int",
    emoji: "🌱",
  },
  {
    id: 13,
    headline: "CBSE Sample Papers 2026 Released — Download Now",
    summary:
      "CBSE Academic has released sample question papers for Class 10 and Class 12 board exams 2026 with marking schemes. Papers are available for all subjects including Mathematics, Science, Physics, Chemistry, Biology, and English.",
    category: "CBSE Updates",
    date: "February 3, 2026",
    url: "https://cbseacademic.nic.in/sqp_classx.html",
    emoji: "📄",
  },
  {
    id: 14,
    headline: "Human Genome Fully Sequenced — Biology Breakthrough",
    summary:
      "Scientists completed the fully gapless sequence of the human genome, revealing 8% of DNA that was previously unknown. Directly relevant to Class 12 Biology: Molecular Basis of Inheritance, Biotechnology, and Human Genetics. Important for NEET students.",
    category: "Science & Technology",
    date: "January 30, 2026",
    url: "https://www.genome.gov",
    emoji: "🧬",
  },
  {
    id: 15,
    headline: "India Most Populous Country — Geography Facts for Students",
    summary:
      "India has overtaken China as the world's most populous country with 1.44 billion people. For Geography students: India's population density, demographic dividend, urbanisation trends, and migration patterns are important for Class 10 and 12 board exams.",
    category: "General Knowledge",
    date: "January 28, 2026",
    url: "https://censusindia.gov.in",
    emoji: "🗺️",
  },
  {
    id: 16,
    headline: "NEET PG 2026 Counselling Schedule Released",
    summary:
      "National Medical Commission announced the NEET PG 2026 counselling schedule. Medical students who qualified NEET PG can register for government and private medical college seats. Separate rounds for All India Quota and state quota seats.",
    category: "JEE/NEET Exams",
    date: "January 25, 2026",
    url: "https://mcc.nic.in",
    emoji: "🏥",
  },
  {
    id: 17,
    headline: "Semiconductor Industry — Career Opportunities for PCM Students",
    summary:
      "India's semiconductor industry will attract Rs. 1.5 lakh crore investment over 5 years. IIT graduates in Electronics Engineering are in exceptional demand. For JEE aspirants: Semiconductor Electronics (Class 12 Physics) is highly weighted in JEE Main and Advanced.",
    category: "Career & Opportunities",
    date: "January 22, 2026",
    url: "https://www.india.gov.in",
    emoji: "💻",
  },
  {
    id: 18,
    headline: "National Science Olympiad 2026 Registrations Open",
    summary:
      "The Science Olympiad Foundation has opened registrations for NSO, IMO, and IEO 2026. These Olympiads are excellent preparation for JEE and NEET as they test advanced problem-solving. Schools must register by April 15 via the SOF website.",
    category: "Career & Opportunities",
    date: "January 20, 2026",
    url: "https://www.sofworld.org",
    emoji: "🏅",
  },
  {
    id: 19,
    headline: "James Webb Telescope Finds New Exoplanets with Water",
    summary:
      "The James Webb Space Telescope discovered 12 new exoplanets in habitable zones, two showing signs of water vapour. For Physics students: Spectroscopy (Wave Optics) is used to detect planetary atmospheres. Important general knowledge for board exams.",
    category: "Science & Technology",
    date: "January 18, 2026",
    url: "https://webb.nasa.gov",
    emoji: "🌌",
  },
  {
    id: 20,
    headline: "CUET 2026 Application Process Begins — Central Universities",
    summary:
      "NTA started CUET 2026 applications for Delhi University, JNU, BHU admissions and more. CUET tests Class 12 subject knowledge and general aptitude. Students can apply for commerce, humanities, and science programmes across central universities.",
    category: "Career & Opportunities",
    date: "January 15, 2026",
    url: "https://cuet.nta.nic.in",
    emoji: "🎓",
  },
  {
    id: 21,
    headline: "CBSE Introduces Financial Literacy Module for Class 10",
    summary:
      "CBSE introduced an optional Financial Literacy module covering budgeting, savings, banking, taxes, and digital payments. This prepares students for real-life financial decisions and also covers Class 10 Economics Chapter 'Money and Credit'.",
    category: "CBSE Updates",
    date: "January 12, 2026",
    url: "https://cbse.gov.in",
    emoji: "💳",
  },
  {
    id: 22,
    headline: "India's GDP Growth 7.3% — Economics for Board Students",
    summary:
      "India's GDP growth rate of 7.3% makes it the fastest-growing major economy. For Class 10 Economics and Class 12 Macroeconomics: GDP measures total market value of all goods and services. India is on track to become the world's third largest economy by 2030.",
    category: "General Knowledge",
    date: "January 10, 2026",
    url: "https://mospi.gov.in",
    emoji: "📈",
  },
];

const CATEGORIES = [
  "All",
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
};

export default function DailyNewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.category === activeCategory);

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Colorful Page Header */}
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
          Stay updated with CBSE, JEE, NEET news, science discoveries, and
          career opportunities — curated for students.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "📅 CBSE Updates",
            "🏆 JEE/NEET",
            "🔬 Science",
            "🌍 GK",
            "🎓 Careers",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat}
            data-ocid={`news.${cat.toLowerCase().replace(/[^a-z]/g, "_")}.tab`}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-150 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary shadow-glow"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        data-ocid="news.list"
      >
        {filtered.map((item, idx) => (
          <article
            key={item.id}
            data-ocid={`news.item.${idx + 1}`}
            className="bg-card rounded-2xl border border-border p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-200 flex flex-col"
          >
            {/* Category badge + date */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <Badge
                variant="outline"
                className={`text-xs border ${categoryColors[item.category] ?? "bg-secondary"}`}
              >
                {item.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{item.date}</span>
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
              className="self-start h-8 px-4 text-xs gap-1.5 border-primary/20 text-primary hover:bg-primary/10"
            >
              Read More
              <ExternalLink className="w-3 h-3" />
            </Button>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          data-ocid="news.empty_state"
          className="text-center py-20 text-muted-foreground"
        >
          <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="font-semibold">No news in this category</p>
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground mt-10">
        News curated for educational purposes. Click "Read More" to visit
        official sources.
      </p>
    </section>
  );
}
