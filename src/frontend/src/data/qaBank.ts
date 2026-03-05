import { Category } from "../hooks/useQueries";
import { QA_BANK_CLASS10 } from "./qaBankClass10";
import { QA_BANK_CLASS12 } from "./qaBankClass12";

export interface QABankEntry {
  question: string;
  subject: string;
  answer: string;
  category: Category;
  chapter?: string;
}

export const QA_BANK: QABankEntry[] = [
  // Class 10 – Science
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is Newton's second law of motion?",
    answer:
      "Newton's second law states that the net force acting on an object equals its mass times its acceleration: F = ma. The SI unit of force is the Newton (N). If mass doubles at the same acceleration, the force required also doubles.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is photosynthesis?",
    answer:
      "Photosynthesis converts light energy into chemical energy (glucose) in chloroplasts. The overall equation is: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2. Light reactions in thylakoids produce ATP and NADPH; the Calvin cycle in the stroma fixes CO2 into glucose.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is Ohm's Law?",
    answer:
      "Ohm's Law: V = IR, where V is voltage in volts, I is current in amperes, and R is resistance in ohms. The current through a conductor is directly proportional to the voltage across it at constant temperature.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is the difference between acids and bases?",
    answer:
      "Acids release H+ ions in water and have pH below 7 (e.g., HCl, H2SO4 — taste sour). Bases release OH- ions in water and have pH above 7 (e.g., NaOH — taste bitter, feel slippery). Acids and bases neutralise each other: acid + base → salt + water.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "Explain heredity and Mendel's laws",
    answer:
      "Mendel's three laws: (1) Law of Dominance — dominant allele masks recessive in heterozygote; (2) Law of Segregation — allele pairs separate during gamete formation; (3) Law of Independent Assortment — different gene pairs segregate independently. He studied pea plants (Pisum sativum).",
  },
  // Class 10 – Mathematics
  {
    category: Category.Class10,
    subject: "Mathematics",
    question: "What is the Pythagorean theorem?",
    answer:
      "In any right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c². Example: sides 3 and 4 give hypotenuse 5. The converse is also true: if a² + b² = c², the angle between a and b is 90°.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    question: "What is an arithmetic progression?",
    answer:
      "An AP is a sequence where each term differs from the previous by a constant common difference d. General term: Tn = a + (n−1)d. Sum of n terms: Sn = (n/2)[2a + (n−1)d]. Example: 2, 5, 8, 11 has a = 2, d = 3.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    question: "What is the quadratic formula?",
    answer:
      "For ax² + bx + c = 0, roots are x = (−b ± √(b²−4ac)) / 2a. The discriminant D = b²−4ac: D > 0 gives two distinct real roots; D = 0 gives two equal real roots; D < 0 gives no real roots.",
  },
  // Class 12 – Physics
  {
    category: Category.Class12,
    subject: "Physics",
    question: "What is Coulomb's law?",
    answer:
      "The electrostatic force between two point charges is F = kq1q2/r², where k = 9×10⁹ N·m²/C². Like charges repel; unlike charges attract. The principle of superposition: total force on a charge equals the vector sum of individual forces.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    question: "What is electromagnetic induction?",
    answer:
      "A changing magnetic flux through a circuit induces an EMF. Faraday's law: EMF = −dΦ/dt. Lenz's law: the induced current opposes the change causing it. Applications: electric generators, transformers, and induction heating.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    question: "What is total internal reflection?",
    answer:
      "When light travels from a denser to a rarer medium at an angle greater than the critical angle, it is completely reflected. Critical angle θc = sin⁻¹(n2/n1). Applications: optical fibres, mirage, prisms in binoculars, sparkle of diamonds.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    question: "What is de Broglie hypothesis?",
    answer:
      "Louis de Broglie proposed that matter has wave properties: λ = h/mv = h/p, where h is Planck's constant (6.626×10⁻³⁴ J·s) and p is momentum. Confirmed by the Davisson–Germer electron diffraction experiment.",
  },
  // Class 12 – Chemistry
  {
    category: Category.Class12,
    subject: "Chemistry",
    question: "What is Raoult's law?",
    answer:
      "Raoult's law: the vapour pressure of a solvent in solution equals P° × mole fraction of solvent. This leads to colligative properties: vapour pressure lowering, boiling point elevation (ΔTb = Kb·m), and freezing point depression (ΔTf = Kf·m).",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    question: "What is SN1 vs SN2 reaction?",
    answer:
      "SN1: unimolecular, two-step (carbocation intermediate), gives racemisation, favoured by tertiary substrates and polar protic solvents. SN2: bimolecular, one-step backside attack, gives inversion of configuration (Walden inversion), favoured by primary substrates and polar aprotic solvents.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    question: "What is hybridization in chemistry?",
    answer:
      "sp3: tetrahedral, 109.5° (methane); sp2: trigonal planar, 120° (ethylene, benzene); sp: linear, 180° (acetylene, CO2). Hybridization is the mixing of atomic orbitals to form new hybrid orbitals and determines molecular geometry and bond angles.",
  },
  // Class 12 – Mathematics
  {
    category: Category.Class12,
    subject: "Mathematics",
    question: "What is integration by parts?",
    answer:
      "Integration by parts: ∫u dv = uv − ∫v du. Use the ILATE rule to choose u: Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential. Example: ∫x eˣ dx = xeˣ − eˣ + C.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    question: "What are basic differentiation rules?",
    answer:
      "Key rules: d/dx(xⁿ) = nxⁿ⁻¹; d/dx(eˣ) = eˣ; d/dx(ln x) = 1/x; d/dx(sin x) = cos x; d/dx(cos x) = −sin x; d/dx(tan x) = sec²x. Chain rule: d/dx[f(g(x))] = f′(g(x))·g′(x). Product rule: (uv)′ = u′v + uv′.",
  },
  {
    category: Category.Class12,
    subject: "Mathematics",
    question: "What is a matrix determinant?",
    answer:
      "A determinant is a scalar value from a square matrix. For 2×2: |a b; c d| = ad − bc. Properties: swapping rows changes sign; identical rows give det = 0; det(AB) = det(A)·det(B). Used in Cramer's rule and testing invertibility.",
  },
  // JEE – Physics
  {
    category: Category.JEE,
    subject: "Physics",
    question: "What is conservation of mechanical energy?",
    answer:
      "The total mechanical energy (KE + PE) remains constant in a system with only conservative forces. KE = ½mv²; PE = mgh near Earth; PE = −GMm/r universally. Example: a pendulum continuously converts KE to PE and back without loss (ignoring friction).",
  },
  {
    category: Category.JEE,
    subject: "Physics",
    question: "What is simple harmonic motion?",
    answer:
      "SHM: restoring force F = −kx proportional to displacement. Displacement: x = A sin(ωt + φ); ω = √(k/m); period T = 2π/ω. At mean position: KE is maximum. At extreme positions: KE = 0. Total energy E = ½kA² = constant.",
  },
  {
    category: Category.JEE,
    subject: "Physics",
    question: "What is the Doppler effect?",
    answer:
      "The Doppler effect is the change in observed frequency when source or observer is moving. Approaching source → higher frequency; receding → lower frequency. Used in RADAR, medical ultrasound, and astronomy (redshift for receding galaxies).",
  },
  // JEE – Chemistry
  {
    category: Category.JEE,
    subject: "Chemistry",
    question: "What is Le Chatelier's principle?",
    answer:
      "When an equilibrium system is disturbed, it shifts to partially counteract the disturbance. Increasing reactant concentration shifts forward; increasing pressure favours fewer moles of gas; increasing temperature favours the endothermic direction. Used to optimise industrial processes (e.g., Haber process).",
  },
  {
    category: Category.JEE,
    subject: "Chemistry",
    question: "What is Hess's Law?",
    answer:
      "Hess's Law: the total enthalpy change for a reaction is independent of the pathway. ΔH_rxn = ΣΔH_products − ΣΔH_reactants. Allows calculation of enthalpies of reactions difficult to measure directly using known standard enthalpies of formation.",
  },
  // JEE – Mathematics
  {
    category: Category.JEE,
    subject: "Mathematics",
    question: "What is the binomial theorem?",
    answer:
      "(a + b)ⁿ = Σ C(n,r) aⁿ⁻ʳ bʳ for r = 0 to n. General term: T_{r+1} = C(n,r) aⁿ⁻ʳ bʳ. Sum of all coefficients = 2ⁿ (set a = b = 1). Middle term for even n is T_{n/2+1}. Used for approximation and finding specific terms.",
  },
  {
    category: Category.JEE,
    subject: "Mathematics",
    question: "What is a limit in calculus?",
    answer:
      "lim_{x→a} f(x) = L means f(x) approaches L as x approaches a. L'Hôpital's rule for 0/0 or ∞/∞ forms: lim f/g = lim f′/g′. Standard limits: lim_{x→0} sin(x)/x = 1; lim_{x→0} (eˣ−1)/x = 1; lim_{x→∞} (1+1/x)ˣ = e.",
  },
  // NEET – Biology
  {
    category: Category.NEET,
    subject: "Biology",
    question: "What is the structure of DNA?",
    answer:
      "DNA is a right-handed double helix with two antiparallel strands. Sugar-phosphate backbone with inward-pointing nitrogenous bases. Base pairing: A–T (2 hydrogen bonds) and G–C (3 hydrogen bonds) — Chargaff's rules. Watson–Crick model (1953). One full turn = 10 base pairs = 3.4 nm.",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question: "What is the cell cycle?",
    answer:
      "Cell cycle: Interphase (G1 growth, S DNA replication, G2 preparation) and M phase (Prophase, Metaphase, Anaphase, Telophase, Cytokinesis). G1/S and G2/M checkpoints ensure proper progression. Duration varies by cell type.",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question: "What is the role of ATP in cells?",
    answer:
      "ATP (Adenosine Triphosphate) is the universal energy currency. Hydrolysis ATP → ADP + Pi releases ~30.5 kJ/mol. Produced in: glycolysis (2 ATP net), Krebs cycle (2 ATP), and oxidative phosphorylation (32–34 ATP via chemiosmosis). Total ~36–38 ATP per glucose in aerobic respiration.",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question: "What is meiosis?",
    answer:
      "Meiosis produces 4 haploid cells from one diploid cell. Meiosis I (reductional): homologous chromosomes separate; crossing over in Prophase I creates genetic recombination. Meiosis II (equational): sister chromatids separate. Result: 4 genetically unique haploid gametes.",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question: "What is Hardy-Weinberg equilibrium?",
    answer:
      "In a non-evolving population: p² + 2pq + q² = 1, where p and q are dominant and recessive allele frequencies. Conditions: large random-mating population with no mutation, migration, or selection. Deviations from equilibrium indicate evolution is occurring.",
  },
  // NEET – Chemistry
  {
    category: Category.NEET,
    subject: "Chemistry",
    question: "What is the Arrhenius equation?",
    answer:
      "k = A·e^(−Ea/RT), where k = rate constant, A = frequency factor, Ea = activation energy, R = 8.314 J/mol·K, T = temperature in Kelvin. Increasing temperature raises k exponentially. A 10°C rise approximately doubles reaction rate.",
  },
  {
    category: Category.NEET,
    subject: "Chemistry",
    question: "What is optical isomerism?",
    answer:
      "Optical isomers (enantiomers) are non-superimposable mirror images that rotate plane-polarised light in opposite directions. They arise when a molecule has a chiral centre (carbon bonded to four different groups). A racemic mixture is equimolar and optically inactive.",
  },
  // Class 10 – English
  {
    category: Category.Class10,
    subject: "English",
    question: "What is the theme of A Letter to God?",
    answer:
      "The central theme is unshakeable faith in God contrasted with distrust of humans. Lencho's faith is so strong he writes directly to God. The irony is that he blames the post office workers for taking part of the money, when actually they were the ones helping him out of generosity. The story highlights naive belief, dramatic irony, and the limits of human trust.",
  },
  {
    category: Category.Class10,
    subject: "English",
    question: "What does Nelson Mandela mean by 'twin obligations'?",
    answer:
      "In 'Long Walk to Freedom', Mandela says every man has twin obligations: (1) to his family — parents, wife, and children; and (2) to his people, his community, and his country. Under apartheid, a Black man could not fulfil both obligations simultaneously. Fulfilling one meant defying or being unable to fulfil the other. This is why Mandela dedicated his life to his people.",
  },
  {
    category: Category.Class10,
    subject: "English",
    question:
      "What is the significance of the dead cow in Madam Rides the Bus?",
    answer:
      "In 'Madam Rides the Bus', Valli sees an excited cow running alongside the bus on her forward journey. On the return trip, the same cow lies dead on the road, having been hit. This encounter suddenly makes Valli feel sad and transforms the joy of her adventure into a moment of awareness. The dead cow symbolises that life is fragile, joy is transient, and the transition from innocence to awareness — the end of carefree childhood.",
  },
  {
    category: Category.Class10,
    subject: "English",
    question: "What is the lesson taught in The Sermon at Benares?",
    answer:
      "The chapter is about the Buddha's compassionate response to Kisa Gotami, who was mad with grief after her son's death. The Buddha asked her to bring a mustard seed from a house where no one had ever died. She visited hundreds of homes and realised that death is universal. The teaching is: grief is natural, but one must not be consumed by it. Those who seek peace must pull out the arrow of grief and lamentation.",
  },
  // Class 10 – Social Science
  {
    category: Category.Class10,
    subject: "Social Science",
    question: "What was the Rowlatt Act and why did it cause unrest?",
    answer:
      "The Rowlatt Act (1919) allowed the British government to imprison any person suspected of terrorism without trial for up to 2 years. Gandhi called it a 'Black Act'. It caused widespread outrage because it denied basic civil liberties. It led to the Jallianwala Bagh Massacre (13 April 1919) where British troops under General Dyer fired on a peaceful crowd in Amritsar, killing hundreds.",
  },
  {
    category: Category.Class10,
    subject: "Social Science",
    question: "Why was the Non-Cooperation Movement withdrawn in 1922?",
    answer:
      "Gandhi called off the Non-Cooperation Movement in February 1922 after the Chauri Chaura incident in Gorakhpur (UP), where a mob of protesters attacked and burned a police station, killing 22 policemen. Gandhi believed that people were not ready for non-violent resistance and that violence would undermine the moral foundation of the movement. He suspended it unilaterally.",
  },
  {
    category: Category.Class10,
    subject: "Social Science",
    question: "What is soil erosion and how can it be prevented?",
    answer:
      "Soil erosion is the removal of the top layer of soil by water (sheet/rill/gully erosion) or wind. Prevention methods: (1) Terrace farming on slopes, (2) Strip cropping — alternate crops in strips, (3) Shelter belts — rows of trees to break wind, (4) Contour ploughing — ploughing along contour lines, (5) Check dams — small barriers to slow water flow, (6) Afforestation — planting trees. India loses millions of tonnes of topsoil annually.",
  },
  // Class 12 – English
  {
    category: Category.Class12,
    subject: "English",
    question: "What is the central theme of The Last Lesson?",
    answer:
      "The Last Lesson by Alphonse Daudet explores the theme that language is the expression of national identity and freedom. When the Prussians order French to be replaced by German in Alsatian schools, M. Hamel's final French lesson becomes a metaphor for cultural loss and patriotism. He says: 'French is the most beautiful language in the world'. The deeper message is about regret, procrastination, and the value of one's mother tongue.",
  },
  {
    category: Category.Class12,
    subject: "English",
    question: "What was the Champaran movement and what did Gandhi achieve?",
    answer:
      "The Champaran movement (1917) in Bihar was Gandhi's first Satyagraha in India. Indigo planters forced peasants to grow indigo on 3/20 (tinkathia) of their land and pay illegal compensation when synthetic dye made indigo worthless. Gandhi investigated, defied British orders to leave, and was summoned to court — but the masses rallied around him. A commission of inquiry was set up; planters refunded 25% of illegal payments. More importantly, it proved that civil disobedience could win, and peasants learnt to be fearless.",
  },
  // Class 12 – History
  {
    category: Category.Class12,
    subject: "History",
    question: "What is the Permanent Settlement and what were its effects?",
    answer:
      "The Permanent Settlement (1793) was introduced by Lord Cornwallis in Bengal, Bihar, and Orissa. Zamindars were recognised as owners of land with a fixed annual tax to the British. Effects: (1) Many zamindars who couldn't pay taxes lost land — sold at auction; (2) A new class of absentee landlords emerged; (3) Peasants lost rights and faced rack-renting; (4) The government also lost as prices rose but revenue stayed fixed. It led to commercialisation of agriculture and exploitation of peasants.",
  },
  {
    category: Category.Class12,
    subject: "History",
    question: "How was the Harappan script and what have we learnt from it?",
    answer:
      "The Harappan script (~2600 BCE) has around 400–500 signs and is written from right to left (boustrophedon). It remains undeciphered because: (1) there is no bilingual text (like the Rosetta Stone) to help decode it; (2) inscriptions are very short (mostly on seals). Despite this, from seals we know they traded with Mesopotamia, had standardised weights, and likely had a complex administrative system. The script tells us it was a literate, organised society.",
  },
  // Class 12 – Political Science
  {
    category: Category.Class12,
    subject: "Political Science",
    question: "How was the state of Hyderabad integrated into India?",
    answer:
      "Hyderabad's ruler Nizam Osman Ali Khan refused to join India, hoping to remain independent. The population was mostly Hindu but the ruler was Muslim. After negotiations failed and a Razakar (paramilitary Muslim force) threatened violence, Sardar Patel ordered the Indian Army (Operation Polo / Police Action, September 1948) to march into Hyderabad. The Nizam surrendered in 5 days. Hyderabad was integrated into India.",
  },
  {
    category: Category.Class12,
    subject: "Political Science",
    question: "What is non-alignment and why did Nehru adopt it?",
    answer:
      "Non-Alignment means not joining either superpower bloc (USA or USSR) during the Cold War. Nehru adopted it for India because: (1) To protect India's sovereignty and independence in foreign policy; (2) To gain aid from both blocs; (3) To focus resources on domestic development rather than defence alliances; (4) To act as a moral voice for peace in a bipolar world. India co-founded the Non-Aligned Movement (NAM) in 1961 along with Egypt (Nasser) and Yugoslavia (Tito).",
  },
  // ── Class 10 Science (additional) ─────────────────────────────────────────
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is a solenoid and what is its magnetic field?",
    answer:
      "A solenoid is a cylindrical coil of wire with many turns. When current passes through it, it produces a magnetic field similar to a bar magnet. The field inside is strong, uniform, and parallel to the axis. Magnetic field: B = μ₀nI, where n = number of turns per unit length, I = current, μ₀ = permeability of free space. One end acts like a North pole and the other like a South pole. Used in electric bells, relays, and MRI machines.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is Fleming's left-hand rule?",
    answer:
      "Fleming's Left-Hand Rule determines the direction of force on a current-carrying conductor placed in a magnetic field. Hold the left hand with the forefinger, middle finger, and thumb mutually perpendicular: Forefinger → direction of magnetic field (B); Middle finger → direction of current (I); Thumb → direction of motion (force F). This rule is used in electric motors where current-carrying coils rotate in a magnetic field.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is an electric motor and how does it work?",
    answer:
      "An electric motor converts electrical energy into mechanical energy. Working principle: a current-carrying conductor placed in a magnetic field experiences a force (Fleming's left-hand rule). Construction: rectangular coil (ABCD) placed between poles of a magnet, connected to a split-ring commutator and brushes. When current flows, opposite forces on AB and CD sides create a torque that rotates the coil. The commutator reverses current direction every half rotation to maintain continuous rotation.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is the nervous system and what is a reflex action?",
    answer:
      "The nervous system coordinates body functions. Parts: CNS (brain + spinal cord) and PNS (nerves). Brain: forebrain (intelligence, memory), midbrain (relay), hindbrain (cerebellum for balance, medulla for breathing/heartbeat). Reflex action: a quick, involuntary response to a stimulus that bypasses the brain. Pathway: Receptor → Sensory nerve → Spinal cord → Motor nerve → Effector (muscle/gland). Example: withdrawing hand from hot object. Advantages: faster response; protects body from injury.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What are hormones and which glands produce them?",
    answer:
      "Hormones are chemical messengers secreted by endocrine glands directly into the bloodstream. Key glands: (1) Pituitary gland (master gland): controls other glands; secretes growth hormone and ADH; (2) Thyroid: secretes thyroxine (regulates metabolism; needs iodine); (3) Pancreas: insulin (lowers blood sugar), glucagon (raises blood sugar); (4) Adrenal glands: adrenaline (fight-or-flight response; raises heartbeat, dilates pupils); (5) Gonads: testosterone (testes) and oestrogen (ovaries). Hormones work slower than nerve impulses but have long-lasting effects.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is binary fission in Amoeba?",
    answer:
      "Binary fission is a type of asexual reproduction where a single-celled organism divides into two equal daughter cells. In Amoeba: (1) The nucleus divides into two (karyokinesis); (2) The cytoplasm splits between the two nuclei (cytokinesis); (3) Two daughter Amoeba form. This occurs when conditions are favourable. Leishmania (causing Kala-azar) divides by binary fission but in a definite plane. Plasmodium (malaria parasite) undergoes multiple fission (many cells at once).",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What are biodegradable and non-biodegradable wastes?",
    answer:
      "Biodegradable waste: materials that can be broken down naturally by microorganisms. Examples: food waste, paper, wood, cotton, wool, leaves. Do NOT cause lasting environmental harm. Non-biodegradable waste: materials that cannot be broken down naturally. Examples: plastics, glass, metals, DDT, polythene. They persist in the environment for decades and can cause: (1) Soil and water pollution; (2) Bio-magnification — concentration increases as it moves up the food chain (DDT in fish → birds → humans); (3) Choking of drainage systems.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is the Human Eye and accommodation?",
    answer:
      "The human eye is a natural optical instrument. Parts: cornea (refracts most light), iris (controls light entry), lens (fine adjustment), retina (image forms here), optic nerve (sends signal to brain). Accommodation: the ability of the eye lens to adjust its focal length by changing curvature to focus near and far objects. Ciliary muscles control lens shape. Defects: Myopia (nearsightedness) — concave lens; Hypermetropia (farsightedness) — convex lens; Presbyopia (ageing) — bifocal lens; Astigmatism — cylindrical lens.",
  },
  {
    category: Category.Class10,
    subject: "Science",
    question: "What is Mendel's experiment and his laws of inheritance?",
    answer:
      "Gregor Mendel (Father of Genetics) experimented with pea plants (Pisum sativum) for 8 years. His laws: (1) Law of Dominance: when two contrasting traits cross, the dominant trait appears in F1 generation. (2) Law of Segregation: the two alleles for each trait separate during gamete formation (F2 shows 3:1 ratio). (3) Law of Independent Assortment: genes for different traits assort independently (dihybrid cross: 9:3:3:1 ratio). These laws form the foundation of genetics.",
  },
  // Class 10 Mathematics (additional)
  {
    category: Category.Class10,
    subject: "Mathematics",
    question: "What is the tangent-radius relationship in circles?",
    answer:
      "Key properties of tangents to a circle: (1) A tangent is perpendicular to the radius drawn to the point of tangency: OA ⊥ PA where O is centre, A is point of tangency, P is external point. (2) From an external point, two equal tangents can be drawn: PA = PB. (3) The angle between tangent and chord equals the inscribed angle in the alternate segment (Tangent-Chord angle theorem). (4) Length of tangent from external point: PT = √(d² − r²) where d = distance from centre, r = radius.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    question:
      "What are the formulas for surface area and volume of a sphere and cylinder?",
    answer:
      "Sphere (radius r): Curved Surface Area = Total Surface Area = 4πr²; Volume = (4/3)πr³. Cylinder (radius r, height h): Curved Surface Area = 2πrh; Total Surface Area = 2πr(h + r); Volume = πr²h. Cone (radius r, slant height l, height h): Curved Surface Area = πrl; Total Surface Area = πr(l + r); Volume = (1/3)πr²h. Combined solids: calculate each part separately then add/subtract. Important: l² = r² + h² for cone.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    question:
      "What are the distance formula and section formula in coordinate geometry?",
    answer:
      "Distance formula: Distance between two points A(x₁,y₁) and B(x₂,y₂) = √[(x₂−x₁)² + (y₂−y₁)²]. Midpoint formula: Midpoint M = [(x₁+x₂)/2, (y₁+y₂)/2]. Section formula (internal division): Point dividing AB in ratio m:n = [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]. Centroid of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃) = [(x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3]. Collinear points: Area of triangle formed = 0.",
  },
  {
    category: Category.Class10,
    subject: "Mathematics",
    question: "What are the key trigonometry values and identities?",
    answer:
      "Standard values: sin0°=0, sin30°=½, sin45°=1/√2, sin60°=√3/2, sin90°=1. cos values: reverse order. tan0°=0, tan30°=1/√3, tan45°=1, tan60°=√3, tan90°=undefined. Fundamental identities: sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ. Complementary angles: sin(90°−θ) = cosθ; tan(90°−θ) = cotθ; sec(90°−θ) = cosecθ. SOHCAHTOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.",
  },
  // Class 10 English (additional)
  {
    category: Category.Class10,
    subject: "English",
    question: "What are the themes in Two Stories About Flying?",
    answer:
      "Two Stories About Flying has two distinct stories: 1) 'His First Flight' (Liam O'Flaherty): A young seagull fears flying despite his siblings. His parents use hunger to force him — his mother dangles fish just out of reach; he dives instinctively and discovers flight. Theme: Overcoming fear, the first step is the hardest, encouragement leads to achievement. 2) 'Black Aeroplane' (Frederick Forsythe): A pilot in a storm is guided by a mysterious black aeroplane that later cannot be traced. Theme: The unknown and unexplained; reliance on unseen forces; the mystery of life.",
  },
  {
    category: Category.Class10,
    subject: "English",
    question: "Why did Anne Frank keep a diary?",
    answer:
      "Anne Frank kept a diary because she felt a deep sense of loneliness despite being surrounded by people. She says 'Paper is more patient than people' — writing helped her express feelings she couldn't share with others. She named her diary 'Kitty' and treated it as her best friend. Anne had acquaintances but no real friends she could confide in. She also wanted to leave a historical record of her experiences. Writing helped her process the trauma, fear, and hopes she experienced while hiding from the Nazis. The diary became one of the most read books in history.",
  },
  {
    category: Category.Class10,
    subject: "English",
    question: "What are the three stories in Glimpses of India?",
    answer:
      "Glimpses of India has three stories: 1) A Baker from Goa (Lucio Rodrigues): About the Portuguese tradition of bread making (pader/baker). The Goan baker (with his jhang jhang sound) is integral to every celebration. Theme: Nostalgia, tradition, culture. 2) Coorg (Lokesh Abrol): Describes the natural beauty, warrior spirit, and coffee plantations of Coorg (Kodagu), Karnataka. Kodava people are known for bravery. Theme: Nature, regional pride. 3) Tea from Assam (Arup Kumar Datta): Historical journey of tea discovery; Assam as world's biggest tea producer. Theme: Culture, diversity, history.",
  },
  {
    category: Category.Class10,
    subject: "English",
    question: "What is the story of Mijbil the Otter by Gavin Maxwell?",
    answer:
      "Mijbil the Otter (Gavin Maxwell) is about a Scottish naturalist who gets an otter as a pet in Iraq. Key events: Maxwell receives an otter he names Mijbil (Mij) — a Maxwell's otter species previously unknown to science. On the flight from Basra to London, Mij escapes from the box and causes panic but Maxwell puts him inside his shirt. In London, Mij is a novelty — a street sweeper calls him 'a miniature blood 'ound'. Mij invents his own games (marbles, ping-pong balls). Theme: Bond between humans and animals, freedom and play, the joy of the unexpected. Important vocabulary: lithe, ethereal, fastidious.",
  },
  // Class 10 Social Science (additional)
  {
    category: Category.Class10,
    subject: "Social Science",
    question: "What are the features of federalism in India?",
    answer:
      "Federalism divides power between the central government and state governments. India's federal features: (1) Written constitution with three lists — Union List (97 subjects), State List (66 subjects), Concurrent List (47 subjects); (2) Bicameral Parliament (Lok Sabha + Rajya Sabha); (3) Independent judiciary with Supreme Court; (4) Revenue sharing. India is quasi-federal (tilted toward Centre): single citizenship, emergency provisions (Articles 352, 356, 360), governors appointed by Centre, residuary powers with Centre. 73rd/74th Amendment (1992): created 3-tier local government (Panchayati Raj).",
  },
  {
    category: Category.Class10,
    subject: "Social Science",
    question:
      "What is the difference between overlapping and crosscutting social identities?",
    answer:
      "Overlapping social identities: When one social difference is reinforced by another, making conflict more likely. Example: If the poor are also Black, and the rich are also White, these identities overlap → dangerous social tension (like in Northern Ireland — Catholics vs Protestants also divide along class lines). Crosscutting social differences: Different social divisions cut across each other, making compromise easier. Example: In India, a person may be a Muslim (religion) but also rich (class) and educated — these differences crosscut and reduce polarisation. Democracy works better with crosscutting identities.",
  },
  {
    category: Category.Class10,
    subject: "Social Science",
    question: "What are the three sectors of the Indian economy?",
    answer:
      "Three sectors: (1) Primary sector: directly uses natural resources — agriculture, fishing, mining, forestry. Employs ~50% of India's workforce but contributes ~17% to GDP. Disguised unemployment is common. (2) Secondary sector: manufacturing — factories, construction, processing. Converts natural products. (3) Tertiary/Services sector: services that support the other two — banking, transport, education, health, IT. Contributes ~55% to India's GDP. Historical shift: India moved from primary-dominant to tertiary-dominant. Organised sector vs Unorganised sector: 90% of Indian workers are in the unorganised sector with no job security.",
  },
  {
    category: Category.Class10,
    subject: "Social Science",
    question:
      "What is the difference between formal and informal credit in India?",
    answer:
      "Formal credit: loans from banks, cooperative societies, and government institutions. Features: lower interest rates (10–15%), regulated by RBI, documented, collateral required for large amounts. Examples: State Bank of India, cooperative banks. Informal credit: loans from moneylenders, landlords, traders, relatives. Features: high interest rates (20–50% or more), no regulation, debt trap risk, often exploitative. Self-Help Groups (SHGs): groups of 15–20 women pool savings → take loans from the group → eventually get bank loans. SHGs reduce dependency on moneylenders and empower women economically. Based on Grameen Bank (Bangladesh) model.",
  },
  // Class 12 Physics (additional)
  {
    category: Category.Class12,
    subject: "Physics",
    question: "What is the lens maker's formula and how is it used?",
    answer:
      "Lens maker's formula: 1/f = (n−1)(1/R₁ − 1/R₂), where f = focal length, n = refractive index of lens material, R₁ and R₂ = radii of curvature of the two surfaces. A positive f = converging (convex) lens; negative f = diverging (concave). Mirror formula: 1/f = 1/v + 1/u. Lens formula: 1/v − 1/u = 1/f. For a prism, angle of minimum deviation Dm: n = sin[(A+Dm)/2]/sin(A/2). Power of lens P = 1/f (metres), measured in dioptres (D). Combination of lenses: P = P₁ + P₂ + P₃.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    question:
      "What is the difference between diamagnetic, paramagnetic, and ferromagnetic materials?",
    answer:
      "Diamagnetic: feebly repelled by magnets; no permanent dipoles; magnetic susceptibility χ small negative. Examples: bismuth, copper, gold, water. Paramagnetic: feebly attracted by magnets; have unpaired electrons; χ small positive; magnetism lost when field removed. Examples: aluminium, platinum, oxygen. Ferromagnetic: strongly attracted; form magnetic domains; retain magnetism after field removed. Examples: iron, cobalt, nickel. Curie temperature: above this temperature, ferromagnetic → paramagnetic. Earth's magnetic field: due to convection currents of molten iron in core; north pole is actually geographical south pole.",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    question: "What is nuclear fission and fusion?",
    answer:
      "Nuclear Fission: Heavy nucleus splits into smaller nuclei + neutrons + energy. Example: U-235 + n → Ba + Kr + 3n + energy (~200 MeV). Used in nuclear reactors and atomic bombs. Chain reaction: neutrons released cause further fissions. Controlled in reactors using control rods (boron absorbs neutrons). Nuclear Fusion: Light nuclei combine to form heavier nucleus + energy. Example: ²H + ³H → ⁴He + n + 17.6 MeV. Source of energy in the Sun (hydrogen fusion). More energy per unit mass than fission. Not yet practically achieved on Earth due to extreme temperature requirements (~10⁷ K). Binding energy per nucleon: maximum for iron-56 (most stable nucleus).",
  },
  {
    category: Category.Class12,
    subject: "Physics",
    question: "What is amplitude modulation and frequency modulation?",
    answer:
      "Modulation: the process of superimposing information (signal) on a carrier wave for transmission. Amplitude Modulation (AM): The amplitude of the carrier wave varies according to the signal, while frequency remains constant. Frequency range: 540 kHz to 1600 kHz. Uses: AM radio, medium range broadcasting. Disadvantages: noise susceptible; less audio quality. Frequency Modulation (FM): The frequency of the carrier wave varies according to the signal, while amplitude remains constant. Frequency range: 88 MHz to 108 MHz. Uses: FM radio, TV audio. Advantages: better sound quality; less noise; higher fidelity.",
  },
  // Class 12 Chemistry (additional)
  {
    category: Category.Class12,
    subject: "Chemistry",
    question: "What is adsorption and how does it differ from absorption?",
    answer:
      "Adsorption: process where molecules of a gas or solute (adsorbate) accumulate on the surface of a solid (adsorbent). It is a surface phenomenon. Types: (1) Physisorption (physical): weak Van der Waals forces; low heat of adsorption; reversible. (2) Chemisorption (chemical): strong covalent bonds; high heat of adsorption; irreversible. Absorption: a substance is uniformly distributed throughout the bulk of another substance (e.g., water absorbed by sponge). Freundlich adsorption isotherm: x/m = kP^(1/n). Applications: water purification, dehumidifiers, chromatography, catalysis.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    question: "What is Tollens' test and Fehling's test?",
    answer:
      "Both tests detect the presence of aldehydes (reducing sugars). Tollens' Test (Silver Mirror Test): Reagent = ammoniacal silver nitrate [Ag(NH₃)₂]⁺. Aldehyde reduces Ag⁺ to metallic silver → silver mirror on test tube wall. RCHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ → RCOO⁻ + 2Ag↓ + 4NH₃ + H₂O. Aldehydes give positive test; ketones do NOT. Fehling's Test: Reagent = Fehling's solution (blue; Cu²⁺). Aldehyde reduces Cu²⁺ to Cu₂O (brick-red precipitate). Aliphatic aldehydes give positive test; aromatic aldehydes (benzaldehyde) and ketones do NOT. Both tests used to distinguish aldehydes from ketones.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    question: "What are carboxylic acids and their reactions?",
    answer:
      "Carboxylic acids (R-COOH): contain the carboxyl group. Properties: acidic (pH 2–4 for strong ones); pKa ~4–5; stronger than phenol but weaker than mineral acids. Strength: HCOOH > CH₃COOH (electron-withdrawing groups increase acidity). Key reactions: (1) Esterification: R-COOH + R'-OH → R-COOR' + H₂O (Fischer esterification with H₂SO₄ catalyst); (2) Acylation: with SOCl₂ → acid chloride; (3) Reduction (LiAlH₄): RCOOH → RCH₂OH; (4) Decarboxylation (heating with soda lime): RCOOH → RH + CO₂. Preparation: oxidation of primary alcohols/aldehydes; Grignard + CO₂; hydrolysis of nitriles.",
  },
  {
    category: Category.Class12,
    subject: "Chemistry",
    question: "What is electrolytic refining and the thermite process?",
    answer:
      "Electrolytic Refining: Used to purify metals like copper, silver, gold. Impure metal = anode, pure metal = cathode, metal salt solution = electrolyte. During electrolysis: anode dissolves (impure metal oxidised), cathode deposits (pure metal deposited). Impurities fall below anode as 'anode mud'. Thermite Process: Reduction of metal oxide by aluminium powder. Reaction: Fe₂O₃ + 2Al → Al₂O₃ + 2Fe + heat (highly exothermic). Used for welding railway tracks in situ. Principle: Al is more reactive than Fe and displaces it. The reaction generates extremely high temperatures (~3000°C) that melt iron to fill gaps in railway tracks.",
  },
  // Class 12 Biology (additional)
  {
    category: Category.Class12,
    subject: "Biology",
    question: "What are Mendel's laws of inheritance?",
    answer:
      "Gregor Mendel (1866) studied pea plants and proposed three laws: (1) Law of Dominance: In a cross between pure dominant (TT) and recessive (tt), F1 shows only dominant trait (Tt). (2) Law of Segregation (Law of Purity of Gametes): The two alleles for a trait separate during gamete formation. F2 shows 3:1 phenotypic ratio. Genotypic ratio: 1TT:2Tt:1tt. (3) Law of Independent Assortment: Genes for different traits assort independently. Dihybrid cross gives 9:3:3:1 ratio. Exceptions: Incomplete dominance (snapdragon — pink F1), Co-dominance (ABO blood groups), and Linkage (genes on same chromosome — violates law 3).",
  },
  {
    category: Category.Class12,
    subject: "Biology",
    question:
      "What is recombinant DNA technology and how is insulin produced using it?",
    answer:
      "Recombinant DNA (rDNA) technology: insertion of a foreign gene into a host organism to produce a desired protein. Steps: (1) Isolate desired DNA (human insulin gene); (2) Cut DNA with restriction enzymes (EcoRI, BamHI) creating sticky ends; (3) Insert into a vector (plasmid) using DNA ligase; (4) Introduce recombinant plasmid into host (E. coli); (5) Select recombinant colonies and culture; (6) Extract and purify protein. Insulin production (Humulin): human insulin gene (A and B chains) cloned into E. coli separately → chains extracted and combined → functional insulin. First GM product approved for human use (1982). Eliminated need to extract insulin from animals.",
  },
  {
    category: Category.Class12,
    subject: "Biology",
    question: "What is the 10% law of energy transfer in ecosystems?",
    answer:
      "The 10% Law (Lindeman's Law, 1942): Only 10% of energy from one trophic level is transferred to the next higher trophic level. The remaining 90% is lost as heat during cellular respiration, movement, and other metabolic processes. Example: If producers (grass) contain 1000 kcal, then: Herbivores (first consumers) get 100 kcal; Carnivores (second consumers) get 10 kcal; Top predators get 1 kcal. Implications: (1) Food chains are generally limited to 3-4 levels; (2) Eating lower in the food chain is more energy-efficient; (3) Pyramids of energy are always upright. This law is the basis of ecological pyramids.",
  },
  {
    category: Category.Class12,
    subject: "Biology",
    question: "What are biodiversity hotspots and how are they defined?",
    answer:
      "Biodiversity hotspot: a region with exceptionally high species richness, endemism, and facing significant threat from human activity. Criteria (Norman Myers): (1) Must have at least 1500 species of endemic vascular plants (plants found nowhere else); (2) Must have lost at least 70% of its original habitat. There are 36 recognised hotspots globally. India's hotspots: (1) Western Ghats + Sri Lanka: high endemism, coffee and tea plantations, lion-tailed macaque; (2) Indo-Burma region (NE India): high diversity of bamboo, freshwater turtles. Importance: protect maximum diversity with minimum area. Conservation: establish protected areas and biosphere reserves.",
  },
  // JEE Physics (additional)
  {
    category: Category.JEE,
    subject: "Physics",
    question: "What is moment of inertia and how is it calculated?",
    answer:
      "Moment of inertia (I) is the rotational analogue of mass; it measures resistance to angular acceleration. I = Σmᵢrᵢ² (sum of mass × square of distance from axis). Standard values: Solid sphere: 2/5 MR²; Ring: MR² (about diameter: MR²/2); Solid cylinder/disc: MR²/2; Hollow cylinder: MR². Theorems: (1) Parallel axis theorem: I = Icm + Md² (d = distance from CM axis to new axis); (2) Perpendicular axis theorem (planar body): Iz = Ix + Iy. Torque: τ = Iα (analogous to F = ma). Rotational KE = ½Iω². Angular momentum: L = Iω (conserved when τ = 0).",
  },
  {
    category: Category.JEE,
    subject: "Physics",
    question: "What is Bernoulli's theorem and its applications?",
    answer:
      "Bernoulli's theorem: For incompressible, non-viscous fluid in steady flow: P + ½ρv² + ρgh = constant (along a streamline). This represents conservation of energy per unit volume: pressure energy + kinetic energy + potential energy = constant. Consequences: where velocity is high, pressure is low. Applications: (1) Venturimeter: measures fluid velocity using pressure difference; (2) Aircraft wings (aerofoil): higher speed above wing → lower pressure → lift; (3) Bunsen burner: gas flow creates low pressure that sucks in air; (4) Atomizer/sprayer; (5) Spinning ball (Magnus effect). Continuity equation: A₁v₁ = A₂v₂ (conservation of mass for incompressible fluid).",
  },
  {
    category: Category.JEE,
    subject: "Physics",
    question: "What is the Carnot engine and what is its efficiency?",
    answer:
      "Carnot engine: an ideal heat engine operating between two heat reservoirs (T₁ = source/hot reservoir, T₂ = sink/cold reservoir). It operates in a cycle of two isothermal and two adiabatic processes. Carnot efficiency: η = 1 − T₂/T₁ = (T₁ − T₂)/T₁ (temperatures in Kelvin). This is the maximum possible efficiency for any heat engine operating between these temperatures. To increase efficiency: raise source temperature T₁ or lower sink temperature T₂. Carnot theorem: No real engine can be more efficient than a Carnot engine operating between the same temperatures. Coefficient of Performance (COP) for refrigerator: COP = T₂/(T₁ − T₂).",
  },
  // JEE Mathematics (additional)
  {
    category: Category.JEE,
    subject: "Mathematics",
    question: "What is the AM-GM inequality and how is it used?",
    answer:
      "AM-GM Inequality: Arithmetic Mean ≥ Geometric Mean (equality when all terms are equal). For two terms a, b: (a+b)/2 ≥ √(ab). For n terms: (a₁+a₂+...+aₙ)/n ≥ (a₁·a₂·...·aₙ)^(1/n). Applications: (1) Finding minimum value: If a + b = constant k, then ab is maximum when a = b = k/2. (2) Finding maximum value: If ab = constant, then a + b is minimum when a = b. Example: x + 1/x ≥ 2 for x > 0 (minimum 2, at x = 1). JEE uses AM-GM to find extrema of expressions without calculus, prove inequalities, and solve optimisation problems.",
  },
  {
    category: Category.JEE,
    subject: "Mathematics",
    question: "What is conditional probability and Bayes' theorem?",
    answer:
      "Conditional probability: P(A|B) = P(A∩B)/P(B) — probability of A given B has occurred. Multiplication rule: P(A∩B) = P(A)P(B|A) = P(B)P(A|B). Total probability theorem: If B₁, B₂, ..., Bₙ are mutually exclusive and exhaustive: P(A) = Σ P(Bᵢ)P(A|Bᵢ). Bayes' theorem: P(Bᵢ|A) = [P(Bᵢ)P(A|Bᵢ)] / [Σ P(Bⱼ)P(A|Bⱼ)]. Classic application: Disease testing — P(disease|positive test) using sensitivity and specificity. JEE problems: defective items from two machines, colour balls in bags, switching boxes. P(Bᵢ) = prior probability; P(Bᵢ|A) = posterior probability.",
  },
  // NEET Biology (additional)
  {
    category: Category.NEET,
    subject: "Biology",
    question: "What are the key features of Phylum Arthropoda?",
    answer:
      "Phylum Arthropoda is the largest phylum in Animal Kingdom with over 80% of all known animal species. Key features: (1) Exoskeleton made of chitin; (2) Jointed appendages (arthro = joint, poda = foot); (3) Segmented body; (4) Open circulatory system (blood in haemocoel); (5) Compound eyes in most. Classes: (1) Insecta: 3 pairs legs, wings; Cockroach (Periplaneta), Butterfly; (2) Crustacea: 2 pairs antennae, marine; Prawn, Crab; (3) Arachnida: 4 pairs legs, no antennae; Spider, Scorpion; (4) Myriapoda: many legs; Centipede (poisonous), Millipede. Importance: ecological role (pollination, decomposition, pest control).",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question:
      "What is the difference between monocots and dicots in morphology?",
    answer:
      "Monocotyledons (monocots) vs Dicotyledons (dicots): Number of cotyledons: 1 vs 2. Venation: Parallel (maize, grass, wheat) vs Reticulate/Net (mango, pea, neem). Root system: Fibrous (adventitious) vs Taproot. Stem vascular bundles: Scattered throughout vs In a ring. Floral parts: In multiples of 3 vs In multiples of 4 or 5. Seed germination: cotyledon above (epigeal in most) vs hypogeal or epigeal. Examples of monocots: Wheat, Rice, Sugarcane, Maize, Grass, Onion. Examples of dicots: Tomato, Rose, Sunflower, Pea, Bean, Mango, Neem. Key NEET question: Identify monocot/dicot from cross-section of stem or leaf.",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question:
      "What happens during the absorption of digested food in the small intestine?",
    answer:
      "Absorption of digested food occurs mainly in the ileum (part of small intestine). Structural adaptations: villi (finger-like projections, ~1 cm high) and microvilli (brush border on each villus) — together increase surface area to ~200 m². Each villus contains: blood capillaries (for glucose, amino acids, water-soluble vitamins) and lacteal (lymph vessel, for fats). Absorption mechanisms: (1) Glucose and amino acids: active transport (requires ATP and sodium cotransport) → enter blood capillaries → hepatic portal vein → liver; (2) Fats: absorbed as micelles → enter lacteals as chylomicrons → lymphatic system → blood; (3) Water and minerals: mostly in large intestine. Liver processes all absorbed nutrients.",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question:
      "What are the organs of the male reproductive system and their functions?",
    answer:
      "Male Reproductive System: (1) Testes (2): produce sperm (spermatogenesis at 2°C below body temp) and testosterone (male sex hormone). Located in scrotum. (2) Epididymis: C-shaped tube on testes; site of sperm maturation and storage. (3) Vas deferens: carries sperm from epididymis to urethra. (4) Seminal vesicles: secrete fructose-rich fluid (60% of semen volume) for sperm nutrition. (5) Prostate gland: secretes alkaline fluid that neutralises vaginal acidity. (6) Bulbourethral (Cowper's) glands: lubrication. (7) Urethra: common pathway for urine and semen. (8) Penis: organ of copulation. Semen = sperm + seminal fluid. FSH and LH (from pituitary) control spermatogenesis and testosterone production.",
  },
  {
    category: Category.NEET,
    subject: "Biology",
    question: "What is Darwin's theory of evolution and natural selection?",
    answer:
      "Darwin's Theory (1859, 'On the Origin of Species'): Theory of Natural Selection. Key observations: (1) All organisms overproduce offspring (more than can survive); (2) Populations remain constant — struggle for existence; (3) Variation exists within species; (4) Some variations are heritable; (5) Individuals with favourable variations survive and reproduce (survival of the fittest). Mechanism: environment 'selects' favourable traits → these are passed to offspring → gradual change over generations → new species. Evidence: Fossil record, Homologous organs (same structure, different function — forelimbs of whale/bat/human), Analogous organs (different structure, same function — wings of birds and insects), Biogeography. Hardy-Weinberg principle: allele frequencies constant in non-evolving population.",
  },
  ...QA_BANK_CLASS10,
  ...QA_BANK_CLASS12,
];
