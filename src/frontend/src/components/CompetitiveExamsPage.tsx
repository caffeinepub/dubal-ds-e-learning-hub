import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Award,
  BookOpen,
  ExternalLink,
  FileText,
  GraduationCap,
  Play,
  ScrollText,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  COMPETITIVE_EXAMS,
  type CompExamTopic,
  type CompetitiveExam,
} from "../data/competitiveExamsSyllabus";

// Exam accent colors keyed by exam id — darker values for legibility on light bg
const EXAM_COLORS: Record<string, string> = {
  upsc: "oklch(0.38 0.20 264)",
  "ssc-cgl": "oklch(0.40 0.20 142)",
  bpsc: "oklch(0.38 0.20 335)",
  "loco-pilot": "oklch(0.44 0.22 30)",
  "bank-po": "oklch(0.36 0.24 200)",
  "bank-clerk": "oklch(0.38 0.22 195)",
  nda: "oklch(0.35 0.20 264)",
  cds: "oklch(0.32 0.19 250)",
  capf: "oklch(0.36 0.21 280)",
  "railway-ntpc": "oklch(0.42 0.22 15)",
};

function getExamColor(id: string) {
  return EXAM_COLORS[id] ?? "oklch(0.38 0.20 264)";
}

// ── Notes Dialog ───────────────────────────────────────────────────────────────
function NotesDialog({
  topic,
  open,
  onClose,
}: {
  topic: CompExamTopic | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!topic) return null;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[80vh] overflow-y-auto"
        data-ocid="competitive.notes.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-lg font-bold leading-snug text-foreground">
            {topic.name}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-2 p-4 rounded-xl bg-secondary/50 border border-border">
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
            {topic.notes}
          </p>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              window.open(topic.videoUrl, "_blank", "noopener,noreferrer")
            }
            data-ocid="competitive.notes.watch.button"
          >
            <Play className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
            Watch Video
          </Button>
          {topic.pdfUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                window.open(topic.pdfUrl!, "_blank", "noopener,noreferrer")
              }
              data-ocid="competitive.notes.pdf.button"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
              Open PDF
            </Button>
          )}
          <Button
            size="sm"
            variant="ghost"
            onClick={onClose}
            className="ml-auto text-muted-foreground"
            data-ocid="competitive.notes.close_button"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── Topic Row ─────────────────────────────────────────────────────────────────
function TopicRow({
  topic,
  index,
  onNotesOpen,
}: {
  topic: CompExamTopic;
  index: number;
  onNotesOpen: (t: CompExamTopic) => void;
}) {
  return (
    <div
      className="flex items-start gap-3 py-3 px-1 border-b border-border/50 last:border-0 group/row hover:bg-secondary/30 rounded-lg transition-colors"
      data-ocid={`competitive.topic.item.${index + 1}`}
    >
      {/* Index badge */}
      <div className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
        {index + 1}
      </div>

      {/* Topic name */}
      <p className="flex-1 text-sm font-medium text-foreground leading-snug pt-0.5">
        {topic.name}
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          type="button"
          onClick={() =>
            window.open(topic.videoUrl, "_blank", "noopener,noreferrer")
          }
          className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
          style={{
            background: "oklch(0.52 0.17 15 / 0.12)",
            color: "oklch(0.52 0.17 15)",
            border: "1px solid oklch(0.52 0.17 15 / 0.3)",
          }}
          data-ocid={`competitive.topic.watch.button.${index + 1}`}
          aria-label={`Watch video for ${topic.name}`}
        >
          <Play className="w-3 h-3 fill-current" />
          Watch
        </button>

        {topic.pdfUrl && (
          <button
            type="button"
            onClick={() =>
              window.open(topic.pdfUrl!, "_blank", "noopener,noreferrer")
            }
            className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
            style={{
              background: "oklch(0.55 0.16 142 / 0.12)",
              color: "oklch(0.45 0.14 142)",
              border: "1px solid oklch(0.55 0.16 142 / 0.3)",
            }}
            data-ocid={`competitive.topic.pdf.button.${index + 1}`}
            aria-label={`Open PDF for ${topic.name}`}
          >
            <FileText className="w-3 h-3" />
            PDF
          </button>
        )}

        <button
          type="button"
          onClick={() => onNotesOpen(topic)}
          className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
          style={{
            background: "oklch(0.58 0.19 52 / 0.12)",
            color: "oklch(0.48 0.18 52)",
            border: "1px solid oklch(0.58 0.19 52 / 0.3)",
          }}
          data-ocid={`competitive.topic.notes.button.${index + 1}`}
          aria-label={`View notes for ${topic.name}`}
        >
          <BookOpen className="w-3 h-3" />
          Notes
        </button>
      </div>
    </div>
  );
}

// ── Exam Detail Card ──────────────────────────────────────────────────────────
function ExamDetailCard({ exam }: { exam: CompetitiveExam }) {
  const color = getExamColor(exam.id);
  return (
    <div
      className="rounded-2xl border border-border overflow-hidden mb-6"
      data-ocid="competitive.exam.card"
    >
      {/* Header */}
      <div
        className="px-6 py-5"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="font-display font-bold text-xl text-white leading-snug">
              {exam.fullName}
            </h2>
            <p className="text-white/75 text-sm mt-1">{exam.conductedBy}</p>
          </div>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(1 0 0 / 0.15)" }}
          >
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-5 bg-card space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}1a` }}
            >
              <ScrollText className="w-4 h-4" style={{ color }} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-0.5">
                About
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {exam.description}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}1a` }}
            >
              <Users className="w-4 h-4" style={{ color }} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-0.5">
                Eligibility
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {exam.eligibility}
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          <Button
            size="sm"
            onClick={() =>
              window.open(exam.officialSite, "_blank", "noopener,noreferrer")
            }
            style={{ background: color, color: "#fff" }}
            className="hover:opacity-90"
            data-ocid="competitive.exam.official.button"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
            Official Site
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              window.open(exam.paperPortal, "_blank", "noopener,noreferrer")
            }
            data-ocid="competitive.exam.papers.button"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            Previous Papers
          </Button>
        </div>
      </div>
    </div>
  );
}

// ── Sections Accordion ────────────────────────────────────────────────────────
function SectionsAccordion({
  exam,
  onNotesOpen,
}: {
  exam: CompetitiveExam;
  onNotesOpen: (t: CompExamTopic) => void;
}) {
  const color = getExamColor(exam.id);
  return (
    <Accordion
      type="multiple"
      className="space-y-3"
      data-ocid="competitive.sections.list"
    >
      {exam.sections.map((section, si) => (
        <AccordionItem
          key={section.name}
          value={`section-${si}`}
          className="rounded-xl border border-border bg-card overflow-hidden"
          data-ocid={`competitive.section.item.${si + 1}`}
        >
          <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/30 transition-colors">
            <div className="flex items-center gap-3 text-left flex-1 mr-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}1a` }}
              >
                <Award className="w-4 h-4" style={{ color }} />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground leading-snug">
                  {section.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {section.topics.length} topic
                  {section.topics.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-4">
            <div className="pt-1 space-y-0.5">
              {section.topics.map((topic, ti) => (
                <TopicRow
                  key={topic.name}
                  topic={topic}
                  index={ti}
                  onNotesOpen={onNotesOpen}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CompetitiveExamsPage() {
  const [selectedExamId, setSelectedExamId] = useState("upsc");
  const [notesDialogTopic, setNotesDialogTopic] =
    useState<CompExamTopic | null>(null);
  const [notesDialogOpen, setNotesDialogOpen] = useState(false);

  const selectedExam =
    COMPETITIVE_EXAMS.find((e) => e.id === selectedExamId) ??
    COMPETITIVE_EXAMS[0];

  const handleNotesOpen = (topic: CompExamTopic) => {
    setNotesDialogTopic(topic);
    setNotesDialogOpen(true);
  };

  return (
    <section className="min-h-screen">
      {/* Hero Header */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.10 264) 0%, oklch(0.30 0.14 30) 50%, oklch(0.22 0.08 45) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 60%, oklch(0.75 0.18 52) 0%, transparent 45%), radial-gradient(circle at 85% 20%, oklch(0.65 0.20 264) 0%, transparent 40%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Government &amp; Competitive Exams</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-3 leading-tight">
            Govt &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.85 0.18 52), oklch(0.78 0.22 30))",
              }}
            >
              Competitive Exams
            </span>
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
            Comprehensive preparation for UPSC, SSC CGL, BPSC, Railway (Loco
            Pilot / NTPC), Bank PO, Bank Clerk, NDA, CDS, CAPF &amp; more — with
            syllabus, topic notes, previous papers, and video links.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-2">
            {[
              "🎯 10 Exams Covered",
              "📋 Syllabus with Notes",
              "🎬 Video Links",
              "📄 Previous Papers",
              "📊 GK, GS, Reasoning, CA",
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
        {/* Exam Selector */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Select Exam
          </p>
          <div
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-none"
            data-ocid="competitive.exam.selector"
          >
            {COMPETITIVE_EXAMS.map((exam) => {
              const isSelected = selectedExamId === exam.id;
              const color = getExamColor(exam.id);
              return (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => setSelectedExamId(exam.id)}
                  className="flex-shrink-0 text-sm px-4 py-2 rounded-full border font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                  style={
                    isSelected
                      ? {
                          background: color,
                          color: "#fff",
                          borderColor: color,
                          boxShadow: `0 4px 12px ${color}50`,
                        }
                      : {
                          borderColor: `${color}60`,
                          color,
                          background: `${color}18`,
                        }
                  }
                  data-ocid={"competitive.exam.selector.button"}
                  aria-pressed={isSelected}
                >
                  {exam.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Exam Detail Card */}
        <ExamDetailCard exam={selectedExam} />

        {/* Sections */}
        <div className="mb-4 flex items-center gap-2">
          <div
            className="w-1.5 h-6 rounded-full"
            style={{ background: getExamColor(selectedExam.id) }}
          />
          <h2 className="font-display font-bold text-xl text-foreground">
            Exam Syllabus &amp; Topics
          </h2>
          <Badge variant="secondary" className="ml-2">
            {selectedExam.sections.length} section
            {selectedExam.sections.length !== 1 ? "s" : ""}
          </Badge>
        </div>

        <SectionsAccordion exam={selectedExam} onNotesOpen={handleNotesOpen} />
      </div>

      {/* Notes Dialog */}
      <NotesDialog
        topic={notesDialogTopic}
        open={notesDialogOpen}
        onClose={() => setNotesDialogOpen(false)}
      />
    </section>
  );
}
