// Chapter-wise Q&A for Class 12 — minimum 20 questions per chapter
// Subjects: Physics, Chemistry, Mathematics, Biology, English (Flamingo)

export interface ChapterQA12 {
  subject: string;
  chapter: string;
  questions: { q: string; a: string }[];
}

export const CHAPTER_QA_CLASS12: ChapterQA12[] = [
  // ── Physics ──────────────────────────────────────────────────────────────────
  {
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    questions: [
      {
        q: "What is electric charge?",
        a: "Electric charge is a fundamental property of matter. Two types: positive (proton) and negative (electron). SI unit: Coulomb (C). Charge is quantised (q = ne) and conserved (total charge in an isolated system is constant).",
      },
      {
        q: "State Coulomb's Law.",
        a: "The force between two point charges is: F = kq₁q₂/r², where k = 9×10⁹ N·m²/C² (Coulomb's constant = 1/4πε₀). The force is along the line joining the charges. Like charges repel; unlike charges attract.",
      },
      {
        q: "What is the electric field?",
        a: "Electric field E at a point is the force per unit positive test charge: E = F/q₀. SI unit: N/C or V/m. It is a vector quantity. Field lines start from positive charges and end at negative charges.",
      },
      {
        q: "What is the principle of superposition of electric forces?",
        a: "The total force on a charge due to multiple charges equals the vector sum of individual forces: F = F₁ + F₂ + F₃ + ... Each force is calculated as if the other charges are absent.",
      },
      {
        q: "What is an electric dipole?",
        a: "An electric dipole consists of two equal and opposite charges (+q and -q) separated by a small distance 2l. Dipole moment p = q × 2l, directed from -q to +q. SI unit: C·m.",
      },
      {
        q: "What is the electric field on the axial line of a dipole?",
        a: "E_axial = 2kp/(r³-l²)² ≈ 2kp/r³ for r >> l. The direction is along the dipole moment (from -q to +q). At large distances, it falls as 1/r³.",
      },
      {
        q: "What is Gauss's Law?",
        a: "The total electric flux through any closed surface (Gaussian surface) equals the total charge enclosed divided by ε₀: Φ = q_enclosed/ε₀ = ∮E·dA. It simplifies calculation of E for symmetric charge distributions.",
      },
      {
        q: "Find the electric field due to an infinitely long straight charged wire.",
        a: "Using Gaussian cylinder of radius r and length l: E × 2πrl = λl/ε₀, so E = λ/2πε₀r, where λ is the linear charge density. The field varies as 1/r and points radially outward.",
      },
      {
        q: "What is the electric field inside a conductor?",
        a: "In electrostatic equilibrium, the electric field inside a conductor is zero. All charges reside on the surface. Any cavity inside a conductor (with no charge inside) has zero field — this is called Faraday cage effect.",
      },
      {
        q: "What is quantisation of charge?",
        a: "Electric charge exists in discrete units of e = 1.6×10⁻¹⁹ C. Any charge q = ne, where n is an integer. Charge is not continuous — it comes in whole number multiples of the elementary charge e.",
      },
      {
        q: "What is conservation of charge?",
        a: "The total electric charge in an isolated system remains constant. Charges can be transferred (from one body to another) or created/destroyed in pairs (pair production: photon → electron + positron), but total charge is always conserved.",
      },
      {
        q: "What are electric field lines and their properties?",
        a: "Electric field lines are imaginary lines showing the direction of E. Properties: (1) Start from + and end at - charge; (2) Never intersect; (3) Denser lines = stronger field; (4) Perpendicular to conducting surfaces; (5) Do not pass through conductors.",
      },
      {
        q: "What is the torque on an electric dipole in a uniform electric field?",
        a: "Torque τ = p × E = pE sinθ, where θ is the angle between p and E. At θ = 90°, torque is maximum (= pE). At θ = 0° or 180°, torque is zero — these are equilibrium positions (stable and unstable respectively).",
      },
      {
        q: "What is a non-polar molecule? Give examples.",
        a: "A non-polar molecule has no permanent electric dipole moment — the centres of positive and negative charge coincide. Examples: O₂, N₂, CO₂, CH₄. In an electric field, they become polarised (induced dipole).",
      },
      {
        q: "What is the electric field due to a uniformly charged sphere (outside)?",
        a: "Outside a uniformly charged sphere: E = kQ/r² = Q/(4πε₀r²), same as a point charge Q at the centre. Inside: E = 0 (Gauss's law — no charge enclosed inside the Gaussian surface).",
      },
      {
        q: "What is the permittivity of free space ε₀?",
        a: "ε₀ = 8.85×10⁻¹² C²/N·m². It appears in Coulomb's law: k = 1/(4πε₀). It represents the ability of free space to allow electric field lines to pass through it.",
      },
      {
        q: "What is the unit of electric flux?",
        a: "Electric flux Φ = E·A·cosθ. SI unit: N·m²/C or V·m. Flux is a scalar quantity representing the number of field lines passing through a surface.",
      },
      {
        q: "State and explain the shell theorem for electric fields.",
        a: "(1) A thin spherical shell with surface charge density σ has electric field outside as if all charge is concentrated at the centre: E = σR²/ε₀r². (2) Inside the shell: E = 0 (no net force on charges inside).",
      },
      {
        q: "What is the physical significance of Gauss's Law?",
        a: "Gauss's Law provides an elegant way to calculate electric fields for symmetric distributions (spherical, cylindrical, planar). It is equivalent to Coulomb's Law but more powerful for high-symmetry situations.",
      },
      {
        q: "What is the electric field due to an infinite plane sheet of charge?",
        a: "Using Gaussian pillbox: E = σ/2ε₀, where σ is surface charge density. This field is uniform and perpendicular to the sheet, independent of distance. Between two oppositely charged parallel plates: E = σ/ε₀.",
      },
    ],
  },
  {
    subject: "Physics",
    chapter: "Current Electricity",
    questions: [
      {
        q: "What is electric current?",
        a: "Electric current is the rate of flow of charge: I = Q/t. SI unit: Ampere (A) = C/s. Conventional current flows from high potential to low potential (opposite to electron flow).",
      },
      {
        q: "State Ohm's Law.",
        a: "At constant temperature, the current through a conductor is directly proportional to the potential difference across it: V = IR, where R is resistance. Ohm's Law holds for metallic conductors at constant temperature.",
      },
      {
        q: "What is electrical resistance and what factors affect it?",
        a: "Resistance R = ρl/A, where ρ = resistivity (property of material), l = length, A = cross-sectional area. Resistance increases with length, decreases with area. SI unit: Ohm (Ω).",
      },
      {
        q: "What is resistivity and how does it vary with temperature?",
        a: "Resistivity ρ is an intrinsic property of a material. For metals: ρ = ρ₀(1 + αΔT) — increases with temperature (positive temperature coefficient). For semiconductors: resistivity decreases with temperature (negative coefficient).",
      },
      {
        q: "What is the combination of resistors in series?",
        a: "In series: R_eff = R₁ + R₂ + R₃. Same current flows through all. Total voltage = sum of individual voltages. Series connections are used where equal current is needed.",
      },
      {
        q: "What is the combination of resistors in parallel?",
        a: "In parallel: 1/R_eff = 1/R₁ + 1/R₂ + 1/R₃. Same voltage across all. Total current = sum of individual currents. Parallel connections are used in household wiring (same voltage to all appliances).",
      },
      {
        q: "What is EMF and internal resistance?",
        a: "EMF (ε) is the work done per unit charge by the source (e.g., battery). Internal resistance (r) is the resistance of the source itself. Terminal voltage V = ε - Ir (during discharge) or ε + Ir (during charging).",
      },
      {
        q: "State Kirchhoff's Current Law (KCL).",
        a: "KCL: The algebraic sum of currents at any junction (node) in a circuit is zero. ΣI = 0. This is based on conservation of charge. Currents entering a junction = currents leaving it.",
      },
      {
        q: "State Kirchhoff's Voltage Law (KVL).",
        a: "KVL: The algebraic sum of potential differences (including EMFs) around any closed loop in a circuit is zero. ΣEMF = ΣIR. This is based on conservation of energy.",
      },
      {
        q: "What is a Wheatstone bridge?",
        a: "A circuit for precise resistance measurement. At balance: P/Q = R/S (no current through galvanometer). If three resistances are known, the fourth unknown resistance can be found.",
      },
      {
        q: "What is a potentiometer and its uses?",
        a: "A potentiometer is a device for precise voltage measurement. It compares EMFs without drawing current from the source. Uses: (1) comparing EMFs of cells; (2) measuring internal resistance; (3) as voltage divider.",
      },
      {
        q: "What is drift velocity?",
        a: "Drift velocity is the average velocity of free electrons in a conductor due to an applied electric field: v_d = eEτ/m, where τ is relaxation time. It is very small (≈10⁻³ m/s), yet current flows fast because all electrons drift simultaneously.",
      },
      {
        q: "What is the relationship between current and drift velocity?",
        a: "I = nAev_d, where n = number density of electrons, A = cross-section area, e = electron charge, v_d = drift velocity. This shows that higher electron density, larger area, or higher drift velocity means more current.",
      },
      {
        q: "What is Joule's Law of Heating?",
        a: "Heat produced: H = I²Rt = V²t/R = VIt (in joules). Power dissipated: P = I²R = V²/R = VI. This energy comes from the kinetic energy of electrons given to the lattice as heat. Used in heaters, fuses, etc.",
      },
      {
        q: "What is the efficiency of a cell?",
        a: "Efficiency = Output power / Input power = V × I / ε × I = V/ε. For maximum power transfer, external resistance R = internal resistance r. At maximum power transfer, efficiency = 50%.",
      },
      {
        q: "What is a fuse?",
        a: "A fuse is a safety device — a thin wire of low melting point alloy (tin-lead). When current exceeds the rated value, the wire heats up and melts, breaking the circuit. It protects appliances from overcurrent.",
      },
      {
        q: "What is the colour code for resistors?",
        a: "Resistor colour code (BBROY Great Britain Very Good White): Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Grey=8, White=9. First two bands = digits, third band = multiplier, fourth = tolerance (Gold=5%, Silver=10%).",
      },
      {
        q: "What is the relationship between resistance and temperature for a nichrome wire?",
        a: "Nichrome has a very low temperature coefficient of resistance — its resistance barely changes with temperature. This makes it ideal for heater coils (stable resistance, high temperature). R = R₀(1 + αΔT) where α is very small for nichrome.",
      },
      {
        q: "What is meant by 'mobility' of charge carriers?",
        a: "Mobility μ = v_d/E = eτ/m. It is the drift velocity per unit electric field. High mobility means charge carriers move faster for the same field. Related to conductivity: σ = neμ.",
      },
      {
        q: "What is a carbon resistor?",
        a: "A carbon resistor is a small resistor made of carbon with colour-coded bands indicating its resistance value. Used in electronic circuits. The colour bands tell the resistance value and tolerance in a standard code.",
      },
    ],
  },

  // ── Chemistry ─────────────────────────────────────────────────────────────────
  {
    subject: "Chemistry",
    chapter: "The Solid State",
    questions: [
      {
        q: "What is a crystalline solid? Give examples.",
        a: "A crystalline solid has a regular, ordered arrangement of particles (atoms, ions, molecules) in a 3D pattern (crystal lattice). It has a sharp melting point. Examples: NaCl, diamond, sugar, ice.",
      },
      {
        q: "What is an amorphous solid?",
        a: "An amorphous solid has an irregular, disordered arrangement of particles. No sharp melting point — it softens over a range. Examples: glass, rubber, plastic, wax. Called 'pseudo-solids' or 'super-cooled liquids'.",
      },
      {
        q: "What are the types of crystalline solids?",
        a: "(1) Ionic solids: NaCl, KCl — hard, high melting point, conduct electricity when dissolved/melted. (2) Covalent/network solids: diamond, SiO₂ — very hard, highest melting points. (3) Molecular solids: ice, iodine — soft, low melting point. (4) Metallic solids: Fe, Cu — conduct electricity, malleable.",
      },
      {
        q: "What are crystal systems? How many are there?",
        a: "There are 7 crystal systems based on the unit cell dimensions and angles: Cubic, Tetragonal, Orthorhombic, Hexagonal, Trigonal, Monoclinic, Triclinic. These give rise to 14 Bravais lattices.",
      },
      {
        q: "What is a unit cell?",
        a: "The unit cell is the smallest repeating 3D unit of a crystal lattice. Stacking unit cells in 3 dimensions generates the complete crystal. It is defined by edge lengths (a, b, c) and angles (α, β, γ).",
      },
      {
        q: "What are the types of cubic unit cells?",
        a: "(1) Simple Cubic (SC): atoms only at corners; contribution per unit cell = 8 × 1/8 = 1. (2) Body-Centred Cubic (BCC): corners + 1 body centre; total = 1 + 1 = 2. (3) Face-Centred Cubic (FCC/CCP): corners + 6 face centres; total = 1 + 3 = 4.",
      },
      {
        q: "What is packing efficiency of FCC?",
        a: "In FCC, packing efficiency = 74%. The atoms touch along the face diagonal: 4r = √2 a, so r = a/(2√2). Packing efficiency = (4 × 4/3 πr³)/a³ × 100 = 74%. Same efficiency for HCP (hexagonal close packing).",
      },
      {
        q: "What is the packing efficiency of BCC?",
        a: "BCC packing efficiency = 68%. Atoms touch along body diagonal: 4r = √3 a. Packing efficiency = (2 × 4/3 πr³)/a³ × 100 = 68%. Less efficient than FCC but more efficient than Simple Cubic (52%).",
      },
      {
        q: "What is a Frenkel defect?",
        a: "A Frenkel defect occurs when a smaller ion leaves its normal site and occupies an interstitial position. The crystal has the same number of cations and anions — no change in density. Example: AgCl, ZnS. Also called a 'dislocation defect'.",
      },
      {
        q: "What is a Schottky defect?",
        a: "A Schottky defect occurs when equal numbers of cations and anions are missing from their lattice sites (to maintain electrical neutrality). Density decreases. Example: NaCl, KCl. Common in ionic crystals with similar ion sizes.",
      },
      {
        q: "What is an F-centre?",
        a: "F-centres (Farbe centres, German for 'colour') are anionic vacancies occupied by electrons. They give crystals colour. Example: NaCl becomes yellow, KCl becomes violet. These are metal-excess defects.",
      },
      {
        q: "What are n-type and p-type semiconductors?",
        a: "n-type: doped with Group 15 element (P, As) which has an extra electron — majority carriers are electrons. p-type: doped with Group 13 element (B, Al) which has a 'hole' (absence of electron) — majority carriers are holes.",
      },
      {
        q: "What is the coordination number of atoms in FCC?",
        a: "In FCC, each atom has a coordination number of 12. This means each atom touches 12 nearest neighbours (4 in the same layer, 4 in the layer above, 4 in the layer below). This is the maximum possible for equal-sized spheres.",
      },
      {
        q: "What is radius ratio in ionic crystals and why is it important?",
        a: "Radius ratio = r⁺/r⁻. It determines the coordination number and crystal structure. r⁺/r⁻ = 0.155-0.225: triangular coordination (CN=3); 0.225-0.414: tetrahedral (CN=4); 0.414-0.732: octahedral (CN=6); >0.732: cubic (CN=8).",
      },
      {
        q: "What is a tetrahedral void and octahedral void?",
        a: "In close-packed structures: Tetrahedral void: formed when 3 spheres in one layer + 1 sphere in next layer (or vice versa) — 4 nearest neighbours. Octahedral void: formed between 3 spheres in each layer facing each other — 6 nearest neighbours. Number of octahedral voids = N (number of atoms); tetrahedral voids = 2N.",
      },
      {
        q: "How is the density of a crystal calculated?",
        a: "Density ρ = (Z × M)/(a³ × Nₐ), where Z = number of atoms per unit cell, M = molar mass, a = edge length of unit cell, Nₐ = Avogadro's number (6.022×10²³). This allows calculation of crystal density from X-ray diffraction data.",
      },
      {
        q: "What are ferromagnetic, paramagnetic, and diamagnetic materials?",
        a: "Ferromagnetic: strongly attracted to magnetic field, form permanent magnets — Fe, Co, Ni. Paramagnetic: weakly attracted — O₂, CuO, TiO. Diamagnetic: weakly repelled — NaCl, C₆H₆, TiO₂. Ferrimagnetism (e.g., Fe₃O₄): unequal alignment of domains.",
      },
      {
        q: "What are interstitial compounds?",
        a: "Interstitial compounds are formed when small atoms (C, N, H) are trapped in interstitial voids of transition metals. Example: TiC (steel-like hardness), WC (cutting tools). They are hard, have high melting points, and have metallic conductivity.",
      },
      {
        q: "What is the anti-fluorite structure?",
        a: "In anti-fluorite structure, the positions of cations and anions are reversed compared to fluorite. Anions occupy FCC positions, cations occupy tetrahedral voids. Example: K₂O (K⁺ in tetrahedral voids, O²⁻ in FCC).",
      },
      {
        q: "What is a point defect?",
        a: "Point defects are irregularities in the crystal lattice due to missing, displaced, or extra atoms at specific points. Types: (1) Vacancy defect (Schottky): missing atoms; (2) Interstitial defect: extra atom in void; (3) Frenkel: atom displaced to void; (4) Impurity defect: foreign atom present.",
      },
    ],
  },

  // ── Mathematics ───────────────────────────────────────────────────────────────
  {
    subject: "Mathematics",
    chapter: "Relations and Functions",
    questions: [
      {
        q: "What is a relation in mathematics?",
        a: "A relation R from set A to set B is a subset of the Cartesian product A×B. It associates elements of A with elements of B. The set of first elements is the domain; the set of second elements is the range.",
      },
      {
        q: "What is a function?",
        a: "A function f: A → B is a relation where every element in A (domain) is associated with exactly one element in B (codomain). In a function: (1) No element of A can map to two different elements of B; (2) Every element of A must be mapped.",
      },
      {
        q: "What is a one-one (injective) function?",
        a: "f: A → B is injective if distinct elements of A have distinct images in B. That is, if f(a) = f(b) then a = b (or equivalently, a ≠ b ⟹ f(a) ≠ f(b)). Test: horizontal line test — any horizontal line crosses the graph at most once.",
      },
      {
        q: "What is an onto (surjective) function?",
        a: "f: A → B is surjective (onto) if every element of B has at least one pre-image in A. Range of f = B (codomain). If f is onto, no element of B is 'missed'.",
      },
      {
        q: "What is a bijective function?",
        a: "f: A → B is bijective (one-one and onto) if it is both injective and surjective. Every element of B has exactly one pre-image in A. Bijective functions have inverses. Example: f(x) = 2x+1 from R to R is bijective.",
      },
      {
        q: "What is an equivalence relation?",
        a: "A relation R on set A is an equivalence relation if it is: (1) Reflexive: aRa for all a ∈ A; (2) Symmetric: aRb ⟹ bRa; (3) Transitive: aRb and bRc ⟹ aRc. Example: equality (=), congruence modulo n.",
      },
      {
        q: "What are equivalence classes?",
        a: "The equivalence class [a] = {x ∈ A : xRa} — the set of all elements related to a. Equivalence classes partition the set A into disjoint subsets. Each element belongs to exactly one equivalence class.",
      },
      {
        q: "What is the composite function (fog)?",
        a: "(fog)(x) = f(g(x)). First apply g to x, then apply f to the result. Note: fog ≠ gof in general. Domain of fog = {x: x ∈ domain of g and g(x) ∈ domain of f}.",
      },
      {
        q: "What is the inverse of a function?",
        a: "f⁻¹: B → A exists if and only if f: A → B is bijective. f⁻¹(y) = x if and only if f(x) = y. Properties: f∘f⁻¹ = I_B and f⁻¹∘f = I_A (identity functions). To find f⁻¹, solve y = f(x) for x.",
      },
      {
        q: "Is the function f(x) = x² one-one from R to R?",
        a: "No. f(2) = 4 = f(-2) but 2 ≠ -2. So it is not one-one on R. However, f: [0,∞) → [0,∞) defined by f(x) = x² IS one-one (only non-negative inputs).",
      },
      {
        q: "What is a reflexive relation?",
        a: "A relation R on set A is reflexive if every element is related to itself: (a,a) ∈ R for all a ∈ A. Example: 'is equal to' (a=a is always true); 'is a multiple of itself' (a divides a).",
      },
      {
        q: "What is a symmetric relation?",
        a: "A relation R on set A is symmetric if whenever aRb, then bRa. Example: 'is equal to' (a=b ⟹ b=a); 'is a friend of' (if A is a friend of B, B is a friend of A). Counter-example: 'is greater than' is NOT symmetric.",
      },
      {
        q: "What is a transitive relation?",
        a: "A relation R is transitive if aRb and bRc ⟹ aRc. Example: 'is a divisor of' (if a|b and b|c, then a|c); 'is less than' (a<b and b<c ⟹ a<c).",
      },
      {
        q: "What is the identity function?",
        a: "The identity function I: A → A is defined as I(x) = x for all x ∈ A. It maps every element to itself. It is bijective. f∘I = f and I∘f = f for any function f.",
      },
      {
        q: "What is a binary operation?",
        a: "A binary operation * on a set A is a rule that assigns to each pair (a,b) ∈ A×A a unique element a*b ∈ A. The operation must be closed (result stays in A). Examples: addition, multiplication on N, Z, Q, R.",
      },
      {
        q: "What are the properties of a binary operation?",
        a: "Properties: (1) Commutative: a*b = b*a; (2) Associative: (a*b)*c = a*(b*c); (3) Identity element e: a*e = e*a = a; (4) Inverse of a: element b such that a*b = b*a = e. Examples: addition on Z — identity=0, inverse=-a.",
      },
      {
        q: "What is the difference between codomain and range?",
        a: "Codomain: the set B in f: A → B (the set of all possible outputs). Range: the set of actual outputs {f(x): x ∈ A} ⊆ B. Range ⊆ Codomain. If range = codomain, the function is surjective (onto).",
      },
      {
        q: "Determine if f(x) = 2x+3 is one-one and onto from R to R.",
        a: "One-one: f(a) = f(b) ⟹ 2a+3 = 2b+3 ⟹ a = b ✓. Onto: for any y ∈ R, x = (y-3)/2 ∈ R, so f(x) = y ✓. Therefore f is bijective (both one-one and onto).",
      },
      {
        q: "What is the number of relations on a set with n elements?",
        a: "A set with n elements has n² pairs in A×A. Each pair can be included or excluded from the relation. Total number of relations = 2^(n²). For n=2: 2^4 = 16 relations.",
      },
      {
        q: "What is a partial order relation? Give an example.",
        a: "A relation that is reflexive, antisymmetric (aRb and bRa ⟹ a=b), and transitive is a partial order. Example: '≤' (less than or equal to) on real numbers: a≤a (reflexive), a≤b and b≤a ⟹ a=b (antisymmetric), a≤b and b≤c ⟹ a≤c (transitive).",
      },
    ],
  },

  // ── Biology ───────────────────────────────────────────────────────────────────
  {
    subject: "Biology",
    chapter: "Reproduction in Organisms",
    questions: [
      {
        q: "What is reproduction?",
        a: "Reproduction is the biological process by which organisms produce offspring (new individuals of the same species). It ensures continuity of life. Two types: (1) Asexual — one parent, genetically identical offspring; (2) Sexual — two parents, genetic variation in offspring.",
      },
      {
        q: "What is asexual reproduction? Give examples.",
        a: "Asexual reproduction requires only one parent and no fertilisation. No fusion of gametes. Types: binary fission (Amoeba, bacteria), budding (Hydra, yeast), fragmentation (Planaria, filamentous algae), sporulation (Rhizopus), vegetative propagation (plants).",
      },
      {
        q: "What is binary fission?",
        a: "Binary fission: a single-celled organism divides into two equal daughter cells. Nucleus divides first (karyokinesis), then cytoplasm (cytokinesis). Examples: Amoeba (multiple planes), bacteria, Paramecium. Leishmania shows binary fission in a definite plane.",
      },
      {
        q: "What is budding? Give examples.",
        a: "Budding: a small outgrowth (bud) forms on the parent organism, grows, and eventually separates to form a new individual. Examples: Hydra (multicellular), yeast (unicellular), sponges. The bud is genetically identical to the parent.",
      },
      {
        q: "What is fragmentation?",
        a: "Fragmentation: the organism breaks into fragments and each fragment regenerates into a complete organism. Examples: Planaria (flatworm), Spirogyra (algae), sea stars. All fragments grow into identical copies of the parent.",
      },
      {
        q: "What is vegetative propagation in plants?",
        a: "New plants grow from vegetative parts (root, stem, leaf) of the parent. Examples: Potato (modified stem/tuber), Ginger (rhizome), Rose (stem cutting), Bryophyllum (leaves — adventitious buds on leaf margins).",
      },
      {
        q: "What is sexual reproduction?",
        a: "Sexual reproduction involves the formation and fusion of male and female gametes (syngamy). Result: fertilised egg (zygote) which develops into a new organism. Leads to genetic variation — offspring differ from parents.",
      },
      {
        q: "What is syngamy?",
        a: "Syngamy (also called fertilisation) is the fusion of male and female gametes to form a diploid zygote. External syngamy (outside body, aquatic): frogs, fish. Internal syngamy (inside female body): reptiles, birds, mammals.",
      },
      {
        q: "What is the life span of different organisms?",
        a: "Life spans vary widely: Mayfly — 1 day; crocodile — 60 years; banyan tree — 200+ years; tortoise — 100+ years; Pinus species — 5000 years; rose — 5-7 years. Reproduction is not related to life span.",
      },
      {
        q: "What is meiosis and its importance?",
        a: "Meiosis is reductional cell division that halves the chromosome number (diploid → haploid) to produce gametes. Importance: (1) Maintains chromosome number across generations; (2) Crossing over during meiosis I creates genetic recombination, increasing variation.",
      },
      {
        q: "What are the events of the sexual life cycle?",
        a: "Events: (1) Pre-fertilisation: gametogenesis (gamete formation) and gamete transfer; (2) Fertilisation: syngamy (fusion of gametes) to form zygote; (3) Post-fertilisation: embryogenesis (development of embryo) leading to a new organism.",
      },
      {
        q: "What is parthenogenesis?",
        a: "Parthenogenesis: development of an unfertilised egg into a new individual without fertilisation. Examples: drones (male honey bees) develop from unfertilised eggs; some lizards; certain plants. Considered a form of asexual reproduction.",
      },
      {
        q: "What is the difference between homothallic and heterothallic organisms?",
        a: "Homothallic (monoecious): both male and female reproductive organs present on the same individual (bisexual). Example: earthworm, tapeworm. Heterothallic (dioecious): separate male and female individuals. Example: papaya, date palm, human beings.",
      },
      {
        q: "What is sporulation (spore formation)?",
        a: "Sporulation: asexual reproduction by formation of spores (conidia or zoospores). Spores are encased in thick walls for protection and dispersal. They germinate under favourable conditions. Examples: Rhizopus (bread mould), Penicillium, algae.",
      },
      {
        q: "What is the advantage of asexual reproduction over sexual?",
        a: "Asexual: (1) Faster reproduction; (2) Only one parent needed; (3) All progeny are genetically identical (useful if parent is well-adapted); (4) Simpler process; (5) Occurs even in unfavourable conditions. Disadvantage: no genetic variation.",
      },
      {
        q: "What is an isogamy?",
        a: "Isogamy: fusion of gametes that are morphologically similar (same size and shape) but physiologically different (one is male, one is female). Example: certain green algae like Chlamydomonas. Compare: anisogamy (different sizes) and oogamy (large non-motile female + small motile male).",
      },
      {
        q: "What is the juvenile phase in organisms?",
        a: "The juvenile phase (vegetative phase in plants) is the period from birth/germination to the time an organism becomes reproductively mature. During this phase, active growth occurs. After the juvenile phase, the reproductive phase begins.",
      },
      {
        q: "What is senescence?",
        a: "Senescence is the gradual deterioration of biological functions with age, eventually leading to death. It marks the end of the reproductive phase. Plants lose leaves (deciduous), animals slow down. Some organisms like sea anemones show negligible senescence.",
      },
      {
        q: "What is the significance of meiosis in sexual reproduction?",
        a: "Meiosis: (1) Reduces chromosome number from 2n to n for gamete formation; (2) Crossing over in Prophase I creates new combinations of alleles (recombination); (3) Random assortment of chromosomes increases genetic diversity; (4) Maintains chromosome number constant across generations.",
      },
      {
        q: "What is the difference between mitosis and meiosis in reproduction?",
        a: "Mitosis: 2n → 2n (asexual/somatic). 1 division, 2 cells, same chromosome number, no genetic variation, used for growth and repair. Meiosis: 2n → n (sexual/gametes). 2 divisions, 4 haploid cells, genetic variation through crossing over, used for sexual reproduction.",
      },
    ],
  },

  // ── English: Flamingo ─────────────────────────────────────────────────────────
  {
    subject: "English",
    chapter: "The Last Lesson",
    questions: [
      {
        q: "Who wrote 'The Last Lesson'?",
        a: "Alphonse Daudet, a French author. The story was originally written in French ('La Dernière Classe') and is set in the Alsace-Lorraine region of France during the Franco-Prussian War (1870-71).",
      },
      {
        q: "Who is the narrator of 'The Last Lesson'?",
        a: "Franz, a young French boy who is a student in M. Hamel's class. He narrates the story of the last French lesson, looking back on the experience.",
      },
      {
        q: "What is the historical background of 'The Last Lesson'?",
        a: "After France lost the Franco-Prussian War (1871), Prussia annexed Alsace and Lorraine. The Prussian government ordered that German replace French in all schools. 'The Last Lesson' is set on the day the French language is to be taught for the last time.",
      },
      {
        q: "Who is M. Hamel?",
        a: "M. Hamel is the French teacher in Franz's village school. He has taught there for 40 years. He is usually strict and scolding, but on the day of the last lesson, he appears in his finest Sunday clothes and is gentle and dignified.",
      },
      {
        q: "Why was Franz late to school on the day of the story?",
        a: "Franz had not prepared his lesson on participles and feared being scolded. He almost stayed away but came to school. He was distracted by the warm day and wanted to run through the fields instead of going to school.",
      },
      {
        q: "What unusual things did Franz notice when he came to school?",
        a: "Usually, there was noise and commotion. That day, everything was silent, orderly. The school had an atmosphere of a Sunday. Old villagers were sitting at the back of the class — the old mayor, ex-postmaster, and others. M. Hamel was in his best clothes.",
      },
      {
        q: "What was M. Hamel's announcement to the class?",
        a: "M. Hamel announced that it was the last French lesson. From the next day, only German would be taught. He said he must give them his best lessons on this last day.",
      },
      {
        q: "How did Franz's feelings change after M. Hamel's announcement?",
        a: "Franz felt deep regret for not learning French properly. He understood why the books he had always found boring suddenly seemed precious. He felt a love for French and for M. Hamel he had never felt before.",
      },
      {
        q: "What does M. Hamel say about the French language?",
        a: "M. Hamel says French is the most beautiful language in the world — the clearest, the most logical. He urges the students to hold on to it — that a people that is enslaved does not have to give up if it holds fast to its language.",
      },
      {
        q: "What is the central theme of 'The Last Lesson'?",
        a: "The theme is language as national identity and cultural freedom. When a language is suppressed, it represents the suppression of a people's culture and identity. The story also deals with regret, procrastination, and the value of one's mother tongue.",
      },
      {
        q: "Why did the old villagers come to the last French lesson?",
        a: "The old villagers came as a sign of regret and respect — to pay tribute to their language and country. They felt guilty for not having learnt French enough when they had the chance. They came to honour France's language one last time.",
      },
      {
        q: "What is the significance of M. Hamel's new clothes?",
        a: "M. Hamel wore his fine Sunday clothes (the green coat, frilled shirt, black silk cap) as a mark of respect for the occasion — to honour the last French lesson. It shows the solemnity and patriotism he feels.",
      },
      {
        q: "What does M. Hamel say about the fault of the people in Alsace?",
        a: "M. Hamel says the people of Alsace are at fault — they kept putting off learning, saying 'I have plenty of time to learn tomorrow.' He himself is guilty of sending students to water flowers instead of learning. Procrastination is their shared failure.",
      },
      {
        q: "What happens at the end of the last lesson?",
        a: "When the church clock strikes twelve and the Prussian trumpets sound, M. Hamel cannot speak. He is overwhelmed with emotion. He turns to the blackboard and writes as large as he can: 'VIVE LA FRANCE!' (Long live France!). He then dismisses the class.",
      },
      {
        q: "What does 'VIVE LA FRANCE!' signify?",
        a: "It is M. Hamel's last act of patriotism and resistance. Unable to speak, he expresses his love for France in writing. It is a powerful, silent protest against the suppression of their language and culture.",
      },
      {
        q: "What is the significance of the pigeons in the story?",
        a: "When M. Hamel mentioned that German would replace French even for pigeons in their cotes — it was ironic. Franz wondered if pigeons would also be made to coo in German. It highlights the absurdity of cultural suppression.",
      },
      {
        q: "How does the story deal with the theme of regret?",
        a: "Franz regrets not paying attention in class. M. Hamel regrets teaching poorly at times. The villagers regret not learning French when they had the chance. The story universalises the human tendency to regret only when it is too late.",
      },
      {
        q: "What does M. Hamel compare the last French lesson to?",
        a: "M. Hamel compares learning and holding on to French to holding a key to a prison — as long as a people keeps its language, it is never truly enslaved. Language is freedom.",
      },
      {
        q: "What does the story suggest about education?",
        a: "Education is taken for granted until it is threatened. The story shows that we value things only when we are about to lose them. It advocates for conscious appreciation of knowledge and culture while there is still time.",
      },
      {
        q: "What is the irony in Franz's character?",
        a: "Franz usually finds school boring and his lessons dull. He fears the participles lesson. Yet on this last day, he suddenly finds everything dear — the lessons, the books, the teacher. The irony is that the threat of loss creates value.",
      },
    ],
  },
  // ── Class 12 Chemistry: Solutions ────────────────────────────────────────
  {
    subject: "Chemistry",
    chapter: "Solutions",
    questions: [
      {
        q: "What is a solution? What are solute and solvent?",
        a: "A solution is a homogeneous mixture of two or more components. The component present in smaller amount is the solute; the component in larger amount (or that determines the state of solution) is the solvent. Example: salt water — salt is solute, water is solvent.",
      },
      {
        q: "What are the types of solutions based on physical state?",
        a: "Solutions can be: gas in gas (air), gas in liquid (aerated drinks/soda), gas in solid (hydrogen in palladium), liquid in liquid (alcohol + water), liquid in solid (amalgam), solid in liquid (salt water), solid in solid (alloys like brass).",
      },
      {
        q: "What is molarity? Write its formula.",
        a: "Molarity (M) = moles of solute / volume of solution in litres. Unit: mol/L or M. Example: 1M NaCl = 1 mole NaCl dissolved in enough water to make 1 litre of solution. Molarity changes with temperature (volume changes with temperature).",
      },
      {
        q: "What is molality? How is it different from molarity?",
        a: "Molality (m) = moles of solute / mass of solvent in kg. Unit: mol/kg. Unlike molarity, molality does NOT change with temperature (mass is independent of temperature). Molality is preferred for colligative property calculations.",
      },
      {
        q: "What is mole fraction? Give the formula.",
        a: "Mole fraction of component A = nA / (nA + nB + ...). It is dimensionless. The sum of mole fractions of all components = 1. Example: if 2 mol A and 3 mol B, mole fraction of A = 2/5 = 0.4.",
      },
      {
        q: "State Henry's law.",
        a: "Henry's law: at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of that gas above the liquid. p = KH × x, where KH is Henry's law constant. Applications: carbonated drinks (CO₂ under pressure), scuba diving (bends).",
      },
      {
        q: "What are colligative properties?",
        a: "Colligative properties depend only on the NUMBER of solute particles (not their nature). Four colligative properties: (1) Relative lowering of vapour pressure, (2) Elevation of boiling point, (3) Depression of freezing point, (4) Osmotic pressure. All are used to determine molar mass of solutes.",
      },
      {
        q: "State Raoult's law.",
        a: "Raoult's law: the vapour pressure of a solvent above a solution equals the mole fraction of solvent × vapour pressure of pure solvent. PA = xA × P°A. For an ideal solution, both components obey Raoult's law. This leads to relative lowering of vapour pressure when a non-volatile solute is added.",
      },
      {
        q: "What is elevation of boiling point?",
        a: "Adding a non-volatile solute to a solvent raises its boiling point. ΔTb = Kb × m (m = molality of solution, Kb = ebullioscopic constant, property of solvent). This is because the solute lowers vapour pressure — a higher temperature is needed to reach atmospheric pressure.",
      },
      {
        q: "What is depression of freezing point?",
        a: "Adding a solute to a solvent lowers its freezing point. ΔTf = Kf × m (Kf = cryoscopic constant). Applications: antifreeze in car radiators (ethylene glycol), salt on icy roads in winter. Used to find molar mass of solute.",
      },
      {
        q: "What is osmosis? What is osmotic pressure?",
        a: "Osmosis is the movement of solvent molecules through a semipermeable membrane from a region of lower solute concentration (higher solvent concentration) to higher solute concentration. Osmotic pressure π = MRT (M = molarity, R = gas constant, T = temperature in K). Used to find molar mass of polymers.",
      },
      {
        q: "What is the van't Hoff factor (i)?",
        a: "The van't Hoff factor i = (observed colligative property) / (expected colligative property for 1 mole). For electrolytes that dissociate: i > 1 (e.g., NaCl → Na⁺ + Cl⁻, i = 2). For associated solutes: i < 1 (e.g., acetic acid dimerises in benzene). It corrects colligative property calculations.",
      },
      {
        q: "What is an ideal solution? Give an example.",
        a: "An ideal solution obeys Raoult's law over the entire range of concentrations. Both components have similar intermolecular forces. ΔHmix = 0, ΔVmix = 0. Example: benzene + toluene, hexane + heptane, methanol + ethanol.",
      },
      {
        q: "What are positive and negative deviations from Raoult's law?",
        a: "Positive deviation: vapour pressure > calculated by Raoult's law. Interactions between A-B are weaker than A-A and B-B. ΔHmix > 0. Example: ethanol + water. Negative deviation: vapour pressure < calculated. A-B interactions are stronger. ΔHmix < 0. Example: acetone + chloroform.",
      },
      {
        q: "What is the significance of osmotic pressure in biological systems?",
        a: "Cell membranes are semipermeable. Cells placed in hypotonic solution (less solute outside) swell/burst (haemolysis for RBCs). In hypertonic solution (more solute outside), cells shrink (crenation/plasmolysis). Isotonic solutions (same osmotic pressure as cell fluid) are used in IV drips (0.9% saline).",
      },
    ],
  },
  // ── Class 12 Physics: Current Electricity extra ────────────────────────────
  {
    subject: "Physics",
    chapter: "Current Electricity",
    questions: [
      {
        q: "What is the difference between EMF and terminal voltage?",
        a: "EMF (ε) is the maximum potential difference when no current flows (open circuit). Terminal voltage V = ε − Ir (where r = internal resistance). As current increases, terminal voltage drops due to voltage drop across internal resistance.",
      },
      {
        q: "State Kirchhoff's laws.",
        a: "KCL (Junction Rule): Sum of currents entering a junction = sum leaving. Based on conservation of charge. KVL (Loop Rule): Sum of EMFs = sum of voltage drops in any closed loop. Based on conservation of energy. Used to solve complex circuit networks.",
      },
      {
        q: "What is Wheatstone bridge? When is it balanced?",
        a: "Wheatstone bridge is a circuit with 4 resistors (P, Q, R, S) arranged in a diamond shape with a galvanometer in the middle. It is balanced when P/Q = R/S — no current flows through the galvanometer. Used to find unknown resistance precisely.",
      },
      {
        q: "What is a potentiometer? What are its advantages over a voltmeter?",
        a: "A potentiometer is a device that measures EMF/potential difference accurately by balancing it against a known potential difference. Advantages: draws NO current from the cell being measured (voltmeter draws current, causing terminal voltage to drop), so it measures true EMF.",
      },
      {
        q: "What is drift velocity? How is it related to current?",
        a: "Drift velocity (vd) is the average velocity of electrons in a conductor when an electric field is applied. I = neAvd (n = electron density, e = charge, A = area). vd is very small (~0.1 mm/s) but current propagates almost instantaneously because the field travels at light speed.",
      },
      {
        q: "What is the effect of temperature on resistance?",
        a: "For metals: resistance increases with temperature. R = R₀(1 + αΔT) where α = temperature coefficient (positive for metals). For semiconductors and electrolytes: resistance decreases with temperature (more charge carriers become available). For alloys like Nichrome: small α — used in heaters.",
      },
      {
        q: "What is the colour code for carbon resistors?",
        a: "The colour code helps read resistance value: Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Grey=8, White=9. Mnemonic: BB ROY Great Britain Very Good Wife (or similar). Fourth band gives tolerance: Gold=±5%, Silver=±10%.",
      },
      {
        q: "What is the principle behind a battery charger?",
        a: "When charging a battery, external EMF > battery EMF (V = ε + Ir). Energy is supplied to reverse the chemical reaction inside the battery. When discharging, battery EMF drives current (V = ε − Ir). Charging and discharging follow the same formula with different signs.",
      },
      {
        q: "Define specific resistance (resistivity) and its unit.",
        a: "Resistivity ρ = RA/L (where R = resistance, A = cross-sectional area, L = length). Unit: Ω·m. Resistivity is a material property independent of shape/size. Copper: ~1.7×10⁻⁸ Ω·m (excellent conductor). Silicon: ~10³ Ω·m (semiconductor). Glass: ~10¹² Ω·m (insulator).",
      },
      {
        q: "What is meant by electrical conductance and conductivity?",
        a: "Conductance G = 1/R. Unit: Siemens (S) or mho (℧). Conductivity σ = 1/ρ = L/(RA). Unit: S/m. High conductivity = good conductor. Copper has conductivity ~6×10⁷ S/m. Conductivity of metals decreases with temperature; conductivity of semiconductors increases with temperature.",
      },
    ],
  },
  // ── Class 12 Mathematics: Matrices and Determinants ──────────────────────
  {
    subject: "Mathematics",
    chapter: "Matrices",
    questions: [
      {
        q: "What is a matrix? Define order of a matrix.",
        a: "A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. Order m × n means m rows and n columns. Example: a 3×2 matrix has 3 rows and 2 columns and 6 elements.",
      },
      {
        q: "What are the types of matrices?",
        a: "Types: Row matrix (1 row), Column matrix (1 column), Square matrix (rows = columns), Zero matrix (all elements = 0), Identity/Unit matrix (diagonal elements = 1, rest = 0), Diagonal matrix, Scalar matrix, Triangular matrix, Symmetric (Aᵀ = A), Skew-symmetric (Aᵀ = −A).",
      },
      {
        q: "What is the transpose of a matrix?",
        a: "The transpose of matrix A (written Aᵀ or A') is obtained by interchanging rows and columns. If A is m×n, Aᵀ is n×m. Properties: (Aᵀ)ᵀ = A; (A+B)ᵀ = Aᵀ + Bᵀ; (AB)ᵀ = BᵀAᵀ (note the reversal of order).",
      },
      {
        q: "When can two matrices be multiplied? What is the order of the product?",
        a: "Two matrices A (m×n) and B (p×q) can be multiplied only if n = p (number of columns of A = number of rows of B). The product AB has order m×q. Matrix multiplication is NOT commutative in general (AB ≠ BA in most cases).",
      },
      {
        q: "What is a symmetric matrix?",
        a: "A matrix A is symmetric if Aᵀ = A (transposing gives the same matrix). This means aᵢⱼ = aⱼᵢ for all i, j. A square matrix can always be written as the sum of a symmetric and a skew-symmetric matrix: A = ½(A + Aᵀ) + ½(A − Aᵀ).",
      },
      {
        q: "What is the identity matrix?",
        a: "The identity matrix I (or Iₙ for n×n) has 1s on the main diagonal and 0s elsewhere. It is the matrix equivalent of the number 1 in multiplication: AI = IA = A for any square matrix A of the same order.",
      },
      {
        q: "What are elementary row operations?",
        a: "Three elementary row operations on matrices: (1) Interchange two rows (Rᵢ ↔ Rⱼ); (2) Multiply a row by a non-zero constant (Rᵢ → kRᵢ); (3) Add a multiple of one row to another (Rᵢ → Rᵢ + kRⱼ). Used in row reduction to find inverse and solve systems of equations.",
      },
      {
        q: "What is an invertible matrix? When does an inverse exist?",
        a: "A square matrix A has an inverse A⁻¹ if and only if det(A) ≠ 0 (non-singular matrix). AA⁻¹ = A⁻¹A = I. If det(A) = 0, the matrix is singular and has no inverse. A⁻¹ can be found using the formula A⁻¹ = adj(A)/det(A).",
      },
      {
        q: "What is a skew-symmetric matrix?",
        a: "A matrix A is skew-symmetric if Aᵀ = −A. This means aᵢⱼ = −aⱼᵢ for all i, j. All diagonal elements must be 0 (since aᵢᵢ = −aᵢᵢ implies aᵢᵢ = 0). Example: [[0, 3], [−3, 0]] is skew-symmetric.",
      },
      {
        q: "How do you solve a system of linear equations using matrices?",
        a: "Write the system as AX = B where A = coefficient matrix, X = variable matrix, B = constant matrix. If det(A) ≠ 0, the unique solution is X = A⁻¹B. This is the matrix method. Alternatively, use Cramer's rule or Gaussian elimination (row reduction).",
      },
    ],
  },
  // ── Class 12 Biology: Reproduction in Organisms (extra) ──────────────────
  {
    subject: "Biology",
    chapter: "Sexual Reproduction in Flowering Plants",
    questions: [
      {
        q: "What are the parts of a flower?",
        a: "A flower has: Sepals (calyx — protect bud), Petals (corolla — attract pollinators), Stamens (androecium — male part: anther + filament), Pistil/Carpel (gynoecium — female part: stigma + style + ovary). Complete flower has all four whorls.",
      },
      {
        q: "What is pollination? Name its types.",
        a: "Pollination is the transfer of pollen from the anther to the stigma. Types: Self-pollination (autogamy — same flower or same plant), Cross-pollination (allogamy — different plants). Agents: wind (anemophily), water (hydrophily), insects (entomophily), birds (ornithophily), bats (chiropterophily).",
      },
      {
        q: "What is double fertilisation?",
        a: "Double fertilisation is unique to angiosperms. Two male gametes are released from the pollen tube: one fertilises the egg → zygote (2n); the other fuses with two polar nuclei → primary endosperm nucleus (3n). This gives rise to embryo and endosperm simultaneously.",
      },
      {
        q: "What is the structure of the ovule?",
        a: "An ovule consists of: funicle (stalk), hilum (attachment point), integuments (one or two protective layers), nucellus (nutritive tissue), embryo sac (female gametophyte — contains egg, synergids, antipodals, polar nuclei), micropyle (pore for pollen tube entry), chalaza (base).",
      },
      {
        q: "What is the embryo sac? Name its 8 cells.",
        a: "The embryo sac (female gametophyte) is a 7-celled, 8-nucleate structure: 1 egg cell (at micropyle end), 2 synergids (assist fertilisation), 3 antipodal cells (nutritive, at chalazal end), 2 polar nuclei (fuse to form central cell). Total: 7 cells, 8 nuclei.",
      },
      {
        q: "What happens after fertilisation in a flower?",
        a: "After fertilisation: zygote → embryo (in seed), primary endosperm nucleus → endosperm (food for seed), ovule → seed (integuments become seed coat), ovary → fruit, petals/sepals/stamens wither and fall, ovary wall → pericarp (fruit wall).",
      },
      {
        q: "What are the advantages of cross-pollination?",
        a: "Advantages: genetic variation → better adaptability and evolution, new combinations of traits, stronger offspring (hybrid vigour/heterosis), ability to adapt to new environments, reduces harmful recessive trait expression. Disadvantage: wasteful (requires more pollen), depends on external agents.",
      },
      {
        q: "What is parthenocarpy?",
        a: "Parthenocarpy is the development of fruit without fertilisation (no seeds). Induced by application of plant hormones (auxin/gibberellin). Examples: banana, seedless grapes, seedless watermelon. Used commercially to produce seedless fruits for consumer preference.",
      },
      {
        q: "What is apomixis?",
        a: "Apomixis is the formation of seeds without fertilisation — asexual seed formation. Examples: Citrus, Mango (some varieties), dandelion. The embryo forms from: (1) the egg cell without fertilisation (parthenogenesis) or (2) the nucellus cells (adventive embryony). Advantage: preserves pure genotype.",
      },
      {
        q: "What is the significance of endosperm?",
        a: "Endosperm provides nutrition for the developing embryo. In monocots (maize, wheat, rice), endosperm persists in the seed and feeds the seedling after germination. In dicots (bean, pea), endosperm is consumed during seed development and stored as cotyledons. Coconut water = liquid endosperm.",
      },
    ],
  },
  // ── Class 12 English: Flamingo - My Mother at Sixty-Six ──────────────────
  {
    subject: "English",
    chapter: "My Mother at Sixty-Six",
    questions: [
      {
        q: "Who is the poet of 'My Mother at Sixty-Six'?",
        a: "The poem is written by Kamala Das (also known as Kamala Surayya), one of the most celebrated Indian English poets. She is known for her intense, personal, and confessional style.",
      },
      {
        q: "What is the central theme of 'My Mother at Sixty-Six'?",
        a: "The central theme is the fear of aging and the separation between mother and child through death. The poet watches her ageing mother and is overwhelmed by the fear that she will soon lose her. It also explores love, anxiety, helplessness, and the inevitable passage of time.",
      },
      {
        q: "What did the poet notice about her mother during the car journey?",
        a: "The poet noticed that her mother, dozing in the car, looked pale, wan, and corpse-like — 'her face ashen like that of a corpse'. She realised with a pang that her mother had grown very old and was near death.",
      },
      {
        q: "What is the significance of the phrase 'ashen like that of a corpse'?",
        a: "This simile directly compares the mother's face to that of a dead person. It highlights her extreme pallor, the loss of vitality, and the reality of old age approaching death. It is a stark, unsentimental image that conveys the poet's terror at the thought of losing her mother.",
      },
      {
        q: "What did the poet look at to ease her pain?",
        a: "To ease her anxiety and pain, the poet looked out of the car window and saw 'young trees sprinting' and 'merry children spilling out of their homes'. These images of youth, energy, and joy contrasted with her mother's ageing body — offering temporary distraction.",
      },
      {
        q: "What do the 'young trees sprinting' symbolise?",
        a: "The young trees sprinting symbolise youth, energy, and the vigour of life — the exact opposite of the aged, slow-moving mother. They represent the life force that the poet fears her mother is losing. The contrast between sprinting trees and the pale, still mother heightens the emotional impact.",
      },
      {
        q: "What was the poet's parting gesture at the airport?",
        a: "At the airport, the poet smiled and said 'see you soon, Amma' — but her smile was a mask. Internally, she was filled with the same childhood fear (she had first felt this fear as a child when she saw her mother's ageing). The smile was brave but hiding deep sorrow.",
      },
      {
        q: "What does the phrase 'smile and smile and smile' convey?",
        a: "The repetition of 'smile' suggests the effort required to maintain a cheerful facade despite inner grief. The poet keeps smiling to reassure her mother (and herself) even as she faces the painful reality that this parting could be the last. It conveys silent anguish and love.",
      },
      {
        q: "What is the structure of the poem?",
        a: "The poem is written in free verse (no regular rhyme scheme or fixed metre). It is written in a single continuous sentence — reflecting the flow of thought and memory. The language is simple but deeply emotional. No stanza breaks — mirroring unbroken anxiety.",
      },
      {
        q: "What childhood fear does the poet recall at the airport?",
        a: "The poet had felt a fear of losing her mother since childhood — a recurring dread. At the airport, despite being an adult, she feels that same 'familiar ache' from her childhood. This suggests the fear of parental loss is primal and does not diminish with age.",
      },
    ],
  },
];
