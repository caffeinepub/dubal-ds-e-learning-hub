// ── Topic-based AI Smart Notes ────────────────────────────────────────────────
// Used by the AI Help "Ask Any Topic" feature
// Keys are lowercase keywords/phrases; values are detailed smart note answers

export interface TopicAnswer {
  title: string;
  subject: string;
  category: string;
  answer: string;
}

export const TOPIC_ANSWERS: Record<string, TopicAnswer> = {
  // ── Class 10 Mathematics ──────────────────────────────────────────────────
  "real numbers": {
    title: "Real Numbers",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Real Numbers include all rational and irrational numbers.\n\nFundamental Theorem of Arithmetic: Every composite number is a unique product of primes.\n\nEuclid's Division Lemma: a = bq + r (0 ≤ r < b).\n\nHCF by Euclid's algorithm; LCM × HCF = product of two numbers.\n\nIrrational numbers (√2, π, e) have non-terminating, non-repeating decimal expansions.\nRational numbers: terminating or repeating decimals.",
  },
  polynomials: {
    title: "Polynomials",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "A polynomial of degree n has at most n zeros.\n\nFor quadratic ax² + bx + c:\n• Sum of zeros α+β = -b/a\n• Product of zeros αβ = c/a\n\nFor cubic ax³+bx²+cx+d:\n• Sum of zeros = -b/a\n• Sum of product of pairs = c/a\n• Product = -d/a\n\nDivision algorithm: p(x) = g(x)·q(x) + r(x)\nZeros of polynomial = x-intercepts of its graph.",
  },
  "quadratic equations": {
    title: "Quadratic Equations",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Quadratic equation: ax² + bx + c = 0 (a ≠ 0)\n\nMethods: Factorisation, Completing the Square, Quadratic Formula.\n\nQuadratic formula: x = [−b ± √(b²−4ac)] / 2a\n\nDiscriminant D = b²−4ac:\n• D > 0 → 2 distinct real roots\n• D = 0 → 2 equal real roots\n• D < 0 → No real roots",
  },
  "arithmetic progressions": {
    title: "Arithmetic Progressions",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "AP: sequence with constant common difference d.\n\nGeneral term: aₙ = a + (n−1)d\n\nSum of n terms: Sₙ = n/2 [2a + (n−1)d] = n/2 [a + l]\n\nwhere a = first term, d = common difference, l = last term.\n\nSums: 1+2+3+...+n = n(n+1)/2",
  },
  triangles: {
    title: "Triangles",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Similar triangles: same shape, different size; corresponding angles equal, sides proportional.\n\nBasic Proportionality Theorem (Thales): A line || to one side divides other two sides proportionally.\n\nSimilarity criteria: AA, SAS, SSS.\n\nArea ratio = square of ratio of corresponding sides.\n\nPythagoras: c² = a² + b² (and its converse).",
  },
  // ── Class 10 Science ──────────────────────────────────────────────────────
  "chemical reactions": {
    title: "Chemical Reactions and Equations",
    subject: "Science",
    category: "Class 10",
    answer:
      "Types of reactions:\n• Combination: A + B → AB (exothermic)\n• Decomposition: AB → A + B (endothermic)\n• Displacement: A + BC → AC + B\n• Double Displacement: AB + CD → AD + CB\n• Redox: simultaneous oxidation and reduction\n\nExothermic: release heat. Endothermic: absorb heat.\nCorrosion and rancidity are slow oxidation.",
  },
  "acids bases": {
    title: "Acids, Bases and Salts",
    subject: "Science",
    category: "Class 10",
    answer:
      "Acids: release H⁺ ions, pH < 7, taste sour (HCl, H₂SO₄).\nBases: release OH⁻ ions, pH > 7, taste bitter (NaOH, KOH).\n\npH scale: 0–14. Neutral pH = 7.\n\nNeutralisation: acid + base → salt + water\n\nIndicators: litmus (red in acid, blue in base), phenolphthalein, methyl orange.\n\nStrong acid + strong base → neutral salt. Weak acid + strong base → basic salt.",
  },
  "life processes": {
    title: "Life Processes",
    subject: "Science",
    category: "Class 10",
    answer:
      "Life processes: nutrition, respiration, transportation, excretion.\n\nNutrition: Autotrophs (photosynthesis) vs Heterotrophs.\n\nRespiration:\n• Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP\n• Anaerobic: glucose → lactic acid (muscles) or ethanol + CO₂ (yeast)\n\nCirculation: Double circulation; 4-chambered heart.\nExcretion: Kidneys; nephron is basic structural unit.",
  },
  electricity: {
    title: "Electricity",
    subject: "Science",
    category: "Class 10",
    answer:
      "I = Q/t (current in Amperes).\n\nOhm's Law: V = IR.\n\nResistance R = ρL/A.\n\nSeries: R_total = R₁+R₂ (same current).\nParallel: 1/R = 1/R₁ + 1/R₂ (same voltage).\n\nPower: P = VI = I²R = V²/R.\n\n1 kWh = 3.6×10⁶ J.\n\nJoule's Law: H = I²Rt (heating effect).",
  },
  "light reflection refraction": {
    title: "Light – Reflection and Refraction",
    subject: "Science",
    category: "Class 10",
    answer:
      "Reflection: angle of incidence = angle of reflection.\n\nMirrors:\n• Concave: converging; used in headlights, shaving mirrors\n• Convex: diverging; rear-view mirrors\n• Mirror formula: 1/v + 1/u = 1/f; m = −v/u\n\nRefraction (Snell's Law): n₁sinθ₁ = n₂sinθ₂\nn = c/v (refractive index)\n\nLens formula: 1/v − 1/u = 1/f\nPower P = 1/f (dioptres D)",
  },
  // ── Class 10 English ──────────────────────────────────────────────────────
  "letter to god": {
    title: "A Letter to God",
    subject: "English",
    category: "Class 10",
    answer:
      "A Letter to God (G.L. Fuentes):\n\nLencho, a farmer, loses his crop to hail. With absolute faith, he writes to God asking for 100 pesos. Post office workers collect 70 pesos and send it. Lencho suspects the 'post office people' stole 30 pesos.\n\nIrony: His faith in God is unquestioning; his trust in people (who helped him) is absent.\n\nThemes: Faith, irony, generosity vs suspicion.\n\nBoard focus: Character of Lencho; moral of the story; dramatic irony.",
  },
  "nelson mandela": {
    title: "Nelson Mandela – Long Walk to Freedom",
    subject: "English",
    category: "Class 10",
    answer:
      "Nelson Mandela: Long Walk to Freedom describes his inauguration as South Africa's first Black President (1994).\n\nApartheid: racial segregation system oppressing Black South Africans for decades.\n\nMandela's twin obligations: to family, and to his people.\n\n'The greatest wealth of a nation is its people.'\n\nCourage theme: ordinary men becoming extraordinary.\n\nBoard focus: What are twin obligations? What does hunger for freedom mean?",
  },
  "madam rides bus": {
    title: "Madam Rides the Bus",
    subject: "English",
    category: "Class 10",
    answer:
      "Madam Rides the Bus (Vallikkannan):\n\nValli, an 8-year-old girl, saves money and plans a solo bus journey to town. She calls herself 'madam'. Enjoys everything — canal, fields, the town.\n\nReturn journey: sees the dead cow (excited on forward trip) — suddenly feels sad.\n\nDead cow symbolises: death is real; joy is fleeting; transition from innocence to experience.\n\nThemes: Childhood curiosity, independence, awareness of mortality.",
  },
  // ── Class 10 Social Science ───────────────────────────────────────────────
  "nationalism in india": {
    title: "Nationalism in India",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Nationalism in India:\n\n• Rowlatt Act (1919) → Jallianwala Bagh Massacre\n• Non-Cooperation Movement (1920): boycotts of schools, courts, foreign cloth\n• Khilafat Movement: Hindu-Muslim unity\n• Civil Disobedience (1930): Dandi March (Salt March) — 240 miles on foot\n• Withdrew Non-Cooperation after Chauri Chaura incident (1922)\n\nGandhi's methods: Satyagraha (truth force), non-violence.\n\nBoard focus: Why was Non-Cooperation called off? Significance of Salt March.",
  },
  "rise of nationalism europe": {
    title: "Rise of Nationalism in Europe",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Rise of Nationalism in Europe:\n\n• French Revolution (1789): Liberty, equality, fraternity; national identity\n• Napoleon spread revolutionary ideas; also caused counter-nationalism\n• Congress of Vienna (1815): tried to restore old order (Metternich)\n• German unification: Bismarck — 'blood and iron' (1871)\n• Italian unification: Garibaldi + Cavour\n\nRomantic nationalism: Grimm brothers; folk songs; landscapes.\nPlebiscite: direct vote by people.\n\nBoard focus: Zollverein; why were women excluded from liberal nationalism.",
  },
  "water resources": {
    title: "Water Resources",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Water Resources:\n\nFresh water = 2.5% of Earth's water; only 0.007% accessible.\n\nMultipurpose Dams: Bhakra Nangal, Hirakud, Nagarjuna Sagar.\nBenefits: irrigation, hydroelectricity, flood control.\nProblems: displacement, silting, loss of forests.\n\nTraditional Harvesting:\n• Tanks (Tamil Nadu), Kunds (Rajasthan), Johads, Bamboo drip (Meghalaya)\n\nCauses of water scarcity: over-exploitation, pollution, urbanisation.",
  },
  "resources development": {
    title: "Resources and Development",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Resources and Development:\n\nResource types: Biotic/Abiotic; Renewable/Non-renewable; Individual/Community/National/International.\n\nSoil types in India:\n• Alluvial (most fertile — Ganga plain)\n• Black (Deccan, cotton)\n• Red/Yellow (iron oxide)\n• Laterite (high rainfall, tea/coffee)\n• Arid (desert)\n• Forest (mountain slopes)\n\nSoil conservation: Terrace farming, strip cropping, shelter belts, contour ploughing.",
  },
  // ── Class 12 Physics ──────────────────────────────────────────────────────
  "electric charges fields": {
    title: "Electric Charges and Fields",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Coulomb's law: F = kq₁q₂/r² (k = 9×10⁹ N·m²/C²)\n\nElectric field E = F/q₀ = kQ/r² (vector).\n\nGauss's law: Φ = q_enc/ε₀.\n\nField lines: start at +, end at −; never cross; dense lines = strong field.\n\nConductors: zero field inside; charge resides on surface.",
  },
  "current electricity": {
    title: "Current Electricity",
    subject: "Physics",
    category: "Class 12",
    answer:
      "I = dQ/dt; Ohm's law: V = IR.\n\nKirchhoff's Laws:\n• KCL: sum of currents at junction = 0\n• KVL: sum of EMFs = sum of voltage drops\n\nWheatstone bridge: R₁/R₂ = R₃/R₄ (balanced).\n\nPotentiometer: compares EMFs without drawing current.\n\nInternal resistance: V = E − Ir.",
  },
  "electromagnetic induction": {
    title: "Electromagnetic Induction",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Faraday's law: EMF = −dΦ/dt.\n\nLenz's law: induced current opposes the cause.\n\nMotional EMF = Blv.\n\nSelf-inductance L: EMF = −L dI/dt; Energy = ½LI²\n\nTransformer: V₁/V₂ = N₁/N₂ = I₂/I₁\n\nAC generator converts mechanical to electrical energy.",
  },
  "dual nature radiation": {
    title: "Dual Nature of Radiation and Matter",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Photoelectric effect: electrons emitted when ν ≥ threshold frequency ν₀.\n\nEinstein: KE_max = hν − φ (work function φ = hν₀).\n\nKey points:\n• KE_max depends on frequency, NOT intensity\n• Intensity determines number of electrons\n• Below threshold, no photoelectrons regardless of intensity\n\nde Broglie: λ = h/mv = h/p (matter waves).\n\nDavisson-Germer experiment confirmed matter waves.",
  },
  // ── Class 12 Chemistry ────────────────────────────────────────────────────
  "solid state": {
    title: "The Solid State",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Crystalline solids: definite geometry, sharp melting point (NaCl, diamond).\nAmorphous solids: no long-range order (glass, rubber).\n\nUnit cells:\n• Simple cubic: 1 atom, 52.4%\n• BCC: 2 atoms, 68%\n• FCC: 4 atoms, 74%\n\nDefects:\n• Schottky: missing ions, reduces density\n• Frenkel: ion in interstitial, unchanged density\n\nSemiconductors: n-type (P, As); p-type (B, Al).",
  },
  electrochemistry: {
    title: "Electrochemistry",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Galvanic cell: chemical → electrical energy.\nElectrolytic cell: electrical → chemical energy.\n\nCell EMF = E°cathode − E°anode\n\nNernst equation: E = E° − (0.0592/n)log Q at 25°C\n\nFaraday's laws:\n1. Mass ∝ charge passed\n2. Same charge → equivalent masses of different substances\n1 Faraday = 96500 C/mol\n\nKohlrausch's law: Λ°m = Σλ°cations + Σλ°anions",
  },
  "chemical kinetics": {
    title: "Chemical Kinetics",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Rate = k[A]ⁿ[B]ᵐ (order = n+m, found experimentally).\n\nIntegrated rate laws:\n• Zero order: t½ = [R]₀/2k\n• First order: t½ = 0.693/k\n\nArrhenius equation: k = Ae^(−Ea/RT)\n\nEffects:\n• Temperature ↑ → rate ↑ (doubles per 10°C)\n• Catalyst: lowers activation energy Ea",
  },
  // ── Class 12 English ──────────────────────────────────────────────────────
  "the last lesson": {
    title: "The Last Lesson",
    subject: "English",
    category: "Class 12",
    answer:
      "The Last Lesson (Alphonse Daudet):\n\nSetting: Alsace after Prussian victory; French banned, German to be taught.\n\nFranz: regrets not learning French; M. Hamel's last day as French teacher.\n\n'French is the most beautiful language in the world.'\n'When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison.'\n\nThemes: Language = national identity, freedom; regret; value of mother tongue.\n\nBoard focus: Why did M. Hamel feel guilty? What is the symbolism of M. Hamel's clothes?",
  },
  "lost spring": {
    title: "Lost Spring",
    subject: "English",
    category: "Class 12",
    answer:
      "Lost Spring (Anees Jung) — Two stories:\n\n1. Saheb-e-Alam (Seemapuri, Delhi): Rag-picker from Bangladesh; dreams of school; ends up working in a tea stall.\n\n2. Mukesh (Firozabad): Bangle-makers; whole families trapped in hazardous glass blowing work; cycle of poverty maintained by sahukars, police, bureaucrats.\n\nMukesh's dream: to be a motor mechanic (represents possibility of breaking the cycle).\n\nThemes: Child labour, poverty trap, dreams vs reality, exploitation.\n\nBoard focus: What is the vicious cycle of Firozabad? What is the 'lost spring' metaphor?",
  },
  indigo: {
    title: "Indigo",
    subject: "English",
    category: "Class 12",
    answer:
      "Indigo (Louis Fischer):\n\nChamparan movement (1917) — Gandhi's first Satyagraha in India.\n\nTinkathia system: peasants forced to grow indigo on 3/20 of land; later forced to pay illegal compensation.\n\nGandhi: investigated conditions, defied order to leave, mass support intimidated British, commission formed, 25% refund achieved.\n\nSignificance: First successful Satyagraha; proved civil resistance works; peasants became fearless.\n\nBoard focus: What is tinkathia? How was Champaran a turning point?",
  },
  // ── Class 12 History ──────────────────────────────────────────────────────
  "harappan civilisation": {
    title: "The Harappan Civilisation",
    subject: "History",
    category: "Class 12",
    answer:
      "Harappan Civilisation (2600–1900 BCE):\n\nUrban planning: Citadel (upper) + Lower Town; covered drainage; standardised bricks (1:2:4).\n\nGreat Bath (Mohenjodaro): possibly ritual bathing.\n\nTrade: Standardised weights; seals found in Mesopotamia.\n\nArt: Bronze Dancing Girl; steatite seals; beads.\n\nScript: 400–500 signs, right-to-left, undeciphered.\n\nDecline (~1800 BCE): climate change, aridity, flood (theories debated).",
  },
  "permanent settlement": {
    title: "Permanent Settlement and Colonial India",
    subject: "History",
    category: "Class 12",
    answer:
      "Permanent Settlement (1793, Cornwallis):\n\nZamindars recognised as owners; fixed tax to British; peasants became tenants.\n\nProblems: Zamindars couldn't collect from peasants → debt → land auction → new landlord class.\n\nRyotwari System (Bombay Deccan): Peasants taxed directly; high demands → 1875 Deccan Riots (peasants attacked moneylenders).\n\nColonialism disrupted traditional agriculture and created cycles of debt.",
  },
  "gandhi nationalist": {
    title: "Gandhi and the Nationalist Movement",
    subject: "History",
    category: "Class 12",
    answer:
      "Gandhi transformed Congress from elite to mass organisation.\n\nKey movements:\n• Champaran (1917), Kheda (1918), Ahmedabad (1918) mill strike\n• Non-Cooperation (1920–22): boycott schools, courts, foreign cloth\n• Civil Disobedience (1930): Salt March\n• Quit India (1942): 'Do or Die'\n\nGandhi-Irwin Pact (1931).\n\nVisions for India:\n• Gandhi: Gram Swaraj (village self-rule)\n• Nehru: Modern industrial state\n• Ambedkar: Annihilation of caste\n\nBoard focus: How did Gandhi transform the movement? Significance of Dandi March.",
  },
  // ── Class 12 Political Science ────────────────────────────────────────────
  "nation building india": {
    title: "Challenges of Nation Building",
    subject: "Political Science",
    category: "Class 12",
    answer:
      "Three challenges at Independence:\n1. Shaping a unified nation from diverse groups\n2. Establishing democracy\n3. Development and well-being\n\nPartition: 12–15 million displaced; massive communal violence.\n\nPrincely States integration: 565 states; Hyderabad — Operation Polo (1948); Kashmir — accession after Pakistani invasion.\n\nSardar Patel: 'Iron Man of India'.\n\nStates Reorganisation Commission (1953–56) → linguistic states.\n\nBoard focus: How was Hyderabad integrated? Why were linguistic states created?",
  },
  "non alignment": {
    title: "Non-Alignment Policy",
    subject: "Political Science",
    category: "Class 12",
    answer:
      "Non-Alignment: India did not join the US or USSR blocs during the Cold War.\n\nReasons:\n• Protect sovereignty and independent foreign policy\n• Gain aid from both blocs\n• Focus on domestic development\n• Act as a moral voice for peace\n\nNAM (Non-Aligned Movement) founded 1961: India (Nehru), Egypt (Nasser), Yugoslavia (Tito).\n\nBoard focus: Is non-alignment still relevant? How did it benefit India?",
  },
  "one party dominance": {
    title: "Era of One Party Dominance",
    subject: "Political Science",
    category: "Class 12",
    answer:
      "Congress dominated Indian politics (1952–1967) through three general elections.\n\nReasons:\n• Umbrella organisation — included all ideological groups\n• Nehru's charisma and prestige of independence movement\n• No strong opposition\n\nOpposition parties:\n• CPI: won Kerala 1957\n• Jana Sangh (Hindu nationalist)\n• Swatantra Party (free-market)\n• PSP (socialists)\n\nSocialist Pattern of Society: mixed economy, Five Year Plans, non-alignment.\n\nBoard focus: Was one-party dominance a threat to democracy?",
  },
  // ── Class 10 History ──────────────────────────────────────────────────────
  "nationalism europe history": {
    title: "Rise of Nationalism in Europe",
    subject: "History",
    category: "Class 10",
    answer:
      "Rise of Nationalism in Europe:\n\n• French Revolution (1789): Liberty, equality, fraternity; national identity forged\n• Napoleon spread revolutionary ideas; also caused counter-nationalism\n• Congress of Vienna (1815): Metternich tried to restore old order\n• German unification: Bismarck — 'blood and iron' (1871)\n• Italian unification: Garibaldi + Cavour\n\nRomantic nationalism: Grimm brothers; folk songs; landscapes.\nPlebiscite: direct vote by people.\n\nBoard focus: Zollverein; why were women excluded from liberal nationalism?",
  },
  "age of industrialisation": {
    title: "The Age of Industrialisation",
    subject: "History",
    category: "Class 10",
    answer:
      "The Age of Industrialisation:\n\nBritain:\n• Proto-industrialisation: putting-out system in rural areas before factories\n• Spinning jenny, steam engine (Watt, 1781)\n• Hand labour still preferred for delicate/seasonal work\n\nIndia:\n• Dacca muslin, Calico prints — famous globally before colonialism\n• British machine cloth flooded India → Indian weavers lost livelihoods\n• Indian mills started by Dwarkanath Tagore, Dinshaw Petit (1850s)\n• Swadeshi movement → boost for Indian industry\n\nKey terms: Jobber (recruits labour), Staple product, Manchester = cotton hub.\n\nBoard focus: Why did British prefer hand labour? Impact of colonialism on Indian weavers.",
  },
  "making of global world": {
    title: "The Making of a Global World",
    subject: "History",
    category: "Class 10",
    answer:
      "The Making of a Global World:\n\nPre-modern: Silk routes, spice trade, spread of diseases (plague via trade).\n\n19th century globalisation:\n• Food trade, Suez Canal (1869), railways\n• 3 flows: trade, labour migration, capital\n• Indenture system: Indian/Chinese labourers taken to Caribbean/Mauritius as contract labourers\n\nInterwar:\n• Great Depression (1929): US stock crash → global unemployment\n• Protective tariffs, trade collapse\n\nBretton Woods (1944): IMF + World Bank created.\n\nBoard focus: Impact of Great Depression on India; role of trade in globalisation.",
  },
  "print culture": {
    title: "Print Culture and the Modern World",
    subject: "History",
    category: "Class 10",
    answer:
      "Print Culture and the Modern World:\n\n• Gutenberg's printing press (Europe, 1440s): made books affordable\n• Protestant Reformation: Luther's 95 Theses printed and spread widely\n• Vernacular languages gained prestige\n\nIndia:\n• First printing press in Goa (Portuguese, 16th century)\n• Bal Gangadhar Tilak's Kesari, Amrit Bazar Patrika spread nationalism\n\nRole in freedom struggle:\n• Print united nationalists; spread Gandhi's ideas\n• British used press laws and sedition to suppress newspapers\n\nBoard focus: How did print culture change society? Role of newspapers in freedom movement.",
  },
  // ── Class 10 Geography ────────────────────────────────────────────────────
  "forest wildlife resources": {
    title: "Forest and Wildlife Resources",
    subject: "Geography",
    category: "Class 10",
    answer:
      "Forest and Wildlife Resources:\n\nBiodiversity: India has 8% of world's biodiversity.\n\nSpecies types:\n• Endangered: tigers, Indian rhinoceros\n• Vulnerable: Asiatic elephant, blue sheep\n• Rare: Himalayan brown bear\n• Extinct: Asiatic cheetah\n\nForest types: Reserved (most protected), Protected, Unclassed.\n\nConservation:\n• Joint Forest Management (JFM): communities + government\n• Project Tiger (1973)\n• Chipko Movement: tree-hugging to prevent felling\n\nBoard focus: Role of local communities; reasons for biodiversity loss.",
  },
  "agriculture india": {
    title: "Agriculture",
    subject: "Geography",
    category: "Class 10",
    answer:
      "Agriculture:\n\nTypes: Subsistence, Commercial, Plantation farming.\n\nMajor crops:\n• Rice: East/NE India (high rainfall)\n• Wheat: NW India (cool, dry winters)\n• Sugarcane: Uttar Pradesh (largest producer)\n• Cotton: Deccan Plateau (black soil)\n• Jute: West Bengal\n\nGreen Revolution:\n• HYV seeds + fertilisers + irrigation\n• Punjab, Haryana most benefited\n• Increased production but regional inequality\n\nChallenges: Fragmented holdings, monsoon dependence, soil degradation.",
  },
  "minerals energy": {
    title: "Minerals and Energy Resources",
    subject: "Geography",
    category: "Class 10",
    answer:
      "Minerals and Energy Resources:\n\nIron ore: Jharkhand, Odisha, Chhattisgarh, Karnataka.\nCoal: Jharia, Raniganj (Damodar Valley).\nPetroleum: Mumbai High (65%), Assam, Gujarat.\nMica: Jharkhand, Bihar (largest producer).\nCopper: Khetri (Rajasthan).\n\nEnergy resources:\n• Conventional: thermal (coal), hydro (rivers)\n• Non-conventional: solar (Rajasthan highest potential), wind (Tamil Nadu, Gujarat)\n\nConservation: Use alternatives; recycle metals; reduce waste.\n\nBoard focus: Distinguish metallic from non-metallic minerals.",
  },
  // ── Class 10 Political Science ────────────────────────────────────────────
  "power sharing": {
    title: "Power Sharing",
    subject: "Political Science",
    category: "Class 10",
    answer:
      "Power Sharing:\n\nBelgium vs Sri Lanka:\n• Belgium: Equal representation for Dutch/French; avoided conflict; 'Belgian model'\n• Sri Lanka: Sinhala Only Act (1956) alienated Tamils → civil war\n\nWhy share power?\n• Prudential: reduces conflict, stable government\n• Moral: citizens have right to participate\n\nForms of power sharing:\n1. Among organs (legislature, executive, judiciary)\n2. Among levels (central, state, local — federalism)\n3. Among social groups (community government)\n4. Among parties and pressure groups\n\nBoard focus: What lessons does Belgium teach us about power sharing?",
  },
  federalism: {
    title: "Federalism",
    subject: "Political Science",
    category: "Class 10",
    answer:
      "Federalism:\n\nDivision of power between Centre and states.\n\nIndia's federal features:\n• Written constitution, three lists (Union, State, Concurrent)\n• Bicameral Parliament\n• Independent judiciary\n\nUnitary features (quasi-federal):\n• Single citizenship\n• Emergency provisions\n• Governors appointed by Centre\n\nDecentralisation (73rd/74th Amendment, 1992):\n• 3-tier Panchayati Raj: Gram Panchayat, Panchayat Samiti, Zila Parishad\n• 1/3 seats reserved for women\n• Gram Sabha: all voters of a village\n\nBoard focus: Why is India called quasi-federal?",
  },
  "political parties": {
    title: "Political Parties",
    subject: "Political Science",
    category: "Class 10",
    answer:
      "Political Parties:\n\nDefinition: Organised group seeking power through elections with shared ideology.\n\nFunctions: Contest elections, form government, play opposition, shape opinion, recruit leaders.\n\nNational parties: INC, BJP, BSP, CPI, NCP.\n\nProblems:\n• Money and criminal power\n• No internal democracy\n• Dynasticism\n\nReforms:\n• Election Commission: model code of conduct\n• Anti-defection law\n• Disclosure of candidates' criminal records and wealth\n\nBoard focus: Why do we need parties? What reforms are needed?",
  },
  // ── Class 10 Economics ────────────────────────────────────────────────────
  development: {
    title: "Development",
    subject: "Economics",
    category: "Class 10",
    answer:
      "Development:\n\nDevelopment = qualitative improvement in people's lives.\n\nHDI (Human Development Index): combines income, education, health.\n• Used by UNDP.\n• India: Medium HDI.\n\nNational Development goals: higher per capita income + better HDI.\n\nSustainable Development: meeting present needs without compromising future generations.\n\nPer capita income = total income / population — World Bank standard but incomplete measure (ignores distribution and non-income factors).\n\nBoard focus: Why is per capita income an inadequate measure?",
  },
  "money credit": {
    title: "Money and Credit",
    subject: "Economics",
    category: "Class 10",
    answer:
      "Money and Credit:\n\nBarter: double coincidence of wants problem.\nMoney: medium of exchange, unit of account, store of value.\n\nCredit terms: interest rate, collateral, documentation, repayment.\n\nFormal credit: banks, cooperatives — regulated, cheap, safe.\nInformal credit: moneylenders, landlords — expensive, unregulated, debt trap risk.\n\nSHGs (Self-Help Groups): 15-20 members pool savings; Grameen Bank model; empower women.\n\nRBI: supervises all banks; controls money supply.\n\nBoard focus: Why is formal credit better? What is a debt trap?",
  },
  "consumer rights": {
    title: "Consumer Rights",
    subject: "Economics",
    category: "Class 10",
    answer:
      "Consumer Rights:\n\n6 consumer rights: safety, information, choice, be heard, redress, education.\n\nConsumer Protection Act 1986 (COPRA):\n• District Forum (up to ₹1 crore)\n• State Commission (up to ₹10 crore)\n• National Commission (above ₹10 crore)\n\nQuality marks:\n• ISI: Bureau of Indian Standards\n• AGMARK: agricultural products\n• Hallmark: jewellery gold purity\n\nBoard focus: What is COPRA? Why do consumers need to organise?",
  },
  globalisation: {
    title: "Globalisation and the Indian Economy",
    subject: "Economics",
    category: "Class 10",
    answer:
      "Globalisation:\n\nFactors: improved technology, liberalisation, WTO.\n\nMNCs (Multinational Companies): operate in multiple countries; use cheap labour.\n\nImpact on India:\n• Positive: FDI, jobs, technology, IT growth, consumer choice\n• Negative: local businesses lose to MNCs, informal workers insecure\n\nFair globalisation: rules must be fair to developing countries; workers' organisations can push for fairness.\n\nBoard focus: Role of WTO; who gains and who loses from globalisation?",
  },
  // ── Class 12 Physics ──────────────────────────────────────────────────────
  "electrostatic potential capacitance": {
    title: "Electrostatic Potential and Capacitance",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Electrostatic Potential V = W/q₀ (Volt).\n\nPotential due to point charge: V = kq/r\n\nCapacitor C = Q/V (Farads).\n• Parallel plate: C = ε₀A/d\n• Energy stored: U = ½CV²\n• Dielectric constant K increases capacitance\n\nSeries: 1/C = 1/C₁ + 1/C₂\nParallel: C = C₁ + C₂\n\nEquipotential surfaces: always perpendicular to field lines.",
  },
  "moving charges magnetism": {
    title: "Moving Charges and Magnetism",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Magnetic force: F = qv×B = qvB sinθ.\n\nBiot-Savart law: dB = μ₀I dl sinθ / (4πr²).\n\nField inside solenoid: B = μ₀nI.\n\nTorque on current loop: τ = BINA sinθ.\n\nAmpere's law: ∮B·dl = μ₀I_enclosed.\n\nGalvanometer → Ammeter (shunt in parallel).\nGalvanometer → Voltmeter (high resistance in series).",
  },
  "alternating current": {
    title: "Alternating Current",
    subject: "Physics",
    category: "Class 12",
    answer:
      "AC: V = V₀ sin(ωt); I_rms = I₀/√2; V_rms = V₀/√2.\n\nReactances:\n• Inductor: X_L = ωL (V leads I)\n• Capacitor: X_C = 1/ωC (I leads V)\n• LCR series: Z = √(R² + (X_L - X_C)²)\n\nResonance: ω₀ = 1/√(LC); Z = R at resonance.\n\nPower: P = V_rms I_rms cos φ; power factor cos φ = R/Z.\n\nTransformer: V₁/V₂ = N₁/N₂ = I₂/I₁.",
  },
  "electromagnetic waves": {
    title: "Electromagnetic Waves",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Maxwell: changing E-field creates B-field (displacement current).\n\nEM waves: transverse; E and B perpendicular to direction of propagation.\nSpeed: c = 3×10⁸ m/s in vacuum.\n\nEM Spectrum (increasing frequency):\nRadio < Microwave < IR < Visible < UV < X-ray < Gamma.\n\nApplications:\n• Microwave: cooking, radar\n• IR: remote controls, thermal imaging\n• UV: sterilisation\n• X-ray: medical imaging\n• Gamma: cancer treatment",
  },
  "wave optics": {
    title: "Wave Optics",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Huygens' principle: every point on wavefront is source of secondary wavelets.\n\nYoung's Double Slit (YDSE):\n• Fringe width β = λD/d\n• Bright: Δ = nλ (constructive)\n• Dark: Δ = (2n-1)λ/2 (destructive)\n\nDiffraction: single slit; central max; minima at a sinθ = nλ.\n\nPolarisation: light is transverse.\n• Malus's law: I = I₀ cos²θ\n• Brewster's angle: tan θ_B = n",
  },
  "atoms bohr": {
    title: "Atoms",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Rutherford model: nucleus at centre; mostly empty space.\n\nBohr's model:\n• Electrons in stable orbits; angular momentum = nħ\n• Orbital radius rₙ = 0.529n² Å\n• Energy Eₙ = -13.6/n² eV\n\nSpectral series:\n• Lyman (UV): n→1\n• Balmer (visible): n→2\n• Paschen (IR): n→3\n\nBoard focus: Calculate wavelength of emitted photon using energy difference.",
  },
  "semiconductor electronics": {
    title: "Semiconductor Electronics",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Band gap: conductor (overlapping), semiconductor (~1 eV), insulator (>3 eV).\n\nn-type: doped with P/As (extra electrons).\np-type: doped with B/Al (holes).\n\np-n junction: depletion layer; barrier voltage ~0.7V (Si).\n\nForward bias → conducts; Reverse bias → blocks.\n\nRectifier:\n• Half-wave: 1 diode\n• Full-wave: 4 diodes (bridge)\n\nTransistor: NPN/PNP; amplifier and switch.",
  },
  // ── Class 12 Chemistry ────────────────────────────────────────────────────
  "solutions chemistry": {
    title: "Solutions",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Solutions:\n\nConcentration: molarity M, molality m, mole fraction χ.\n\nRaoult's law: p_A = χ_A × p°_A.\n\nColligative properties:\n• Boiling point elevation: ΔTb = Kb × m\n• Freezing point depression: ΔTf = Kf × m (anti-freeze!)\n• Osmotic pressure: π = CRT\n\nVan't Hoff factor i: for electrolytes i > 1 (dissociation); for association i < 1.\n\nBoard focus: Calculate ΔTf or ΔTb using given data.",
  },
  "p block elements": {
    title: "The p-Block Elements",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "p-Block elements: Groups 13–18.\n\nGroup 15 (N, P): +3 and +5 oxidation states; ammonia (NH₃), nitric acid (HNO₃).\nGroup 16 (O, S): O shows -2 only; S shows +2, +4, +6; H₂SO₄ via Contact Process.\nGroup 17 Halogens: most reactive non-metals; F most electronegative.\nGroup 18 Noble gases: zero valency; used in bulbs, balloons.\n\nImportant: HF weak acid (strong H-bonds); bleaching powder = Ca(OCl)Cl.",
  },
  "biomolecules chemistry": {
    title: "Biomolecules",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Carbohydrates: C(H₂O)n\n• Monosaccharides: glucose, fructose\n• Disaccharides: sucrose (glucose+fructose), lactose (glucose+galactose)\n• Polysaccharides: starch (plant energy), cellulose (plant structure), glycogen (animal energy)\n\nProteins: amino acid polymers joined by peptide bonds.\n• Structure: primary → secondary (α-helix, β-sheet) → tertiary → quaternary\n• Denaturation: disruption of 3D structure\n\nEnzymes: proteins as biological catalysts; substrate-specific.\n\nNucleic acids (DNA, RNA): store genetic information; nucleotide = sugar + phosphate + base.",
  },
  // ── Class 12 Mathematics ──────────────────────────────────────────────────
  "relations functions": {
    title: "Relations and Functions",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Relations: subset of A × B.\nTypes: reflexive, symmetric, transitive, equivalence.\n\nFunctions:\n• One-one (injective): f(a) = f(b) → a = b\n• Onto (surjective): range = codomain\n• Bijective: one-one + onto → invertible\n\nComposition: (gof)(x) = g(f(x))\nInverse: f⁻¹ exists only if f is bijective.\n\nBinary operations: closure, commutativity, associativity, identity, inverse.",
  },
  matrices: {
    title: "Matrices",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Matrix: m × n rectangular array.\n\nTypes: square, diagonal, identity (I), zero, symmetric (A = Aᵀ), skew-symmetric (A = -Aᵀ).\n\nMultiplication: A(m×n) × B(n×p) = C(m×p); NOT commutative.\n\nInverse: A⁻¹ = adj(A)/|A| (only if |A| ≠ 0).\n\nSolving equations: AX = B → X = A⁻¹B.",
  },
  determinants: {
    title: "Determinants",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Determinant: scalar from square matrix.\n2×2: ad - bc.\n3×3: expand by cofactors.\n\nProperties:\n• Swap rows → sign changes\n• Identical rows → det = 0\n• det(AB) = det(A) × det(B)\n\nAdj(A): transpose of cofactor matrix.\nCramer's Rule: x = Dx/D, y = Dy/D, z = Dz/D.\n\nD ≠ 0: unique solution. D = 0 and all D_i = 0: infinite or no solution.",
  },
  "continuity differentiability": {
    title: "Continuity and Differentiability",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Continuity at x=a: lim f(x) = f(a).\n\nDifferentiability: f'(x) = lim [f(x+h)-f(x)]/h as h→0.\nDifferentiable → continuous (converse not always true).\n\nRolle's theorem: f continuous on [a,b], differentiable on (a,b), f(a)=f(b) → ∃c: f'(c)=0.\nMVT: ∃c ∈ (a,b): f'(c) = [f(b)-f(a)]/(b-a).\n\nChain rule: d/dx[f(g(x))] = f'(g(x)) × g'(x).\nLogarithmic differentiation: for y = f(x)^g(x).",
  },
  "application derivatives": {
    title: "Application of Derivatives",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Applications:\n\n1. Rate of change: dy/dx\n2. Increasing/decreasing: f'(x) > 0 → increasing; f'(x) < 0 → decreasing\n3. Tangent: slope = f'(x); normal: slope = -1/f'(x)\n4. Maxima/Minima:\n   • f'(x) = 0 (critical point)\n   • Second derivative test: f''<0 → max; f''>0 → min\n5. Approximation: Δy ≈ f'(x)Δx\n\nBoard tip: Check endpoints for absolute max/min on closed intervals.",
  },
  integrals: {
    title: "Integrals",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Standard integrals:\n• ∫xⁿ = xⁿ⁺¹/(n+1)+C\n• ∫eˣ = eˣ+C\n• ∫(1/x) = ln|x|+C\n• ∫sin x = -cos x+C\n• ∫cos x = sin x+C\n\nMethods:\n1. Substitution: t = g(x)\n2. Integration by parts: ∫u dv = uv - ∫v du (ILATE)\n3. Partial fractions: P(x)/Q(x)\n\nDefinite integral: ∫_a^b f(x)dx = F(b) - F(a) = area under curve.",
  },
  "differential equations": {
    title: "Differential Equations",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Types of DE:\n• Variable separable: f(x)dx = g(y)dy → integrate both sides\n• Homogeneous: substitute y = vx\n• Linear first order: dy/dx + Py = Q\n  Integrating factor: IF = e^∫P dx\n  Solution: y × IF = ∫Q × IF dx + C\n\nApplications:\n• Population: dP/dt = kP → P = P₀eᵏᵗ\n• Decay: dN/dt = -λN → N = N₀e⁻λᵗ",
  },
  "vector algebra": {
    title: "Vector Algebra",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Vectors: magnitude + direction.\n\nDot product: a·b = |a||b|cosθ = a₁b₁+a₂b₂+a₃b₃ (scalar).\nCross product: |a×b| = |a||b|sinθ (vector, perpendicular to both).\n\nArea of parallelogram = |a×b|.\nArea of triangle = ½|a×b|.\n\nScalar triple product [a b c] = a·(b×c) = volume of parallelepiped.\n[a b c] = 0 → coplanar vectors.",
  },
  "3d geometry": {
    title: "Three Dimensional Geometry",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Direction cosines l, m, n: l² + m² + n² = 1.\n\nLine equation:\n• Cartesian: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c\n• Vector: r = a + λb\n\nPlane: ax + by + cz + d = 0.\nDistance point to plane: |ax₁+by₁+cz₁+d| / √(a²+b²+c²).\n\nAngle between lines: cosθ = |l₁l₂+m₁m₂+n₁n₂|.",
  },
  "probability class 12": {
    title: "Probability (Class 12)",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Conditional probability: P(A|B) = P(A∩B)/P(B).\n\nBayes' theorem: P(Aᵢ|A) = [P(Aᵢ)P(A|Aᵢ)] / ΣP(Aⱼ)P(A|Aⱼ).\n\nTotal probability: P(A) = ΣP(Aᵢ)P(A|Aᵢ).\n\nBinomial distribution B(n,p):\n• P(X=r) = C(n,r)pʳ(1-p)^(n-r)\n• Mean = np; Variance = np(1-p).\n\nBoard focus: Bayes' theorem problems (disease testing, defective items) are very common.",
  },
  // ── JEE Topics ─────────────────────────────────────────────────────────────
  "complex numbers": {
    title: "Complex Numbers",
    subject: "Mathematics",
    category: "JEE",
    answer:
      "z = a + ib; |z| = √(a²+b²); arg θ = tan⁻¹(b/a)\n\nPolar form: z = r(cosθ + i sinθ) = re^(iθ)\n\nDe Moivre's: (cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ)\n\nCube roots of unity: 1, ω, ω²\n• 1 + ω + ω² = 0; ω³ = 1\n\nConjugate: z̄ = a − ib; |z|² = z·z̄",
  },
  "binomial theorem": {
    title: "Binomial Theorem",
    subject: "Mathematics",
    category: "JEE",
    answer:
      "(a+b)ⁿ = Σ C(n,r) aⁿ⁻ʳ bʳ (r = 0 to n)\n\nGeneral term: T_{r+1} = C(n,r) aⁿ⁻ʳ bʳ\n\nSum of coefficients = 2ⁿ\nOdd-position sum = Even-position sum = 2ⁿ⁻¹\n\nMiddle term:\n• Even n: T_{n/2+1}\n• Odd n: T_{(n+1)/2} and T_{(n+3)/2}\n\nC(n,r) = n!/[r!(n-r)!]",
  },
  // ── NEET Topics ────────────────────────────────────────────────────────────
  photosynthesis: {
    title: "Photosynthesis in Higher Plants",
    subject: "Biology",
    category: "NEET",
    answer:
      "Overall: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light required)\n\nLight reactions (thylakoid):\n• Photolysis: 2H₂O → 4H⁺ + 4e⁻ + O₂\n• ATP and NADPH produced\n• PS I (P700) and PS II (P680)\n\nCalvin cycle (stroma):\n• CO₂ fixed by RuBisCO\n• Uses 3 ATP + 2 NADPH per CO₂\n\nC₃ plants (PGA first): rice, wheat\nC₄ plants (OAA first; no photorespiration): maize, sugarcane\nCAM plants: cacti, stomata open at night",
  },
  "cell division": {
    title: "Cell Cycle and Division",
    subject: "Biology",
    category: "NEET",
    answer:
      "Cell cycle: Interphase (G1, S, G2) + M phase.\n\nMitosis: produces 2 identical diploid daughter cells.\nPhases: Prophase → Metaphase → Anaphase → Telophase → Cytokinesis.\n\nMeiosis: produces 4 haploid cells; crossing over in Prophase I → genetic variation.\nMeiosis I: reductional (homologs separate).\nMeiosis II: equational (chromatids separate).\n\nCheckpoints: G1/S and G2/M ensure proper progression.",
  },
  "molecular basis inheritance": {
    title: "Molecular Basis of Inheritance",
    subject: "Biology",
    category: "NEET",
    answer:
      "DNA: double helix; A-T (2 H-bonds), G-C (3 H-bonds); Chargaff's rules.\n\nReplication: semiconservative (Meselson-Stahl).\nDNA polymerase: 5′→3′; leading (continuous) and lagging (Okazaki fragments) strands.\n\nTranscription: DNA → mRNA by RNA polymerase.\n\nTranslation: mRNA → protein at ribosomes.\n\nGenetic code:\n• 64 codons total\n• 61 sense codons (amino acids)\n• 3 stop codons (UAA, UAG, UGA)\n• AUG = start codon (methionine)",
  },
  // ── Class 12 Biology (additional) ────────────────────────────────────────
  "reproduction in organisms": {
    title: "Reproduction in Organisms",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Reproduction: Process by which organisms produce offspring.\n\nAsexual Reproduction:\n• Binary fission (Amoeba, bacteria)\n• Budding (Hydra, Yeast)\n• Fragmentation (Planaria, Spirogyra)\n• Regeneration (Planaria, Starfish)\n• Vegetative propagation (plants)\n\nSexual Reproduction:\n• Involves formation and fusion of gametes (haploid cells)\n• Produces genetically diverse offspring\n• Steps: pre-fertilisation (gametogenesis, gamete transfer) → fertilisation → post-fertilisation\n\nAdvantages of sexual reproduction: genetic variation, better adaptability, evolutionary significance.",
  },
  "sexual reproduction flowering plants": {
    title: "Sexual Reproduction in Flowering Plants",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Sexual Reproduction in Flowering Plants:\n\nFlower parts:\n• Stamen (male): anther (pollen) + filament\n• Pistil/Carpel (female): stigma, style, ovary\n\nPollination:\n• Self-pollination: same flower/plant\n• Cross-pollination: wind (anemophily), insects (entomophily), water (hydrophily)\n\nDouble Fertilisation (unique to angiosperms):\n• One male gamete + egg cell → zygote (2n) → embryo\n• Other male gamete + 2 polar nuclei → primary endosperm nucleus (3n) → endosperm\n\nResult: Ovule → seed; Ovary → fruit\n\nBoard focus: Explain double fertilisation; pollination vs fertilisation.",
  },
  "human reproduction": {
    title: "Human Reproduction",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Human Reproduction:\n\nMale system: Testes (sperm + testosterone), epididymis (storage), vas deferens, seminal vesicles, prostate, penis.\n\nSpermatogenesis: Spermatogonium (2n) → Primary spermatocyte → Secondary spermatocyte → Spermatid → Sperm (n)\n\nFemale system: Ovaries (ova + hormones), fallopian tubes (site of fertilisation), uterus (implantation), vagina.\n\nMenstrual Cycle (~28 days):\n• Day 1–5: Menstruation\n• Day 6–13: Follicular phase (oestrogen ↑)\n• Day 14: Ovulation (LH surge)\n• Day 15–28: Luteal phase (progesterone)\n\nFertilisation in fallopian tube → zygote → blastocyst → implants in uterus",
  },
  "principles of inheritance": {
    title: "Principles of Inheritance and Variation",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Mendel's Laws (pea plant experiments):\n\n1. Law of Dominance: dominant trait masks recessive in heterozygous\n2. Law of Segregation: alleles separate during gamete formation\n3. Law of Independent Assortment: genes on different chromosomes assort independently\n\nMonohybrid cross (Tt × Tt):\n• Phenotype ratio 3:1\n• Genotype ratio 1:2:1 (TT:Tt:tt)\n\nDihybrid cross (TtRr × TtRr):\n• Phenotypic ratio 9:3:3:1\n\nTest cross: × recessive → determines genotype\n\nIncomplete dominance: blending (pink snapdragon Rr)\nCo-dominance: both expressed (ABO blood groups)\n\nSex determination: XX (female), XY (male)",
  },
  biotechnology: {
    title: "Biotechnology — Principles and Processes",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Biotechnology — Principles:\n\nRecombinant DNA Technology:\n• Restriction enzymes: molecular scissors (EcoRI, BamHI) — create sticky ends\n• Ligase: joins DNA fragments\n• Vectors: plasmids or bacteriophages carry foreign DNA into host\n• Cloning: producing multiple copies of a gene\n\nPCR (Polymerase Chain Reaction):\n• Amplifies specific DNA in vitro\n• Steps: Denaturation (94°C) → Annealing (primers) → Extension (Taq polymerase)\n• Applications: genetic fingerprinting, diagnosis, forensics\n\nGel Electrophoresis: separates DNA by size; smaller fragments travel farther\n\nGMOs:\n• Bt cotton: Bacillus thuringiensis gene → insecticidal protein\n• Humulin: human insulin gene in E. coli",
  },
  "organisms populations": {
    title: "Organisms and Populations",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Organisms and Populations:\n\nEcology: Study of interactions of organisms with their environment.\nLevels: Individual → Population → Community → Ecosystem → Biome → Biosphere\n\nPopulation Attributes:\n• Natality (birth rate), Mortality (death rate)\n• Age distribution, Sex ratio\n• Population density\n\nPopulation Growth:\n• Exponential: dN/dt = rN (unlimited resources) → J-shaped curve\n• Logistic: dN/dt = rN[(K-N)/K] → S-shaped (sigmoidal) curve; K = carrying capacity\n\nSpecies interactions:\n• Mutualism (+/+): bee-flower\n• Predation (+/−): lion-deer\n• Competition (−/−): both harmed\n• Parasitism (+/−): parasite benefits, host harmed\n• Commensalism (+/0): one benefits, other unaffected",
  },
  ecosystem: {
    title: "Ecosystem",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Ecosystem:\n\nComponents:\n• Biotic: producers (plants), consumers, decomposers\n• Abiotic: light, temperature, water, soil\n\nFood Chains:\n• Grazing: Grass → Grasshopper → Frog → Snake → Eagle\n• Detritus: dead matter → bacteria/fungi → soil\n\nEnergy Flow:\n• Unidirectional (only forward, never recycled)\n• 10% law: only 10% energy passed to next trophic level\n• 90% lost as heat\n\nEcological Pyramids:\n• Numbers: number of organisms at each level\n• Biomass: mass at each level\n• Energy: always upright; energy always decreases\n\nNutrient cycling (unlike energy) is recycled — carbon cycle, nitrogen cycle.\n\nPrimary productivity: rate of biomass production by autotrophs.",
  },
  "biodiversity conservation": {
    title: "Biodiversity and Conservation",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Biodiversity and Conservation:\n\nBiodiversity: variety of life — genetic, species, and ecosystem levels.\n\nIndia: one of 12 mega-diversity countries; 2 hotspots — Western Ghats + Sri Lanka; Indo-Burma.\n\nBiodiversity loss causes:\n• HIPPO: Habitat loss, Invasive species, Pollution, Population growth, Overexploitation\n\nIUCN categories: Extinct → Critically Endangered → Endangered → Vulnerable → Near Threatened → Least Concern\n\nConservation:\n1. In-situ: protecting in natural habitat\n   • National parks (Corbett, Kaziranga), Wildlife sanctuaries, Biosphere reserves\n2. Ex-situ: outside natural habitat\n   • Zoos, botanical gardens, seed banks, cryopreservation\n\nBoard focus: Difference between in-situ and ex-situ conservation.",
  },
  "environmental issues": {
    title: "Environmental Issues",
    subject: "Biology",
    category: "Class 12",
    answer:
      "Environmental Issues:\n\nAir Pollution:\n• Pollutants: SOx, NOx, CO, particulates\n• Smog = smoke + fog\n• CNG: cleaner alternative to diesel/petrol\n\nOzone Depletion:\n• CFCs from ACs/fridges destroy ozone layer (stratosphere)\n• Ozone hole over Antarctica\n• Montreal Protocol (1987): international phase-out of CFCs\n\nGlobal Warming:\n• Greenhouse gases: CO₂, CH₄, N₂O\n• Enhanced greenhouse effect → rising temperatures\n• Consequences: ice melting, sea level rise, extreme weather\n\nWater Pollution:\n• Eutrophication: excess fertiliser → algal blooms → oxygen depletion\n• BOD: measure of organic pollution (high BOD = polluted)\n\nDeforestation: reduces biodiversity, causes soil erosion, contributes to climate change.",
  },
  // ── Class 10 Science (missing chapters) ──────────────────────────────────
  "magnetic effects electric current": {
    title: "Magnetic Effects of Electric Current",
    subject: "Science",
    category: "Class 10",
    answer:
      "Magnetic Effects of Electric Current:\n\nOersted's experiment: current-carrying wire deflects a magnetic compass → electric current produces magnetic field.\n\nMagnetic field around:\n• Straight wire: concentric circles (right-hand thumb rule)\n• Solenoid: acts like a bar magnet; B = μ₀nI inside\n\nElectromagnet: temporary magnet made using current through a coil\n\nForce on current-carrying conductor: F = BIL sinθ\nFleming's Left-Hand Rule: forefinger = B, middle finger = I, thumb = force direction\n\nElectric Motor: converts electrical → mechanical energy\n• Current-carrying coil in magnetic field rotates\n• Uses commutator (splits current direction)\n\nElectromagnetic Induction (Faraday): changing magnetic field induces EMF\nFleming's Right-Hand Rule: for generators\n\nElectric Generator: converts mechanical → electrical energy\n\nDomestic wiring: Live (red), Neutral (black), Earth (green); fuse/MCB protects from overloading.",
  },
  "control coordination": {
    title: "Control and Coordination",
    subject: "Science",
    category: "Class 10",
    answer:
      "Control and Coordination:\n\nNervous System:\n• Neuron: basic structural unit; dendrites (receive), cell body, axon (transmit), synapse\n• CNS: brain + spinal cord\n• PNS: nerves connecting to body\n\nBrain:\n• Forebrain (cerebrum): intelligence, memory, voluntary actions\n• Midbrain: relays signals\n• Hindbrain (cerebellum + medulla): balance, breathing, heartbeat\n\nReflex action: quick, involuntary; via spinal cord\nReflex arc: receptor → sensory nerve → spinal cord → motor nerve → effector\n\nEndocrine System (chemical coordination):\n• Hormones: chemical messengers; travel in blood\n• Endocrine glands: pituitary (master gland), thyroid, adrenal, pancreas, gonads\n\nPituitary: growth hormone, ADH, FSH, LH\nThyroid: thyroxine (metabolism, growth); requires iodine\nAdrenal: adrenaline (fight-or-flight, raises heartbeat)\nPancreas: insulin (lowers blood sugar) and glucagon (raises blood sugar)\n\nBoar focus: Reflex arc vs voluntary action; function of adrenaline.",
  },
  "how organisms reproduce": {
    title: "How do Organisms Reproduce?",
    subject: "Science",
    category: "Class 10",
    answer:
      "How do Organisms Reproduce?\n\nAsexual Reproduction:\n• Binary fission: cell divides into two (Amoeba — multiple fission; Leishmania, Plasmodium)\n• Budding: small bud grows (Hydra, Yeast)\n• Regeneration: fragmented parts regenerate (Planaria, Hydra)\n• Vegetative propagation: plant parts give rise to new plants (potato tuber, sugarcane, Bryophyllum leaves)\n• Spore formation: spores germinate (Rhizopus, ferns)\n\nSexual Reproduction in Flowering Plants:\n• Flower has stamen (male) and carpel/pistil (female)\n• Pollination: transfer of pollen to stigma\n• Fertilisation: pollen tube carries male gamete to egg\n• Seeds and fruits form after fertilisation\n\nHuman Reproduction:\n• Puberty: sexual maturity; secondary sexual characters develop\n• Male: sperm produced in testes; testosterone\n• Female: ova produced in ovaries; oestrogen and progesterone\n• Menstrual cycle: monthly; ovulation around day 14\n\nContraception: barrier (condoms, diaphragm), chemical (pills), surgical (vasectomy, tubectomy)\n\nSTIs: HIV/AIDS, gonorrhoea, syphilis — spread through unprotected sex or blood contact.",
  },
  "heredity evolution": {
    title: "Heredity and Evolution",
    subject: "Science",
    category: "Class 10",
    answer:
      "Heredity and Evolution:\n\nMendel's experiments (pea plants):\n• Law of dominance, law of segregation\n• Monohybrid cross: 3:1 ratio; Dihybrid cross: 9:3:3:1 ratio\n• Traits in pea: height (T/t), colour (R/r)\n\nSex determination (humans):\n• XY → male; XX → female\n• Father determines sex of child (X or Y sperm)\n\nVariation and Evolution:\n• Variation: differences in traits among individuals\n• Variation + Natural selection = evolution\n\nDarwin's theory of Natural Selection:\n• Struggle for existence; survivors are better adapted\n• Survival of the fittest\n• Gradual change over generations\n\nEvolution evidence:\n• Homologous organs: same origin, different function (forelimbs of humans, whale, bat)\n• Analogous organs: different origin, same function (wings of bird and bat)\n• Fossils: preserved remains in rock layers\n\nSpeciation: formation of new species by reproductive isolation\n\nHuman evolution: Homo habilis → H. erectus → H. sapiens",
  },
  "our environment": {
    title: "Our Environment",
    subject: "Science",
    category: "Class 10",
    answer:
      "Our Environment:\n\nEcosystem: All organisms (biotic) + physical environment (abiotic) interacting together.\n\nFood Chain: Grass → Grasshopper → Frog → Snake → Eagle\n• Producer → Primary consumer → Secondary → Tertiary\n• 10% energy passes to each level; 90% lost as heat\n• Short food chains are more energy-efficient\n\nFood Web: interconnected food chains in an ecosystem\n\nBiodegradable waste: broken down by microorganisms (paper, food, wood) — do NOT cause long-term pollution\nNon-biodegradable waste: cannot be broken down naturally (plastic, glass, DDT, heavy metals) — persist, cause bio-magnification\n\nOzone Layer:\n• Located in stratosphere (15–50 km altitude)\n• Absorbs harmful UV radiation\n• CFCs from refrigerators and ACs destroy ozone → ozone hole → more UV → skin cancer\n\nGarbage management: reduce, reuse, recycle\n\nBoard focus: Difference between biodegradable and non-biodegradable; food chain energy flow; ozone layer damage.",
  },
  // ── More Class 10 SST ─────────────────────────────────────────────────────
  "manufacturing industries": {
    title: "Manufacturing Industries",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Manufacturing Industries:\n\nImportance: Converts raw materials to finished goods; provides employment; earns foreign exchange.\n\nKey Industries:\n• Iron & Steel: Bhilai, Durgapur, Rourkela, Bokaro (SAIL plants); near coal + iron ore sources\n• Cotton textiles: Mumbai, Ahmedabad, Surat; earliest industry\n• Jute: Hooghly basin (Kolkata); world's largest jute producer\n• Sugar: UP and Bihar (largest producers); near sugarcane growing areas\n• IT industry: Bengaluru ('Silicon Valley of India'), Hyderabad, Pune\n\nFactors for industrial location: raw materials, power, labour, transport, market, capital, government policy\n\nAgglomeration economy: industries cluster together to share infrastructure and services\n\nIndustrial pollution:\n• Air: smoke, toxic gases\n• Water: chemical effluents\n• Land: solid wastes\n\nNational Industrial Policy 1991: LPG (Liberalisation, Privatisation, Globalisation)\n\nBoard focus: Why does sugar industry concentrate in UP? Factors affecting location.",
  },
  "lifelines economy": {
    title: "Lifelines of National Economy",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Lifelines of National Economy:\n\nTransport:\n• Roadways: India has world's largest road network; National Highways; Golden Quadrilateral: Delhi-Mumbai-Chennai-Kolkata (5,846 km)\n• Railways: 115,000 km track; Rajdhani, Shatabdi express; broad, metre, narrow gauge\n• Airways: Air India, IndiGo; major international airports at Mumbai, Delhi, Chennai, Kolkata\n• Waterways: cheapest for bulk goods; NW 1 (Ganga, Allahabad to Haldia); NW 2 (Brahmaputra); NW 3 (Kerala)\n• Pipelines: Kandla-Bhatinda (oil); HBJ (gas); cheapest for fluids\n\nCommunication:\n• Personal: postal, telephone, internet\n• Mass communication: radio (All India Radio), DD television, newspapers\n\nTrade:\n• India exports: software, pharmaceuticals, textiles, gems\n• India imports: crude oil, machinery, gold\n• Mumbai Port: largest; JNPT (Navi Mumbai): busiest container port\n\nBoard focus: Why are roads more important than railways? Name major seaports.",
  },
  // ── More JEE ────────────────────────────────────────────────────────────
  "rotational motion": {
    title: "Rotational Motion",
    subject: "Physics",
    category: "JEE",
    answer:
      "Rotational Motion:\n\nAngular quantities:\n• Angular displacement θ (radians)\n• Angular velocity ω = dθ/dt\n• Angular acceleration α = dω/dt\n\nMoment of Inertia (I): rotational equivalent of mass; I = Σmᵢrᵢ²\n• Solid sphere: I = 2/5 MR²\n• Ring: I = MR²\n• Solid cylinder: I = MR²/2\n• Disc: I = MR²/2\n• Parallel axis theorem: I = Icm + Md²\n• Perpendicular axis theorem (laminar body): Iz = Ix + Iy\n\nTorque: τ = r × F = Iα (analogous to F = ma)\n\nAngular Momentum: L = Iω (analogous to p = mv)\n• Conservation of angular momentum: L is conserved when net τ = 0 (figure skater effect)\n\nKinetic energy of rotation: KE = ½Iω²\n\nRolling motion: KE_total = ½mv² + ½Iω²\n\nBoard focus: Parallel axis theorem; rolling without slipping condition.",
  },
  "thermodynamics jee": {
    title: "Thermodynamics (JEE Level)",
    subject: "Physics",
    category: "JEE",
    answer:
      "Thermodynamics (JEE):\n\nLaws:\n• Zeroth law: thermal equilibrium — basis of temperature measurement\n• First law: ΔU = Q − W (energy conservation)\n  • Q > 0: heat absorbed; W > 0: work done BY system\n• Second law: entropy of isolated system always increases; heat cannot flow spontaneously from cold to hot\n\nProcesses:\n• Isothermal (ΔT = 0): ΔU = 0; Q = W\n• Adiabatic (Q = 0): ΔU = −W; γ = Cp/Cv; TV^(γ−1) = constant\n• Isochoric (ΔV = 0): W = 0; ΔU = Q\n• Isobaric (ΔP = 0): Q = nCpΔT\n\nCarnot Engine: most efficient heat engine\n• Efficiency η = 1 − T₂/T₁ (T₁ = source, T₂ = sink)\n• Two isothermal + two adiabatic processes\n\nEntropy (S): measure of disorder; ΔS = Q/T for reversible processes\n\nBoard focus: First law applications; Carnot efficiency calculations.",
  },
  "waves jee": {
    title: "Waves (JEE Level)",
    subject: "Physics",
    category: "JEE",
    answer:
      "Waves (JEE Level):\n\nWave equation: y = A sin(kx − ωt + φ)\n• A = amplitude; k = 2π/λ (wave number); ω = 2πf; v = ω/k = fλ\n\nTypes: Transverse (light) and longitudinal (sound).\n\nSpeed of sound in gas: v = √(γP/ρ) = √(γRT/M)\n\nSuperposition principle:\n• Constructive interference: waves in phase\n• Destructive interference: waves out of phase\n\nStanding waves:\n• String fixed at both ends: λₙ = 2L/n; fₙ = nf₁\n• Open pipe: fₙ = nv/2L; all harmonics\n• Closed pipe: fₙ = (2n−1)v/4L; only odd harmonics\n\nResonance: when applied frequency = natural frequency\n\nDoppler effect:\n• Observer moving toward source: f' = f(v + v_o)/(v − v_s)\n• Applicable to sound and light (redshift/blueshift)\n\nBeat frequency = |f₁ − f₂|\n\nBoard focus: Standing waves in strings and pipes; Doppler formula.",
  },
  "conic sections": {
    title: "Conic Sections",
    subject: "Mathematics",
    category: "JEE",
    answer:
      "Conic Sections:\n\nCircle: x² + y² = r²; centre (h,k): (x−h)² + (y−k)² = r²\n\nParabola y² = 4ax:\n• Focus: (a, 0); Directrix: x = −a; Axis: y = 0; Vertex: (0,0)\n• Latus rectum = 4a\n• Eccentricity e = 1\n\nEllipse x²/a² + y²/b² = 1 (a > b):\n• c² = a² − b²; foci (±c, 0)\n• Eccentricity 0 < e < 1; e = c/a\n• Sum of focal distances = 2a\n\nHyperbola x²/a² − y²/b² = 1:\n• c² = a² + b²; foci (±c, 0)\n• Eccentricity e > 1; e = c/a\n• Asymptotes: y = ±(b/a)x\n• Difference of focal distances = 2a\n\nBoard focus: Identifying type; finding foci, eccentricity; equation of tangent/normal.",
  },
  "permutations combinations": {
    title: "Permutations and Combinations",
    subject: "Mathematics",
    category: "JEE",
    answer:
      "Permutations and Combinations:\n\nFundamental Counting Principle:\n• Multiplication: m × n ways\n• Addition: m + n ways (OR situations)\n\nPermutations (order matters):\n• ⁿPᵣ = n!/(n−r)!\n• Circular: (n−1)!\n• With repetitions: n!/p!q!r!\n\nCombinations (order doesn't matter):\n• ⁿCᵣ = n!/[r!(n−r)!]\n• C(n,r) = C(n, n−r)\n• Pascal's rule: C(n+1, r) = C(n, r) + C(n, r−1)\n• Sum: ΣC(n,r) = 2ⁿ (r from 0 to n)\n\nRelation: ⁿPᵣ = r! × ⁿCᵣ\n\nBoard focus: Number formation with/without repetition; committee selection problems.",
  },
  // ── NEET Biology ─────────────────────────────────────────────────────────
  "animal kingdom": {
    title: "Animal Kingdom",
    subject: "Biology",
    category: "NEET",
    answer:
      "Animal Kingdom:\n\nMajor Phyla:\n• Porifera: sponges; pores; no organs (Sycon, Spongilla)\n• Coelenterata/Cnidaria: Hydra, jellyfish; cnidoblasts (stinging cells)\n• Platyhelminthes: flatworms; Planaria, Tapeworm; no coelom\n• Nematoda: roundworms; Ascaris; pseudocoelom\n• Annelida: Earthworm, Leech; segmentation; closed circulatory system\n• Arthropoda: largest phylum; insects, prawns, spiders; exoskeleton; jointed legs\n• Mollusca: Snails, Octopus; mantle; soft body\n• Echinodermata: Starfish, Sea urchin; spiny skin; water vascular system\n• Chordata: notochord, dorsal nerve cord, gill slits\n\nVertebrate classes:\n• Cyclostomata: jawless (lamprey)\n• Pisces: fishes; gills; cold-blooded\n• Amphibia: frogs; first land vertebrates; moist skin\n• Reptilia: lizards, crocodiles; dry scaly skin; ectothermic\n• Aves: birds; wings; warm-blooded; hollow bones\n• Mammalia: hair; mammary glands; warm-blooded; mostly viviparous\n\nBoard focus: Key features of each phylum; characteristics of Chordata.",
  },
  "morphology flowering plants": {
    title: "Morphology of Flowering Plants",
    subject: "Biology",
    category: "NEET",
    answer:
      "Morphology of Flowering Plants:\n\nRoot:\n• Taproot: carrot, beetroot (dicots)\n• Fibrous: wheat, grass (monocots)\n• Modifications: storage (radish), prop roots (banyan), pneumatophores (mangrove)\n\nStem:\n• Modifications: rhizome (ginger, turmeric), tuber (potato), corm (colocasia), bulb (onion), runner (grass), tendril (grapevine), thorn (Bougainvillea)\n\nLeaf:\n• Simple vs compound leaf\n• Venation: reticulate (dicots — mango), parallel (monocots — maize)\n• Modifications: tendrils (Lathyrus), spines (cactus), pitcher (Nepenthes)\n• Phyllotaxy: alternate, opposite, whorled\n\nFlower:\n• Parts: sepals (calyx), petals (corolla), stamens (androecium), carpels (gynoecium)\n• Types: bisexual, unisexual; actinomorphic, zygomorphic\n\nBoard focus: Stem modifications; root types; leaf venation differences.",
  },
  "digestion absorption": {
    title: "Digestion and Absorption",
    subject: "Biology",
    category: "NEET",
    answer:
      "Digestion and Absorption:\n\nAlimentary canal: Mouth → Oesophagus → Stomach → Small intestine → Large intestine → Anus\n\nDigestion at each stage:\n• Mouth: salivary amylase (starch → maltose)\n• Stomach: HCl + pepsin (proteins); gastric lipase\n• Duodenum: bile (fat emulsification); pancreatic juice (trypsin, chymotrypsin, lipase, amylase)\n• Small intestine: maltase, sucrase, lactase, peptidases\n\nAbsorption:\n• Villi and microvilli increase surface area in ileum\n• Glucose, amino acids: active transport → blood\n• Fats: micelles → lacteals → lymph → blood\n\nLarge intestine: absorbs water + electrolytes; compacts faeces\n\nLiver functions: bile secretion, glycogen storage, detoxification, urea synthesis\n\nBoard focus: Role of villi; enzyme at each stage; fat absorption route.",
  },
  "neural control coordination neet": {
    title: "Neural Control and Coordination (NEET)",
    subject: "Biology",
    category: "NEET",
    answer:
      "Neural Control and Coordination:\n\nNervous system: CNS (brain + spinal cord) and PNS (cranial + spinal nerves) + Autonomic NS\n\nNeuron structure: Cell body, dendrites (receive), axon (transmit), myelin sheath, nodes of Ranvier, synapse\n\nNerve impulse:\n• Resting potential: −70 mV inside\n• Action potential: Na+ in → depolarisation (+40 mV) → K+ out → repolarisation\n• Propagation along axon\n\nSynapse: neurotransmitter (acetylcholine, dopamine) released from synaptic knob → binds to postsynaptic receptor\n\nBrain regions:\n• Cerebrum: thought, memory, voluntary movement\n• Thalamus: relay centre\n• Hypothalamus: temperature, hunger, thirst, sleep\n• Cerebellum: balance, coordination, posture\n• Medulla oblongata: breathing, heartbeat, swallowing (vital functions)\n\nReflex arc: receptor → sensory nerve → spinal cord → motor nerve → effector\n\nBoard focus: Action potential; reflex arc; parts of brain and function.",
  },
  "breathing exchange gases": {
    title: "Breathing and Exchange of Gases",
    subject: "Biology",
    category: "NEET",
    answer:
      "Breathing and Exchange of Gases:\n\nRespiratory pathway: Nostrils → pharynx → larynx → trachea → bronchi → bronchioles → alveoli\n\nMechanism:\n• Inspiration: diaphragm contracts (moves down); external intercostal muscles contract → thoracic volume ↑ → pressure ↓ → air enters\n• Expiration: diaphragm relaxes → thoracic volume ↓ → pressure ↑ → air exits\n\nLung Volumes:\n• Tidal volume (TV): ~500 mL (normal breathing)\n• IRV: ~3000 mL extra inhalation\n• ERV: ~1000 mL extra exhalation\n• Residual volume (RV): ~1200 mL (never expelled)\n• Vital capacity = TV + IRV + ERV = ~4500 mL\n\nGas exchange:\n• O₂: alveoli → blood (high pO₂ → low pO₂)\n• CO₂: blood → alveoli (high pCO₂ → low pCO₂)\n\nTransport:\n• O₂: 97% as oxyhaemoglobin, 3% in plasma\n• CO₂: 70% as HCO₃⁻ (bicarbonate), 23% carbaminohaemoglobin, 7% in plasma\n\nBoard focus: Lung volumes; O₂ vs CO₂ transport mechanisms.",
  },
  "body fluids circulation": {
    title: "Body Fluids and Circulation",
    subject: "Biology",
    category: "NEET",
    answer:
      "Body Fluids and Circulation:\n\nBlood composition:\n• Plasma (55%): water + proteins (albumin, globulin, fibrinogen) + ions + glucose\n• RBCs: ~5 million/mm³; haemoglobin; no nucleus (mature); lifespan 120 days\n• WBCs: ~6000–8000/mm³; immune defense\n• Platelets: ~1.5–3.5 lakh/mm³; clotting\n\nBlood groups (ABO):\n• A: antigen A, antibody anti-B\n• B: antigen B, antibody anti-A\n• AB: both antigens, NO antibodies — universal recipient\n• O: no antigens, both antibodies — universal donor\n\nHeart:\n• SA node (pacemaker): initiates heartbeat\n• Systole (contraction) / Diastole (relaxation)\n• Blood pressure: 120/80 mmHg (normal)\n\nDouble circulation: pulmonary (heart ↔ lungs) + systemic (heart ↔ body)\n\nECG: records heart's electrical activity\n\nBoard focus: ABO blood groups; cardiac cycle; SA and AV node roles.",
  },
  "excretory products elimination": {
    title: "Excretory Products and Their Elimination",
    subject: "Biology",
    category: "NEET",
    answer:
      "Excretory Products:\n\nTypes by organisms:\n• Ammonotelic: ammonia (aquatic animals — fish, Amoeba)\n• Ureotelic: urea (humans, mammals) — less toxic, formed in liver\n• Uricotelic: uric acid (birds, reptiles, insects) — conserves water\n\nKidney Structure:\n• Cortex, medulla, renal pelvis\n• ~1 million nephrons per kidney\n\nNephron parts:\n• Bowman's capsule + glomerulus: filtration\n• PCT: reabsorption of glucose, amino acids, Na+\n• Loop of Henle: concentration of urine\n• DCT: selective reabsorption and secretion\n• Collecting duct: water reabsorption, final urine\n\nUrine formation:\n1. Glomerular filtration: GFR = ~125 mL/min; ~180 L/day filtrate\n2. Tubular reabsorption: ~99% filtrate reabsorbed; glucose fully reabsorbed\n3. Tubular secretion: H+, K+, NH3 added\n\nHormonal regulation:\n• ADH: ↑ water reabsorption in collecting duct\n• Aldosterone: ↑ Na+ reabsorption in DCT\n\nBoard focus: GFR; ADH and aldosterone; role of each nephron part.",
  },

  // ── Class 10 Mathematics (new entries) ────────────────────────────────────
  "coordinate geometry": {
    title: "Coordinate Geometry",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Coordinate Geometry (Class 10):\n\nDistance Formula:\nDistance between (x₁,y₁) and (x₂,y₂): d = √[(x₂−x₁)² + (y₂−y₁)²]\n\nSection Formula (Internal Division):\nPoint dividing (x₁,y₁) and (x₂,y₂) in ratio m:n (internally):\n  P = [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]\n\nMidpoint Formula (m:n = 1:1):\n  M = [(x₁+x₂)/2, (y₁+y₂)/2]\n\nArea of Triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃):\n  Area = ½ |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|\n  If Area = 0 → the three points are collinear.\n\nBoard focus: Distance formula is used to classify triangles (equilateral, isosceles, scalene) and quadrilaterals.",
  },
  trigonometry: {
    title: "Introduction to Trigonometry",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Trigonometry (Class 10):\n\nSix trigonometric ratios for angle θ in right triangle:\n  sin θ = Opposite/Hypotenuse\n  cos θ = Adjacent/Hypotenuse\n  tan θ = Opposite/Adjacent = sin/cos\n  cosec θ = 1/sin θ;  sec θ = 1/cos θ;  cot θ = 1/tan θ\n\nStandard Angles Table:\n  Angle:  0°   30°   45°   60°   90°\n  sin:    0   1/2  1/√2  √3/2   1\n  cos:    1   √3/2 1/√2  1/2    0\n  tan:    0   1/√3  1    √3    ∞\n\nPythagorean Identities:\n  sin²θ + cos²θ = 1\n  1 + tan²θ = sec²θ\n  1 + cot²θ = cosec²θ\n\nBoard focus: Memorise standard angle values; use identities to simplify expressions. 'Prove that...' questions are very common (3–5 marks).",
  },
  "statistics class 10": {
    title: "Statistics (Class 10)",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Statistics (Class 10):\n\nMean (Direct Method): Mean = Σfx / Σf\nAssumed Mean Method: Mean = a + (Σfd / Σf), where d = x − a\nStep Deviation Method: Mean = a + h × (Σfu / Σf), where u = d/h\n\nMedian (grouped data):\n  Median = l + [(n/2 − cf) / f] × h\n  l = lower class limit; cf = cumulative frequency before median class; f = frequency of median class; h = class width\n\nMode (grouped data):\n  Mode = l + [(f₁−f₀) / (2f₁−f₀−f₂)] × h\n  f₁ = frequency of modal class; f₀ = preceding; f₂ = succeeding\n\nEmpirical Relationship: Mode ≈ 3 Median − 2 Mean\n\nCumulative Frequency Ogive: Plot cumulative frequencies against upper class limits (Less Than Ogive) or lower class limits (More Than Ogive). Intersection gives Median.\n\nBoard focus: Median and Mode formulas are most tested. Always identify modal class correctly (highest frequency, not highest value).",
  },
  "probability class 10": {
    title: "Probability (Class 10)",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Probability (Class 10):\n\nProbability of an event A:\n  P(A) = Number of favourable outcomes / Total number of outcomes\n  0 ≤ P(A) ≤ 1\n\nCertain event: P(S) = 1;  Impossible event: P(∅) = 0\n\nComplementary events: P(A) + P(A') = 1; P(A') = 1 − P(A)\n\nMutually exclusive events: P(A ∪ B) = P(A) + P(B)\n\nClassical probability examples:\n  Coin: P(Head) = 1/2; P(Tail) = 1/2\n  Die: P(any face) = 1/6; P(even) = 3/6 = 1/2\n  Cards: 52 cards; P(ace) = 4/52 = 1/13; P(face card) = 12/52 = 3/13\n\nBoard focus: 'Two dice are thrown simultaneously — find probability of sum being...' is very common. Always list outcomes systematically.",
  },
  "surface areas volumes": {
    title: "Surface Areas and Volumes",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Surface Areas and Volumes (Class 10):\n\nCuboid: LSA = 2h(l+b); TSA = 2(lb+bh+hl); V = lbh\nCube: TSA = 6a²; V = a³\nCylinder: CSA = 2πrh; TSA = 2πr(r+h); V = πr²h\nCone: Slant height l = √(r²+h²); CSA = πrl; TSA = πr(r+l); V = ⅓πr²h\nSphere: SA = 4πr²; V = (4/3)πr³\nHemisphere: CSA = 2πr²; TSA = 3πr²; V = (2/3)πr³\n\nCombined solids: Calculate each part separately; be careful about subtracting/adding appropriately.\n\nFrustum of a cone:\n  CSA = πl(R+r);  V = πh/3(R²+Rr+r²);  l = √[h²+(R−r)²]\n\nBoard focus: Conversions between shapes (melted and recast) are common board questions. Always check: is the smaller shape removed or added to the larger?",
  },
  "circles class 10": {
    title: "Circles (Class 10)",
    subject: "Mathematics",
    category: "Class 10",
    answer:
      "Circles — Tangents and Chords (Class 10):\n\nKey Theorems:\n1. A tangent at any point on a circle is perpendicular to the radius at that point.\n2. The length of two tangents from an external point to a circle are equal.\n3. A chord drawn through a point inside the circle is divided such that the product of segments is equal for all chords through that point.\n\nTangent Properties:\n  If PA and PB are two tangents from external point P: PA = PB\n  Angle APB + angle AOB = 180° (where O = centre)\n\nAngle in a Semicircle = 90°\n\nChord Properties:\n  Perpendicular from centre bisects the chord.\n  Equal chords are equidistant from the centre.\n\nBoard focus: 'Prove that tangents from external point are equal in length' is a 3-mark board standard. Use congruence (RHS) proof.",
  },

  // ── Class 10 Science (new entries) ────────────────────────────────────────
  "metals non metals": {
    title: "Metals and Non-metals",
    subject: "Science",
    category: "Class 10",
    answer:
      "Metals and Non-metals (Class 10 Science):\n\nPhysical properties of metals:\n  Lustrous (shiny), hard, malleable (beaten into sheets), ductile (drawn into wire), sonorous, good conductors of heat and electricity, high melting point.\n  Exception: Mercury is liquid metal; sodium/potassium are soft metals.\n\nPhysical properties of non-metals:\n  Non-lustrous (except iodine, graphite), brittle when solid, non-ductile, poor conductors (except graphite).\n\nChemical properties of metals:\n  With oxygen: 4Na + O₂ → 2Na₂O (basic oxide)\n  With water: 2Na + 2H₂O → 2NaOH + H₂↑ (sodium — vigorous)\n  With acids: Fe + H₂SO₄ → FeSO₄ + H₂↑\n  With salt solutions: CuSO₄ + Fe → FeSO₄ + Cu (iron displaces copper)\n\nReactivity Series (decreasing order): K > Na > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > H > Cu > Hg > Ag > Au\n\nExtraction of metals:\n  Less reactive (Hg, Cu): from oxide by heating alone\n  Moderate (Zn, Fe): reduction using carbon\n  Highly reactive (Na, Al): electrolysis\n\nCorrosion: slow oxidation of metals.\n  Rusting of iron: 2Fe + 3H₂O + 3/2 O₂ → Fe₂O₃·3H₂O (in presence of water and oxygen)\n  Prevention: painting, galvanising (zinc coating), alloying.\n\nBoard focus: Reactivity series determines displacement reactions; ore vs mineral definition.",
  },
  "carbon compounds": {
    title: "Carbon and its Compounds",
    subject: "Science",
    category: "Class 10",
    answer:
      "Carbon and its Compounds (Class 10 Science):\n\nUnique properties of Carbon:\n  Catenation: forms long chains with itself\n  Tetravalency: forms 4 bonds (single, double, triple); very stable compounds\n  Allotropes: diamond (hardest), graphite (lubricant, conductor), fullerene (C₆₀)\n\nHomologous series: family of organic compounds with same functional group, differ by -CH₂-\n  Example: methane (CH₄), ethane (C₂H₆), propane (C₃H₈)... (alkanes)\n  Each member differs by 14 u in molecular mass.\n\nFunctional groups:\n  Aldehyde: −CHO  |  Ketone: C=O  |  Alcohol: −OH\n  Carboxylic acid: −COOH  |  Halogen: −X  |  Amino: −NH₂\n\nNaming (IUPAC): find longest chain → prefix for C count → suffix for functional group\n  Alkane ends in -ane; Alkene -ene; Alkyne -yne; Alcohol -ol; Acid -oic acid\n\nProperties:\n  Combustion: CH₄ + 2O₂ → CO₂ + 2H₂O (complete); soot if incomplete\n  Substitution (alkanes + Cl₂): slow reaction in sunlight\n  Addition (alkenes + H₂ → alkane): hydrogenation of oils → vanaspati ghee\n\nEthanol (C₂H₅OH): alcohol; used in medicines, antiseptic; denatured to prevent drinking.\nEthanoic acid (CH₃COOH): 5-8% in vinegar; reacts with base (NaOH) to form sodium ethanoate + water.\n\nSoaps and Detergents:\n  Soap: sodium salt of fatty acid; forms micelles to clean dirt; does NOT work in hard water.\n  Detergent: synthetic; works in hard water.",
  },

  // ── Class 10 SST (new entries) ────────────────────────────────────────────
  "consumer rights india": {
    title: "Consumer Rights in India",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Consumer Rights in India:\n\n6 Consumer Rights:\n  1. Right to Safety: protection from hazardous goods\n  2. Right to be Informed: accurate product information\n  3. Right to Choose: access to variety at competitive prices\n  4. Right to be Heard: grievances addressed\n  5. Right to Redress: compensation for wrongs\n  6. Right to Consumer Education: knowledge of rights\n\nCOPRA (Consumer Protection Act, 1986):\n  District Forum: handles cases up to ₹1 crore\n  State Commission: cases up to ₹10 crore\n  National Commission: cases above ₹10 crore\n  Updated in 2019 to include e-commerce.\n\nQuality marks:\n  ISI: Bureau of Indian Standards (electronic goods, food)\n  AGMARK: agricultural products (ghee, honey)\n  Hallmark: jewellery gold purity\n  FPO: fruit products\n\nBoard focus: Know the three-tier consumer courts and their jurisdictions.",
  },
  "federalism india": {
    title: "Federalism in India",
    subject: "Social Science",
    category: "Class 10",
    answer:
      "Federalism in India (Class 10 Political Science):\n\nFederalism: Division of powers between central and state governments.\n\nIndia's Federal Features:\n  Written constitution with three lists: Union List (97 subjects), State List (66 subjects), Concurrent List (47 subjects)\n  Bicameral Parliament (Lok Sabha + Rajya Sabha)\n  Independent judiciary (Supreme Court)\n  Revenue sharing\n\nUnitary Features (Quasi-Federal):\n  Single citizenship\n  Emergency provisions allow Centre to take over states\n  Governors appointed by President (Centre)\n  Residuary powers with Centre\n\nDecentralisation (73rd and 74th Amendments, 1992):\n  3-tier Panchayati Raj in rural areas: Gram Panchayat, Panchayat Samiti, Zila Parishad\n  Municipal bodies in urban areas\n  1/3 of seats reserved for women in local bodies\n  Gram Sabha: all voters of a village have a voice\n\nBoard focus: Why India is called 'quasi-federal'? Significance of 73rd Amendment.",
  },

  // ── Class 12 Physics (new entries) ───────────────────────────────────────
  "magnetism matter": {
    title: "Magnetism and Matter",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Magnetism and Matter (Class 12 Physics):\n\nBar magnet properties:\n  Poles cannot be separated; field lines from N to S outside and S to N inside\n  Axial field (end-on position): B = μ₀/4π × 2M/r³\n  Equatorial field (broad-side position): B = μ₀/4π × M/r³\n  Torque in uniform field: τ = MB sinθ\n  Potential energy: U = −MB cosθ\n\nMagnetic Properties of Materials:\n  Diamagnetic: weak repulsion (water, Bi, Cu); χ < 0; μᵣ < 1; not attracted to magnets\n  Paramagnetic: weak attraction (Al, Na, O₂); χ > 0 but small; μᵣ slightly > 1; obeys Curie's law: χ = C/T\n  Ferromagnetic: strong attraction (Fe, Co, Ni); χ >> 0; μᵣ >> 1; retains magnetisation\n\nHysteresis (for ferromagnets):\n  B-H curve; retentivity (remanence) = B when H = 0\n  Coercivity = H needed to demagnetise\n  Soft iron: low retentivity, low coercivity → electromagnets\n  Steel: high retentivity, high coercivity → permanent magnets\n\nEarth's magnetic field: geographic and magnetic poles differ; angle between them = angle of declination\n\nBoard focus: Distinguish dia/para/ferromagnetic; Curie's law; hysteresis loop applications.",
  },
  "atoms class 12": {
    title: "Atoms (Class 12)",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Atoms (Class 12 Physics):\n\nRutherford's Nuclear Model:\n  Nucleus is tiny and positively charged; electrons revolve around it\n  Most of the atom is empty space\n  Limitation: accelerating electrons should radiate → atoms should collapse (they don't)\n\nBohr's Model (for hydrogen-like atoms):\n  Postulate 1: Electrons in certain stable orbits without radiating\n  Postulate 2: Angular momentum quantised: mvr = nħ (n = 1, 2, 3...)\n  Postulate 3: Radiation emitted/absorbed when electron jumps between orbits\n\nKey results:\n  Orbital radius: rₙ = 0.529 × n² Å  (r₁ = 0.529 Å for H)\n  Orbital speed: vₙ = 2.18 × 10⁶/n m/s\n  Total energy: Eₙ = −13.6/n² eV  (E₁ = −13.6 eV, ground state)\n  Energy emitted: ΔE = 13.6(1/n₁² − 1/n₂²) eV\n\nSpectral Series:\n  Lyman (UV): n₂ > 1, n₁ = 1\n  Balmer (visible): n₂ > 2, n₁ = 2\n  Paschen (near IR): n₂ > 3, n₁ = 3\n  Brackett (IR): n₂ > 4, n₁ = 4\n  Pfund (far IR): n₂ > 5, n₁ = 5\n\nLimitations of Bohr: cannot explain multi-electron atoms, Zeeman effect, fine structure\n\nBoard focus: Calculate wavelength using 1/λ = R(1/n₁² − 1/n₂²); identify spectral series.",
  },
  "nuclear physics": {
    title: "Nuclei (Nuclear Physics)",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Nuclei (Class 12 Physics):\n\nAtomic nucleus: protons (Z) + neutrons (N); mass number A = Z + N\n\nNuclear Size: R = R₀A^(1/3); R₀ = 1.2 × 10⁻¹⁵ m\n\nMass Defect and Binding Energy:\n  Mass defect: Δm = [Zmp + Nmn − M_nucleus]\n  Binding energy: BE = Δm × c² (MeV)\n  BE per nucleon: peaks at Fe-56 (~8.8 MeV/nucleon) — most stable nucleus\n\nRadioactivity:\n  Alpha (α) decay: nucleus emits α particle (₂He⁴); A−4, Z−2\n  Beta (β) decay: neutron → proton + electron (β⁻); A unchanged, Z+1\n  Gamma (γ): high energy photon emitted after α or β decay; no change in A or Z\n\nDecay Law: N = N₀e^(−λt)\n  Half-life: T₁/₂ = 0.693/λ\n  Activity: A = λN (Becquerel = 1 disintegration/s)\n\nNuclear Fission: heavy nucleus splits; ₉₂U²³⁵ + n → ₅₆Ba + ₃₆Kr + 3n + energy\n  Chain reaction → nuclear reactor / atomic bomb\n\nNuclear Fusion: two light nuclei combine; ₁H² + ₁H² → ₂He³ + n + 3.27 MeV\n  Requires very high temperature (thermonuclear reaction → stars, hydrogen bomb)\n\nBoard focus: Half-life calculations; binding energy per nucleon graph; identify α/β/γ changes.",
  },
  "semiconductors class 12": {
    title: "Semiconductor Electronics",
    subject: "Physics",
    category: "Class 12",
    answer:
      "Semiconductor Electronics (Class 12 Physics):\n\nEnergy bands:\n  Valence band (filled); Conduction band (empty in insulator)\n  Band gap: conductor (0), semiconductor (~1 eV), insulator (>3 eV)\n\nIntrinsic semiconductor: pure; equal electrons and holes\n\nExtrinsic:\n  n-type: doped with Group 15 (P, As) → extra electrons; majority carriers = electrons\n  p-type: doped with Group 13 (B, Al) → holes; majority carriers = holes\n\np-n junction diode:\n  Depletion layer forms; barrier potential ~0.3V (Ge), ~0.7V (Si)\n  Forward bias: narrows depletion layer; allows current\n  Reverse bias: widens depletion layer; blocks current; small leakage current\n\nDiode applications:\n  Half-wave rectifier (1 diode): only positive half of AC passes\n  Full-wave rectifier (bridge: 4 diodes): both halves rectified; output always same direction\n  Zener diode: breakdown in reverse bias; used as voltage regulator\n\nTransistor (NPN or PNP):\n  Three regions: emitter (heavily doped), base (thin, lightly doped), collector\n  Amplifier: small base current controls large collector current; β = IC/IB\n  Switch: in saturation = ON; in cutoff = OFF\n\nLogic gates: AND, OR, NOT, NAND, NOR (universal gates)\n  NAND and NOR can implement any Boolean function\n\nBoard focus: Draw rectifier circuits; transistor common-emitter amplifier; truth tables.",
  },

  // ── Class 12 Chemistry (new entries) ─────────────────────────────────────
  "isolation elements": {
    title: "General Principles and Processes of Isolation of Elements",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Isolation of Elements — Metallurgy (Class 12 Chemistry):\n\nOre: mineral containing enough metal to be extracted profitably.\nGangue: impurities mixed with ore.\n\nSteps of metallurgy:\n  1. Concentration (beneficiation): remove gangue\n    Hydraulic washing (gravity): for heavy ores\n    Froth flotation: for sulphide ores (pine oil + water + air; ore floats)\n    Magnetic separation: for magnetic ores (Fe₃O₄)\n    Leaching: dissolving ore in suitable solvent (Al₂O₃ in NaOH — Bayer's process)\n  2. Reduction to metal:\n    Roasting: sulphide ore heated in excess air → oxide (2ZnS + 3O₂ → 2ZnO + 2SO₂)\n    Calcination: carbonate/hydrate ore heated → oxide (CaCO₃ → CaO + CO₂)\n    Reduction with carbon (coke): ZnO + C → Zn + CO\n    Alumino-thermic: Fe₂O₃ + 2Al → Al₂O₃ + 2Fe (thermite reaction)\n    Electrolytic: Al from Al₂O₃ (Hall-Heroult); Na from NaCl (Downs cell)\n  3. Refining (purification):\n    Electrolytic refining: Cu, Ag, Au (anode = impure, cathode = pure metal)\n    Zone refining: semiconductor purification (Si, Ge)\n    Vapour phase: Ni (Mond process); carbonyl formed, decomposed at higher T\n\nBoard focus: Froth flotation; thermite reaction; Hall-Heroult process for aluminium.",
  },
  "surface chemistry": {
    title: "Surface Chemistry",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Surface Chemistry (Class 12 Chemistry):\n\nAdsorption: accumulation of substance on a surface.\n  Adsorbent: the solid surface; Adsorbate: the substance adsorbed.\n  Physisorption: van der Waals forces, reversible, low heat (~20–40 kJ/mol)\n  Chemisorption: chemical bond, irreversible, high heat (~80–240 kJ/mol)\n  Freundlich adsorption isotherm: x/m = k·p^(1/n)  (for gases on solids)\n\nCatalysis:\n  Homogeneous: reactants and catalyst in same phase (SO₂ + O₂ with NO(g))\n  Heterogeneous: different phases (H₂ + O₂ on Pt surface)\n  Promoters: enhance catalyst activity (Mo in Haber process)\n  Poisons: reduce catalyst activity (CO poisons Fe catalyst in Haber process)\n  Enzyme catalysis: extremely selective and efficient biological catalysts; Lock-and-key model\n\nColloids:\n  Dispersed phase size: 1–100 nm (between solution and suspension)\n  Lyophilic colloids: dispersed phase has affinity for solvent (gelatin, starch) — stable\n  Lyophobic colloids: no affinity; unstable (Fe(OH)₃ sol, As₂S₃ sol)\n\nProperties of colloids:\n  Tyndall effect: scattering of light by colloid particles (blue sky, sunlight through forest)\n  Brownian motion: random zigzag motion of colloidal particles\n  Electrophoresis: migration of colloidal particles under electric field\n  Coagulation: precipitation by adding electrolyte\n\nEmulsions: liquid in liquid colloid (milk = fat in water; butter = water in fat)\n\nBoard focus: Distinguish adsorption from absorption; Tyndall effect examples; froth flotation.",
  },
  "coordination chemistry": {
    title: "Coordination Compounds — Advanced",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Coordination Compounds — Advanced (Class 12 Chemistry):\n\nValence Bond Theory (VBT):\n  Central metal uses hybrid orbitals to form coordinate bonds with ligands.\n  Octahedral complexes:\n    Inner orbital (low spin): d²sp³ (e.g., [Co(NH₃)₆]³⁺)\n    Outer orbital (high spin): sp³d² (e.g., [CoF₆]³⁻)\n  Tetrahedral: sp³; Square planar: dsp²\n\nCrystal Field Theory (CFT):\n  Considers electrostatic interaction between metal d-orbitals and ligands.\n  Octahedral field: d-orbitals split into t₂g (lower, 3 orbitals) and eₘ (higher, 2 orbitals)\n  Crystal field splitting energy: Δ₀\n  Strong field ligands (large Δ₀): CN⁻ > NO₂⁻ > en > NH₃ > py (spectrochemical series)\n  Weak field ligands (small Δ₀): F⁻ < Cl⁻ < Br⁻ < I⁻\n\nMagnetic properties:\n  Diamagnetic: no unpaired electrons (all paired)\n  Paramagnetic: unpaired electrons; more unpaired = stronger magnetism\n\nColour of coordination compounds:\n  Due to d-d transitions (electron absorbs specific wavelength and jumps from t₂g to eₘ)\n\nIsomerism:\n  Structural: ionisation ([CoBr(NH₃)₅]SO₄ vs [CoBrSO₄(NH₃)₄]), linkage, solvate\n  Stereoisomerism: geometric (cis/trans), optical (mirror images)\n\nBoard focus: VBT hybrid orbital assignment; spectrochemical series order; colour due to d-d transitions.",
  },
  "organic reactions": {
    title: "Organic Reactions — SN1, SN2, Elimination",
    subject: "Chemistry",
    category: "Class 12",
    answer:
      "Organic Reactions — Mechanisms (Class 12 Chemistry):\n\nNucleophilic Substitution:\n\nSN1 (Unimolecular):\n  Two-step: (1) ionisation to form carbocation, (2) attack by nucleophile\n  Rate = k[RX] (only depends on substrate concentration)\n  Carbocation stability: 3° > 2° > 1° → 3° substrates favour SN1\n  Polar protic solvent (water, alcohol) stabilises carbocation\n  Stereochemistry: Racemisation (nucleophile can attack from both sides)\n\nSN2 (Bimolecular):\n  One-step: nucleophile attacks while leaving group departs simultaneously\n  Rate = k[RX][Nu] (depends on both substrate and nucleophile)\n  1° substrates favour SN2 (less steric hindrance); 3° substrates almost never\n  Polar aprotic solvent (acetone, DMSO) favours SN2\n  Stereochemistry: Inversion of configuration (Walden inversion)\n\nElimination (E1 and E2):\n  E1: Two-step; carbocation intermediate; same conditions as SN1 (3°, weak base)\n  E2: One-step; strong base removes β-H simultaneously with leaving group leaving\n  Zaitsev's rule: elimination gives more substituted (stable) alkene preferentially\n  Hofmann elimination: bulky base → less substituted alkene\n\nElectrophilic Addition (alkenes):\n  HX adds: Markovnikov's rule → H goes to carbon with more Hs\n  Anti-Markovnikov: with peroxides (radical mechanism)\n\nBoard focus: Draw mechanisms with arrows; know which factors (polarity, steric hindrance) favour SN1 vs SN2.",
  },

  // ── Class 12 Mathematics (new entries) ───────────────────────────────────
  "matrices class 12": {
    title: "Matrices (Class 12)",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Matrices (Class 12) — Detailed:\n\nTypes of matrices:\n  Row matrix (1×n);  Column matrix (n×1);  Square matrix (n×n)\n  Zero matrix (all elements 0);  Identity matrix (I: diagonal 1, rest 0)\n  Symmetric: A = Aᵀ;  Skew-symmetric: A = −Aᵀ (diagonal elements must be 0)\n  Upper/Lower triangular\n\nOperations:\n  Addition/Subtraction: element-wise; only for same order matrices\n  Scalar multiplication: each element multiplied\n  Matrix multiplication: (m×n)(n×p) = (m×p); NOT commutative (AB ≠ BA generally)\n  Transpose: (Aᵀ)ᵢⱼ = Aⱼᵢ; (AB)ᵀ = BᵀAᵀ\n\nElementary Row/Column Operations:\n  Used to find inverse by augmented matrix method.\n  Three types: interchange rows, multiply row by scalar, add multiple of one row to another.\n\nInverse of a matrix:\n  Exists only if |A| ≠ 0 (non-singular matrix)\n  A⁻¹ = adj(A) / |A|\n  Verify: A·A⁻¹ = A⁻¹·A = I\n\nSolving linear equations: AX = B → X = A⁻¹B\n\nBoard focus: Find inverse using cofactors; check if matrix is singular; express system of equations as matrix equation.",
  },
  "determinants class 12": {
    title: "Determinants (Class 12)",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Determinants (Class 12) — Detailed:\n\nDetF of 2×2: |a b; c d| = ad − bc\n\nDetF of 3×3 (expand along any row or column):\n  |A| = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃ (expanding along row 1)\n  Cofactor Cᵢⱼ = (−1)^(i+j) × Mᵢⱼ  (Mᵢⱼ = minor = det of matrix after removing row i and col j)\n\nProperties of Determinants:\n  Swapping two rows/columns: sign changes (multiplied by −1)\n  Two identical rows/columns: det = 0\n  Multiplying a row by k: det is multiplied by k (not the whole matrix)\n  det(kA) = kⁿ det(A) for n×n matrix\n  det(AB) = det(A) × det(B)\n  det(Aᵀ) = det(A)\n\nAdjoint: adj(A) = transpose of cofactor matrix\n  A · adj(A) = |A| · I\n  A⁻¹ = adj(A)/|A|  (only if |A| ≠ 0)\n\nCramer's Rule for AX = B:\n  x = Dₓ/D;  y = D_y/D;  z = D_z/D\n  D ≠ 0: unique solution\n  D = 0, all Dᵢ = 0: infinitely many solutions or no solution\n\nBoard focus: Properties are frequently tested — use them to simplify calculations; Cramer's rule for 2×2 and 3×3 systems.",
  },
  differentiation: {
    title: "Differentiation — Advanced Techniques",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Differentiation — Advanced Techniques (Class 12):\n\nChain Rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)\n  Example: d/dx[sin(x²)] = cos(x²) × 2x\n\nProduct Rule: d/dx[uv] = u'v + uv'\n  Example: d/dx[x² sin x] = 2x sin x + x² cos x\n\nQuotient Rule: d/dx[u/v] = (u'v − uv') / v²\n\nImplicit Differentiation: differentiate both sides w.r.t. x; isolate dy/dx\n  Example: x² + y² = r² → 2x + 2y(dy/dx) = 0 → dy/dx = −x/y\n\nLogarithmic Differentiation: Use when y = [f(x)]^[g(x)]\n  ln y = g(x) ln f(x); differentiate both sides\n  Example: y = xˣ → ln y = x ln x → (1/y)(dy/dx) = ln x + 1 → dy/dx = xˣ(1 + ln x)\n\nParametric Differentiation: x = f(t), y = g(t)\n  dy/dx = (dy/dt)/(dx/dt)\n\nSecond Derivative: d²y/dx² (for concavity/convexity)\n  y'' > 0: concave up (local minima)\n  y'' < 0: concave down (local maxima)\n\nStandard derivatives to memorise:\n  d/dx(tan⁻¹x) = 1/(1+x²);  d/dx(sin⁻¹x) = 1/√(1−x²)\n  d/dx(xⁿ) = nxⁿ⁻¹;  d/dx(eˣ) = eˣ;  d/dx(aˣ) = aˣ ln a\n\nBoard focus: Logarithmic differentiation is a common 4-mark question; parametric problems appear regularly.",
  },
  "integration techniques": {
    title: "Integration — Techniques",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Integration Techniques (Class 12 Mathematics):\n\n1. Direct Integration (Standard Integrals):\n  ∫xⁿ dx = xⁿ⁺¹/(n+1)+C;  ∫eˣ dx = eˣ+C;  ∫(1/x)dx = ln|x|+C\n  ∫sin x dx = −cos x+C;  ∫cos x dx = sin x+C\n  ∫sec²x dx = tan x+C;  ∫(1/√(1−x²))dx = sin⁻¹x+C\n  ∫(1/(1+x²))dx = tan⁻¹x+C\n\n2. Substitution Method:\n  Replace t = g(x); dt = g'(x)dx; integrate in terms of t; back-substitute.\n  Example: ∫sin(2x)dx — let t = 2x, dt = 2dx → ∫sin t (dt/2) = −cos(2x)/2 + C\n\n3. Integration by Parts (ILATE priority):\n  ∫u dv = uv − ∫v du\n  ILATE: I = Inverse trig; L = Logarithm; A = Algebraic; T = Trig; E = Exponential\n  Example: ∫x eˣ dx = x eˣ − eˣ + C\n\n4. Partial Fractions:\n  For rational functions P(x)/Q(x) where degree(P) < degree(Q)\n  Linear non-repeated: A/(x−a) + B/(x−b)\n  Linear repeated: A/(x−a) + B/(x−a)²\n  Quadratic irreducible: (Ax+B)/(x²+bx+c)\n\n5. Special Integrals:\n  ∫dx/(a²−x²) = (1/2a)ln|(a+x)/(a−x)|+C\n  ∫dx/√(a²−x²) = sin⁻¹(x/a)+C\n  ∫dx/(a²+x²) = (1/a)tan⁻¹(x/a)+C\n\nBoard focus: By parts with log/inverse trig; partial fractions are high-scoring topics.",
  },
  "probability class 12 bayes": {
    title: "Probability — Bayes Theorem (Class 12)",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Probability — Bayes Theorem (Class 12 Mathematics):\n\nConditional Probability: P(A|B) = P(A∩B)/P(B) [probability of A given B has occurred]\nMultiplication Rule: P(A∩B) = P(A) × P(B|A)\n\nTotal Probability Theorem:\n  If A₁, A₂, ..., Aₙ are exhaustive and mutually exclusive events:\n  P(B) = Σ P(Aᵢ) × P(B|Aᵢ)\n\nBayes Theorem:\n  P(Aᵢ|B) = [P(Aᵢ) × P(B|Aᵢ)] / Σ[P(Aⱼ) × P(B|Aⱼ)]\n  Used to update probability after new evidence.\n\nExample (Medical Testing):\n  Disease affects 1% of population; test is 99% accurate.\n  P(Disease) = 0.01;  P(Positive|Disease) = 0.99;  P(Positive|No Disease) = 0.02\n  P(Disease|Positive) = (0.01×0.99)/(0.01×0.99 + 0.99×0.02) ≈ 33%\n  (Even with accurate test, positive result might not mean disease due to low prevalence)\n\nIndependent Events: P(A∩B) = P(A) × P(B)\n\nBinomial Distribution B(n, p):\n  P(X = r) = C(n,r) pʳ (1−p)^(n−r)\n  Mean μ = np;  Variance σ² = np(1−p)\n\nBernoulli Trial: repeated independent experiments with 2 outcomes (success/failure)\n\nBoard focus: Bayes theorem problems with bags of balls or disease testing appear every year as 4–5 mark questions.",
  },
  "vectors class 12": {
    title: "Vector Algebra (Class 12)",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Vector Algebra (Class 12) — Detailed:\n\nTypes of vectors: zero vector, unit vector, equal, collinear, coplanar, position vector\n\nDot Product (Scalar Product): a⃗ · b⃗ = |a||b|cosθ\n  a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃\n  If perpendicular: a⃗ · b⃗ = 0;  If parallel: |a⃗ · b⃗| = |a||b|\n  |a⃗|² = a⃗ · a⃗\n\nCross Product (Vector Product): |a⃗ × b⃗| = |a||b|sinθ; direction: right-hand rule\n  a⃗ × b⃗ is perpendicular to both a⃗ and b⃗\n  a⃗ × b⃗ = |i  j  k |\n             |a₁ a₂ a₃|\n             |b₁ b₂ b₃|\n  If parallel: a⃗ × b⃗ = 0⃗\n\nGeometric applications:\n  Area of parallelogram = |a⃗ × b⃗|\n  Area of triangle = ½|a⃗ × b⃗|\n  Volume of parallelepiped = |a⃗ · (b⃗ × c⃗)| (scalar triple product)\n  Coplanar vectors: a⃗ · (b⃗ × c⃗) = 0\n\nAngle between vectors: cosθ = (a⃗ · b⃗)/(|a||b|)\n\nProjection: projection of a⃗ on b⃗ = (a⃗ · b⃗)/|b⃗|\n\nBoard focus: Find area using cross product; condition for coplanarity using scalar triple product.",
  },
  "3d geometry class 12": {
    title: "Three Dimensional Geometry (Class 12)",
    subject: "Mathematics",
    category: "Class 12",
    answer:
      "Three Dimensional Geometry (Class 12):\n\nDirection Cosines and Ratios:\n  Direction cosines (l,m,n): cosines of angles with x, y, z axes\n  l² + m² + n² = 1\n  Direction ratios (a,b,c): proportional to (l,m,n); l = a/√(a²+b²+c²) etc.\n\nEquation of a Line:\n  Through (x₁,y₁,z₁) with direction ratios (a,b,c):\n    Cartesian: (x−x₁)/a = (y−y₁)/b = (z−z₁)/c\n    Vector: r⃗ = a⃗ + λb⃗\n  Through two points: (x−x₁)/(x₂−x₁) = (y−y₁)/(y₂−y₁) = (z−z₁)/(z₂−z₁)\n\nEquation of a Plane:\n  General: ax + by + cz + d = 0; normal vector is (a,b,c)\n  Intercept form: x/a + y/b + z/c = 1\n  Vector form: (r⃗ − a⃗) · n⃗ = 0\n\nDistances:\n  Point to plane: |ax₁+by₁+cz₁+d| / √(a²+b²+c²)\n  Between parallel planes: |d₁−d₂| / √(a²+b²+c²)\n\nAngle between lines: cosθ = |a₁a₂+b₁b₂+c₁c₂| / √(Σa₁²) × √(Σa₂²)\nAngle between planes: cosθ = |n⃗₁·n⃗₂| / (|n⃗₁||n⃗₂|)\nLine perpendicular to plane: direction ratios of line = normal to plane\n\nBoard focus: Skew lines (neither parallel nor intersecting) — find shortest distance = |a⃗₂−a⃗₁)·(b⃗₁×b⃗₂)| / |b⃗₁×b⃗₂|",
  },

  // ── NEET Biology (new entries) ────────────────────────────────────────────
  "photosynthesis higher plants": {
    title: "Photosynthesis in Higher Plants",
    subject: "Biology",
    category: "NEET",
    answer:
      "Photosynthesis in Higher Plants (NEET Biology):\n\nOverall equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (requires light + chlorophyll)\n\nLight Reactions (in thylakoid membrane):\n  PS II (P680): absorbs light; photolysis of water → O₂ + H⁺ + e⁻; produces ATP\n  PS I (P700): absorbs light; reduces NADP⁺ to NADPH\n  Z scheme: electron flow from water → PS II → electron transport chain → PS I → NADPH\n  Cyclic photophosphorylation: only PS I; only ATP (no NADPH, no O₂)\n  Non-cyclic: both PS I and PS II; ATP + NADPH + O₂\n\nCalvin Cycle (Dark Reactions, in stroma):\n  Stage 1 — Carbon fixation: CO₂ + RuBP → 2 molecules of 3-PGA (by RuBisCO)\n  Stage 2 — Reduction: 3-PGA → G3P using ATP and NADPH\n  Stage 3 — Regeneration of RuBP: consumes ATP\n  Net: 3CO₂ + 9ATP + 6NADPH → 1 G3P (and hence glucose after 2 turns)\n\nC₃ vs C₄ vs CAM plants:\n  C₃ (rice, wheat): first product = 3-carbon 3-PGA; photorespiration present\n  C₄ (maize, sugarcane): first product = 4-carbon OAA; no photorespiration; bundle sheath + mesophyll cells\n  CAM (cactus, agave): stomata open at night; CO₂ stored as organic acid\n\nFactors affecting photosynthesis: light intensity, CO₂ concentration, temperature, water\nBlackman's Law: rate limited by the slowest factor (law of limiting factors)\n\nBoard focus: Distinguish PS I and PS II; C₃ vs C₄ differences; Z scheme of electron flow.",
  },
  "plant growth development": {
    title: "Plant Growth and Development",
    subject: "Biology",
    category: "NEET",
    answer:
      "Plant Growth and Development (NEET Biology):\n\nGrowth: Irreversible increase in size; meristematic activity drives it.\nGrowth curve: Sigmoid (S-shaped); phases: lag → log (exponential) → stationary → declining\nAbsolute growth rate: increase in growth per unit time\nRelative growth rate: growth per unit of original size per unit time\n\nPlant Hormones (Phytohormones):\n\n1. Auxins (IAA):\n  Produced at shoot apex; promotes cell elongation (high conc. inhibits roots)\n  Phototropism, geotropism, apical dominance, root initiation\n  Herbicide 2,4-D kills broadleaf weeds (synthetic auxin)\n\n2. Gibberellins (GA₃):\n  Produced in young leaves, embryo; promote internodal elongation\n  Bolting (elongation before flowering), seed germination, fruit growth (seedless grapes)\n\n3. Cytokinins:\n  Produced in roots; promote cell division (cytokinesis)\n  Delays senescence (leaf yellowing); promotes bud formation in tissue culture\n\n4. Abscisic Acid (ABA):\n  Stress hormone; promotes stomatal closure, seed dormancy, leaf abscission\n  Antagonistic to GA and auxin\n\n5. Ethylene:\n  Gaseous hormone; promotes ripening of fruits (banana, mango)\n  Promotes epinasty (downward bending of leaves), senescence\n  Used in commercial ripening of fruits\n\nVernalisation: cold treatment needed for flowering (wheat, carrot)\nPhotoperiodism: response to day/night length ratio for flowering\n  Short-day plants (SDP): flower when night > critical length (Chrysanthemum)\n  Long-day plants (LDP): flower when night < critical length (wheat, spinach)\n  Day-neutral plants: flower regardless of day length (sunflower, tomato)\n\nBoard focus: Functions of each phytohormone; SDP vs LDP; vernalisation definition.",
  },

  // ── JEE Mathematics (more) ─────────────────────────────────────────────────
  "sequences series": {
    title: "Sequences and Series",
    subject: "Mathematics",
    category: "JEE",
    answer:
      "Sequences and Series:\n\nAP (Arithmetic Progression):\n• General term: aₙ = a + (n-1)d\n• Sum: Sₙ = n/2 [2a + (n-1)d]\n• Arithmetic mean (AM): A = (a+b)/2\n\nGP (Geometric Progression):\n• General term: aₙ = arⁿ⁻¹\n• Sum (finite): Sₙ = a(rⁿ-1)/(r-1) for r≠1\n• Sum (infinite): S∞ = a/(1-r) for |r| < 1\n• Geometric mean (GM): G = √(ab)\n\nAGP (Arithmetico-Geometric):\n• Combine AP and GP terms\n\nAM-GM Inequality:\n• For positive numbers: AM ≥ GM\n• (a+b)/2 ≥ √(ab)\n• Equality when a = b\n\nSpecial sums:\n• Σn = n(n+1)/2\n• Σn² = n(n+1)(2n+1)/6\n• Σn³ = [n(n+1)/2]²\n\nBoard focus: Sum of GP to infinity; AM-GM applications for maxima-minima; telescoping series.",
  },
};

// Search function: finds the best matching topic from TOPIC_ANSWERS
export function searchTopics(query: string): TopicAnswer | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  // Direct key match
  if (TOPIC_ANSWERS[q]) return TOPIC_ANSWERS[q];

  // Check if query contains any key OR key contains query
  for (const key of Object.keys(TOPIC_ANSWERS)) {
    if (q.includes(key) || key.includes(q)) {
      return TOPIC_ANSWERS[key];
    }
  }

  // Check title match
  for (const key of Object.keys(TOPIC_ANSWERS)) {
    if (TOPIC_ANSWERS[key].title.toLowerCase().includes(q)) {
      return TOPIC_ANSWERS[key];
    }
  }

  // Multi-word matching: check if most key words appear in query
  for (const key of Object.keys(TOPIC_ANSWERS)) {
    const keyWords = key.split(" ").filter((w) => w.length > 2);
    const queryWords = q.split(/\s+/);
    const matchCount = keyWords.filter((kw) =>
      queryWords.some((qw) => qw.includes(kw) || kw.includes(qw)),
    ).length;
    if (keyWords.length > 0 && matchCount >= Math.min(2, keyWords.length)) {
      return TOPIC_ANSWERS[key];
    }
  }

  // Single word match (at least 3 characters)
  if (q.length >= 3) {
    for (const key of Object.keys(TOPIC_ANSWERS)) {
      const words = q.split(/\s+/);
      for (const word of words) {
        if (
          word.length >= 4 &&
          (key.includes(word) ||
            TOPIC_ANSWERS[key].title.toLowerCase().includes(word) ||
            TOPIC_ANSWERS[key].subject.toLowerCase().includes(word))
        ) {
          return TOPIC_ANSWERS[key];
        }
      }
    }
  }

  return null;
}
