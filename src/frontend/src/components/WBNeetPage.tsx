import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  ChevronRight,
  ExternalLink,
  FileText,
  FlaskConical,
  HeartPulse,
  Leaf,
  Lightbulb,
  MapPin,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { Suspense, lazy, useState } from "react";
import type { Section } from "../App";
import { Category } from "../types";

const QuestionPapersPage = lazy(() => import("./QuestionPapersPage"));
const SmartNotesPage = lazy(() => import("./SmartNotesPage"));

interface WBNeetPageProps {
  onNavigate: (section: Section) => void;
}

function PageFallback() {
  return (
    <div className="py-10 flex flex-col gap-3 items-center justify-center text-muted-foreground">
      <div className="w-8 h-8 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
      <span className="text-sm font-medium">Loading...</span>
    </div>
  );
}

const WB_NEET_COLOR = "oklch(0.40 0.17 178)";
const WB_NEET_LIGHT = "oklch(0.54 0.15 178)";
const WB_NEET_BG =
  "linear-gradient(135deg, oklch(0.20 0.10 178) 0%, oklch(0.28 0.13 190) 60%, oklch(0.22 0.08 160) 100%)";

// ─── NEET Syllabus Data ────────────────────────────────────────────────────

type ChapterEntry = {
  num: number;
  title: string;
  topics: string[];
  pdf: string;
};

const physicsClass11: ChapterEntry[] = [
  {
    num: 1,
    title: "Physical World and Measurement",
    topics: [
      "Units & Dimensions",
      "Measurement errors",
      "Significant figures",
      "Dimensional analysis",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph101.pdf",
  },
  {
    num: 2,
    title: "Kinematics",
    topics: [
      "Motion in straight line",
      "Projectile motion",
      "Relative velocity",
      "Equations of motion",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph102.pdf",
  },
  {
    num: 3,
    title: "Laws of Motion",
    topics: [
      "Newton's laws",
      "Friction",
      "Circular motion",
      "Free body diagrams",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph103.pdf",
  },
  {
    num: 4,
    title: "Work, Energy and Power",
    topics: [
      "Work-energy theorem",
      "Conservation of energy",
      "Power",
      "Elastic & inelastic collisions",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph104.pdf",
  },
  {
    num: 5,
    title: "Motion of System of Particles and Rigid Body",
    topics: [
      "Centre of mass",
      "Torque",
      "Angular momentum",
      "Moment of inertia",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph105.pdf",
  },
  {
    num: 6,
    title: "Gravitation",
    topics: [
      "Kepler's laws",
      "Gravitational potential",
      "Satellites",
      "Escape velocity",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph106.pdf",
  },
  {
    num: 7,
    title: "Properties of Bulk Matter",
    topics: [
      "Elasticity",
      "Viscosity",
      "Surface tension",
      "Bernoulli's theorem",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph107.pdf",
  },
  {
    num: 8,
    title: "Thermodynamics",
    topics: [
      "Laws of thermodynamics",
      "Heat engines",
      "Carnot cycle",
      "Internal energy",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph108.pdf",
  },
  {
    num: 9,
    title: "Behaviour of Perfect Gas and Kinetic Theory",
    topics: [
      "Kinetic theory",
      "Gas laws",
      "Degrees of freedom",
      "Mean free path",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/keph109.pdf",
  },
  {
    num: 10,
    title: "Oscillations and Waves",
    topics: ["SHM", "Damping", "Wave motion", "Doppler effect"],
    pdf: "https://ncert.nic.in/textbook/pdf/keph110.pdf",
  },
];

const physicsClass12: ChapterEntry[] = [
  {
    num: 1,
    title: "Electrostatics",
    topics: [
      "Coulomb's law",
      "Electric field",
      "Gauss's law",
      "Electric potential",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph101.pdf",
  },
  {
    num: 2,
    title: "Current Electricity",
    topics: [
      "Ohm's law",
      "Kirchhoff's laws",
      "Wheatstone bridge",
      "Potentiometer",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph102.pdf",
  },
  {
    num: 3,
    title: "Magnetic Effects of Current and Magnetism",
    topics: [
      "Biot-Savart law",
      "Ampere's law",
      "Magnetic materials",
      "Cyclotron",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph103.pdf",
  },
  {
    num: 4,
    title: "Electromagnetic Induction and Alternating Currents",
    topics: ["Faraday's law", "Lenz's law", "AC circuits", "Transformers"],
    pdf: "https://ncert.nic.in/textbook/pdf/leph104.pdf",
  },
  {
    num: 5,
    title: "Electromagnetic Waves",
    topics: [
      "EM spectrum",
      "Displacement current",
      "Properties of EM waves",
      "Applications",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph105.pdf",
  },
  {
    num: 6,
    title: "Optics",
    topics: [
      "Reflection & refraction",
      "Lenses & mirrors",
      "Wave optics",
      "Diffraction",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph106.pdf",
  },
  {
    num: 7,
    title: "Dual Nature of Radiation and Matter",
    topics: [
      "Photoelectric effect",
      "de Broglie hypothesis",
      "Davisson-Germer experiment",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph201.pdf",
  },
  {
    num: 8,
    title: "Atoms and Nuclei",
    topics: [
      "Bohr model",
      "Nuclear binding energy",
      "Radioactivity",
      "Nuclear reactions",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph202.pdf",
  },
  {
    num: 9,
    title: "Electronic Devices",
    topics: [
      "Semiconductors",
      "p-n junction diode",
      "Transistors",
      "Logic gates",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/leph203.pdf",
  },
];

const chemistryClass11: ChapterEntry[] = [
  {
    num: 1,
    title: "Some Basic Concepts of Chemistry",
    topics: [
      "Mole concept",
      "Stoichiometry",
      "Empirical formula",
      "Laws of chemical combination",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech101.pdf",
  },
  {
    num: 2,
    title: "Structure of Atom",
    topics: [
      "Atomic models",
      "Quantum numbers",
      "Orbitals & shapes",
      "Electronic configuration",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech102.pdf",
  },
  {
    num: 3,
    title: "Classification of Elements & Periodicity",
    topics: [
      "Periodic table",
      "Periodic trends",
      "Ionization energy",
      "Electron affinity",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech103.pdf",
  },
  {
    num: 4,
    title: "Chemical Bonding and Molecular Structure",
    topics: ["VSEPR theory", "Hybridization", "MOT", "Hydrogen bonding"],
    pdf: "https://ncert.nic.in/textbook/pdf/kech104.pdf",
  },
  {
    num: 5,
    title: "States of Matter",
    topics: [
      "Gas laws",
      "Liquefaction",
      "Intermolecular forces",
      "Kinetic molecular theory",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech105.pdf",
  },
  {
    num: 6,
    title: "Thermodynamics",
    topics: ["Enthalpy", "Entropy", "Gibbs free energy", "Hess's law"],
    pdf: "https://ncert.nic.in/textbook/pdf/kech106.pdf",
  },
  {
    num: 7,
    title: "Equilibrium",
    topics: [
      "Le Chatelier's principle",
      "Ionic equilibrium",
      "pH & buffers",
      "Solubility product",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech107.pdf",
  },
  {
    num: 8,
    title: "Redox Reactions",
    topics: [
      "Oxidation states",
      "Balancing redox equations",
      "Electrochemical series",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech108.pdf",
  },
  {
    num: 9,
    title: "Hydrogen",
    topics: [
      "Hydrogen bonding",
      "Water properties",
      "Heavy water",
      "Hydrogen as fuel",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech109.pdf",
  },
  {
    num: 10,
    title: "s-Block Elements",
    topics: [
      "Alkali metals",
      "Alkaline earth metals",
      "Important compounds",
      "Anomalous properties of Li & Be",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech110.pdf",
  },
  {
    num: 11,
    title: "p-Block Elements (Group 13–14)",
    topics: [
      "Boron family",
      "Carbon family",
      "Allotropes of carbon",
      "Trends in properties",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech111.pdf",
  },
  {
    num: 12,
    title: "Organic Chemistry Basic Principles",
    topics: [
      "IUPAC nomenclature",
      "Isomerism",
      "Reaction mechanisms",
      "Inductive & resonance effects",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech112.pdf",
  },
  {
    num: 13,
    title: "Hydrocarbons",
    topics: [
      "Alkanes",
      "Alkenes & alkynes",
      "Aromatic hydrocarbons",
      "Markovnikov's rule",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kech113.pdf",
  },
];

const chemistryClass12: ChapterEntry[] = [
  {
    num: 1,
    title: "The Solid State",
    topics: [
      "Crystal lattice",
      "Unit cell",
      "Defects in solids",
      "Electrical properties",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech101.pdf",
  },
  {
    num: 2,
    title: "Solutions",
    topics: [
      "Raoult's law",
      "Colligative properties",
      "Van't Hoff factor",
      "Osmotic pressure",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech102.pdf",
  },
  {
    num: 3,
    title: "Electrochemistry",
    topics: ["Nernst equation", "Electrolysis", "Batteries", "Corrosion"],
    pdf: "https://ncert.nic.in/textbook/pdf/lech103.pdf",
  },
  {
    num: 4,
    title: "Chemical Kinetics",
    topics: [
      "Rate law",
      "Order of reaction",
      "Arrhenius equation",
      "Reaction mechanisms",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech104.pdf",
  },
  {
    num: 5,
    title: "Surface Chemistry",
    topics: ["Adsorption", "Colloids", "Emulsions", "Catalysis"],
    pdf: "https://ncert.nic.in/textbook/pdf/lech105.pdf",
  },
  {
    num: 6,
    title: "p-Block Elements (Group 15–18)",
    topics: [
      "Nitrogen & phosphorus",
      "Oxygen & sulfur",
      "Halogens",
      "Noble gases",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech201.pdf",
  },
  {
    num: 7,
    title: "d and f Block Elements",
    topics: [
      "Transition metals",
      "Lanthanides",
      "Actinides",
      "Properties & trends",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech202.pdf",
  },
  {
    num: 8,
    title: "Coordination Compounds",
    topics: ["IUPAC nomenclature", "Werner's theory", "Isomerism", "VBT & CFT"],
    pdf: "https://ncert.nic.in/textbook/pdf/lech203.pdf",
  },
  {
    num: 9,
    title: "Haloalkanes and Haloarenes",
    topics: [
      "Nucleophilic substitution",
      "Optical activity",
      "Elimination reactions",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech204.pdf",
  },
  {
    num: 10,
    title: "Alcohols, Phenols and Ethers",
    topics: [
      "Preparation methods",
      "Reactions",
      "Acidity of phenols",
      "Williamson synthesis",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech205.pdf",
  },
  {
    num: 11,
    title: "Aldehydes, Ketones and Carboxylic Acids",
    topics: [
      "Nucleophilic addition",
      "Aldol condensation",
      "Oxidation reactions",
      "Hell-Volhard-Zelinsky",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech206.pdf",
  },
  {
    num: 12,
    title: "Organic Compounds Containing Nitrogen",
    topics: [
      "Amines classification",
      "Diazonium salts",
      "Coupling reactions",
      "Basicity of amines",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech207.pdf",
  },
  {
    num: 13,
    title: "Biomolecules",
    topics: [
      "Carbohydrates",
      "Proteins & enzymes",
      "Nucleic acids",
      "Vitamins",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech208.pdf",
  },
  {
    num: 14,
    title: "Polymers",
    topics: [
      "Addition polymers",
      "Condensation polymers",
      "Rubber",
      "Biodegradable polymers",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lech209.pdf",
  },
];

const biologyClass11Botany: ChapterEntry[] = [
  {
    num: 1,
    title: "The Living World",
    topics: [
      "Taxonomy",
      "Nomenclature",
      "Classification systems",
      "Biodiversity",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo101.pdf",
  },
  {
    num: 2,
    title: "Biological Classification",
    topics: [
      "Five kingdom system",
      "Viruses & lichens",
      "Monera & Protista",
      "Fungi",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo102.pdf",
  },
  {
    num: 3,
    title: "Plant Kingdom",
    topics: [
      "Algae",
      "Bryophytes",
      "Pteridophytes",
      "Gymnosperms & angiosperms",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo103.pdf",
  },
  {
    num: 4,
    title: "Morphology of Flowering Plants",
    topics: [
      "Root & stem types",
      "Leaf modifications",
      "Flower & fruit",
      "Seed structure",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo105.pdf",
  },
  {
    num: 5,
    title: "Anatomy of Flowering Plants",
    topics: ["Meristematic tissues", "Permanent tissues", "Wood", "Bark"],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo106.pdf",
  },
  {
    num: 6,
    title: "Cell: The Unit of Life",
    topics: [
      "Prokaryotic vs eukaryotic",
      "Cell organelles",
      "Endomembrane system",
      "Cytoskeleton",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo108.pdf",
  },
  {
    num: 7,
    title: "Cell Cycle and Cell Division",
    topics: [
      "Mitosis",
      "Meiosis",
      "Significance of cell division",
      "Cell cycle checkpoints",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo110.pdf",
  },
  {
    num: 8,
    title: "Transport in Plants",
    topics: [
      "Osmosis & plasmolysis",
      "Transpiration",
      "Phloem transport",
      "Active transport",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo111.pdf",
  },
  {
    num: 9,
    title: "Mineral Nutrition",
    topics: [
      "Essential elements",
      "Deficiency symptoms",
      "Nitrogen fixation",
      "Hydroponics",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo112.pdf",
  },
  {
    num: 10,
    title: "Photosynthesis in Higher Plants",
    topics: [
      "Light reactions",
      "Calvin cycle",
      "C4 pathway",
      "Photorespiration",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo113.pdf",
  },
  {
    num: 11,
    title: "Respiration in Plants",
    topics: [
      "Glycolysis",
      "Krebs cycle",
      "Electron transport chain",
      "Fermentation",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo114.pdf",
  },
  {
    num: 12,
    title: "Plant Growth and Development",
    topics: [
      "Plant hormones",
      "Seed germination",
      "Photoperiodism",
      "Vernalization",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo115.pdf",
  },
];

const biologyClass11Zoology: ChapterEntry[] = [
  {
    num: 1,
    title: "Animal Kingdom",
    topics: [
      "Basis of classification",
      "Phyla characteristics",
      "Coelom types",
      "Examples",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo104.pdf",
  },
  {
    num: 2,
    title: "Structural Organisation in Animals",
    topics: [
      "Animal tissues",
      "Cockroach anatomy",
      "Earthworm anatomy",
      "Frog anatomy",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo107.pdf",
  },
  {
    num: 3,
    title: "Biomolecules",
    topics: ["Carbohydrates", "Lipids", "Proteins & enzymes", "Nucleic acids"],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo109.pdf",
  },
  {
    num: 4,
    title: "Digestion and Absorption",
    topics: [
      "Alimentary canal",
      "Digestion process",
      "Absorption mechanisms",
      "Digestive disorders",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo116.pdf",
  },
  {
    num: 5,
    title: "Breathing and Exchange of Gases",
    topics: [
      "Respiratory organs",
      "Mechanism of breathing",
      "Transport of gases",
      "Respiratory disorders",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo117.pdf",
  },
  {
    num: 6,
    title: "Body Fluids and Circulation",
    topics: ["Blood & lymph", "Heart structure", "Cardiac cycle", "ECG"],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo118.pdf",
  },
  {
    num: 7,
    title: "Excretory Products and Their Elimination",
    topics: [
      "Nephron structure",
      "Urine formation",
      "Osmoregulation",
      "Kidney disorders",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo119.pdf",
  },
  {
    num: 8,
    title: "Locomotion and Movement",
    topics: ["Muscle types", "Mechanism of contraction", "Joints", "Disorders"],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo120.pdf",
  },
  {
    num: 9,
    title: "Neural Control and Coordination",
    topics: [
      "Neuron structure",
      "Synapse",
      "CNS & PNS",
      "Reflex arc & sensory organs",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo121.pdf",
  },
  {
    num: 10,
    title: "Chemical Coordination and Integration",
    topics: [
      "Endocrine glands",
      "Hormones",
      "Feedback mechanisms",
      "Disorders",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/kebo122.pdf",
  },
];

const biologyClass12Botany: ChapterEntry[] = [
  {
    num: 1,
    title: "Sexual Reproduction in Flowering Plants",
    topics: [
      "Flower structure",
      "Pollination types",
      "Double fertilization",
      "Seed & fruit development",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo101.pdf",
  },
  {
    num: 2,
    title: "Principles of Inheritance and Variation",
    topics: ["Mendel's laws", "Chromosomal theory", "Linkage", "Mutations"],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo103.pdf",
  },
  {
    num: 3,
    title: "Molecular Basis of Inheritance",
    topics: [
      "DNA structure",
      "Replication",
      "Transcription & translation",
      "Genetic code",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo104.pdf",
  },
  {
    num: 4,
    title: "Microbes in Human Welfare",
    topics: [
      "Fermentation",
      "Biogas production",
      "Biofertilizers",
      "Sewage treatment",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo108.pdf",
  },
  {
    num: 5,
    title: "Biotechnology Principles and Processes",
    topics: [
      "rDNA technology",
      "PCR",
      "Restriction enzymes",
      "Cloning vectors",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo109.pdf",
  },
  {
    num: 6,
    title: "Biotechnology and Its Applications",
    topics: [
      "GM crops",
      "Insulin production",
      "Gene therapy",
      "Ethical issues",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo110.pdf",
  },
  {
    num: 7,
    title: "Strategies for Enhancement in Food Production",
    topics: ["Plant breeding", "Tissue culture", "Biofortification", "SCP"],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo107.pdf",
  },
  {
    num: 8,
    title: "Organisms and Populations",
    topics: [
      "Niche",
      "Population attributes",
      "Interspecific interactions",
      "Population growth models",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo111.pdf",
  },
  {
    num: 9,
    title: "Ecosystem",
    topics: [
      "Food chains",
      "Energy flow",
      "Nutrient cycling",
      "Ecological succession",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo112.pdf",
  },
  {
    num: 10,
    title: "Biodiversity and Conservation",
    topics: [
      "Biodiversity hotspots",
      "Extinction",
      "In-situ conservation",
      "Ex-situ conservation",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo113.pdf",
  },
  {
    num: 11,
    title: "Environmental Issues",
    topics: [
      "Air & water pollution",
      "Greenhouse effect",
      "Ozone depletion",
      "Biomagnification",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo114.pdf",
  },
];

const biologyClass12Zoology: ChapterEntry[] = [
  {
    num: 1,
    title: "Human Reproduction",
    topics: [
      "Male reproductive system",
      "Female reproductive system",
      "Gametogenesis",
      "Fertilization & implantation",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo102.pdf",
  },
  {
    num: 2,
    title: "Reproductive Health",
    topics: ["STDs", "Contraception methods", "IVF & ART", "Amniocentesis"],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo103.pdf",
  },
  {
    num: 3,
    title: "Evolution",
    topics: [
      "Origin of life",
      "Darwinism",
      "Natural selection",
      "Human evolution",
    ],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo105.pdf",
  },
  {
    num: 4,
    title: "Human Health and Disease",
    topics: ["Immunity", "Vaccines", "HIV/AIDS", "Cancer & drugs/alcohol"],
    pdf: "https://ncert.nic.in/textbook/pdf/lebo106.pdf",
  },
];

// ─── Chapter Card ─────────────────────────────────────────────────────────

function ChapterCard({
  chapter,
  color,
}: { chapter: ChapterEntry; color: string }) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-md transition-all"
      style={{ borderLeftWidth: "3px", borderLeftColor: color }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${WB_NEET_LIGHT} 100%)`,
        }}
      >
        {chapter.num}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-foreground text-sm mb-2">
          {chapter.title}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {chapter.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded-md text-xs font-medium"
              style={{ background: `${color}15`, color: color }}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
      <a
        href={chapter.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs text-white transition-opacity hover:opacity-90"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.45 0.17 145) 0%, oklch(0.55 0.18 155) 100%)",
        }}
        data-ocid="wbneet.syllabus.button"
      >
        <FileText className="w-3.5 h-3.5" />
        PDF
      </a>
    </div>
  );
}

// ─── Section Group ─────────────────────────────────────────────────────────

function SectionGroup({
  label,
  chapters,
  color,
}: { label: string; chapters: ChapterEntry[]; color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px flex-1" style={{ background: `${color}30` }} />
        <span
          className="px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${WB_NEET_LIGHT} 100%)`,
          }}
        >
          {label}
        </span>
        <div className="h-px flex-1" style={{ background: `${color}30` }} />
      </div>
      {chapters.map((ch) => (
        <ChapterCard key={ch.num + ch.title} chapter={ch} color={color} />
      ))}
    </div>
  );
}

// ─── WB NEET Syllabus Tab ──────────────────────────────────────────────────

function WBNeetSyllabusTab() {
  const [subject, setSubject] = useState<"physics" | "chemistry" | "biology">(
    "biology",
  );
  const [bioClass, setBioClass] = useState<"11" | "12">("11");

  const subjects = [
    {
      key: "physics" as const,
      label: "Physics",
      icon: <Zap className="w-4 h-4" />,
      color: "oklch(0.45 0.18 264)",
    },
    {
      key: "chemistry" as const,
      label: "Chemistry",
      icon: <FlaskConical className="w-4 h-4" />,
      color: "oklch(0.45 0.18 52)",
    },
    {
      key: "biology" as const,
      label: "Biology",
      icon: <Leaf className="w-4 h-4" />,
      color: WB_NEET_COLOR,
    },
  ];

  const activeSubject = subjects.find((s) => s.key === subject)!;

  return (
    <div className="space-y-5 py-2">
      {/* Header */}
      <div
        className="rounded-2xl border p-4"
        style={{
          background: `${WB_NEET_COLOR}10`,
          borderColor: `${WB_NEET_COLOR}30`,
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-5 h-5" style={{ color: WB_NEET_COLOR }} />
          <h2 className="font-display font-bold text-lg text-foreground">
            NEET Syllabus (NTA)
          </h2>
          <Badge
            className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full border-0 text-white"
            style={{ background: WB_NEET_COLOR }}
          >
            180 Qs · 720 Marks
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Official NTA NEET syllabus based on NCERT Class 11 &amp; 12 — Physics
          (45 Qs), Chemistry (45 Qs), Biology (90 Qs). Each chapter has direct
          NCERT PDF.
        </p>
      </div>

      {/* Subject Selector */}
      <div className="flex gap-2 flex-wrap">
        {subjects.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setSubject(s.key)}
            data-ocid="wbneet.syllabus.tab"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all border-2"
            style={
              subject === s.key
                ? {
                    background: s.color,
                    color: "white",
                    borderColor: s.color,
                    boxShadow: `0 4px 12px ${s.color}50`,
                  }
                : {
                    background: "transparent",
                    color: s.color,
                    borderColor: `${s.color}40`,
                  }
            }
          >
            {s.icon}
            {s.label}
          </button>
        ))}
      </div>

      {/* Physics */}
      {subject === "physics" && (
        <div className="space-y-6">
          <SectionGroup
            label="Class 11 — Physics"
            chapters={physicsClass11}
            color={activeSubject.color}
          />
          <SectionGroup
            label="Class 12 — Physics"
            chapters={physicsClass12}
            color={activeSubject.color}
          />
        </div>
      )}

      {/* Chemistry */}
      {subject === "chemistry" && (
        <div className="space-y-6">
          <SectionGroup
            label="Class 11 — Chemistry"
            chapters={chemistryClass11}
            color={activeSubject.color}
          />
          <SectionGroup
            label="Class 12 — Chemistry"
            chapters={chemistryClass12}
            color={activeSubject.color}
          />
        </div>
      )}

      {/* Biology */}
      {subject === "biology" && (
        <div className="space-y-5">
          {/* Class selector */}
          <div className="flex gap-2">
            {(["11", "12"] as const).map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setBioClass(cls)}
                data-ocid="wbneet.syllabus.tab"
                className="px-4 py-1.5 rounded-lg font-semibold text-sm border transition-all"
                style={
                  bioClass === cls
                    ? {
                        background: WB_NEET_COLOR,
                        color: "white",
                        borderColor: WB_NEET_COLOR,
                      }
                    : {
                        background: "transparent",
                        color: WB_NEET_COLOR,
                        borderColor: `${WB_NEET_COLOR}40`,
                      }
                }
              >
                Class {cls}
              </button>
            ))}
          </div>

          {bioClass === "11" && (
            <div className="space-y-6">
              <SectionGroup
                label="Class 11 — Botany"
                chapters={biologyClass11Botany}
                color={WB_NEET_COLOR}
              />
              <SectionGroup
                label="Class 11 — Zoology"
                chapters={biologyClass11Zoology}
                color={WB_NEET_COLOR}
              />
            </div>
          )}
          {bioClass === "12" && (
            <div className="space-y-6">
              <SectionGroup
                label="Class 12 — Botany"
                chapters={biologyClass12Botany}
                color={WB_NEET_COLOR}
              />
              <SectionGroup
                label="Class 12 — Zoology"
                chapters={biologyClass12Zoology}
                color={WB_NEET_COLOR}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Counseling Data ────────────────────────────────────────────────────────

const wbMedicalColleges = [
  {
    name: "Calcutta Medical College",
    city: "Kolkata",
    seats: 250,
    type: "Govt",
  },
  { name: "SSKM Hospital (IPGMER)", city: "Kolkata", seats: 150, type: "Govt" },
  {
    name: "Medical College Kolkata",
    city: "Kolkata",
    seats: 200,
    type: "Govt",
  },
  { name: "NRS Medical College", city: "Kolkata", seats: 175, type: "Govt" },
  {
    name: "RKMSP Hospital & Research Centre",
    city: "Kolkata",
    seats: 100,
    type: "Trust",
  },
  {
    name: "Burdwan Medical College",
    city: "Burdwan",
    seats: 150,
    type: "Govt",
  },
  {
    name: "Midnapore Medical College",
    city: "Midnapore",
    seats: 125,
    type: "Govt",
  },
  {
    name: "Murshidabad Medical College",
    city: "Murshidabad",
    seats: 100,
    type: "Govt",
  },
  {
    name: "North Bengal Medical College",
    city: "Darjeeling",
    seats: 150,
    type: "Govt",
  },
  {
    name: "Bankura Sammilani Medical College",
    city: "Bankura",
    seats: 100,
    type: "Govt",
  },
  {
    name: "Cooch Behar Government Medical College",
    city: "Cooch Behar",
    seats: 100,
    type: "Govt",
  },
  {
    name: "ICARE Institute of Medical Sciences",
    city: "Haldia",
    seats: 150,
    type: "Private",
  },
  {
    name: "Manipal Tata Medical College",
    city: "Jamshedpur (WB border)",
    seats: 150,
    type: "Private",
  },
];

const counselingSteps = [
  {
    step: "1",
    title: "NEET Result & Score Card",
    desc: "Download your NEET scorecard from neet.nta.nic.in after results are announced (June-July).",
  },
  {
    step: "2",
    title: "WB NEET Counseling Registration",
    desc: "Register on the official WB NEET counseling portal (wbmcc.nic.in). Keep your NEET score, Class 12 marksheet, domicile certificate, and Aadhaar handy.",
  },
  {
    step: "3",
    title: "Document Verification",
    desc: "Upload and verify: NEET admit card, score card, Class 10/12 certificates, WB domicile proof, caste certificate (if applicable), income certificate for EWS.",
  },
  {
    step: "4",
    title: "Choice Filling",
    desc: "Fill college preferences online. You can add and rearrange up to 200+ college/course combinations. Research seat matrix carefully before locking.",
  },
  {
    step: "5",
    title: "Seat Allotment",
    desc: "Seats are allotted based on NEET rank, category, and preferences. Multiple rounds of allotment happen. Check results after each round.",
  },
  {
    step: "6",
    title: "Reporting & Admission",
    desc: "Report to the allotted college within the deadline with original documents. Pay fees to confirm admission.",
  },
];

const cutoffs2024 = [
  { category: "General (UR)", rank: "1 – 18,000", score: "720 – 550" },
  { category: "OBC", rank: "18,001 – 35,000", score: "549 – 480" },
  { category: "SC (WB)", rank: "35,001 – 60,000", score: "479 – 410" },
  { category: "ST (WB)", rank: "60,001 – 90,000", score: "409 – 360" },
  { category: "EWS", rank: "1 – 30,000", score: "720 – 490" },
  { category: "PH/PWD", rank: "Variable", score: "As per NTA norms" },
];

const importantLinks = [
  { label: "WB NEET Counseling Portal", url: "https://wbmcc.nic.in/" },
  { label: "NTA NEET Official Site", url: "https://neet.nta.nic.in/" },
  { label: "WBHSC Health & Family Welfare", url: "https://wbhealth.gov.in/" },
  { label: "NEET 2024 Information Brochure", url: "https://neet.nta.nic.in/" },
  { label: "WB Domicile Certificate Info", url: "https://wb.gov.in/" },
];

// ─── Main Export ──────────────────────────────────────────────────────────

export default function WBNeetPage({ onNavigate }: WBNeetPageProps) {
  return (
    <section className="min-h-screen flex flex-col" data-ocid="wbneet.section">
      {/* Hero Header */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ background: WB_NEET_BG }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, ${WB_NEET_LIGHT} 0%, transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4 flex-wrap">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="hover:text-white/90 transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90 font-medium">WB NEET</span>
          </div>
          <div className="flex items-start gap-5">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${WB_NEET_COLOR} 0%, ${WB_NEET_LIGHT} 100%)`,
              }}
            >
              <HeartPulse className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h1 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                  WB NEET Preparation
                </h1>
                <Badge
                  className="text-xs font-bold px-3 py-1 rounded-full border-0"
                  style={{
                    background: `linear-gradient(135deg, ${WB_NEET_COLOR} 0%, ${WB_NEET_LIGHT} 100%)`,
                    color: "white",
                  }}
                >
                  WB NEET
                </Badge>
              </div>
              <p className="text-white/70 text-base max-w-2xl leading-relaxed">
                West Bengal NEET — NTA NEET syllabus (Biology, Physics,
                Chemistry) + WB state counseling, medical college list, cut-offs
                &amp; admission guide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="flex-1 container mx-auto px-0 sm:px-4 py-6">
        <Tabs defaultValue="syllabus" className="flex flex-col">
          <TabsList
            className="flex w-full sm:w-auto sm:self-start gap-1 bg-secondary/60 p-1 rounded-xl mb-6 mx-4 sm:mx-0 overflow-x-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {[
              {
                value: "syllabus",
                label: "Syllabus",
                icon: <BookOpen className="w-4 h-4" />,
              },
              {
                value: "papers",
                label: "Question Papers",
                icon: <FileText className="w-4 h-4" />,
              },
              {
                value: "notes",
                label: "Smart Notes",
                icon: <Sparkles className="w-4 h-4" />,
              },
              {
                value: "qa",
                label: "Chapter Q&A",
                icon: <Lightbulb className="w-4 h-4" />,
              },
              {
                value: "counseling",
                label: "WB Counseling",
                icon: <MapPin className="w-4 h-4" />,
              },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-1.5 font-semibold whitespace-nowrap rounded-lg text-sm px-4 py-2 data-[state=active]:text-white flex-shrink-0"
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">
                  {tab.label === "Question Papers"
                    ? "Papers"
                    : tab.label === "WB Counseling"
                      ? "Counseling"
                      : tab.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="syllabus" className="mt-0 px-4 sm:px-0">
            <WBNeetSyllabusTab />
          </TabsContent>

          <TabsContent value="papers" className="mt-0 px-4 sm:px-0">
            <Suspense fallback={<PageFallback />}>
              <QuestionPapersPage
                activeCategory={Category.NEET}
                onCategoryChange={() => {}}
              />
            </Suspense>
          </TabsContent>

          <TabsContent value="notes" className="mt-0 px-4 sm:px-0">
            <Suspense fallback={<PageFallback />}>
              <SmartNotesPage
                activeCategory={Category.NEET}
                onCategoryChange={() => {}}
              />
            </Suspense>
          </TabsContent>

          <TabsContent value="qa" className="mt-0 px-4 sm:px-0">
            <Suspense fallback={<PageFallback />}>
              <SmartNotesPage
                activeCategory={Category.NEET}
                onCategoryChange={() => {}}
              />
            </Suspense>
          </TabsContent>

          <TabsContent value="counseling" className="mt-0 px-4 sm:px-0">
            <WBCounselingTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function WBCounselingTab() {
  return (
    <div className="space-y-8 py-2">
      <div
        className="rounded-2xl border p-6"
        style={{
          background: `linear-gradient(135deg, ${WB_NEET_COLOR}12 0%, ${WB_NEET_LIGHT}08 100%)`,
          borderColor: `${WB_NEET_COLOR}30`,
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${WB_NEET_COLOR} 0%, ${WB_NEET_LIGHT} 100%)`,
            }}
          >
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h2 className="font-display font-bold text-xl text-foreground">
            WB NEET Counseling Guide
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          West Bengal conducts its own state NEET counseling for 85% state quota
          seats in government and private medical colleges. Here is everything
          you need to know.
        </p>
      </div>

      <div>
        <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5" style={{ color: WB_NEET_COLOR }} />
          Expected Cut-off Ranks (2024)
        </h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: `${WB_NEET_COLOR}18` }}>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Category
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  NEET Rank
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Score Range
                </th>
              </tr>
            </thead>
            <tbody>
              {cutoffs2024.map((row, i) => (
                <tr
                  key={row.category}
                  className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {row.category}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.rank}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          * Approximate figures based on previous years. Actual cut-offs vary
          each year.
        </p>
      </div>

      <div>
        <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" style={{ color: WB_NEET_COLOR }} />
          Step-by-Step Counseling Process
        </h3>
        <div className="space-y-3">
          {counselingSteps.map((step) => (
            <div
              key={step.step}
              className="flex gap-4 p-4 rounded-xl border border-border bg-card"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{
                  background: `linear-gradient(135deg, ${WB_NEET_COLOR} 0%, ${WB_NEET_LIGHT} 100%)`,
                }}
              >
                {step.step}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm mb-1">
                  {step.title}
                </div>
                <div className="text-muted-foreground text-xs leading-relaxed">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
          <HeartPulse className="w-5 h-5" style={{ color: WB_NEET_COLOR }} />
          Medical Colleges in West Bengal
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {wbMedicalColleges.map((college) => (
            <div
              key={college.name}
              className="p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow"
            >
              <div className="font-semibold text-foreground text-sm mb-1">
                {college.name}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {college.city}
                </span>
                <span>~{college.seats} seats</span>
                <span
                  className="px-2 py-0.5 rounded-full font-semibold text-white"
                  style={{
                    background:
                      college.type === "Govt"
                        ? WB_NEET_COLOR
                        : college.type === "Trust"
                          ? "oklch(0.55 0.17 52)"
                          : "oklch(0.50 0.17 264)",
                    fontSize: "10px",
                  }}
                >
                  {college.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5" style={{ color: WB_NEET_COLOR }} />
          Important Links
        </h3>
        <div className="flex flex-wrap gap-3">
          {importantLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold text-sm transition-all hover:shadow-sm"
              style={{
                borderColor: `${WB_NEET_COLOR}50`,
                color: WB_NEET_COLOR,
                background: `${WB_NEET_COLOR}08`,
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
