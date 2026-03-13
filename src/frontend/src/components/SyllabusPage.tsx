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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertCircle,
  BookMarked,
  BookOpen,
  ChevronRight,
  Download,
  FlaskConical,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CHAPTER_FORMULAS } from "../data/chapterFormulas";
import type { ChapterFormulaSheet } from "../data/chapterFormulas";
import { CHAPTER_SUMMARIES } from "../data/chapterSummaries";
import { Category, useGetSyllabus } from "../hooks/useQueries";
import CategorySelector from "./CategorySelector";

interface SyllabusPageProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

const categoryLabels: Record<Category, string> = {
  [Category.Class10]: "CBSE Class 10",
  [Category.Class12]: "CBSE Class 12",
  [Category.JEE]: "JEE",
  [Category.NEET]: "NEET",
  [Category.CompetitiveExams]: "Competitive Exams",
  [Category.SSB]: "SSB",
  [Category.Maharashtra10]: "Maharashtra Board Class 10",
  [Category.Bengal10]: "West Bengal Board Class 10",
  [Category.Maharashtra12]: "Maharashtra Board Class 12",
  [Category.Bengal12]: "West Bengal Board Class 12",
};

const categoryBadgeClass: Record<Category, string> = {
  [Category.Class10]: "badge-class10",
  [Category.Class12]: "badge-class12",
  [Category.JEE]: "badge-jee",
  [Category.NEET]: "badge-neet",
  [Category.CompetitiveExams]: "badge-class10",
  [Category.SSB]: "badge-class12",
  [Category.Maharashtra10]: "badge-class10",
  [Category.Bengal10]: "badge-class12",
  [Category.Maharashtra12]: "badge-class10",
  [Category.Bengal12]: "badge-class12",
};

function SyllabusLoadingSkeleton() {
  return (
    <div className="space-y-4" data-ocid="syllabus.loading_state">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-xl border border-border p-4">
          <Skeleton className="h-6 w-48 mb-3" />
          <div className="space-y-2 pl-4">
            {[1, 2, 3].map((j) => (
              <Skeleton key={j} className="h-4 w-full max-w-sm" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SyllabusPage({
  activeCategory,
  onCategoryChange,
}: SyllabusPageProps) {
  const { data, isLoading, isError } = useGetSyllabus(activeCategory);
  const [summaryModal, setSummaryModal] = useState<{
    subject: string;
    chapter: string;
  } | null>(null);
  const [formulaModal, setFormulaModal] = useState<{
    chapter: string;
    sheet: ChapterFormulaSheet;
  } | null>(null);

  const handleChapterDownload = (url: string, chapterName: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success(`Opening PDF: "${chapterName}"`);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <BookOpen className="w-4 h-4" />
          <span>Syllabus</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">
            {categoryLabels[activeCategory]}
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          Syllabus &amp; Chapters
        </h1>
        <p className="text-muted-foreground text-base">
          Click <span className="font-semibold text-rose-600">Watch</span> to
          open the video lesson on YouTube. Click{" "}
          <span className="font-semibold text-green-700">PDF</span> to download
          the NCERT chapter PDF directly. Use{" "}
          <span className="font-semibold text-foreground">Notes</span> for Smart
          Notes.
        </p>
      </div>

      {/* Category selector */}
      <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-card rounded-xl border border-border">
        <span className="text-sm font-semibold text-foreground min-w-[90px]">
          Select Exam:
        </span>
        <CategorySelector
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>

      {/* Loading */}
      {isLoading && <SyllabusLoadingSkeleton />}

      {/* Error */}
      {isError && (
        <div
          data-ocid="syllabus.error_state"
          className="flex flex-col items-center gap-4 py-16 text-center"
        >
          <AlertCircle className="w-12 h-12 text-destructive/50" />
          <div>
            <p className="font-semibold text-foreground">
              Failed to load syllabus
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Please try again later.
            </p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && !isError && data && data.subjects.length === 0 && (
        <div
          data-ocid="syllabus.empty_state"
          className="flex flex-col items-center gap-4 py-20 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-foreground">
              Syllabus Coming Soon
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Content for {categoryLabels[activeCategory]} will be available
              shortly.
            </p>
          </div>
        </div>
      )}

      {/* Subjects accordion */}
      {!isLoading && !isError && data && data.subjects.length > 0 && (
        <div className="space-y-4 subject-accordion">
          <p className="text-sm text-muted-foreground mb-2">
            {data.subjects.length} subjects found
          </p>
          <Accordion type="multiple" className="space-y-3">
            {data.subjects.map((subject, idx) => (
              <AccordionItem
                key={`${subject.name}-${idx}`}
                value={`subject-${subject.name}-${idx}`}
                className="rounded-xl border border-border bg-card overflow-hidden"
                data-ocid={`syllabus.subject.panel.${idx + 1}`}
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/40 transition-colors">
                  <div className="flex items-center gap-3 text-left flex-1">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-base text-foreground">
                        {subject.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {subject.chapters.length} chapters
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`ml-auto mr-4 text-xs ${categoryBadgeClass[activeCategory]}`}
                    >
                      {categoryLabels[activeCategory]}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4">
                  <div className="pt-2 space-y-2">
                    {subject.chapters.map((chapter, cIdx) => {
                      const summaryKey = `${subject.name}::${chapter.name}`;
                      const hasSummary = !!CHAPTER_SUMMARIES[summaryKey];
                      const hasVideo = !!chapter.videoUrl;

                      const formulaKey = `${subject.name}::${chapter.name}`;
                      const formulaSheet = CHAPTER_FORMULAS[formulaKey];

                      return (
                        <div
                          key={chapter.name}
                          className="flex items-center justify-between gap-2 py-2.5 px-3 rounded-lg bg-background/60 hover:bg-secondary/60 transition-colors group"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                              {cIdx + 1}
                            </span>
                            <span className="text-sm text-foreground font-medium truncate">
                              {chapter.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end">
                            {hasVideo && (
                              <a
                                href={chapter.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-ocid={`syllabus.video.button.${cIdx + 1}`}
                                className="inline-flex items-center gap-1 h-8 px-2.5 text-xs rounded-md border border-rose-500 text-rose-600 font-semibold bg-rose-50 hover:bg-rose-100 transition-colors"
                                aria-label={`Watch video for ${chapter.name}`}
                              >
                                <PlayCircle className="w-3.5 h-3.5" />
                                Watch
                              </a>
                            )}
                            {hasSummary && (
                              <Button
                                size="sm"
                                variant="outline"
                                data-ocid={`syllabus.notes.button.${cIdx + 1}`}
                                onClick={() =>
                                  setSummaryModal({
                                    subject: subject.name,
                                    chapter: chapter.name,
                                  })
                                }
                                className="h-8 px-2.5 text-xs border-primary/30 text-primary hover:bg-primary/10"
                                aria-label={`Smart Notes for ${chapter.name}`}
                              >
                                <BookMarked className="w-3.5 h-3.5 mr-1" />
                                Notes
                              </Button>
                            )}
                            {formulaSheet && (
                              <Button
                                size="sm"
                                variant="outline"
                                data-ocid={`syllabus.formulas.button.${cIdx + 1}`}
                                onClick={() =>
                                  setFormulaModal({
                                    chapter: chapter.name,
                                    sheet: formulaSheet,
                                  })
                                }
                                className="h-8 px-2.5 text-xs border-amber-400/50 text-amber-700 hover:bg-amber-50"
                                aria-label={`Formula Sheet for ${chapter.name}`}
                              >
                                <FlaskConical className="w-3.5 h-3.5 mr-1" />
                                Formulas
                              </Button>
                            )}
                            {chapter.url ? (
                              <div className="flex flex-col items-end gap-0.5">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  data-ocid={`syllabus.chapter.button.${cIdx + 1}`}
                                  onClick={() =>
                                    handleChapterDownload(
                                      chapter.url!,
                                      chapter.name,
                                    )
                                  }
                                  className="h-8 px-2.5 text-green-700 hover:bg-green-50 text-xs"
                                  aria-label={`Download PDF for ${chapter.name}`}
                                >
                                  <Download className="w-3.5 h-3.5 mr-1" />
                                  PDF
                                </Button>
                              </div>
                            ) : (
                              <Badge
                                variant="outline"
                                className="text-xs text-muted-foreground"
                              >
                                Soon
                              </Badge>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}

      {/* Smart Notes Dialog */}
      <Dialog
        open={!!summaryModal}
        onOpenChange={(open) => !open && setSummaryModal(null)}
      >
        <DialogContent
          className="max-w-2xl max-h-[80vh] overflow-y-auto"
          data-ocid="syllabus.notes.dialog"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-primary" />
              {summaryModal?.chapter}
            </DialogTitle>
            <DialogDescription>
              Smart Notes — {summaryModal?.subject}
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-w-none pt-2">
            <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
              {summaryModal
                ? CHAPTER_SUMMARIES[
                    `${summaryModal.subject}::${summaryModal.chapter}`
                  ]
                : ""}
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setSummaryModal(null)}
            data-ocid="syllabus.notes.close_button"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* Formula Sheet Dialog */}
      <Dialog
        open={!!formulaModal}
        onOpenChange={(open) => !open && setFormulaModal(null)}
      >
        <DialogContent
          className="max-w-2xl max-h-[85vh] overflow-y-auto"
          data-ocid="syllabus.formulas.dialog"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-amber-600" />
              Formula Sheet — {formulaModal?.chapter}
            </DialogTitle>
            <DialogDescription>
              Key formulas for board exams and competitive entrance tests
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-2">
            {formulaModal?.sheet.formulas.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-amber-200 bg-amber-50/60 p-3"
              >
                <div className="text-xs font-semibold text-amber-800 mb-1">
                  {f.title}
                </div>
                <div className="font-mono text-sm font-bold text-foreground bg-white/80 rounded-lg px-3 py-2 border border-amber-100">
                  {f.formula}
                </div>
                {f.description && (
                  <div className="text-xs text-muted-foreground mt-1.5">
                    {f.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setFormulaModal(null)}
            data-ocid="syllabus.formulas.close_button"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
