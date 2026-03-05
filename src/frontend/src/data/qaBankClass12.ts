import { Category } from "../hooks/useQueries";
import type { QABankEntry } from "./qaBank";

export const QA_BANK_CLASS12: QABankEntry[] = [
  // ── Physics: Electric Charges and Fields ──────────────────────────────────
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    question: "State Gauss's Law and give its application.",
    answer:
      "Gauss's Law: The total electric flux through any closed surface equals the total charge enclosed divided by ε₀. Φ = q_enclosed/ε₀. Application: For an infinite line charge with linear charge density λ, the electric field is E = λ/(2πε₀r), directed radially outward. For a uniformly charged sphere: outside, E = kQ/r² (as if charge is at centre); inside, E = 0 (for conductor).",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    question:
      "What is the electric field due to an infinite plane sheet of charge?",
    answer:
      "For a uniformly charged plane sheet with surface charge density σ: E = σ/(2ε₀) on each side, directed perpendicular to the sheet. The field is uniform and does not depend on the distance from the sheet. For a conducting plane: E = σ/ε₀ (charge on one side only).",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    question:
      "What is an electric dipole and what is the torque on it in a uniform field?",
    answer:
      "An electric dipole consists of two equal and opposite charges ±q separated by distance 2a. Dipole moment p = q × 2a (direction: from −q to +q). In a uniform electric field E, the torque is τ = pE sinθ = p × E (vector product). For stable equilibrium: θ = 0° (parallel); for unstable equilibrium: θ = 180°.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    question: "What are the properties of electric field lines?",
    answer:
      "Electric field lines: (1) Start from positive charges and end at negative charges; (2) Never intersect each other; (3) Tangent at any point gives the direction of E; (4) Density (crowding) indicates field strength; (5) Perpendicular to conductor surface; (6) For uniform field: parallel, equally spaced; (7) Cannot form closed loops in electrostatics.",
  },

  // ── Physics: Electrostatic Potential and Capacitance ──────────────────────
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electrostatic Potential and Capacitance",
    question: "What is equipotential surface and its properties?",
    answer:
      "An equipotential surface is a surface where every point has the same electric potential. Properties: (1) No work is done moving a charge along an equipotential surface; (2) Always perpendicular to electric field lines; (3) Two equipotential surfaces never intersect; (4) For a point charge: concentric spheres; (5) For uniform field: planes perpendicular to E.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electrostatic Potential and Capacitance",
    question: "Derive the energy stored in a capacitor.",
    answer:
      "A capacitor stores energy in its electric field. Energy U = work done to charge it: dW = V dq = (q/C) dq. Total work W = ∫₀ᴼ (q/C) dq = Q²/(2C) = ½CV² = ½QV. This energy is stored in the electric field between the plates. With dielectric: energy U = ½CV² where C increases, so for same Q: U decreases with dielectric.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electrostatic Potential and Capacitance",
    question:
      "What happens to the capacitance and energy when a dielectric is inserted?",
    answer:
      "When a dielectric (constant K) is inserted in a capacitor: C becomes KC₀ (increases K times). Case 1 (battery disconnected): V decreases, charge Q stays same, energy decreases to U₀/K; Case 2 (battery connected): V stays same, charge increases to KQ₀, energy increases to KU₀. The electric field decreases in both cases.",
  },

  // ── Physics: Current Electricity ──────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Current Electricity",
    question: "What is Kirchhoff's Junction Rule (KCL)?",
    answer:
      "At any junction (node) in a circuit, the sum of currents entering the junction equals the sum of currents leaving it. Mathematically: Σ I = 0 at a junction. This is based on the conservation of electric charge — charge cannot accumulate at a junction in a steady state.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Current Electricity",
    question: "What is a Wheatstone bridge and when is it balanced?",
    answer:
      "A Wheatstone bridge has four resistors P, Q, R, S arranged in a diamond. A galvanometer connects the midpoints. The bridge is balanced when P/Q = R/S (no current through galvanometer). Used to find unknown resistance: if P, Q, R are known and bridge is balanced, S = QR/P. The metre bridge uses this principle.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Current Electricity",
    question: "What is the potentiometer and its advantages over a voltmeter?",
    answer:
      "Potentiometer: A long uniform wire with a driving battery. The unknown EMF is compared by finding the null point (no current through galvanometer). Advantages over voltmeter: (1) No current is drawn from the source at null point → measures actual EMF; (2) More accurate. Used to measure: EMF of cells, internal resistance, compare EMFs.",
  },

  // ── Physics: Moving Charges and Magnetism ─────────────────────────────────
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    question:
      "What is the force on a current-carrying conductor in a magnetic field?",
    answer:
      "Force F = IL × B = BIL sinθ, where I = current, L = length of conductor, B = magnetic field, θ = angle between current direction and B. Direction: given by Fleming's Left Hand Rule. Maximum force when θ = 90°; zero force when θ = 0° or 180°.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    question: "What is the principle of a moving coil galvanometer?",
    answer:
      "A current-carrying coil in a magnetic field experiences a torque τ = BINA sinθ = NBIA (for radial field where sinθ = 1 always). This torque is balanced by the restoring torque of a spring: τ = kφ. At equilibrium: BINA = kφ → φ = (BINA/k)I. Deflection φ ∝ I. Hence it measures current.",
  },

  // ── Physics: Electromagnetic Induction ────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    question: "State Faraday's laws of electromagnetic induction.",
    answer:
      "First Law: An EMF is induced in a circuit whenever the magnetic flux through it changes. Second Law: The magnitude of induced EMF is directly proportional to the rate of change of magnetic flux: ε = −dΦ/dt = −N(dΦ/dt) for N turns. The negative sign is Lenz's law — the induced EMF opposes the change that caused it.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    question: "What is self-inductance?",
    answer:
      "Self-inductance (L) is the property of a coil by which it opposes any change in the current flowing through it. EMF induced: ε = −L(dI/dt). Unit: Henry (H). Energy stored: U = ½LI². For a solenoid: L = μ₀N²A/l. Self-inductance is the electrical analogue of inertia in mechanics.",
  },

  // ── Physics: Alternating Current ──────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Alternating Current",
    question: "What is resonance in an LCR circuit?",
    answer:
      "Resonance in series LCR circuit occurs when inductive reactance equals capacitive reactance: XL = XC → ωL = 1/(ωC) → ω₀ = 1/√(LC). At resonance: impedance Z = R (minimum), current I = V/R (maximum), power factor = 1. Used in radio tuning (selecting a particular frequency). Quality factor Q = ω₀L/R.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Alternating Current",
    question: "What is a transformer and what are the sources of energy loss?",
    answer:
      "Transformer transfers electrical energy between circuits by electromagnetic induction. V₁/V₂ = N₁/N₂; I₁/I₂ = N₂/N₁. Energy losses: (1) Eddy current losses (reduced by laminating core); (2) Hysteresis losses (use soft iron core); (3) Flux leakage (insulating core well); (4) Copper losses I²R (use thick copper wires). Ideal transformer: 100% efficient; real transformers: 95-99%.",
  },

  // ── Physics: Semiconductor Electronics ────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Semiconductor Electronics",
    question: "What is a transistor and how does it work as a switch?",
    answer:
      "Transistor (NPN or PNP) has three terminals: emitter, base, collector. As a switch: When base current IB = 0, transistor is 'OFF' — Ic ≈ 0 (open circuit). When sufficient IB is applied (saturating IB), transistor is 'ON' — collector current flows, output is near 0 V. Used in digital logic gates. Current gain β = IC/IB (typically 50-300).",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    chapter: "Semiconductor Electronics",
    question: "What are logic gates?",
    answer:
      "Logic gates are basic digital circuits. AND gate: output 1 only if both inputs are 1; OR gate: output 1 if any input is 1; NOT gate (inverter): output is opposite of input; NAND gate: AND + NOT; NOR gate: OR + NOT. NAND and NOR are universal gates — any other gate can be made from them alone. De Morgan's laws: (A·B)' = A' + B'; (A+B)' = A'·B'.",
  },

  // ── Chemistry: The Solid State ────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "The Solid State",
    question: "What are the types of solids and their properties?",
    answer:
      "Crystalline solids: sharp melting point, long-range order, anisotropic (properties differ with direction). Examples: NaCl, diamond, metals. Amorphous solids: no definite melting point (soften over range), short-range order, isotropic. Examples: glass, rubber, plastics. Crystalline solids are classified as: ionic (NaCl), metallic (Fe), covalent/network (SiO₂, diamond), molecular (ice, dry ice).",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "The Solid State",
    question: "What is the packing efficiency of BCC and FCC structures?",
    answer:
      "BCC (Body-Centred Cubic): 2 atoms per unit cell; packing efficiency = 68%; examples: Fe (at high T), Na, K, W. FCC (Face-Centred Cubic)/CCP: 4 atoms per unit cell; packing efficiency = 74% (most efficient); examples: Cu, Ag, Au, Al. Simple cubic: 1 atom, 52.4% — least efficient.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "The Solid State",
    question: "What are Schottky and Frenkel defects?",
    answer:
      "Schottky defect: Pairs of ions (cation + anion) are missing from their lattice positions. Density decreases. Found in compounds with similar-sized ions: NaCl, KCl. Frenkel defect: An ion (usually cation — smaller) shifts to an interstitial site. No change in density. Found in compounds with large size difference: AgCl, AgBr, ZnS. Both defects increase conductivity.",
  },

  // ── Chemistry: Solutions ──────────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Solutions",
    question: "What are colligative properties? List them.",
    answer:
      "Colligative properties depend only on the number of solute particles, not their nature. The four colligative properties: (1) Relative lowering of vapour pressure: Δp/p° = xB (mole fraction of solute); (2) Boiling point elevation: ΔTb = Kb·m; (3) Freezing point depression: ΔTf = Kf·m; (4) Osmotic pressure: π = MRT. These are used to determine molecular masses.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Solutions",
    question: "What is van't Hoff factor and when is it important?",
    answer:
      "Van't Hoff factor (i) corrects colligative properties for electrolytes and association. For electrolytes that dissociate: i > 1 (e.g., NaCl → Na⁺ + Cl⁻, i = 2). For solutes that associate: i < 1. Modified formulas: ΔTb = i × Kb × m; ΔTf = i × Kf × m; π = i × MRT. For ideal dilute solutions, i = 1.",
  },

  // ── Chemistry: Electrochemistry ───────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Electrochemistry",
    question: "What is the Nernst equation?",
    answer:
      "For a cell reaction, the EMF varies with concentration: E = E° − (RT/nF) ln Q = E° − (0.0592/n) log Q at 25°C. Where n = electrons transferred, Q = reaction quotient, F = 96500 C/mol. At equilibrium, E = 0: E° = (0.0592/n) log K. This relates standard EMF to equilibrium constant.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Electrochemistry",
    question: "What is Kohlrausch's law?",
    answer:
      "Kohlrausch's Law: The limiting molar conductivity (Λ°m) of an electrolyte equals the sum of individual limiting molar conductivities of cations and anions. Λ°m = ν₊λ°₊ + ν₋λ°₋. Used to find molar conductivity of weak electrolytes (like CH₃COOH) which cannot be measured directly. Also used to determine degree of dissociation and Ka of weak acids.",
  },

  // ── Chemistry: Chemical Kinetics ──────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    question: "What is the half-life of a first-order reaction?",
    answer:
      "For first-order reaction: [A] = [A]₀ e^(−kt). Half-life t½ = 0.693/k. Key properties: (1) t½ is independent of initial concentration (unique to first-order reactions); (2) After n half-lives, concentration = [A]₀/2ⁿ. Examples: radioactive decay, decomposition of H₂O₂.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    question: "How does temperature affect reaction rate?",
    answer:
      "Arrhenius equation: k = A e^(−Ea/RT). As temperature increases: (1) More molecules have energy ≥ activation energy; (2) Rate constant k increases exponentially; (3) A 10°C rise approximately doubles the rate (temperature coefficient ≈ 2). Ea (activation energy) is the minimum energy needed for reaction to occur. Catalyst lowers Ea.",
  },

  // ── Chemistry: Haloalkanes and Haloarenes ────────────────────────────────
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Haloalkanes and Haloarenes",
    question: "What is Markovnikov's rule?",
    answer:
      "Markovnikov's Rule: When HX adds to an unsymmetrical alkene, the hydrogen adds to the carbon with more hydrogen atoms (less substituted carbon), and X adds to the more substituted carbon. Example: CH₂=CH₂ + HBr → CH₃CH₂Br. The rule is explained by the stability of the carbocation intermediate — more substituted carbocations are more stable.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    chapter: "Haloalkanes and Haloarenes",
    question: "Explain the difference between SN1 and SN2 reactions.",
    answer:
      "SN1 (Unimolecular Nucleophilic Substitution): Two steps — ionisation to carbocation, then nucleophile attacks. Rate depends on [substrate] only. Gives racemisation. Favoured by tertiary alkyl halides and polar protic solvents (water, alcohol). SN2 (Bimolecular): One step — simultaneous bond breaking and forming. Rate depends on [substrate][nucleophile]. Gives inversion (Walden inversion). Favoured by primary alkyl halides and polar aprotic solvents (acetone, DMSO).",
  },

  // ── Mathematics: Relations and Functions ──────────────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Relations and Functions",
    question: "What is an equivalence relation? Give an example.",
    answer:
      "A relation R on set A is an equivalence relation if it is: (1) Reflexive: aRa for all a; (2) Symmetric: aRb implies bRa; (3) Transitive: aRb and bRc implies aRc. Example: Congruence modulo n: aRb iff n divides (a−b). This is reflexive (a−a=0 divisible by n), symmetric, and transitive. The equivalence classes partition the set.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Relations and Functions",
    question: "What is the difference between a function and a relation?",
    answer:
      "A relation R from A to B is any subset of A × B. A function is a special relation where every element of A (domain) is mapped to exactly one element in B (codomain). Key: No element of A can be unmapped or mapped to two different elements. A function can be one-one, onto, bijective, or none of these.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Relations and Functions",
    question: "What is a bijective function and why is it important?",
    answer:
      "A bijective function is both one-one (injective) and onto (surjective). One-one: distinct elements have distinct images (no two inputs give same output). Onto: every element in codomain has a pre-image. Bijective functions have inverses. Only bijective functions are invertible. Used in cryptography, database theory, counting.",
  },

  // ── Mathematics: Matrices ─────────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Matrices",
    question: "What is the transpose of a matrix and its properties?",
    answer:
      "The transpose of matrix A (written Aᵀ) is obtained by interchanging rows and columns. Properties: (Aᵀ)ᵀ = A; (A+B)ᵀ = Aᵀ + Bᵀ; (AB)ᵀ = BᵀAᵀ (order reverses); (kA)ᵀ = kAᵀ. Symmetric matrix: A = Aᵀ; Skew-symmetric: A = −Aᵀ (diagonal elements = 0).",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Matrices",
    question: "How do you find the inverse of a 2×2 matrix?",
    answer:
      "For matrix A = [a b; c d], inverse A⁻¹ = (1/det A) × [d −b; −c a], where det A = ad − bc ≠ 0. For larger matrices: A⁻¹ = adj(A)/|A|. Properties: AA⁻¹ = A⁻¹A = I; (AB)⁻¹ = B⁻¹A⁻¹; (Aᵀ)⁻¹ = (A⁻¹)ᵀ.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Matrices",
    question: "What is a symmetric matrix?",
    answer:
      "A matrix A is symmetric if A = Aᵀ (i.e., aᵢⱼ = aⱼᵢ for all i, j). All symmetric matrices are square. Any square matrix can be expressed uniquely as the sum of a symmetric and skew-symmetric matrix: A = ½(A + Aᵀ) + ½(A − Aᵀ).",
  },

  // ── Mathematics: Determinants ─────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Determinants",
    question: "State properties of determinants.",
    answer:
      "Key properties: (1) Swapping two rows/columns changes sign; (2) Identical rows/columns → det = 0; (3) Multiplying a row by k multiplies det by k; (4) det(AB) = det(A)×det(B); (5) det(Aᵀ) = det(A); (6) Adding multiple of one row to another doesn't change det; (7) det(kA) = kⁿ det(A) for n×n matrix.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Determinants",
    question: "How do you solve equations using Cramer's Rule?",
    answer:
      "For system AX = B: x₁ = D₁/D, x₂ = D₂/D, x₃ = D₃/D where D = det(A), and Dᵢ is obtained by replacing column i of A with B. Conditions: D ≠ 0 → unique solution; D = 0 and all Dᵢ = 0 → infinitely many solutions; D = 0 and any Dᵢ ≠ 0 → no solution (inconsistent).",
  },

  // ── Mathematics: Continuity and Differentiability ─────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    question: "What is the chain rule of differentiation?",
    answer:
      "If y = f(u) and u = g(x), then dy/dx = (dy/du) × (du/dx) = f'(g(x)) × g'(x). Example: y = sin(x²). Let u = x², dy/du = cos u = cos(x²), du/dx = 2x. So dy/dx = 2x cos(x²). The chain rule is essential for composite functions.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    question: "What is Rolle's Theorem?",
    answer:
      "If f is (1) continuous on [a,b], (2) differentiable on (a,b), and (3) f(a) = f(b), then there exists at least one c in (a,b) such that f'(c) = 0. Geometrically: if a curve has the same height at two endpoints, there must be a horizontal tangent somewhere between them.",
  },

  // ── Mathematics: Application of Derivatives ──────────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Application of Derivatives",
    question: "How do you find the equation of tangent to a curve?",
    answer:
      "Equation of tangent to y = f(x) at point (x₁, y₁): y − y₁ = f'(x₁)(x − x₁). The slope of the tangent is f'(x₁). Equation of normal: y − y₁ = −[1/f'(x₁)](x − x₁). For vertical tangent: f'(x₁) = ∞ → tangent is x = x₁.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Application of Derivatives",
    question: "How do you find the maxima and minima of a function?",
    answer:
      "First Derivative Test: Find f'(x) = 0 (critical points). At a critical point x = c: if f'(x) changes + to −, local max; if − to +, local min; no change = inflection point. Second Derivative Test: f''(c) < 0 → local max; f''(c) > 0 → local min; f''(c) = 0 → inconclusive (use first derivative test).",
  },

  // ── Mathematics: Integrals ────────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Integrals",
    question: "What is integration by substitution?",
    answer:
      "If the integrand is f(g(x))g'(x), substitute u = g(x), du = g'(x)dx. The integral becomes ∫f(u)du which is simpler. Example: ∫2x cos(x²)dx. Let u = x², du = 2x dx. Integral = ∫cos u du = sin u + C = sin(x²) + C. Always convert back to original variable.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Integrals",
    question: "State the Fundamental Theorem of Calculus.",
    answer:
      "Part 1: If F(x) = ∫_a^x f(t)dt, then F'(x) = f(x). Part 2: ∫_a^b f(x)dx = F(b) − F(a), where F is any antiderivative of f. This connects differentiation and integration — they are inverse operations. Used to evaluate definite integrals without computing Riemann sums.",
  },

  // ── Mathematics: Vector Algebra ────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Vector Algebra",
    question: "What is the cross product of two vectors and when is it zero?",
    answer:
      "Cross product a × b = |a||b| sinθ n̂ (where n̂ is perpendicular to both a and b, by right-hand rule). |a × b| = |a||b| sinθ. The cross product is zero when θ = 0° or 180° (parallel vectors). Geometrically, |a × b| = area of parallelogram formed by a and b.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Vector Algebra",
    question: "What is the scalar triple product?",
    answer:
      "Scalar triple product [a, b, c] = a · (b × c). It represents the volume of the parallelepiped formed by vectors a, b, c. Properties: [a b c] = [b c a] = [c a b] (cyclic rotation doesn't change value); [a b c] = 0 iff the vectors are coplanar; [a a b] = 0 (any two same vectors → zero).",
  },

  // ── Mathematics: Probability ──────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Probability",
    question: "What is Bayes' theorem and how is it applied?",
    answer:
      "Bayes' theorem: P(Aᵢ|B) = P(Aᵢ)P(B|Aᵢ) / Σ[P(Aⱼ)P(B|Aⱼ)]. Used when we have prior probabilities P(Aᵢ) and update them based on new information B. Example: P(defective|from machine A) given we know P(machine A produces defective) and P(machine B produces defective). The theorem reverses conditional probability.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    chapter: "Probability",
    question: "What is a binomial distribution?",
    answer:
      "Binomial distribution B(n,p): probability of r successes in n independent Bernoulli trials, each with success probability p. P(X=r) = C(n,r) × pʳ × (1−p)^(n−r). Mean = np; Variance = np(1−p); Standard deviation = √(np(1−p)). Conditions: fixed n, independent trials, only two outcomes (success/failure), constant p.",
  },

  // ── Biology: Reproduction ─────────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "Biology",
    chapter: "Reproduction in Organisms",
    question: "What is the difference between sexual and asexual reproduction?",
    answer:
      "Asexual reproduction: involves only one parent, no gametes, offspring genetically identical (clones), faster, simpler. Examples: budding (Hydra), binary fission (Amoeba), vegetative propagation (plants). Sexual reproduction: two parents (usually), gametes formed by meiosis, offspring genetically diverse, slower, more complex. Provides variation for evolution.",
  },
  {
    category: Category.Class12,
    subject: "Biology",
    chapter: "Sexual Reproduction in Flowering Plants",
    question:
      "What is the significance of double fertilisation in angiosperms?",
    answer:
      "Double fertilisation is unique to angiosperms. Two fertilisations occur: (1) Male gamete + egg = zygote (2n) → develops into embryo; (2) Other male gamete + 2 polar nuclei = primary endosperm nucleus (3n) → develops into endosperm (nutritive tissue for embryo). This ensures endosperm develops only when fertilisation occurs, saving energy.",
  },
  {
    category: Category.Class12,
    subject: "Biology",
    chapter: "Molecular Basis of Inheritance",
    question: "What is the central dogma of molecular biology?",
    answer:
      "Central dogma: DNA → RNA → Protein. (1) Replication: DNA makes a copy of itself; (2) Transcription: DNA sequence is copied into mRNA; (3) Translation: mRNA sequence is decoded into protein at ribosomes. Reverse transcription (RNA → DNA) occurs in retroviruses (HIV). The information flow is generally one-way from DNA to protein.",
  },
  {
    category: Category.Class12,
    subject: "Biology",
    chapter: "Principles of Inheritance and Variation",
    question: "What is sex-linked inheritance?",
    answer:
      "Genes located on sex chromosomes show sex-linked inheritance. X-linked recessive traits (colour blindness, haemophilia): Males (XY) need only one copy to show trait; females (XX) need two copies. Carrier female: XHXh — carries gene, doesn't express. Example: Colour blind father × normal mother → carrier daughters, normal sons.",
  },

  // ── English: Class 12 ─────────────────────────────────────────────────────
  {
    category: Category.Class12,
    subject: "English",
    chapter: "The Last Lesson",
    question: "What is the significance of M. Hamel's last lesson?",
    answer:
      "M. Hamel's last French lesson is rich with symbolism. He represents the French cultural identity being suppressed by Prussian rule. He dresses in his best clothes as a mark of respect for the last French lesson. His final words — 'Vive La France!' written on the blackboard — symbolise resistance. The story teaches that when a people lose their language, they lose their soul, their freedom, and their identity.",
  },
  {
    category: Category.Class12,
    subject: "English",
    chapter: "Lost Spring",
    question: "Who are Saheb and Mukesh and what do their stories reveal?",
    answer:
      "Saheb-e-Alam (Lord of the Universe) — the irony of his name is that he is a rag-picker from Dhaka. His story reveals urban migration, poverty, and denial of education. Mukesh — a bangle-maker's son from Firozabad — wants to be a motor mechanic. His story reveals the 'vicious cycle of poverty' where generations are trapped by hereditary trades, caste, debt, and exploitation. Both stories reveal that 'lost spring' means the lost childhood and dreams of India's poor children.",
  },
  {
    category: Category.Class12,
    subject: "English",
    chapter: "Deep Water",
    question:
      "What techniques did the instructor use to help Douglas overcome his fear?",
    answer:
      "Douglas's instructor used a systematic approach: (1) Built leg strength with a board at pool's edge; (2) Worked on breathing — exhaling underwater; (3) Developed stroke technique; (4) Gradually reduced physical support; (5) Finally let Douglas swim alone. The process took months. After completing instruction, Douglas tested himself on several lakes and rivers until fear was completely gone.",
  },
];
