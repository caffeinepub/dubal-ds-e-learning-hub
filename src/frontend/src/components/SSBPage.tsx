import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  CheckCircle,
  Lightbulb,
  Play,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { type SSBTask, SSB_DAYS, SSB_OVERVIEW, SSB_QA } from "../data/ssbData";

// ── OLQ Badge Grid ─────────────────────────────────────────────────────────────
function OLQBadges() {
  const colors = [
    "oklch(0.35 0.20 264)",
    "oklch(0.36 0.20 335)",
    "oklch(0.38 0.20 142)",
    "oklch(0.40 0.22 30)",
    "oklch(0.34 0.24 200)",
    "oklch(0.42 0.22 15)",
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {SSB_OVERVIEW.olqs.map((olq, i) => {
        const color = colors[i % colors.length];
        return (
          <span
            key={olq}
            className="text-xs px-2.5 py-1 rounded-full font-semibold border"
            style={{
              background: `${color}18`,
              color,
              borderColor: `${color}40`,
            }}
          >
            {olq}
          </span>
        );
      })}
    </div>
  );
}

// ── Task Card ─────────────────────────────────────────────────────────────────
function TaskCard({ task, index }: { task: SSBTask; index: number }) {
  return (
    <div
      className="rounded-xl border border-border bg-background overflow-hidden"
      data-ocid={`ssb.task.item.${index + 1}`}
    >
      {/* Task header */}
      <div className="flex items-start gap-3 p-4 border-b border-border/60">
        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-display font-semibold text-base text-foreground leading-snug">
            {task.name}
          </h4>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open(task.videoUrl, "_blank", "noopener,noreferrer")
          }
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold flex-shrink-0 transition-all hover:scale-105 active:scale-95"
          style={{
            background: "oklch(0.52 0.17 15 / 0.12)",
            color: "oklch(0.52 0.17 15)",
            border: "1px solid oklch(0.52 0.17 15 / 0.3)",
          }}
          data-ocid={`ssb.task.watch.button.${index + 1}`}
          aria-label={`Watch video for ${task.name}`}
        >
          <Play className="w-3 h-3 fill-current" />
          Watch
        </button>
      </div>

      {/* Description */}
      <div className="p-4 pb-3">
        <p className="text-sm text-foreground leading-relaxed">
          {task.description}
        </p>
      </div>

      {/* Tips */}
      <div
        className="mx-4 mb-4 p-3 rounded-xl border"
        style={{
          background: "oklch(0.75 0.18 52 / 0.08)",
          borderColor: "oklch(0.75 0.18 52 / 0.25)",
        }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Lightbulb
            className="w-3.5 h-3.5 flex-shrink-0"
            style={{ color: "oklch(0.58 0.19 52)" }}
          />
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: "oklch(0.58 0.19 52)" }}
          >
            Tips
          </span>
        </div>
        <p className="text-xs text-foreground/80 leading-relaxed">
          {task.tips}
        </p>
      </div>
    </div>
  );
}

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({
  day,
  index,
}: {
  day: (typeof SSB_DAYS)[number];
  index: number;
}) {
  return (
    <AccordionItem
      value={`day-${day.day}`}
      className="rounded-2xl border border-border bg-card overflow-hidden"
      data-ocid={`ssb.day.item.${index + 1}`}
    >
      <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/30 transition-colors">
        <div className="flex items-center gap-4 text-left flex-1 mr-3">
          {/* Day badge */}
          <div
            className="w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0 text-white"
            style={{ background: day.color }}
          >
            <span className="text-xs font-semibold leading-none opacity-80">
              Day
            </span>
            <span className="text-lg font-bold leading-none">{day.day}</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-base text-foreground leading-snug">
              {day.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              {day.subtitle}
            </p>
          </div>

          <Badge
            variant="secondary"
            className="flex-shrink-0 text-xs hidden sm:flex"
          >
            {day.tasks.length} task{day.tasks.length !== 1 ? "s" : ""}
          </Badge>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-5 pb-5">
        {/* Day notes */}
        <div
          className="mb-4 p-4 rounded-xl border text-sm text-foreground/80 leading-relaxed"
          style={{
            background: `${day.color}0d`,
            borderColor: `${day.color}30`,
          }}
        >
          {day.dayNotes}
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {day.tasks.map((task, ti) => (
            <TaskCard key={task.name} task={task} index={ti} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

// ── Q&A Bank Tab ─────────────────────────────────────────────────────────────
function SSBQATab() {
  const sections = Array.from(new Set(SSB_QA.map((q) => q.section)));
  const [activeSection, setActiveSection] = useState("All");

  const filtered =
    activeSection === "All"
      ? SSB_QA
      : SSB_QA.filter((q) => q.section === activeSection);

  return (
    <div>
      {/* Section filter */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Filter by Section
        </p>
        <div
          className="flex flex-wrap gap-2"
          data-ocid="ssb.qabank.section.filter"
        >
          {["All", ...sections].map((sec) => (
            <button
              key={sec}
              type="button"
              onClick={() => setActiveSection(sec)}
              className="text-sm px-3.5 py-1.5 rounded-full border font-medium transition-all"
              style={
                activeSection === sec
                  ? {
                      background: "oklch(0.35 0.20 264)",
                      color: "#fff",
                      borderColor: "oklch(0.35 0.20 264)",
                    }
                  : {
                      borderColor: "oklch(0.35 0.20 264 / 0.5)",
                      color: "oklch(0.35 0.20 264)",
                      background: "oklch(0.35 0.20 264 / 0.10)",
                    }
              }
              data-ocid="ssb.qabank.section.tab"
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-muted-foreground mb-4">
        {filtered.length} question{filtered.length !== 1 ? "s" : ""}{" "}
        {activeSection !== "All" && `in "${activeSection}"`}
      </p>

      {/* Q&A Accordion */}
      <Accordion type="multiple" className="space-y-3">
        {filtered.map((entry, idx) => (
          <AccordionItem
            key={`${entry.section}-${idx}`}
            value={`ssb-qa-${idx}`}
            className="rounded-xl border border-border bg-card overflow-hidden"
            data-ocid={`ssb.qabank.item.${idx + 1}`}
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/40 transition-colors">
              <div className="flex items-start gap-3 text-left flex-1 mr-3">
                <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {entry.q}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-xs mt-1.5"
                    style={{ color: "oklch(0.45 0.18 264)" }}
                  >
                    {entry.section}
                  </Badge>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4">
              <div className="pt-2 pl-10">
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    background: "oklch(0.45 0.18 264 / 0.05)",
                    borderColor: "oklch(0.45 0.18 264 / 0.15)",
                  }}
                >
                  <p className="text-sm text-foreground leading-relaxed">
                    {entry.a}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function SSBPage() {
  return (
    <section className="min-h-screen">
      {/* Hero Header */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.15 0.08 264) 0%, oklch(0.24 0.14 264) 60%, oklch(0.20 0.10 280) 100%)",
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 70%, oklch(0.65 0.18 264) 0%, transparent 40%), radial-gradient(circle at 90% 20%, oklch(0.75 0.15 52) 0%, transparent 35%)",
          }}
        />
        {/* Star pattern */}
        <div className="absolute top-8 right-8 opacity-20">
          <div className="flex gap-1">
            {(["s1", "s2", "s3", "s4", "s5"] as const).map((id, i) => (
              <Star
                key={id}
                className="w-4 h-4 fill-white text-white"
                style={{ opacity: 0.5 + i * 0.1 }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Shield className="w-4 h-4" />
            <span>Indian Armed Forces Officer Selection</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-3 leading-tight">
            Services Selection{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.80 0.15 52), oklch(0.85 0.18 52))",
              }}
            >
              Board (SSB)
            </span>
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
            5-Day Officer Selection Process for Indian Army, Navy &amp; Air
            Force — covering Screening Tests, Psychology (TAT/WAT/SRT/SD), GTO
            Tasks, Personal Interview, and Conference.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-2">
            {[
              "🎖️ 5-Day Process",
              "🧠 Psychology Tests",
              "🏃 GTO Tasks",
              "🎙️ Personal Interview",
              "✅ 15 OLQs Assessed",
            ].map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1.5 rounded-full text-white/80 border border-white/20"
                style={{ background: "oklch(1 0 0 / 0.08)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview Card */}
        <div
          className="rounded-2xl border border-border overflow-hidden mb-8"
          data-ocid="ssb.overview.card"
        >
          <div
            className="px-6 py-4 border-b border-border flex items-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.15 0.08 264 / 0.08) 0%, oklch(0.24 0.14 264 / 0.05) 100%)",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.45 0.18 264 / 0.15)" }}
            >
              <Shield
                className="w-4 h-4"
                style={{ color: "oklch(0.45 0.18 264)" }}
              />
            </div>
            <h2 className="font-display font-bold text-lg text-foreground">
              What is SSB?
            </h2>
          </div>

          <div className="px-6 py-5 space-y-4 bg-card">
            <p className="text-sm text-foreground leading-relaxed">
              {SSB_OVERVIEW.description}
            </p>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border">
              <CheckCircle
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: "oklch(0.55 0.16 142)" }}
              />
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-0.5">
                  Eligibility
                </p>
                <p className="text-sm text-foreground">
                  {SSB_OVERVIEW.eligibility}
                </p>
              </div>
            </div>

            {/* OLQs */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users
                  className="w-4 h-4"
                  style={{ color: "oklch(0.52 0.17 335)" }}
                />
                <p className="text-sm font-semibold text-foreground">
                  Officer Like Qualities (OLQs) — 15 qualities assessed
                </p>
              </div>
              <OLQBadges />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="process" className="w-full">
          <TabsList
            className="mb-7 w-full grid grid-cols-2 h-14 p-1.5 rounded-2xl"
            style={{ background: "oklch(0.15 0.08 264 / 0.07)" }}
            data-ocid="ssb.tab"
          >
            <TabsTrigger
              value="process"
              className="flex items-center gap-1.5 text-sm font-semibold rounded-xl h-full data-[state=active]:shadow-sm"
              data-ocid="ssb.process.tab"
            >
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>5-Day Process</span>
            </TabsTrigger>
            <TabsTrigger
              value="qabank"
              className="flex items-center gap-1.5 text-sm font-semibold rounded-xl h-full data-[state=active]:shadow-sm"
              data-ocid="ssb.qabank.tab"
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span>Q&amp;A Bank</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="process">
            <div className="mb-4 flex items-center gap-2">
              <div
                className="w-1.5 h-6 rounded-full"
                style={{ background: "oklch(0.45 0.18 264)" }}
              />
              <h2 className="font-display font-bold text-xl text-foreground">
                The 5-Day SSB Process
              </h2>
            </div>
            <Accordion
              type="multiple"
              className="space-y-3"
              data-ocid="ssb.days.list"
            >
              {SSB_DAYS.map((day, i) => (
                <DayCard key={day.day} day={day} index={i} />
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="qabank">
            <div className="mb-4 flex items-center gap-2">
              <div
                className="w-1.5 h-6 rounded-full"
                style={{ background: "oklch(0.45 0.18 264)" }}
              />
              <h2 className="font-display font-bold text-xl text-foreground">
                SSB Q&amp;A Bank
              </h2>
            </div>
            <SSBQATab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
