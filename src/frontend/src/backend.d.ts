import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SyllabusEntry {
    subjects: Array<Subject>;
    category: Category;
}
export interface GlossaryTerm {
    subject: string;
    term: string;
    definition: string;
}
export interface QuestionPaper {
    url: string;
    title: string;
    year: bigint;
    solutionUrl?: string;
}
export interface QABankEntry {
    question: string;
    subject: string;
    answer: string;
    category: Category;
}
export interface Subject {
    id: bigint;
    name: string;
    chapters: Array<Chapter>;
}
export interface Chapter {
    url?: string;
    name: string;
}
export enum Category {
    JEE = "JEE",
    NEET = "NEET",
    Class10 = "Class10",
    Class12 = "Class12"
}
export interface backendInterface {
    getQABankEntriesBySubject(category: Category, subject: string): Promise<Array<QABankEntry>>;
    getQuestionPapers(category: Category, subject: string): Promise<Array<QuestionPaper>>;
    getSyllabus(category: Category): Promise<SyllabusEntry>;
    searchGlossary(keyword: string): Promise<Array<GlossaryTerm>>;
    searchQABank(keyword: string): Promise<Array<QABankEntry>>;
}
