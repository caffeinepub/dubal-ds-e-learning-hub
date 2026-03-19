import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertCircle,
  BookCheck,
  Calendar,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";
import { useState } from "react";
import {
  Category,
  useGetQuestionPapers,
  useGetSyllabus,
} from "../hooks/useQueries";
import CategorySelector from "./CategorySelector";

interface QuestionPapersPageProps {
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
  [Category.BengalNEET]: "WB NEET",
};

function PaperCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <Skeleton className="h-8 w-8 rounded-lg" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-9 w-32" />
      </div>
    </div>
  );
}

export default function QuestionPapersPage({
  activeCategory,
  onCategoryChange,
}: QuestionPapersPageProps) {
  const [selectedSubject, setSelectedSubject] = useState("");

  const { data: syllabusData } = useGetSyllabus(activeCategory);
  const subjects = syllabusData?.subjects ?? [];

  const {
    data: papers,
    isLoading,
    isError,
  } = useGetQuestionPapers(activeCategory, selectedSubject);

  const handleCategoryChange = (cat: Category) => {
    setSelectedSubject("");
    onCategoryChange(cat);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <FileText className="w-4 h-4" />
          <span>Question Papers</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">
            {categoryLabels[activeCategory]}
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          Question Papers &amp; Solutions
        </h1>
        <p className="text-muted-foreground text-base">
          Browse previous year question papers with solutions from official
          sources.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-card rounded-xl border border-border">
        <span className="text-sm font-semibold text-foreground min-w-[90px]">
          Select Exam:
        </span>
        <CategorySelector
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Subject selector */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="text-sm font-semibold text-foreground">Subject:</span>
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger
            className="w-64"
            data-ocid="papers.subject.select"
            aria-label="Select subject"
          >
            <SelectValue placeholder="Choose a subject..." />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((s) => (
              <SelectItem key={s.id.toString()} value={s.name}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* No subject selected */}
      {!selectedSubject && (
        <div
          data-ocid="papers.empty_state"
          className="flex flex-col items-center gap-4 py-20 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-foreground">
              Select a Subject
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Choose a subject above to browse question papers.
            </p>
          </div>
        </div>
      )}

      {/* Loading */}
      {selectedSubject && isLoading && (
        <div
          data-ocid="papers.loading_state"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <PaperCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error */}
      {selectedSubject && isError && (
        <div
          data-ocid="papers.error_state"
          className="flex flex-col items-center gap-4 py-16 text-center"
        >
          <AlertCircle className="w-12 h-12 text-destructive/50" />
          <p className="font-semibold text-foreground">Failed to load papers</p>
        </div>
      )}

      {/* Empty results */}
      {selectedSubject &&
        !isLoading &&
        !isError &&
        papers &&
        papers.length === 0 && (
          <div
            data-ocid="papers.empty_state"
            className="flex flex-col items-center gap-4 py-20 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
              <BookCheck className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="font-display font-semibold text-lg text-foreground">
                No Papers Found
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                No papers available for {selectedSubject} yet.
              </p>
            </div>
          </div>
        )}

      {/* Papers grid */}
      {selectedSubject &&
        !isLoading &&
        !isError &&
        papers &&
        papers.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              {papers.length} paper{papers.length !== 1 ? "s" : ""} found for{" "}
              {selectedSubject}
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {papers.map((paper, idx) => (
                <div
                  key={`${paper.title}-${paper.year.toString()}`}
                  data-ocid={`papers.item.${idx + 1}`}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
                >
                  {/* Card header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-base text-foreground leading-tight mb-1 line-clamp-2">
                        {paper.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs gap-1">
                          <Calendar className="w-3 h-3" />
                          {paper.year.toString()}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {selectedSubject}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      size="sm"
                      className="flex-1 min-w-[120px]"
                      data-ocid={`papers.download.button.${idx + 1}`}
                      onClick={() =>
                        window.open(paper.url, "_blank", "noopener,noreferrer")
                      }
                      aria-label={`Open question paper for ${paper.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      {activeCategory === Category.JEE
                        ? "Open JEE Portal"
                        : activeCategory === Category.NEET
                          ? "Open NEET Portal"
                          : "Download PDF"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 min-w-[120px]"
                      data-ocid={`papers.solution.button.${idx + 1}`}
                      disabled={!paper.solutionUrl}
                      onClick={() =>
                        paper.solutionUrl &&
                        window.open(
                          paper.solutionUrl,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      aria-label={
                        paper.solutionUrl
                          ? `View solutions for ${paper.title}`
                          : "No solution available"
                      }
                    >
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      {paper.solutionUrl ? "Solutions" : "No Solution"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
    </section>
  );
}
