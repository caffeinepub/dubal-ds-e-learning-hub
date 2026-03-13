import { Category } from "../types";
import type { QABankEntry } from "./qaBank";

export const QA_MAHARASHTRA12: QABankEntry[] = [
  {
    category: Category.Maharashtra12,
    subject: "Physics",
    chapter: "Rotational Dynamics",
    question:
      "What is the moment of inertia and how does it affect rotational motion?",
    answer:
      "Moment of inertia (I) is the rotational equivalent of mass. It depends on mass distribution about the axis. I = Σmᵢrᵢ². For a ring: I = MR². For a disk: I = MR²/2. For a solid sphere: I = 2MR²/5. Torque (τ) = Iα (rotational Newton's 2nd law). Larger I means harder to change rotation. Angular momentum L = Iω is conserved when no external torque acts.",
  },
  {
    category: Category.Maharashtra12,
    subject: "Physics",
    chapter: "Electrostatics",
    question: "State and explain Coulomb's law of electrostatics.",
    answer:
      "Coulomb's Law: F = kq₁q₂/r², where k = 9×10⁹ Nm²/C², q₁ and q₂ are charges, r is distance. Force is along the line joining charges — attractive for unlike charges, repulsive for like charges. Principle of superposition: total force = vector sum of individual forces. Electric field E = F/q = kq/r².",
  },
  {
    category: Category.Maharashtra12,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    question: "What is the rate law and order of a reaction? Give examples.",
    answer:
      "Rate law: rate = k[A]ᵐ[B]ⁿ. Order = m + n (determined experimentally, not from stoichiometry). Zero-order: rate constant = [A]/t. First-order: k = (2.303/t)log([A]₀/[A]). Half-life t₁/₂ = 0.693/k (first order). Second-order: k = 1/t(1/[A] - 1/[A]₀). Arrhenius equation: k = Ae^(-Ea/RT). Activation energy Ea can be found from slope of ln k vs 1/T graph.",
  },
  {
    category: Category.Maharashtra12,
    subject: "Chemistry",
    chapter: "Electrochemistry",
    question: "Explain standard electrode potential and its significance.",
    answer:
      "Standard electrode potential (E°) is measured vs Standard Hydrogen Electrode (SHE = 0 V) at 298 K, 1 M concentration. Cell EMF: E°cell = E°cathode - E°anode. Positive E°cell means spontaneous reaction. Nernst equation: E = E° - (RT/nF)lnQ = E° - (0.0592/n)logQ at 298K. Relationship: ΔG° = -nFE°cell. Electrochemical series ranks reducing agents; metals above hydrogen reduce it.",
  },
  {
    category: Category.Maharashtra12,
    subject: "Mathematics",
    chapter: "Matrices",
    question:
      "What are the types of matrices and properties of matrix multiplication?",
    answer:
      "Types: Row matrix, Column matrix, Square matrix, Diagonal matrix, Identity matrix (I), Zero matrix, Symmetric (A = Aᵀ), Skew-symmetric (A = -Aᵀ). Matrix multiplication: (AB)ᵀ = BᵀAᵀ; not commutative (AB ≠ BA in general); associative (ABC = A(BC)). Determinant: det(AB) = det(A)×det(B). Inverse: A⁻¹ = adj(A)/det(A). System of equations: AX = B → X = A⁻¹B.",
  },
  {
    category: Category.Maharashtra12,
    subject: "Mathematics",
    chapter: "Differentiation",
    question: "State the chain rule and its applications in differentiation.",
    answer:
      "Chain Rule: d/dx[f(g(x))] = f'(g(x)) × g'(x). Applications: (1) dy/dx when y = sin(x²) → 2x cos(x²); (2) Implicit differentiation: differentiate both sides wrt x; (3) Parametric: dy/dx = (dy/dt)/(dx/dt); (4) Logarithmic differentiation: d/dx[xˣ] = xˣ(1 + lnx). Product rule: d(uv)/dx = u(dv/dx) + v(du/dx). Quotient rule: d(u/v)/dx = [v(du/dx) - u(dv/dx)]/v².",
  },
  {
    category: Category.Maharashtra12,
    subject: "Biology",
    chapter: "Molecular Basis of Inheritance",
    question:
      "Describe the structure of DNA and the process of DNA replication.",
    answer:
      "DNA is a double helix (Watson-Crick model, 1953): two antiparallel strands with deoxyribose-phosphate backbone. Bases: A-T (2 H-bonds), G-C (3 H-bonds). Replication is semiconservative (Meselson-Stahl experiment). Enzymes: Helicase (unwinds), Primase (RNA primer), DNA Polymerase III (synthesis 5'→3'), DNA Polymerase I (removes primer), Ligase (joins Okazaki fragments). Leading strand: continuous; Lagging strand: discontinuous.",
  },
  {
    category: Category.Maharashtra12,
    subject: "Biology",
    chapter: "Genetics",
    question: "Explain Mendel's laws of inheritance with examples.",
    answer:
      "Law of Dominance: one allele is dominant over recessive. Law of Segregation: alleles separate during gamete formation (ratio 3:1 in F2 for monohybrid). Law of Independent Assortment: genes on different chromosomes segregate independently (9:3:3:1 ratio for dihybrid). Exception: Incomplete dominance (1:2:1 ratio). Codominance: both alleles expressed (ABO blood group). Linkage: genes on same chromosome tend to inherit together.",
  },
];

export const QA_BENGAL12: QABankEntry[] = [
  {
    category: Category.Bengal12,
    subject: "Physics",
    chapter: "Electrostatics",
    question:
      "What is an electric dipole and what is the electric field due to a dipole?",
    answer:
      "Electric dipole: two equal and opposite charges ±q separated by distance 2a. Dipole moment p = q×2a (direction from -q to +q). Electric field on axial line: E = (1/4πε₀)(2p/r³). Electric field on equatorial line: E = (1/4πε₀)(p/r³). Torque in uniform field: τ = pE sinθ. Potential energy: U = -pE cosθ. At θ=90°, torque is maximum; at θ=0°, stable equilibrium.",
  },
  {
    category: Category.Bengal12,
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    question:
      "State Faraday's law of electromagnetic induction and Lenz's law.",
    answer:
      "Faraday's Law: EMF induced = -dΦ/dt (rate of change of magnetic flux). Φ = B·A·cosθ. Lenz's Law: induced current opposes the change causing it (consequence of energy conservation). Self inductance L: e = -L(dI/dt); energy stored = LI²/2. Mutual inductance M: e₂ = -M(dI₁/dt). Transformer: V₁/V₂ = N₁/N₂ = I₂/I₁ (ideal).",
  },
  {
    category: Category.Bengal12,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    question:
      "Explain the effect of temperature on rate of reaction using Arrhenius equation.",
    answer:
      "Arrhenius equation: k = Ae^(-Ea/RT). As temperature increases, k increases exponentially. A = frequency factor (pre-exponential), Ea = activation energy. Log form: log k = log A - Ea/(2.303RT). Plotting log k vs 1/T gives slope = -Ea/2.303R. van't Hoff rule: for every 10°C rise, rate approximately doubles (Q₁₀ = 2). At higher T, more molecules have energy ≥ Ea → faster reaction.",
  },
  {
    category: Category.Bengal12,
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    question:
      "Explain Werner's theory of coordination compounds with examples.",
    answer:
      "Werner's Theory: central metal has primary valency (ionizable, satisfied by anions) and secondary valency (coordinate bonds to ligands). In [Co(NH₃)₆]Cl₃: Co³⁺ is central atom, primary valency = 3, secondary valency = 6. Nomenclature: ligands listed alphabetically before metal. EAN rule: effective atomic number = atomic number + electrons donated - electrons lost. Isomerism types: structural (ionization, linkage, hydrate) and stereoisomerism (geometric, optical).",
  },
  {
    category: Category.Bengal12,
    subject: "Mathematics",
    chapter: "Integrals",
    question:
      "What are the standard integrals and integration by parts formula?",
    answer:
      "Standard integrals: ∫xⁿdx = xⁿ⁺¹/(n+1); ∫eˣdx = eˣ; ∫(1/x)dx = ln|x|; ∫sinx dx = -cosx; ∫cosx dx = sinx. Integration by parts: ∫uv dx = u∫v dx - ∫(u'∫v dx)dx. ILATE rule: choose u as Inverse > Logarithm > Algebraic > Trigonometric > Exponential. Partial fractions for rational functions. Definite integral ∫ₐᵇf(x)dx = F(b) - F(a). Properties: ∫ₐᵇf = -∫ᵦₐf.",
  },
  {
    category: Category.Bengal12,
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    question:
      "Explain direction cosines and direction ratios with their relationship.",
    answer:
      "Direction cosines (l, m, n): cosines of angles α, β, γ that a line makes with +ve x, y, z axes. l² + m² + n² = 1. Direction ratios (a, b, c): proportional to direction cosines. l = a/√(a²+b²+c²). Equation of line: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c. Angle between lines: cosθ = |l₁l₂ + m₁m₂ + n₁n₂|. Distance between parallel planes: |d₁-d₂|/√(a²+b²+c²).",
  },
  {
    category: Category.Bengal12,
    subject: "Biology",
    chapter: "Genetics",
    question: "Explain the chromosomal theory of inheritance.",
    answer:
      "Sutton and Boveri (1902): chromosomes carry hereditary units (genes). Evidence: (1) chromosomes occur in pairs like Mendel's factors; (2) segregate during meiosis (like alleles); (3) each gamete gets one of each pair. Morgan's experiments with Drosophila: genes are on chromosomes, linked genes tend to inherit together. Crossing over during meiosis I leads to recombination. Map distance in centiMorgans (cM) = recombination frequency × 100.",
  },
  {
    category: Category.Bengal12,
    subject: "Biology",
    chapter: "Evolution",
    question: "Describe the evidence for evolution.",
    answer:
      "Evidence for evolution: (1) Fossil record: chronological sequence of life forms; index fossils date rock strata; (2) Comparative anatomy: homologous organs (same structure, different function — forelimbs of vertebrates) show common ancestry; analogous organs (different structure, same function — wings of birds and insects) show convergent evolution; (3) Embryological evidence: similar embryos in early stages; (4) Biochemical evidence: DNA, proteins similar in related organisms; (5) Biogeography: unique island fauna/flora (Darwin's finches). Hardy-Weinberg principle: allele frequencies stay constant without evolution.",
  },
];
