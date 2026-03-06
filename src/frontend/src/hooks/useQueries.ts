import { useQuery } from "@tanstack/react-query";
import { GLOSSARY } from "../data/glossary";
import type { GlossaryTerm } from "../data/glossary";
import { QA_BANK } from "../data/qaBank";
import type { QABankEntry } from "../data/qaBank";
import { Category } from "../types";

// Re-export Category so existing imports from useQueries still work
export { Category };

interface Chapter {
  url?: string;
  name: string;
  videoUrl?: string;
}

interface Subject {
  id: bigint;
  name: string;
  chapters: Chapter[];
}

interface SyllabusEntry {
  subjects: Subject[];
  category: Category;
}

interface QuestionPaper {
  url: string;
  title: string;
  year: bigint;
  solutionUrl?: string;
}

// ── PDF URL helpers ──────────────────────────────────────────────────────────
// Direct NCERT chapter PDF links.
// Format: https://ncert.nic.in/textbook/pdf/<bookcode><NN>.pdf
// Where <NN> is the chapter number zero-padded to 2 digits.

// Class 10 Mathematics chapter PDFs
// Using NCERT's official textbook viewer (textbook.php) which always loads.
// Direct /textbook/pdf/*.pdf links are blocked by NCERT for external sites.
const C10_M_CH1 = "https://ncert.nic.in/textbook.php?jemh1=1-1";
const C10_M_CH2 = "https://ncert.nic.in/textbook.php?jemh1=2-2";
const C10_M_CH3 = "https://ncert.nic.in/textbook.php?jemh1=3-3";
const C10_M_CH4 = "https://ncert.nic.in/textbook.php?jemh1=4-4";
const C10_M_CH5 = "https://ncert.nic.in/textbook.php?jemh1=5-5";
const C10_M_CH6 = "https://ncert.nic.in/textbook.php?jemh1=6-6";
const C10_M_CH7 = "https://ncert.nic.in/textbook.php?jemh1=7-7";
const C10_M_CH8 = "https://ncert.nic.in/textbook.php?jemh1=8-8";
const C10_M_CH9 = "https://ncert.nic.in/textbook.php?jemh1=9-9";
const C10_M_CH10 = "https://ncert.nic.in/textbook.php?jemh1=10-10";
const C10_M_CH11 = "https://ncert.nic.in/textbook.php?jemh1=11-11";
const C10_M_CH12 = "https://ncert.nic.in/textbook.php?jemh1=12-12";
const C10_M_CH13 = "https://ncert.nic.in/textbook.php?jemh1=13-13";
const C10_M_CH14 = "https://ncert.nic.in/textbook.php?jemh1=14-14";

const C10_SC_CH1 = "https://ncert.nic.in/textbook.php?jesc1=1-1";
const C10_SC_CH2 = "https://ncert.nic.in/textbook.php?jesc1=2-2";
const C10_SC_CH3 = "https://ncert.nic.in/textbook.php?jesc1=3-3";
const C10_SC_CH4 = "https://ncert.nic.in/textbook.php?jesc1=4-4";
const C10_SC_CH5 = "https://ncert.nic.in/textbook.php?jesc1=5-5";
const C10_SC_CH6 = "https://ncert.nic.in/textbook.php?jesc1=6-6";
const C10_SC_CH7 = "https://ncert.nic.in/textbook.php?jesc1=7-7";
const C10_SC_CH8 = "https://ncert.nic.in/textbook.php?jesc1=8-8";
const C10_SC_CH9 = "https://ncert.nic.in/textbook.php?jesc1=9-9";
const C10_SC_CH10 = "https://ncert.nic.in/textbook.php?jesc1=10-10";
const C10_SC_CH11 = "https://ncert.nic.in/textbook.php?jesc1=11-11";
const C10_SC_CH12 = "https://ncert.nic.in/textbook.php?jesc1=12-12";
const C10_SC_CH13 = "https://ncert.nic.in/textbook.php?jesc1=13-13";
const C10_SC_CH14 = "https://ncert.nic.in/textbook.php?jesc1=14-14";
const C10_SC_CH15 = "https://ncert.nic.in/textbook.php?jesc1=15-15";

const C10_EN_CH1 = "https://ncert.nic.in/textbook.php?jefr1=1-1";
const C10_EN_CH2 = "https://ncert.nic.in/textbook.php?jefr1=2-2";
const C10_EN_CH3 = "https://ncert.nic.in/textbook.php?jefr1=3-3";
const C10_EN_CH4 = "https://ncert.nic.in/textbook.php?jefr1=4-4";
const C10_EN_CH5 = "https://ncert.nic.in/textbook.php?jefr1=5-5";
const C10_EN_CH6 = "https://ncert.nic.in/textbook.php?jefr1=6-6";
const C10_EN_CH7 = "https://ncert.nic.in/textbook.php?jefr1=7-7";
const C10_EN_CH8 = "https://ncert.nic.in/textbook.php?jefr1=8-8";

const C10_HIS_CH1 = "https://ncert.nic.in/textbook.php?jehis1=1-1";
const C10_HIS_CH2 = "https://ncert.nic.in/textbook.php?jehis1=2-2";
const C10_HIS_CH3 = "https://ncert.nic.in/textbook.php?jehis1=3-3";
const C10_HIS_CH4 = "https://ncert.nic.in/textbook.php?jehis1=4-4";
const C10_HIS_CH5 = "https://ncert.nic.in/textbook.php?jehis1=5-5";

const C10_GEO_CH1 = "https://ncert.nic.in/textbook.php?jegeo1=1-1";
const C10_GEO_CH2 = "https://ncert.nic.in/textbook.php?jegeo1=2-2";
const C10_GEO_CH3 = "https://ncert.nic.in/textbook.php?jegeo1=3-3";
const C10_GEO_CH4 = "https://ncert.nic.in/textbook.php?jegeo1=4-4";
const C10_GEO_CH5 = "https://ncert.nic.in/textbook.php?jegeo1=5-5";
const C10_GEO_CH6 = "https://ncert.nic.in/textbook.php?jegeo1=6-6";
const C10_GEO_CH7 = "https://ncert.nic.in/textbook.php?jegeo1=7-7";

const C10_POL_CH1 = "https://ncert.nic.in/textbook.php?jepol1=1-1";
const C10_POL_CH2 = "https://ncert.nic.in/textbook.php?jepol1=2-2";
const C10_POL_CH3 = "https://ncert.nic.in/textbook.php?jepol1=3-3";
const C10_POL_CH4 = "https://ncert.nic.in/textbook.php?jepol1=4-4";
const C10_POL_CH5 = "https://ncert.nic.in/textbook.php?jepol1=5-5";
const C10_POL_CH6 = "https://ncert.nic.in/textbook.php?jepol1=6-6";
const C10_POL_CH7 = "https://ncert.nic.in/textbook.php?jepol1=7-7";
const C10_POL_CH8 = "https://ncert.nic.in/textbook.php?jepol1=8-8";

const C10_ECO_CH1 = "https://ncert.nic.in/textbook.php?jeeco1=1-1";
const C10_ECO_CH2 = "https://ncert.nic.in/textbook.php?jeeco1=2-2";
const C10_ECO_CH3 = "https://ncert.nic.in/textbook.php?jeeco1=3-3";
const C10_ECO_CH4 = "https://ncert.nic.in/textbook.php?jeeco1=4-4";
const C10_ECO_CH5 = "https://ncert.nic.in/textbook.php?jeeco1=5-5";

// Class 12 Physics PDFs (leph1 ch1-5, leph2 ch6-13)
const C12_PHY_CH1 = "https://ncert.nic.in/textbook/pdf/leph101.pdf";
const C12_PHY_CH2 = "https://ncert.nic.in/textbook/pdf/leph102.pdf";
const C12_PHY_CH3 = "https://ncert.nic.in/textbook/pdf/leph103.pdf";
const C12_PHY_CH4 = "https://ncert.nic.in/textbook/pdf/leph104.pdf";
const C12_PHY_CH5 = "https://ncert.nic.in/textbook/pdf/leph105.pdf";
const C12_PHY_CH6 = "https://ncert.nic.in/textbook/pdf/leph206.pdf";
const C12_PHY_CH7 = "https://ncert.nic.in/textbook/pdf/leph207.pdf";
const C12_PHY_CH8 = "https://ncert.nic.in/textbook/pdf/leph208.pdf";
const C12_PHY_CH9 = "https://ncert.nic.in/textbook/pdf/leph209.pdf";
const C12_PHY_CH10 = "https://ncert.nic.in/textbook/pdf/leph210.pdf";
const C12_PHY_CH11 = "https://ncert.nic.in/textbook/pdf/leph211.pdf";
const C12_PHY_CH12 = "https://ncert.nic.in/textbook/pdf/leph212.pdf";
const C12_PHY_CH13 = "https://ncert.nic.in/textbook/pdf/leph213.pdf";

// Class 12 Chemistry PDFs (lech1 ch1-5, lech2 ch6-12)
const C12_CHE_CH1 = "https://ncert.nic.in/textbook/pdf/lech101.pdf";
const C12_CHE_CH2 = "https://ncert.nic.in/textbook/pdf/lech102.pdf";
const C12_CHE_CH3 = "https://ncert.nic.in/textbook/pdf/lech103.pdf";
const C12_CHE_CH4 = "https://ncert.nic.in/textbook/pdf/lech104.pdf";
const C12_CHE_CH5 = "https://ncert.nic.in/textbook/pdf/lech105.pdf";
const C12_CHE_CH6 = "https://ncert.nic.in/textbook/pdf/lech206.pdf";
const C12_CHE_CH7 = "https://ncert.nic.in/textbook/pdf/lech207.pdf";
const C12_CHE_CH8 = "https://ncert.nic.in/textbook/pdf/lech208.pdf";
const C12_CHE_CH9 = "https://ncert.nic.in/textbook/pdf/lech209.pdf";
const C12_CHE_CH10 = "https://ncert.nic.in/textbook/pdf/lech210.pdf";
const C12_CHE_CH11 = "https://ncert.nic.in/textbook/pdf/lech211.pdf";
const C12_CHE_CH12 = "https://ncert.nic.in/textbook/pdf/lech212.pdf";

// Class 12 Mathematics PDFs (lemh1 ch1-5, lemh2 ch6-12)
const C12_MA_CH1 = "https://ncert.nic.in/textbook/pdf/lemh101.pdf";
const C12_MA_CH2 = "https://ncert.nic.in/textbook/pdf/lemh102.pdf";
const C12_MA_CH3 = "https://ncert.nic.in/textbook/pdf/lemh103.pdf";
const C12_MA_CH4 = "https://ncert.nic.in/textbook/pdf/lemh104.pdf";
const C12_MA_CH5 = "https://ncert.nic.in/textbook/pdf/lemh105.pdf";
const C12_MA_CH6 = "https://ncert.nic.in/textbook/pdf/lemh206.pdf";
const C12_MA_CH7 = "https://ncert.nic.in/textbook/pdf/lemh207.pdf";
const C12_MA_CH8 = "https://ncert.nic.in/textbook/pdf/lemh208.pdf";
const C12_MA_CH9 = "https://ncert.nic.in/textbook/pdf/lemh209.pdf";
const C12_MA_CH10 = "https://ncert.nic.in/textbook/pdf/lemh210.pdf";
const C12_MA_CH11 = "https://ncert.nic.in/textbook/pdf/lemh211.pdf";
const C12_MA_CH12 = "https://ncert.nic.in/textbook/pdf/lemh212.pdf";

// Class 12 Biology PDFs (lebo1 ch1-7, lebo2 ch8-14)
const C12_BI_CH1 = "https://ncert.nic.in/textbook/pdf/lebo101.pdf";
const C12_BI_CH2 = "https://ncert.nic.in/textbook/pdf/lebo102.pdf";
const C12_BI_CH3 = "https://ncert.nic.in/textbook/pdf/lebo103.pdf";
const C12_BI_CH4 = "https://ncert.nic.in/textbook/pdf/lebo104.pdf";
const C12_BI_CH5 = "https://ncert.nic.in/textbook/pdf/lebo105.pdf";
const C12_BI_CH6 = "https://ncert.nic.in/textbook/pdf/lebo106.pdf";
const C12_BI_CH7 = "https://ncert.nic.in/textbook/pdf/lebo107.pdf";
const C12_BI_CH8 = "https://ncert.nic.in/textbook/pdf/lebo208.pdf";
const C12_BI_CH9 = "https://ncert.nic.in/textbook/pdf/lebo209.pdf";
const C12_BI_CH10 = "https://ncert.nic.in/textbook/pdf/lebo210.pdf";
const C12_BI_CH11 = "https://ncert.nic.in/textbook/pdf/lebo211.pdf";
const C12_BI_CH12 = "https://ncert.nic.in/textbook/pdf/lebo212.pdf";
const C12_BI_CH13 = "https://ncert.nic.in/textbook/pdf/lebo213.pdf";
const C12_BI_CH14 = "https://ncert.nic.in/textbook/pdf/lebo214.pdf";

// Class 12 English Flamingo PDFs (lefl1)
const C12_EN_CH1 = "https://ncert.nic.in/textbook/pdf/lefl101.pdf";
const C12_EN_CH2 = "https://ncert.nic.in/textbook/pdf/lefl102.pdf";
const C12_EN_CH3 = "https://ncert.nic.in/textbook/pdf/lefl103.pdf";
const C12_EN_CH4 = "https://ncert.nic.in/textbook/pdf/lefl104.pdf";
const C12_EN_CH5 = "https://ncert.nic.in/textbook/pdf/lefl105.pdf";
const C12_EN_CH6 = "https://ncert.nic.in/textbook/pdf/lefl106.pdf";
const C12_EN_CH7 = "https://ncert.nic.in/textbook/pdf/lefl107.pdf";
const C12_EN_CH8 = "https://ncert.nic.in/textbook/pdf/lefl108.pdf";

// Class 12 History PDFs (lehs1 ch1-3, lehs2 ch4-8, lehs3 ch9-14)
const C12_HIS_CH1 = "https://ncert.nic.in/textbook/pdf/lehs101.pdf";
const C12_HIS_CH2 = "https://ncert.nic.in/textbook/pdf/lehs102.pdf";
const C12_HIS_CH3 = "https://ncert.nic.in/textbook/pdf/lehs103.pdf";
const C12_HIS_CH4 = "https://ncert.nic.in/textbook/pdf/lehs204.pdf";
const C12_HIS_CH5 = "https://ncert.nic.in/textbook/pdf/lehs205.pdf";
const C12_HIS_CH6 = "https://ncert.nic.in/textbook/pdf/lehs206.pdf";
const C12_HIS_CH7 = "https://ncert.nic.in/textbook/pdf/lehs207.pdf";
const C12_HIS_CH8 = "https://ncert.nic.in/textbook/pdf/lehs208.pdf";
const C12_HIS_CH9 = "https://ncert.nic.in/textbook/pdf/lehs309.pdf";
const C12_HIS_CH10 = "https://ncert.nic.in/textbook/pdf/lehs310.pdf";
const C12_HIS_CH11 = "https://ncert.nic.in/textbook/pdf/lehs311.pdf";
const C12_HIS_CH12 = "https://ncert.nic.in/textbook/pdf/lehs312.pdf";
const C12_HIS_CH13 = "https://ncert.nic.in/textbook/pdf/lehs313.pdf";
const C12_HIS_CH14 = "https://ncert.nic.in/textbook/pdf/lehs314.pdf";

// Class 12 Geography PDFs (legy1 ch1-6, legy2 ch7-10)
const C12_GEO_CH1 = "https://ncert.nic.in/textbook/pdf/legy101.pdf";
const C12_GEO_CH2 = "https://ncert.nic.in/textbook/pdf/legy102.pdf";
const C12_GEO_CH3 = "https://ncert.nic.in/textbook/pdf/legy103.pdf";
const C12_GEO_CH4 = "https://ncert.nic.in/textbook/pdf/legy104.pdf";
const C12_GEO_CH5 = "https://ncert.nic.in/textbook/pdf/legy105.pdf";
const C12_GEO_CH6 = "https://ncert.nic.in/textbook/pdf/legy106.pdf";
const C12_GEO_CH7 = "https://ncert.nic.in/textbook/pdf/legy207.pdf";
const C12_GEO_CH8 = "https://ncert.nic.in/textbook/pdf/legy208.pdf";
const C12_GEO_CH9 = "https://ncert.nic.in/textbook/pdf/legy209.pdf";
const C12_GEO_CH10 = "https://ncert.nic.in/textbook/pdf/legy210.pdf";

// Class 12 Political Science PDFs (leps1 ch1-5, leps2 ch6-8)
const C12_POL_CH1 = "https://ncert.nic.in/textbook/pdf/leps101.pdf";
const C12_POL_CH2 = "https://ncert.nic.in/textbook/pdf/leps102.pdf";
const C12_POL_CH3 = "https://ncert.nic.in/textbook/pdf/leps103.pdf";
const C12_POL_CH4 = "https://ncert.nic.in/textbook/pdf/leps104.pdf";
const C12_POL_CH5 = "https://ncert.nic.in/textbook/pdf/leps105.pdf";
const C12_POL_CH6 = "https://ncert.nic.in/textbook/pdf/leps206.pdf";
const C12_POL_CH7 = "https://ncert.nic.in/textbook/pdf/leps207.pdf";
const C12_POL_CH8 = "https://ncert.nic.in/textbook/pdf/leps208.pdf";

// JEE Physics PDFs (keph1 ch1-5, keph2 ch6-8)
const JEE_PH_CH1 = "https://ncert.nic.in/textbook/pdf/keph101.pdf";
const JEE_PH_CH2 = "https://ncert.nic.in/textbook/pdf/keph102.pdf";
const JEE_PH_CH3 = "https://ncert.nic.in/textbook/pdf/keph103.pdf";
const JEE_PH_CH4 = "https://ncert.nic.in/textbook/pdf/keph104.pdf";
const JEE_PH_CH5 = "https://ncert.nic.in/textbook/pdf/keph105.pdf";
const JEE_PH_CH6 = "https://ncert.nic.in/textbook/pdf/keph206.pdf";
const JEE_PH_CH7 = "https://ncert.nic.in/textbook/pdf/keph207.pdf";
const JEE_PH_CH8 = "https://ncert.nic.in/textbook/pdf/keph208.pdf";

// JEE Chemistry PDFs (kech1 ch1-5, kech2 ch6-7)
const JEE_CH_CH1 = "https://ncert.nic.in/textbook/pdf/kech101.pdf";
const JEE_CH_CH2 = "https://ncert.nic.in/textbook/pdf/kech102.pdf";
const JEE_CH_CH3 = "https://ncert.nic.in/textbook/pdf/kech103.pdf";
const JEE_CH_CH4 = "https://ncert.nic.in/textbook/pdf/kech104.pdf";
const JEE_CH_CH5 = "https://ncert.nic.in/textbook/pdf/kech105.pdf";
const JEE_CH_CH6 = "https://ncert.nic.in/textbook/pdf/kech206.pdf";
const JEE_CH_CH7 = "https://ncert.nic.in/textbook/pdf/kech207.pdf";

// JEE Mathematics PDFs (kemh1 ch1-7, kemh2 ch8-10)
const JEE_MA_CH1 = "https://ncert.nic.in/textbook/pdf/kemh101.pdf";
const JEE_MA_CH2 = "https://ncert.nic.in/textbook/pdf/kemh102.pdf";
const JEE_MA_CH3 = "https://ncert.nic.in/textbook/pdf/kemh103.pdf";
const JEE_MA_CH4 = "https://ncert.nic.in/textbook/pdf/kemh104.pdf";
const JEE_MA_CH5 = "https://ncert.nic.in/textbook/pdf/kemh105.pdf";
const JEE_MA_CH6 = "https://ncert.nic.in/textbook/pdf/kemh106.pdf";
const JEE_MA_CH7 = "https://ncert.nic.in/textbook/pdf/kemh107.pdf";
const JEE_MA_CH8 = "https://ncert.nic.in/textbook/pdf/kemh208.pdf";
const JEE_MA_CH9 = "https://ncert.nic.in/textbook/pdf/kemh209.pdf";
const JEE_MA_CH10 = "https://ncert.nic.in/textbook/pdf/kemh210.pdf";

// NEET Biology PDFs (kebo1 ch1-9, kebo2 ch10-16)
const NEET_BI_CH1 = "https://ncert.nic.in/textbook/pdf/kebo101.pdf";
const NEET_BI_CH2 = "https://ncert.nic.in/textbook/pdf/kebo102.pdf";
const NEET_BI_CH3 = "https://ncert.nic.in/textbook/pdf/kebo103.pdf";
const NEET_BI_CH4 = "https://ncert.nic.in/textbook/pdf/kebo104.pdf";
const NEET_BI_CH5 = "https://ncert.nic.in/textbook/pdf/kebo105.pdf";
const NEET_BI_CH6 = "https://ncert.nic.in/textbook/pdf/kebo106.pdf";
const NEET_BI_CH7 = "https://ncert.nic.in/textbook/pdf/kebo107.pdf";
const NEET_BI_CH8 = "https://ncert.nic.in/textbook/pdf/kebo108.pdf";
const NEET_BI_CH9 = "https://ncert.nic.in/textbook/pdf/kebo109.pdf";
const NEET_BI_CH10 = "https://ncert.nic.in/textbook/pdf/kebo210.pdf";
const NEET_BI_CH11 = "https://ncert.nic.in/textbook/pdf/kebo211.pdf";
const NEET_BI_CH12 = "https://ncert.nic.in/textbook/pdf/kebo212.pdf";
const NEET_BI_CH13 = "https://ncert.nic.in/textbook/pdf/kebo213.pdf";
const NEET_BI_CH14 = "https://ncert.nic.in/textbook/pdf/kebo214.pdf";
const NEET_BI_CH15 = "https://ncert.nic.in/textbook/pdf/kebo215.pdf";
const NEET_BI_CH16 = "https://ncert.nic.in/textbook/pdf/kebo216.pdf";

// ── Static Syllabus Data ─────────────────────────────────────────────────────

const SYLLABUS_DATA: SyllabusEntry[] = [
  {
    category: Category.Class10,
    subjects: [
      {
        id: 1n,
        name: "Mathematics",
        chapters: [
          {
            name: "Real Numbers",
            url: C10_M_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=real+numbers+class+10+physics+wallah",
          },
          {
            name: "Polynomials",
            url: C10_M_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=polynomials+class+10+physics+wallah",
          },
          {
            name: "Pair of Linear Equations in Two Variables",
            url: C10_M_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=pair+of+linear+equations+class+10+physics+wallah",
          },
          {
            name: "Quadratic Equations",
            url: C10_M_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=quadratic+equations+class+10+physics+wallah",
          },
          {
            name: "Arithmetic Progressions",
            url: C10_M_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=arithmetic+progressions+class+10+physics+wallah",
          },
          {
            name: "Triangles",
            url: C10_M_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=triangles+class+10+physics+wallah",
          },
          {
            name: "Coordinate Geometry",
            url: C10_M_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=coordinate+geometry+class+10+physics+wallah",
          },
          {
            name: "Introduction to Trigonometry",
            url: C10_M_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=trigonometry+class+10+physics+wallah",
          },
          {
            name: "Some Applications of Trigonometry",
            url: C10_M_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=applications+trigonometry+class+10+physics+wallah",
          },
          {
            name: "Circles",
            url: C10_M_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=circles+class+10+physics+wallah",
          },
          {
            name: "Areas Related to Circles",
            url: C10_M_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=areas+related+to+circles+class+10+physics+wallah",
          },
          {
            name: "Surface Areas and Volumes",
            url: C10_M_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=surface+areas+volumes+class+10+physics+wallah",
          },
          {
            name: "Statistics",
            url: C10_M_CH13,
            videoUrl:
              "https://www.youtube.com/results?search_query=statistics+class+10+physics+wallah",
          },
          {
            name: "Probability",
            url: C10_M_CH14,
            videoUrl:
              "https://www.youtube.com/results?search_query=probability+class+10+physics+wallah",
          },
        ],
      },
      {
        id: 2n,
        name: "Science",
        chapters: [
          {
            name: "Chemical Reactions and Equations",
            url: C10_SC_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=chemical+reactions+equations+class+10+physics+wallah",
          },
          {
            name: "Acids Bases and Salts",
            url: C10_SC_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=acids+bases+salts+class+10+physics+wallah",
          },
          {
            name: "Metals and Non-metals",
            url: C10_SC_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=metals+non+metals+class+10+physics+wallah",
          },
          {
            name: "Carbon and its Compounds",
            url: C10_SC_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=carbon+compounds+class+10+physics+wallah",
          },
          {
            name: "Life Processes",
            url: C10_SC_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=life+processes+class+10+physics+wallah",
          },
          {
            name: "Control and Coordination",
            url: C10_SC_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=control+coordination+class+10+physics+wallah",
          },
          {
            name: "How do Organisms Reproduce",
            url: C10_SC_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=how+organisms+reproduce+class+10+physics+wallah",
          },
          {
            name: "Heredity and Evolution",
            url: C10_SC_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=heredity+evolution+class+10+physics+wallah",
          },
          {
            name: "Light Reflection and Refraction",
            url: C10_SC_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=light+reflection+refraction+class+10+physics+wallah",
          },
          {
            name: "Human Eye and Colourful World",
            url: C10_SC_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=human+eye+colourful+world+class+10+physics+wallah",
          },
          {
            name: "Electricity",
            url: C10_SC_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=electricity+class+10+physics+wallah",
          },
          {
            name: "Magnetic Effects of Electric Current",
            url: C10_SC_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=magnetic+effects+electric+current+class+10+physics+wallah",
          },
          {
            name: "Sources of Energy",
            url: C10_SC_CH13,
            videoUrl:
              "https://www.youtube.com/results?search_query=sources+energy+class+10+physics+wallah",
          },
          {
            name: "Our Environment",
            url: C10_SC_CH14,
            videoUrl:
              "https://www.youtube.com/results?search_query=our+environment+class+10+physics+wallah",
          },
          {
            name: "Management of Natural Resources",
            url: C10_SC_CH15,
            videoUrl:
              "https://www.youtube.com/results?search_query=management+natural+resources+class+10+physics+wallah",
          },
        ],
      },
      {
        id: 3n,
        name: "English",
        chapters: [
          {
            name: "A Letter to God",
            url: C10_EN_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=a+letter+to+god+class+10+english+dear+sir",
          },
          {
            name: "Nelson Mandela Long Walk to Freedom",
            url: C10_EN_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=nelson+mandela+long+walk+to+freedom+class+10+english+dear+sir",
          },
          {
            name: "Two Stories about Flying",
            url: C10_EN_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=two+stories+about+flying+class+10+english+dear+sir",
          },
          {
            name: "From the Diary of Anne Frank",
            url: C10_EN_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=from+the+diary+of+anne+frank+class+10+english+dear+sir",
          },
          {
            name: "Glimpses of India",
            url: C10_EN_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=glimpses+of+india+class+10+english+dear+sir",
          },
          {
            name: "Mijbil the Otter",
            url: C10_EN_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=mijbil+the+otter+class+10+english+dear+sir",
          },
          {
            name: "Madam Rides the Bus",
            url: C10_EN_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=madam+rides+the+bus+class+10+english+dear+sir",
          },
          {
            name: "The Sermon at Benares",
            url: C10_EN_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=the+sermon+at+benares+class+10+english+dear+sir",
          },
        ],
      },
      {
        id: 4n,
        name: "History",
        chapters: [
          {
            name: "The Rise of Nationalism in Europe",
            url: C10_HIS_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=rise+of+nationalism+in+europe+class+10+dear+sir",
          },
          {
            name: "Nationalism in India",
            url: C10_HIS_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=nationalism+in+india+class+10+dear+sir",
          },
          {
            name: "The Making of a Global World",
            url: C10_HIS_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=making+of+a+global+world+class+10+dear+sir",
          },
          {
            name: "The Age of Industrialisation",
            url: C10_HIS_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=age+of+industrialisation+class+10+dear+sir",
          },
          {
            name: "Print Culture and the Modern World",
            url: C10_HIS_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=print+culture+modern+world+class+10+dear+sir",
          },
        ],
      },
      {
        id: 5n,
        name: "Geography",
        chapters: [
          {
            name: "Resources and Development",
            url: C10_GEO_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=resources+and+development+class+10+dear+sir",
          },
          {
            name: "Forest and Wildlife Resources",
            url: C10_GEO_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=forest+wildlife+resources+class+10+dear+sir",
          },
          {
            name: "Water Resources",
            url: C10_GEO_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=water+resources+class+10+dear+sir",
          },
          {
            name: "Agriculture",
            url: C10_GEO_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=agriculture+class+10+dear+sir",
          },
          {
            name: "Minerals and Energy Resources",
            url: C10_GEO_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=minerals+energy+resources+class+10+dear+sir",
          },
          {
            name: "Manufacturing Industries",
            url: C10_GEO_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=manufacturing+industries+class+10+dear+sir",
          },
          {
            name: "Lifelines of National Economy",
            url: C10_GEO_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=lifelines+national+economy+class+10+dear+sir",
          },
        ],
      },
      {
        id: 6n,
        name: "Political Science",
        chapters: [
          {
            name: "Power Sharing",
            url: C10_POL_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=power+sharing+class+10+dear+sir",
          },
          {
            name: "Federalism",
            url: C10_POL_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=federalism+class+10+dear+sir",
          },
          {
            name: "Democracy and Diversity",
            url: C10_POL_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=democracy+and+diversity+class+10+dear+sir",
          },
          {
            name: "Gender Religion and Caste",
            url: C10_POL_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=gender+religion+caste+class+10+dear+sir",
          },
          {
            name: "Popular Struggles and Movements",
            url: C10_POL_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=popular+struggles+movements+class+10+dear+sir",
          },
          {
            name: "Political Parties",
            url: C10_POL_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=political+parties+class+10+dear+sir",
          },
          {
            name: "Outcomes of Democracy",
            url: C10_POL_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=outcomes+of+democracy+class+10+dear+sir",
          },
          {
            name: "Challenges to Democracy",
            url: C10_POL_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=challenges+to+democracy+class+10+dear+sir",
          },
        ],
      },
      {
        id: 7n,
        name: "Economics",
        chapters: [
          {
            name: "Development",
            url: C10_ECO_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=development+class+10+economics+dear+sir",
          },
          {
            name: "Sectors of the Indian Economy",
            url: C10_ECO_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=sectors+of+indian+economy+class+10+dear+sir",
          },
          {
            name: "Money and Credit",
            url: C10_ECO_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=money+and+credit+class+10+dear+sir",
          },
          {
            name: "Globalisation and the Indian Economy",
            url: C10_ECO_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=globalisation+indian+economy+class+10+dear+sir",
          },
          {
            name: "Consumer Rights",
            url: C10_ECO_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=consumer+rights+class+10+dear+sir",
          },
        ],
      },
    ],
  },
  {
    category: Category.Class12,
    subjects: [
      {
        id: 1n,
        name: "Physics",
        chapters: [
          {
            name: "Electric Charges and Fields",
            url: C12_PHY_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=electric+charges+fields+class+12+physics+physics+wallah",
          },
          {
            name: "Electrostatic Potential and Capacitance",
            url: C12_PHY_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=electrostatic+potential+capacitance+class+12+physics+wallah",
          },
          {
            name: "Current Electricity",
            url: C12_PHY_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=current+electricity+class+12+physics+physics+wallah",
          },
          {
            name: "Moving Charges and Magnetism",
            url: C12_PHY_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=moving+charges+magnetism+class+12+physics+wallah",
          },
          {
            name: "Magnetism and Matter",
            url: C12_PHY_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=magnetism+and+matter+class+12+physics+wallah",
          },
          {
            name: "Electromagnetic Induction",
            url: C12_PHY_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=electromagnetic+induction+class+12+physics+wallah",
          },
          {
            name: "Alternating Current",
            url: C12_PHY_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=alternating+current+class+12+physics+wallah",
          },
          {
            name: "Electromagnetic Waves",
            url: C12_PHY_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=electromagnetic+waves+class+12+physics+wallah",
          },
          {
            name: "Ray Optics and Optical Instruments",
            url: C12_PHY_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=ray+optics+optical+instruments+class+12+physics+wallah",
          },
          {
            name: "Wave Optics",
            url: C12_PHY_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=wave+optics+class+12+physics+wallah",
          },
          {
            name: "Dual Nature of Radiation and Matter",
            url: C12_PHY_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=dual+nature+radiation+matter+class+12+physics+wallah",
          },
          {
            name: "Atoms",
            url: C12_PHY_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=atoms+class+12+physics+wallah",
          },
          {
            name: "Semiconductor Electronics",
            url: C12_PHY_CH13,
            videoUrl:
              "https://www.youtube.com/results?search_query=semiconductor+electronics+class+12+physics+wallah",
          },
        ],
      },
      {
        id: 2n,
        name: "Chemistry",
        chapters: [
          {
            name: "The Solid State",
            url: C12_CHE_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=solid+state+class+12+chemistry+physics+wallah",
          },
          {
            name: "Solutions",
            url: C12_CHE_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=solutions+class+12+chemistry+physics+wallah",
          },
          {
            name: "Electrochemistry",
            url: C12_CHE_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=electrochemistry+class+12+chemistry+physics+wallah",
          },
          {
            name: "Chemical Kinetics",
            url: C12_CHE_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=chemical+kinetics+class+12+chemistry+physics+wallah",
          },
          {
            name: "The p-Block Elements",
            url: C12_CHE_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=p+block+elements+class+12+chemistry+physics+wallah",
          },
          {
            name: "Coordination Compounds",
            url: C12_CHE_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=coordination+compounds+class+12+chemistry+physics+wallah",
          },
          {
            name: "Haloalkanes and Haloarenes",
            url: C12_CHE_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=haloalkanes+haloarenes+class+12+chemistry+physics+wallah",
          },
          {
            name: "Alcohols Phenols and Ethers",
            url: C12_CHE_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=alcohols+phenols+ethers+class+12+chemistry+physics+wallah",
          },
          {
            name: "Aldehydes Ketones and Carboxylic Acids",
            url: C12_CHE_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=aldehydes+ketones+carboxylic+acids+class+12+chemistry+physics+wallah",
          },
          {
            name: "Amines",
            url: C12_CHE_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=amines+class+12+chemistry+physics+wallah",
          },
          {
            name: "Biomolecules",
            url: C12_CHE_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=biomolecules+class+12+chemistry+physics+wallah",
          },
          {
            name: "Chemistry in Everyday Life",
            url: C12_CHE_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=chemistry+in+everyday+life+class+12+physics+wallah",
          },
        ],
      },
      {
        id: 3n,
        name: "Mathematics",
        chapters: [
          {
            name: "Relations and Functions",
            url: C12_MA_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=relations+and+functions+class+12+maths+physics+wallah",
          },
          {
            name: "Inverse Trigonometric Functions",
            url: C12_MA_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=inverse+trigonometric+functions+class+12+maths+physics+wallah",
          },
          {
            name: "Matrices",
            url: C12_MA_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=matrices+class+12+maths+physics+wallah",
          },
          {
            name: "Determinants",
            url: C12_MA_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=determinants+class+12+maths+physics+wallah",
          },
          {
            name: "Continuity and Differentiability",
            url: C12_MA_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=continuity+differentiability+class+12+maths+physics+wallah",
          },
          {
            name: "Application of Derivatives",
            url: C12_MA_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=application+of+derivatives+class+12+maths+physics+wallah",
          },
          {
            name: "Integrals",
            url: C12_MA_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=integrals+class+12+maths+physics+wallah",
          },
          {
            name: "Application of Integrals",
            url: C12_MA_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=application+of+integrals+class+12+maths+physics+wallah",
          },
          {
            name: "Differential Equations",
            url: C12_MA_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=differential+equations+class+12+maths+physics+wallah",
          },
          {
            name: "Vector Algebra",
            url: C12_MA_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=vector+algebra+class+12+maths+physics+wallah",
          },
          {
            name: "Three Dimensional Geometry",
            url: C12_MA_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=three+dimensional+geometry+class+12+maths+physics+wallah",
          },
          {
            name: "Linear Programming",
            url: C12_MA_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=linear+programming+class+12+maths+physics+wallah",
          },
        ],
      },
      {
        id: 4n,
        name: "Biology",
        chapters: [
          {
            name: "Reproduction in Organisms",
            url: C12_BI_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=reproduction+in+organisms+class+12+biology+physics+wallah",
          },
          {
            name: "Sexual Reproduction in Flowering Plants",
            url: C12_BI_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=sexual+reproduction+flowering+plants+class+12+biology+physics+wallah",
          },
          {
            name: "Human Reproduction",
            url: C12_BI_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=human+reproduction+class+12+biology+physics+wallah",
          },
          {
            name: "Reproductive Health",
            url: C12_BI_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=reproductive+health+class+12+biology+physics+wallah",
          },
          {
            name: "Principles of Inheritance and Variation",
            url: C12_BI_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=principles+of+inheritance+variation+class+12+biology+physics+wallah",
          },
          {
            name: "Molecular Basis of Inheritance",
            url: C12_BI_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=molecular+basis+of+inheritance+class+12+biology+physics+wallah",
          },
          {
            name: "Evolution",
            url: C12_BI_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=evolution+class+12+biology+physics+wallah",
          },
          {
            name: "Human Health and Disease",
            url: C12_BI_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=human+health+disease+class+12+biology+physics+wallah",
          },
          {
            name: "Biotechnology Principles and Processes",
            url: C12_BI_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=biotechnology+principles+processes+class+12+biology+physics+wallah",
          },
          {
            name: "Biotechnology and its Applications",
            url: C12_BI_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=biotechnology+applications+class+12+biology+physics+wallah",
          },
          {
            name: "Organisms and Populations",
            url: C12_BI_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=organisms+and+populations+class+12+biology+physics+wallah",
          },
          {
            name: "Ecosystem",
            url: C12_BI_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=ecosystem+class+12+biology+physics+wallah",
          },
          {
            name: "Biodiversity and Conservation",
            url: C12_BI_CH13,
            videoUrl:
              "https://www.youtube.com/results?search_query=biodiversity+conservation+class+12+biology+physics+wallah",
          },
          {
            name: "Environmental Issues",
            url: C12_BI_CH14,
            videoUrl:
              "https://www.youtube.com/results?search_query=environmental+issues+class+12+biology+physics+wallah",
          },
        ],
      },
      {
        id: 5n,
        name: "English",
        chapters: [
          {
            name: "The Last Lesson",
            url: C12_EN_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=the+last+lesson+class+12+english+dear+sir",
          },
          {
            name: "Lost Spring",
            url: C12_EN_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=lost+spring+class+12+english+dear+sir",
          },
          {
            name: "Deep Water",
            url: C12_EN_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=deep+water+class+12+english+dear+sir",
          },
          {
            name: "The Rattrap",
            url: C12_EN_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=the+rattrap+class+12+english+dear+sir",
          },
          {
            name: "Indigo",
            url: C12_EN_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=indigo+class+12+english+dear+sir",
          },
          {
            name: "Poets and Pancakes",
            url: C12_EN_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=poets+and+pancakes+class+12+english+dear+sir",
          },
          {
            name: "The Interview",
            url: C12_EN_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=the+interview+class+12+english+dear+sir",
          },
          {
            name: "Going Places",
            url: C12_EN_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=going+places+class+12+english+dear+sir",
          },
        ],
      },
      {
        id: 6n,
        name: "History",
        chapters: [
          {
            name: "Bricks Beads and Bones",
            url: C12_HIS_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=bricks+beads+bones+harappan+class+12+dear+sir",
          },
          {
            name: "Kings Farmers and Towns",
            url: C12_HIS_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=kings+farmers+towns+class+12+dear+sir",
          },
          {
            name: "Thinkers Beliefs and Buildings",
            url: C12_HIS_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=thinkers+beliefs+buildings+class+12+dear+sir",
          },
          {
            name: "Through the Eyes of Travellers",
            url: C12_HIS_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=through+the+eyes+of+travellers+class+12+dear+sir",
          },
          {
            name: "Bhakti Sufi Traditions",
            url: C12_HIS_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=bhakti+sufi+traditions+class+12+dear+sir",
          },
          {
            name: "An Imperial Capital Vijayanagara",
            url: C12_HIS_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=vijayanagara+imperial+capital+class+12+dear+sir",
          },
          {
            name: "Peasants Zamindars and the State",
            url: C12_HIS_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=peasants+zamindars+state+class+12+dear+sir",
          },
          {
            name: "Kings and Chronicles",
            url: C12_HIS_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=kings+and+chronicles+class+12+dear+sir",
          },
          {
            name: "Colonialism and the Countryside",
            url: C12_HIS_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=colonialism+countryside+class+12+dear+sir",
          },
          {
            name: "Rebels and the Raj",
            url: C12_HIS_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=rebels+and+the+raj+1857+class+12+dear+sir",
          },
          {
            name: "Colonial Cities",
            url: C12_HIS_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=colonial+cities+class+12+dear+sir",
          },
          {
            name: "Mahatma Gandhi and the Nationalist Movement",
            url: C12_HIS_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=mahatma+gandhi+nationalist+movement+class+12+dear+sir",
          },
          {
            name: "Understanding Partition",
            url: C12_HIS_CH13,
            videoUrl:
              "https://www.youtube.com/results?search_query=understanding+partition+class+12+dear+sir",
          },
          {
            name: "Framing the Constitution",
            url: C12_HIS_CH14,
            videoUrl:
              "https://www.youtube.com/results?search_query=framing+the+constitution+class+12+dear+sir",
          },
        ],
      },
      {
        id: 7n,
        name: "Geography",
        chapters: [
          {
            name: "Human Geography Nature and Scope",
            url: C12_GEO_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=human+geography+nature+scope+class+12+dear+sir",
          },
          {
            name: "The World Population Distribution Density and Growth",
            url: C12_GEO_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=world+population+distribution+density+growth+class+12+dear+sir",
          },
          {
            name: "Population Composition",
            url: C12_GEO_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=population+composition+class+12+geography+dear+sir",
          },
          {
            name: "Human Development",
            url: C12_GEO_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=human+development+class+12+geography+dear+sir",
          },
          {
            name: "Primary Activities",
            url: C12_GEO_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=primary+activities+class+12+geography+dear+sir",
          },
          {
            name: "Secondary Activities",
            url: C12_GEO_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=secondary+activities+class+12+geography+dear+sir",
          },
          {
            name: "Tertiary and Quaternary Activities",
            url: C12_GEO_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=tertiary+quaternary+activities+class+12+geography+dear+sir",
          },
          {
            name: "Transport and Communication",
            url: C12_GEO_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=transport+and+communication+class+12+geography+dear+sir",
          },
          {
            name: "International Trade",
            url: C12_GEO_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=international+trade+class+12+geography+dear+sir",
          },
          {
            name: "Human Settlements",
            url: C12_GEO_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=human+settlements+class+12+geography+dear+sir",
          },
        ],
      },
      {
        id: 8n,
        name: "Political Science",
        chapters: [
          {
            name: "Challenges of Nation Building",
            url: C12_POL_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=challenges+of+nation+building+class+12+dear+sir",
          },
          {
            name: "Era of One Party Dominance",
            url: C12_POL_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=era+of+one+party+dominance+class+12+dear+sir",
          },
          {
            name: "Politics of Planned Development",
            url: C12_POL_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=politics+planned+development+class+12+dear+sir",
          },
          {
            name: "India's External Relations",
            url: C12_POL_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=india+external+relations+class+12+dear+sir",
          },
          {
            name: "Challenges to and Restoration of Congress System",
            url: C12_POL_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=challenges+restoration+congress+system+class+12+dear+sir",
          },
          {
            name: "Crisis of Democratic Order",
            url: C12_POL_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=crisis+democratic+order+emergency+class+12+dear+sir",
          },
          {
            name: "Rise of Popular Movements",
            url: C12_POL_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=rise+of+popular+movements+class+12+dear+sir",
          },
          {
            name: "Recent Developments in Indian Politics",
            url: C12_POL_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=recent+developments+indian+politics+class+12+dear+sir",
          },
        ],
      },
    ],
  },
  {
    category: Category.JEE,
    subjects: [
      {
        id: 1n,
        name: "Physics",
        chapters: [
          {
            name: "Kinematics",
            url: JEE_PH_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+kinematics+physics+wallah",
          },
          {
            name: "Laws of Motion",
            url: JEE_PH_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+laws+of+motion+physics+wallah",
          },
          {
            name: "Work Energy and Power",
            url: JEE_PH_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+work+energy+power+physics+wallah",
          },
          {
            name: "Rotational Motion",
            url: JEE_PH_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+rotational+motion+physics+wallah",
          },
          {
            name: "Gravitation",
            url: JEE_PH_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+gravitation+physics+wallah",
          },
          {
            name: "Thermodynamics",
            url: JEE_PH_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+thermodynamics+physics+physics+wallah",
          },
          {
            name: "Oscillations",
            url: JEE_PH_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+oscillations+simple+harmonic+motion+physics+wallah",
          },
          {
            name: "Waves",
            url: JEE_PH_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+waves+physics+wallah",
          },
          {
            name: "Electrostatics",
            url: C12_PHY_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+electrostatics+physics+wallah",
          },
          {
            name: "Current Electricity",
            url: C12_PHY_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+current+electricity+physics+wallah",
          },
          {
            name: "Optics",
            url: C12_PHY_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+optics+ray+wave+physics+wallah",
          },
          {
            name: "Modern Physics",
            url: C12_PHY_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+modern+physics+physics+wallah",
          },
        ],
      },
      {
        id: 2n,
        name: "Chemistry",
        chapters: [
          {
            name: "Some Basic Concepts of Chemistry",
            url: JEE_CH_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+some+basic+concepts+of+chemistry+physics+wallah",
          },
          {
            name: "Atomic Structure",
            url: JEE_CH_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+atomic+structure+physics+wallah",
          },
          {
            name: "Chemical Bonding and Molecular Structure",
            url: JEE_CH_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+chemical+bonding+molecular+structure+physics+wallah",
          },
          {
            name: "Thermodynamics",
            url: JEE_CH_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+thermodynamics+chemistry+physics+wallah",
          },
          {
            name: "Equilibrium",
            url: JEE_CH_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+equilibrium+chemistry+physics+wallah",
          },
          {
            name: "Organic Chemistry Basic Principles",
            url: JEE_CH_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+organic+chemistry+basic+principles+physics+wallah",
          },
          {
            name: "Hydrocarbons",
            url: JEE_CH_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+hydrocarbons+physics+wallah",
          },
          {
            name: "Electrochemistry",
            url: C12_CHE_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+electrochemistry+physics+wallah",
          },
          {
            name: "Coordination Compounds",
            url: C12_CHE_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+coordination+compounds+physics+wallah",
          },
          {
            name: "Chemical Kinetics",
            url: C12_CHE_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+chemical+kinetics+physics+wallah",
          },
        ],
      },
      {
        id: 3n,
        name: "Mathematics",
        chapters: [
          {
            name: "Sets Relations and Functions",
            url: JEE_MA_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+sets+relations+functions+physics+wallah",
          },
          {
            name: "Complex Numbers",
            url: JEE_MA_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+complex+numbers+physics+wallah",
          },
          {
            name: "Permutations and Combinations",
            url: JEE_MA_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+permutations+combinations+physics+wallah",
          },
          {
            name: "Binomial Theorem",
            url: JEE_MA_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+binomial+theorem+physics+wallah",
          },
          {
            name: "Sequences and Series",
            url: JEE_MA_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+sequences+and+series+physics+wallah",
          },
          {
            name: "Conic Sections",
            url: JEE_MA_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+conic+sections+physics+wallah",
          },
          {
            name: "Limits and Derivatives",
            url: JEE_MA_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+limits+and+derivatives+physics+wallah",
          },
          {
            name: "Integrals",
            url: JEE_MA_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+integrals+physics+wallah",
          },
          {
            name: "Differential Equations",
            url: JEE_MA_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+differential+equations+physics+wallah",
          },
          {
            name: "Probability",
            url: JEE_MA_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=jee+probability+physics+wallah",
          },
        ],
      },
    ],
  },
  {
    category: Category.NEET,
    subjects: [
      {
        id: 1n,
        name: "Biology",
        chapters: [
          {
            name: "The Living World",
            url: NEET_BI_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+the+living+world+biology+physics+wallah",
          },
          {
            name: "Biological Classification",
            url: NEET_BI_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+biological+classification+physics+wallah",
          },
          {
            name: "Plant Kingdom",
            url: NEET_BI_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+plant+kingdom+biology+physics+wallah",
          },
          {
            name: "Animal Kingdom",
            url: NEET_BI_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+animal+kingdom+biology+physics+wallah",
          },
          {
            name: "Morphology of Flowering Plants",
            url: NEET_BI_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+morphology+flowering+plants+physics+wallah",
          },
          {
            name: "Anatomy of Flowering Plants",
            url: NEET_BI_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+anatomy+flowering+plants+physics+wallah",
          },
          {
            name: "Cell The Unit of Life",
            url: NEET_BI_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+cell+unit+of+life+physics+wallah",
          },
          {
            name: "Biomolecules",
            url: NEET_BI_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+biomolecules+biology+physics+wallah",
          },
          {
            name: "Cell Cycle and Cell Division",
            url: NEET_BI_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+cell+cycle+cell+division+physics+wallah",
          },
          {
            name: "Photosynthesis in Higher Plants",
            url: NEET_BI_CH10,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+photosynthesis+higher+plants+physics+wallah",
          },
          {
            name: "Respiration in Plants",
            url: NEET_BI_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+respiration+in+plants+physics+wallah",
          },
          {
            name: "Digestion and Absorption",
            url: NEET_BI_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+digestion+and+absorption+physics+wallah",
          },
          {
            name: "Breathing and Exchange of Gases",
            url: NEET_BI_CH13,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+breathing+exchange+of+gases+physics+wallah",
          },
          {
            name: "Body Fluids and Circulation",
            url: NEET_BI_CH14,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+body+fluids+circulation+physics+wallah",
          },
          {
            name: "Excretory Products",
            url: NEET_BI_CH15,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+excretory+products+elimination+physics+wallah",
          },
          {
            name: "Neural Control and Coordination",
            url: NEET_BI_CH16,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+neural+control+coordination+physics+wallah",
          },
          {
            name: "Reproduction in Organisms",
            url: C12_BI_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+reproduction+in+organisms+physics+wallah",
          },
          {
            name: "Molecular Basis of Inheritance",
            url: C12_BI_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+molecular+basis+of+inheritance+physics+wallah",
          },
          {
            name: "Human Health and Disease",
            url: C12_BI_CH8,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+human+health+disease+physics+wallah",
          },
          {
            name: "Ecosystem",
            url: C12_BI_CH12,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+ecosystem+biology+physics+wallah",
          },
        ],
      },
      {
        id: 2n,
        name: "Physics",
        chapters: [
          {
            name: "Kinematics",
            url: JEE_PH_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+kinematics+physics+wallah",
          },
          {
            name: "Laws of Motion",
            url: JEE_PH_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+laws+of+motion+physics+wallah",
          },
          {
            name: "Work Energy and Power",
            url: JEE_PH_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+work+energy+power+physics+wallah",
          },
          {
            name: "Gravitation",
            url: JEE_PH_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+gravitation+physics+wallah",
          },
          {
            name: "Thermodynamics",
            url: JEE_PH_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+thermodynamics+physics+wallah",
          },
          {
            name: "Oscillations and Waves",
            url: JEE_PH_CH7,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+oscillations+waves+physics+wallah",
          },
          {
            name: "Electrostatics",
            url: C12_PHY_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+electrostatics+physics+wallah",
          },
          {
            name: "Current Electricity",
            url: C12_PHY_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+current+electricity+physics+wallah",
          },
          {
            name: "Optics",
            url: C12_PHY_CH9,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+optics+ray+optics+physics+wallah",
          },
          {
            name: "Dual Nature and Atoms",
            url: C12_PHY_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+dual+nature+radiation+atoms+physics+wallah",
          },
        ],
      },
      {
        id: 3n,
        name: "Chemistry",
        chapters: [
          {
            name: "Some Basic Concepts of Chemistry",
            url: JEE_CH_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+some+basic+concepts+chemistry+physics+wallah",
          },
          {
            name: "Structure of Atom",
            url: JEE_CH_CH2,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+structure+of+atom+chemistry+physics+wallah",
          },
          {
            name: "Chemical Bonding",
            url: JEE_CH_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+chemical+bonding+physics+wallah",
          },
          {
            name: "States of Matter",
            url: JEE_CH_CH4,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+states+of+matter+chemistry+physics+wallah",
          },
          {
            name: "Equilibrium",
            url: JEE_CH_CH5,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+equilibrium+chemistry+physics+wallah",
          },
          {
            name: "Organic Chemistry Basic Principles",
            url: JEE_CH_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+organic+chemistry+basic+principles+physics+wallah",
          },
          {
            name: "Solid State",
            url: C12_CHE_CH1,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+solid+state+chemistry+physics+wallah",
          },
          {
            name: "Electrochemistry",
            url: C12_CHE_CH3,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+electrochemistry+chemistry+physics+wallah",
          },
          {
            name: "Coordination Compounds",
            url: C12_CHE_CH6,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+coordination+compounds+chemistry+physics+wallah",
          },
          {
            name: "Biomolecules",
            url: C12_CHE_CH11,
            videoUrl:
              "https://www.youtube.com/results?search_query=neet+biomolecules+chemistry+physics+wallah",
          },
        ],
      },
    ],
  },
];

// ── Static Question Papers Data ──────────────────────────────────────────────

const PAPERS_DATA: Array<{
  category: Category;
  subject: string;
  papers: QuestionPaper[];
}> = [
  {
    category: Category.Class10,
    subject: "Mathematics",
    papers: [
      {
        title: "CBSE Class 10 Mathematics 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Mathematics 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Mathematics 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Mathematics 2020",
        year: 2020n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Mathematics 2019",
        year: 2019n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
    ],
  },
  {
    category: Category.Class10,
    subject: "Science",
    papers: [
      {
        title: "CBSE Class 10 Science 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Science 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Science 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Science 2020",
        year: 2020n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
    ],
  },
  {
    category: Category.Class10,
    subject: "Social Science",
    papers: [
      {
        title: "CBSE Class 10 Social Science 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Social Science 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 Social Science 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
    ],
  },
  {
    category: Category.Class10,
    subject: "English",
    papers: [
      {
        title: "CBSE Class 10 English 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 English 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
      {
        title: "CBSE Class 10 English 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classx.html",
      },
    ],
  },
  {
    category: Category.Class12,
    subject: "Physics",
    papers: [
      {
        title: "CBSE Class 12 Physics 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Physics 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Physics 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Physics 2020",
        year: 2020n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
    ],
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    papers: [
      {
        title: "CBSE Class 12 Chemistry 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Chemistry 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Chemistry 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Chemistry 2020",
        year: 2020n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
    ],
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    papers: [
      {
        title: "CBSE Class 12 Mathematics 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Mathematics 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Mathematics 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Mathematics 2020",
        year: 2020n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
    ],
  },
  {
    category: Category.Class12,
    subject: "Biology",
    papers: [
      {
        title: "CBSE Class 12 Biology 2024",
        year: 2024n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Biology 2023",
        year: 2023n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
      {
        title: "CBSE Class 12 Biology 2022",
        year: 2022n,
        url: "https://cbse.gov.in/cbsenew/question-paper.html",
        solutionUrl: "https://cbseacademic.nic.in/sqp_classxii.html",
      },
    ],
  },
  {
    category: Category.JEE,
    subject: "Physics",
    papers: [
      {
        title: "JEE Main Physics 2024",
        year: 2024n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Main Physics 2023",
        year: 2023n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Main Physics 2022",
        year: 2022n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Advanced Physics 2023",
        year: 2023n,
        url: "https://jeeadv.ac.in/pastqp.php",
        solutionUrl: "https://jeeadv.ac.in/pastqp.php",
      },
    ],
  },
  {
    category: Category.JEE,
    subject: "Chemistry",
    papers: [
      {
        title: "JEE Main Chemistry 2024",
        year: 2024n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Main Chemistry 2023",
        year: 2023n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Main Chemistry 2022",
        year: 2022n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Advanced Chemistry 2023",
        year: 2023n,
        url: "https://jeeadv.ac.in/pastqp.php",
        solutionUrl: "https://jeeadv.ac.in/pastqp.php",
      },
    ],
  },
  {
    category: Category.JEE,
    subject: "Mathematics",
    papers: [
      {
        title: "JEE Main Mathematics 2024",
        year: 2024n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Main Mathematics 2023",
        year: 2023n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Main Mathematics 2022",
        year: 2022n,
        url: "https://jeemain.nta.ac.in",
        solutionUrl: "https://jeemain.nta.ac.in",
      },
      {
        title: "JEE Advanced Mathematics 2023",
        year: 2023n,
        url: "https://jeeadv.ac.in/pastqp.php",
        solutionUrl: "https://jeeadv.ac.in/pastqp.php",
      },
    ],
  },
  {
    category: Category.NEET,
    subject: "Biology",
    papers: [
      {
        title: "NEET Biology 2024",
        year: 2024n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
      {
        title: "NEET Biology 2023",
        year: 2023n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
      {
        title: "NEET Biology 2022",
        year: 2022n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
      {
        title: "NEET Biology 2021",
        year: 2021n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
    ],
  },
  {
    category: Category.NEET,
    subject: "Physics",
    papers: [
      {
        title: "NEET Physics 2024",
        year: 2024n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
      {
        title: "NEET Physics 2023",
        year: 2023n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
      {
        title: "NEET Physics 2022",
        year: 2022n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
    ],
  },
  {
    category: Category.NEET,
    subject: "Chemistry",
    papers: [
      {
        title: "NEET Chemistry 2024",
        year: 2024n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
      {
        title: "NEET Chemistry 2023",
        year: 2023n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
      {
        title: "NEET Chemistry 2022",
        year: 2022n,
        url: "https://neet.nta.nic.in",
        solutionUrl: "https://neet.nta.nic.in",
      },
    ],
  },
];

// ── Hooks ────────────────────────────────────────────────────────────────────

export function useGetSyllabus(category: Category) {
  return useQuery<SyllabusEntry>({
    queryKey: ["syllabus", category],
    queryFn: () => {
      const entry = SYLLABUS_DATA.find((s) => s.category === category);
      return entry ?? { subjects: [], category };
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useGetQuestionPapers(category: Category, subject: string) {
  return useQuery<QuestionPaper[]>({
    queryKey: ["papers", category, subject],
    queryFn: () => {
      const entry = PAPERS_DATA.find(
        (p) => p.category === category && p.subject === subject,
      );
      return entry?.papers ?? [];
    },
    enabled: subject !== "",
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSearchQABank(keyword: string) {
  return useQuery<QABankEntry[]>({
    queryKey: ["qa-bank-search", keyword],
    queryFn: () => {
      const q = keyword.trim().toLowerCase();
      if (!q) return [];
      return QA_BANK.filter(
        (e) =>
          e.question.toLowerCase().includes(q) ||
          e.answer.toLowerCase().includes(q),
      );
    },
    enabled: keyword.trim() !== "",
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useGetQABySubject(category: Category, subject: string) {
  return useQuery<QABankEntry[]>({
    queryKey: ["qa-bank-subject", category, subject],
    queryFn: () => {
      if (!subject) return [];
      return QA_BANK.filter(
        (e) => e.category === category && e.subject === subject,
      );
    },
    enabled: subject !== "",
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useGetQAByChapter(
  category: Category,
  subject: string,
  chapter: string,
) {
  return useQuery<QABankEntry[]>({
    queryKey: ["qa-bank-chapter", category, subject, chapter],
    queryFn: () => {
      if (!chapter) return [];
      return QA_BANK.filter(
        (e) =>
          e.category === category &&
          e.subject === subject &&
          e.chapter === chapter,
      );
    },
    enabled: !!chapter,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSearchGlossary(keyword: string) {
  return useQuery<GlossaryTerm[]>({
    queryKey: ["glossary", keyword],
    queryFn: () => {
      const q = keyword.trim().toLowerCase();
      if (!q) return GLOSSARY;
      return GLOSSARY.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q),
      );
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}
